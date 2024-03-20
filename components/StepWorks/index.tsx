import Link from "next/link";

export default function StepWorks() {
  return (
    <div className="mt-extra">
      <h2 className="content">Этапы работы</h2>
      <div className="md:grid grid-cols-4 gap-4 mt-12 pb-6  content">
        <div />
        <p className="text-base text-addText">
          Мы с ответственностью подходим к сблюдению норм ведения проекта. За, более чем, 10-ти летний опыт работы мы выделили 4 ключевых этапа реализации ваших идей.
        </p>
      </div>

      <div className="md:grid grid-cols-4 gap-4 pb-6  content mt-12 md:mt-24 items-center">
        <div><Link className="font-semibold text-base pb-[7px] border-b border-text" href={`tel:+79787969632`}>+7 (978) 796 - 96 -32</Link></div>
        <div className="col-span-3 border-b border-outline pb-6">
          <div className="md:grid gap-4 grid-cols-3 items-center">
            <div className="text-[clamp(44px,8vw,96px)] col-span-2 font-light">Брифинг</div>
            <div className="text-addText text-base">
              <ul>
                <li>Тема проекта</li>
                <li>Потребности, предпочтения, ожидания клиента</li>
                <li>Консультация</li>
              </ul>
            </div>
          </div>
        </div>

        <div><Link className="font-semibold text-base pb-[7px] border-b border-text" href={`#`}>Скачать документ</Link></div>
        <div className="col-span-3 border-b border-outline pb-6">
          <div className="md:grid gap-4 grid-cols-3 items-center">
            <div className="text-[clamp(44px,8vw,96px)] col-span-2 font-light">Договор</div>
            <div className="text-addText text-base">
              <ul>
                <li>Тема проекта</li>
                <li>Потребности, предпочтения, ожидания клиента</li>
                <li>Консультация</li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
        <div className="col-span-3 border-b border-outline pb-6">
          <div className="md:grid gap-4 grid-cols-3 items-center">
            <div className="text-[clamp(44px,8vw,96px)] col-span-2 font-light">Реализация</div>
            <div className="text-addText text-base">
              <ul>
                <li>Тема проекта</li>
                <li>Потребности, предпочтения, ожидания клиента</li>
                <li>Консультация</li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
        <div className="col-span-3 border-b border-outline pb-6">
          <div className="md:grid gap-4 grid-cols-3 items-center">
            <div className="text-[clamp(44px,8vw,96px)] col-span-2 font-light">Сдача работ</div>
            <div className="text-addText text-base">
              <ul>
                <li>Тема проекта</li>
                <li>Потребности, предпочтения, ожидания клиента</li>
                <li>Консультация</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}