// controllers/verificationController.js

const verifyEmail = (req, res) => {
    const { code } = req.query;
    const user = users.find(user => user.verificationCode === code);
  
    if (!user) {
      return res.status(404).json({ error: 'Code de vérification invalide' });
    }
  
    // Marque l'e-mail comme vérifié
    user.verified = true;
  
    res.status(200).json({ message: 'Adresse e-mail vérifiée avec succès' });
  };
  
  module.exports = { verifyEmail };
  