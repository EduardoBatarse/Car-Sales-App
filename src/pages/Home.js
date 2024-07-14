import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/images/hero.png" alt="Hero" className="hero-image" />

        <div className="hero-text">

          <h1>Welcome to Batarse's Motors</h1>
          <p>Your one-stop shop for all your car needs</p>
          <Link to="/cars" className="hero-button">Explore Cars</Link>
        </div>

      </div>
      <div className="features-section">
        {/* <img src="/images/hero.jpg" alt="Hero" className="hero-image" /> */}

        <div className="feature">
          <h2>Why Choose Us</h2>

          <img src="/images/quality.png" alt="Feature 1" />
          <h3>Quality Cars</h3>
          <p>We offer a wide range of quality cars to meet your needs.</p>
        </div>
        <div className="feature">
          <img src="/images/prices.png" alt="Feature 2" />
          <h3>Best Prices</h3>
          <p>We provide the best prices in the market.</p>
        </div>
        <div className="feature">
          <img src="/images/service.png" alt="Feature 3" />
          <h3>Excellent Service</h3>
          <p>Our customer service is second to none.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
