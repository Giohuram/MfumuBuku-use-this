const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour ajouter un livre
const createBook = async (req, res) => {
  try {
    const { title, author, content, category, datePublished, bookCover, audioContent, age, description } = req.body;
    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        content,
        category,
        datePublished,
        bookCover,
        audioContent,
        age,
        description
      }
    });
    res.json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Failed to create book' });
  }
};

// Controller pour récupérer tous les livres
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await prisma.book.findMany();
    res.json(allBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// Controller pour récupérer les livres par catégorie
const getBooksByCategory = async (req, res) => {
  const { category } = req.params; // Récupère la catégorie à partir des paramètres de l'URL
  try {
    const booksByCategory = await prisma.book.findMany({
      where: {
        category: category // Filtre les livres par catégorie
      }
    });
    res.json(booksByCategory);
  } catch (error) {
    console.error('Error fetching books by category:', error);
    res.status(500).json({ error: 'Failed to fetch books by category' });
  }
};

// Controller pour récupérer un livre par son ID
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    res.json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ error: 'Failed to fetch book by ID' });
  }
};

// Controller pour récupérer les livres par auteur
const getBooksByAuthor = async (req, res) => {
  const { author } = req.params;
  try {
    const booksByAuthor = await prisma.book.findMany({
      where: {
        author: author // Filtre les livres par auteur
      }
    });
    res.json(booksByAuthor);
  } catch (error) {
    console.error('Error fetching books by author:', error);
    res.status(500).json({ error: 'Failed to fetch books by author' });
  }
};

// Contrôleur pour récupérer les données d'un livre par son ID
const getBookDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await prisma.book.findUnique({
      where: { id: parseInt(id) }
    });
    if (!book) {
      return res.status(404).json({ message: "Livre introuvable" });
    }
    res.json(book);
  } catch (error) {
    console.error('Erreur lors de la récupération des données du livre : ', error);
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des données du livre' });
  }
};

module.exports = { createBook, getAllBooks, getBooksByCategory, getBookById, getBooksByAuthor, getBookDataById };
