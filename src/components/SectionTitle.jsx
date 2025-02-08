import React from 'react';

const SectionTitle = ({ title, titleDescription }) => {
    return (
        <div className='py-5 text-center space-y-2 '>
            <h2 className='text-3xl font-semibold text-blue-600 underline'>{title}</h2>
            <p className='text-gray-600'>{titleDescription}</p>
        </div>
    );
};

export default SectionTitle;