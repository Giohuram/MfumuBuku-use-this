// bookController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour créer un livre
const createBook = async (req, res) => {
  const { title, author, content, category, datePublished, bookCover, audioContent, age, description } = req.body;

  try {
    // Créer un nouveau livre dans la base de données
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
      },
    });
    
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Échec de la création du livre' });
  }
};

// Controller pour récupérer tous les livres
const getAllBooks = async (req, res) => {
  try {
    // Récupérer tous les livres de la base de données
    const allBooks = await prisma.book.findMany();
    res.json(allBooks);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Échec de la récupération des livres' });
  }
};

// Controller pour récupérer les livres par catégorie
const getBooksByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    // Récupérer les livres par catégorie de la base de données
    const booksByCategory = await prisma.book.findMany({
      where: { category }
    });
    
    res.json(booksByCategory);
  } catch (error) {
    console.error('Error fetching books by category:', error);
    res.status(500).json({ error: 'Échec de la récupération des livres par catégorie' });
  }
};

// Controller pour récupérer un livre par son ID
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    // Récupérer un livre par son ID de la base de données
    const book = await prisma.book.findUnique({
      where: { id: parseInt(id) }
    });
    
    res.json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    res.status(500).json({ error: 'Échec de la récupération du livre par ID' });
  }
};

module.exports = { createBook, getAllBooks, getBooksByCategory, getBookById };
