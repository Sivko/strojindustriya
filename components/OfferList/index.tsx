"use client"

import { useState } from "react"
import Button from "../Button";
import Image from "next/image";
import Slider from "../Slider";
import { SwiperSlide } from "swiper/react";

export default function OfferList() {

  const items = [{
    title: "Проектирование", description: `Наши специалисты помогут создать оригинальный проект дома, гостиницы, офиса, склада, торгового центра  на территории Крыма, реализовав любые фантазии в рамках СНиП.`
  },
  { title: "Строительство", description: "Наши специалисты помогут создать оригинальный проект" },
  { title: "Строительство2", description: "Наши специалисты помогут создать оригинальный проект" },
  { title: "Строительство3", description: "Наши специалисты помогут создать оригинальный проект" }
  ]

  const list = [
    {
      image: "https://placehold.co/358x240/png",
      text: "Логические комлексы",
      link: "#"
    },
    {
      image: "https://placehold.co/358x240/png",
      text: "Склады",
      link: "#"
    },
    {
      image: "https://placehold.co/358x240/png",
      text: "Коммерческая недвижимость",
      link: "#"
    },
    {
      image: "https://placehold.co/358x240/png",
      text: "Логические комлексы",
      link: "#"
    },
    {
      image: "https://placehold.co/358x240/png",
      text: "Что-то еще",
      link: "#"
    },

  ]


  const [active, setActive] = useState(0);

  return (
    <div className="mt-extra pb-10">
      <h2 className="content">Мы предлагаем</h2>
      <div className="md:grid grid-cols-4 gap-4 content">
        <div className="hidden md:block" />
        <div className="flex items-center flex-nowrap gap-[24px] pb-[12px] col-span-3 border-b border-outline">
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
          <div className="mt-[24px] text-text"><Button text="Заказать услугу" /></div>
        </div>
      </div>


      <div className="md:grid grid-cols-4 gap-4 content mt-12">
        <div className="">
          <button className="p-2"><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
          <button className="p-2"><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
        </div>
        <div className="col-span-3">
          {/* <Image className="w-full" src="https://placehold.co/358x240/png" height={358} width={240} alt="" />
          <Image className="w-full" src="https://placehold.co/358x240/png" height={358} width={240} alt="" />
          <Image className="w-full" src="https://placehold.co/358x240/png" height={358} width={240} alt="" /> */}
          <Slider slidesPerView={3}>
            {list.map((item, index) => {
              return (<SwiperSlide key={index}>
                <div>
                  <Image className="w-full" src={item.image} height={358} width={240} alt="" />
                  <div className=" font-bold text-base text-left py-3">{item.text}</div>
                </div>
              </SwiperSlide>)
            })}
          </Slider>
        </div>
      </div>

    </div>)
}