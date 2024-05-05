import React from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';

const MyBooks = () => {
  return (
    <div className="flex">
    {/* Composant LibrairieNavBar à gauche */}
    <div className="flex-none">
      <LibrairieNavBar />
    </div>

    {/* Div avec le texte MyLibrary à droite */}
    <div className="flex-grow text-center">MyBooks</div>
  </div>
  )
}

export default MyBooks;