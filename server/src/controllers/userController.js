// userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour créer un nouvel utilisateur
const createUser = async (req, res) => {
  const { username, password, parentName, childAge, schoolLevel, email, avatar } = req.body;

  try {
    // Créer un nouvel utilisateur dans la base de données
    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        parentName,
        childAge,
        schoolLevel,
        email,
        avatar
      },
    });
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Impossible de créer un utilisateur' });
  }
};

// Controller pour récupérer tous les utilisateurs
const getUsers = async (req, res) => {
  try {
    // Récupérer tous les utilisateurs de la base de données
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Impossible de récupérer les utilisateurs' });
  }
};

// Controller pour récupérer un utilisateur par son ID
const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    // Récupérer un utilisateur par son ID de la base de données
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Impossible de récupérer l\'utilisateur' });
  }
};


async function getUserAccount(req, res) {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        books: {
          include: {
            book: true,
          },
        },
        readingHistory: true,
        userPreferences: true,
        parentalControl: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user account:', error);
    res.status(500).json({ error: 'Could not fetch user account' });
  }
}


module.exports = { createUser, getUsers, getUserById, getUserAccount };
