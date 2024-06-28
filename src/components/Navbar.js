import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaEnvelope, FaUser } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/products">Productos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart"><FaShoppingCart /> Carrito</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact"><FaEnvelope /> Contacto</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login"><FaUser /> Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
