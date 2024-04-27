/*
  Warnings:

  - Added the required column `isAdmin` to the `UserAdmin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAdmin" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL;
