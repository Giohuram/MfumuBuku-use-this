import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import axios from 'axios';
import { useUserContext } from '../Context/useUserContext'; // Import custom hook

const Login = ({ setIsLoggedIn, setUserData }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUser } = useUserContext(); // Use custom hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setError(''); // Clear error message when user starts typing
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3005/auth/login', form);
      console.log('Login response:', response.data); // Add debug log
      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token); // Store JWT token in localStorage
        setIsLoggedIn(true);
        updateUser({ username: form.username });
        navigate('/librairie');
      } else {
        setError('Token non reçu. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          setError('Email ou mot de passe incorrect.');
        } else if (status === 400) {
          setError('Requête incorrecte. Veuillez vérifier vos informations.');
        } else {
          setError('Une erreur est survenue. Veuillez réessayer.');
        }
      } else {
        setError('An error occurred during login.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#DC7211] py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue chez Mfumu buku kids</h1>
          <div className="text-sm md:text-xl text-white mb-6">
            <p>Mfumu Buku Kids, votre destination préférée pour l'éducation littéraire de vos enfants ! Chez Mfumu Buku Kids, nous croyons fermement au pouvoir transformateur des livres pour enrichir l'esprit des enfants et stimuler leur imagination.</p>
            <p className='text-white'>Bonne lecture d’avance!</p>
          </div>
          <div className='text-center mt-5'>
            <p className="text-white mb-4">Connectez-vous à votre compte.</p>
            <div className="flex items-center justify-center mb-4">
              <FaGoogle className="text-white mr-2" />
              <FaFacebook className="text-white mr-2" />
              <FaApple className="text-white mr-2" />
            </div>

            <p className="text-white my-4">--------------------- OU CONTINUER AVEC ---------------------</p>

            <form className="flex flex-col items-center" onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full mb-4 p-2 rounded-lg border-2 border-gray-400"
                value={form.username}
                onChange={handleChange}
                disabled={isLoading}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full mb-4 p-2 rounded-lg border-2 border-gray-400"
                value={form.password}
                onChange={handleChange}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`bg-black text-white font-bold py-2 px-4 rounded mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
            <div className='mt-3'>
              <p>Vous n'avez pas de compte? veuillez vous inscrire <a href='/signup' className='text-white'>ici</a></p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <img src="/login-pic.png" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
