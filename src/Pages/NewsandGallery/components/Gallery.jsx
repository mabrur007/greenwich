import React, { useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import motherTower from "/assets/news and gallery/mother-tower.png";
import receptionCafe from "/assets/news and gallery/reception-cafe.jpg";
import cottages from "/assets/news and gallery/cottages.jpg";
import greenareas from "/assets/news and gallery/green-areas.jpg";
import waterpark from "/assets/news and gallery/water park.jpg";
import spagym from "/assets/news and gallery/spa-gym.jpg";
import playground from "/assets/news and gallery/playground.jpg";
import mosque from "/assets/news and gallery/mosque.jpg";
import kebabStation from "/assets/news and gallery/kebab-station.jpg";
import { GalleryVerticalEnd, X, ArrowLeft, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [
    { id: 1, image: motherTower, name: "Mother Tower" },
    { id: 2, image: receptionCafe, name: "Reception Cafe" },
    { id: 3, image: cottages, name: "Cottages" },
    { id: 4, image: greenareas, name: "Green Areas" },
    { id: 5, image: waterpark, name: "Water Park" },
    { id: 6, image: spagym, name: "Spa & Gym" },
    { id: 7, image: playground, name: "Playground" },
    { id: 8, image: mosque, name: "Mosque" },
    { id: 9, image: kebabStation, name: "Kebab Station" },
  ];

  const openViewer = (index) => {
    setSelectedImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setSelectedImageIndex(null);
  };

  const showPrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-16">
      <SectionIntro
        backgroundText="Photos"
        title="Photo Gallery"
        subtitle="Every Picture Tells a Story of Elegant Living"
        titleColor="text-[#98643E]"
        subtitleColor="text-[#142929]"
        subtitleSize="text-6xl"
        strokeClassName="amenities-stroke-yellow"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openViewer(index)}
            className="relative group cursor-pointer h-[300px]"
          >
            {/* Stack Backgrounds */}
            <div className="absolute -rotate-2 -top-2 -left-2 w-full h-full bg-[#98643E] z-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"></div>
            <div className="absolute rotate-2 top-2 left-2 w-full h-full bg-[#98643E]/80 z-0 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out delay-100"></div>

            {/* Main image container */}
            <div className="relative z-10 w-full h-full overflow-hidden">
              <img
                src={image.image}
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-lg">View Images</span>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-60 z-10">
                <h3 className="text-lg text-white flex items-center justify-center gap-2">
                  <GalleryVerticalEnd className="w-6 h-6" /> {image.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeViewer}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
          >
            <X size={30} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
          >
            <ArrowLeft size={30} />
          </button>

          <div className="max-w-3xl mx-auto px-4">
            <img
              src={images[selectedImageIndex].image}
              alt={images[selectedImageIndex].name}
              className="max-h-[80vh] w-auto mx-auto shadow-lg"
            />
            <h2 className="text-white text-center mt-4 text-xl">
              {images[selectedImageIndex].name}
            </h2>
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
          >
            <ArrowRight size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
