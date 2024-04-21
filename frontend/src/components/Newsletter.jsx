import React from 'react';

const Newsletter = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="font-bold text-3xl text-[#DC7211] mb-2">Newsletter</h2>
      <p className="font-semibold mb-4">Souscrivez à notre newsletter pour avoir nos dernières actualités</p>
      <p className="mb-4">Veuillez laisser votre adresse e-mail ci-dessous pour recevoir des mises à jour mensuelles sur nos activités.</p>
      <form className="flex justify-center items-center mb-4">
        <input type="email" placeholder="Entrez votre adresse e-mail" className="w-64 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-[#DC7211]" />
        <button type="submit" className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-r-md">Soumettre</button>
      </form>
    </div>
  );
}

export default Newsletter;
