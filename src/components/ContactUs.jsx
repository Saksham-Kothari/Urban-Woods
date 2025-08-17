import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contact Us
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          {/* Phone */}
          <div className="flex mb-8 lg:mb-0 items-center">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Phone</p>
              <p className="text-neutral-600">(123) 456-7890</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex mb-8 lg:mb-0 items-center">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <p className="text-neutral-600">info@UrbanWood.com</p>
            </div>
          </div>
          {/* Address */}
          <div className="flex mb-8 lg:mb-0 items-center">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">Address</p>
              <p className="text-neutral-600">
                1234 Renovation Ave, Suite 100, Your City, ST 56789
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;