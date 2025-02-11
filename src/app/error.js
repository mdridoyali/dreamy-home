"use client"; 
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Error caught:", error);
    }, [error]);

    return (
        <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
            <p className="text-gray-600 mt-4">{error.message}</p>
            <button 
                onClick={() => reset()} 
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
            >
                Try Again
            </button>
        </div>
    );
}
