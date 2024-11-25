// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Roadmap from './pages/Roadmap';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
