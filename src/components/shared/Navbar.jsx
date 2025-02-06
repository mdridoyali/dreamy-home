import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-5 p-5 '>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/services'}>Services</Link>
                <Button variant="outline">Outline</Button>
            </ul>
        </div>
    );
};

export default Navbar;