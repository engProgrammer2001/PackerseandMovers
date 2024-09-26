import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assest/logo/logo11.png";

const Footer = () => {
  return (
    <div className="bg-red-700 text-white p-8">
      <div className="flex flex-wrap justify-between items-start py-4">
        <div className="w-full md:w-1/4 mb-8 md:mb-0 py-4">
          <h2 className="text-2xl font-bold">Call Us :</h2>
          <p className="text-xl py-2">1234567890</p>
          <img
            src={logo}
            alt="Goyal Cargo Packers & Movers Logo"
            className="my-2 w-20 h-20 "
          />
          <p className="text-sm py-2">
            Packers and movers company. Head office in Noida. An all India & worldwide relocation company. Founded in 2019 with 20k plus happy customers.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0 py-4">
          <h2 className="text-2xl font-bold">Support</h2>
          <ul className="list-disc pl-5 py-2">
            <li className="py-2">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li className="py-2">
              <Link to="/our-service" className="hover:text-primary">
                Our Services
              </Link>
            </li>
            <li className="py-2">
              <Link to="/contact-us" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0 py-4">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <ul className="list-disc pl-5 py-2">
            <li className="py-2">Residential Moving</li>
            <li className="py-2">Corporate Relocation</li>
            <li className="py-2">Domestic Shifting</li>
            <li className="py-2">International Move</li>
            <li className="py-2">Auto Transport</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 py-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="py-2">
            0, F-09, Sector -159, Greater Noida,
            <br /> Gautambuddha Nagar, Uttar Pradesh, 201301
          </p>
          <p className="mt-2 py-2">📞 1234567890</p>
          <p className="mt-2 py-2">✉️ info@packarsandmovers.in</p>
          <p className="mt-2 py-2">🕒 08:00 AM - 21:00 PM</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-muted-foreground py-4">
        <p>Copyright © 2024. All rights reserved by <a href="webalphatech.com">Web Alphatech</a></p>
      </div>
    </div>
  );
};

export default Footer;
