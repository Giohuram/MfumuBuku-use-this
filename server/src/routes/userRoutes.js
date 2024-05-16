// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour créer un nouvel utilisateur
router.post('/', userController.createUser);

// Route pour récupérer tous les utilisateurs
router.get('/', userController.getUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/:id', userController.getUserById);

// Route pour récupérer les livres favoris d'un utilisateur par son ID
router.get('/:id/favorites', userController.getUserFavorites);

// Route pour ajouter un livre aux favoris d'un utilisateur
router.post('/:id/favorites', userController.addFavoriteBook);

module.exports = router;
