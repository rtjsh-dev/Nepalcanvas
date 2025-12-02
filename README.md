# NepalCanvas — Tourism Prototype

This repository contains a simple prototype for a Nepal tourism website.

Structure:

- `backend/` — Express API serving seeded destinations and contact endpoints
- `frontend/` — Vite + React + Tailwind frontend

Quick start (Windows / bash):

1. Start backend

```bash
cd backend
npm install
npm run dev    # or npm start
```

Backend runs on `http://localhost:4000`.

2. Start frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` (Vite default). The frontend expects the backend at `http://localhost:4000`.

Notes:

- The backend uses simple JSON files in `backend/data/` for demo data (no database required).
- This is a prototype scaffold focusing on core browsing/search features and content pages.

Next steps you might want:

- Add real DB (Postgres + Prisma) and file uploads.
- Add admin authentication and destination CRUD endpoints.
- Improve styling, add image gallery/lightbox, and interactive maps.
# Nepalcanvas
