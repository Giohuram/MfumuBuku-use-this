import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour gérer le changement dans la barre de recherche
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction pour soumettre la recherche
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    onSearch(searchTerm); // Appelle la fonction de recherche fournie avec le terme de recherche actuel
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
    </form>
  );
};

export default SearchBar;
