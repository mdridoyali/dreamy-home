import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from '@/app/assets/logo-footer.png'
import Link from "next/link";

const Footer = () => {



    return (
        <footer className="bg-[#232323]  dark:bg-gray-900 text-white ">
            <div className="w-11/12   mx-auto py-7 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side - Branding */}
                <div className="text-lg font-semibold flex flex-col items-center">
                    <div className="w-20 md:w-28">
                        <Link href={'/'}> <Image className="" src={logo} alt="logo" width={120} /></Link>
                    </div>
                    © 2025 DreamyHome. All rights reserved.
                </div>

                {/* Center - Links */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>

                {/* Right Side - Button */}
                <Button variant="outline" className="mt-4 border-none bg-blue-500 hover:shadow-lg hover:shadow-blue-500 md:mt-0">
                    Subscribe
                </Button>
            </div>
            {/* Bottom Text */}
            <div className="text-center text-sm p-5 mt-3 bg-[#333333]">Made with ❤️ by Md Ridoy</div>
        </footer>
    );

};

export default Footer;