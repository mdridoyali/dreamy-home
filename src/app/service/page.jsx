
import Banner from "@/components/services/Banner";
import CallToAction from "@/components/services/CallToAction";
import HowWeWork from "@/components/services/HowWeWork";
import OurServices from "@/components/services/OurServices";
import ServiceCard from "@/components/services/ServiceCard";


const ServicePage = () => {
    return (
        <div className=" mx-auto">
            <Banner />
            <ServiceCard/>
            {/* <OurServices /> */}
            <HowWeWork />
            <CallToAction/>
        </div>
    );
};

export default ServicePage;
