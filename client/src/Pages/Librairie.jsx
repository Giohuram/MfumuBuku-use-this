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

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  useEffect(() => {
    filterCategories();
  }, [filteredBooks]);

  const fetchBooks = async () => {
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
    setAddedMessage('Ce livre a été ajouté avec succès');
    setTimeout(() => {
      setAddedMessage('');
    }, 3000); // Effacez le message après 3 secondes
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

  return (
    <div>
      <LibrairieNavBar />
      <Banner books={filteredBooks} setFilteredBooks={setFilteredBooks} />
      <div>
        {Object.keys(filteredCategories).length > 0 ? (
          Object.keys(filteredCategories).map(category => (
            <div key={category}>
              <h2 className='mt-5 ml-20 text-2xl font-semibold'>{category}</h2>
              <div className="ml-[-0px] mr-[-0px]">
                <BookCard books={filteredCategories[category]} onAddToCollection={handleAddToCollection} addedMessage={addedMessage} />
              </div>
            </div>
          ))
        ) : (
          <div className='mt-5 ml-20 text-2xl font-semibold'>No books available</div>
        )}
      </div>
    </div>
  );
};

export default Librairie;
