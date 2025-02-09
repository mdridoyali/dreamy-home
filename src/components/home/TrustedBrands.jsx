
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
        <div className="my-20 ">
                <div className=" w-11/12 mx-auto py-5 ">
                    <SectionTitle title="Trusted by Leading Brands" titleDescription="We have worked with 100+ trusted companies." />
                    <div className="w-8/12 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5  justify-center items-center text-center ">
                        <Image className="" width={100} src={walton} alt="Walton" />
                        <Image width={100} src={rfl} alt="RFL" />
                        <Image width={100} src={brb} alt="BRB" />
                        <Image width={100} src={nasir} alt="Nasir" />
                        <Image width={100} src={vision} alt="Vision" />
                        <Image width={100} src={square} alt="Square" />
                    </div>
                </div>
        </div>

    );
};

export default TrustedBrands;
