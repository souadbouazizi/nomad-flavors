import React from 'react';
import './OurRestaurant.css';
import OurRestaurantImg1 from '../../User/Images/OurRestaurant1.png';
import OurRestaurantImg2 from '../../User/Images/OurRestaurant2.png';

const OurRestaurant = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row  gap-4 items-center">
        {/* Bloc gauche avec 2 images */}
        <div className="flex flex-row w-[100%] gap-4 items-center">
          <div className="relative overflow-hidden">
            <img 
              src={OurRestaurantImg1}
              alt="Image 1" 
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="relative overflow-hidden">
            <img 
              src={OurRestaurantImg2} 
              alt="Image 2" 
              className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Bloc droit avec 2 colonnes (Our Restaurant et Opening Hours) */}
        <div className="flex flex-row justify-center gap-8">
          {/* Colonne "Our Restaurant" */}
          <div className="fade-in-left w-1/2">
            <h2 className=" md:text-3xl text-xl  font-bold mb-4 text-white">Our Restaurant</h2>
            <p className="text-gray-100">
              Welcome to our restaurant! We offer a unique dining experience with dishes made from fresh, locally sourced ingredients.
              Come and enjoy a variety of exquisite meals in a cozy, welcoming atmosphere.
            </p>
          </div>
          {/* Colonne "Opening Hours" */}
          <div className="fade-in-left w-1/2">
            <h2 className=" md:text-3xl text-xl font-bold mb-4 text-white">Opening Hours</h2>
            <ul className="text-gray-100">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
