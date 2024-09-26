import React from "react";
import img1 from "../../assest/services/our-project4.webp";
import img2 from "../../assest/services/ourt-project.jpg";

const Services = () => {
  return (
    <>
      <div></div>
      <div className="flex flex-col md:flex-row bg-background p-6">
        {/* Main Content and Form Section */}
        <div className="md:w-2/3">
          <img
            src={img2}
            alt="Packing and Moving"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-4xl text-red-700 font-bold text-primary my-3">
            Packing And Moving Services
          </h2>
          <p className="text-muted-foreground mb-4 text-xl">
            Proper packing is one of the most important aspects of a move.
            Knowledge of utilizing the correct materials and packing methods are
            essential components to a move. Our years of experience in packing
            and moving customers have proven that packing correctly is critical
            to a successful move.
          </p>
          <p className="text-muted-foreground mb-4 text-xl">
            Our experienced and skilled packing teams can professionally pack
            your home or business. Our expert packers, utilizing the correct
            materials and packing methodology, will carefully pack your
            belongings to ensure a damage-free move. You will receive the same
            high level of service we are renowned for with our moving service.
          </p>
          <p className="text-muted-foreground mb-4 text-xl">
            Our experienced and skilled packing teams can professionally pack
            your home or business. Our expert packers, utilizing the correct
            materials and packing methodology, will carefully pack your
            belongings to ensure a damage-free move. You will receive the same
            high level of service we are renowned for with our moving service.
          </p>
          <p className="text-muted-foreground mb-4 text-xl">
            Our experienced and skilled packing teams can professionally pack
            your home or business. Our expert packers, utilizing the correct
            materials and packing methodology, will carefully pack your
            belongings to ensure a damage-free move. You will receive the same
            high level of service we are renowned for with our moving service.
          </p>
          <p className="text-muted-foreground mb-4 text-xl">
            Our experienced and skilled packing teams can professionally pack
            your home or business. Our expert packers, utilizing the correct
            materials and packing methodology, will carefully pack your
            belongings to ensure a damage-free move. You will receive the same
            high level of service we are renowned for with our moving service.
          </p>
          <p className="text-muted-foreground font-semibold">
            We Move Your Valuables with Careful Elegance... !
          </p>
          <p className="text-muted-foreground">Call Us: +91 1234567890</p>
        </div>

        {/* Enquiry Form and Services Section */}
        <div className="md:w-1/3 bg-card p-4 rounded-lg shadow-md mt-4 md:mt-0">
          {/* Enquiry Form */}
          <div>
            <h3 className="text-lg font-bold bg-red-700 rounded-lg p-2 mb-4">Enquire Now</h3>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="border border-border rounded p-2 mb-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-border rounded p-2 mb-2"
                required
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="border border-border rounded p-2 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Send From"
                className="border border-border rounded p-2 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Send To"
                className="border border-border rounded p-2 mb-2"
                required
              />
              <textarea
                placeholder="Your Enquiry"
                className="border border-border rounded p-2 mb-2"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Enter Captcha Code"
                className="border border-border rounded p-2 mb-2"
                required
              />
              <button
                type="submit"
                className="bg-red-700 hover:bg-secondary/80 rounded p-2"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Services List */}
          <div className="mt-4">
            <h3 className="text-lg font-bold bg-red-700 rounded-lg p-2">
              Our Services
            </h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li className="py-2 text-lg">Packing and Moving</li>
              <li className="py-2 text-lg">Loading and Unloading</li>
              <li className="py-2 text-lg">Household Shifting</li>
              <li className="py-2 text-lg">Car Transportation</li>
              <li className="py-2 text-lg">Warehousing</li>
              <li className="py-2 text-lg">Office Relocation</li>
              <li className="py-2 text-lg">Transport Insurance</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
