import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Language, GitHub, Twitter, Instagram, Facebook, Assignment } from '@mui/icons-material';
import LibrairieNavBar from '../components/LibrairieNavBar';

const MyProfile = ({ username, email, schoolLevel }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [booksBought, setBooksBought] = useState(0);
  const [booksReading, setBooksReading] = useState([]);
  const [booksRead, setBooksRead] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const buyBook = () => {
    setBooksBought((prevCount) => prevCount + 1);
  };

  const addBookToReadingList = (book) => {
    setBooksReading((prevList) => [...prevList, book]);
  };

  const markBookAsRead = (book) => {
    setBooksRead((prevList) => [...prevList, book]);
  };

  return (
    <div className="flex">
      <LibrairieNavBar />
      <Container className="mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Mon Profil</h1>
        <div className="flex items-center mb-8">
          <div className="mr-4">
            <img
              src={profileImage || '/default-profile-image.jpg'}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2" />
          </div>
          <div>
            <p className="text-xl font-semibold">{username}</p>
            <p>{schoolLevel}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Mes Activités</h2>
          <div className="mb-4">
            <p className="font-semibold">Livres achetés: {booksBought}</p>
            <button onClick={buyBook}>Acheter un livre</button>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Livres en cours de lecture: {booksReading.length}</p>
            <ul>
              {booksReading.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold">Livres déjà lus: {booksRead.length}</p>
            <ul>
              {booksRead.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
