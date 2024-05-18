const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllReadingHistories = async () => {
  return await prisma.readingHistory.findMany();
};

const getReadingHistoryById = async (id) => {
  return await prisma.readingHistory.findUnique({ where: { id: Number(id) } });
};

const createReadingHistory = async (data) => {
  return await prisma.readingHistory.create({ data });
};

const updateReadingHistory = async (id, data) => {
  return await prisma.readingHistory.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteReadingHistory = async (id) => {
  return await prisma.readingHistory.delete({ where: { id: Number(id) } });
};

module.exports = {
  getAllReadingHistories,
  getReadingHistoryById,
  createReadingHistory,
  updateReadingHistory,
  deleteReadingHistory,
};
