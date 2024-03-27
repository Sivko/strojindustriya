"use client";

import Image from "next/image"
import Slider from "@/components/Slider"
import { SwiperRef, SwiperSlide } from "swiper/react"
import { useRef } from "react";

export default function Responseble() {

  const swiperRef = useRef<SwiperRef>(null)

  const list = [
    { name: "Гаврилов Андрей Викторович", position: "Руководитель компании", image: "/images/users/user1.png" },
    { name: "Занин Николай Сергеевич", position: "Директор компании", image: "/images/users/user2.png" },
    { name: "Поддубный Роман Павлович", position: "Главный инженер", image: "/images/users/user3.png" },
    { name: "Аджанский Максим Павлович", position: "Начальник ПТО", image: "/images/users/user4.jpg" },
    { name: "Занина Анастасия Сергеевна", position: "Дизайнер компании", image: "/images/users/user5.jpg" },
    { name: "Санталин Виталий Русланович", position: "Менеджер по строительству", image: "/images/users/user6.jpg" },
  ]

  return (<>
    <div className="mt-extra" id="o_nas">
      <h2 className="content">Ответственность</h2>
      <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6  content">
        <div />
        <p className="text-base text-addText">
          Профессионализм наших команд – предмет нашей гордости
        </p>
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
                  <Image className="!h-[358px] w-full object-cover object-center" src={item.image} height={358} width={480} alt="" />
                  <div className=" font-semibold text-base text-left pt-3 mb-2">{item.name}</div>
                  <div className="text-addText text-base text-left ">{item.position}</div>
                </div>
              </SwiperSlide>)
            })}
          </Slider>
        </div>
      </div>
    </div>
  </>)
}