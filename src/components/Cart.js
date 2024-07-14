import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta es correcta

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((car) => (
            <li key={car.id}>
            <div className="image-container">
              <img src={`/images/${car.id}.png`} className="image-cart" alt={car.name} />                
              <div className="info-container">
                  <span className="name">{car.name}</span>
                   - 
                  <span className="price">-{car.price}</span>
                  <button onClick={() => removeFromCart(car.id)}>Remove</button>
              </div>
            </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
