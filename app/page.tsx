import Image from "next/image";
import FirstItem from "@/components/FirstItem";
import OfferList from "@/components/OfferList";
import Realization from "@/components/Realization";

export default function Home() {
  return (
    <main className="cnt">
      <FirstItem />
      <OfferList />
      <Realization />
    </main>
  );
}
