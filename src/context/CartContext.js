import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    setCart([...cart, car]);
  };

  const removeFromCart = (carId) => {
    setCart(cart.filter(car => car.id !== carId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
