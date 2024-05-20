import React from 'react';
import { useNavigate } from 'react-router-dom';

const LibrairieButton = () => {
  const navigate = useNavigate();

  const navigateToLibrairie = () => {
    navigate('/librairie');
  };

  return (
    <button
      onClick={navigateToLibrairie}
      className="bg-[#DC7211] text-white font-bold py-2 px-4 rounded hover:bg-orange-700"
    >
      Retourner à la Biblothèque 
    </button>
  );
};

export default LibrairieButton;
