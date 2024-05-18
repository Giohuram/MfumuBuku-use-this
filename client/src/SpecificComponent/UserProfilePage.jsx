import React, { useState } from 'react';
import MyProfile from '../LibraryPages/MyProfile';
import StatLecture from '../LibraryPages/StatLecture';
import ModalAbonnement from '../SpecificComponent/ModalAbonnement';
import ParentalControl from '../SpecificComponent/ParentalControl';
import '../Styles/UserProfilePage.css';
import { Link } from 'react-router-dom';
import { FaUser, FaChartBar, FaBook, FaUserShield, FaSchool } from 'react-icons/fa';

const UserProfilePage = () => {
  const [selectedComponent, setSelectedComponent] = useState('profile');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'profile':
        return <MyProfile />;
      case 'readingStats':
        return <StatLecture />;
      case 'subscription':
        return <ModalAbonnement />;
      case 'parentalControl':
        return <ParentalControl />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="user-profile-page">
      <nav className="sidebar">
        <ul className="menu-list">
          <li onClick={() => setSelectedComponent('profile')} className="menu-item">
            <FaUser className="icon" /> <span className="menu-text text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">Mon Profile</span>
          </li>
          <li onClick={() => setSelectedComponent('readingStats')} className="menu-item">
            <FaChartBar className="icon" /> <span className="menu-text text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">Ma Performance</span>
          </li>
          <li onClick={() => setSelectedComponent('subscription')} className="menu-item">
            <FaSchool className="icon" /> <span className="menu-text text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">Mon Abonnement</span>
          </li>
          <li onClick={() => setSelectedComponent('parentalControl')} className="menu-item">
            <FaUserShield className="icon" /> <span className="menu-text text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">Espace parent</span>
          </li>
          <li className="menu-item">
            <Link to="/Librairie" className="menu-link">
              <FaBook className="icon" /> <span className="menu-text text-white hover:bg-black hover:text-[#DC7211] px-3 py-2 rounded-md text-sm font-medium">Ma Bibliothèque</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default UserProfilePage;
