import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';                                
import 'swiper/css/navigation';                     
const images = [
    '/sliderImage/packers3.jpg',
  '/sliderImage/packers2.png',  
  '/sliderImage/packers3.png',
];

const HomeSlider = () => {
  return (
    <div className="w-full h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay]}  
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}  
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
