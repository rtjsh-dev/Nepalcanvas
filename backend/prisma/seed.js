const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, "..", "data", "destinations.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const items = JSON.parse(raw);

  console.log("Clearing existing destinations and images...");
  await prisma.destinationImage.deleteMany();
  await prisma.destination.deleteMany();

  for (const it of items) {
    const { images = [], tips = [], best_season = [] } = it;
    const dest = await prisma.destination.create({
      data: {
        name: it.name,
        slug: it.slug,
        category: it.category,
        region: it.region,
        difficultyLevel: it.difficulty_level || null,
        altitude: it.altitude || null,
        bestSeason: Array.isArray(best_season)
          ? best_season.join(", ")
          : it.best_season || null,
        entryFee: it.entry_fee || null,
        overview: it.overview || "",
        howToGetThere: it.how_to_get_there || null,
        whatToSee: it.what_to_see || null,
        tips: Array.isArray(tips) ? tips.join("\n") : it.tips || null,
        latitude: it.latitude || null,
        longitude: it.longitude || null,
        isFeatured: !!it.is_featured,
      },
    });

    for (let i = 0; i < images.length; i++) {
      await prisma.destinationImage.create({
        data: {
          destinationId: dest.id,
          imageUrl: images[i],
          isPrimary: i === 0,
          order: i,
        },
      });
    }
  }

  console.log("Seeding contacts (none)");

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
