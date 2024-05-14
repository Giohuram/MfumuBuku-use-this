import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: '',
    email: '',
    schoolLevel: '',
    avatar: '',
    myBooks: [] // Ajoutez le tableau des livres favoris ici
  });

  const updateUser = (userData) => {
    setUser(userData);
  };

  const addToMyBooks = async (bookId) => {
    try {
      const response = await axios.post('http://localhost:3005/addFavorite', {
        userId: user.id,
        bookId
      });
      setUser(prevUser => ({
        ...prevUser,
        myBooks: [...prevUser.myBooks, response.data]
      }));
    } catch (error) {
      console.error('Error adding book to favorites:', error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user.id) {
        try {
          const response = await axios.get(`http://localhost:3005/${user.id}/favorites`);
          setUser(prevUser => ({
            ...prevUser,
            myBooks: response.data
          }));
        } catch (error) {
          console.error('Error fetching favorite books:', error);
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

export { UserContext, UserContextProvider };
