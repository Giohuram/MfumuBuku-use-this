const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller function to handle user creation
async function createUser(req, res) {
  const { username, password, parentName, childAge, schoolLevel, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        parentName,
        childAge,
        schoolLevel,
        email,
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

module.exports = {
  createUser,
  getUsers,
};
