const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const authController = require('../controllers/authController');

const authenticateUser = async (req, res, next) => {
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
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);

    // Attacher l'utilisateur au corps de la requête pour y accéder ultérieurement
    req.user = user;

    // Passer à la prochaine étape du middleware
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(500).json({ error: 'Erreur lors de l\'authentification' });
  }
};

module.exports = authenticateUser;
