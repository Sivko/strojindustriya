"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { SwiperSlide } from "swiper/react";

import { Swiper, SwiperRef } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { useRef } from 'react';


export default function FirstItem() {
  const swiperRef = useRef<SwiperRef>(null)

  return (<div>
    <h1 className="mt-12 whitespace-nowrap overflow-x-auto overflow-y-hidden content">Стройиндустрия-<span className="text-main">К</span></h1>
    <div className="md:grid grid-cols-4 gap-4 content">
      <div />
      <div className="mt-3 md:mt-6">
        <p className="text-base text-addText">
          Мы амбициозная проектно-строительная организация, имеющая значительный опыт в проектировании и реализации гражданских и промышленных сооружений
        </p>
        <div className=" mt-6">
          <Button href="/#contacts" />
        </div>
      </div>
    </div>
    <div className="relative">
      {/* <div className="flex absolute inset-0 z-10 cursor-pointer">
        <div className="p-2 w-1/2" onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()} />
        <div className="p-2 w-1/2" onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()} />
      </div> */}

      <Swiper
        effect={'creative'}
        slidesPerView={3}
        creativeEffect={
          {
            next: {
              translate: ["100%", 0, 0],
              opacity: 0.3,
              scale: .75
            },
            prev: {
              translate: ["-100%", 0, 0],
              opacity: 0.3,
              scale: .75
            },
          }
        }
        loop={true}
        autoHeight={false}
        modules={[Autoplay]}
        ref={swiperRef}
        // fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
          <Image className=" mt-14 w-full max-w-[800px]" src="/images/fistsection/main4.png" height={420} width={800} alt="" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" mt-14 w-full max-w-[800px]" src="/images/fistsection/main5.png" height={420} width={800} alt="" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" mt-14 w-full max-w-[800px]" src="/images/fistsection/main1.png" height={420} width={800} alt="" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" mt-14 w-full max-w-[800px]" src="/images/fistsection/main2.png" height={420} width={800} alt="" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className=" mt-14 w-full max-w-[800px]" src="/images/fistsection/main3.png" height={420} width={800} alt="" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>)
}
1280
826