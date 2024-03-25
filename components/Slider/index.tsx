"use client";

import { Swiper } from 'swiper/react';
import "./style.css"
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider({ slidesPerView, children }: { slidesPerView: number, children: React.ReactNode; }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      className="mySwiper"
      loop={true}
      loopAddBlankSlides={true}
      spaceBetween={"16px"}
      autoHeight={true}
    >
      {children}
    </Swiper>
  )
}