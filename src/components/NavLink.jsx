import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, children, currentPath }) => {
    const isActive = currentPath === href;

    return (
        <div>
            <Link href={href} className={`text-lg font-medium relative group ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}`}>
                {children}
                <span className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${isActive ? "w-full bg-blue-600" : "w-0 bg-gray-400 group-hover:w-full group-hover:bg-blue-500"}`}></span>
            </Link>
        </div>
    );
};

export default NavLink;