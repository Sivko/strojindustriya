import Button from "../Button";

export default function Contacts() {
  return (<div className="mt-extra content">

    <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6">
      <h2>Оставить заявку</h2>
      <div className="col-span-2">
        <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">Обсудим проект?</div>
        <form className="w-1/2 mt-10">
          <input type="text" placeholder="Имя" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-text outline-none" />
          <input type="email" placeholder="E-mail" className="text-base w-full placeholder:text-addText py-[11px] focus:placeholder:text-[#fff] border-b border-text outline-none mt-6" />
          <div className=" mt-11">
            <Button text="Оставить заявку" icons={false} />
          </div>
          <p className="text-[11px] leading-[16px] text-addText mt-14">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ</p>
        </form>
      </div>
      <div className="h-full flex items-center">
        <div>
          <p className="text-base"><b>Адрес:</b></p>
          <p className="text-base text-addText">Ул. Бульвар Старшинова 12. 1-й этаж офис 7</p>
          <div className="w-full h-[150px] bg-addText mt-3 mb-6"></div>
          <Button text="Показать на карте" icons={false} />
        </div>
      </div>
    </div>
  </div>)
}