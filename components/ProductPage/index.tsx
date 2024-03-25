import Image from "next/image";
import Button from "@/components/Button";
import { Result } from "@/type";
import FirstItem from "./FirstItem";
import About from "./About";
import Gallery from "./Gallery";
import InfoObject from "./InfoObject";
import Contacts from "../Contacts";

export default function ProductPage({ data }: { data: Result }) {
  return (<div>
    <FirstItem data={data} />
    <About data={data} />
    <InfoObject data={data} />
    <Gallery data={data} />
    <Contacts />
  </div>)
}