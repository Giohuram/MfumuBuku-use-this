import React, { useState, useContext, useEffect } from 'react';
import BannerCard from '../SharedComponents/BannerCard';
import SearchBar from '../components/SearchBar'; // Import du composant SearchBar
import { UserContext } from '../Context/userContext'; // Adaptation de l'importation du contexte utilisateur

const Banner = ({ books }) => {
  // État local pour stocker le nom d'utilisateur
  const [username, setUsername] = useState('');

  // Utilisation du contexte utilisateur
  const { user } = useContext(UserContext);

  // Fonction pour gérer la connexion de l'utilisateur
  const handleLogin = () => {
    setUsername(user.username); // Mettre à jour le nom d'utilisateur dans l'état local
  };

  // Suppose que vous avez une fonction handleLogin qui sera appelée lorsque l'utilisateur se connecte
  useEffect(() => {
    handleLogin();
  }, [user]);

  return (
    <div className='px-4 lg:px-8 bg-[#DC7211]'>
      <div className='flex flex-col md:flex-row items-center md:justify-between gap-6 py-10 md:py-20'>
        {/* Left side content */}
        <div className='w-full md:w-1/2 space-y-6 md:space-y-8'>
          {/* Utilisation du nom d'utilisateur dans le titre */}
         <div>
            <h2 className='text-2xl md:text-4xl font-bold leading-tight text-white'>
              Salut {username ? `${username}` : ''},
            </h2>
          </div>  
          <p className='text-white'>
            Nous sommes ravis de vous accueillir à nouveau parmi nous. Êtes-vous prêts à plonger dans un monde plein d'aventures ? Laissez-vous emporter par les récits merveilleux qui nourriront votre imagination et votre créativité.<br/>
            <span>Bonne lecture !</span>
          </p>
          {/* Utilisation du composant SearchBar avec la fonction de recherche gérée */}
          <SearchBar />
        </div>

        {/* Right side content */}
        <div className='w-full md:w-auto mr-20'>
          <BannerCard books={books} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
