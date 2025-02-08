import Banner from "@/components/home/Banner";
import MeetOurExperts from "@/components/home/MeetOurExperts";
import OurServiceAria from "@/components/home/OurServiceAria";
import OurStatus from "@/components/home/OurStatus";
import ReviewSection from "@/components/home/ReviewSection";
import TrustedBrands from "@/components/home/TrustedBrands";
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
      <MeetOurExperts/>
      <TrustedBrands/>
      <ReviewSection/>
    </div>
  );
}
