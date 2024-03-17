import Image from "next/image"
import Button from "../Button"
import Slider from "../Slider"
import { SwiperSlide } from "swiper/react"

export default function RealizationItem() {


  const list = [
    {
      image: "https://placehold.co/358x240/png",
    },
    {
      image: "https://placehold.co/358x240/png",
    },
    {
      image: "https://placehold.co/358x240/png",
    },
    {
      image: "https://placehold.co/358x240/png",
    },
    {
      image: "https://placehold.co/358x240/png",
    },
  ]

  return (<>
    <div className="content ">
      <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6 border-b border-outline">
        <div className="font-semibold text-small">2021-2023</div>
        <div className="col-span-3 font-semibold">Обелиск Славы</div>
      </div>
    </div>
    <div className="md:grid grid-cols-4 gap-4 content mt-12">
      <div className="">
        <button className="p-2"><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
        <button className="p-2"><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
      </div>
      <div>
        <p className="text-addText text-base">Разработка проектно-сметной документации и осуществление строительно-монтажных работы по объектам благоустройства прилегающих территорий многоквартирных и жилых домов г. Щелкино</p>
        <div className="mt-6">
          <Button text="Подробнее" icons={false} />
        </div>
      </div>
      <div className="col-span-2">
        <Slider slidesPerView={2}>
          {list.map((item, index) => {
            return (<SwiperSlide key={index}>
              <div>
                <Image className="w-full" src={item.image} height={358} width={240} alt="" />
              </div>
            </SwiperSlide>)
          })}
        </Slider>
      </div>
    </div>
  </>)
}