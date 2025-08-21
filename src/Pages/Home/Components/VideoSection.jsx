import React, { useState, useRef, useEffect } from "react";
import waterParkImg from "/assets/home/video-background.jpg";
import hex from "/assets/home/hex.png";
import playButton from "/assets/home/play-button.png";
import { X } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hexRef = useRef(null);

  const handlePlay = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  // Intersection Observer to detect when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (hexRef.current) observer.observe(hexRef.current);
    return () => hexRef.current && observer.unobserve(hexRef.current);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPlaying]);

  return (
    <div className="relative overflow-hidden">
      {/* Background section with diagonal cut */}
      <div
        className="min-h-screen relative clip-diagonal z-10 flex items-center justify-center"
        style={{
          backgroundImage: `url(${waterParkImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!isPlaying ? (
          <div
            className="relative cursor-pointer"
            onClick={handlePlay}
            ref={hexRef}
          >
            <img
              className={`object-cover transition-transform duration-[2000ms] ease-in-out ${
                isInView ? "rotate-[360deg]" : "rotate-0"
              }`}
              src={hex}
              alt="hex"
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src={playButton}
              alt="play-button"
            />
          </div>
        ) : (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
              onClick={handleClose}
            />

            {/* Video */}
            <div className="fixed inset-0 z-20 flex items-center justify-center px-4">
              <div className="w-full max-w-[90%] md:max-w-[800px] aspect-video relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 z-30 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full text-xl transition"
                >
                  <X className="cursor-pointer" />
                </button>

                <iframe
                  className="w-full h-full shadow-lg"
                  src="https://www.youtube.com/embed/tz4UNimjIbY?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Colored fill under the clipped section */}
      <div className="bg-[#142929] h-[100px] -mt-[102px] lg:-mt-[100px] z-0 relative"></div>
    </div>
  );
};

export default VideoSection;
