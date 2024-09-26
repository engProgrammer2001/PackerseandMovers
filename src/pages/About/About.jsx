import React from "react";
import img2 from "../../assest/About/ourt-project.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import CountUp from "react-countup";
import img1 from "../../assest/About/countup.png";
import img3 from "../../assest/About/country.png";
import img4 from "../../assest/About/shifting.png";
import img5 from "../../assest/About/map.png";
import img6 from "../../assest/About/about-us.jpg";

const About = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-red-200 p-6 lg:p-44 h-auto bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${img6})`,
        }}
      >
        <h1 className="texst-4xl mt-20 font-bold text-red-700">About Us</h1>
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

      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src={img2}
              alt=""
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <h3 className="text-3xl font-bold py-2 text-red-700">About Us</h3>
            <p className="text-lg mb-4">
              At Goyal Cargo Packers, we are committed to providing our
              customers with exceptional service and quality. Our team of
              experienced professionals is dedicated to delivering exceptional
              packing and moving services to ensure that your packages reach
              their destinations safely and efficiently.
            </p>
            <div className="space-y-4">
              <div className="custom-progress-bar mb-4">
                <p className="text-xl">Customers Satisfaction</p>
                <ProgressBar bgColor="#d32f2f" completed={95} />
              </div>
              <div className="custom-progress-bar mb-4">
                <p className="text-xl">On Time Delivery</p>
                <ProgressBar bgColor="#d32f2f" completed={92} />
              </div>
              <div className="custom-progress-bar mb-4">
                <p className="text-xl">Safe Transportation</p>
                <ProgressBar bgColor="#d32f2f" completed={95} />
              </div>
              <div className="custom-progress-bar mb-4">
                <p className="text-xl">Safe Transportation</p>
                <ProgressBar bgColor="#d32f2f" completed={90} />
              </div>
            </div>
            <button className="bg-red-700 text-white mt-8 py-2 px-4 rounded hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* countup section  */}
      <div>
        <div className="bg-red-700 p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <img className="w-24 h-24 mb-4" alt="clients" src={img1} />

              <h2 className="text-3xl font-bold text-primary">
                <CountUp end={321} /> +
              </h2>

              <p className="text-muted-foreground mt-2"> Clients Trust Us</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img className="w-24 h-24 mb-4" alt="shifting" src={img4} />
              <h2 className="text-3xl font-bold text-primary">
                <CountUp end={2881} /> +
              </h2>
              <p className="text-muted-foreground mt-2"> Shiftings Done</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img className="w-24 h-24 mb-4" alt="branches" src={img5} />
              <h2 className="text-3xl font-bold text-primary">
                <CountUp end={21} /> +
              </h2>
              <p className="text-muted-foreground mt-2">Branches In India</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img className="w-24 h-24 mb-4" alt="countries" src={img3} />
              <h2 className="text-3xl font-bold text-primary">
                <CountUp end={9} /> +
              </h2>
              <p className="text-muted-foreground mt-2">Countries Covered</p>
            </div>
          </div>
        </div>
      </div>
      {/* work process section  */}
      <div>
        <div
          className="text-black p-8 mb-10"
          style={{
            background: "linear-gradient(228deg, white 47%, white 17%)",
          }}
        >
          <div className="text-foreground flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="max-w-lg mb-6 lg:mb-0 text-center lg:text-left">
              <h3 className="font-bold text-center lg:text-left text-red-700">
                Our Work Process
              </h3>
              <h2 className="text-3xl text-red-700 font-bold text-center lg:text-left py-6">
                Ready To Get Moving? Get Your Free Quote
              </h2>
              <p className="text-muted-foreground mb-4">
                Book Goyal cargo packers and movers Noida now. Get your free
                quote now. Easy booking and fast services by Goyal cargo company
                for your household goods shifting needs in Noida.
              </p>
              <p className="text-lg font-semibold text-red-700">
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

export default About;
