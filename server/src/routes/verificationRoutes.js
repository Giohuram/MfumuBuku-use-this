// routes/verificationRoutes.js

const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// Route pour la vérification de l'e-mail
router.get('/verify', verificationController.verifyEmail);

module.exports = router;
