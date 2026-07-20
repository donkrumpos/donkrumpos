import type { APIRoute } from 'astro';

// On-demand (server) route via the Cloudflare adapter. Not prerendered.
export const prerender = false;

// Sends from donkrumpos.com (verified in its own Resend account).
const FROM = 'donkrumpos.com contact <contact@donkrumpos.com>';

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const seeOther = (location: string) =>
  new Response(null, { status: 303, headers: { Location: location } });

export const POST: APIRoute = async ({ request, locals }) => {
  // Production secrets come from the Cloudflare runtime; dev falls back to .env.
  const runtimeEnv = ((locals as any)?.runtime?.env ?? {}) as Record<string, string | undefined>;
  const RESEND_API_KEY = runtimeEnv.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY;
  const CONTACT_TO_EMAIL = runtimeEnv.CONTACT_TO_EMAIL ?? import.meta.env.CONTACT_TO_EMAIL;

  const contentType = request.headers.get('content-type') ?? '';
  const isFormPost = !contentType.includes('application/json');

  let name = '';
  let email = '';
  let message = '';
  let honeypot = '';

  try {
    if (isFormPost) {
      const form = await request.formData();
      name = String(form.get('name') ?? '');
      email = String(form.get('email') ?? '');
      message = String(form.get('message') ?? '');
      honeypot = String(form.get('company') ?? '');
    } else {
      const body = await request.json();
      name = String(body.name ?? '');
      email = String(body.email ?? '');
      message = String(body.message ?? '');
      honeypot = String(body.company ?? '');
    }
  } catch {
    return json({ ok: false, error: 'Could not read the submission.' }, 400);
  }

  // Honeypot: real people leave it blank; bots fill it. Silently accept and drop.
  if (honeypot.trim() !== '') {
    return isFormPost ? seeOther('/contact/?success=true') : json({ ok: true }, 200);
  }

  name = name.trim();
  email = email.trim();
  message = message.trim();

  if (
    !name ||
    !email ||
    !message ||
    !isEmail(email) ||
    name.length > 200 ||
    message.length > 5000
  ) {
    return json({ ok: false, error: 'Please fill in every field with a valid email.' }, 422);
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    return json({ ok: false, error: 'The contact form is not configured yet.' }, 500);
  }

  const html = `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const send = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Contact form — ${name}`,
      html,
      text,
    }),
  });

  if (!send.ok) {
    return json({ ok: false, error: 'Could not send right now. Please try again shortly.' }, 502);
  }

  return isFormPost ? seeOther('/contact/?success=true') : json({ ok: true }, 200);
};
