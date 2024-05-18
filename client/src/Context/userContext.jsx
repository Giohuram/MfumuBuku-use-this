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
  });

  const updateUser = (userData) => {
    console.log('Updating user:', userData); // Ajouter un console.log pour vérifier les mises à jour de l'utilisateur
    setUser(userData);
  };

  useEffect(() => {
    console.log('User:', user); // Ajouter un console.log pour afficher l'état de l'utilisateur
  }, [user]);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
