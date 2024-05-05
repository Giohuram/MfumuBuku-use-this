/*
  Warnings:

  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Book` table. All the data in the column will be lost.
  - Added the required column `content` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "description",
DROP COLUMN "type",
ADD COLUMN     "content" BYTEA NOT NULL;
