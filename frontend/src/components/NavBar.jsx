import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#DC7211] p-4">
      <div className="flex items-center justify-between">
        {/* Logo et nom de l'entreprise à gauche */}
        <div className="flex items-center">
          <img src="Mfumu-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white font-semibold">Mfumu Buku Kids</span>
        </div>
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
        {/* Options du milieu */}
        <div className={`md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white hover:bg-orange-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium">À propos</a>
          <a href="#" className="text-white hover:bg-orange-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contactez-nous</a>
        </div>
        {/* Boutons de connexion et d'inscription à droite */}
        <div className="hidden md:flex items-center">
          <button className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Se connecter</button>
          <button className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">S'inscrire</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
