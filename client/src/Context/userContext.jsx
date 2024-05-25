import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

const axiosInstance = axios.create({
  baseURL: "https://mfumubuku-kids.onrender.com", // Utiliser REACT_APP_BACKEND_URL comme baseURL
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: '',
    email: '',
    schoolLevel: '',
    avatar: '',
    myBooks: [] // Ajout de myBooks pour suivre les livres de l'utilisateur
  });
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = (userData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userData
    }));
    setIsAuthenticated(!!userData.id);
  };

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        updateUser({ username: credentials.username });
      } else {
        console.error('Token non reçu. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    updateUser({
      id: null,
      username: '',
      email: '',
      schoolLevel: '',
      avatar: '',
      myBooks: [] // Réinitialiser myBooks lors de la déconnexion
    });
    setIsAuthenticated(false);
  };

  // Fonction pour ajouter un livre à la bibliothèque de l'utilisateur
  const addToMyBooks = async (bookId) => {
    try {
      const response = await axiosInstance.post(`/users/${user.id}/books/${bookId}`);
      console.log(response); 
      setUser((prevUser) => ({
        ...prevUser,
        myBooks: [...prevUser.myBooks, bookId]
      }));
    } catch (error) {
      console.error('Error adding book to library:', error);
    }
  };

  // Fonction pour retirer un livre de la bibliothèque de l'utilisateur
  const removeFromMyBooks = async (bookId) => {
    try {
      const response = await axiosInstance.delete(`/users/${user.id}/books/${bookId}`);
      console.log(response); 
      setUser((prevUser) => ({
        ...prevUser,
        myBooks: prevUser.myBooks.filter((id) => id !== bookId)
      }));
    } catch (error) {
      console.error('Error removing book from library:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser, loading, isAuthenticated, login, logout, addToMyBooks, removeFromMyBooks }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContext, UserContextProvider, useUserContext };
