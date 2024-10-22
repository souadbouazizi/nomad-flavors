// src/pages/Contact/Contact.js
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Info from '../../components/info/Info'; // Assurez-vous que le nom du fichier et du composant soit en majuscule
import FormContact from '../../components/FormContact/FormContact';

function Contact() {
  return (
    <div>
      <div className='h-[500px]'>
      <HeroSection
      title="Wherever you are" 
      description="contact Nomad Flavors"
       />
      </div>
    
      <div className='md:px-20 px-4'>

      <div className="flex flex-col md:flex-row justify-around items-start p-10 rounded-lg  bg-[rgba(255,255,255,.35)] mb-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Info />
        </div>
        <div className="w-full md:w-1/2">
          <FormContact />
        </div>
      </div>

      </div>
      
    </div>
  );
}

export default Contact;
