const express = require('express');
const { pay, webhook } = require('../controllers/paymentController');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/pay', pay);
router.post('/webhook', webhook);

module.exports = router;
