import React from "react";
import maroofSattarImg from "/assets/about-us/chairman.jpg";
import rashedulIslamImg from "/assets/about-us/rashedul-islam.jpg";
import city from "/assets/about-us/city.svg";
const Cofounder = () => {
  return (
    <div className="pt-4 lg:pt-16 pb-48 bg-[#142929] min-h-[90vh] clip-diagonal-sm lg:clip-diagonal -mt-24 lg:-mt-0">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-32">
          <div>
            <img
              className="h-[550px] w-full object-cover flex items-center justify-center"
              src={maroofSattarImg}
              alt=""
            />
          </div>

          <div>
            <p className="text-[#D2DACE] mb-6">
              Welcome to Greenwich Hill Station, Nestled in the serene hills of
              Daphanatila, Kadimnagar, Sylhet, our resort is more than just a
              destination, it is an experience designed with care, elegance, and
              exclusivity. <br /> <br />
              At Greenwich Hill Station, we believe true luxury lies in
              attention to detail, personalized service, and an environment that
              nurtures both relaxation and inspiration. Every aspect of our
              resort has been thoughtfully curated to offer our valued guests
              the highest standards of comfort, privacy, and sophistication.{" "}
              <br /> <br />
              Whether you’re seeking a peaceful retreat, a romantic getaway, or
              a refined corporate escape, we are committed to making your stay
              truly exceptional. Your trust is our greatest reward, and we
              strive to exceed expectations with every visit. <br /> <br />
              We look forward to welcoming you to a world where luxury meets
              nature
            </p>

            <div>
              <p className="text-white font-semibold text-lg">
                Maroof Sattar Ali
              </p>
              <p className="text-[#D2DACE]">
                Chairman, <br /> Bhaiya Hotels & resorts Ltd
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 relative">
            {/* Background city image */}
            <div className="absolute -bottom-12 left-0 z-0 w-full hidden lg:block ">
              <img
                src={city}
                alt="city background"
                className="w-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="relative z-10">
              <p className="text-[#D2DACE] mb-6">
                Dear Guests, <br /> <br />
                It is with great pleasure that I welcome you to Greenwich Hill
                Station, a sanctuary of luxury and tranquility in the heart of
                Daphanatila, Kadimnagar, Sylhet. <br /> <br />
                Our vision has always been to create a resort that redefines
                hospitality by blending natural beauty with world-class comfort.
                At Greenwich Hill Station, every moment is designed to offer you
                peace, privacy, and an exceptional standard of service. <br />{" "}
                <br />
                We take pride in delivering not just staycation, but a memorable
                experience, where your needs are anticipated, and every detail
                reflects our commitment to excellence. Whether you’re here for
                leisure or business, we aim to make your stay as seamless and
                fulfilling as possible. <br /> <br />
                Thank you for choosing Greenwich Hill Station. We look forward
                to hosting you with the warmth and sophistication you deserve.
              </p>

              <div>
                <p className="text-white font-semibold text-lg">
                  Rashedul Islam Rashed
                </p>
                <p className="text-[#D2DACE]">
                  Managing Director, <br /> Bhaiya Hotels & resorts Ltd
                </p>
              </div>
            </div>

            {/* Image content */}
            <div className="relative z-10">
              <img
                className="h-[550px] w-full object-cover flex items-center justify-center"
                src={rashedulIslamImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cofounder;
