// BookContext.jsx
import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; 
import mockData from '../Content/mockData'; 

export const BookContext = createContext(); // Renommez l'export ici

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(mockData);
  if (!books) {
    // Render a placeholder or error message if books data is not available
    return <div>Error: Books data is unavailable.</div>;
  }

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify children as a required node
};

export const useBookContext = () => {
  return useContext(BookContext);
};
