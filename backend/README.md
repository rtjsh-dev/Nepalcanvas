# Tourism Backend (Prototype)

Simple Express API serving seeded destination data for the Tech for Nepal tourism prototype.

Endpoints:

- `GET /api/destinations` - list all destinations, supports query `q`, `category`, `region`
- `GET /api/destinations/featured` - featured destinations
- `GET /api/destinations/:slug` - get single destination
- `POST /api/contact` - submit contact form
- `GET /api/admin/contacts` - list contact submissions (no auth in prototype)

Run:

```bash
cd backend
npm install
npm run dev    # requires nodemon (dev)
# or
npm start
```

The server runs on port 4000 by default.

Prisma / SQLite (local DB):

1. Install dependencies in `backend` (adds Prisma and @prisma/client):

```bash
cd backend
npm install
```

2. Generate Prisma client and apply migration (creates `dev.db`):

```bash
npx prisma generate
npx prisma migrate dev --name init
```

3. Seed the database from the `data/destinations.json` file:

```bash
npm run prisma:seed
```

After this the API endpoints will read from the SQLite DB instead of JSON files.
