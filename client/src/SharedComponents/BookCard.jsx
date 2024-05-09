import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BookCard = ({ headline, books }) => {
  return (
    <>
      <div className='px-4 lg:px-24 mb-2 mt-4'>
        <h2 className='text-2xl font-bold text-[#DC7211] mt-5 mb-2'>{headline}</h2>
      </div>

      <div className='px-4 lg:px-24 pb-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books && books.map(book => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`} className="flex flex-col items-center">
                <img src={book.bookCover} alt="bookCover" className="mb-2" />
                <p className="text-center font-semibold">{book.title}</p>
                <p className="text-center">{book.author}</p>
              </Link>
              <button className='bg-[#DC7211] text-white py-2 px-4 rounded-lg mt-2'>
                Ajouter à ma bibliothèque
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BookCard;
