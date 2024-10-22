import React, { useState } from 'react';
import MenuCard from '../Card/MenuCard';

function CategorySlider({ category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(category.items.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = category.items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="my-8 px-10 md:px-20">
      <h2 className="text-2xl font-bold text-orange-500">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
        {currentItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300' : 'bg-orange-600 text-white'}`}
        >
          ←
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300' : 'bg-orange-600 text-white'}`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CategorySlider;
