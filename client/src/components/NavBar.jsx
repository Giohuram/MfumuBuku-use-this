import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for fixed navbar
  const navbarRef = useRef(null); // Reference for navbar element

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll events for fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      const windowScrollY = window.scrollY;
      setIsSticky(windowScrollY > 0); // Update state on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`bg-[#DC7211] p-4 ${isOpen ? 'fixed top-0 right-0 left-0' : ''} ${
        isSticky ? 'sticky top-0' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4 md:mb-0">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src="Mfumu-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-white font-semibold">Mfumu Buku Kids</span>
          </div>
        </Link>
        {/* Menu burger for mobile screens */}
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
        {/* Menu on non-mobile screens */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4">Accueil</Link>
          <a href="https://enclasserdc.com/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4" target="_blank" rel="noopener noreferrer">À propos</a>
          <a href="https://enclasserdc.com/contact/" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4" target="_blank" rel="noopener noreferrer">Contactez-nous</a>
          <Link to="/Librairie" className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium mr-4">Bibliothèque</Link>
        </div>
        {/* Login and Signup buttons */}
        <div className="hidden md:flex items-center">
          <Link to={"/login"} className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 mr-2 rounded-md text-sm font-medium">Se connecter</Link>
          <Link to="/signup" className="bg-black text-white hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">S'inscrire</Link>
        </div>
      </div>
      {/* Mobile menu */}

      {/* Menu sur les écrans mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black pb-5`}>
        <div className="text-white">
          <Link to="/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2">Accueil</Link>
          <a href="https://enclasserdc.com/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2" target="_blank" rel="noopener noreferrer">À propos</a>
          <a href="https://enclasserdc.com/contact/" className="block px-3 py-2 rounded-md text-sm font-medium mb-2" target="_blank" rel="noopener noreferrer">Contactez-nous</a>
          <Link to="/Librairie" className="block px-3 py-2 rounded-md text-sm font-medium mb-2">Bibliothèque</Link>
        </div>
         {/* Boutons de connexion et d'inscription pour les écrans mobile */}
         <div className="ml-2">
          <Link to={"/login"} className="bg-[#DC7211] text-white  hover:text-white px-3 py-2 mr-2 rounded-md text-sm font-medium">Se connecter</Link>
          <Link to="/signup" className="bg-[#DC7211] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">S'inscrire</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
