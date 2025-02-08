
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

import walton from "@/app/assets/companyLogo/walton.jpg";
import brb from "@/app/assets/companyLogo/brb.jpg";
import nasir from "@/app/assets/companyLogo/nasir.jpg";
import vision from "@/app/assets/companyLogo/vision.jpg";
import square from "@/app/assets/companyLogo/square.jpg";
import rfl from "@/app/assets/companyLogo/rfl.jpg";


const TrustedBrands = () => {

    return (
        <div className="my-20 w-8/12 mx-auto text-center">
            <SectionTitle title={'Trusted by Leading Brands'} titleDescription={'We have worked with 100+ trusted companies.'} />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <Image width={100} className="" src={walton} />
                <Image width={100} className="" src={rfl} />
                <Image width={100} className="" src={brb} />
                <Image width={100} className="" src={nasir} />
                <Image width={100} className="" src={vision} />
                <Image width={100} className="" src={square} />
            </div>
        </div>
    );
};

export default TrustedBrands;