import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[700px] p-4 w-[500px] mx-auto">
      <div 
        className="w-full p-6 rounded-lg bg-red-700" 
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
              <label className="block text-white mb-1" htmlFor="movingFrom">
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
  );
};

export default ContactUs;
