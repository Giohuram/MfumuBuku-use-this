import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      // Envoyer l'adresse e-mail au backend pour la réinitialisation du mot de passe
      await axios.post('http://localhost:3005/auth/forgot-password', { email });
      setSuccessMessage('Un e-mail de réinitialisation du mot de passe a été envoyé.');
    } catch (error) {
      console.error('Error sending forgot password email:', error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="bg-[#DC7211] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Mot de passe oublié?</h2>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {!successMessage && (
          <form onSubmit={handleForgotPassword} className="flex flex-col items-center">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Adresse e-mail:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-lg border-2 border-gray-400"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800">
              Envoyer le lien de réinitialisation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
