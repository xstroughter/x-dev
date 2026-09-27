// One-time setup: creates the contact_submissions table.
// Usage: DATABASE_URL=postgres://... node scripts/init-db.mjs

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("Set DATABASE_URL before running this script.");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const schema = readFileSync(path.join(__dirname, "..", "db", "schema.sql"), "utf8");

const sql = neon(databaseUrl);
await sql.query(schema);

console.log("contact_submissions table is ready.");
