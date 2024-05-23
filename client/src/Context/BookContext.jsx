import { createContext, useState, useContext, useEffect } from 'react';
import { useUserContext } from './userContext'; // Importez useUserContext

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [myBooks, setMyBooks] = useState([]);
  const { addToMyBooks, removeFromMyBooks } = useUserContext(); // Utilisez les fonctions de UserContext

  const addBookToLibrary = (book) => {
    setMyBooks([...myBooks, book]);
    addToMyBooks(book.id); // Ajoutez le livre à la bibliothèque de l'utilisateur
  };

  const removeBookFromLibrary = (bookId) => {
    setMyBooks(myBooks.filter(book => book.id !== bookId));
    removeFromMyBooks(bookId); // Retirez le livre de la bibliothèque de l'utilisateur
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
    <BookContext.Provider value={{ myBooks, addBookToLibrary, removeBookFromLibrary, groupedBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
