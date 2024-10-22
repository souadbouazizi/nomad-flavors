import React from 'react';
import { MdOutlineRestaurantMenu } from "react-icons/md";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative">
        {/* Spinner qui tourne */}
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-orange-500  duration-500"></div>
        {/* Icône fixe au centre */}
        <MdOutlineRestaurantMenu 
          style={{ color: '#ea580c', width: '3rem', height: '3rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} 
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
