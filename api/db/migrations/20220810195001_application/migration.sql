-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "submitted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "offer" TEXT NOT NULL
);
