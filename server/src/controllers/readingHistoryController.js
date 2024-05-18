const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const readingHistoryService = require('../services/readingHistoryService');

const getAllReadingHistories = async (req, res) => {
  try {
    const histories = await readingHistoryService.getAllReadingHistories();
    res.json(histories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getReadingHistoryById = async (req, res) => {
  try {
    const history = await readingHistoryService.getReadingHistoryById(req.params.id);
    if (!history) {
      return res.status(404).json({ message: 'Reading history not found' });
    }
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createReadingHistory = async (req, res) => {
  try {
    const history = await readingHistoryService.createReadingHistory(req.body);
    res.status(201).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReadingHistory = async (req, res) => {
  try {
    const history = await readingHistoryService.updateReadingHistory(req.params.id, req.body);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteReadingHistory = async (req, res) => {
  try {
    await readingHistoryService.deleteReadingHistory(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllReadingHistories,
  getReadingHistoryById,
  createReadingHistory,
  updateReadingHistory,
  deleteReadingHistory,
};
