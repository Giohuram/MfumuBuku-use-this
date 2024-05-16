// bookRoutes.js

const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBooksByCategory, getBookById } = require('../controllers/bookController');

// Route pour créer un livre
router.post('/', createBook);

// Route pour récupérer tous les livres
router.get('/', getAllBooks);

// Route pour récupérer les livres par catégorie
router.get('/category/:category', getBooksByCategory);

// Route pour récupérer un livre par son ID
router.get('/:id', getBookById);

module.exports = router;
