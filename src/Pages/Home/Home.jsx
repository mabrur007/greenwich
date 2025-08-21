import React from "react";
import Hero from "./Components/Hero";
import Overview from "./Components/Overview";
import VideoSection from "./Components/VideoSection";
import Facilities from "./Components/Facilities";
import PropertyOpportunity from "./Components/PropertyOpportunity";
import ClientReview from "./Components/ClientReview";

import Showcase from "./Components/Showcase";
import Invest from "./Components/Invest";
import Luxury from "./Components/Luxury";
import Ambassador from "./Components/Ambassador";
import PromoModal from "./Components/PromoModal";

const Home = () => {
  return (
    <div>
      <PromoModal />
      <Hero />
      <Overview />
      <VideoSection />
      <Facilities />
      <Showcase />
      <PropertyOpportunity />
      <Ambassador />

      <ClientReview />
      {/* <PhotoGallery /> */}
      {/* <News /> */}

      {/* Section where Invest becomes fixed and Luxury scrolls over it */}
      <div className="relative h-[250vh]">
        {/* Sticky background section */}
        <div className="sticky top-0 h-screen z-0">
          <Invest />
        </div>

        {/* Scrollable content on top */}
        <div className="relative z-10">
          <Luxury />
        </div>
      </div>
    </div>
  );
};

export default Home;
