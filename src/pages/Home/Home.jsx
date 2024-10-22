import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import PopularMenuSection from '../../components/PopularMenuSection/PopularMenuSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import DiningHeaven from '../../components/DiningHeaven/DiningHeaven';
import NewsBlogs from '../../components/NewsBlogs/NewsBlogs';
import OurRestaurant from '../../components/OurRestaurant/OurRestaurant';
import AboutSection from '../../components/AboutSection/AboutSection';
import ConteurSection from '../../components/ConteurSection/ConteurSection';
import CustomerReviews from '../../components/CustomerReviews/CustomerReviews';
import SectionAboutBt from '../../components/SectionAboutBt/SectionAboutBt';

const Home = () => {
  return (
    <div className="relative">

        <HeroSection
          title="Welcome to Nomad Flavors" 
          description="Discover our menu and contact us for more information." 
        />
        <PopularMenuSection />
        <ServicesSection />
        <DiningHeaven />
        <NewsBlogs />
        <OurRestaurant />
        <div >
            <AboutSection />
            <div className='px-4 md:px-20 -mt-32 mb-24'> 
              <SectionAboutBt />
            </div>
          </div>
       
        <ConteurSection />
        <CustomerReviews />

    </div>
  );
};

export default Home;
