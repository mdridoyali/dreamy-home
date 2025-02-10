import Image from 'next/image';
import img from '@/app/assets/ourStatus.jpg'

const status = [
    {
        "h2": "92%",
        "desc": "Happy Customers",
    },
    {
        "h2": "1030+",
        "desc": "Completed Project",
    },
    {
        "h2": "19",
        "desc": "Architecture Award",
    },
    {
        "h2": "23",
        "desc": "Professional Architect",
    },
]


const OurStatus = () => {
    return (
        <div className='mb-20 relative text-white'>
            <Image className='object-cover h-[90vh] md:h-[70vh]' alt='our status img' src={img} />
            <div className='w-11/12 absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 grid grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    status.map(data => <div className='border-[1px] hover:text-blue-500 transition-all border-gray-400 rounded-full flex flex-col items-center justify-center p-1 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 cursor-pointer duration-300 hover:shadow-lg hover:shadow-blue-500 text-center shadow-md shadow-blue-500 '>
                        <h2 className='text-5xl '>{data.h2}</h2>
                        <p className=''>{data.desc}</p>
                    </div>
                    )
                }
            </div>
        </div>

    );
};

export default OurStatus;