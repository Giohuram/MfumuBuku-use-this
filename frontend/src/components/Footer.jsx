import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#DC7211] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Mfumu Buku Kids</h3>
          <p className="text-sm mb-4">Notre objectif est de susciter le goût de lire chez les enfants et leur offrir le meilleur à lire pour se cultiver et se préparer à un avenir meilleur.</p>
          <div className="flex items-center mb-4">
            {/* Icones des réseaux sociaux */}
            <Link to="#"><FaFacebook fontSize="large" className="mr-2" /></Link>
            <Link to="#"><FaTwitter fontSize="large" className="mr-2" /></Link>
            <Link to="#"><FaLinkedin fontSize="large" className="mr-2" /></Link>
            <Link to="#"><FaInstagram fontSize="large" /></Link>
          </div>
          <p className="text-sm">© En Classe RDC 2024 designed by Huram Abi</p>
        </div>
        {/* Colonne 2 */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-4">Liens Utiles</h3>
          <ul className="text-sm">
            <li className="mb-2"><Link to="#">À propos</Link></li>
            <li className="mb-2"><Link to="#">Contactez-nous</Link></li>
            <li className="mb-2"><Link to="#">Termes et conditions</Link></li>
            <li className="mb-2"><Link to="#">Politique de confidentialité</Link></li>
            <li className="mb-2"><Link to="#">Abonnement</Link></li>
          </ul>
        </div>
        {/* Colonne 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Adresse</h3>
          <p className="text-sm mb-4">Bureau En Classe RDC Av. Sergent Moke 10651 Kinshasa - Kintambo Concession Boukin Entre rond point Socimat et rond point Safricas.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

