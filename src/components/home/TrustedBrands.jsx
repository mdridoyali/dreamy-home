
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
        <div className="my-20 text-center">
            <SectionTitle title={'Trusted by Leading Brands'} titleDescription={'We have worked with 100+ trusted companies.'} />
            <div className="">
                <Image width={200} className="" src={walton} />
                <Image src={rfl} />
                <Image src={brb} />
            </div>

        </div>
    );
};

export default TrustedBrands;