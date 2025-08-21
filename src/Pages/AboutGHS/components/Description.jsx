import React from "react";

const Description = () => {
  return (
    <div className="text-[#F6F1ED]">
      <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
        <div className="my-8 lg:my-24">
          <p className="text-[#5C7069]">
            Bhaiya Group of Industries is a leading conglomerate in Bangladesh,
            established over 50 years ago, with a legacy spanning pre- and
            post-independence eras. Known for its strategic vision, it has grown
            alongside the nation, guided by knowledgeable investors, and focuses
            on long-term wealth and value creation. The group’s strength lies in
            its people and their ability to manage diverse enterprises across
            multiple sectors and geographies, driving its pursuit of industry
            leadership. <br /> <br />
            Greenwich Hill Station, a Bhaiya Group Hotel & Resort project,
            offers a luxurious retreat in a scenic location, blending natural
            beauty with modern comforts. This upcoming property features
            top-tier amenities like stunning views, gourmet dining, and
            eco-conscious design for discerning travelers. It aims to redefine
            regional hospitality by merging traditional Bangladeshi warmth with
            international standards, targeting leisure and business guests with
            a focus on sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#142929] h-[400px] flex flex-col items-center justify-center">
            <div className="mb-16">
              <p className="text-[#D2DACE] mb-2">Established Over</p>
              <div className="flex items-end justify-center">
                <h1 className="text-white text-6xl">50+</h1>
                <p className="text-[#D2DACE]">Years</p>
              </div>
            </div>

            <div>
              <p className="text-[#D2DACE] mb-2">Key Business Concerns</p>
              <div className="flex items-end justify-center">
                <h1 className="text-white text-6xl">17+</h1>
                <p className="text-[#D2DACE]">Entities</p>
              </div>
            </div>
          </div>

          <div className="bg-[#142929] h-[400px] flex flex-col items-center justify-center lg:mt-48 mb-8 lg:mb-0">
            <div className="mb-16">
              <p className="text-[#D2DACE] mb-2">Completed Projectes</p>
              <div className="flex items-end justify-center">
                <h1 className="text-white text-6xl">150+</h1>
                <p className="text-[#D2DACE]">Initiatives</p>
              </div>
            </div>

            <div>
              <p className="text-[#D2DACE] mb-2">Industries Served</p>
              <div className="flex items-end justify-center">
                <h1 className="text-white text-6xl">5+</h1>
                <p className="text-[#D2DACE]">Sectors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
