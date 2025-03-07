import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0a0f1a] text-white py-10 px-6">
            <div className="border-t border-gray-700 pt-6 w-full flex flex-col md:flex-row md:justify-between gap-10">

                {/* Left Section - Logo & Socials */}
                <div className="flex flex-col items-start gap-4 w-full md:w-1/3">
                    <img src={logo} alt="logo" className="w-24 h-24" />
                    <p className="text-gray-300">Let us be the partner that helps your brand succeed.</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=61573230095369" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.instagram.com/designcode.x/" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://www.tiktok.com/@designcodex" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Newsletter */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-bold text-white">Newsletter</h3>
                    <p className="mt-4 text-gray-400">
                        Subscribe to our WhatsApp channel to receive updates on the latest news!
                    </p>
                    <div className="mt-4 flex items-center bg-gray-800 rounded-lg overflow-hidden">
                        <input
                            placeholder="Design Codex"
                            className="w-full p-3 bg-transparent text-white outline-none"
                        />
                        <a
                            href="https://whatsapp.com/channel/0029Vb4JWohFMqrTCJs7f53n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </a>
                    </div>
                </div>

                {/* Right Section - Contact Info */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-xl font-bold text-white">Contacts</h3>
                    <div className="mt-4 space-y-3 text-gray-400">
                        <p className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                            <span>(+92)3102307161</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                            <span>infodesigncodex@gmail.com</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400" />
                            <span>Karachi, Pakistan</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
                © 2025 All rights reserved by{" "}
                <span className="text-blue-400">Design Codex</span>
            </div>
        </footer>
    );
};

export default Footer;
