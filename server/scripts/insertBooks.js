const fs = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addBooksFromJSON() {
  try {
    // Lire le fichier JSON
    const data = fs.readFileSync('books.json', 'utf8');
    const books = JSON.parse(data);

    // Ajouter chaque livre à la base de données
    for (const book of books) {
      await prisma.book.create({
        data: {
          title: book.title,
          author: book.author,
          description: book.description,
          // Ajoutez d'autres propriétés de livre selon votre schéma Prisma
        },
      });
    }

    console.log('Books added successfully!');
  } catch (error) {
    console.error('Error adding books:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Appeler la fonction pour importer les livres
addBooksFromJSON();
