const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ajouter un livre aux favoris
exports.addFavorite = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    // Vérifier si l'utilisateur et le livre existent
    const existingUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    const existingBook = await prisma.book.findUnique({
      where: { id: parseInt(bookId) },
    });

    if (!existingUser || !existingBook) {
      return res.status(404).send({ error: 'User or book not found' });
    }

    // Ajouter le livre aux favoris de l'utilisateur
    await prisma.bookUser.create({
      data: {
        userId: parseInt(userId),
        bookId: parseInt(bookId),
      },
    });
    res.status(200).send({ message: 'Favorite added successfully' });
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).send({ error: 'Error adding favorite' });
  }
};

// Récupérer les favoris d'un utilisateur
exports.getFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    // Récupérer les favoris de l'utilisateur avec les détails des livres associés
    const favorites = await prisma.bookUser.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        book: true,
      },
    });
    res.status(200).send(favorites.map(favorite => favorite.book));
  } catch (error) {
    console.error('Error fetching favorites:', error);
    res.status(500).send({ error: 'Error fetching favorites' });
  }
};

// Supprimer un favori
exports.removeFavorite = async (req, res) => {
  const { userId, bookId } = req.params;
  try {
    // Supprimer le favori correspondant à l'utilisateur et au livre
    await prisma.bookUser.deleteMany({
      where: {
        userId: parseInt(userId),
        bookId: parseInt(bookId),
      },
    });
    res.status(200).send({ message: 'Favorite removed successfully' });
  } catch (error) {
    console.error('Error removing favorite:', error);
    res.status(500).send({ error: 'Error removing favorite' });
  }
};
