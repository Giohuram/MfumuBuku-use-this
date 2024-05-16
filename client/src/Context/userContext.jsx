import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UserContext = createContext();

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3005',
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: '',
    email: '',
    schoolLevel: '',
    avatar: '',
    books: [], // Tableau des livres favoris
  });

  const updateUser = (userData) => {
    setUser(userData);
  };

  const addToMyBooks = async (bookId) => {
    try {
      const response = await axiosInstance.post('/addFavorite', {
        userId: user.id,
        bookId,
      });
      setUser((prevUser) => ({
        ...prevUser,
        books: [...prevUser.books, response.data],
      }));
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre aux favoris :', error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user.id) {
        try {
          const response = await axiosInstance.get(`/${user.id}/favorites`);
          setUser((prevUser) => ({
            ...prevUser,
            books: response.data,
          }));
        } catch (error) {
          console.error('Erreur lors de la récupération des livres favoris :', error);
        }
      }
    };

    fetchFavorites();
  }, [user.id]);

  return (
    <UserContext.Provider value={{ user, updateUser, addToMyBooks }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
