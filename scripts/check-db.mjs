// Quick way to see recent leads without opening the Neon console.
// Usage: DATABASE_URL=postgres://... node scripts/check-db.mjs

import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("Set DATABASE_URL before running this script.");
  process.exit(1);
}

const sql = neon(databaseUrl);
const rows = await sql`SELECT id, name, email, phone, website_type, message, created_at FROM contact_submissions ORDER BY id DESC LIMIT 20`;
console.log(JSON.stringify(rows, null, 2));
