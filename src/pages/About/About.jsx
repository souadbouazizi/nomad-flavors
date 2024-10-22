import { div } from 'framer-motion/client';
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import OurRestaurant from '../../components/OurRestaurant/OurRestaurant';
import ConteurSection from '../../components/ConteurSection/ConteurSection';

const About = () => {
  return (
    <div>

      <HeroSection
      title="About Nomad Flavors" 
      description="They are made for you"
       />
        <AboutSection />
        <ServicesSection />
        <OurRestaurant />
        <div className='mb-5'>
        <ConteurSection />
        </div>
       


    </div>
  
  );
};

export default About;
