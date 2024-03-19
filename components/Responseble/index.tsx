"use client";

import Image from "next/image"
import Slider from "@/components/Slider"
import { SwiperSlide } from "swiper/react"

export default function Responseble() {

  const list = [1,23,4,42]

  return (<>
    <div className="mt-extra">
      <h2 className="content">Ответственность</h2>
      <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6  content">
        <div />
        <p className="text-base text-addText">
          Мы с ответственностью подходим к сблюдению норм ведения проекта. За, более чем, 10-ти летний опыт работы мы выделили 4 ключевых этапа реализации ваших идей.
        </p>
      </div>

      <div className="md:grid grid-cols-4 gap-4 content mt-12">
        <div className="">
          <button className="p-2"><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
          <button className="p-2"><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
        </div>
        <div className="col-span-3">
          <Slider slidesPerView={3}>
            {list.map((item, index) => {
              return (<SwiperSlide key={index}>
                <div>
                  <Image className="w-full" src={`https://placehold.co/358x480/png`} height={358} width={480} alt="" />
                  <div className=" font-bold text-base text-left py-3">{`item.text`}</div>
                  <div className="text-addText font-bold text-base text-left py-3">{`item.text`}</div>
                </div>
              </SwiperSlide>)
            })}
          </Slider>
        </div>
      </div>


    </div>
  </>)
}