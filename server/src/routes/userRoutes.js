const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Assurez-vous que le chemin d'importation est correct

// Importez votre middleware d'authentification JWT si nécessaire
// const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');

// Route pour créer un nouvel utilisateur
router.post('/', userController.createUser);

// Route pour récupérer tous les utilisateurs
router.get('/', userController.getUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/:id', userController.getUserById);

// Route pour récupérer les informations du compte utilisateur
router.get('/user/:id/account', userController.getUserAccount);

// Route pour le téléchargement d'un avatar
router.post('/upload-avatar', userController.uploadAvatar);

module.exports = router;
