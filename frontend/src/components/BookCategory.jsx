const BookCategory = () => {
  return (
    <div className="container mx-auto mt-20">
      {/* En-tête de la catégorie */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-xl">Explorez les diférentes catégories de notre catalogue. </h2>
        <div className="flex items-center">
          <span className="font-bold mr-2">Toutes les catégories</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {/* Cartes des livres */}
      {/* Cartes des livres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Carte 1 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="kids animals.jpg" alt="Illustration 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les animaux</button>
          </div>
        </div>
        {/* Carte 2 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/alphabet.jpg" alt="Illustration 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">L'alphabet</button>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/fruits for kids.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les fruits</button>
          </div>
        </div>
        {/* Ajoutez plus de cartes selon vos besoins */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/numbers for kids.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les nombres</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/contes africains.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les contes africains</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/monde.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Le Monde</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/couleurs.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les couleurs</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/Space.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">L'espace</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/contes-fées.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full">Les contes de fées</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCategory;
