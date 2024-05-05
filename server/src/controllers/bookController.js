// controllers/books.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour ajouter un livre
const createBook = async (req, res) => {
  try {
    const { title, author, content, category, datePublished, bookCover } = req.body;
    const newBook = await prisma.book.create({
      data: {
        title,
        author,
        content,
        category,
        datePublished,
        bookCover
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

module.exports = { createBook, getAllBooks };
