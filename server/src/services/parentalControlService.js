const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllParentalControls = async () => {
  return await prisma.parentalControl.findMany();
};

const getParentalControlById = async (id) => {
  return await prisma.parentalControl.findUnique({ where: { id: Number(id) } });
};

const createParentalControl = async (data) => {
  return await prisma.parentalControl.create({ data });
};

const updateParentalControl = async (id, data) => {
  return await prisma.parentalControl.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteParentalControl = async (id) => {
  return await prisma.parentalControl.delete({ where: { id: Number(id) } });
};

module.exports = {
  getAllParentalControls,
  getParentalControlById,
  createParentalControl,
  updateParentalControl,
  deleteParentalControl,
};
