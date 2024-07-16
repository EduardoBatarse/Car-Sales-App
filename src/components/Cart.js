import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../components/List.css'; // Asegúrate de que la ruta es correcta

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [showLogin, setShowLogin] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, car) => {
      const price = parseFloat(car.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setShowLogin(true);
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((car) => (
              <li key={car.id} className="cart-item">
                <div className="image-container">
                  <img src={`/images/${car.id}.png`} className="image-cart" alt={car.name} />
                </div>
                <div className="car-info">
                  <h2>{car.name}</h2>
                  <p>{car.price}</p>
                  <button className="add-to-cart-button-cart" onClick={() => removeFromCart(car.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-summary">
        <h2>Summary</h2>
        <ul>
          {cart.map((car) => (
            <li key={car.id} className="summary-item">
              <div className="summary-info">
                <h3>{car.name}</h3>
                <p>{car.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">Total: ${calculateTotal()}</div>
        <button className="add-to-cart-button-pay" onClick={handleCheckout}>Buy Now!</button>
        {showLogin && <Link to="/login" className="add-to-cart-button-cart">Login to continue...</Link>}
      </div>
    </div>
  );
};

export default Cart;
