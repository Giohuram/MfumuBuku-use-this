// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage/Landingpage';
import Librairie from './Pages/Librairie';
import MyLibrary from './LibraryPages/MyLibrary';
import MyBooks from './LibraryPages/MyBooks';
import ReadingClub from './LibraryPages/ReadingClub';
import Subscription from './LibraryPages/Subscription';
import MyProfile from './LibraryPages/MyProfile';
import Lecture from './SpecificComponent/Lecture';
import { BookProvider } from '../src/Context/BookContext';
import { MyBooksProvider } from '../src/Context/MyBooksContext';
import LectureAudio from './SpecificComponent/LectureAudio';
import ParentalControl from './SpecificComponent/ParentalControl';
import StatLecture from './LibraryPages/StatLecture';
import SingleBook from './Pages/SingleBook'
import MonCompte from './SpecificComponent/MonCompte';
import {UserContextProvider} from './Context/userContext';
import Banner from './SharedComponents/Banner';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
   
    <Router>
      <UserContextProvider>
        <>
          {!(window.location.pathname.includes('/librairie') || window.location.pathname.includes('/MyLibrary') || window.location.pathname.includes('/MyBooks') || window.location.pathname.includes('/ReadingClub') || window.location.pathname.includes('/Subscription') || window.location.pathname.includes('/LectureAudio') || window.location.pathname.includes('/Lecture') || window.location.pathname.includes('/book/:id') || window.location.pathname.includes('/MyProfile')) && <NavBar isLoggedIn={isLoggedIn} />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={
                <Login setIsLoggedIn={setIsLoggedIn} /> 
             } 
            />
            <Route path="/signup" element={<SignUp />} />
            <Route 
              path="/librairie" 
              element={isLoggedIn ? 
             <BookProvider>
                <Librairie />
             </BookProvider>   
               : <Navigate to="/login" 
              />
            } 
              
              />
            <Route path="/MyLibrary" element={<MyLibrary />} />
            <Route 
              path="/MyBooks" 
              element={
                <BookProvider>
                  <MyBooksProvider>
                    <MyBooks />
                  </MyBooksProvider>
                </BookProvider>  
              }  
            />
            <Route 
              path="/Lecture" 
              element={
                <BookProvider>
                   <MyBooksProvider> 
                    < Lecture />
                  </MyBooksProvider>
                </BookProvider>
              } 
              />
            <Route 
              path="/LectureAudio" 
              element={
                <BookProvider>
                   <MyBooksProvider> 
                    < LectureAudio />
                  </MyBooksProvider>
                </BookProvider>
              } 
              />  
            <Route path="/ReadingClub" element={<ReadingClub />} />
            <Route path="/MonCompte" element={<MonCompte />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/ParentalControl" element={<ParentalControl />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/StatLecture" element={<StatLecture />} />
            <Route 
              path="/Book/id/:id" 
              element={<SingleBook />}
              loader={(params) => {
                const bookId = params.id; // Récupère l'ID du livre à partir des paramètres d'URL
                return fetch(`/Book/id/${bookId}`)
                  .then(response => response.json())
                  .catch(error => {
                    console.error('Error loading book:', error);
                    return null; // Retourne null en cas d'erreur de chargement
                  });
              }}
            />

            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="/" element={<Banner />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      </UserContextProvider>  
    </Router>
  );
}

export default App;
