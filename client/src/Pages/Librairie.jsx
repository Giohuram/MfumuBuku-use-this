import React, { useState, useEffect } from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';
import BookCard from '../SharedComponents/BookCard';

const Librairie = () => {
  const [booksByCategory, setBooksByCategory] = useState([]);

  useEffect(() => {
    // Fetch books from backend
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      // Send request to backend to fetch books
      const response = await fetch('http://localhost:3005/Book');
      const data = await response.json();
      console.log(data); // Afficher les données renvoyées dans la console
      setBooksByCategory(groupBooksByCategory(data));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const groupBooksByCategory = (books) => {
    // Group books by category
    const groupedBooks = {};
    books.forEach(book => {
      if (!groupedBooks[book.category]) {
        groupedBooks[book.category] = [];
      }
      groupedBooks[book.category].push(book);
    });
    return groupedBooks;
  };

  return (
    <div>
      <LibrairieNavBar />
      <div>
        {/* Display books under each category */}
        {Object.keys(booksByCategory).map(category => (
          <div key={category}>
            <h2 className='mt-5 ml-40 text-2xl font-semibold'>{category}</h2>
            <div className="ml-[-0px] mr-[-0px]">
              <BookCard books={booksByCategory[category]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Librairie;
