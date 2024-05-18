import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { UserContext } from '../Context/userContext'; 
import axios from 'axios';

const LibrairieNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user, updateUser } = useContext(UserContext); // Accédez aux données utilisateur depuis le contexte
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleLogout = async () => {
    try {
        const response = await axios.post('http://localhost:3005/auth/logout', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Use withCredentials to include cookies
        });

        if (response.status === 200) { // Check the response status
            updateUser({
                username: '',
                email: '',
                schoolLevel: '',
                avatar: ''
            });
            navigate('/'); // Redirection vers la page d'accueil ou une autre page appropriée
        } else {
            console.error('Erreur lors de la déconnexion');
        }
    } catch (error) {
        console.error('Erreur lors de la déconnexion', error);
    }
};


  
  

  return (
    <header>
      <nav className={`py-6 px-4 md:px-24 ${isSticky ? "fixed top-0 right-0 left-0" : ""} bg-[#DC7211] w-full z-50`}>
        <div className='flex justify-between items-center text-base'>
          <div className='flex items-center'>
            <Link to="/" className={`text-white ml-[-9rem] mr-[9rem] font-semibold flex items-center gap-1 ${isMenuOpen ? 'hidden' : ''}`}>
              <img src="/Mfumu-logo.png" alt="Logo" className="h-8 w-8 ml-20" />
              <span>MfumuBuku Kids</span>
            </Link>
          </div>

          <div className='md:hidden ml-[9rem] '>
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-white" /> : <FaBarsStaggered className="h-5 w-5 text-white" />}
            </button>
          </div>

          <div className="flex items-center justify-between w-full">
            {/* Menu pour les appareils mobiles */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col text-white bg-[#DC7211] absolute top-14 right-0 left-0 z-50 mb-5 pl-3 ml-56 mt-6">
                <li>
                  <Link to="/Librairie" className="block py-2 px-4 hover:bg-black hover:text-[#DC7211]">Bibliothèque</Link>
                </li>
                <li>
                  <Link to="/MonCompte" className="block py-2 px-4 hover:bg-black hover:text-[#DC7211]">Mon Compte</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="block py-2 px-4 hover:bg-black hover:text-[#DC7211]">Déconnexion</button>
                </li>
              </ul>
            </div>

            {/* Avatar et informations de l'utilisateur pour les appareils mobiles */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
              <div className="flex items-center mr-[10rem]">
                <img src={user.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                <div className="ml-2">
                  <div className="text-white">{user.username}</div>
                  <div className="text-gray-300 text-sm">{user.schoolLevel}</div>
                </div>
              </div>
            </div>

            {/* Menu et Avatar pour les écrans non mobiles */}
            <div className="hidden md:flex items-center ml-[11rem]">
              <ul className={`md:flex md:space-x-12 md:items-center ${isMenuOpen ? 'flex flex-col md:flex-row md:space-x-0' : ''}`}>
                <li key="Librairie">
                  <Link to="/Librairie" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">
                    Bibliothèque
                  </Link>
                </li>
                <li key="MonCompte">
                  <Link to="/MonCompte" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">
                    Mon Compte
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">
                    Déconnexion
                  </button>
                </li>
              </ul>
            </div>
               {/* Avatar et informations de l'utilisateur pour les écrans non mobiles */}
            <div className="flex items-center ml-[10rem] mr-[5rem]">
                <img src={user.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                <div className="ml-2">
                  <div className="text-white">{user.username}</div>
                  <div className="text-white">{user.schoolLevel}</div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LibrairieNavBar;
