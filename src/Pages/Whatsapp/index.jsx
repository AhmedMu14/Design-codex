import React, { useState, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "+923102307161";

    const checkScrollPosition = () => {
        if (window.scrollY > 200) { // Adjust the scroll threshold as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition);
        return () => window.removeEventListener("scroll", checkScrollPosition);
    }, []);

    return (
        isVisible && (
            <a
                href={`https://wa.me/${phoneNumber}`}
                className="fixed bottom-22 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="text-2xl" />
            </a>
        )
    );
};

export default WhatsApp;
