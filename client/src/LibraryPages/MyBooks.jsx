import React, { useContext, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from '../Context/BookContext'; 
import 'swiper/css';
import 'swiper/css/pagination';
import LibrairieNavBar from '../components/LibrairieNavBar';
// import BookCard from '../SharedComponents/BookCard';
import { UserContext } from '../Context/userContext';

const MyBooks = () => {
  const { myBooks, groupedBooks } = useBookContext(); // Accédez à groupedBooks depuis le contexte
  const { user } = useContext(UserContext); 
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleReadButtonClick = (book) => {
    setSelectedBook(book);
    navigate('/Lecture', { state: { book } });
  };

  const handleListenButtonClick = (book) => {
    setSelectedBook(book);
    navigate('/LectureAudio', { state: { book } });
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(`/user/${user.id}/favorites`);
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [user.id]);


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
              {groupedBooks[category].map((book, index) => (
                <SwiperSlide key={index}>
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
                        onClick={() => handleListenButtonClick(book)}
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