import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Registration from './pages/Registration';
import About from './pages/About';
import Navigation from './nav/Navigation'; // Assuming you have a Navigation component
import "./styles/styles.scss";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reg' element={<Registration />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};
