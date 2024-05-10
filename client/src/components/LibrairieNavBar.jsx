import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import axios from 'axios';

const LibrairieNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/auth/login'); // Remplacez '/api/user' par l'URL de votre endpoint pour récupérer les détails de l'utilisateur
        setUsername(response.data.username);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const response = await axios.post('http://localhost:3005/upload-avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Afficher un message de succès ou mettre à jour l'avatar de l'utilisateur
    } catch (error) {
      console.error('Error uploading avatar:', error);
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <header>
      <nav className={`py-4 px-4 md:px-24 ${isSticky ? "fixed top-0 right-0 left-0" : ""} bg-[#DC7211] w-full z-50`}>
        <div className='flex justify-between items-center text-base'>
          <Link to="/" className={`text-white font-semibold flex items-center gap-2 ${isMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/Mfumu-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="hidden md:block">MfumuBuku Kids</span>
          </Link>

          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-white" /> : <FaBarsStaggered className="h-5 w-5 text-white" />}
            </button>
          </div>

          <ul className={`md:flex md:space-x-12 md:items-center ${isMenuOpen ? 'flex flex-col md:flex-row md:space-x-0' : 'hidden'}`}>
            <li key="Librairie">
              <Link to="/Librairie" className="text-white hover:bg-black hover:text-[#DC7211] block px-3 py-2 rounded-md text-sm font-medium md:inline-block md:px-0 md:py-0">
               Bibliothèque
              </Link>
            </li>
            <li key="MyBooks">
              <Link to="/MyBooks" className="text-white hover:bg-black hover:text-[#DC7211] block px-3 py-2 rounded-md text-sm font-medium md:inline-block md:px-0 md:py-0">
                Ma Collection 
              </Link>
            </li>
          </ul>

          <div className="relative ml-auto md:ml-0">
            {/* Partie Profil utilisateur */}
            <div className="flex items-center gap-2 cursor-pointer md:ml-auto">
              <img src="/default-profile-pic.jpg" alt="Profile" className="h-8 w-8 rounded-full" /> {/* Image de profil par défaut */}
              <div className="text-white hidden md:block">{username}</div> {/* Nom d'utilisateur */}
              <button className="text-white md:hidden" onClick={toggleMenu}> {/* Affiche un menu déroulant pour le profil sur les appareils mobiles */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {/* Menu déroulant pour le profil */}
            <div className={`absolute top-full right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Mon Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Abonnement</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Control Parental</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Stats Lecture</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Se déconnecter</li>
                {/* Champ d'entrée pour le téléchargement de l'avatar */}
                <li className="px-4 py-2">
                  <label htmlFor="avatar" className="hover:bg-gray-100 cursor-pointer block px-4 py-2">
                    Changer d'avatar
                  </label>
                  <input type="file" id="avatar" className="hidden" onChange={handleAvatarUpload} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LibrairieNavBar;
