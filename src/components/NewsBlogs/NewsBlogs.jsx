import React, { useState, useEffect } from 'react';
import { newsData } from '../../User/NewsBlogData'; // Importer les données
import './NewsBlogs.css';
import { Link } from 'react-router-dom';

const NewsBlogs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('news-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="news-section" className={`container mx-auto py-10 px-4 md:px-20 ${isVisible ? 'animate-zoomIn' : ''}`}>
      <h2 className="text-center text-3xl font-bold mb-8 text-white">Latest News & Blogs</h2>
      <p className='text-center text-gray-100 mb-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem facere totam quod quae repellat nam, aliquam est omnis sint ad minus labore praesentium consectetur laboriosam. Quam qui inventore unde quas atque! Possimus deserunt corporis eligendi obcaecati nesciunt reiciendis repellendus tenetur libero, totam ab. Ratione sequi aliquid eveniet facere distinctio ducimus? Quasi assumenda nemo vitae.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {newsData.map((news) => (
          <div key={news.id} className="card bg-black shadow-lg rounded-t-lg overflow-hidden border-b-2 border-orange-500 text-center">
            <div className="relative overflow-hidden">
              <img 
                src={news.imageUrl} 
                alt={news.title} 
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">{news.title}</h3>
              <p className="text-gray-100 mb-4">{news.description}</p>
              <Link to="/News">
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                Read More
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogs;
