// import React from 'react';
import "../App.css"; // Assurez-vous d'avoir un fichier CSS pour styliser le carrousel

const HeroSection = () => {
  return (
    <div className="bg-[#DC7211] py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Contenu texte */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Un enfant qui sait lire sera un adulte qui réflechit</h1>
          <p className="text-lg md:text-xl text-black mb-6">Notre objectif est de susciter le goût de lire chez les enfants et leur offrir le meilleur à lire pour se cultiver et se préparer à un avenir meilleur. </p>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300">Inscrivez votre enfant</button>
        </div>
        {/* Image */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <img src="/heresection.png" alt="Image" className="w-full" />
        </div>
      </div>
      </div> 
  );
}

export default HeroSection;
