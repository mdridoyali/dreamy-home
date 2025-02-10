import React from 'react';
import SectionTitle from '../SectionTitle';


const OurServices = () => {
    return (
        <div>
           
            <div className="my-20 w-11/12 mx-auto">
                <SectionTitle title="What We Offer" titleDescription="Explore our range of professional interior design services." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="p-5 shadow-md rounded-lg text-center bg-white">
                        <h3 className="text-xl font-semibold">Residential Interior</h3>
                        <p className="text-gray-600 mt-2">We create comfortable and stylish homes tailored to your taste.</p>
                    </div>
                    <div className="p-5 shadow-md rounded-lg text-center bg-white">
                        <h3 className="text-xl font-semibold">Commercial Spaces</h3>
                        <p className="text-gray-600 mt-2">Enhancing workplaces with aesthetics and functionality.</p>
                    </div>
                    <div className="p-5 shadow-md rounded-lg text-center bg-white">
                        <h3 className="text-xl font-semibold">Custom Design Solutions</h3>
                        <p className="text-gray-600 mt-2">Tailor-made designs to fit your unique needs and style.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;