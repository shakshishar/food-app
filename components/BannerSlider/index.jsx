"use client";
import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export const BannerSlider = () => {
  return (
    <div className="mt-16">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mx-auto"
      >
        <SwiperSlide>
          <Image 
            src="/image4.jpg" 
            width={900} 
            height={300} 
            alt="first slide" 
            className="h-[300px] mx-auto object-cover rounded-md" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/image5.jpg" 
            width={900} 
            height={300} 
            alt="second slide" 
            className="h-[300px] mx-auto object-cover rounded-md" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/imge6.jpeg" 
            width={900} 
            height={300} 
            alt="third slide" 
            className="h-[300px] mx-auto object-cover rounded-md" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/image4.jpg" 
            width={900} 
            height={300} 
            alt="fourth slide" 
            className="h-[300px] mx-auto object-cover rounded-md" 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
