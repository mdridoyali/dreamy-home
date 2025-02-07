// "use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/assets/logo.png'
import { FaHome, FaServicestack, FaArrowRight } from "react-icons/fa";
import { MdRoundaboutRight, MdAddCall } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="border-b shadow-md">
            <nav className="max-w-[1480px] flex justify-between items-center mx-auto py-2 px-5 ">
                {/* Logo */}
                <div className="w-20 md:w-28">
                    {/* DreamyHome */}
                    <Image className="" src={logo} alt="logo" width={120} />
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-9 h-9 md:hidden" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-5 mt-10">
                            <SheetClose asChild>
                                <Link href="/" className="text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all "><span className="flex items-center gap-4"><FaHome />Home</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/service" className="text-lg font-medium flex items-center  justify-between  hover:bg-gray-200 rounded-sm hover:py-2 transition-all"><span className="flex items-center gap-4"><FaServicestack />Service</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/about" className="text-lg font-medium flex items-center  justify-between  hover:bg-gray-200 rounded-sm hover:py-2 transition-all"><span className="flex items-center gap-4"><MdRoundaboutRight />About Us</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/contact" className="text-lg font-medium flex items-center  justify-between  hover:bg-gray-200 rounded-sm hover:py-2 transition-all"><span className="flex items-center gap-4"><MdAddCall />Contact Us</span><FaArrowRight /></Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop Menu */}
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <Link href="/" className="text-lg font-medium relative group">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/service" className="text-lg font-medium relative group">
                        Service
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/about" className="text-lg font-medium relative group">
                        About Us
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/contact" className="text-lg font-medium relative group">
                        Contact Us
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/login" className="text-lg font-medium relative group">
                        Login
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

            </nav>
        </div>
    );
}
