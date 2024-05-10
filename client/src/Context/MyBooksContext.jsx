// MyBooksContext.js
import { createContext, useContext, useState } from 'react';

const MyBooksContext = createContext();

export const MyBooksProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const addBookToMyBooks = (book) => {
    setSelectedBooks(prevBooks => [...prevBooks, book]);
  };

  const removeBookFromMyBooks = (bookId) => {
    setSelectedBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
  };

  return (
    <MyBooksContext.Provider value={{ selectedBooks, addBookToMyBooks, removeBookFromMyBooks }}>
      {children}
    </MyBooksContext.Provider>
  );
};

export const useMyBooksContext = () => useContext(MyBooksContext);
