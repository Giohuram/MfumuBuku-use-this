import React from 'react';
import { FaBookOpen, FaUser, FaRegBookmark, FaUsers, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LibrairieNavBar = ({ username, schoolLevel }) => {
  return (
    <div className="bg-[#DC7211] h-screen w-64 flex flex-col justify-between">
      {/* Barre de recherche */}
      <div className="p-4">
        <input type="text" placeholder="Rechercher..." className="bg-white px-3 py-2 w-full rounded-md text-black placeholder-gray-400 focus:outline-none" />
      </div>
      
      {/* Menu latéral */}
      <div className="flex flex-col items-start text-white">
        <Link to="/MyLibrary" className="text-white">
          <NavItem icon={<FaBookOpen />} label="Librairie" />
        </Link>
        <Link to="/MyBooks" className="text-white">
          <NavItem icon={<FaRegBookmark />} label="Ma bibliothèque" />
        </Link>
        <Link to="/ReadingClub" className="text-white">
          <NavItem icon={<FaUsers />} label="Club de lecture" />
        </Link>
        <Link to="/Subscription" className="text-white">
          <NavItem icon={<FaUser />} label="Abonnement" />
        </Link>
        <Link to="/MyProfile" className="text-white">
          <NavItem icon={<FaUserCircle />} label="Mon profile" />
        </Link>
        {/* Lien de déconnexion */}
        <Link to="/" className="text-white">
          <NavItem icon={<FaSignOutAlt />} label="Déconnexion" />
        </Link>
      </div>

      {/* Informations utilisateur */}
      <div className="p-4 text-white text-center">
        <img src="/user-avatar.jpg" alt="User" className="w-12 h-12 rounded-full mx-auto mb-2" />
        <p className="font-semibold">{username}</p>
        <p>{schoolLevel}</p>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex items-center py-3 px-4 hover:bg-black cursor-pointer w-full">
      {icon}
      <span className="ml-4">{label}</span>
    </div>
  );
};

export default LibrairieNavBar;
