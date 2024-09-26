import React from "react"
import img1 from "../../assest/contact/office.png";
import img2 from "../../assest/contact/call.png";
import img3 from "../../assest/contact/email.png";
import img4 from "../../assest/contact/working-hours.png";
import img5 from "../../assest/contact/contact-us.jpg";

const ContactUsPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-gradient-to-b from-red-200 p-6 lg:p-44 h-auto bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${img5})`,
        }}
      >
        <h1 className="texst-4xl mt-20 font-bold text-red-700">Contact Us</h1>
        <nav className="mt-2">
          {/* <Link
            to="/"
            className="text-zinc-600 lg:text-2xl hover:text-zinc-800"
          >
            Home
          </Link> */}
          {/* <span className="mx-2 text-zinc-600">›</span>
          <Link
            to="#"
            className="text-zinc-600 lg:text-2xl hover:text-zinc-800"
          >
            About
          </Link> */}
        </nav>
      </div>
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Google Map Section */}
        <div className="lg:w-1/2 w-full lg:min-h-[500px] flex-grow p-4 lg:p-6">
          <iframe
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2837818831387!2d-122.41941868468147!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085812e2a20c63d%3A0x3c68ef98a5f6a2dc!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633887327553!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Us Section */}
        <div className="lg:w-1/2 w-full lg:min-h-[500px] h-full flex-grow p-4 lg:p-6">
          <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
            <div
              className="w-full p-6 rounded-lg bg-red-500"
              style={{ boxShadow: "0 4px 10px rgba(255, 0, 0, 0.5)" }} // Red box-shadow
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Request A Quote
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="phone">
                    Your Phone
                  </label>
                  <input
                    className="w-full p-2 border border-gray-300 rounded"
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-white mb-1"
                      htmlFor="movingFrom"
                    >
                      Moving From
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="movingFrom"
                      placeholder="Moving From"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-1" htmlFor="movingTo">
                      Moving To
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="movingTo"
                      placeholder="Moving To"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-white mb-1" htmlFor="details">
                    Moving or Item Details/Message
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    id="details"
                    rows="4"
                    placeholder="Moving or Item Details/Message"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full bg-white text-red-500 hover:bg-gray-200 p-2 rounded font-bold"
                  type="submit"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Get in touch with us */}
      <div className="w-[90%] mx-auto bg-gray-400 p-6 rounded-lg shadow-lg flex flex-col items-center my-20">
        <h2 className="text-4xl font-bold text-red-700 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          aperiam quae ut accusantium cum tempora amet vel adipisci laudantium
          eum?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full my-10">
          {/* Our Office */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border border-gray-300 rounded-full hover:bg-red-700 flex justify-center items-center">
              <img
                alt="Office location"
                src={img1}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-secondary mt-2">
              Our Office
            </h3>
            <p className="text-muted-foreground">
              0, F-239, Sector -142, Delhi Noida, <br /> Gautambuddha Nagar,{" "}
              <br /> Uttar Pradesh, 201301
            </p>
          </div>

          {/* Call Us */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border border-gray-300 rounded-full hover:bg-red-700 flex justify-center items-center">
              <img
                alt="Phone icon"
                src={img2}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl  font-semibold text-secondary mt-2">
              Call Us
            </h3>
            <p className="text-muted-foreground">1234567890</p>
          </div>

          {/* Email Us */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border border-gray-300 rounded-full hover:bg-red-700 flex justify-center items-center">
              <img
                alt="Email icon"
                src={img3}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl  font-semibold text-secondary mt-2">
              Email Us
            </h3>
            <p className="text-muted-foreground">info@packerceandmovers.in</p>
          </div>

          {/* Work Hours */}
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-40 border border-gray-300 rounded-full hover:bg-red-700 flex justify-center items-center">
              <img
                alt="Clock icon"
                src={img4}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold text-secondary mt-2">
              Work Hours
            </h3>
            <p className="text-muted-foreground">
              Mon - Sun 07:00 AM - 22:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Our Work Process */}
      <div className="custom-container">
        <div className="text-white lg:text-black p-8">
          <div className="text-foreground flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="max-w-lg mb-6 lg:mb-0 text-center lg:text-left">
              <h3 className="font-bold lg:text-red-700 ">Our Work Process</h3>
              <h2 className="text-3xl lg:text-red-700 font-bold lg:py-6 py-2">
                Ready To Get Moving? Get Your Free Quote
              </h2>
              <p className="mb-4 text-lg">
                Book Goyal cargo packers and movers Noida now. Get your free
                quote now. Easy booking and fast services by Goyal cargo company
                for your household goods shifting needs in Noida.
              </p>
              <p className="text-lg font-semibold ">
                Call Us: <span className="text-primary">1234567890</span>
              </p>
            </div>
            <img
              alt="Mover carrying boxes"
              src={img1}
              className="w-full h-auto sm:w-64 sm:h-64 lg:w-60 lg:h-60 ml-0 lg:ml-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
