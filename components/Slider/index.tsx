"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider({ slidesPerView, children }: { slidesPerView: number, children: React.ReactNode; }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      className="mySwiper"
      loop={true}
      spaceBetween={"16px"}
      autoHeight={true}
    >
      {children}
    </Swiper>
  )
}