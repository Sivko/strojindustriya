
"use client";

import numberWithSpaces from "@/helpers/numberWithSpaces";
import { Result } from "@/type";

export default function About({ data }: { data: Result }) {

  // type Params = Parameters<(a: Date, b: Date) => number> // [string, number]

  function monthDiff(d1: Date, d2: Date): number {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  const startDate = new Date(data.properties.date.date.start)
  const endDate = new Date(data.properties.date.date.end)

  const resultMonth = monthDiff(startDate, endDate)

  return (<div className="mt-extra content">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="border border-outline p-6 min-h-[160px] md:min-h-[358px]">
        <div className="text-addText text-small mb-3">Общая площадь</div>
        <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">{numberWithSpaces(data.properties.square.number)} м²</div>
      </div>
      <div className="border border-outline p-6 min-h-[160px] md:min-h-[358px] md:col-span-2">
        <div className="text-addText text-small mb-3">Стоимость проекта</div>
        <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">{numberWithSpaces(data.properties.amount.number)} ₽</div>
      </div>
      <div className="border border-outline p-6 min-h-[160px] md:min-h-[358px]">
        <div className="text-addText text-small mb-3">Срок реализации</div>
        <div className="text-[clamp(44px,5vw,76px)] leading-[clamp(56px,8vw,80px)] font-light">{resultMonth} мес.</div>
      </div>
    </div>
  </div>)
}