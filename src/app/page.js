import Banner from "@/components/home/Banner";
import MeatOurExperts from "@/components/home/MeatOurExperts";
import OurServiceAria from "@/components/home/OurServiceAria";
import OurStatus from "@/components/home/OurStatus";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Banner />
      <WhatWeOffer/>
      <OurServiceAria/>
      <WhyChooseUs/>
      <OurStatus/>
      <MeatOurExperts/>
    </div>
  );
}
