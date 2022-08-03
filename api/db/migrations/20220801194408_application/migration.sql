/*
  Warnings:

  - You are about to drop the column `body` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Application` table. All the data in the column will be lost.
  - Added the required column `notes` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offer` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "submitted" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "offer" TEXT NOT NULL
);
INSERT INTO "new_Application" ("id") SELECT "id" FROM "Application";
DROP TABLE "Application";
ALTER TABLE "new_Application" RENAME TO "Application";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
