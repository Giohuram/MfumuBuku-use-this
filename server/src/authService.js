const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fonction pour l'inscription d'un nouvel utilisateur
const signup = async (username, password, email, parentName, childAge, schoolLevel, avatar) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email, 
        parentName, 
        childAge, 
        schoolLevel, 
        avatar
      },
    });
    return true; // Retourne true si l'inscription réussit
  } catch (error) {
    console.error('Error creating user:', error);
    return false; // Retourne false en cas d'erreur lors de la création de l'utilisateur
  }
};

// Fonction pour récupérer les livres d'un utilisateur par son ID
const getUserBooks = async (userId) => {
  try {
    const userBooks = await prisma.bookUser.findMany({
      where: {
        id: id,
      },
      include: {
        book: true,
      },
    });
    return userBooks;
  } catch (error) {
    console.error('Error fetching user books:', error);
    throw new Error('Could not fetch user books');
  }
};

module.exports = { signup, getUserBooks };
