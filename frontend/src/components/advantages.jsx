// import React from 'react';

const Advantages = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* En-tête */}
      <h2 className="font-bold text-2xl mb-8 text-[#DC7211]">Avantages de la lecture</h2>
      {/* Cartes d'avantages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Carte 1 */}
        <div className="bg-gray-900 rounded-lg shadow-md relative overflow-hidden">
          <div className="bg-gradient-to-b from-transparent to-black bg-opacity-60 absolute inset-0 w-full h-full"></div>
          <img src="/reading-girl.jpg" alt="Image Floue 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">Développement du langage</h3>
            <p className='text-white text-sm'>La lecture régulière expose les enfants à un large éventail de vocabulaire et de structures grammaticales, ce qui enrichit leur propre langage et améliore leur capacité à communiquer efficacement.</p>
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full mt-4">J'inscris mon enfant</button>
          </div>
        </div>
        {/* Carte 2 */}
        <div className="bg-gray-900 rounded-lg shadow-md relative overflow-hidden">
          <div className="bg-gradient-to-b from-transparent to-black bg-opacity-60 absolute inset-0 w-full h-full"></div>
           <img src="/reading-boy.jpg" alt="Image Floue 2" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">Développement cognitif</h3>
            <p className='text-white text-sm'>La lecture stimule le cerveau des enfants et favorise le développement cognitif en améliorant la mémoire, la concentration, la pensée critique et les compétences de résolution de problèmes.</p>
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full mt-4">J'inscris mon enfant</button>
          </div>
        </div>
        {/* Carte 3 */}
        <div className="bg-gray-900 rounded-lg shadow-md relative overflow-hidden">
          <div className="bg-gradient-to-b from-transparent to-black bg-opacity-60 absolute inset-0 w-full h-full"></div>
          <img src="/kiddo-reading.jpg" alt="Image Floue 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">Développement de l'imagination</h3>
            <p className='text-white text-sm'>Les livres permettent aux enfants d'explorer des mondes imaginaires, des idées et des perspectives différentes, ce qui stimule leur créativité et leur capacité à penser de manière inventive.</p>
            <button className="bg-[#DC7211] text-white font-semibold py-2 px-4 rounded-full mt-4">J'inscris mon enfant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
