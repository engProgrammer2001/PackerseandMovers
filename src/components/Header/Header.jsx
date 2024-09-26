import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import logo from "../../assest/logo/logo11.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="bg-red-700 shadow-md w-full"
      style={{
        background: "linear-gradient(228deg, white 22%, #d32f2f 17%)",
      }}
    >
      <div className="mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">
            <img className="w-24 h-24" src={logo} alt="" />
          </Link>
        </div>
        {/* Navbar for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white text-lg px-6 hover:text-blue-200">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg px-6 hover:text-blue-200"
          >
            About
          </Link>
          <div className="relative group">
            <Link
              to="/our-service"
              className="text-white text-lg px-6 hover:text-blue-200 flex items-center"
            >
              Our Services
              <MdOutlineArrowDropDown className="ml-1 text-2xl" />
            </Link>
            {/* Submenu */}
            <div
              className="absolute hidden group-hover:block z-30 bg-black text-white shadow-md rounded-lg mt-2 px-2 space-y-2 max-w-80 transition-all duration-800 ease-in-out opacity-0 group-hover:opacity-100"
              style={{ width: "300px" }}
            >
              <Link
                to="/services/move-noida"
                className="block text-white p-2 rounded-lg hover:bg-red-700 hover:text-gray-100"
              >
                Move Noida
              </Link>
              <Link
                to="/services/move-gurgaon"
                className="block text-white p-2 rounded-lg hover:bg-red-700 hover:text-gray-100"
              >
                Move Gurgaon
              </Link>
              <Link
                to="/services/move-delhi"
                className="block text-white p-2 rounded-lg hover:bg-red-700 hover:text-gray-100"
              >
                Move Delhi
              </Link>
              <Link
                to="/services/move-faridabad"
                className="block text-white p-2 rounded-lg hover:bg-red-700 hover:text-gray-100"
              >
                Move Faridabad
              </Link>
            </div>
          </div>
          <Link
            to="/contact-us"
            className="text-white text-lg px-6 hover:text-blue-200"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center text-lg text-black">
          <a href="tel:+911234567890" className="flex items-center space-x-2">
            <div className="p-2 bg-red-700 rounded-full">
              <FaPhone className="text-white" />
            </div>
            <span>+91 12345 67890</span>
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black shadow-md p-4 space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block text-white text-lg hover:text-blue-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="block text-white text-lg hover:text-blue-200"
          >
            About
          </Link>
          <div>
            <Link
              to="/our-service"
              onClick={closeMenu}
              className="block hover:bg-red-700 hover:text-gray-100"
            >
              Our Services
            </Link>
            <div className="ml-4 space-y-2">
              <Link
                to="/services/move-noida"
                onClick={closeMenu}
                className="block hover:bg-red-700 hover:text-gray-100"
              >
                Move Noida
              </Link>
              <Link
                to="/services/move-gurgaon"
                onClick={closeMenu}
                className="block hover:bg-red-700 hover:text-gray-100"
              >
                Move Gurgaon
              </Link>
              <Link
                to="/services/move-delhi"
                onClick={closeMenu}
                className="block hover:bg-red-700 hover:text-gray-100"
              >
                Move Delhi
              </Link>
              <Link
                to="/services/move-faridabad"
                onClick={closeMenu}
                className="block hover:bg-red-700 hover:text-gray-100"
              >
                Move Faridabad
              </Link>
            </div>
          </div>
          <Link
            to="/contact-us"
            onClick={closeMenu}
            className="block text-gray-100 hover:text-red-6700"
          >
            Contact Us
          </Link>
          <div className="text-gray-100">
            <a href="tel:+911234567890"> +91 12345 67890</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
