// utils/passwordReset.js

const jwt = require('jsonwebtoken');

const generateResetToken = (user) => {
  const payload = {
    userId: user._id,
    // Ajoutez d'autres données pertinentes à inclure dans le jeton si nécessaire
  };

  // Générer un jeton JWT avec une expiration de 1 heure
  return jwt.sign(payload, process.env.RESET_TOKEN_SECRET, { expiresIn: '1h' });
};

const sendPasswordResetEmail = async (email, resetToken) => {
  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  // Envoyer un e-mail de réinitialisation avec le lien de réinitialisation
  // Utilisez une bibliothèque comme nodemailer pour envoyer l'e-mail
};

module.exports = { generateResetToken, sendPasswordResetEmail };
