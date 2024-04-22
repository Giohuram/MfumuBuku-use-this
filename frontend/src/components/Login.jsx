import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Login = () => {
  return (
    <>
      <div className="bg-[#DC7211] py-16 px-4 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Contenu texte */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue chez Mfumu buku kids</h1>
            <div className="text-sm md:text-xl text-white mb-6">
              <p>Mfumu Buku Kids, votre destination préférée pour l'éducation littéraire de vos enfants ! Chez Mfumu Buku Kids, nous croyons fermement au pouvoir transformateur des livres pour enrichir l'esprit des enfants et stimuler leur imagination.</p>
              <p className='text-white'>Bonne lecture d’avance!</p>
            </div>
            <div className='text-center mt-5'>
              <p className="text-white mb-4">Connectez-vous à votre compte.</p>
              {/* Logos des fournisseurs d'identité */}
              <div className="flex items-center justify-center mb-4">
                <FaGoogle className="text-white mr-2" />
                <FaFacebook className="text-white mr-2" />
                <FaApple className="text-white mr-2" />
              </div>

              <p className="text-white my-4">--------------------- OU CONTINUER AVEC ---------------------</p>

              {/* Formulaire de connexion */}
              <form className="flex flex-col items-center">
                <input type="email" placeholder="Email" className="mb-4 p-2 rounded border-2 border-gray-400" />
                <div className="flex items-center mb-4">
                  <input type="password" placeholder="Mot de passe" className="p-2 rounded border-2 border-gray-400 flex-grow" />
                </div>
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember" className="text-white mr-4 cursor-pointer">Remember me</label>
                  <a href="#" className="text-white underline cursor-pointer">Mot de passe oublié</a>
                </div>
                <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded mr-2">Se connecter</button>
              </form>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <img src="/heresection.png" alt="Image" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
