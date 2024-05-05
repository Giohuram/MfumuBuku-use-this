import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/auth/login', {
        username,
        password,
      });
      if (response && response.data) {
        console.log(response.data); // Log response data for debugging
        setIsLoggedIn(true);
        navigate('/librairie');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      console.error('Error during login:', error); // Log the error for debugging
      setError(error.response?.data?.error || 'An error occurred during login');
    }
  };  

  return (
    <>
      <div className="bg-[#DC7211] py-16 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Contenu texte */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue chez Mfumu buku kids</h1>
            <div className="text-sm md:text-xl text-white mb-6">
              <p>Mfumu Buku Kids, votre destination préférée pour l'éducation littéraire de vos enfants ! Chez Mfumu Buku Kids, nous croyons fermement au pouvoir transformateur des livres pour enrichir l'esprit des enfants et stimuler leur imagination.</p>
              <p className='text-white'>Bonne lecture d’avance!</p>
            </div>
            <div className='text-center mt-5'>
              <p className="text-white mb-4">Connectez-vous à votre compte.</p>
              {/* Logos des fournisseurs d'identité */}
              <div className="flex items-center justify-center mb-4">
                <FaGoogle className="text-white mr-2" />
                <FaFacebook className="text-white mr-2" />
                <FaApple className="text-white mr-2" />
              </div>

              <p className="text-white my-4">--------------------- OU CONTINUER AVEC ---------------------</p>

              {/* Formulaire de connexion */}
              <form className="flex flex-col items-center" onSubmit={handleLogin}>
                <input type="text" placeholder="Username" className="w-full mb-4 p-2 rounded-lg border-2 border-gray-400" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className="w-full mb-4 p-2 rounded-lg border-2 border-gray-400" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded mr-2">Se connecter</button>
              </form>
              <div className='mt-3'>
                <p>Vous n'avez pas de compte? veuillez vous inscrire <a href='/signup' className='text-white'>ici</a></p>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img src="/login-pic.png" alt="Image" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
