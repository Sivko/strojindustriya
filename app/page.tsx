import FirstItem from "@/components/FirstItem";
import OfferList from "@/components/OfferList";
import Realization from "@/components/Realization";
import StepWorks from "@/components/StepWorks";
import Responseble from "@/components/Responseble";
import About from "@/components/About";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";
import Calculate from "@/components/Calculate";

export default function Home() {

  return (
    <main>
      <FirstItem />
      {/* <OfferList /> */}
      <Realization />
      <StepWorks />
      <Responseble />
      <About />
      <Partners />
      <Calculate />
      <Contacts />
    </main>
  );
}
