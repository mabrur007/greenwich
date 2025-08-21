import React, { useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";

// Assets
import infinityPool from "/assets/about-us/infinity-pool.svg";
import infinityPoolImg from "/assets/features/infinity-pool.png";
import rooftopLounge from "/assets/about-us/rooftop.svg";
import rooftopLoungeImg from "/assets/features/rooftop-lounge.png";
import indoorAmsementArea from "/assets/about-us/indoor.svg";
import indoorAmsementAreaImg from "/assets/features/indoor-amusement-area.png";
import kidsSplashPool from "/assets/about-us/splash-pool.svg";
import kidsSplashPoolImg from "/assets/features/kids-splash-pool.png";
import rooftopGarden from "/assets/about-us/rooftop-garden.svg";
import rooftopGardenImg from "/assets/features/rooftop-garden.png";
import fitness from "/assets/about-us/fitness.svg";
import fitnessImg from "/assets/features/fitness-center.png";
import spaandWellness from "/assets/about-us/spa-and-wash.svg";
import spaandWellnessImg from "/assets/features/spa-wellness.png";
import landscapeGarden from "/assets/about-us/landscape.svg";
import landscapeGardenImg from "/assets/features/landscape-garden.png";
import privateVillas from "/assets/about-us/private-villas.svg";
import privateVillasImg from "/assets/features/private-villas.png";
import diningRestaurant from "/assets/about-us/daining-restaurant.svg";
import diningRestaurantImg from "/assets/features/dining-resturant.png";
import kidsPlayArea from "/assets/about-us/kids-play-area.svg";
import kidsPlayAreaImg from "/assets/features/kid's-play-area.png";
import eventHall from "/assets/about-us/event-hall.svg";
import eventHallImg from "/assets/features/event-hall.png";
import meditationPavillion from "/assets/about-us/meditation.svg";
import meditationPavillionImg from "/assets/features/meditation-pavillion.png";
import concierge from "/assets/about-us/concierge.svg";
import conciergeImg from "/assets/features/concierge.png";
import walkways from "/assets/about-us/walkways.svg";
import walkwaysImg from "/assets/features/greenery-walkways.png";

// Amenities Data
const amenitiesData = [
  {
    id: 1,
    image: infinityPool,
    imageSlide: infinityPoolImg,
    name: "Infinity Pool",
    description:
      "Immerse yourself in our signature infinity pool that appears to merge seamlessly with the skyline. Surrounded by scenic beauty, it’s perfect for a relaxing swim or peaceful lounging. Whether day or night, the ambiance exudes tranquility and charm. A true highlight of luxury living at the resort.",
  },
  {
    id: 2,
    image: rooftopLounge,
    imageSlide: rooftopLoungeImg,
    name: "Rooftop Lounge",
    description:
      "Elevate your evenings at our stylish rooftop lounge offering sweeping panoramic views. Sip on handcrafted cocktails or enjoy gourmet small plates in an elegant open-air setting. With ambient lighting and cozy seating, it's perfect for socializing or quiet reflection under the stars.",
  },
  {
    id: 3,
    image: indoorAmsementArea,
    imageSlide: indoorAmsementAreaImg,
    name: "Indoor Amusement Area",
    description:
      "Step into a world of fun at our vibrant indoor amusement area, designed for guests of all ages. From arcade games and VR zones to interactive group activities, excitement never ends here. A weather-proof entertainment hub that’s ideal for family bonding or solo playtime.",
  },
  {
    id: 4,
    image: kidsSplashPool,
    imageSlide: kidsSplashPoolImg,
    name: "Kids' Splash Pool",
    description:
      "Our colorful splash pool is a safe and joyful retreat where children can laugh, play, and cool off. Shallow waters and playful designs ensure endless fun with total peace of mind for parents. It's the perfect space for little ones to beat the heat in style.",
  },
  {
    id: 5,
    image: rooftopGarden,
    imageSlide: rooftopGardenImg,
    name: "Rooftop Garden",
    description:
      "Bask in the sun or enjoy a refreshing swim high above the ground in our rooftop pool. With stunning views and a breezy, open setting, it offers an unmatched leisure experience. Whether you want a quiet dip or a poolside sunbath, this spot delivers both comfort and beauty.",
  },
  {
    id: 6,
    image: fitness,
    imageSlide: fitnessImg,
    name: "Fitness Center",
    description:
      "Maintain your fitness routine in our modern, fully equipped gym featuring top-tier machines and clean, inspiring interiors. Whether you're into cardio, strength training, or stretching, we’ve got you covered. Open for all levels, it’s the perfect place to energize your day.",
  },
  {
    id: 7,
    image: spaandWellness,
    imageSlide: spaandWellnessImg,
    name: "Spa & Wellness",
    description:
      "Rejuvenate your body and mind at our luxurious Spa & Wellness center. Choose from a range of therapies including massages, facials, and holistic treatments tailored to your needs. With calming aromas and tranquil surroundings, every visit promises deep relaxation and renewal.",
  },
  {
    id: 8,
    image: landscapeGarden,
    imageSlide: landscapeGardenImg,
    name: "Landscaped Gardens",
    description:
      "Stroll through beautifully curated gardens designed to soothe your senses. Lush greenery, vibrant blooms, and serene water features create a tranquil oasis. Ideal for morning walks, photography, or simply enjoying nature’s embrace. It's a refreshing escape from the everyday rush.",
  },
  {
    id: 9,
    image: privateVillas,
    imageSlide: privateVillasImg,
    name: "Private Villas",
    description:
      "Retreat into your own sanctuary with our exquisitely designed private villas. Each villa offers spacious interiors, modern amenities, and a sense of refined comfort. Enjoy the luxury of privacy with personalized services tailored to your needs. Perfect for couples, families, or anyone seeking exclusivity.",
  },
  {
    id: 10,
    image: diningRestaurant,
    imageSlide: diningRestaurantImg,
    name: "Dining Restaurant",
    description:
      "Indulge in a culinary journey at our fine dining restaurant, where flavor meets finesse. Enjoy an extensive selection of local and international dishes crafted by expert chefs. The elegant décor and warm ambiance set the tone for memorable meals. Perfect for romantic dinners or family feasts.",
  },
  {
    id: 11,
    image: kidsPlayArea,
    imageSlide: kidsPlayAreaImg,
    name: "Kids' Play Area",
    description:
      "Our dedicated kids’ play area is a vibrant space designed to entertain and engage young minds. With age-appropriate toys, games, and interactive corners, your little ones can safely explore and have fun. Supervised and secure, it’s where joy and creativity flourish. Parents can relax while kids stay happily occupied.",
  },
  {
    id: 12,
    image: eventHall,
    imageSlide: eventHallImg,
    name: "Event Hall",
    description:
      "Catch the latest blockbusters or timeless classics in our private cinema hall. Designed for comfort, it features plush recliner seating, high-definition visuals, and surround sound. A perfect spot to unwind with family or friends over popcorn and entertainment. Movie nights have never felt this luxurious.",
  },
  {
    id: 13,
    image: meditationPavillion,
    imageSlide: meditationPavillionImg,
    name: "Meditation Pavilion",
    description:
      "Reconnect with inner peace at our open-air meditation pavilion set amidst tranquil surroundings. Surrounded by greenery and the gentle sounds of nature, it's ideal for yoga, meditation, or quiet contemplation. Whether you're starting your day or winding down, this space nurtures mindfulness and balance.",
  },
  {
    id: 14,
    image: concierge,
    imageSlide: conciergeImg,
    name: "24/7 Concierge",
    description:
      "Our 24/7 concierge service is always at your service to enhance your stay. From restaurant reservations and activity planning to transportation or personal requests, we ensure seamless support. Experience hospitality that’s proactive, personal, and professional — whenever you need it.",
  },
  {
    id: 15,
    image: walkways,
    imageSlide: walkwaysImg,
    name: "Greenery Walkways",
    description:
      "Discover the joy of walking through tree-lined, eco-friendly pathways that weave across the resort. These landscaped walkways are perfect for a morning jog or a relaxing sunset stroll. Surrounded by nature and fresh air, it’s a healthy, rejuvenating way to connect with the outdoors.",
  },
];

const Amenities = () => {
  const [selectedAmenity, setSelectedAmenity] = useState(null);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-16 relative">
      {/* Section Intro */}
      <SectionIntro
        backgroundText="Amenities"
        title="Resort All Amenities"
        subtitle="Discover a Haven of Luxury Amidst Stunning Natural Beauty"
        titleColor="text-[#142929]"
        subtitleColor="text-[#142929]"
        subtitleSize="text-6xl"
        strokeClassName="amenities-stroke-yellow"
      />

      {/* Amenity Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 -mt-12 lg:mt-12">
        {amenitiesData.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              if (window.innerWidth < 768) {
                setSelectedAmenity(item);
              }
            }}
          >
            {/* Base Content */}
            <div className="flex flex-col items-center justify-center p-4 transition-all duration-500 ease-in-out group-hover:blur-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-1/3 h-1/2 mb-2"
              />
              <p className="text-center text-[#5C7069]">{item.name}</p>
            </div>

            {/* Hover Overlay (Desktop Only) */}
            <div
              className="absolute inset-0 bg-[#142929]/90 text-white flex-col items-center justify-center 
                transform -translate-y-full group-hover:translate-y-0 
                opacity-0 group-hover:opacity-100 
                transition-transform duration-700 ease-in-out z-10 hidden md:flex"
            >
              <h3 className="text-lg">{item.name}</h3>
              <button
                onClick={() => setSelectedAmenity(item)}
                className="underline text-sm mt-1 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                See Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay BG when drawer is open */}
      {selectedAmenity && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSelectedAmenity(null)}
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-[#142929] text-white z-50 
          transform transition-transform duration-500 ease-in-out
          ${selectedAmenity ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedAmenity && (
          <div className="p-6 flex flex-col h-full">
            <button
              onClick={() => setSelectedAmenity(null)}
              className="ml-auto text-white hover:text-gray-400 transition text-xl cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-2xl mt-4">{selectedAmenity.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {selectedAmenity.description}
            </p>
            <div className="absolute bottom-4 right-4 w-86">
              <img
                src={selectedAmenity.imageSlide}
                alt={selectedAmenity.name}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Amenities;
