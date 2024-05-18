// routes/verificationRoutes.js

const express = require('express');
const router = express.Router();
const verificationController = require('../controllers/verificationController');

// Route pour la vérification de l'e-mail
router.get('/verify', verificationController.verifyEmail);
router.get('/verify-email/:token', async (req, res) => {
    const token = req.params.token;
  
    try {
      // Vérifier le token de validation
      const decodedToken = jwt.verify(token, 'your-secret-key');
  
      // Mettre à jour la base de données pour marquer l'email comme vérifié
      await prisma.user.update({
        where: { id: decodedToken.userId },
        data: { verified: true }
      });
  
      // Redirection vers une page de confirmation
      res.redirect('/email-verified');
    } catch (error) {
      console.error('Error verifying email:', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de la validation de l\'adresse e-mail.' });
    }
  });

module.exports = router;
