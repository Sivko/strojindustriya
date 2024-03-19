import Image from "next/image";
import FirstItem from "@/components/FirstItem";
import OfferList from "@/components/OfferList";
import Realization from "@/components/Realization";
import StepWorks from "@/components/StepWorks";
import Responseble from "@/components/Responseble";

export default function Home() {
  return (
    <main className="cnt">
      <FirstItem />
      <OfferList />
      <Realization />
      <StepWorks />
      <Responseble />
    </main>
  );
}
