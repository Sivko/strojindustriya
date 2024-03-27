"use client";

import { Result } from "@/type";
import Image from "next/image";
export default function Gallery({ data }: { data: Result }) {




  return (
    <div className="mt-extra content">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.properties.media.files.map((item, index) => {
          if (index == 0) return;
          const rules = ["", "col-span-2", "col-span-2", "col-span-2", "col-span-1", "col-span-4", "col-span-2", "col-span-2", "col-span-2", "col-span-1", "col-span-4"]
          return (<div className={`${rules[index]}`} key={index}>
            <Image className="w-full" alt="" src={item.file.url} width={600} height={500} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPc8R8AAnUBuTe7lTwAAAAASUVORK5CYII=" />
          </div>)
        })}
      </div>
    </div>
  )
}