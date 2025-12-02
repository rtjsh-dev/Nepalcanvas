const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(morgan("dev"));
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Helper to build Prisma where filters
function buildFilters(q, category, region) {
  const where = {};
  const and = [];
  if (q) {
    and.push({
      OR: [{ name: { contains: q } }, { overview: { contains: q } }],
    });
  }
  if (category && category !== "All") {
    and.push({ category });
  }
  if (region && region !== "All") {
    and.push({ region });
  }
  if (and.length) where.AND = and;
  return where;
}

app.get("/api/destinations", async (req, res) => {
  try {
    const q = req.query.q || "";
    const category = req.query.category || "All";
    const region = req.query.region || "All";
    const where = buildFilters(q, category, region);
    const destinations = await prisma.destination.findMany({
      where,
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(destinations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/destinations/featured", async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({
      where: { isFeatured: true },
      include: { images: true },
    });
    res.json(destinations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/destinations/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const dest = await prisma.destination.findUnique({
      where: { slug },
      include: { images: true },
    });
    if (!dest) return res.status(404).json({ error: "Destination not found" });
    res.json(dest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const entry = await prisma.contact.create({
      data: { name, email, subject: subject || "General Inquiry", message },
    });
    res.json({ ok: true, entry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/admin/contacts", async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.delete("/api/admin/contacts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.contact.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
