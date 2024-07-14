import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta es correcta

const CarDetail = () => {
  const location = useLocation();
  const { car } = location.state || {};
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  if (!car) return <div>Loading...</div>;

  return (
    <div className="car-detail">
      <div className="car-detail-content">
        <div className="image-container">
          <img src={`/images/${car.id}.png`} className="image" alt={car.name} />
          <button className="add-to-cart-button" onClick={() => addToCart(car)}>Add to Cart</button>
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
