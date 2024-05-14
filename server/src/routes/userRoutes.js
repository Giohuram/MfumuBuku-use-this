const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route to create a new user
router.post('/User', userController.createUser);

// GET route to fetch all users
router.get('/User', userController.getUsers);

// GET route to fetch a single user by ID
router.get('/:id', userController.getUserById);

// GET route to fetch favorite books of a user by ID
router.get('/:id/favorites', userController.getUserFavorites);

// POST route to add a favorite book to a user
router.post('/:id/favorites', userController.addFavoriteBook);

module.exports = router;
