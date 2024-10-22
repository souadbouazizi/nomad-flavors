import React from 'react';
import { menuData } from '../../User/DataMenu'; // Importer les données
import CategorySlider from '../CategorySlider/CategorySlider';

function MenuSection() {
  return (
    <div className="container mx-auto py-10 md:px-20 px-4">
      {/* Full Menu */}
      <h1 className="text-3xl font-bold text-center mb-10 text-white">Full Menu</h1>
      {menuData.categories.map((category) => (
        <CategorySlider key={category.id} category={category} />
      ))}
    </div>
  );
}

export default MenuSection;
