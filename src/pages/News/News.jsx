import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import NewsSection from "../../components/NewsSection/NewsSection";

function News() {
  return <div>
    <HeroSection 
      title="It's good how hot it is" 
      description="They are made for you" />
      <NewsSection />
  </div>;
}

export default News;
