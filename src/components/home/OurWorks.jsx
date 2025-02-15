import React from 'react';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

import img1 from '@/app/assets/ourWorks/1.jpg'
import img2 from '@/app/assets/ourWorks/2.jpg'
import img3 from '@/app/assets/ourWorks/3.jpg'
import img4 from '@/app/assets/ourWorks/4.jpg'
import img5 from '@/app/assets/ourWorks/5.jpg'
import img6 from '@/app/assets/ourWorks/6.jpg'

const OurWorks = () => {
    return (
        <div className='mb-20 w-11/12 mx-auto'>
            <SectionTitle title={'Our Works'} titleDescription={'Transforming Spaces with Elegance & Style'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mx-auto">
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img1} alt="Design Image" />
                    <p className=" absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Explore our stunning interior design projects, where creativity meets functionality. From modern homes to sophisticated office spaces, our expert designs bring dreams to life. Browse our portfolio and get inspired for your next project!
                    </p>
                </div>
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img2} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Step into a world of elegance and innovation. Our interior design projects redefine spaces with a perfect balance of aesthetics and comfort. Whether it's a cozy home or a luxurious commercial setup, we craft interiors that reflect your style and vision.
                    </p>
                </div>
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img3} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Every space has a story, and we bring it to life with our unique interior designs. With meticulous planning and artistic execution, we turn ordinary spaces into extraordinary experiences. Explore our past projects and let us design your dream space!
                    </p>
                </div>
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img4} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Experience the art of interior design through our curated projects. From minimalist modern styles to timeless classics, our expert team delivers stunning results tailored to your needs. Get inspired by our work and take the first step toward your dream space!
                    </p>
                </div>
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img5} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Discover the beauty of thoughtfully designed interiors that blend style and functionality. Whether it's a cozy home, a chic office, or a luxurious space, our expert team transforms ideas into reality. Explore our work and find inspiration for your next project!
                    </p>
                </div>
                <div className="group relative min-h-[55vh] overflow-hidden rounded">
                    <Image className="object-cover h-full w-full" src={img6} alt="Design Image" />
                    <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Every space has a story, and we bring it to life with our unique interior designs. With meticulous planning and artistic execution, we turn ordinary spaces into extraordinary experiences. Explore our past projects and let us design your dream space!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OurWorks;