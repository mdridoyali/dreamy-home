import Image from 'next/image';
import img from '@/app/assets/ourStatus.jpg'


const OurStatus = () => {
    return (
        <div className='mb-20 relative text-white'>
            <Image className='object-cover h-[70vh]' alt='our status img' src={img} />
            <div className='w-11/12 mx-auto absolute top-1/4 grid grid-cols-4'>
                <div className='border-[1px] border-gray-400 rounded-full  flex flex-col items-center justify-center p-1 w-72 h-72 '>
                    <h2 className='text-5xl '>98%</h2>
                    <p>Happy Customers</p>
                </div>
                <div className='border-[1px] border-gray-400 rounded-full  flex flex-col items-center justify-center p-1 w-72 h-72 '>
                    <h2 className='text-5xl '>1030+</h2>
                    <p>Completed Project</p>
                </div>
            </div>
        </div>
    );
};

export default OurStatus;