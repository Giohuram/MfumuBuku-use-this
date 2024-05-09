import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const LibrairieNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Librairie', path: '/Librairie' },
    { link: 'Ma Bibliothèque', path: '/MyBooks' },
  ];

  return (
    <header>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "top-0 right-0 left-0" : ""} bg-[#DC7211]`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link to="/" className={`text-white font-semibold flex items-center gap-2 ${isMenuOpen ? 'hidden' : 'block'}`}>
            <img src="/Mfumu-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            MfumuBuku Kids
          </Link>

          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link to={path} className="text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className="w-5" /></button>
          </div>

          <div>
            <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-white focus:outline-none' >
                { 
                  isMenuOpen ? <FaXmark className="h-5 w-5 text-white" /> : <FaBarsStaggered className="h-5 w-5 text-white" />
                }
              </button>
            </div> 
          </div>

          <div className={`text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium ${isMenuOpen ? 'block' : 'hidden'} md:absolute md:top-0 md:right-0 md:bottom-0 md:left-auto md:bg-[#DC7211] md:w-auto`}>
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LibrairieNavBar; 