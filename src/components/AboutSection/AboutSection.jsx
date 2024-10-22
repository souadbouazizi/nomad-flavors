import React, { useState } from 'react';

import AboutSectionImg from '../../User/Images/AboutSection.png';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false); // État pour gérer l'affichage des paragraphes

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Inverse l'état quand on clique sur "Read More"
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bloc gauche: titre, description, et bouton */}
        <div className="transform transition-transform duration-500 hover:scale-90">
          <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-100 mb-4">
            Welcome to our restaurant, where we serve delicious meals crafted from the finest ingredients.
          </p>

          {/* Afficher les paragraphes supplémentaires si l'état est true */}
          {isExpanded && (
            <>
              <p className="text-gray-100 mb-4">
                Our passion for food is reflected in every dish we prepare, ensuring a delightful experience for all our guests.
                Whether you are here for a quick bite or a full dining experience, we are committed to providing exceptional service and memorable flavors.
              </p>
              <p className="text-gray-100 mb-4">
                Come explore our menu and see what makes our restaurant special.
              </p>
              <p className="text-gray-100 mb-4">
                Enjoy a cozy ambiance and savor the diverse tastes from our carefully curated menu that showcases the best culinary practices.
              </p>
            </>
          )}

          {/* Bouton "Read More" ou "Show Less" */}
          <button
            onClick={handleToggle}
            className="text-orange-500 hover:underline mb-4"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>

         
        </div>

        {/* Bloc droit: image */}
        <div className="transform transition-transform duration-500 hover:scale-90">
          <img
            src={AboutSectionImg}
            alt="About us"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
