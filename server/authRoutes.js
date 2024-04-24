// authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('./authController');

// Route d'inscription
router.post('/signup', authController.signup);

// Route de connexion
router.post('/login', passport.authenticate('local', { session: false }), authController.login);

// Route deconnexion 
router.post('/logout', (req, res) => {
    req.logout(); // Utilisez la méthode `logout()` fournie par Passport pour déconnecter l'utilisateur
    res.status(200).json({ message: 'Déconnexion réussie' });
  });

module.exports = router;
