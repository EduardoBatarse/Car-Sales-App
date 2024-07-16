import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CarDetail = () => {
  const location = useLocation();
  const { car } = location.state || {};
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!car) return <div>Loading...</div>;

  const handleAddToCart = (car) => {
    addToCart(car);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="car-detail">
      <div className="car-detail-content">
        <div className="image-container">
          <img src={`/images/${car.id}.png`} className="image" alt={car.name} />
          <button
            className={`add-to-cart-button ${isAdded ? 'added' : ''}`}
            onClick={() => handleAddToCart(car)}
          >
            {isAdded ? 'Succesfully Added to Cart !' : 'Add to Cart'}
          </button>
        </div>
        <div className="car-info">
          <h2>{car.name}</h2>
          <p>{car.price}</p>
          <p>{car.description}</p>
        </div>
      </div>
      <div className="logo-container">
        <img src="/logo.png" className="logo" alt="Batarse's Motors Logo" />
      </div>
    </div>
  );
};

export default CarDetail;
