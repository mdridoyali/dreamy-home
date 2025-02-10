
import Banner from "@/components/services/Banner";
import CallToAction from "@/components/services/CallToAction";
import HowWeWork from "@/components/services/HowWeWork";
import OurServices from "@/components/services/OurServices";


const ServicePage = () => {
    return (
        <div className=" mx-auto">
            <Banner />
            <OurServices />
            <HowWeWork />
            <CallToAction/>
        </div>
    );
};

export default ServicePage;
