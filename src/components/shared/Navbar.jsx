// "use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/app/assets/logo.png'

export default function Navbar() {
    return (
        <div className="border-b shadow-md">
            <nav className="max-w-[1480px] flex justify-between items-center mx-auto py-2 px-5 ">
                {/* Logo */}
                <div className="">
                    {/* DreamyHome */}
                    <Image className="" src={logo} alt="logo" width={120} />
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6 md:hidden" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="flex flex-col gap-4 mt-6">
                            <Link href="#" className="text-lg font-medium">Home</Link>
                            <Link href="#" className="text-lg font-medium">Service</Link>
                            <Link href="#" className="text-lg font-medium">About Us</Link>
                            <Link href="#" className="text-lg font-medium">Contact Us</Link>
                            <Link href="#" className="text-lg font-medium"></Link>
                        </div>
                    </SheetContent>
                </Sheet>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <a href="#" className="text-lg font-medium">Home</a>
                    <a href="#" className="text-lg font-medium">Service</a>
                    <a href="#" className="text-lg font-medium">About Us</a>
                    <a href="#" className="text-lg font-medium">Contact Us</a>
                </div>
            </nav>
        </div>
    );
}
