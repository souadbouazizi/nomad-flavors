import React, { useState, useEffect } from 'react'; // N'oubliez pas d'importer useEffect
import { Link } from 'react-router-dom';
import menuItems from '../../User/menuData';  // Importation des données depuis menuData.js
import './PopularMenuSection.css';

const PopularMenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('popular-menu-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="popular-menu-section" className={`container py-5 bg-black px-4 md:px-20 ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="text-center my-4 text-4xl font-bold text-white">Popular Menu</h2>
      <div className="flex flex-wrap justify-center mt-5">
        {menuItems.map((item) => (
          <div className="w-full md:w-1/4 p-1" key={item.id}>
            <div className="card h-[500px] text-center bg-black pb-5 overflow-hidden drop-shadow card-shadow">
              <img
                src={item.image}
                className="card-img-top w-full h-[300px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                alt={item.title}
              />
              <div className="card-body py-3">
                <h3 className="card-title text-white font-bold">{item.title}</h3>
                
                {/* Affichage conditionnel pour les ingrédients avec le sous-titre */}
                <IngredientToggle subtitle={item.subtitle} ingredients={item.ingredients} />
                
                <Link to="/checkout" className="btn mt-5 bg-orange-500 text-white px-5 py-2 hover:bg-orange-600">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IngredientToggle = ({ subtitle, ingredients }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Sépare les ingrédients en un tableau
  const ingredientList = ingredients.split(', '); // Assurez-vous que les ingrédients sont séparés par une virgule

  // Fonction pour afficher les ingrédients
  const displayedIngredients = isExpanded ? ingredientList : ingredientList.slice(0, 3);

  const toggleIngredients = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-start mt-3 mx-2 mb-7">
      <h6 className="text-white font-semibold mr-2">{subtitle}:</h6> {/* Sous-titre en gras */}
      <p className="text-sm text-gray-300">
        {displayedIngredients.join(', ')} {/* Affiche les ingrédients affichés */}
        <button 
          onClick={toggleIngredients} 
          className="text-orange-500 text-sm ml-2"
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>
      </p>
    </div>
  );
};

export default PopularMenuSection;
