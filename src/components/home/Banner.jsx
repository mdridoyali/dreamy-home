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
                />
            </div>


            <div className="absolute top-[20%] w-60 md:w-auto left-1/2 transform -translate-x-1/2 text-center text-white bg-black bg-opacity-50 p-2 rounded-md">
                <h2 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
                    Design Your Dream Space
                </h2>
                <p className="text-lg md:text-xl font-semibold max-w-lg mx-auto">
                    Transforming spaces with design that reflects your style and enhances your comfort.
                </p>
                <div className="flex mx-auto my-4 w-full max-w-sm items-center gap-1">
                    <Input type="email" placeholder="Search" />
                    <Button type="submit " className='bg-blue-500 hover:shadow-lg hover:shadow-blue-500'><FaSearch /></Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
