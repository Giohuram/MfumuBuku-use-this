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
  });
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateUser = (userData) => {
    setUser(userData);
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
    });
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, loading, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContext, UserContextProvider, useUserContext };
