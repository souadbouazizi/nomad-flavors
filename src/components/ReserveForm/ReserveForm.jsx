import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io'; // Import close icon

const ReserveForm = ({ toggleDrawer }) => {
  const [numberOfPersons, setNumberOfPersons] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset error state
    setError('');

    // Basic validation
    if (numberOfPersons < 1) {
      setError('The number of persons must be at least 1.');
      return;
    }

    // Here, you can add the logic to handle the reservation
    console.log('Reservation confirmed for', numberOfPersons, 'persons');

    // Close the drawer after submission (optional)
    toggleDrawer();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-end">
      <div className="w-80 bg-black h-full p-6 shadow-lg">
        <button onClick={toggleDrawer} className="text-black hover:text-orange-500">
          <IoMdCloseCircleOutline style={{ color: 'orange', width: '2rem', height: '2rem' }} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-orange-500">Reserve a Table</h2>
        {/* Drawer content here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="numberOfPersons">
              Number of Persons
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline ${
                error ? 'border-red-500' : ''
              }`}
              id="numberOfPersons"
              type="number"
              min="1"
              placeholder="Enter the number of persons"
              value={numberOfPersons}
              onChange={(e) => setNumberOfPersons(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mt-4"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveForm;
