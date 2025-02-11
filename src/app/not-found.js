import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;