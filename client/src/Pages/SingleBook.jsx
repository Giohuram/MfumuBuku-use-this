import React, { useState, useEffect } from 'react';
import BookCard from '../SharedComponents/BookCard';

const SingleBook = ({ id }) => {
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`/Book/id/${id}`); // Utilisation de la route '/Book/:id' pour récupérer les détails du livre spécifique par son ID
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données du livre');
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du livre : ', error);
      }
    };

    fetchBookData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      try {
        if (!book) return; // Vérifie si le livre est chargé
        const response = await fetch(`/Book/category/${book.category}`); // Utilisation de la route '/Book/category/:category' pour récupérer les livres liés par catégorie
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des livres liés');
        }
        const data = await response.json();
        setRelatedBooks(data.filter(item => item.id !== book.id));
      } catch (error) {
        console.error('Erreur lors de la récupération des livres liés : ', error);
      }
    };

    fetchRelatedBooks();
  }, [book]);

  if (!book) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <div>
        <img src={book.bookCover} alt="Page de couverture" />
        <h2>{book.title}</h2>
        <p>Auteur : {book.author}</p>
        <p>Catégorie : {book.category}</p>
        <p>Âge concerné : {book.age}</p>
        <p>Description : {book.description}</p>
      </div>

      <div>
        <h3>Livres de la même catégorie :</h3>
        <div>
          {relatedBooks.map(relatedBook => (
            <BookCard key={relatedBook.id} book={relatedBook} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
