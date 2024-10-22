import React from 'react';
import { FaUtensils, FaCar, FaHome, FaTruck } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    { title: 'Catering', icon: <FaUtensils className="text-orange-500 text-3xl mr-2" /> },
    { title: 'Dine-In', icon: <FaHome className="text-orange-500 text-3xl mr-2" /> },
    { title: 'Take Out', icon: <FaCar className="text-orange-500 text-3xl mr-2" /> },
    { title: 'Delivery', icon: <FaTruck className="text-orange-500 text-3xl mr-2" /> },
  ];

  return (
    <div className="container py-8 text-white px-4 md:px-20">

      <div className="flex flex-wrap justify-center">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-center p-4 w-full md:w-1/4">
            {service.icon}
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
