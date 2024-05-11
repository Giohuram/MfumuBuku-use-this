const multer = require('multer'); // Middleware pour gérer les fichiers uploadés
const fs = require('fs');
const path = require('path');
const prisma = require('prisma'); // Importer votre instance Prisma

// Configurer le middleware multer pour gérer les uploads d'avatar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatars'); // Répertoire de destination pour enregistrer les avatars
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Nom de fichier original pour l'avatar
  }
});

const upload = multer({ storage: storage });

// Contrôleur pour gérer le téléchargement d'avatar
const uploadAvatar = async (req, res, next) => {
  try {
    const userId = req.user.id; // Récupérer l'ID de l'utilisateur à partir du token JWT
    const avatarPath = req.file.path; // Récupérer le chemin de l'avatar téléchargé

    // Mettre à jour le champ avatar dans la base de données pour l'utilisateur correspondant
    await prisma.user.update({
      where: { id: userId },
      data: {
        avatar: avatarPath // Sauvegarder le chemin de l'avatar dans la base de données
      }
    });

    res.status(200).json({ message: 'Avatar uploaded successfully.' });
  } catch (error) {
    console.error('Error uploading avatar:', error);
    res.status(500).json({ error: 'An error occurred while uploading avatar.' });
  }
};

module.exports = { upload, uploadAvatar };
