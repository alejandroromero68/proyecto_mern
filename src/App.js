import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login'; // Importa el componente Login
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register'; // Importa el componente de registro
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> {/* Añade la ruta de login */}
          <Route path="/register" element={<Register />} /> {/* Añade la ruta de registro */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
