import { Link } from "react-router-dom";

const BookCategory = () => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      {/* En-tête de la catégorie */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-2xl text-[#DC7211]">Notre catalogue</h2>
      </div>
      {/* Cartes des livres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Carte 1 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="kids animals.jpg" alt="Illustration 1" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h1 className=" text-white font-semibold py-2 px-4 text-2xl">Les animaux</h1>
          </div>
        </div>
        {/* Carte 2 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/alphabet.jpg" alt="Illustration 2" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">L'alphabet</h2>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/fruits for kids.jpg" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">Les fruits</h2>
          </div>
        </div>
        {/* Carte 4 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/numbers for kids.jpg" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">Les nombres</h2>
          </div>
        </div>
        {/* Carte 5 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/contes africains.jpg" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">Les contes africains</h2>
          </div>
        </div>
        {/* Carte 6 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/monde.jpg" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">Le Monde</h2>
          </div>
        </div>
        {/* Carte 7 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
          <img src="/couleurs.jpg" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h2 className=" text-white font-semibold py-2 px-4 text-2xl">Les couleurs</h2>
          </div>
        </div>
        {/* Carte 8 */}
        <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
           <img src="https://books.google.cd/books/publisher/content?id=oqg-DwAAQBAJ&hl=fr&pg=PA6&img=1&zoom=3&bul=1&sig=ACfU3U28ERu1_S7pPY0KhqaxLB9zVmZ8Cg&w=1280" alt="Illustration 3" className="w-full h-48 object-cover md:h-64 lg:h-80" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-center p-4">
            <h3 className=" text-white font-semibold py-2 px-4 text-2xl">Bandes Dessinées</h3>
          </div>
        </div>
     </div> 
    </div>
  );
}

export default BookCategory;
