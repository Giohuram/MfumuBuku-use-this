const express = require('express');
const readingHistoryController = require('../controllers/readingHistoryController');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', readingHistoryController.getAllReadingHistories);
router.get('/:id', readingHistoryController.getReadingHistoryById);
router.post('/', readingHistoryController.createReadingHistory);
router.put('/:id', readingHistoryController.updateReadingHistory);
router.delete('/:id', readingHistoryController.deleteReadingHistory);

module.exports = router;
