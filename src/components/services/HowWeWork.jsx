import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

import step1 from "@/app/assets/banner/1.jpg";
import step2 from "@/app/assets/banner/2.jpg";
import step3 from "@/app/assets/banner/3.jpg";

const HowWeWork = () => {
    return (

        <div div className="my-20 w-11/12 mx-auto" >
            <SectionTitle title="How We Work" titleDescription="Our step-by-step design process ensures quality and satisfaction." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                <div className="text-center">
                    <Image src={step1} alt="Step 1" className="w-full h-56 object-cover rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">Step 1: Consultation</h3>
                    <p className="text-gray-600 mt-2">Understanding your vision and requirements.</p>
                </div>
                <div className="text-center">
                    <Image src={step2} alt="Step 2" className="w-full h-56 object-cover rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">Step 2: Design & Planning</h3>
                    <p className="text-gray-600 mt-2">Creating layouts, selecting materials, and finalizing the concept.</p>
                </div>
                <div className="text-center">
                    <Image src={step3} alt="Step 3" className="w-full h-56 object-cover rounded-lg" />
                    <h3 className="text-xl font-semibold mt-4">Step 3: Execution</h3>
                    <p className="text-gray-600 mt-2">Bringing the design to life with precision and care.</p>
                </div>
            </div>
        </div>

    );
};

export default HowWeWork;