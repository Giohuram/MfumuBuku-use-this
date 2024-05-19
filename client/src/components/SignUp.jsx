import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate depuis react-router-dom

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [schoolLevel, setSchoolLevel] = useState('Creche');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mfumubuku-kids.onrender.com/auth/signup', {
        username, 
        parentName,
        childAge,
        schoolLevel,
        email,
        password,
        confirmPassword,
        avatar
      });
      console.log(response.data); // Gérer la réponse de l'API comme vous le souhaitez, par exemple, rediriger l'utilisateur vers une autre page
      navigate('/login'); // Rediriger vers le tableau de bord après la création du compte
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Une erreur inattendue s\'est produite.');
      }
    }
  };
  
  

  return (
    <div className="bg-[#DC7211] py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Contenu texte */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue chez Mfumu buku kids</h1>
          <div className="text-sm md:text-xl text-white mb-6">
            <p>Chez Mfumu Buku Kids, nous nous engageons à offrir une expérience sûre, éducative et divertissante pour vos enfants, tout en encourageant une passion durable pour la lecture. Rejoignez-nous dès aujourd'hui et laissez vos enfants explorer le monde merveilleux des livres avec Mfumu Buku Kids!</p>
          </div>
          <div className='text-center mt-5'>
            {/* Formulaire de connexion */}
            <form className="flex flex-col items-center" onSubmit={handleSignUp}>
              <input type="text" placeholder="Nom d'utilisateur (Prénom et nom de l'enfant)" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={username} onChange={(e) => setUserName(e.target.value)} />
              <input type="text" placeholder="Nom complet du parent" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={parentName} onChange={(e) => setParentName(e.target.value)} />
              <input type="number" placeholder="Quel âge a votre enfant?" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={childAge} onChange={(e) => setChildAge(parseInt(e.target.value))} />
              <select className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={schoolLevel} onChange={(e) => setSchoolLevel(e.target.value)}>
                <option value="Creche">Crèche</option>
                <option value="Maternelle">Maternelle</option>
                <option value="Primaire">Primaire</option>
              </select>
              <input type="email" placeholder="Entrer votre email" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Mot de passe" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="password" placeholder="Confirmer votre Mot de passe" className="mb-4 p-2 rounded border-2 border-gray-400 w-full text-black" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <input type="file" onChange={(e) => setAvatar(e.target.files[0])} accept="image/*"/><br/>
              <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded mr-2">Créer votre compte</button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <img src="/login-pic.png" alt="Image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
