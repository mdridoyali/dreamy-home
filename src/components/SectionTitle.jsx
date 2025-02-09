import React from 'react';

const SectionTitle = ({ title, titleDescription, pColor }) => {
    return (
        <div className='py-5 text-center space-y-2 mb-6'>
            <h2 className='text-3xl font-semibold text-blue-600 underline'>{title}</h2>
            <p className={`${pColor ? pColor : 'text-gray-500'}`}>{titleDescription}</p>
        </div>
    );
};

export default SectionTitle;