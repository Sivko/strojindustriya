import Image from "next/image";
import Button from "@/components/Button";

export default function FirstItem() {
  return (<div>
    <h1 className="mt-12 whitespace-nowrap overflow-x-auto overflow-y-hidden content">Стройиндустрия-<span className="text-main">К</span></h1>
    <div className="md:grid grid-cols-4 gap-4 content">
      <div />
      <div className="mt-3 md:mt-6">
        <p className="text-base text-addText">
          Мы амбициозная проектно-строительная организация, имеющая значительный опыт в проектировании и реализации гражданских и промышленных сооружений
        </p>
        <div className=" mt-6">
          <Button />
        </div>
      </div>
    </div>
    <Image className=" mt-14 w-full" src="https://placehold.co/1600x852/png" height={852} width={1600} alt="" />
  </div>)
}