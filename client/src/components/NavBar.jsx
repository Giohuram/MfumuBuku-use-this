import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-[#DC7211] p-4 ${isOpen ? 'fixed top-0 right-0 left-0' : ''}`}>
      <div className="flex items-center justify-between mb-4 md:mb-0">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
              <img src="Mfumu-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="text-white font-semibold">Mfumu Buku Kids</span>
          </div>
        </Link>
        {/* Menu burger pour les écrans de taille mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        {/* Menu sur les écrans non mobile */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4">Accueil</Link>
          <a href="https://enclasserdc.com/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4" target="_blank" rel="noopener noreferrer">À propos</a>
          <a href="https://enclasserdc.com/contact/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4" target="_blank" rel="noopener noreferrer">Contactez-nous</a>
          <Link to="/Librairie" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4">Bibliothèque</Link>
        </div>
        {/* Boutons de connexion et d'inscription */}
        <div className="hidden md:flex items-center">
          <Link to={"/login"} className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 mr-2 rounded-md text-sm font-medium">Se connecter</Link>
          <Link to="/signup" className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">S'inscrire</Link>
        </div>
      </div>
      {/* Menu sur les écrans mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-white">
          <Link to="/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2">Accueil</Link>
          <a href="https://enclasserdc.com/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2" target="_blank" rel="noopener noreferrer">À propos</a>
          <a href="https://enclasserdc.com/contact/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2" target="_blank" rel="noopener noreferrer">Contactez-nous</a>
          <Link to="/Librairie" className="block px-3 py-2 rounded-md text-sm font-medium mb-2">Bibliothèque</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
