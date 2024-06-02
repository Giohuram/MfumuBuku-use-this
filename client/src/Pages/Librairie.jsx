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
  const [isLoading, setIsLoading] = useState(false); // Added state for loading

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    filterCategories();
  }, [filteredBooks, booksByCategory]); // Optimized dependency array

  const fetchBooks = async () => {
    setIsLoading(true); // Set loading state to true
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
      // Handle error by displaying a message to the user
    } finally {
      setIsLoading(false); // Set loading state to false
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

  const handleAddToCollection = (book) => {
    addBookToLibrary(book);
    addToMyBooks(book.id);
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
        // Display loading indicator while fetching books
        <div>Chargement des livres...</div>
      ) : (
        <div>
          {Object.keys(filteredCategories).length > 0 ? (
            Object.keys(filteredCategories).map(category => (
              <div key={category}>
                <h2 className='mt-5 ml-20 text-2xl font-semibold'>{category}</h2>
                <div className="ml-[-0px] mr-[-0px]">
                  <BookCard books={filteredCategories[category]} onAddToCollection={handleAddToCollection} />
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
