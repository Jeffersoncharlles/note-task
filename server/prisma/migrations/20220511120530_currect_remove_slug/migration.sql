/*
  Warnings:

  - You are about to drop the column `slug` on the `notes` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "notes_slug_key";

-- AlterTable
ALTER TABLE "notes" DROP COLUMN "slug";
