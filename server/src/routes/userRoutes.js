const express = require('express');
const router = express.Router();
const userController = require('./userController');

// POST route to create a new user
router.post('/users', userController.createUser);

// GET route to fetch all users
router.get('/users', userController.getUsers);

module.exports = router;
