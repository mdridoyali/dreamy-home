import React from 'react';
import SectionTitle from '../SectionTitle';

import experience from '@/app/assets/whyChooseUs/experience.png'
import budget from '@/app/assets/whyChooseUs/budget.png'
import custom from '@/app/assets/whyChooseUs/custom.png'
import satisfaction from '@/app/assets/whyChooseUs/satisfaction.png'
import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <div className='mb-20 w-11/12  mx-auto'>
            <SectionTitle title={'Why Choose Us'} titleDescription={'Experience, Expertise & Excellence – Discover Why We are the Best Choice!'}/>
            <div className=' md:flex justify-center items-center gap-6 md:gap-20 '>
                <div className='md:w-1/2'>
                    <p className='text-xl lg:w-2/3 text-gray-600 leading-10 underline'>
                        Through a unique combination of engineering, construction and design disciplines and
                        expertise. Interior design is the art and science of enhancing the interiors, sometimes
                        including the exterior, of a space or building, to achieve a healthier and more aesthetically
                        pleasing environment.
                    </p>
                </div>

                {/* card container */}
                <div className='md:w-1/2 grid grid-cols-2 gap-10 mt-5'>
                    <div className='p-5 text-gray-600 font-semibold hover:text-blue-500 shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all flex flex-col items-center gap-5 rounded-lg text-center'>
                        <Image src={experience} />
                        <h2 className='text-xl  '>10+ Years of Experience</h2>
                    </div>
                    <div className='p-5 text-gray-600 font-semibold hover:text-blue-500  shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all flex flex-col items-center gap-5 rounded-lg text-center'>
                        <Image src={custom} />
                        <h2 className='text-xl'>Custom Design Solutions</h2>
                    </div>
                    <div className='p-5  text-gray-600 font-semibold hover:text-blue-500 shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all flex flex-col items-center gap-5 rounded-lg text-center'>
                        <Image src={budget} />
                        <h2 className='text-xl'>Budget-Friendly Options</h2>
                    </div>
                    <div className='p-5  text-gray-600 font-semibold hover:text-blue-500 shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all flex flex-col items-center gap-5 rounded-lg text-center'>
                        <Image src={satisfaction} />
                        <h2 className='text-xl '>100% Client Satisfaction</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;