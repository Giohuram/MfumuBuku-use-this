/*
  Warnings:

  - You are about to drop the `UserPreferences` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `preferredCategory` to the `ReadingHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readingLevel` to the `ReadingHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReadingHistory" ADD COLUMN     "preferredCategory" TEXT NOT NULL,
ADD COLUMN     "readingLevel" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserPreferences";
