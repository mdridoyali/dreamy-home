import Image from 'next/image';
import img from '@/app/assets/ourStatus.jpg'


const OurStatus = () => {
    return (
        <div className='mb-20 relative text-white'>
            <Image className='object-cover h-[90vh] md:h-[70vh]' alt='our status img' src={img} />
            <div className='w-11/12 absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 grid grid-cols-2 md:grid-cols-4 gap-6'>

                <div className='border-[1px] hover:text-blue-500 transition-all border-gray-400 rounded-full flex flex-col items-center justify-center p-1 w-40 h-40 md:w-50 md:h-50 lg:w-72 lg:h-72'>
                    <h2 className='text-5xl'>92%</h2>
                    <p>Happy Customers</p>
                </div>
                <div className='border-[1px] hover:text-blue-500 transition-all border-gray-400 rounded-full flex flex-col items-center justify-center p-1 w-40 h-40 md:w-50 md:h-50 lg:w-72 lg:h-72'>
                    <h2 className='text-5xl'>1030+</h2>
                    <p>Completed Project</p>
                </div>
                <div className='border-[1px] hover:text-blue-500 transition-all border-gray-400 rounded-full flex flex-col items-center justify-center p-1 w-40 h-40 md:w-50 md:h-50 lg:w-72 lg:h-72'>
                    <h2 className='text-5xl'>19</h2>
                    <p>Architecture Award</p>
                </div>
                <div className='border-[1px] hover:text-blue-500 transition-all border-gray-400 rounded-full flex flex-col items-center justify-center p-1 w-40 h-40 md:w-50 md:h-50 lg:w-72 lg:h-72'>
                    <h2 className='text-5xl'>23</h2>
                    <p>Professional Architect</p>
                </div>

            </div>
        </div>

    );
};

export default OurStatus;