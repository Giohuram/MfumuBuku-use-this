// LibrairieNavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const LibrairieNavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/librairie">Accueil</Link>
        </li>
        {/* Ajoutez d'autres liens ou éléments de navigation spécifiques à la page "Librairie" */}
      </ul>
    </nav>
  );
};

export default LibrairieNavBar;
