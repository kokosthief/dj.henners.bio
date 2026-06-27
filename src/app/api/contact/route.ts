import { NextRequest, NextResponse } from 'next/server';

const MAX_FIELD_LENGTH = 4000;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

type ContactFields = Required<Omit<ContactPayload, 'website'>>;

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

async function sendTelegram(fields: ContactFields) {
  const token = process.env.CONTACT_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.CONTACT_TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    'New DJ Henners website message',
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    '',
    fields.message,
  ].join('\n');

  const response = await globalThis.fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
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

async function sendResend(fields: ContactFields) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'DJ Henners <contact@henners.bio>';
  if (!apiKey || !to) return false;

  const response = await globalThis.fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: fields.email,
      subject: `DJ Henners website message from ${fields.name}`,
      text: [`Name: ${fields.name}`, `Email: ${fields.email}`, '', fields.message].join('\n'),
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
      message: sanitize(payload.message),
    };

    if (!fields.name || !fields.email || !fields.message) {
      return NextResponse.json(
        { ok: false, error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const sentEmail = await sendResend(fields);
    const sentTelegram = sentEmail ? false : await sendTelegram(fields);

    if (!sentEmail && !sentTelegram) {
      console.error('DJ contact form is not configured: set RESEND_API_KEY + CONTACT_TO_EMAIL or CONTACT_TELEGRAM_BOT_TOKEN + CONTACT_TELEGRAM_CHAT_ID.');
      return NextResponse.json(
        { ok: false, error: 'Contact form is not configured yet. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, delivered: sentEmail ? 'email' : 'telegram' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: 'Could not send message. Please try again later.' },
      { status: 500 }
    );
  }
}
