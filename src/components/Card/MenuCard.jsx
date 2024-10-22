import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Importer le contexte


function MenuCard({ item }) {
  const { addToCart } = useContext(CartContext); // Récupérer la fonction addToCart

  return (
    <div className="max-w-sm bg-black shadow-md rounded-lg overflow-hidden">
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-orange-100">{item.title}</h3>
        <p className="text-gray-100">
          {item.ingredients.slice(0, 20)}...
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-orange-600">${item.price}</span>
          <button
            onClick={() => addToCart(item)} // Ajouter l'article au panier
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
