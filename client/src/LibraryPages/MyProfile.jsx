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
    {/* Composant LibrairieNavBar à gauche */}
    <div className="flex-none">
      <LibrairieNavBar />
    </div>

    {/* Div avec le texte MyLibrary à droite */}
    <div className="flex-grow text-center">Mon Profile</div>
  </div>
  );
};

export default MyProfile;
