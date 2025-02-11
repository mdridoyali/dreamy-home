"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import StarRatings from 'react-star-ratings';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";


const reviews = [
    {
        "id": 1,
        "name": "Ayesha Rahman",
        "image": "https://i.ibb.co.com/zhdFXrdT/2.jpg",
        "rating": 5,
        "review": "Absolutely loved the interior design service! My living room looks stunning and elegant. Highly recommended!",
        "review_time": "2024-02-08T14:30:00Z"
    },
    {
        "id": 2,
        "name": "Tanvir Ahmed",
        "image": "https://i.ibb.co.com/xqzMcNpx/3.jpg",
        "rating": 4.5,
        "review": "Great attention to detail and professionalism. The team transformed my office space beautifully!",
        "review_time": "2024-01-25T10:15:00Z"
    },
    {
        "id": 3,
        "name": "Sumaya kabir",
        "image": "https://i.ibb.co.com/whsvc5RM/1.jpg",
        "rating": 4,
        "review": "Absolutely loved the interior design service! My living room looks stunning and elegant. Highly recommended!",
        "review_time": "2024-01-25T10:15:00Z"
    },
    {
        "id": 4,
        "name": "Farzana Karim",
        "image": "https://i.ibb.co.com/zhdFXrdT/2.jpg",
        "rating": 5,
        "review": "Incredible work! The design exceeded my expectations. Will definitely hire them again for future projects.",
        "review_time": "2024-01-15T08:45:00Z"
    },
    {
        "id": 5,
        "name": "Raihan Siddique",
        "image": "https://i.ibb.co.com/N0RndP2/1.jpg",
        "rating": 4,
        "review": "Very satisfied with the work. Just a minor delay in project completion, but the result was worth it!",
        "review_time": "2023-12-30T16:20:00Z"
    },
    {
        "id": 6,
        "name": "Fahim Ahad",
        "image": "https://i.ibb.co.com/xqzMcNpx/3.jpg",
        "rating": 5,
        "review": "The best interior design team I’ve worked with! They completely revamped my bedroom into a luxury retreat.",
        "review_time": "2023-12-15T11:10:00Z"
    }
]


const ReviewSlider = () => {


    return (
        <div className="shadow-md shadow-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-500  transition-all  ">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                modules={[Navigation, Autoplay]} className="mySwiper"

            >
                {
                    reviews?.map(data => <SwiperSlide className='' key={data.id}>
                        <div className='group overflow-hidden transition-all space-y-3 px-7 md:px-10 py-5 rounded-md text-sm md:text-base relative'>

                            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>

                            <div className='text-center relative z-10'>
                                <Image
                                    src={data?.image}
                                    alt="user Image"
                                    width={100}
                                    height={100}
                                    className='rounded-full mx-auto transition-transform duration-300 ease-in-out group-hover:scale-105'
                                />
                                <h1 className='font-bold text-lg text-blue-500'>{data?.name}</h1>
                            </div>

                            <div className='text-center relative z-10'>
                                <div className='text-center mx-auto flex justify-center'>
                                    <StarRatings
                                        rating={data.rating}
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="20px"
                                        starSpacing="2px"
                                    />
                                </div>
                                <h1 className='text-white'>{data?.review_time}</h1>
                                <h1 className='text-white'>{data?.review}</h1>
                            </div>

                        </div>

                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default ReviewSlider;