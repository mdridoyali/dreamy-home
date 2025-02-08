import Banner from "@/components/home/Banner";
import OurServiceAria from "@/components/home/OurServiceAria";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatWeOffer/>
      <OurServiceAria/>
      <WhyChooseUs/>
    </div>
  );
}
