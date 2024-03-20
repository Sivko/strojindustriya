"use client";

import { SwiperSlide } from "swiper/react"
import Slider from "../Slider"
import Image from "next/image"

export default function Partners() {


  const list = [1, 23, 4, 42]


  return (<div className="mt-extra content">
    <h2>Партнеры</h2>
    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6 border-b border-outline">
      <div />
      <p className="text-base text-addText">
        Наша гордость - сотрудничество с компаниями, внушающими силу, доверие и надежность.
      </p>
    </div>


    <div className="md:grid grid-cols-4 gap-4 mt-12">
      <div className="">
        <button className="p-2"><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
        <button className="p-2"><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
      </div>
      <div className="col-span-3">
        <Slider slidesPerView={3}>
          {list.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-start justify-center border border-outline min-h">
                  <div className="w-full py-[80px] px-[10px]">
                    <Image className="w-full" src={`https://placehold.co/167x104/png`} height={167} width={104} alt="" />
                  </div>
                </div>
              </SwiperSlide>)
          })}
        </Slider>
      </div>
    </div>


  </div>)
}