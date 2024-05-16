import { useState, useEffect } from 'react';
import axios from 'axios';
import LibrairieNavBar from '../components/LibrairieNavBar';
import BookCard from '../SharedComponents/BookCard';
import { useBookContext } from '../Context/BookContext';
import Banner from '../SharedComponents/Banner';
import { UserContext } from '../Context/userContext';

const Librairie = () => {
  const { books, addBookToLibrary } = useBookContext();
  const [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem('token'); // Récupérez le jeton JWT depuis le localStorage
      const response = await axios.get('http://localhost:3005/Book', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBooksByCategory(groupBooksByCategory(response.data));
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
  };

  return (
    <div>
      <LibrairieNavBar />
      <Banner />
      
      <div>
        {Object.keys(booksByCategory).map(category => (
          <div key={category}>
            <h2 className='mt-5 ml-20 text-2xl font-semibold'>{category}</h2>
            <div className="ml-[-0px] mr-[-0px]">
              <BookCard books={booksByCategory[category]} onAddToCollection={handleAddToCollection} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Librairie;
