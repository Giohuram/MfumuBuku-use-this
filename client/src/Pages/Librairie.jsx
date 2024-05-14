import { useState, useEffect } from 'react'; 
import LibrairieNavBar from '../components/LibrairieNavBar';
import BookCard from '../SharedComponents/BookCard';
import { useBookContext } from '../Context/BookContext';
import Banner from '../SharedComponents/Banner';

const Librairie = () => {
  const { myBooks, addBookToLibrary } = useBookContext(); // Assurez-vous d'obtenir la fonction addBookToLibrary du contexte

  const [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3005/Book');
      const data = await response.json();
      setBooksByCategory(groupBooksByCategory(data));
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
    addBookToLibrary(book); // Utilisez la fonction addBookToLibrary pour ajouter un livre à la collection
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
              {/* Passez la fonction handleAddToCollection à BookCard */}
              <BookCard books={booksByCategory[category]} onAddToCollection={handleAddToCollection} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Librairie;