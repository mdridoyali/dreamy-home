import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <div>
            <div className="my-20 w-11/12 mx-auto text-center bg-blue-500 text-white p-10 rounded-lg"  data-aos="zoom-out">
                <h2 className="text-3xl font-bold">Let's Transform Your Space!</h2>
                <p className="mt-3 max-w-2xl mx-auto">
                    Get in touch with us today to start designing your dream interior.
                </p>
                <Link href={'/contact'}>
                    <button className="mt-5 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;