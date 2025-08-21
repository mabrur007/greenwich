import React from "react";
import ContactForm from "./components/ContactForm";
import OfficeLocation from "./components/OfficeLocation";
import CommonBanner from "../../Components/reusable/CommonBanner";
import contactImg from "../../../public/assets/contact-us/contact-banner.png";

const ContactUs = () => {
  return (
    <div>
      <CommonBanner backgroundImage={contactImg} title={"Get in Touch"} />
      <ContactForm />
      <OfficeLocation />
    </div>
  );
};

export default ContactUs;
