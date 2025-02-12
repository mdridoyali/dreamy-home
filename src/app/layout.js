import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar, { AosInit } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DreamyHome",
  description: "Dreamy home is your best choose",
  icons: {
    icon: "/favicon.ico", // Path to favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
        />
      </head>
      <body
        overflow-x-hidden
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >

        <div className=" mx-auto">
          <Navbar />
          <div className=" mx-auto min-h-[calc(100vh-250px)] overflow-hidden"> {children}</div>
          <AosInit /> 
          <Footer />
        </div>
      </body>
    </html>
  );
}
