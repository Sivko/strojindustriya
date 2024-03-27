"use client";

import { SwiperRef, SwiperSlide } from "swiper/react"
import Slider from "../Slider"
import Image from "next/image"
import { useRef } from "react";

export default function Partners() {


  const list = [
    {image: "/images/partners/partner1.png"},
    {image: "/images/partners/partner5.png"},
    {image: "/images/partners/partner2.png"},
    {image: "/images/partners/partner3.png"},
]
  const swiperRef = useRef<SwiperRef>(null)


  return (<div className="mt-extra content">
    <h2 id="partners">Партнеры</h2>
    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6 border-b border-outline">
      <div />
      <p className="text-base text-addText">
        Наша гордость - сотрудничество с компаниями, внушающими силу, доверие и надежность.
      </p>
    </div>


    <div className="md:grid grid-cols-4 gap-4 mt-12">
      <div className="">
        <button className="p-2" onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
        <button className="p-2" onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
      </div>
      <div className="col-span-3">
        <Slider slidesPerView={3} swiperRef={swiperRef}>
          {list.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex justify-center border border-outline min-h">
                  <div className="w-full py-[80px] px-[50px] flex items-center justify-center h-[260px]">
                    <Image className="w-full !object-contain" src={item.image} height={167} width={104} alt="" />
                  </div>
                </div>
              </SwiperSlide>)
          })}
        </Slider>
      </div>
    </div>


  </div>)
}