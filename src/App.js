import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';  // Importa el nuevo componente de la galería
import Footer from './components/Footer';
import './styles/global.css'; 



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} /> {/* Añade la nueva ruta */}
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
