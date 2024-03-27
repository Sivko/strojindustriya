
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function About() {

  const itemsRef = useRef<HTMLDivElement[]>([]);

  const [itemsSize, setItemsSize] = useState([{ width: 0, height: 0 }])

  useEffect(() => {
    const sizes = itemsRef.current.map((el) => {
      return { width: el.offsetWidth, height: el.offsetHeight }
    })
    setItemsSize(sizes)
  }, [])

  const items = [
    { title: "Проектов в портфеле компании", metric: "> 15", image: "" },
    { title: "Коммерческой и жилой недвидимости", metric: "60 000 м²", image: "" },
    { title: "", metric: "", image: "" },
    { title: "", metric: "", image: "/images/building.png" },
    { title: "Государственных проектов", metric: "> 7", image: "" },
    { title: "На рынке недвижимости", metric: "10 лет", image: "" },
    { title: "Партнеров", metric: ">10", image: "" },
    { title: "", metric: "", image: "" },
  ]

  const Spacing = ({ index }: { index: number }) => <div
    key={index}
    ref={el => {
      if (el) itemsRef.current[index] = el 
    }}
    className={`border border-outline hidden md:block even:bg-[#f3d] ${index % 2 ? " transform scale-x-[1] scale-y-[-1]" : ""}`}
  > 
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line className=" stroke-outline stroke-1" x1={"0"} y1={"0"} x2={itemsSize[index]?.width} y2={itemsSize[index]?.height} />
    </svg>
  </div>

  return (<div className="mt-extra content">
    <h2 className="mb-12">Компетентность</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {items.map((item, index) => {
        const image = item.image
        return (
          <div key={index} className="contents">
            {!image && item.title && <div className="border border-outline p-6 min-h-[160px] md:min-h-[358px]">
              <div className="text-addText text-small mb-3">{item.title}</div>
              <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">{item.metric}</div>
            </div>}
            {image && <Image src={image} width={358} height={358} alt="" className="w-full h-full object-cover" />}
            {!image && !item.title && <Spacing index={index} />}
          </div>
        )
      })}
    </div>
  </div>)
}