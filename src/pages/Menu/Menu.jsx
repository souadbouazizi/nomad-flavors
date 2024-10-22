
import React from 'react';
import MenuSection from '../../components/MenuSection/MenuSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const Menu = () => {
  return (
    <div className="relative">
      <HeroSection
      title="Something hot. Something tasty" 
      description="Eating well, a pleasure to share" 
       />
      <MenuSection />
    </div>

  );
};

export default Menu;
