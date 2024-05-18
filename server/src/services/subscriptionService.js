const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllSubscriptions = async () => {
  return await prisma.subscription.findMany();
};

const getSubscriptionById = async (id) => {
  return await prisma.subscription.findUnique({ where: { id: Number(id) } });
};

const createSubscription = async (data) => {
  return await prisma.subscription.create({ data });
};

const updateSubscription = async (id, data) => {
  return await prisma.subscription.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteSubscription = async (id) => {
  return await prisma.subscription.delete({ where: { id: Number(id) } });
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
};
