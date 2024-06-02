import React, { useState, useContext, useEffect } from 'react';
import BannerCard from '../SharedComponents/BannerCard';
import SearchBar from '../components/SearchBar';
import { UserContext } from '../Context/userContext';

const Banner = ({ books, setFilteredBooks }) => {
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [initialBooks, setInitialBooks] = useState([]);

  useEffect(() => {
    setUsername(user.username);
    setInitialBooks(books); // Sauvegarde les livres initiaux
  }, [user, books]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredBooks(initialBooks); // Réinitialise les livres avec les livres initiaux
    } else {
      const filtered = initialBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.description && book.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredBooks(filtered);
    }
  };

  return (
    <div className='px-4 lg:px-8 bg-[#DC7211]'>
      <div className='flex flex-col md:flex-row items-center md:justify-between gap-6 py-10 md:py-20'>
        <div className='w-full md:w-1/2 space-y-6 md:space-y-8'>
          <div>
            <h2 className='text-2xl md:text-4xl font-bold leading-tight text-white'>
              Salut {username ? `${username}` : ''}
            </h2>
          </div>  
          <p className='text-white text-4xl'>
           Bienvenue dans votre bibliothèque et Bonne Lecture!
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className='w-full md:w-auto mr-20'>
          <BannerCard books={books} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
