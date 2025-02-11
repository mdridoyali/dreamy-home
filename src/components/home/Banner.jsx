'use client'

import Image from 'next/image';
import img1 from '@/app/assets/banner/1.jpg';
import img2 from '@/app/assets/banner/2.jpg';
import img3 from '@/app/assets/banner/3.jpg';
import img4 from '@/app/assets/banner/4.jpg';
import { useEffect, useState } from 'react';
import { Button, } from '../ui/button';
import { Input } from '../ui/input';
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

const Banner = () => {
    const images = [img1, img2, img3, img4];
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setFade(true);
            }, 200);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className={`relative w-full h-[80vh] md:h-screen transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                    className="w-full h-full"
                    src={images[currentImage]}
                    alt="Interior Design Banner"
                    priority
                     data-aos="fade-up"
                />
            </div>


            <div className="absolute top-[15%] md:top-[20%] w-72 md:w-auto left-1/2 transform -translate-x-1/2 text-center text-white bg-black bg-opacity-50 px-2 py-3 rounded-md">
                <h2  data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-blue-500 mb-2 md:mb-4">
                    Design Your Dream Space
                </h2>
                <p className="text-lg md:text-xl font-semibold max-w-lg mx-auto">
                    Transforming spaces with design that reflects your style and enhances your comfort.
                </p>
                <div className="flex mx-auto mt-4 mb-2 w-full max-w-sm items-center gap-1">
                    <Input type="email" placeholder="Search" />
                    <Button type="submit " className='bg-blue-500 hover:shadow-lg hover:shadow-blue-500'><FaSearch /></Button>
                </div>
                <Link href={'/contact'}><button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Get a Free Consultation</button></Link>
            </div>
        </div>
    );
};

export default Banner;
