// Affiche la page de lecture du livre sélectionné

import React from 'react';
import PropTypes from 'prop-types'; // Importez PropTypes depuis la bibliothèque prop-types
import { ReactReader } from 'react-reader';
import { useLocation } from 'react-router-dom';
import LibrairieNavBar from '../components/LibrairieNavBar';
import LibrairieButton from '../SharedComponents/LibrairieButton';

const Lecture = () => {
  const location = useLocation();
  const book = location.state?.book; // Access book from state, handle potential absence

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '100vh' }}>
      <LibrairieNavBar />
      <ReactReader
        url={book.content}
        location={0}
        locationChanged={(epubcfi) => console.log(epubcfi)}
      />
    </div>
  );
};

// Définissez les types de props attendus pour le composant BookReader
Lecture.propTypes = {
  book: PropTypes.shape({
    bookContentURL: PropTypes.string.isRequired, // Définissez le type et assurez-vous qu'il est requis
    // Ajoutez d'autres propriétés ici si nécessaire
  }).isRequired, // Assurez-vous que book est requis
};

export default Lecture