import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, description }) => {
  return (
    <div className="bg-gray-0 h-[650px] flex flex-col justify-center items-center text-center p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>

      {/* Description */}
      <p className="text-lg text-gray-100 mb-8">{description}</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link to="/menu">
          <button className="bg-orange-600 text-white hover:bg-orange-100 hover:text-orange-600 py-2 px-4 rounded">
          View Menu
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-gray-100 text-orange-600 hover:bg-orange-600 hover:text-white py-2 px-4 rounded">
          Contact us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
