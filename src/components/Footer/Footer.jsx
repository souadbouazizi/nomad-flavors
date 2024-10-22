import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import LogoFooter from '../../User/Images/logo.png';

function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-10 px-10 md:px-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Colonne 1 : Logo et description */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-white mb-2">
            <img src={LogoFooter} alt="Nomad Flavors" />
          </h2>
          <p className="text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusantium fugit cum itaque delectus voluptatem dolorem alias? Ad, alias maxime!
          </p>
        </div>

        {/* Colonne 2 : Liens de navigation */}
        <div className="col-span-1">
          <h3 className="text-xl text-white mb-2 font-bold">Navigation links</h3>
          <div className='flex flex-row gap-8'>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white"> Checkout</a></li>
            <li><a href="#" className="hover:text-white">Dashboard</a></li>

          </ul>
          <ul className="space-y-2">

            <li><a href="#" className="hover:text-white"> News</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>

          </div>
         
        </div>

        {/* Colonne 3 : Liens sociaux */}
        <div>
   
        <SocialLinks />
        </div>
       

        {/* Colonne 4 : Newsletter */}
        <div className="col-span-1">
          <h3 className="text-xl text-white mb-2 font-bold">Newsletter</h3>
          <p className="text-gray-100 mb-4">
          Sign up to receive the latest news and special offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-600 text-white p-2 rounded-r-md hover:bg-orange-700">
            Register
            </button>
          </form>
        </div>
      </div>

        <hr className='mt-8 border-gray-500' />
      {/* Partie inférieure du footer */}
      <div className="text-center text-gray-200 mt-10">
        <p>&copy; 2024 <a href="#">Nomad Flavors</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
