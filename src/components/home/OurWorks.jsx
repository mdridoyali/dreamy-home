import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

import img1 from '@/app/assets/ourWorks/1.jpg'
import img2 from '@/app/assets/ourWorks/2.jpg'
import img3 from '@/app/assets/ourWorks/3.jpg'
import img4 from '@/app/assets/ourWorks/4.jpg'

const OurWorks = () => {
    return (
        <div className='mb-20 w-11/12 mx-auto'>
            <SectionTitle title={'Our Works'} titleDescription={'Transforming Spaces with Elegance & Style'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
                <div className="group relative border-2 min-h-[55vh] overflow-hidden">
                    <Image className="object-cover h-full w-full" src={img1} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Explore our stunning interior design projects, where creativity meets functionality. From modern homes to sophisticated office spaces, our expert designs bring dreams to life. Browse our portfolio and get inspired for your next project!
                    </p>
                </div>
                <div className="group relative border-2 min-h-[55vh] overflow-hidden">
                    <Image className="object-cover h-full w-full" src={img2} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        Transforming Spaces with Elegance & Style
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OurWorks;