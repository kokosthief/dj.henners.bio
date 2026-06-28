import { NextRequest, NextResponse } from 'next/server';

const MAX_FIELD_LENGTH = 4000;
const MIN_MESSAGE_LENGTH = 20;
const MIN_FORM_TIME_MS = 2500;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

const SPAM_PATTERNS = [
  /\bseo\b/i,
  /\blink\s*building\b/i,
  /\bbacklinks?\b/i,
  /\bguest\s*post\b/i,
  /\bcrypto\b/i,
  /\bcasino\b/i,
  /\bforex\b/i,
  /\binvestment\b/i,
  /\bmarketing\s+agency\b/i,
  /\brank(?:ing)?\s+(?:your|on|higher)\b/i,
  /\btraffic\b/i,
  /\bleads?\b/i,
  /\bwhatsapp\b/i,
  /\btelegram\b/i,
  /\bweb\s*design\b/i,
  /\bapp\s*development\b/i,
  /\bAI\s+automation\b/i,
  /\bdear\s+(?:sir|madam|website\s+owner)\b/i,
];

function logContactError(message: string) {
  // eslint-disable-next-line no-console
  console.error(message);
}

function logUnknownError(error: unknown) {
  // eslint-disable-next-line no-console
  console.error(error);
}

const PERSONAL_CONTACT_EMAIL = 'srrenneh@gmail.com';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
  company?: string;
  startedAt?: number;
};

type ContactFields = Required<Pick<ContactPayload, 'name' | 'email' | 'message'>>;

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

function getClientId(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const realIp = request.headers.get('x-real-ip')?.trim();
  return forwardedFor || realIp || 'unknown';
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (!origin || !host) return true;

  try {
    const originUrl = new URL(origin);
    const allowedHosts = new Set([
      host,
      'dj.srenneh.com',
      'www.dj.srenneh.com',
      'dj.henners.bio',
      'www.dj.henners.bio',
      'localhost:3000',
      '127.0.0.1:3000',
    ]);
    return allowedHosts.has(originUrl.host);
  } catch {
    return false;
  }
}

function isRateLimited(clientId: string) {
  const now = Date.now();
  const entry = rateLimit.get(clientId);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function looksLikeSpam(fields: ContactFields) {
  const combined = `${fields.name}\n${fields.email}\n${fields.message}`;
  const urlCount = (combined.match(/https?:\/\/|www\./gi) || []).length;
  const emailCount = (combined.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) || []).length;
  const spamHits = SPAM_PATTERNS.filter((pattern) => pattern.test(combined)).length;
  const mostlyLinks = urlCount >= 2;
  const tooManyEmails = emailCount > 1;

  return spamHits >= 2 || mostlyLinks || tooManyEmails;
}

function silentlyAccept() {
  return NextResponse.json({ ok: true });
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
  const to = process.env.CONTACT_TO_EMAIL || PERSONAL_CONTACT_EMAIL;
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
    if (!isAllowedOrigin(request)) {
      return silentlyAccept();
    }

    const clientId = getClientId(request);
    if (isRateLimited(clientId)) {
      return silentlyAccept();
    }

    const payload = await readPayload(request);

    // Honeypots. Real users never fill these; simple bots often do.
    if (payload.website || payload.company) {
      return silentlyAccept();
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

    if (fields.message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: 'Please add a little more context.' },
        { status: 400 }
      );
    }

    const elapsed = Date.now() - Number(payload.startedAt);
    if (!payload.startedAt || !Number.isFinite(elapsed) || elapsed < MIN_FORM_TIME_MS) {
      return silentlyAccept();
    }

    if (looksLikeSpam(fields)) {
      return silentlyAccept();
    }

    const sentEmail = await sendResend(fields);
    const sentTelegram = sentEmail ? false : await sendTelegram(fields);

    if (!sentEmail && !sentTelegram) {
      logContactError('DJ contact form is not configured: set RESEND_API_KEY + CONTACT_TO_EMAIL or CONTACT_TELEGRAM_BOT_TOKEN + CONTACT_TELEGRAM_CHAT_ID.');
      return NextResponse.json(
        { ok: false, error: 'Contact form is not configured yet. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true, delivered: sentEmail ? 'email' : 'telegram' });
  } catch (error) {
    logUnknownError(error);
    return NextResponse.json(
      { ok: false, error: 'Could not send message. Please try again later.' },
      { status: 500 }
    );
  }
}
