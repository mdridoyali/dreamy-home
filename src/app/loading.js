export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-blue-500">DreamyHome</span>
                </div>
            </div>
        </div>
    );
}
