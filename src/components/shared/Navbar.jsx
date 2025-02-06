import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-5 p-5 '>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
            </ul>
        </div>
    );
};

export default Navbar;