import React from "react";
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsApp = () => {
    const phoneNumber = "+923102307161";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="fixed bottom-22 right-7 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default WhatsApp;