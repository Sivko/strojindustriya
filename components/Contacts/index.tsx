"use client";
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import Button from "../Button";
import axios from 'axios';
import { useContext, useState } from 'react';
import { usePathname } from "next/navigation";
import { Context } from '@/app/page-provider';

export default function Contacts() {

  const path = usePathname()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSend, setIsSend] = useState(false)
  const { sqCalculate } = useContext(Context)

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSend(true)
    const res = await axios.post(`/api/sendmail`, { name, email, path, sqCalculate })
  }

  return (<div className="mt-extra content">
    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6" id="contacts">
      <h2>Оставить заявку</h2>
      <div className="col-span-2">
        <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">Обсудим проект?</div>
        <form acceptCharset="utf-8" method="POST" action="/api/sendmail" className="w-1/2 mt-10" onSubmit={handlerSubmit}>
          <input required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Имя" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-addButton outline-none" />
          <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-addButton outline-none mt-6" />
          <div className=" mt-11">
            <Button disabled={isSend} text={`${isSend ? "Отправлено" : "Оставить заявку"}`} icons={false} />
          </div>
          <p className="text-[11px] leading-[16px] text-addText mt-14">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ</p>
        </form>
      </div>
      <div className="h-full flex items-center">
        <div>
          <p className="text-base mb-3"><b>Адрес:</b></p>
          <p className="text-base text-addText mb-3">Ул. Бульвар Старшинова 12. 1-й этаж офис 7</p>
          {/* <div className="w-full h-[150px] bg-addText mt-3 mb-6"></div> */}
          <YMaps>
            <div className="mb-3">
              <Map defaultState={{ center: [45.049240, 35.375063], zoom: 14 }}>
                <Placemark geometry={[45.049240, 35.375063]} />
              </Map>
            </div>
          </YMaps>
          <Button blank={true} href="https://yandex.ru/maps/11469/feodosia/house/bulvar_starshinova_12/Z0wYdQBlSUMEQFpvfXx1eH5nZA==/?ll=35.375063%2C45.049240&z=16" text="Показать на карте" icons={false} />
        </div>
      </div>
    </div>
  </div>)
}