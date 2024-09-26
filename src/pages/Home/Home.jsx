import React from "react";
import { Link } from "react-router-dom";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import img1 from "../../assest/latest-work-img/Our-Project1.png";
import img2 from "../../assest/latest-work-img/Our-project2.jpg";
import img3 from "../../assest/latest-work-img/our-project.jpeg";
import img4 from "../../assest/latest-work-img/our-project4.webp";
import img5 from "../../assest/latest-work-img/ourt-project.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <div>
        <section className="bg-white text-black p-8 flex flex-col lg:flex-row gap-8">
          {/* Left Div for Videos */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            <video
              className="w-full lg:h-[300px] rounded-[30%]"
              src="/aboutImages/video2.mp4"
              autoPlay
              muted
              loop
            />
            <video
              className="w-full lg:h-[300px] rounded-[30%]"
              src="/aboutImages/video.mp4"
              autoPlay
              muted
              loop
            />
          </div>

          {/* Right Div for Heading and Paragraph */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl text-red-700 font-bold mb-4">ABOUT US</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              atque, amet corrupti, blanditiis ut iusto odio soluta, earum
              dignissimos aut nulla temporibus deserunt? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Temporibus, obcaecati quaerat
              nobis vero officia? Amet, velit! Minima, doloremque.
            </p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum
              ea soluta! Sapiente distinctio accusamus beatae repudiandae
              incidunt reiciendis in, sequi ipsum eaque provident, optio unde
              consequuntur adipisci soluta iste repellendus necessitatibus
              maxime? Blanditiis.
            </p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              quia natus sit praesentium repellendus, hic, dicta itaque dolore
              nemo fuga ipsum cum voluptatem sequi nisi voluptate est corrupti
              qui perspiciatis at esse? Aperiam, aliquam!
            </p>

            <div className="mt-12">
              <Link
                to="/about"
                className="text-white font-bold py-3 p-6 bg-red-700 rounded-lg"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* sevices start here  */}
      <div>
        <section className="relative bg-background p-8 overflow-hidden">
          {/* Background image with fixed position */}
          <div
            className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              filter: "blur(8px)",
              opacity: "0.6",
            }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold  text-center mb-6">
              Our Services
            </h2>
            <p className="text-lg text-center pb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              labore, cumque modi consequuntur assumenda minus voluptate
              deleniti atque praesentium totam, sequi aspernatur sit qui aliquid
              esse iure, corrupti autem consequatur fuga voluptates!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  alt: "world-moving-icon",
                  src: "https://openui.fly.dev/openui/24x24.svg?text=🌍",
                  title: "World Moving",
                  description:
                    "All international and domestic moving and relocation services.",
                  link: "/world-moving",
                },
                {
                  alt: "storage-units-icon",
                  src: "https://openui.fly.dev/openui/24x24.svg?text=📦",
                  title: "Storage Units",
                  description:
                    "Store your household goods for long or short time periods with us.",
                  link: "/storage-units",
                },
                {
                  alt: "local-moving-icon",
                  src: "https://openui.fly.dev/openui/24x24.svg?text=🏠",
                  title: "Local Moving",
                  description:
                    "We provide local moving services for safe shifting and relocating.",
                  link: "/local-moving",
                },
                {
                  alt: "box-delivery-icon",
                  src: "https://openui.fly.dev/openui/24x24.svg?text=📦",
                  title: "Box Delivery",
                  description:
                    "We deliver boxes anywhere in India or worldwide.",
                  link: "/box-delivery",
                },
              ].map(({ alt, src, title, description, link }) => (
                <div
                  key={title}
                  className="bg-white border border-gray-300 text-gray-800 p-6 rounded-lg shadow-md hover:bg-red-700 hover:text-white hover:scale-105 hover:translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img
                      alt={alt}
                      src={src}
                      className="w-10 h-10"
                      aria-label={title}
                    />
                    <h3 className="text-xl font-semibold ml-2">{title}</h3>
                  </div>
                  <p>{description}</p>
                  <div className="mt-6 bg-red-700 font-bold text-center rounded-lg hover:bg-white hover:text-black text-white">
                    <Link to={link} className=" text-primary ">
                      READ MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 py-8 text-center bg-red-600 rounded-lg text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                <div>
                  <h4 className="text-3xl font-bold">100%</h4>
                  <p className="text-white">Domestic Moving</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold">94%</h4>
                  <p className="text-white">International Moving</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold">97%</h4>
                  <p className="text-white">Delivered On Time</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold">95%</h4>
                  <p className="text-white">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* our lestest project  */}
      <div
        className=" top-0 right-0 "
        style={{
          background: "linear-gradient(228deg, #d32f2f 17%, black 17%)",
        }}
      >
        <section className="bg-background p-8 relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary underline">
              Our Latest Work
            </h2>
            <p className="text-muted-foreground py-8 text-xl">
              "Our team has successfully completed numerous packing, shifting,
              and relocation projects, delivering top-notch service with
              precision and care. Every move is handled by our highly trained
              and dedicated workers, ensuring the safety and cleanliness of your
              belongings from start to finish. Whether it's a local move or a
              long-distance relocation, we strive to exceed client expectations
              with our reliable services. Take a look at our recent projects
              here, or feel free to reach out to us for more information and
              personalized assistance with your moving needs."
            </p>
          </div>

          {/* Container to hold the 3 images in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center my-16">
            <div className="flex flex-col items-center">
              <img
                src={img2}
                alt="Packing and moving"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className="w-full my-2 text-xl text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Packing and moving
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={img1}
                alt="Organizing and loading"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className="w-full my-2 text-xl text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Organizing and loading
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={img2}
                alt="Delivery and setup"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className="w-full my-2 text-xl text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Delivery and setup
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center my-16">
            <div className="flex flex-col items-center">
              <img
                src={img3}
                alt="Packing and moving"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className="w-full my-2 text-xl text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Packing and moving
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={img4}
                alt="Organizing and loading"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className=" w-full my-2 text-xl text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Organizing and loading
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={img5}
                alt="Delivery and setup"
                className="w-64 h-64 rounded-lg shadow-md mb-2 object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_10px_rgba(255,0,0,0.5)]"
              />
              <p className="w-full text-xl my-2 text-center text-muted-foreground bg-red-700 p-4 rounded-lg">
                Delivery and setup
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials section  */}
        <section className="py-16 bg-white">
          <div className="mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
              What Our Clients Say
            </h2>
            <p className="text-black text-lg py-8">Choosing Packers & Movers was one of the best decisions we made for our relocation needs. Their team demonstrated exceptional professionalism and expertise, ensuring a seamless and stress-free experience. From meticulous planning to precise execution, every detail was handled with care and precision. Their commitment to customer satisfaction and their ability to adapt to our unique requirements set them apart. We highly recommend Packers & Movers for anyone seeking reliable and top-quality moving services.’</p>
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
                    src="https://img.freepik.com/free-photo/portrait-indian-happy-businessman-using-laptop-computer-office_231208-2580.jpg"
                    alt="Aman Verma"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Move Gurgaon handled our relocation smoothly and
                    professionally. Highly recommended! that Serviecs"
                  </p>
                  <h1 className="font-semibold text-2xl">Aman Verma</h1>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/79/50/91/360_F_679509191_FQW7KbRAaHVkCryRlomSQXOeM354SdJY.jpg"
                    alt="Pooja Mehra"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Great service! The team made our office move easy and
                    stress-free. that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Pooja Mehra</p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://r2.erweima.ai/imgcompressed/img/compressed_93d2b03b93923a35d17195ac7375e5d7.webp"
                    alt="Rajat Singh"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Very professional and efficient service. We will definitely
                    use them again. that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Rajat Singh</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.jpg?s=612x612&w=0&k=20&c=fAzBj4UAksz3wwAjXxKxByZMqDSuqQZSTij7jBiPtJc="
                    alt="Neha Sharma"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Exceptional service with a personal touch. Made our move a
                    breeze! the service of that company is top notch"
                  </p>
                  <p className="font-semibold text-2xl">Neha Sharma</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://www.shutterstock.com/image-photo/portrait-confident-young-indian-teenager-600nw-2157123233.jpg"
                    alt="Vikram Singh"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Their team was punctual, professional, and handled
                    everything with care. that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Vikram Singh</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg"
                    alt="Riya Kapoor"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "The relocation was handled seamlessly. Highly satisfied
                    with their service. that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Riya Kapoor</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/029/771/887/non_2x/portrait-of-a-handsome-businessman-in-modern-office-asian-manager-looking-at-camera-and-smiling-confident-male-ceo-planning-and-managing-company-strategy-free-photo.jpeg"
                    alt="Amit Patel"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Fantastic experience from start to finish. Will definitely
                    use them again! that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Amit Patel</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-red-700 p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 mx-auto text-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/035/804/667/non_2x/ai-generated-korean-girl-in-a-black-blazer-and-a-white-shirt-standing-against-a-office-free-photo.jpg"
                    alt="Sanya Gupta"
                    className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                  />
                  <p className="italic mb-4">
                    "Excellent service with attention to detail. Made our move
                    stress-free. that Serviecs are awesome"
                  </p>
                  <p className="font-semibold text-2xl">Sanya Gupta</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* this is work prosse section */}
        <div className="container mx-auto px-8 py-16 ">
          {/* Work Process Heading */}
          <h3 className="font-bold py-2">Our Work Process</h3>
          <h2 className="text-3xl font-bold text-primary mb-6 pb-16">
            Make It Happen In 4 Steps
          </h2>

          {/* Steps Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-gray-100 text-black p-5 rounded-lg w-full lg:w-auto mb-6 lg:mb-0 transition-all duration-300 hover:bg-red-600 hover:text-white">
              <div className="bg-red-700 rounded-full p-4 flex items-center justify-center w-44 h-44">
                <img
                  alt="service-icon"
                  src="https://openui.fly.dev/openui/40x40.svg?text=📝"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="mt-4 mb-2 font-semibold text-lg">
                Book Your Service
              </h3>
              <p className="text-center text-muted-foreground mt-2">
                Book goyal packers and movers now or submit a quote form for
                booking.
              </p>
            </div>

            {/* Step Divider */}
            <div className="w-16 h-1 bg-primary mx-4 hidden lg:block"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-gray-100 text-black p-5 rounded-lg w-full lg:w-auto mb-6 lg:mb-0 transition-all duration-300 hover:bg-red-600 hover:text-white">
              <div className="bg-red-700 rounded-full p-4 flex items-center justify-center w-44 h-44">
                <img
                  alt="pack-icon"
                  src="https://openui.fly.dev/openui/40x40.svg?text=📦"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="mt-4 mb-2 font-semibold text-lg">
                Pack Your Goods
              </h3>
              <p className="text-center text-muted-foreground mt-2">
                After booking, we will reach your destination and pack your
                items.
              </p>
            </div>

            {/* Step Divider */}
            <div className="w-16 h-1 bg-primary mx-4 hidden lg:block"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-gray-100 text-black p-5 rounded-lg w-full lg:w-auto mb-6 lg:mb-0 transition-all duration-300 hover:bg-red-600 hover:text-white">
              <div className="bg-red-700 rounded-full p-4 flex items-center justify-center w-44 h-44">
                <img
                  alt="loading-icon"
                  src="https://openui.fly.dev/openui/40x40.svg?text=🚐"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="mt-4 mb-2 font-semibold text-lg">Safe Loading</h3>
              <p className="text-center text-muted-foreground mt-2">
                We will safely load your goods into trucks and transport them.
              </p>
            </div>

            {/* Step Divider */}
            <div className="w-16 h-1 bg-primary mx-4 hidden lg:block"></div>

            {/* Step 4 */}
            <div className="flex flex-col items-center bg-gray-100 text-black p-5 rounded-lg w-full lg:w-auto transition-all duration-300 hover:bg-red-600 hover:text-white">
              <div className="bg-red-700 rounded-full p-4 flex items-center justify-center w-44 h-44">
                <img
                  alt="delivery-icon"
                  src="https://openui.fly.dev/openui/40x40.svg?text=🎁"
                  className="w-32 h-32"
                />
              </div>
              <h3 className="mt-4 mb-2 font-semibold text-lg">Safe Delivery</h3>
              <p className="text-center text-muted-foreground mt-2">
                We will deliver your goods to your doorstep within 5 days.
              </p>
            </div>
          </div>
        </div>

        {/* moveing service Banner Section */}
        <div className="custom-container">
          <div className="text-white lg:text-black p-8">
            <div className="text-foreground flex flex-col lg:flex-row items-center lg:justify-between">
              <div className="max-w-lg mb-6 lg:mb-0 text-center lg:text-left">
                <h3 className="font-bold lg:text-red-700 ">Our Work Process</h3>
                <h2 className="text-3xl lg:text-red-700 font-bold lg:py-6">
                  Ready To Get Moving? Get Your Free Quote
                </h2>
                <p className="mb-4 text-lg">
                  Book Goyal cargo packers and movers Noida now. Get your free
                  quote now. Easy booking and fast services by Goyal cargo
                  company for your household goods shifting needs in Noida.
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

        {/* Another Contact Us Section */}
        <div>
          <div>
            <h2 className="text-4xl font-bold text-center py-8">Contact Us</h2>
            <p className="p-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              ratione dicta inventore ab, ipsa assumenda sunt! Aliquid, harum
              sunt, maxime deserunt doloremque illo dolorum sequi cupiditate
              excepturi et facere, quo enim dolores?
            </p>
          </div>
          <div className="flex flex-wrap">
            {/* Left 50% - Image */}
            <div className="w-full md:w-1/2 flex justify-center pt-28">
              <img
                src={img2}
                alt="Contact Us"
                className="w-[500px] h-[500px] object-cover"
              />
            </div>
            {/* Right 50% - ContactUs Component */}
            <div className="w-full md:w-1/2 p-4 flex justify-center">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
