import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo CSS

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo-container">
          <img src="/logo.png" className="logo" alt="Batarse Motors Logo" />
        </div>
        <div className="title-container">
          <h1>BATARSE MOTORS</h1>
          <h2>Cars Sale and Accessories</h2>
        </div>
      </div>
      <div className="header-bottom">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Go to Shopping Cart</Link></li> 

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
