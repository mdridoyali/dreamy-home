import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';
import img1 from '@/app/assets/ourAgents/1.jpg'
import img2 from '@/app/assets/ourAgents/2.jpg'
import img3 from '@/app/assets/ourAgents/3.jpg'

const MeatOurExperts = () => {
    return (
        <div className='w-11/12 mb-20 mx-auto'>
            <SectionTitle title={'Meet Our Experts'} titleDescription={'Experts Dedicated to Designing Your Dream Spaces'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='rounded-t-xl shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 transition-all space-y-1 overflow-hidden'>
                    {/* Image Wrapper for Zoom Effect */}
                    <div className="overflow-hidden">
                        <Image
                            className='max-w-full h-80 object-cover rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-105'
                            src={img1}
                            alt="Ayesha Rahman"
                        />
                    </div>
                    <div className='p-4'>
                        <h2 className='text-blue-500 font-semibold text-xl'>Ayesha Rahman (Dhaka)</h2>
                        <h3 className='font-semibold text-gray-600'>Senior Interior Designer.</h3>
                        <p className='text-sm text-gray-600'>
                            With over 10 years of experience, Ayesha specializes in modern and luxury interiors, transforming spaces with elegance and functionality.
                        </p>
                    </div>
                </div>

                <div>
                    <Image />
                    <h2>Hasan Kabir (Khulna)</h2>
                    <h3>Creative Space Planner.</h3>
                    <p>Hasan is an expert in maximizing small spaces with innovative layouts and smart furniture designs, making every inch count.</p>
                </div>
                <div>
                    <Image />
                    <h2>Nusrat Jahan (Rajshahi)</h2>
                    <h3>Residential Design Specialist</h3>
                    <p>Passionate about cozy and personalized interiors, Nusrat brings warmth and harmony to every home she designs.</p>
                </div>
            </div>
        </div>
    );
};

export default MeatOurExperts;