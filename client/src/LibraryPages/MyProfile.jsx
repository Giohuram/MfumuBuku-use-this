import React, { useState } from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';

const MyProfile = ({ username, email, schoolLevel }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [booksBought, setBooksBought] = useState(0); // Nombre de livres achetés
  const [booksReading, setBooksReading] = useState([]); // Liste des livres en cours de lecture
  const [booksRead, setBooksRead] = useState([]); // Liste des livres déjà lus

  // Fonction pour gérer le changement de photo de profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fonction pour acheter un livre
  const buyBook = () => {
    setBooksBought((prevCount) => prevCount + 1);
  };

  // Fonction pour ajouter un livre à la liste des livres en cours de lecture
  const addBookToReadingList = (book) => {
    setBooksReading((prevList) => [...prevList, book]);
  };

  // Fonction pour marquer un livre comme lu
  const markBookAsRead = (book) => {
    setBooksRead((prevList) => [...prevList, book]);
  };

  return (
    <div className="flex">
      {/* Barre de menu à gauche */}
      <LibrairieNavBar />
      {/* Contenu du profil à droite */}
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Mon Profil</h1>
        {/* Première partie: Photo de profil, nom d'utilisateur et niveau scolaire */}
        <div className="flex items-center mb-8">
          {/* Photo de profil */}
          <div className="mr-4">
            <img
              src={profileImage || '/default-profile-image.jpg'} // Utilisez l'image de profil chargée ou une image par défaut
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
          </div>
          {/* Informations utilisateur */}
          <div>
            <p className="text-xl font-semibold">{username}</p>
            <p>{schoolLevel}</p>
          </div>
        </div>
        {/* Deuxième partie: Mes activités */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mes Activités</h2>
          {/* Livres achetés */}
          <div className="mb-4">
            <p className="font-semibold">Livres achetés: {booksBought}</p>
            <button onClick={buyBook}>Acheter un livre</button>
          </div>
          {/* Livres en cours de lecture */}
          <div className="mb-4">
            <p className="font-semibold">Livres en cours de lecture: {booksReading.length}</p>
            {/* Afficher la liste des livres en cours de lecture */}
            <ul>
              {booksReading.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </div>
          {/* Livres déjà lus */}
          <div>
            <p className="font-semibold">Livres déjà lus: {booksRead.length}</p>
            {/* Afficher la liste des livres déjà lus */}
            <ul>
              {booksRead.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
