import { createContext, useState, useContext, useEffect } from 'react';

// Créez un contexte pour stocker les livres ajoutés à la bibliothèque
const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [myBooks, setMyBooks] = useState([]);

  const addBookToLibrary = (book) => {
    setMyBooks([...myBooks, book]);
  };

  // Fonction pour regrouper les livres par catégorie
  const groupBooksByCategory = (books) => {
    const groupedBooks = {};
    books.forEach(book => {
      if (!groupedBooks[book.category]) {
        groupedBooks[book.category] = [];
      }
      groupedBooks[book.category].push(book);
    });
    return groupedBooks;
  };

  // État pour stocker les livres regroupés par catégorie
  const [groupedBooks, setGroupedBooks] = useState(groupBooksByCategory([]));

  // Mettre à jour les livres regroupés chaque fois que myBooks change
  useEffect(() => {
    setGroupedBooks(groupBooksByCategory(myBooks));
  }, [myBooks]);

  return (
    <BookContext.Provider value={{ myBooks, addBookToLibrary, groupedBooks }}>
      {children}
    </BookContext.Provider>
  );
};

// Utilisez un hook personnalisé pour accéder au contexte
export const useBookContext = () => {
  return useContext(BookContext);
};

