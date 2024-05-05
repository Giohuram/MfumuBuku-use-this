// BookContext.jsx
import React, { createContext, useState, useContext } from 'react';

export const BookContext = createContext(); // Renommez l'export ici

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
