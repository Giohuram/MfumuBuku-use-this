const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const verifyUsernameAlreadyExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      return res.status(400).json({ message: 'lutilisateur existe déjà' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyUsernameAlreadyExist;
