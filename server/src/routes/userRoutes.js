// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');


// Route pour créer un nouvel utilisateur
router.post('/', jwtAuthMiddleware, userController.createUser);

// Route pour récupérer tous les utilisateurs
router.get('/', jwtAuthMiddleware, userController.getUsers);

// Route pour récupérer un utilisateur par son ID
router.get('/:id', jwtAuthMiddleware, userController.getUserById);

// GET route to fetch user account information
router.get('/user/:id/account', userController.getUserAccount);


module.exports = router;
