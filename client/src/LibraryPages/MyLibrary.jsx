// MyLibrary.js

import React, { useContext } from 'react';
import BookCard from '../SharedComponents/BookCard';
import { BookContext } from '../SharedComponents/BookContext'; // Import correct
import { motion } from 'framer-motion';
import styles from '../Styles/library.module.css';
import { Link } from 'react-router-dom';

export default function MyLibrary() {
  const { books } = useContext(BookContext); // Récupérez les données des livres à partir du contexte

  return (
    <main className={styles.main}>
      <div className={styles.grouper}>
        <h1 className={styles.title}>Mes livres</h1>
        <ul className={styles.ulGroupStyle}>
          {books.map((book, i) => (
            <motion.li
              className={styles.bookItem}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', damping: 50, mass: 0.75 }}
              initial={{ opacity: 0, x: 200 * (i + 1) }}
              animate={{ opacity: 1, x: 0 }}
              key={i}
            >
              <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
                <BookCard title={book.title} coverImage={book.image} description={book.description} />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  );
}


const iconStyle ={marginRight:'20px',fontSize:'20px'}