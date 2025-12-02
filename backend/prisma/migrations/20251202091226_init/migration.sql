-- CreateTable
CREATE TABLE "Destination" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "difficultyLevel" TEXT,
    "altitude" INTEGER,
    "bestSeason" TEXT,
    "entryFee" TEXT,
    "overview" TEXT NOT NULL,
    "howToGetThere" TEXT,
    "whatToSee" TEXT,
    "tips" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "DestinationImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "destinationId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "DestinationImage_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");
