import React, { useState } from "react";
import About from '../../assets/About.png'


const AboutUs = () => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <section id="about" className="bg-[#0c0c1e] text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-white relative inline-block 
    after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:w-25 sm:after:w-32 md:after:w-40 
    after:h-1 after:bg-[#114B9F] after:rounded-lg after:-translate-x-1/2">
    About Us
</h2>


                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img src={About} alt="Team Image" className="w-full max-w-md mx-auto rounded-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-left">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Who We Are
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                            At Design Codex, we are not just a digital agency—we are your trusted partner in the evolving world of technology and cybersecurity. Our expertise spans web development, digital marketing, Flutter app development, graphic designing, video editing, and cybersecurity solutions.At Design Codex, innovation and security go hand in hand.
                        </p>
                        <button
                            onClick={() => setShowDetails(true)}
                            className="mt-4 inline-block px-6 py-3 bg-[#114B9F] text-white font-bold rounded-lg transition hover:bg-blue-600"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* Modal for additional details */}
            {showDetails && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className=" text-black p-6 rounded-lg shadow-lg max-w-md w-full relative"
                        style={{ borderColor: "#114B9F", background: "linear-gradient(to bottom, #114B9F, black)" }}>
                        <p className="text-white text-base leading-relaxed">
                            In today’s digital age, cybersecurity is more crucial than ever. We ensure that businesses stay protected from cyber threats by implementing robust security protocols, encryption methods, and advanced risk management strategies. Whether it's securing your website, protecting user data, or developing secure applications, our team is dedicated to safeguarding your digital assets.                                                                           At Design Codex, innovation and security go hand in hand. We combine cutting-edge technology with creative solutions to help businesses thrive in a safe and secure digital environment. Partner with us to build a future that is both innovative and secure.
                        </p>
                        <button
                            onClick={() => setShowDetails(false)}
                            className="px-6 py-2 mt-4 text-white bg-[#114B9F] rounded-xl hover:bg-indigo-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutUs;
