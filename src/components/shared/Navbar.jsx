"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/assets/logo.png'
import { FaHome, FaServicestack, FaArrowRight } from "react-icons/fa";
import { MdRoundaboutRight, MdAddCall, MdLogin } from "react-icons/md";
import { usePathname } from "next/navigation";
import NavLink from "../NavLink";

export default function Navbar() {

    const pathname = usePathname();

    return (
        <div className="border-b shadow-md">
            <nav className="w-11/12 flex justify-between items-center mx-auto py-2  ">
                {/* Logo */}
                <div className="w-20 md:w-28">
                    <Link href={'/'}> <Image className="" src={logo} alt="logo" width={120} /></Link>
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
                                <Link href="/" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><FaHome />Home</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/services" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/service' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><FaServicestack />Service</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/about" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/about' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><MdRoundaboutRight />About Us</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/contact" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/contact' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><MdAddCall />Contact Us</span><FaArrowRight /></Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link href="/login" className={`text-lg font-medium flex items-center justify-between hover:bg-gray-200 rounded-sm hover:py-2 transition-all ${pathname === '/login' ? "text-blue-600 font-semibold" : "text-gray-800"} `}><span className="flex items-center gap-4"><MdLogin />Login</span><FaArrowRight /></Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <NavLink href="/" currentPath={pathname}>Home</NavLink>
                    <NavLink href="/services" currentPath={pathname}>Service</NavLink>
                    <NavLink href="/about" currentPath={pathname}>About Us</NavLink>
                    <NavLink href="/contact" currentPath={pathname}>Contact Us</NavLink>
                    <NavLink href="/login" currentPath={pathname}>Login</NavLink>
                </div>

            </nav>
        </div>
    );
}
