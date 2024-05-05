import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LibrairieNavBar = () => {
  return (
    <header style={headerStyle}>
      <motion.div
        style={leftContainerStyle}
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 style={bookTitleStyle}>Mfumu Buku Kids</h1>
        <motion.input
          type='text'
          placeholder='Trouver vos livres favoris ici..'
          style={searchInputStyle}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className='ml-20'
        ></motion.input>
      </motion.div>

      <motion.div
        style={rightContainerStyle}
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link to='/profile' style={avatarLinkStyle}>
          <div style={avatarContainerStyle}>
            <motion.img
              src='https://www.creativefabrica.com/wp-content/uploads/2022/11/21/Black-Boy-Retro-Charming-Avatar-47769583-1.png'
              alt='avatar'
              style={avatarStyle}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
            />
            <div style={userInfoContainerStyle}>
              <p style={usernameStyle}>Melch Huram Masala</p>
              <p style={userLevelStyle}>Niveau primaire</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 1rem', // Modification de la valeur de padding
  width: '100%',
  backgroundColor: '#DC7211'
};

const leftContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const bookTitleStyle = {
  marginRight: '2rem',
  fontSize: '2rem',
  color: 'white'
};

const searchInputStyle = {
  padding: '0.7rem 1rem',
  borderRadius: '70px',
  // backgroundColor: 'rgb(248, 234, 221)',
  border: '2px solid #DC7211',
  minWidth: '320px',
};

const rightContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const avatarLinkStyle = {
  marginRight: '1rem',
  textDecoration: 'none', // Suppression du soulignement des liens
};

const avatarContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  
};

const avatarStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
};

const userInfoContainerStyle = {
  marginLeft: '0.5rem',
  color: 'white'
};

const usernameStyle = {
  margin: '0',
};

const userLevelStyle = {
  margin: '0',
  fontSize: '0.8rem', // Réduction de la taille de la police
};

export default LibrairieNavBar;
