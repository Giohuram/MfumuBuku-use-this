// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('./authController');

// Endpoint pour l'inscription
router.post('/signup', authController.signup);

// Endpoint pour la connexion
router.post('/login', authController.login);

// Endpoint pour la déconnexion
router.get('/logout', authController.logout);

module.exports = router;

