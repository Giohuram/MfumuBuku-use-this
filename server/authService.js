const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const signup = async (username, password) => {
  try {
    // Hacher le mot de passe avant de l'enregistrer dans la base de données
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Créer un nouvel utilisateur dans la base de données
    await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    return { success: true, message: 'Inscription réussie.' };
  } catch (error) {
    // Gérer les erreurs en cas d'échec de l'inscription
    return { success: false, error: error.message };
  }
};

const getUsers = async () => {
  try {
    // Récupérer la liste des utilisateurs depuis la base de données
    const users = await prisma.user.findMany();
    return { success: true, users };
  } catch (error) {
    // Gérer les erreurs en cas d'échec de récupération des utilisateurs
    return { success: false, error: error.message };
  }
};

module.exports = { signup, getUsers };
