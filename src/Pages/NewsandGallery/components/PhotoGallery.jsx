import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import photo1 from "/assets/home/photo1.jpg";
import photo2 from "/assets/home/photo2.jpg";
import photo3 from "/assets/home/photo3.jpg";
import photo4 from "/assets/home/photo4.jpg";
import photo5 from "/assets/home/photo5.jpg";
import photo6 from "/assets/home/photo6.jpg";
import photo7 from "/assets/home/photo7.jpg";
import photo8 from "/assets/home/photo8.jpg";
import photo9 from "/assets/home/photo9.jpg";
import photo10 from "/assets/home/photo10.jpg";
const PhotoGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16">
      <h1 className="text-4xl lg:text-5xl text-center text-[#98643E] mb-16">
        Photo Gallery
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        <img
          src={photo1}
          alt="photo1"
          className="w-full h-[300px] object-cover"
          data-aos="fade-up"
        />
        <img
          src={photo2}
          alt="photo2"
          className="w-full h-[600px] object-cover"
          data-aos="zoom-in"
        />
        <img
          src={photo3}
          alt="photo3"
          className="w-full h-[350px] object-cover"
          data-aos="fade-right"
        />
        <img
          src={photo4}
          alt="photo4"
          className="w-full h-[400px] object-cover"
          data-aos="fade-left"
        />
        <img
          src={photo5}
          alt="photo5"
          className="w-full h-[280px] object-cover"
          data-aos="flip-up"
        />
        <img
          src={photo6}
          alt="photo6"
          className="w-full h-[660px] object-cover"
          data-aos="zoom-in-up"
        />
        <img
          src={photo7}
          alt="photo7"
          className="w-full h-[400px] object-cover"
          data-aos="fade-up"
        />
        <img
          src={photo8}
          alt="photo8"
          className="w-full h-[320px] object-cover"
          data-aos="fade-up"
        />
        <img
          src={photo9}
          alt="photo9"
          className="w-full h-[370px] object-cover"
          data-aos="fade-up"
        />
        <img
          src={photo10}
          alt="photo10"
          className="w-full h-[310px] object-cover"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
