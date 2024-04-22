// authController.js

const passport = require('passport');
// const User = require('../models/User');

const signup = (req, res, next) => {
  passport.authenticate('signup', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(400).json({ error: 'L\'utilisateur existe déjà ou les informations d\'inscription sont invalides.' });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(201).json({ message: 'Inscription réussie.', user });
    });
  })(req, res, next);
};

const login = (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!user) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      return res.status(200).json({ message: 'Connexion réussie.', user });
    });
  })(req, res, next);
};

const logout = (req, res) => {
    req.logout(); // Déconnexion de l'utilisateur
    res.status(200).json({ message: 'Déconnexion réussie.' });
  };

module.exports = { signup, login, logout };

