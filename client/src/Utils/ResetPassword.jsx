import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Vérifier si le jeton est valide lors du chargement de la page
    const verifyToken = async () => {
      try {
        await axios.post('http://localhost:3005/auth/verify-reset-token', { token });
      } catch (error) {
        setError('Le lien de réinitialisation du mot de passe est invalide ou a expiré.');
        console.error('Error verifying reset token:', error);
      }
    };

    verifyToken();
  }, [token]);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/auth/reset-password', { token, password });
      setSuccessMessage(response.data.message);
    } catch (error) {
      setError('Une erreur est survenue lors de la réinitialisation du mot de passe.');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className="bg-[#DC7211] py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-white text-2xl mb-4">Réinitialiser le mot de passe</h2>
        {successMessage ? (
          <p className="text-white">{successMessage}</p>
        ) : (
          <form onSubmit={handleChangePassword} className="flex flex-col items-center">
            <div className="mb-4">
              <label htmlFor="password" className="text-white">Nouveau mot de passe:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-lg border-2 border-gray-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="text-white">Confirmer le nouveau mot de passe:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 rounded-lg border-2 border-gray-400"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded">
              Réinitialiser le mot de passe
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
