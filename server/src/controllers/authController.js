// authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const validator = require('validator'); // Importer le module Validator


// Fonction d'inscription
const signup = async (req, res) => {
  const { username, password, email, parentName, childAge, schoolLevel, avatar } = req.body;

  try {
    // Vérifier si l'e-mail est valide
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Adresse e-mail invalide' });
    }

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(409).json({ message: 'Le nom d\'utilisateur est déjà pris' });
    }

    // Hacher le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur dans la base de données
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
        parentName,
        childAge,
        schoolLevel,
        avatar,
      },
    });

    // Générer un token JWT
    const token = jwt.sign({ id: newUser.id }, 'rhksisnsws38jdd87DJS()$#435bjdsk');

    // Envoyer la réponse avec le token
    res.status(201).json({ message: 'Inscription réussie', token });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
};

// Fonction de connexion
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }

    // Vérifier si le mot de passe est correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id }, 'rhksisnsws38jdd87DJS()$#435bjdsk');

    // Envoyer la réponse avec le token
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};

// Fonction pour récupérer les livres de l'utilisateur
const getUserBooks = async (req, res) => {
  const userId = req.user.id; // Récupérer l'ID de l'utilisateur à partir du token JWT

  try {
    // Récupérer les livres de l'utilisateur à partir de la base de données
    const userBooks = await prisma.bookUser.findMany({
      where: { userId },
      include: { book: true },
    });

    res.status(200).json({ userBooks });
  } catch (error) {
    console.error('Error fetching user books:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des livres de l\'utilisateur' });
  }
};

// Fonction pour ajouter un livre à la bibliothèque de l'utilisateur
const addToUserLibrary = async (req, res) => {
  const userId = req.user.id;
  const { bookId } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    // Vérifier si le livre existe
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) {
      return res.status(404).json({ message: 'Livre introuvable' });
    }

    // Ajouter le livre à la bibliothèque de l'utilisateur
    await prisma.bookUser.create({
      data: {
        user: { connect: { id: userId } },
        book: { connect: { id: bookId } },
      },
    });

    res.status(201).json({ message: 'Livre ajouté avec succès à la bibliothèque de l\'utilisateur' });
  } catch (error) {
    console.error('Error adding book to user library:', error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du livre à la bibliothèque de l\'utilisateur' });
  }
};

// Fonction pour supprimer un livre de la bibliothèque de l'utilisateur
const removeFromUserLibrary = async (req, res) => {
  const userId = req.user.id;
  const { bookId } = req.params;

  try {
    // Vérifier si l'utilisateur existe
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    // Vérifier si le livre existe dans la bibliothèque de l'utilisateur
    const userBook = await prisma.bookUser.findFirst({
      where: { userId: parseInt(userId), bookId: parseInt(bookId) },
    });
    if (!userBook) {
      return res.status(404).json({ message: 'Livre introuvable dans la bibliothèque de l\'utilisateur' });
    }

    // Supprimer le livre de la bibliothèque de l'utilisateur
    await prisma.bookUser.delete({ where: { id: userBook.id } });

    res.status(200).json({ message: 'Livre supprimé avec succès de la bibliothèque de l\'utilisateur' });
  } catch (error) {
    console.error('Error removing book from user library:', error);
    res.status(500).json({ error: 'Erreur lors de la suppression du livre de la bibliothèque de l\'utilisateur' });
  }
};

// Fonction pour ajouter un livre à la collection de l'utilisateur
const addBookToCollection = async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    // Vérifiez si l'utilisateur existe dans la base de données
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    // Vérifiez si le livre existe dans la base de données
    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) {
      return res.status(404).json({ message: "Livre non trouvé." });
    }

    // Ajoutez le livre à la collection de l'utilisateur
    await prisma.bookUser.create({
      data: {
        user: { connect: { id: userId } },
        book: { connect: { id: bookId } }
      }
    });

    return res.status(200).json({ message: "Livre ajouté à la collection de l'utilisateur." });
  } catch (error) {
    console.error("Error adding book to user collection:", error);
    return res.status(500).json({ message: "Une erreur est survenue lors de l'ajout du livre à la collection de l'utilisateur." });
  }
};

module.exports = { signup, login, getUserBooks, addToUserLibrary, removeFromUserLibrary, addBookToCollection, getUserBooks };