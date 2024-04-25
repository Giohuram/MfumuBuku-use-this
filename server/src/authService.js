// authService.js

const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fonction d'inscription
const signup = async (username, password, email, parentName, childAge, schoolLevel) => {
  const hashedPassword = await bcrypt.hash(password, 10); try {
    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email: email, // Ajoutez le champ email
        parentName: parentName, // Ajoutez le champ parentName
        childAge: childAge, // Ajoutez le champ childAge
        schoolLevel: schoolLevel // Ajoutez le champ schoolLevel
      },
    });
    return true
  } catch (error) {
    console.log({error});
    return false
  }
};

module.exports = { signup };
