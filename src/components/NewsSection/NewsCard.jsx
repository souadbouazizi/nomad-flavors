// src/components/NewsCard.js
import React, { useState } from 'react';

const NewsCard = ({ news }) => {
  // État pour gérer l'affichage du contenu complet
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Alterne l'état d'affichage du contenu
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={news.image} alt={news.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <div className="flex justify-between">
        <p className="text-gray-600 font-semibold">{news.manager}</p>
        <p className="text-gray-500 text-sm">{news.date}</p>
        </div>
    
        
        <h3 className="text-lg font-bold mb-2 text-orange-500">{news.title}</h3>
        <p className="text-gray-700 mb-4">
          {isExpanded ? news.content : `${news.content.slice(0, 100)}...`}
        </p>
        <button
          className="text-orange-500 hover:underline"
          onClick={toggleContent} // Appelle la fonction pour changer l'état
        >
          {isExpanded ? 'Read Less' : 'Read More'} {/* Change le texte selon l'état */}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
