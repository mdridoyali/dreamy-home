"use client";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
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
            <SectionTitle title={'Contact Us'} titleDescription={'  Have questions? We would love to hear from you!'} />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className="space-y-6" data-aos="fade-right">
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
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4"  data-aos="fade-left">
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
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:shadow-md hover:shadow-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
                    >
                        Send Message
                    </Button>
                </form>
            </div>

            {/* Google Map*/}
            <div className="mt-20">
                <SectionTitle title={'Where to Find Us'}/>
                <iframe
                    className="w-full mx-auto md:w-2/3 h-[500px] rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7462.754643564728!2d90.41876817405698!3d23.79530668416946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1739243082064!5m2!1sbn!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;
