import React from 'react';
import SectionTitle from '../SectionTitle';
import img from '@/app/assets/serviceAria1.jpg';
import Image from 'next/image';

const OurServiceAria = () => {
    return (
        <div className='my-32 mb-56 relative'>
            <Image className='h-[70vh] object-cover' src={img} alt="Service Area" />
            <div className='absolute top-[120px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-center'>
                <SectionTitle
                    className='text-white'
                    title={'Our Service Area'}
                    titleDescription={'Discover our expert interior design solutions tailored to transform your home or workplace into a masterpiece.'}
                />
            </div>
            <div className='flex flex-col justify-center items-center p-6 md:p-10 space-y-5 bg-[#f5f5f5] hover:bg-[#e8e8e8]
                 transition-all shadow-md rounded-md cursor-pointer absolute -bottom-20 left-1/2 transform -translate-x-1/2'>
                <h2 className='text-2xl font-semibold text-[#54595f]'>Color & Theme Selection</h2>
                <p className='text-sm text-[#54595f]'>Perfect palettes to match your style</p>
            </div>
         
         
        </div>
    );
};

export default OurServiceAria;
