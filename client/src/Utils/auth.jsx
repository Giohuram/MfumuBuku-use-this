// Auth.js

const login = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3005/auth/login', credentials);
    const { token } = response.data; // Extrait le jeton JWT de la réponse
    localStorage.setItem('token', token); // Stocke le jeton JWT dans le localStorage
    return token; // Renvoie le jeton JWT
  } catch (error) {
    console.error(error.response?.data); // Log the server response for debugging
    throw new Error(error.response?.data?.error || 'An error occurred during login');
  }
};

const getToken = () => {
  return localStorage.getItem('token');
};

export default login ; // Exportez explicitement la fonction de connexion
