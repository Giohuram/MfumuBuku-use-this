import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../SharedComponents/BookCard';

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [error, setError] = useState(null); // État pour stocker les erreurs
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  // Vérifiez si le token est présent et redirigez si nécessaire
  useEffect(() => {
    if (!token) {
      console.error("Erreur: Token JWT manquant.");
      navigate('/login'); // Redirige vers la page de connexion
    }
  }, [token, navigate]);

  const handleReadButtonClick = (book) => {
    navigate('/Lecture', { state: { book } });
  };

  const handleListenButtonClick = (book) => {
    navigate('/LectureAudio', { state: { book } });
  };

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/Book/id/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBook(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du livre : ', error);
        setError('Une erreur s\'est produite lors du chargement des détails du livre. Veuillez réessayer plus tard.');
      }
    };

    if (token) {
      fetchBookData();
    }
  }, [id, token]);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      try {
        if (!book) return;
        const response = await axios.get(`http://localhost:3005/Book/category/${book.category}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setRelatedBooks(response.data.filter(item => item.id !== book.id));
      } catch (error) {
        console.error('Erreur lors de la récupération des livres liés : ', error);
        setError('Une erreur s\'est produite lors du chargement des livres liés. Veuillez réessayer plus tard.');
      }
    };

    if (book && token) {
      fetchRelatedBooks();
    }
  }, [book, token]);

  if (error) {
    return <div>Erreur : {error}</div>; // Affichage du message d'erreur
  }

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
        <button onClick={() => handleReadButtonClick(book)}>Lire</button>
        <button onClick={() => handleListenButtonClick(book)}>Écouter</button>
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
