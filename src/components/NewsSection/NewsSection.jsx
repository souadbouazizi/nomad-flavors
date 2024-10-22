// src/components/NewsSection.js
import React from 'react';
import { newsData } from '../../User/newsData'; // Importer les données
import NewsCard from './NewsCard'; // Importer le composant NewsCard

const NewsSection = () => {
  return (
    <div className="container mx-auto py-10 px-10 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
