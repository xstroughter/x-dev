import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, type, message } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not set.");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  try {
    const sql = neon(databaseUrl);
    await sql`
      INSERT INTO contact_submissions (name, phone, email, website_type, message)
      VALUES (
        ${name.trim()},
        ${typeof phone === "string" ? phone.trim() || null : null},
        ${email.trim()},
        ${typeof type === "string" ? type.trim() || null : null},
        ${message.trim()}
      )
    `;
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    return NextResponse.json({ error: "Could not save your message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
