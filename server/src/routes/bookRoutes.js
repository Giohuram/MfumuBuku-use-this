const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBooksByCategory, getBookById, getBooksByAuthor, getBookDataById } = require('../controllers/bookController');

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/category/:category', getBooksByCategory);
router.get('/author/:author', getBooksByAuthor);
router.get('/id/:id', getBookById); // Modification du chemin pour éviter les conflits
// router.get('/id/:id/data', getBookDataById); // Utilisation d'un chemin distinct pour récupérer les données d'un livre par son ID

module.exports = router;
