// authRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');
const verifyEmailAlreadyExist = require('../middlewares/verifyEmailAlreadyExist');
const verifyUsernameAlreadyExist = require('../middlewares/verifyUsernameAlreadyExist');
const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');
const authenticateUser = require('../middlewares/authenticateUser');
const { generateResetToken, sendPasswordResetEmail } = require('../utils/passwordReset'); // Fonctions utilitaires pour la réinitialisation du mot de passe
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

router.post('/reset-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Aucun utilisateur trouvé avec cet e-mail." });
    }

    const resetToken = generateResetToken(user); // Générer le jeton de réinitialisation
    await user.save(); // Enregistrer le jeton dans la base de données

    // Envoyer l'e-mail de réinitialisation avec le lien contenant le jeton
    await sendPasswordResetEmail(user.email, resetToken);

    return res.status(200).json({ message: "Un e-mail de réinitialisation a été envoyé." });
  } catch (error) {
    console.error("Error resetting password:", error);
    return res.status(500).json({ message: "Une erreur est survenue lors de la réinitialisation du mot de passe." });
  }
});



module.exports = router;
