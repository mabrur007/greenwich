import React, { useEffect, useState } from "react";
import SectionIntro from "../../../Components/reusable/SectionIntro";
import videoThumbnail1 from "/assets/news and gallery/video-thumbnail-1.png";
import videoThumbnail2 from "/assets/news and gallery/video-thumbnail-2.png";
import videoThumbnail3 from "/assets/news and gallery/video-thumbnail-3.png";
import videoThumbnail4 from "/assets/news and gallery/video-thumbnail-4.png";
import videoThumbnail5 from "/assets/news and gallery/video-thumbnail-5.png";
import hex from "/assets/home/hex.png";
import playButton from "/assets/home/play-button.png";
import { X } from "lucide-react";

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (activeVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeVideo]);

  const videos = [
    {
      id: 1,
      thumbnail: videoThumbnail1,
      url: "https://www.youtube.com/embed/tz4UNimjIbY",
    },
    {
      id: 2,
      thumbnail: videoThumbnail2,
      url: "https://www.youtube.com/embed/tz4UNimjIbY",
    },
    {
      id: 3,
      thumbnail: videoThumbnail3,
      url: "https://www.youtube.com/embed/tz4UNimjIbY",
    },
    {
      id: 4,
      thumbnail: videoThumbnail4,
      url: "https://www.youtube.com/embed/tz4UNimjIbY",
    },
    {
      id: 5,
      thumbnail: videoThumbnail5,
      url: "https://www.youtube.com/embed/tz4UNimjIbY",
    },
  ];

  const openVideo = (video) => setActiveVideo(video);
  const closeVideo = () => setActiveVideo(null);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto pb-16">
      <SectionIntro
        backgroundText="Videos"
        title="Video Gallery"
        subtitle="A Cinematic Glimpse of Your Investment"
        titleColor="text-[#98643E]"
        subtitleColor="text-[#142929]"
        subtitleSize="text-6xl"
        strokeClassName="amenities-stroke-yellow"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="relative group cursor-pointer"
          onClick={() => openVideo(videos[0])}
        >
          <img
            src={videos[0].thumbnail}
            alt="video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300" />
          <img
            src={hex}
            alt="hex"
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-36 h-36"
          />
          <img
            src={playButton}
            alt="play"
            className="absolute top-1/2 left-[51%] z-20 -translate-x-1/2 -translate-y-1/2 w-14 h-14"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {videos.slice(1).map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer"
              onClick={() => openVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt="video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300" />
              <img
                src={hex}
                alt="hex"
                className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-26 h-26"
              />
              <img
                src={playButton}
                alt="play"
                className="absolute top-1/2 left-[52%] z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[90%] md:max-w-[800px] aspect-video">
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 z-50 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full"
            >
              <X className="w-6 h-6 cursor-pointer" />
            </button>
            <iframe
              className="w-full h-full shadow-lg"
              src={`${activeVideo.url}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
