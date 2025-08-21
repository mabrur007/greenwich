import React, { useEffect } from "react";
import { X } from "lucide-react";
import modalImage from "/assets/home/invest-modal.jpg";
import modalImageForMobile from "/assets/home/invest-modal-mobile.jpg";
import { useForm } from "react-hook-form";

const InvestmentModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send data to API here
    onClose(); // close modal after submit
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center px-2"
    >
      <div
        onClick={handleModalClick}
        className="relative bg-white max-w-5xl w-11/12 lg:w-full max-h-[90vh] overflow-y-auto shadow-lg"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 lg:top-3 lg:right-3 z-10 text-white lg:text-gray-700 hover:text-black cursor-pointer"
        >
          <X />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[60vh] lg:max-h-full">
          <div className="hidden lg:block relative lg:h-full">
            <img
              src={modalImage}
              className="w-full h-full object-cover"
              alt="Modal Image for Desktop"
            />
          </div>

          <div className="block lg:hidden relative h-[350px]">
            <img
              src={modalImageForMobile}
              className="w-full h-full object-cover"
              alt="Modal Image for Desktop"
            />
          </div>

          {/* Content */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between h-full"
          >
            <div className="p-6">
              <h2 className="text-xl md:text-2xl text-[#98643E] mb-6">
                Build Your Dream Resort with Smart Investment
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    className="py-2 text-[#98643E] border-b border-[#98643E] w-full"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    {...register("mobileNumber", {
                      required: "Mobile Number is required",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="py-2 text-[#98643E] border-b border-[#98643E] w-full"
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    className="py-2 text-[#98643E] border-b border-[#98643E] w-full"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Nationality */}
                <div>
                  <input
                    type="text"
                    placeholder="Nationality"
                    {...register("nationality", {
                      required: "Nationality is required",
                    })}
                    className="py-2 text-[#98643E] border-b border-[#98643E] w-full"
                  />
                  {errors.nationality && (
                    <p className="text-red-500 text-sm">
                      {errors.nationality.message}
                    </p>
                  )}
                </div>

                {/* NID / Passport */}
                <div>
                  <input
                    type="text"
                    placeholder="NID/Passport Number"
                    {...register("idNumber", {
                      required: "ID/Passport is required",
                    })}
                    className="py-2 text-[#98643E] border-b border-[#98643E] w-full"
                  />
                  {errors.idNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.idNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="bg-[#D2DACE] flex justify-end gap-2 py-4 px-4">
              <button
                type="button"
                className="text-[#142929] py-2 px-4 border border-[#142929] cursor-pointer hover:bg-[#142929] hover:text-white transition-colors"
              >
                Calculate ROI
              </button>
              <button
                type="submit"
                className="text-white bg-[#142929] py-2 px-4 cursor-pointer hover:bg-[#144040]"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvestmentModal;
