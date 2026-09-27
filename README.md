# X Dev

Studio pitch site: home page + `/contact`, with a lead form backed by Neon Postgres.

## Development

```bash
npm run dev
```

Requires a `DATABASE_URL` env var pointing at the Neon database (see `.env.example`).

## Database scripts

```bash
DATABASE_URL=... node scripts/init-db.mjs    # one-time: creates contact_submissions table
DATABASE_URL=... node scripts/check-db.mjs   # list recent leads
```

## Deploy

Pushes to `master` auto-deploy to Vercel (x-web-dev/x-dev).
