"use client";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("All fields are required!");
            return;
        }
        toast.success("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="w-11/12 mx-auto py-16">
            <Toaster />
            <SectionTitle title={'Contact Us'} titleDescription={'  Have questions? We would love to hear from you!'}/>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="text-blue-500 text-2xl" />
                        <p className="text-lg font-medium text-gray-700">+123 456 7890</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-blue-500 text-2xl" />
                        <p className="text-lg font-medium text-gray-700">info@interiorsite.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                        <p className="text-lg font-medium text-gray-700">
                            123 Interior Street, New York, USA
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>


        </div>
    );
};

export default ContactUs;
