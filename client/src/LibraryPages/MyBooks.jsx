import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from '../Context/BookContext'; 
import 'swiper/css';
import 'swiper/css/pagination';
// import Banner from './Banner';
// import { fetchBookContent } from '../Utils/api'; // Importer la fonction depuis le fichier utilitaire
// import { Howl } from 'howler'; // Importer Howler.js
import LibrairieNavBar from '../components/LibrairieNavBar';
import BookCard from '../SharedComponents/BookCard';


const MyBooks = () => {
  const { myBooks, groupedBooks } = useBookContext(); // Accédez à groupedBooks depuis le contexte

  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);

  const handleReadButtonClick = (book) => {
    setSelectedBook(book);
    navigate('/Lecture', { state: { book } });
  };

  return (
    <div>
      <LibrairieNavBar />
      <div className="mt-10 ml-2 mr-2">
        {Object.keys(groupedBooks).map(category => (
          <div key={category}>
            <h2 className='text-2xl font-semibold'>{category}</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper w-full h-full"
            >
              {groupedBooks[category].map((book) => (
                <SwiperSlide key={book._id}>
                  <div className="flex flex-col items-center">
                    <img src={book.bookCover} alt="bookCover" className="mb-2" />
                    <div className="text-center">
                      <button
                        className="bg-[#DC7211] text-white py-2 px-4 rounded-lg mt-2 mr-2"
                        onClick={() => handleReadButtonClick(book)}
                      >
                        Lire
                      </button>
                      <button
                        className="bg-[#DC7211] text-white py-2 px-4 rounded-lg mt-2"
                      >
                        Écouter
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
