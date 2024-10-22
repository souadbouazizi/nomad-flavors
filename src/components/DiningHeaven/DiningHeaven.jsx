import React, { useState } from 'react';
import DiningHeavenImg1 from '../../User/Images/DiningHeaven1.png'; // Remplacez par le chemin de votre image
import DiningHeavenImg2 from '../../User/Images/DiningHeaven2.png'; // Remplacez par le chemin de votre image


const DiningHeaven = () => {
  const [activeTab, setActiveTab] = useState('Outdoor'); // Onglet actif par défaut

  // Fonction pour changer d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-8 bg-black px-4 md:px-20">
      {/* Pills Tabs */}
      

      {/* Contenu des Onglets */}
      <div className="flex flex-col md:flex-row items-center text-white">
        <div className="flex-1">
            <h2 className='text-white text-2xl font-bold mb-3'>Discover Your Dining Heaven</h2>
        <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => handleTabChange('Outdoor')} 
          className={`px-4 py-1 rounded ${activeTab === 'Outdoor' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600 border border-orange-600'}`}
        >
          Outdoor
        </button>
        <button 
          onClick={() => handleTabChange('Indoor')} 
          className={`px-4 py-1 rounded ${activeTab === 'Indoor' ? 'bg-orange-600 text-white' : 'bg-white text-orange-600 border border-orange-600'}`}
        >
          Indoor
        </button>

      </div>
          {activeTab === 'Outdoor' && (
            <div className='md:pe-16 pe-4'>
              <h2 className="text-2xl font-bold ">Outdoor</h2>
              <p>Outdoor Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque itaque quasi ex quaerat ad. Culpa, rem veritatis? Nesciunt molestias corrupti ipsam id placeat laudantium reiciendis sed laborum voluptatum a!</p>
            </div>
          )}
          {activeTab === 'Indoor' && (
            <div>
              <h2 className="text-2xl font-bold">Indoor</h2>
              <p>Indoor Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nemo facilis commodi magni, libero natus dolorum temporibus molestias perspiciatis aliquam voluptatum deserunt numquam dicta fuga?</p>
            </div>
          )}
        </div>
        <div className="flex-1">
          {activeTab === 'Outdoor' && (
            <img src={DiningHeavenImg1} alt="Outdoor" className="w-full h-[200px] object-cover rounded shadow-xs" />
          )}
          {activeTab === 'Indoor' && (
            <img src={DiningHeavenImg2} alt="Indoor" className="w-full h-[200px] object-cover rounded shadow-xs" />
          )}

        </div>
      </div>
    </div>
  );
};

export default DiningHeaven;
