
import SectionTitle from '../SectionTitle';
import img from '@/app/assets/serviceAria1.jpg';
import Image from 'next/image';

import img1 from '@/app/assets/city/dhaka.jpg'
import img2 from '@/app/assets/city/khulna.jpg'
import img3 from '@/app/assets/city/rajshahi.jpg'
import img4 from '@/app/assets/city/chittagong.jpg'


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
]

const OurServiceAria = () => {
    return (
        <div className=' mb-48 relative'>
            <Image className='h-[80vh] md:h-[70vh] object-cover' src={img} alt="Service Area" />
            <div className='absolute top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <SectionTitle
                    title={'Our Service Area'}
                    pColor={'text-white'}
                    titleDescription={'Discover our expert interior design solutions tailored to transform your home or workplace into a masterpiece.'}
                />
            </div>

            {/* Cards container */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-11/12 left-0 right-0 mx-auto text-center absolute -translate-y-1/2'>
                {
                    cities?.map((data, index) => (
                        <div key={index} className='w-full lg:w-3/4 flex flex-col justify-center items-center rounded-lg shadow-md shadow-blue-500 hover:shadow-lg hover:shadow-blue-500 duration-300'>
                            <Image src={data?.image} className='rounded-t-lg w-full h-20 md:h-full' />
                            <h2 className='text-xl font-semibold md:p-2 text-blue-500'>{data?.city}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default OurServiceAria;
