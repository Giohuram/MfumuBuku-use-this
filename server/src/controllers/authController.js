const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authService = require('../authService');

// Fonction d'inscription
const signup = async (req, res, next) => {
  try {
    const { username, password, email, parentName, childAge, schoolLevel } = req.body; // Ajout des nouveaux champs dans les données du formulaire
    const signupStatus = await authService.signup(username, password, email, parentName, childAge, schoolLevel); // Appel de la fonction de service d'authentification avec les nouveaux champs
    
    if(signupStatus) {

      res.status(201).json({ message: 'Inscription réussie.', signupStatus }); }else {

      res.status(401).json({ message: 'Le username est déjà pris' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fonction de connexion
const login = async (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      const token = jwt.sign({ id: user.id }, 'rhksisnsws38jdd87DJS()$#435bjdsk');
      return res.json({ token });
    });
  })(req, res);
};

module.exports = { signup, login };
