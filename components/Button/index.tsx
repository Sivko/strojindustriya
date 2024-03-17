import Image from "next/image";

export default function Button({ text = "Оставить заявку", icons = true }) {
  return (<button className="text-base font-semibold leading-6 pb-2 flex items-center border-b w-fit gap-[10px]">
    <span>{text}</span>
    {icons && <span><Image src={"/icons/vector.svg"} alt="" width={13} height={13} /></span>}
  </button>)
}