import Image from 'next/image';
import serviceImg from "@/app/assets/banner/1.jpg";



const Banner = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src={serviceImg} alt="Service Banner" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center px-5">
                <h1 className="text-4xl font-bold">Transform Your Space with Our Expert Services</h1>
                <p className="mt-2">Innovative & Customized Interior Design Solutions</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Get a Free Consultation</button>
            </div>
        </div>
    );
};

export default Banner;

