const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const verifyEmailAlreadyExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: 'Email existe déjà' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyEmailAlreadyExist;
