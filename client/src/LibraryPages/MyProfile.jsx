import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/userContext';
import axios from 'axios';
import '../Styles/MyProfile.css';

const MyProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);
  const [preview, setPreview] = useState(user.avatar);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('authToken'); // Récupérer le token depuis le localStorage

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'avatar') {
      const file = files[0];
      setFormData({ ...formData, avatar: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Vérifier si user existe et contient une valeur
    if (!user || !user.id) {
      console.error('User ID is not valid');
      return;
    }
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      // Configuration de l'URL de l'API backend
      const apiUrl = `https://mfumubuku-kids.onrender.com/user/${user.id}`;
  
      const response = await axios.put(apiUrl, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Ajouter le token d'authentification
        },
        withCredentials: true, // Inclure les cookies
      });
      updateUser(response.data);
      setSuccess('Profil mis à jour avec succès.');
      setError('');
    } catch (error) {
      setError('Erreur lors de la mise à jour du profil. Veuillez vérifier vos informations.');
      setSuccess('');
      console.error('Error updating profile:', error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit} className="profile-form max-w-md mx-auto">
      <h2>Mon Profil</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="flex flex-col items-center">
        <label className="block text-sm font-medium text-gray-700">Photo de profil</label>
        <img src={preview} alt="Avatar Preview" className="h-24 w-24 rounded-full mt-2 mb-4" />
        <input type="file" name="avatar" accept="image/*" onChange={handleChange} className="block w-full text-sm text-gray-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du parent</label>
        <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Âge</label>
        <input type="number" name="childAge" value={formData.childAge} onChange={handleChange} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Niveau Scolaire</label>
        <input type="text" name="schoolLevel" value={formData.schoolLevel} onChange={handleChange} />
      </div>
      <button type="submit" className="w-full py-2 px-4">Sauvegarder</button>
    </form>
  );
};

export default MyProfile;
