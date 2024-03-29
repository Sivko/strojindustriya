"use client"

import { useRef, useState } from "react"
import Button from "../Button";
import Image from "next/image";
import Slider from "../Slider";
import { SwiperRef, SwiperSlide } from "swiper/react";

export default function OfferList() {

  const items = [
    { title: "Проектирование", description: `Наши специалисты помогут создать оригинальный проект дома, гостиницы, офиса, склада, торгового центра  на территории Крыма, реализовав любые фантазии в рамках СНиП.` },
    { title: "Строительство", description: "Проведеем техническое обследование и разработку проектной документации. Организуем поставку и распределениу строительных материалов. Выполненим строительно-монтажные работы согласно проекту." },
    // { title: "Строительство2", description: "Наши специалисты помогут создать оригинальный проект" },
    // { title: "Строительство3", description: "Наши специалисты помогут создать оригинальный проект" }
  ]

  const list = [
    {
      image: "/images/offer1.png",
      text: "Логические комлексы",
      link: "#"
    },
    {
      image: "/images/offer2.png",
      text: "Склады",
      link: "#"
    },
    {
      image: "/images/offer3.png",
      text: "Коммерческая недвижимость",
      link: "#"
    },
    {
      image: "/images/offer4.png",
      text: "Уникальные проекты",
      link: "#"
    },

  ]

  const swiperRef = useRef<SwiperRef>(null)
  const [active, setActive] = useState(0);

  return (
    <div className="mt-extra pb-10">
      <h2 className="content md:mb-0 mb-7">Мы предлагаем</h2>
      <div className="md:grid grid-cols-4 gap-4 content">
        <div className="hidden md:block" />
        <div className="flex items-center flex-nowrap gap-[24px] pb-[12px] col-span-3 border-b border-outline overflow-x-auto">
          {items.map((item, index) => {
            return (<div key={index} onClick={() => setActive(index)} className={`cursor-pointer font-semibold text-base ${index == active ? "text-text" : "text-addButton"}`}>
              {item.title}
            </div>)
          })}
        </div>
      </div>

      <div className="md:grid grid-cols-4 gap-4 content">
        <div className="hidden md:block" />

        <div className="text-base text-addText mt-[24px]">
          {items[active].description}
          <div className="mt-[24px] text-text"><Button href="/#contacts" text="Заказать услугу" /></div>
        </div>
      </div>


      <div className="md:grid grid-cols-4 gap-4 content mt-12">
        <div className="">
          <button className="p-2" onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
          <button className="p-2" onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
        </div>
        <div className="col-span-3">
          <Slider slidesPerView={3} swiperRef={swiperRef}>
            {list.map((item, index) => {
              return (<SwiperSlide key={index}>
                <div>
                  <Image className="w-full !h-[258px] object-cover object-center" src={item.image} height={258} width={240} alt="" />
                  <div className=" font-bold text-base text-left py-3">{item.text}</div>
                </div>
              </SwiperSlide>)
            })}
          </Slider>
        </div>
      </div>

    </div>)
}