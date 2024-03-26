import ProductPage from "@/components/ProductPage";
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

  const res = await fetch(`${process.env.URL}/api/global`, { next: { revalidate: 3600 } })
  const global = await res.json() as Root;
  const page = global.results?.filter(item => (item.properties?.slug?.rich_text[0] ? item.properties.slug.rich_text[0].text.content : "") == `/${request.params?.slug}`)
  if (!page?.length) return notFound()
  return {
    title: page[0].properties.title.title[0].text.content,
    description: page[0].properties.description.rich_text[0].text.content,
  }
}


export default async function Page(request: Params) {

  const res = await fetch(`${process.env.URL}/api/global`)
  const global = await res.json() as Root;
  const page = global.results?.filter(item => (item.properties?.slug?.rich_text[0] ? item.properties.slug.rich_text[0].text.content : "") == `/${request.params?.slug}`)

  return (<div className="">
    {page && <ProductPage data={page[0]} />}
  </div>)
}