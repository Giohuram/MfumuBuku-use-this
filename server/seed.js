// const fs = require('fs');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//   const books = [
//     {
//       title: 'Banta et la tortue qui chante',
//       author: 'contes africains',
//       // Lisez le contenu du fichier en utilisant fs.readFileSync
//       content: fs.readFileSync('prisma/Books/banta-et-la-tortue-qui-chante.epub').toString('utf-8'),
//       category: "Contes africains",
//       bookCover: "https://drive.google.com/file/d/1YUzOnfPmZeMFIqPQA0LtUvSv7VnKd9nq/view?usp=drive_link",
//       datePublished: "2024-04-27T12:00:00Z"
//     },
//     // Ajoutez d'autres livres selon vos besoins
//   ];
//   await prisma.book.createMany({
//     data: books,
//   });
// }

// main()
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
