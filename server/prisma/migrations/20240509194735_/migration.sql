/*
  Warnings:

  - Made the column `age` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `audioContent` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "age" SET NOT NULL,
ALTER COLUMN "audioContent" SET NOT NULL;
