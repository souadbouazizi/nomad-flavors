// src/components/Info.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importer les icônes

function Info() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact us</h2>
      <p className="text-gray-100 mb-4">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi optio praesentium consequuntur quam architecto officiis nostrum nesciunt repellat quis fuga voluptates voluptatem cupiditate accusantium consequatur, amet nisi ea exercitationem modi. Quam numquam eius harum reiciendis, qui fugit quibusdam odio accusamus, earum explicabo laboriosam molestiae at? Quas, expedita? Deleniti, vel.
      </p>
      <div className="flex items-center mb-4 text-gray-100">
        <FaMapMarkerAlt className="text-orange-500 mr-2" />
        <span>ippodamu 21, Ródos, Greece</span>
      </div>
      <div className="flex items-center mb-4 text-gray-100">
        <FaPhoneAlt className="text-orange-500 mr-2" />
        <span><a href="tel:+30 693 248 0006">        +30 693 248 0006</a></span>
      </div>
      <div className="flex items-center mb-4 text-gray-100">
        <FaEnvelope className="text-orange-500 mr-2" />
        <span><a href="mailto:info@nomadgastronomy.gr">info@nomadgastronomy.gr</a></span>
      </div>
    </div>
  );
}

export default Info;
