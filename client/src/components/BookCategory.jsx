import { Link } from "react-router-dom";

const BookCategory = () => {
  return (
    <div className="container mx-auto mt-20">
      {/* En-tête de la catégorie */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl text-[#DC7211]">Notre catalogue. </h2>
      </div>
      {/* Cartes des livres */}
      {/* Cartes des livres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Carte 1 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="kids animals.jpg" alt="Illustration 1" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les animaux</button>
          </div>
        </div>
        {/* Carte 2 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/alphabet.jpg" alt="Illustration 2" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">L'alphabet</button>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/fruits for kids.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les fruits</button>
          </div>
        </div>
        {/* Ajoutez plus de cartes selon vos besoins */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/numbers for kids.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les nombres</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/contes africains.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les contes africains</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/monde.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Le Monde</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/couleurs.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les couleurs</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/Space.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">L'espace</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/contes-fées.jpg" alt="Illustration 3" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-4">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Les contes de fées</button>
          </div>
        </div>
      </div>
        <div className="mt-10 text-center">
          <Link to="/login">
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full">Voir plus de notre catalogue</button>
          </Link>
        </div>
    </div>
  );
}

export default BookCategory;
