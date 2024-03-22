
import Image from "next/image";
import FirstItem from "@/components/FirstItem";
import OfferList from "@/components/OfferList";
import Realization from "@/components/Realization";
import StepWorks from "@/components/StepWorks";
import Responseble from "@/components/Responseble";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";
import { useContext } from "react";
import { Context } from "./page-provider";

export default function Home() {

  return (
    <main className="cnt">
      <FirstItem />
      <OfferList />
      <Realization />
      <StepWorks />
      <Responseble />
      <About />
      <Partners />
      <Contacts />
    </main>
  );
}
