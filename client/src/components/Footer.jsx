import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#DC7211] text-white py-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Mfumu Buku Kids</h3>
          <p className="text-sm mb-4">Notre objectif est de susciter le goût de lire chez les enfants et leur offrir le meilleur à lire pour se cultiver et se préparer à un avenir meilleur.</p>
          <div className="flex items-center mb-4 text-black">
            {/* Icones des réseaux sociaux */}
            <a href="lien_vers_facebook" target="_blank" rel="noopener noreferrer"><FaFacebook fontSize="large" className="mr-2" /></a>
            <a href="lien_vers_twitter" target="_blank" rel="noopener noreferrer"><FaTwitter fontSize="large" className="mr-2" /></a>
            <a href="lien_vers_linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin fontSize="large" className="mr-2" /></a>
            <a href="lien_vers_instagram" target="_blank" rel="noopener noreferrer"><FaInstagram fontSize="large" /></a>
          </div>
        </div>

        {/* Colonne 2 */}
        <div className="flex flex-col pl-20 ml-20 md:pl-0">
          <h3 className="text-2xl font-bold mb-4">Liens Utiles</h3>
          <ul className="text-sm">
            <li className="mb-2"><a href="#">À propos</a></li>
            <li className="mb-2"><a href="#">Abonnement</a></li>
            <li className="mb-2"><a href="#">Contactez-nous</a></li>
            <li className="mb-2"><a href="#">Termes et conditions</a></li>
            <li className="mb-2"><a href="#">Politique de confidentialité</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-4">Adresse</h3>
          <p className="text-sm mb-4">Bureau En Classe RDC Av. Sergent Moke 10651 Kinshasa - Kintambo Concession Boukin Entre rond point Socimat et rond point Safricas.</p>
        </div>

         {/* Colonne 4 */}
        <div className=''>
         <p className="text-sm mt-auto text-black">© En Classe RDC 2024 designed by Huram Abi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
