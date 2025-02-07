import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import home from '@/app/assets/whatWeOffer/home.png'

const WhatWeOffer = () => {
    return (
        <div className='my-14 w-11/12 mx-auto'>
            <SectionTitle title={'What We Offer 🏠'} titleDescription='We provide top-tier interior design services tailored to your needs' />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5 text-center'>
                <div className='flex flex-col justify-center items-center p-6 md:p-10 space-y-5 bg-[#f5f5f5] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <Image width={70} src={home} />
                    <h2 className='text-2xl font-semibold text-[#54595f]'>Home Interior Design</h2>
                    <p className='text-sm text-[#54595f]'>Modern, classic, and luxurious designs</p>
                </div>
                <div className='flex flex-col justify-center items-center p-6 md:p-10 space-y-5 bg-[#f5f5f5] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <Image width={70} src={home} />
                    <h2 className='text-2xl font-semibold text-[#54595f]'>Office & Commercial Spaces</h2>
                    <p className='text-sm text-[#54595f]'>Functional, creative, and inspiring workplaces</p>
                </div>
                <div className='flex flex-col justify-center items-center p-6 md:p-10 space-y-5 bg-[#f5f5f5] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <Image width={70} src={home} />
                    <h2 className='text-2xl font-semibold text-[#54595f]'>Furniture & Decor Consultation</h2>
                    <p className='text-sm text-[#54595f]'>Custom pieces that enhance your space</p>
                </div>
                <div className='flex flex-col justify-center items-center p-6 md:p-10 space-y-5 bg-[#f5f5f5] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <Image width={70} src={home} />
                    <h2 className='text-2xl font-semibold text-[#54595f]'>Color & Theme Selection</h2>
                    <p className='text-sm text-[#54595f]'>Perfect palettes to match your style</p>
                </div>

            </div>
        </div>
    );
};

export default WhatWeOffer;