import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BookCard = ({ headline, books }) => {
  const { user, addBookToLibrary } = useContext(UserContext);


  if (!books || books.length === 0) {
    return <div>No books available</div>;
  }


  return (
    <>
      <div className='px-4 lg:px-24 mb-2 mt-4'>
        <h2 className='text-2xl font-bold text-[#DC7211] mt-5 mb-2'>{headline}</h2>
      </div>

      <div className='px-4 lg:px-24 pb-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10} // Adjusted space between slides
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10, // Adjusted space between slides for smaller screens
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map(book => (
            <SwiperSlide key={book.id}>
              <div className="flex flex-col items-center">
                <Link to={`/book/${book.id}`} className="flex flex-col items-center">
                  <img src={book.bookCover} alt="bookCover" className="mb-2 w-full max-w-[200px] h-auto" />
                  <p className="text-center font-semibold">{book.title}</p>
                  <p className="text-center font-semibold">Âge concerné: {book.age} ans</p>
                </Link>
                <div className="text-center">
                  <button onClick={() => addBookToLibrary(book)} className='bg-[#DC7211] text-white py-2 px-4 rounded-lg mt-2'>
                    Ajouter à ma bibliothèque
                  </button>
                </div>      
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BookCard;