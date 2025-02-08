
import React from 'react';
import ReviewSlider from './ReviewSlider';
import SectionTitle from '../SectionTitle';


const ReviewSection = () => {

  return (
      <div className="w-11/12 mx-auto mb-20" >
        <SectionTitle title={'Client Testimonials'} titleDescription={'Here is our valuable reviews from client.'}/>
        <div className='w-full max-w-[1000px] mx-auto text-center'>
          <ReviewSlider/>
        </div>
      </div>
  );
};

export default ReviewSection;