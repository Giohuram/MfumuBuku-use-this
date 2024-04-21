import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Card } from "flowbite-react";

const Feature = ({ children }) => (
  <li className="flex space-x-3">
    <FaCheckCircle className="h-5 w-5 text-[#DC7211] dark:text-[#DC7211]" />
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{children}</span>
  </li>
);

const CustomCard = ({ children }) => (
  <Card className='max-w-sm bg-cover bg-no-repeat relative overflow-hidden'>
    {children}
  </Card>
);

const Abonnement = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col md:flex-row items-start md:items-center p-8">
      {/* Titre et texte */}
      <div className="md:w-1/2 md:mr-4 mb-8 pb-20 md:mb-0">
        <h2 className="font-bold text-3xl mb-2 text-[#DC7211]">Abonnez-vous dès aujourd’hui</h2>
        <p className="mb-4 font-semibold text-white">Faites entrer votre enfant dans l’univers de Mfumu Buku Kids</p>
        <p className="mb-4 text-white">Offrez à vos enfants une aventure littéraire inoubliable avec Mfumu Buku Kids Library ! Plongez dans un monde magique de livres soigneusement sélectionnés pour stimuler leur imagination, nourrir leur curiosité et enrichir leur apprentissage. Rejoignez notre communauté de lecteurs passionnés et offrez à vos enfants la clé d'un univers infini de découvertes et d'aventures passionnantes. Abonnez-vous dès maintenant et ouvrez la porte à un monde de possibilités pour vos petits explorateurs !</p>
      </div>
      {/* Carte d'abonnement */}
      <div className='pl-40 mt-5 pb-5'>
        <CustomCard>
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">Premium</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white justify-center">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">10</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/an</span>
          </div>
          <ul className="my-7 space-y-5">
            <Feature>Accès à toutes les ressources</Feature>
            <Feature>Clubs de lecture interactifs</Feature>
            <Feature>Concours de lecture exclusifs.</Feature>
            <Feature>Accès aux newsletters premium</Feature>
            <Feature>Contenus éducatifs exclusifs.</Feature>
            <Feature>Bibliothèque numérique illimitée.</Feature>
            <Feature>Recommandations personnalisées</Feature>
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-[#DC7211] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#DC7211]focus:outline-none focus:ring-4 focus:ring-[#DC7211] dark:focus:ring-[#DC7211]"
          >
            Souscrire pour mon enfant
          </button>
        </CustomCard>
      </div>
    </div>
  );
}

export default Abonnement;
