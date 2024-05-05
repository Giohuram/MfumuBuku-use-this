import React from 'react';
import LibrairieNavBar from '../components/LibrairieNavBar';
import SideBar from '../SharedComponents/Sidebar';
import MyLibrary from '../LibraryPages/MyLibrary';

const Librairie = () => {
  return (
    <div style={containerStyle}>
      <LibrairieNavBar />
      <div style={contentContainerStyle}>
        <div style={sidebarStyle} className='ml-5'>
          <SideBar/>
        </div>
        <div style={myLibraryStyle}>
          <MyLibrary />
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const contentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginTop: '3rem'
};

const sidebarStyle = {
  flex: '1 1 30%', // Utilisation de flexbox pour le sidebar avec une largeur de 30%
  maxWidth: '250px', // Limite de la largeur du sidebar
  minWidth: '150px', // Largeur minimale du sidebar
  marginRight: '20px', // Espace entre le sidebar et le contenu principal
};

const myLibraryStyle = {
  flex: '1 1 70%', // Utilisation de flexbox pour MyLibrary avec une largeur de 70%
};

export default Librairie;
