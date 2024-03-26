"use client";

import Button from "../Button";
import RealizationItem from "./RealizationItem";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/app/page-provider";


export default function Realization() {

  const { global } = useContext(Context);

  const [isShowAll, setIsShowAll] = useState(false)
  const [data, setData] = useState(global.results.slice(0, 3))


  useEffect(() => {
    if (isShowAll) setData(global.results)
    else setData(global.results.slice(0, 3))

  }, [isShowAll])

  return (<div className="mt-extra pb-10">

    <h2 className="content" id="projects">Реализация</h2>

    <div>
      {data && data.map((item, index) => (
        <div key={index} className="last:border-b border-outline last:pb-12">
          <RealizationItem item={item} key={index} />
        </div>
      ))}
    </div>
    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6  content">
      <div />
      <Button onClick={() => setIsShowAll(prev => !prev)} text={isShowAll ? "Свернуть" : "Все проекты"} icons={false} />
    </div>

  </div>)
}