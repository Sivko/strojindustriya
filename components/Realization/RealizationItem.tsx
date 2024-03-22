import Image from "next/image"
import Button from "../Button"
import Slider from "../Slider"
import { SwiperSlide } from "swiper/react"
import { Result } from "@/type"

export default function RealizationItem({ item }: { item: Result }) {
  const { properties } = item

  const images = properties.media.files.map((item) => item.file.url);

  const rangeYear = properties.date.date.end ? `${new Date(properties.date.date.start).getFullYear()}-${new Date(properties.date.date.end).getFullYear()}` : new Date(properties.date.date.start).getFullYear();

  return (<>
    <div className="content ">
      <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6 md:border-b md:border-outline">
        <div className="font-semibold text-small md:mb-0 mb-6">{rangeYear}</div>
        <div className="col-span-3 font-semibold">{properties.title.title[0].text.content}</div>
      </div>
    </div>
    <div className="md:grid grid-cols-4 gap-4 content mt-2 md:mt-12">
      <div className="hidden md:block">
        <button className="p-2"><Image src={"/icons/arrowLeft.svg"} width={18} height={15} alt="" /></button>
        <button className="p-2"><Image src={"/icons/arrowRight.svg"} width={18} height={15} alt="" /></button>
      </div>
      <div>
        <p className="text-addText text-base">{properties.description.rich_text[0].text.content}</p>
        {properties.slug.rich_text[0]?.text?.content && <div className="my-6">
          <Button href={properties.slug.rich_text[0]?.text?.content} text="Подробнее" icons={false} />
        </div>}
      </div>
      <div className="col-span-2">
        <Slider slidesPerView={2}>
          {images.map((image, index) => {
            return (<SwiperSlide key={index}>
              <div>
                <Image className="w-full" src={image} height={358} width={240} alt="" />
              </div>
            </SwiperSlide>)
          })}
        </Slider>
      </div>
    </div>
  </>)
}