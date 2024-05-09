import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Editor, useDomValue } from 'reactjs-editor';
import { BookContext } from '../../SharedComponents/BookContext'; // Import your context containing book data
import styles from '../[id]/book.module.css';

export default function BookPage() {
  const { id } = useParams();
  const { books } = useContext(BookContext); // Get book data from context
  const { dom, setDom } = useDomValue();

  // Find book by ID
  const selectedBook = books.find((book) => book.id === id);

  const notify = () => toast('Your changes has been saved!!');

  const handleSave = () => {
    // Save logic
    notify();
  };

  // Effect for loading previously saved content
  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${selectedBook?.id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
  }, [selectedBook?.id, setDom]);

  if (!selectedBook) return <p>Book not found</p>;

  return (
    <motion.div
      transition={{ type: 'spring', damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.section
        transition={{ type: 'spring', damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.appBar}
      >
        {/* Application bar content */}
      </motion.section>

      {/* Display book content */}
      <Editor
        htmlContent={`
          <main className="bookContainer">
            <aside>
              <h1 className="center">${selectedBook.title}</h1>
              <span className="center small"> By ${selectedBook.author} </span>
              ${selectedBook.content}
            </aside>
          </main>
        `}
      />
      <ToastContainer />
    </motion.div>
  );
}
