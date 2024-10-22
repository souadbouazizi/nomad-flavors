import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../User/Images/logo.png';
import ReserveForm from '../ReserveForm/ReserveForm'; // Import the ReserveForm component

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Declare state for the drawer

  // Function to handle scroll and set 'isSticky' state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the drawer for the reservation form
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Use setIsDrawerOpen to toggle drawer state
  };

  return (
    <nav className={`sticky top-0 z-50 p-4 md:px-40 transition-all duration-300 ${isSticky ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <img src={Logo} alt="Nomad Flavors" className="h-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-orange-500">Home</Link>
          <Link to="/menu" className="text-white hover:text-orange-500">Menu</Link>
          <Link to="/checkout" className="text-white hover:text-orange-500">Checkout</Link>
          <Link to="/news" className="text-white hover:text-orange-500">News</Link>
          <Link to="/about" className="text-white hover:text-orange-500">About</Link>
          <Link to="/contact" className="text-white hover:text-orange-500">Contact</Link>
          <button
            onClick={toggleDrawer} // This will open the reservation drawer
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          >
            Reserve
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black text-2xl focus:outline-none">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black shadow-lg rounded-lg p-4">
          <Link to="/" className="block py-2 text-black hover:text-orange-500" onClick={toggleMenu}>Home</Link>
          <Link to="/menu" className="block py-2 text-white hover:text-orange-500" onClick={toggleMenu}>Menu</Link>
          <Link to="/checkout" className="block py-2 text-white hover:text-orange-500" onClick={toggleMenu}>Checkout</Link>
          <Link to="/news" className="block py-2 text-white hover:text-orange-500" onClick={toggleMenu}>News</Link>
          <Link to="/about" className="block py-2 text-white hover:text-orange-500" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block py-2 text-white hover:text-orange-500" onClick={toggleMenu}>Contact</Link>
          <button onClick={toggleDrawer} className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded mt-4">
            Reserve
          </button>
        </div>
      )}

      {/* Drawer for reservation form */}
      {isDrawerOpen && <ReserveForm toggleDrawer={toggleDrawer} />} {/* Render ReserveForm */}
    </nav>
  );
};

export default Navbar;
