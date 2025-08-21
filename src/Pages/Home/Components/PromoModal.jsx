import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import promoImage from "../../../../public/assets/home/promotional-image.png";

const PromoModal = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show modal only once per session
    const isShown = sessionStorage.getItem("promoShown");
    if (!isShown) {
      setShowPromo(true);
      sessionStorage.setItem("promoShown", "true");
    }
  }, []);

  if (!showPromo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setShowPromo(false)}
      />

      {/* Modal Content */}
      <div className="bg-white rounded-xl shadow-2xl relative z-10 w-11/12 max-w-2xl ">
        {/* Close button */}
        <X
          size={20}
          className="absolute top-3 text-white right-3 cursor-pointer hover:text-red-500 transition-colors"
          onClick={() => setShowPromo(false)}
        />

        <div className="z-10">
          {" "}
          {/* Promo Image */}
          <img src={promoImage} alt="Promotional Offer" />
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
