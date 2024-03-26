"use client";

import { Swiper, SwiperRef } from 'swiper/react';
import "./style.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { Ref } from 'react';

export default function Slider({ slidesPerView, swiperRef, children }: { slidesPerView: number, swiperRef?:Ref<SwiperRef>, children: React.ReactNode; }) {
  return (
    <Swiper
      ref={swiperRef}
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