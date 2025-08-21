import React from "react";
import CommonBanner from "../../Components/reusable/CommonBanner";
import bannerImg from "/assets/news and gallery/news-banner.png";
import News from "./components/News";
import Gallery from "./components/Gallery";
import VideoGallery from "./components/VideoGallery";

const NewsandGallery = () => {
  return (
    <div>
      <CommonBanner backgroundImage={bannerImg} title={"News & Gallery"} />
      <News />
      <Gallery />
      <VideoGallery />
    </div>
  );
};

export default NewsandGallery;
