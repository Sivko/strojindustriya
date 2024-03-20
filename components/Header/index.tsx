"use client";

import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Gamburger from "@/components/Button/Gamburger";
import { useState } from "react";

export default function Header() {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  return (
    <header className=" border-b border-outline text-xs">
      <div className="content items-center h-[56px] md:h-[72px] grid grid-cols-3 gap-4 ">
        <Link href="/" className="flex items-center gap-2 group col-span-2 md:col-span-1">
          <Image src="/logo.png" alt="" width={40} height={40} />
          <span className="group-hover:text-main transition-all whitespace-nowrap">Стройиндустрия-К</span>
        </Link>
        <div className="hidden md:block truncate">
          <Menu />
        </div>
        <div className="hidden md:flex justify-end gap-[20px] ">
          <Link className="flex items-center gap-[16px]" href={`tel:+79787969632`}><Image className=" object-fill" src={`/icons/phone.svg`} alt="" width={24} height={24} />+7 (978) 796 - 96 -32</Link>
          <Link className="flex items-center gap-[16px]" href={`mailto:stroiindustria_K@mail.ru`}><Image className=" object-fill" src={`/icons/mail.svg`} alt="" width={20} height={16} />stroiindustria_K@mail.ru</Link>
        </div>
        {/* <div className="md:hidden col-span-2 flex items-end justify-end" onClick={()=>setIsOpenMobileMenu(e=>!e)}> */}
          {/* <Gamburger status={isOpenMobileMenu}  /> */}
        {/* </div> */}
      </div>
    </header>
  )
}