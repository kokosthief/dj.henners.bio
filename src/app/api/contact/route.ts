import { NextRequest, NextResponse } from 'next/server';

const MAX_FIELD_LENGTH = 4000;

type ContactPayload = {
  name?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  venue?: string;
  location?: string;
  message?: string;
  website?: string;
};

function sanitize(value = '') {
  return String(value).replace(/[<>]/g, '').trim().slice(0, MAX_FIELD_LENGTH);
}

async function readPayload(request: NextRequest): Promise<ContactPayload> {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return request.json();
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries()) as ContactPayload;
}

async function sendTelegram(fields: Required<Omit<ContactPayload, 'website'>>) {
  const token = process.env.CONTACT_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.CONTACT_TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    'New DJ Henners booking inquiry',
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Event type: ${fields.eventType}`,
    `Event date: ${fields.eventDate}`,
    fields.venue ? `Venue: ${fields.venue}` : null,
    `Location: ${fields.location}`,
    '',
    fields.message || 'No extra details provided.',
  ].filter(Boolean).join('\n');

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Telegram send failed: ${response.status} ${body}`);
  }

  return true;
}

async function sendResend(fields: Required<Omit<ContactPayload, 'website'>>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'contact@henners.bio';
  if (!apiKey || !to) return false;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: fields.email,
      subject: `DJ Henners booking: ${fields.eventType} — ${fields.eventDate}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Event type: ${fields.eventType}`,
        `Event date: ${fields.eventDate}`,
        `Venue: ${fields.venue || '-'}`,
        `Location: ${fields.location}`,
        '',
        fields.message || 'No extra details provided.',
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend send failed: ${response.status} ${body}`);
  }

  return true;
}

export async function POST(request: NextRequest) {
  try {
    const payload = await readPayload(request);

    // Honeypot. Real users never fill this; simple bots often do.
    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    const fields = {
      name: sanitize(payload.name),
      email: sanitize(payload.email),
      eventType: sanitize(payload.eventType),
      eventDate: sanitize(payload.eventDate),
      venue: sanitize(payload.venue),
      location: sanitize(payload.location),
      message: sanitize(payload.message),
    };

    if (!fields.name || !fields.email || !fields.eventType || !fields.eventDate || !fields.location) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, event type, event date and location are required.' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const sentTelegram = await sendTelegram(fields);
    const sentEmail = await sendResend(fields);

    if (!sentTelegram && !sentEmail) {
      console.error('DJ contact form is not configured: set CONTACT_TELEGRAM_BOT_TOKEN + CONTACT_TELEGRAM_CHAT_ID or RESEND_API_KEY + CONTACT_TO_EMAIL.');
      return NextResponse.json(
        { ok: false, error: 'Booking form is not configured yet. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: 'Could not send booking inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
