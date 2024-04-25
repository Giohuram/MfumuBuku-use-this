import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage/Landingpage';
import Librairie from './Pages/Librairie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion de l'utilisateur

  return (
    <Router>
      <>
        {/* Afficher le NavBar général uniquement sur les routes autres que "/librairie" */}
        {window.location.pathname !== '/librairie' && <NavBar isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Route conditionnelle pour "Librairie" */}
          <Route path="/librairie" element={isLoggedIn ? <Librairie /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
