import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 

function SocialLinks() {
    return (
        <div className="col-span-1">
          <h3 className="text-xl text-white mb-8 font-bold">follow us</h3>
          <ul className="flex space-x-3">
            <li>
              <a href="#" className="hover:text-white" aria-label="YouTube">
                <FaYoutube className="text-orange-500 text-3xl bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/www.nomadgastronomy.gr/?locale=fr_FR" className="hover:text-white" aria-label="Facebook">
                <FaFacebookF className="text-orange-500 text-3xl bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="nomad_mediterranean_gastronomy" className="hover:text-white" aria-label="Instagram">
                <FaInstagram className="text-orange-500 text-3xl bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <FaTwitter className="text-orange-500 text-3xl bg-white p-2 rounded-full hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
      );
}

export default SocialLinks;