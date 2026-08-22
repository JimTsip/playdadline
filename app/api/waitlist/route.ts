import { env } from 'cloudflare:workers';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedOrigins = new Set([
  'http://playdadline.com',
  'https://playdadline.com',
]);

function corsHeaders(request: Request) {
  const origin = request.headers.get('origin');
  return {
    'Access-Control-Allow-Origin': origin && allowedOrigins.has(origin) ? origin : 'https://playdadline.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

export async function OPTIONS(request: Request) {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
}

export async function POST(request: Request) {
  let body: { email?: unknown };
  try {
    body = (await request.json()) as { email?: unknown };
  } catch {
    return Response.json({ message: 'Please enter a valid email.' }, { status: 400, headers: corsHeaders(request) });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!emailPattern.test(email) || email.length > 254) {
    return Response.json({ message: 'Please enter a valid email.' }, { status: 400, headers: corsHeaders(request) });
  }

  const db = env.DB;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS waitlist_signups (
      id TEXT PRIMARY KEY NOT NULL,
      email TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'landing',
      created_at TEXT NOT NULL
    )`),
    db.prepare('CREATE UNIQUE INDEX IF NOT EXISTS idx_waitlist_signups_email ON waitlist_signups(email)'),
  ]);

  const result = await db
    .prepare('INSERT OR IGNORE INTO waitlist_signups (id, email, source, created_at) VALUES (?, ?, ?, ?)')
    .bind(crypto.randomUUID(), email, 'playdadline.com', new Date().toISOString())
    .run();

  return Response.json({
    message: result.meta.changes === 0
      ? 'You are already on the TestFlight tester list!'
      : 'You are on the TestFlight list. Invite incoming!',
  }, { headers: corsHeaders(request) });
}
