import React from 'react';

const Testimonial = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-bold text-3xl text-orange-500">TÉMOIGNAGES</h2>
          <p className="text-gray-500">Ce que disent les parents</p>
        </div>
        <div>
          {/* Icons for next and previous */}
          <i className="fas fa-chevron-left text-gray-500 mr-4"></i>
          <i className="fas fa-chevron-right text-gray-500"></i>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Testimonial 1 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg mb-4">"Mon enfant adore Mfumu Buku Kids ! Cela lui a vraiment ouvert l'esprit à la lecture et à l'apprentissage. Je le recommande vivement à tous les parents."</p>
          <div className="flex items-center">
            <img src="/Alice-dupont.jpg" alt="Parent 1" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">Alice Dupont</p>
              <p className="text-gray-500">Professeur</p>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg mb-4">"Je suis impressionné par la qualité des livres et des activités proposés par Mfumu Buku Kids. Mon enfant est tellement enthousiaste à l'idée de lire maintenant!"</p>
          <div className="flex items-center">
            <img src="/John-smith.jpg" alt="Parent 2" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">John Smith</p>
              <p className="text-gray-500">Ingénieur</p>
            </div>
          </div>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg mb-4">"Mfumu Buku Kids a transformé la façon dont mon enfant perçoit la lecture. Ils rendent l'apprentissage amusant et excitant. Merci pour ce service incroyable!"</p>
          <div className="flex items-center">
            <img src="/Emma-Johnson.jpg" alt="Parent 3" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-semibold">Emma Johnson</p>
              <p className="text-gray-500">Écrivain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
