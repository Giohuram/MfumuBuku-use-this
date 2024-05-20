const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Charger les variables d'environnement


          
cloudinary.config({ 
  cloud_name: cloud_name, 
  api_key: api_key, 
  api_secret: api_secret,
  secure: true 
});

// const images = [
//   'images/Banta.png',
//   'images/lion-devint-roi.png',
//   'images/anes-apparurent-haïti.png',
//   'images/orphelin.png',
//   'images/La-jeune-femme.png',
//   'images/Janot-cuisinier.png',
//   'images/elephnat-herisson.png',
//   'images/Golo.png',
//   'images/Fari-ânesse.png'
// ]; 

// (async function run(){
//     for (const image of images) {
//         try {
//             const result = await cloudinary.uploader.upload(image); 
//             console.log(result.secure_url);
//         } catch (error) {
//             console.error('Une erreur s\'est produite lors du téléchargement de l\'image :', error);
//         }
//     }
// })();

const epubBooks = [
    'Books/la-jeune-femme-la-tourterelle-et-le-vieux-caiman.epub',
  ]; 

(async function run(){
    for (const Books of epubBooks) {
        try {
            const result = await cloudinary.uploader.upload(Books); 
            console.log(result.secure_url);
        } catch (error) {
            console.error('Une erreur s\'est produite lors du téléchargement de l\'image :', error);
        }
    }
})();
