
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
import parallax from "@/app/assets/parallax.jpg";
import { FaArrowRight } from "react-icons/fa";

const TrustedBrands = () => {
    return (
        <div className="my-20 relative">
            <Image className="w-full h-[100vh] md:h-[70vh] object-cover" src={parallax} alt="Parallax" />
            <div className="w-11/12 mx-auto py-5 absolute top-10 left-0 right-0">
                <SectionTitle pColor={'text-white'} title="Trusted by Leading Brands" titleDescription="We have worked with 100+ trusted companies." />
                <div data-aos="zoom-out-up" className="w-1/2 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-center items-center text-center">
                    <Image className="mx-auto shadow-lg shadow-blue-500" width={100} src={walton} alt="Walton" />
                    <Image className="mx-auto shadow-lg shadow-blue-500" width={100} src={rfl} alt="RFL" />
                    <Image className="mx-auto shadow-lg shadow-blue-500" width={100} src={brb} alt="BRB" />
                    <Image className="mx-auto shadow-lg shadow-blue-500" width={100} src={nasir} alt="Nasir" />
                    <Image className="mx-auto shadow-lg shadow-blue-500" width={100} src={square} alt="Square" />
                    <p className=" bg-white shadow-lg shadow-blue-500 w-full h-full flex justify-center items-center text-xl text-blue-500 font-bold cursor-pointer " width={100}>More <FaArrowRight /></p>
                </div>
            </div>
        </div>
    );
};

export default TrustedBrands;
