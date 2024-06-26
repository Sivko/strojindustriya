import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageProvider from "./page-provider";
import { Root } from "@/type";
import { configNotion } from "@/configNotion";

export const metadata: Metadata = {
  title: "Строительная компания ООО СТРОЙИНДУСТРИЯ-К ",
  description: "Мы амбициозная проектно-строительная организация, имеющая значительный опыт в проектировании и реализации гражданских и промышленных сооружений",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await fetch(`${process.env.NOTE_DB_CONTENT}`, {...configNotion, cache: "no-cache"})
  const _global = await res.json() as Root;
  const global = {..._global, results: _global.results.filter(e=>e.properties.Status.status.name == "publish")}
  return (
    <html lang="ru">
      <body className="text-text">
        <PageProvider global={global}>
          <Header />
          {children}
          <Footer />
        </PageProvider>
      </body>
    </html>
  );
}
