import React, { useState } from 'react';
import { reviews } from '../../User/reviewsData'; // Importer les données

function CustomerReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedReviews, setExpandedReviews] = useState({});

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSelectPage = (page) => {
    setCurrentPage(page);
  };

  const handleToggleExpand = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div className="container mx-auto py-10 md:px-20 px-4">
        <h2 className='text-xl md:text-4xl text-white font-bold text-center mb-5'>Customer Reviews</h2>
        <p className='text-gray-100 text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi impedit hic id, veniam placeat eveniet necessitatibus quia.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {currentReviews.map((review) => (
          <div
            key={review.id}
            className="shadow-md rounded-lg p-6 transition transform hover:scale-95 duration-300" // Ajout du zoom out
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-48 h-48 rounded-full mx-auto"
            />
            <h3 className="text-center text-lg font-semibold mt-4 text-white">{review.name}</h3>
            <div className="text-center text-orange-500 mt-2">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p className="text-gray-100 mt-4">
              {expandedReviews[review.id]
                ? review.review
                : `${review.review.slice(0, 50)}...`}
              <button
                onClick={() => handleToggleExpand(review.id)}
                className="text-orange-500 hover:underline ml-2"
              >
                {expandedReviews[review.id] ? 'See less' : 'See more'}
              </button>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300' : 'bg-orange-500 text-white'}`}
        >
          ←
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleSelectPage(index + 1)}
            className={`p-2 rounded-full ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300' : 'bg-orange-500 text-white'}`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default CustomerReviews;
