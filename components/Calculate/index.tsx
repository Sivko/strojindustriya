"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import axios from "axios";
import { Range } from "react-range";
import numberWithSpaces from "@/helpers/numberWithSpaces";
import { Context } from "@/app/page-provider";

export default function Calculate() {

  const bet = 27000;
  // const [square, setSquare] = useState([100])
  const { sqCalculate, setSqCalculate } = useContext(Context)
  const [amount, setAmount] = useState(0)

  const path = usePathname()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSend, setIsSend] = useState(false)

  useEffect(() => { setAmount(Number(sqCalculate) * bet) }, [sqCalculate])

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSend(true)
    const res = await axios.post(`/api/sendmail`, { name, email, path })
  }

  return (<div className="mt-extra content border-b border-outline">
    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6" id="calculate">
      <h2>Расчет стоимости</h2>
      <div className="col-span-3 flex items-end">
        <div className="w-1/2">
          <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">Калькулятор</div>
          <form acceptCharset="utf-8" method="POST" action="/api/sendmail" className="mt-10" onSubmit={handlerSubmit}>
            <h2>{sqCalculate} м²</h2>
            <Range
              step={1}
              min={1}
              max={1000}
              values={sqCalculate}
              onChange={(values) => setSqCalculate(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '2px',
                    width: '100%',
                    outline: 'none',
                    backgroundColor: '#ccc',
                    cursor: "pointer"
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '12px',
                    width: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#999'
                  }}
                />
              )}
            />
            {/* <input required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Имя" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-addButton outline-none" />
          <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-addButton outline-none mt-6" /> */}
            <div className=" mt-11">
              <Button text="Обратная связь" href="#contacts" />
            </div>
            {/* <p className="text-[11px] leading-[16px] text-addText mt-14 w-1/2">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ</p> */}
          </form>
        </div>
        <div className="text-[clamp(44px,5vw,76px)] w-1/2 text-right leading-[clamp(56px,8vw,80px)] font-thin text-nowrap">{numberWithSpaces(amount)} ₽</div>
      </div>
    </div>
  </div>)
}