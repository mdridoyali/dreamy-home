import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import img1 from '@/app/assets/ourAgents/1.jpg'
import img2 from '@/app/assets/ourAgents/2.jpg'
import img3 from '@/app/assets/ourAgents/3.jpg'

import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const experts = [
    {
        "name": "Ayesha Rahman",
        "location": "Dhaka",
        "designation": "Senior Interior Designer",
        "experience": "10+ years",
        "description": "With over 10 years of experience, Ayesha specializes in modern and luxury interiors, transforming spaces with elegance and functionality.",
        "image": img1
    },
    {
        "name": "Hasan Kabir",
        "location": "Khulna",
        "designation": "Creative Space Planner",
        "experience": "8+ years",
        "description": "Hasan is an expert in maximizing small spaces with innovative layouts and smart furniture designs, making every inch count.",
        "image": img3
    },
    {
        "name": "Nusrat Jahan",
        "location": "Rajshahi",
        "designation": "Residential Design Specialist",
        "experience": "7+ years",
        "description": "Passionate about cozy and personalized interiors, Nusrat brings warmth and harmony to every home she designs.",
        "image": img2
    }
]



const MeetOurExperts = () => {
    return (
        <div className='w-11/12 mb-20 mx-auto'>
            <SectionTitle title={'Meet Our Experts'} titleDescription={'Experts Dedicated to Designing Your Dream Spaces'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    experts.map(data => <div  data-aos="flip-up" className='group rounded-t-xl shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all space-y-1 overflow-hidden'>
                        <div className="overflow-hidden">
                            <Image
                                className='max-w-full h-80 object-cover rounded-t-xl transition-transform duration-300 ease-in-out group-hover:scale-105'
                                src={data.image}
                                alt="Ayesha Rahman"
                            />
                        </div>
                        <div className='p-4'>
                            <h2 className='text-blue-500 font-semibold text-xl'>{data?.name}{' '}{'('}{data.location}{')'}</h2>
                            <h3 className='font-semibold text-gray-600'>{data.designation}{'. '}<span className='text-xs font-normal'>{data.experience}</span></h3>
                            <p className='text-sm text-gray-600'>{data.description} </p>
                            <div className='flex gap-5 mt-3 text-2xl justify-end'>
                                <FaFacebook className='cursor-pointer text-blue-500 hover:text-black duration-300' />
                                <FaLinkedinIn className='cursor-pointer text-blue-500 hover:text-black duration-300' />
                                <FaTwitter className='cursor-pointer text-blue-500 hover:text-black duration-300' />
                                <MdAddIcCall className='cursor-pointer text-blue-500 hover:text-black duration-300' />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MeetOurExperts;