"use client";

import Image from "next/image";
import Link from "next/link";

export default function Button({ text = "Оставить заявку", blank = false, icons = true, href = "", onClick = () => { } }) {

  if (href) {
    return (<Link target={blank ? "_blank" : ""} href={href} className="text-base font-semibold leading-6 pb-2 flex items-center border-b w-fit gap-[10px]">
      <span>{text}</span>
      {icons && <span><Image src={"/icons/vector.svg"} alt="" width={13} height={13} /></span>}
    </Link>)
  }
  return (<button onClick={onClick} className="text-base font-semibold leading-6 pb-2 flex items-center border-b w-fit gap-[10px]">
    <span>{text}</span>
    {icons && <span><Image src={"/icons/vector.svg"} alt="" width={13} height={13} /></span>}
  </button>)
}