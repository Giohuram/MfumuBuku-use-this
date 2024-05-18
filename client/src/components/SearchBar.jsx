import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Met à jour la recherche à chaque changement de terme
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm(''); // Réinitialise le terme de recherche
    onSearch(''); // Réinitialise la recherche
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="recherche"
        id="recherche"
        placeholder="Rechercher vos livres favoris"
        className='py-2 px-2 rounded outline-none w-full md:w-60'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className='bg-black mt-2 md:mt-0 ml-0 md:ml-2 px-6 py-2 text-white font-medium transition-all ease-in duration-200 rounded-md block md:inline-block'>
        Rechercher
      </button>
      {searchTerm && ( // Affiche le bouton Effacer uniquement lorsque le terme de recherche est non vide
        <button type="button" className='bg-gray-300 text-black mt-2 md:mt-0 ml-2 px-6 py-2 font-medium transition-all ease-in duration-200 rounded-md block md:inline-block' onClick={handleClear}>
          Effacer
        </button>
      )}
    </form>
  );
};

export default SearchBar;
