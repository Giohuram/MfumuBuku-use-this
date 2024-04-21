import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import BookCategory from '../components/BookCategory';
import Abonnement from '../components/Abonnement';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Advantages from '../components/advantages';



const Landingpage = () => {
  return (
    <div>
        <NavBar /> 
        <HeroSection />
        <BookCategory />
        <Advantages />
        <Abonnement />
        <Testimonial />
        <Newsletter />
        <Footer /> 


      

    </div>
  )
}

export default Landingpage; 