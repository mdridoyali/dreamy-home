import React from 'react';
import SectionTitle from '../SectionTitle';
import img from '@/app/assets/serviceAria1.jpg';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

import img1 from '@/app/assets/faq/1.jpg'
import img2 from '@/app/assets/faq/2.jpg'
import img3 from '@/app/assets/faq/3.jpg'
import img4 from '@/app/assets/faq/4.jpg'

const cities = [
    {
        "image": img1,
        "city": "Dhaka"
    },
    {
        "image": img2,
        "city": "Khulna"
    },
    {
        "image": img3,
        "city": "Rajshahi"
    },
    {
        "image": img4,
        "city": "Chottrogram"
    },
    {
        "image": img4,
        "city": "Chottrogram"
    },
]

const OurServiceAria = () => {
    return (
        <div className='my-20 mb-56 relative'>
            <Image className='h-[100vh] md:h-[70vh] object-cover' src={img} alt="Service Area" />
            <div className='absolute top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <SectionTitle
                    title={'Our Service Area'}
                    pColor={'text-white'}
                    titleDescription={'Discover our expert interior design solutions tailored to transform your home or workplace into a masterpiece.'}
                />
            </div>

            {/* Cards container */}
            <div className='grid grid-cols-2 md:grid-cols-5  gap-5 w-11/12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center '>
                {
                    cities?.map(data => <div className='w-full lg:w-3/4 h-full md:h-full flex flex-col justify-center items-center rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500'>
                        <Image src={data?.image} className='rounded-t-lg w-full h-20 md:h-full' />
                        <h2 className='text-xl font-semibold md:p-2 text-gray-500 '>{data?.city}</h2>
                    </div>
                    )}
            </div>


            {/* <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 w-11/12 mx-auto 
                absolute left-1/2 -translate-x-1/2 -translate-y-1/2'>
             
                <div className='flex flex-col justify-center  shadow-slate-400 items-center p-6 md:p-10 space-y-5
                 bg-[#ffffff] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <h2 className='text-3xl font-semibold bg-slate-100 rounded-xl p-5 flex items-center gap-5 text-blue-600'>Dhaka<FaArrowRight /></h2>
                </div>
                <div className='flex flex-col justify-center  shadow-slate-400 items-center p-6 md:p-10 space-y-5 bg-[#ffffff] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <h2 className='text-3xl font-semibold bg-slate-100 rounded-xl p-5 flex items-center gap-5 text-blue-600'>Khulna<FaArrowRight /></h2>
                </div>
                <div className='flex flex-col justify-center  shadow-slate-400 items-center p-6 md:p-10 space-y-5 bg-[#ffffff] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <h2 className='text-3xl font-semibold bg-slate-100 rounded-xl p-5 flex items-center gap-5 text-blue-600'>Rajshahi<FaArrowRight /></h2>
                </div>
                <div className='flex flex-col justify-center  shadow-slate-400 items-center p-6 md:p-10 space-y-5 bg-[#ffffff] hover:bg-[#e8e8e8] transition-all shadow-md rounded-md cursor-pointer'>
                    <h2 className='text-3xl font-semibold bg-slate-100 rounded-xl p-5 flex items-center gap-5 text-blue-600'>Sylhet<FaArrowRight /></h2>
                </div>

            </div> */}
        </div>
    );
};

export default OurServiceAria;

{/* <div class="shadow-lg shadow-blue-400 md:w-96 glass h-[120px] relative mt-7 rounded-lg aos-init aos-animate" data-aos="flip-right"></div> */ }
