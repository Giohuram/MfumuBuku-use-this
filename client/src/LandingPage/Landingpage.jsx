import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import BookCategory from '../components/BookCategory';
import Abonnement from '../components/Abonnement';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Advantages from '../components/advantages';

const Landingpage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookCategory />
      <Advantages />
      <Abonnement />
      <Testimonial />
      <Newsletter />
      <Footer />
      <div
        className="fixed bottom-4 right-4 bg-black p-2 rounded-full cursor-pointer"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-white" />
      </div>
    </div>
  );
}

export default Landingpage;
