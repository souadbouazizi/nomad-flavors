import React from 'react';
import { Link } from 'react-router-dom';

function SectionAboutBt() {
  return (
    <div>
        
        <Link to="/about">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition-colors">
              Learn More
            </button>
          </Link>
    </div>
  )
}

export default SectionAboutBt;