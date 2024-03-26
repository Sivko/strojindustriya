import Marquee from "react-fast-marquee";
import { Result } from "@/type";
import Image from "next/image";
import Button from "@/components/Button";

export default function FirstItem({ data }: { data: Result }) {
  return (
    <>

      <h1 className="mt-12 whitespace-nowrap">
        <Marquee className="overflow-hidden">
          {data.properties.title.title[0].text.content}
        </Marquee>
      </h1>
      <div className="md:grid grid-cols-4 gap-4 content">
        <div />
        <div className="mt-3 md:mt-6">
          <p className="text-base text-addText">
            {data.properties.description.rich_text[0].text.content}
          </p>
          <div className=" mt-6">
            <Button />
          </div>
        </div>
      </div>
      <Image className="mt-14 w-full" src={data.properties.media.files[0].file.url} height={852} width={1600} alt="" />
    </>
  )
}