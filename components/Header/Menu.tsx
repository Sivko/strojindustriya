import Link from "next/link"

export default function Menu() {

  const links = [{ name: "О нас", href: "#" }, { name: "Проекты", href: "#" }, { name: "Цены", href: "#" }, { name: "Партнерство", href: "#" }, { name: "Контакты", href: "#" }]

  return (<nav className="flex gap-6">
    {links.map((item, index) => (<Link key={index} href={item.href}>{item.name}</Link>))}
  </nav>)
}