import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (<div className="mt-extra content">
    <div className="border-t border-outline py-6 flex items-center justify-between">
      <div><p className="text-base font-semibold">© Стройиндустрия-<span className="text-main">К</span> <span className="text-small">{year} г.</span> Все права защищены</p></div>
      <ul className="flex gap-6 text-small font-semibold">
        <li className="list-none"><Link href={"/privacy"} target="_blank">Политики обработки персональных данных</Link></li>
      </ul>
    </div>
  </div>)
}