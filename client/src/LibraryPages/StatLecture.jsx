// afficher les statistiques de lecture de l'enfant: Nombres des livres lus, nombres d'heures passer à lire ces livres, livres en cours de lecture

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/userContext';
import axios from 'axios';
import '../Styles/StatLecture.css';

const StatLecture = () => {
  const { user } = useContext(UserContext);
  const [readingHistory, setReadingHistory] = useState([]);

  useEffect(() => {
    const fetchReadingHistory = async () => {
      try {
        // Configuration de l'URL de l'API backend
        const apiUrl = `https://mfumubuku-kids.onrender.com/reading-histories/${user.id}`;
  
        const response = await axios.get(apiUrl);
        setReadingHistory(response.data);
      } catch (error) {
        console.error('Error fetching reading history:', error);
      }
    };
  
    fetchReadingHistory();
  }, [user.id]);
  
  
  return (
    <div className="reading-history">
      <h2>Reading History</h2>
      <ul>
        {readingHistory.map((entry) => (
          <li key={entry.id}>
            {entry.bookTitle} - {entry.readDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatLecture;
