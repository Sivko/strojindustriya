"use client";

import Slider from "@/components/Slider"
import Image from "next/image"
import { SwiperSlide } from "swiper/react";
import Button from "../Button";
import RealizationItem from "./RealizationItem";


export default function Realization() {

  const items = [1, 2, 3, 4]

  return (<div className="mt-extra pb-10">

    <h2 className="content">Реализация</h2>

    {items.map((item, index) => (
      <div key={index} className="last:border-b border-outline last:pb-12">
        <RealizationItem key={index} />
      </div>
    ))}

  </div>)
}