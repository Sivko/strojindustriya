import ProductPage from "@/components/ProductPage";
import { configNotion } from "@/configNotion";
import { Root } from "@/type";
import { Metadata } from "next";
import { notFound } from "next/navigation";


type Slug = {
  slug: string
}
type Params = {
  params?: Slug
}

export async function generateMetadata(request: Params): Promise<Metadata> {

  const res = await fetch(`${process.env.NOTE_DB_CONTENT}`, {...configNotion, cache: "no-cache"})
  const global = await res.json() as Root;
  const page = global.results?.filter(item => (item.properties?.slug?.rich_text[0] ? item.properties.slug.rich_text[0].text.content : "") == `/${request.params?.slug}`)
  if (!page?.length) return notFound()
  return {
    title: page[0].properties.title.title[0].text.content,
    description: page[0].properties.description.rich_text[0].text.content,
  }
}


export default async function Page(request: Params) {

  const res = await fetch(`${process.env.NOTE_DB_CONTENT}`, {...configNotion, cache: "no-cache"})
  const global = await res.json() as Root;
  const page = global.results?.filter(item => (item.properties?.slug?.rich_text[0] ? item.properties.slug.rich_text[0].text.content : "") == `/${request.params?.slug}`)

  return (<div className="">
    {page && <ProductPage data={page[0]} />}
  </div>)
}