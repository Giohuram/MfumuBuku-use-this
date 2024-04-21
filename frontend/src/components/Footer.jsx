import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#DC7211] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Mfumu Buku Kids</h3>
          <p className="text-sm mb-4">Notre objectif est de susciter le goût de lire chez les enfants et leur offrir le meilleur à lire pour se cultiver et se préparer à un avenir meilleur.</p>
          <div className="flex items-center">
            {/* Icones des réseaux sociaux */}
            <i className="fab fa-facebook mr-2"></i>
            <i className="fab fa-twitter mr-2"></i>
            <i className="fab fa-linkedin mr-2"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        {/* Colonne 2 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Liens Utiles</h3>
          <ul className="text-sm">
            <li className="mb-2"><a href="#">À propos</a></li>
            <li className="mb-2"><a href="#">Contactez-nous</a></li>
            <li className="mb-2"><a href="#">Termes et conditions</a></li>
            <li className="mb-2"><a href="#">Politique de confidentialité</a></li>
            <li className="mb-2"><a href="#">Abonnement</a></li>
          </ul>
        </div>
        {/* Colonne 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Adresse</h3>
          <p className="text-sm mb-4">Bureau En Classe RDC Av. Sergent Moke 10651 Kinshasa - Kintambo Concession Boukin Entre rond point Socimat et rond point Safricas.</p>
          <p className="text-sm">© En Classe RDC 2024 designed by Huram Abi</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
