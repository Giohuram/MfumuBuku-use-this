import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import LibrairieNavBar from '../components/LibrairieNavBar';
import BookCard from '../SharedComponents/BookCard';
import { useBookContext } from '../Context/BookContext';
import Banner from '../SharedComponents/Banner';
import { UserContext } from '../Context/userContext';

const Librairie = () => {
  const { books, addBookToLibrary } = useBookContext();
  const [booksByCategory, setBooksByCategory] = useState({});
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState({});
  const { addToMyBooks } = useContext(UserContext);
  const [addedMessage, setAddedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    filterCategories();
  }, [filteredBooks, booksByCategory]);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://mfumubuku-kids.onrender.com/Book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const groupedBooks = groupBooksByCategory(response.data);
      setBooksByCategory(groupedBooks);
      setFilteredBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setErrorMessage('Erreur lors de la récupération des livres. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleAddToCollection = async (book) => {
    try {
      addBookToLibrary(book);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://mfumubuku-kids.onrender.com/UserBooks', {
        bookId: book.id
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        addToMyBooks(book.id);
        setAddedMessage('Ce livre a été ajouté avec succès');
        setTimeout(() => {
          setAddedMessage('');
        }, 3000);
      } else {
        throw new Error('Failed to add book to collection');
      }
    } catch (error) {
      console.error('Error adding book to collection:', error);
      setErrorMessage('Erreur lors de l\'ajout du livre à votre collection. Veuillez réessayer.');
    }
  };

  const filterCategories = () => {
    const newFilteredCategories = {};
    for (const category in booksByCategory) {
      const filteredBooksInCategory = booksByCategory[category].filter(book =>
        filteredBooks.some(filteredBook => filteredBook.id === book.id)
      );
      if (filteredBooksInCategory.length > 0) {
        newFilteredCategories[category] = filteredBooksInCategory;
      }
    }
    setFilteredCategories(newFilteredCategories);
  };

  const displayNoBooksMessage = () => (
    <div className='mt-5 ml-20 text-2xl font-semibold'>No books available</div>
  );

  return (
    <div>
      <LibrairieNavBar />
      <Banner books={filteredBooks} setFilteredBooks={setFilteredBooks} />
      {isLoading ? (
        <div>Chargement des livres...</div>
      ) : (
        <div>
          {errorMessage && <div className='mt-5 ml-20 text-2xl font-semibold text-red-600'>{errorMessage}</div>}
          {Object.keys(filteredCategories).length > 0 ? (
            Object.keys(filteredCategories).map(category => (
              <div key={category}>
                <h2 className='mt-5 ml-20 text-2xl font-semibold'>{category}</h2>
                <div className="ml-[-0px] mr-[-0px]">
                  <BookCard books={filteredCategories[category]} addedMessage={addedMessage} onAddToCollection={handleAddToCollection} />
                </div>
              </div>
            ))
          ) : (
            displayNoBooksMessage()
          )}
        </div>
      )}
    </div>
  );
};

export default Librairie;
