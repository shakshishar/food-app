"use client"
import React from "react";

import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
 import 'swiper/css';
 import "swiper/css/autoplay";
import 'swiper/css/navigation';
import { Navigation,Autoplay} from 'swiper/modules';


export const BannerSlider=()=>{
    return(
        <Swiper navigation={true}
        autoplay={{
            delay:3000,
            disableOnInteraction:false,
        }} modules={[Navigation,Autoplay]} className="mySwiper w-[100%]">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    )
}