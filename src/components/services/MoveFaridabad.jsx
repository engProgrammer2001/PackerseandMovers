import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

const MoveFaridabad = () => {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=800')",
          }}
        ></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Move Faridabad
          </h1>
          <p className="text-lg mb-8">
            Your reliable partner for smooth moving and relocation services in
            Gurgaon.
          </p>
          <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full text-lg hover:bg-yellow-400 transition duration-300">
            Get a Quote
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="flex flex-wrap justify-around">
            {/* Service Card */}
            <div className="bg-red-700 p-6 rounded-lg shadow-lg max-w-xs mb-8 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Residential Moving</h3>
              <p>
                Efficient and careful moving of your household items with utmost
                care.
              </p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg shadow-lg max-w-xs mb-8 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Commercial Moving</h3>
              <p>
                Professional relocation for offices and businesses to minimize
                downtime.
              </p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg shadow-lg max-w-xs mb-8 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Packing Services</h3>
              <p>
                High-quality packing materials and expert packing services for
                safe transit.
              </p>
            </div>
            <div className="bg-red-700 p-6 rounded-lg shadow-lg max-w-xs mb-8 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Storage Solutions</h3>
              <p>
                Secure storage options for your belongings during transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-red-700 font-bold text-center mb-8">
            Contact Us
          </h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg p-3 mb-4"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg p-3 mb-4"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 mb-4"
                required
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded-lg p-3 mb-4"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Our Clients Say
          </h2>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            loop={true}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"
                  alt="Aman Verma"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Move Gurgaon handled our relocation smoothly and
                  professionally. Highly recommended!"
                </p>
                <h1 className="font-semibold text-2xl">Aman Verma</h1>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://i.pinimg.com/564x/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg"
                  alt="Pooja Mehra"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Great service! The team made our office move easy and
                  stress-free."
                </p>
                <p className="font-semibold text-2xl">Pooja Mehra</p>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Rajat Singh"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Very professional and efficient service. We will definitely
                  use them again."
                </p>
                <p className="font-semibold text-2xl">Rajat Singh</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/3772580/pexels-photo-3772580.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Neha Sharma"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Exceptional service with a personal touch. Made our move a
                  breeze!"
                </p>
                <p className="font-semibold text-2xl">Neha Sharma</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/3781188/pexels-photo-3781188.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vikram Singh"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Their team was punctual, professional, and handled everything
                  with care."
                </p>
                <p className="font-semibold text-2xl">Vikram Singh</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/1647663/pexels-photo-1647663.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Riya Kapoor"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "The relocation was handled seamlessly. Highly satisfied with
                  their service."
                </p>
                <p className="font-semibold text-2xl">Riya Kapoor</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/2917645/pexels-photo-2917645.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Amit Patel"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Fantastic experience from start to finish. Will definitely
                  use them again!"
                </p>
                <p className="font-semibold text-2xl">Amit Patel</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                <img
                  src="https://images.pexels.com/photos/3466794/pexels-photo-3466794.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sanya Gupta"
                  className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                />
                <p className="italic mb-4">
                  "Excellent service with attention to detail. Made our move
                  stress-free."
                </p>
                <p className="font-semibold text-2xl">Sanya Gupta</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default MoveFaridabad;
