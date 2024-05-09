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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
        <>
          {!(window.location.pathname.includes('/librairie') || window.location.pathname.includes('/MyLibrary') || window.location.pathname.includes('/MyBooks') || window.location.pathname.includes('/ReadingClub') || window.location.pathname.includes('/Subscription') || window.location.pathname.includes('/book/:id') || window.location.pathname.includes('/MyProfile')) && <NavBar isLoggedIn={isLoggedIn} />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/librairie" element={isLoggedIn ? <Librairie /> : <Navigate to="/login" />} />
            <Route path="/MyLibrary" element={<MyLibrary />} />
            <Route path="/MyBooks" element={<MyBooks />} />
            <Route path="/ReadingClub" element={<ReadingClub />} />
            <Route path="/Subscription" element={<Subscription />} />
            <Route path="/MyProfile" element={<MyProfile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
    </Router>
  );
}

export default App;
