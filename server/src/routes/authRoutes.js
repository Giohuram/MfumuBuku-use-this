// authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const verifyEmailAlreadyExist = require('../middlewares/verifyEmailAlreadyExist');
const verifyUsernameAlreadyExist = require('../middlewares/verifyUsernameAlreadyExist');
const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');
const authenticateUser = require('../middlewares/authenticateUser');

// Route d'inscription 
router.post('/signup', verifyEmailAlreadyExist, verifyUsernameAlreadyExist, authController.signup);

// Route de connexion
router.post('/login', passport.authenticate('local', { session: false }), authenticateUser,authController.login);

// Route de déconnexion
router.post('/logout', (req, res, next) => {
  req.logout(function(err) {
      if (err) { 
          return next(err);  // Use next() to handle the error properly
      }
      res.status(200).json({ message: 'Déconnexion réussie' });  // Send the response once
  });
});



// Route de récupération des livres de l'utilisateur
router.get('/user/books', jwtAuthMiddleware, authController.getUserBooks);



module.exports = router;
