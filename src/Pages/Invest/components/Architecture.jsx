import React from "react";

const Architecture = () => {
  return (
    <div className="pb-32 lg:pb-16 bg-[#142929] min-h-[90vh] clip-bottom-diagonal-architecture">
      {/* Background Title */}
      <div className="relative mb-16 hidden lg:block">
        <h1 className="amenities-stroke mask-gradient text-[150px] md:text-[200px] select-none pointer-events-none hidden md:block text-center">
          Architecture
        </h1>

        <div className="text-center absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-4xl lg:text-6xl text-white mb-2 mt-12">
            Structural Excellence
          </h3>
          <p className="text-[#D2DACE]">
            Crafting a Masterpiece Amidst the Hills
          </p>
        </div>
      </div>

      {/* First Row */}
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
          {[
            {
              title: "Sylhet Hilltop",
              desc: "Nestled in Sylhet’s tranquil hill landscapes",
              index: 1,
            },
            {
              title: "Curved Facade",
              desc: "Features a sleek, contemporary architectural style",
              index: 2,
            },
            {
              title: "330+ Rooms",
              desc: "Offers a wide range of luxurious rooms and villas.",
              index: 3,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-t border-[#5C7069] flex items-center justify-center relative group "
            >
              <div className="absolute -top-[2px] right-0">
                <p className="w-12 h-1 bg-[#D2DACE] rounded-full"></p>
              </div>
              <div>
                <p className="text-[#5C7069] mb-2">{item.desc}</p>
                <h3 className="text-4xl text-[#D2DACE]">{item.title}</h3>
              </div>
              <div>
                {/* <h1 className="amenities-stroke mask-gradient text-[150px] md:text-[200px] select-none pointer-events-none hidden md:block text-center">
                  {item.index}
                </h1> */}

                <h1
                  className="text-[150px] md:text-[200px] select-none pointer-events-none text-center
             text-transparent bg-clip-text transition-all duration-700 ease-in-out 
             group-hover:bg-gradient-to-b 
             group-hover:from-[#3B4947] 
             group-hover:to-[#0D1B1A] 
             group-hover:text-transparent"
                  style={{
                    WebkitTextStroke: "1px rgba(59, 73, 71, 0.3)",
                  }}
                >
                  {item.index}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center lg:w-11/12 mx-auto mt-16">
          <div className="border-t border-[#5C7069] flex items-center justify-center relative group">
            <div className="absolute -top-[2px] right-0">
              <p className="w-12 h-1 bg-[#D2DACE] rounded-full"></p>
            </div>
            <div>
              <p className="text-[#5C7069] mb-2">
                Spread across a vast and beautiful terrain.
              </p>
              <h3 className="text-4xl text-[#D2DACE]">5+ Acres</h3>
            </div>
            <div>
              <h1
                className="text-[150px] md:text-[200px] select-none pointer-events-none text-center
             text-transparent bg-clip-text transition-all duration-700 ease-in-out 
             group-hover:bg-gradient-to-b 
             group-hover:from-[#3B4947] 
             group-hover:to-[#0D1B1A] 
             group-hover:text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(59, 73, 71, 0.3)",
                }}
              >
                4
              </h1>
            </div>
          </div>

          <div className="border-t border-[#5C7069] flex items-center justify-center relative group">
            <div className="absolute -top-[2px] right-0">
              <p className="w-12 h-1 bg-[#D2DACE] rounded-full"></p>
            </div>
            <div>
              <p className="text-[#5C7069] mb-2">
                Boasts an impressive indoor amusement area.
              </p>
              <h3 className="text-4xl text-[#D2DACE]">46.5k SQFT Fun Zone</h3>
            </div>
            <div>
              <h1
                className="text-[150px] md:text-[200px] select-none pointer-events-none text-center
             text-transparent bg-clip-text transition-all duration-700 ease-in-out 
             group-hover:bg-gradient-to-b 
             group-hover:from-[#3B4947] 
             group-hover:to-[#0D1B1A] 
             group-hover:text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(59, 73, 71, 0.3)",
                }}
              >
                5
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
