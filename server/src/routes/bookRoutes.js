// routes/books.js
const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBooksByCategory } = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getAllBooks);
// Nouvelle route pour récupérer les livres par catégorie
router.get('/category/:category', getBooksByCategory);


module.exports = router;

