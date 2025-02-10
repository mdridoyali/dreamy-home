
import React from 'react';
import ReviewSlider from './ReviewSlider';
import SectionTitle from '../SectionTitle';
import parallax from "@/app/assets/parallax.jpg";
import Image from 'next/image';



const ReviewSection = () => {

  return (
    <div className="w-full mx-auto mb-20 relative" >
      <Image className="w-full h-[100vh] md:h-[80vh] object-cover" src={parallax} alt="Parallax" />

      <div className='w-11/12 mx-auto absolute top-0 left-0 right-0'>
        <SectionTitle title={'Client Testimonials'} titleDescription={'Here is our valuable reviews from client.'} />
        <div className='w-full max-w-[1000px] mx-auto text-center'>
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;