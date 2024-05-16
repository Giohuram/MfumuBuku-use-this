const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBooksByCategory, getBookById } = require('../controllers/bookController');
const jwtAuthMiddleware = require('../middlewares/jwtAuthMiddleware');

// Route pour créer un livre
router.post('/', jwtAuthMiddleware, createBook);

// Route pour récupérer tous les livres
router.get('/', jwtAuthMiddleware, getAllBooks);

// Route pour récupérer les livres par catégorie
router.get('/category/:category', jwtAuthMiddleware, getBooksByCategory);

// Route pour récupérer un livre par son ID
router.get('/:id', jwtAuthMiddleware, getBookById);

module.exports = router;

