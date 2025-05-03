import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, phone, email, message } = formData;

        if (!name || !phone || !email || !message) {
            toast.error("Please fill out all fields before submitting.");
            return;
        }

        emailjs
            .send(
                "service_wx2kt4r",      // ✅ Your EmailJS Service ID
                "template_76c01oa",     // ❗ Correct Template ID (you wrote 'plate', typo corrected)
                { name, phone, email, message },
                "iIlrV2JuyKMEh6ytv"      // ✅ Your EmailJS Public Key
            )
            .then(() => {
                toast.success(`Thank you ${name}, your message has been sent!`);
                setFormData({ name: "", phone: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                toast.error("Failed to send message. Please try again later.");
            });
    };

    return (
        <div id="contact" className="px-4 py-8 text-center">
            <h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block
                after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-28 sm:after:w-36 md:after:w-40
                after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2">
                Contact Us
            </h2>

            <section className="bg-[#0b0f1f] text-white py-16 px-4 sm:px-6 lg:px-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl sm:text-4xl font-bold text-blue-500">
                            Book For An Appointment
                        </h2>
                        <p className="mt-4 text-gray-300 text-sm sm:text-base">
                            Let us be the partner that helps your brand succeed.
                        </p>
                        <div className="mt-6 space-y-4 text-sm sm:text-base">
                            <h3 className="flex text-lg font-semibold text-blue-500">Our Info</h3>
                            <p className="flex items-center space-x-3">
                                <span>📞</span> <span>+923102307161</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span>📧</span> <span>infodesigncodex@gmail.com</span>
                            </p>
                            <p className="flex items-center space-x-3">
                                <span>📍</span> <span>Karachi, Pakistan</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Section (Contact Form) */}
                    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                        {/* Background Border */}
                        <div className="absolute top-5 left-5 w-full h-full border-4 border-[#114B9F] rounded-lg z-0"></div>

                        {/* Contact Form */}
                        <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-center">Contact Us</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="border border-gray-300 p-3 rounded w-full"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Your Phone Number"
                                        className="border border-gray-300 p-3 rounded w-full"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="border border-gray-300 p-3 rounded w-full"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name="message"
                                    placeholder="Leave Your Message"
                                    className="border border-gray-300 p-3 rounded w-full h-24"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default ContactUs;
