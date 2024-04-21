import React from 'react';
import { FaCheckCircle } from "react-icons/fa";



const Abonnement = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row items-start md:items-center">
      {/* Titre et texte */}
      <div className="md:w-1/2 md:mr-4 mb-8 pb-20 md:mb-0">
        <h2 className="font-bold text-3xl mb-2 text-orange-500">Abonnez-vous dès aujourd’hui</h2>
        <p className="mb-4">Faites entrer votre enfant dans l’univers de Mfumu Buku Kids</p>
        <p className="mb-4">Offrez à vos enfants une aventure littéraire inoubliable avec Mfumu Buku Kids Library ! Plongez dans un monde magique de livres soigneusement sélectionnés pour stimuler leur imagination, nourrir leur curiosité et enrichir leur apprentissage. Rejoignez notre communauté de lecteurs passionnés et offrez à vos enfants la clé d'un univers infini de découvertes et d'aventures passionnantes. Abonnez-vous dès maintenant et ouvrez la porte à un monde de possibilités pour vos petits explorateurs !</p>
      </div>
      {/* Carte d'abonnement */}
      <div className="md:w-1/2 md:ml-4 pl-10 pt-10">
        <div className="bg-gray-900 bg-opacity-50 rounded-lg shadow-md relative overflow-hidden p-60 abonnement-bg-image bg-cover bg-no-repeat pl-6 pr-5">
          <img src="/girls-read.jpg" alt="Image d'abonnement" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="bg-gradient-to-b from-transparent to-black bg-opacity-60 absolute inset-0 w-full h-full"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-lg font-semibold mb-2">PREMIUM</h3>
            <p className="text-gray-300 mb-2">Offre parfaite pour votre enfant</p>
            <p className="text-white text-lg mb-2">$10 / an</p>
            <button className="bg-orange-500 text-white font-semibold py-1 px-2 rounded-full mt-2">J'inscris mon enfant</button>
            <p className="text-orange-500 text-xs mt-1">Renouvellement d'abonnement automatique</p>
            <div className="text-white mt-2">
                <p>Accès à toutes les ressources</p>
                <p>Participation au club de lecture en ligne</p>
                <p>Participation au concours de lecture Mfumu Buku</p>
                <p>Accès au newsletter premium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abonnement;
