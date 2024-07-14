import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta es correcta

const AccessoriesDetails = () => {
  const location = useLocation();
  const { accesorie } = location.state || {};
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto

  if (!accesorie) return <div>Loading...</div>;

  return (
    <div className="car-detail">
      <div className="car-detail-content">
        <div className="image-container">
          <img src={`/images/${accesorie.id}.png`} className="image" alt={accesorie.name} />
          <button className="add-to-cart-button" onClick={() => addToCart(accesorie)}>Add to Cart</button>
        </div>
        <div className="car-info">
          <h2>{accesorie.name}</h2>
          <p>{accesorie.price}</p>
          <p>{accesorie.description}</p>
        </div>
      </div>
      <div className="logo-container">
        <img src="/logo.png" className="logo" alt="Batarse's Motors Logo" />
      </div>
    </div>
  
);
};

export default AccessoriesDetails;
