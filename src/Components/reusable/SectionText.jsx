import React from "react";

const SectionText = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-white text-2xl md:text-4xl mb-4">{title}</h2>
      <p className="text-[#D2DACE] text-sm w-full">{description}</p>
    </div>
  );
};

export default SectionText;
