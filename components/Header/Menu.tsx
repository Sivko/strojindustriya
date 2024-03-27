import Link from "next/link"

export default function Menu() {

  const links = [{ name: "О нас", href: "/#o_nas" }, { name: "Проекты", href: "/#projects" }, { name: "Партнерство", href: "/#partners" }, { name: "Контакты", href: "/#contacts" }]

  return (<nav className="flex gap-6">
    {links.map((item, index) => (<Link key={index} href={item.href}>{item.name}</Link>))}
  </nav>)
}