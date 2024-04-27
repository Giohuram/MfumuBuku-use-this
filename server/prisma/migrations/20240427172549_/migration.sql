/*
  Warnings:

  - You are about to drop the column `urlAudio` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `urlFile` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "urlAudio",
DROP COLUMN "urlFile";
