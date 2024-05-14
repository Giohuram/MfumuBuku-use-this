const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller function to handle user creation
async function createUser(req, res) {
  const { username, password, parentName, childAge, schoolLevel, email, avatar } = req.body;

  try {
    const user = await prisma.user.create({
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
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
}

// Controller function to handle fetching all users
async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Could not fetch users' });
  }
}

// Controller function to handle fetching a single user by ID
async function getUserById(req, res) {
  const userId = parseInt(req.params.userId);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Could not fetch user' });
  }
}

// Controller function to handle fetching favorite books of a user by ID
async function getUserFavorites(req, res) {
  const userId = parseInt(req.params.userId);

  try {
    const favorites = await prisma.bookUser.findMany({
      where: { userId },
      include: { book: true },
    });
    res.status(200).json(favorites.map((fav) => fav.book));
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    res.status(500).json({ error: 'Could not fetch user favorites' });
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserFavorites,
};
