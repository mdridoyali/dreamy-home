import Image from 'next/image';
import img1 from '@/app/assets/banner/1.jpg'


const Banner = () => {
    return (
        <div className='relative bg-gray-400 bg-blend-overlay border-2'>
            <Image className='max-h-screen bg-gray-400 bg-blend-overlay' src={img1}></Image>
            <div className='absolute top-[30%] flex flex-col justify-center items-center mx-auto text-center border-2'>
                <h2 className='  text-blue-500 text-7xl font-bold'>Design Your Dream Space</h2>
                <p>Transforming spaces with design that reflects your style and enhances your comfort.</p>
            </div>
        </div>
    );
};

export default Banner;