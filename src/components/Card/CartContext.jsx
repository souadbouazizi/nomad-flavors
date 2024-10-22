// src/components/Card/CartContext.js
import React, { createContext, useState } from 'react';

// Créer le contexte du panier
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Calculer le total
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
