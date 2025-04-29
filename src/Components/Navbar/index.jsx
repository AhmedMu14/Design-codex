import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar flex justify-between items-center px-1 h-24 text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-start p-1 logo">
        <img src={logo} alt="logo" className="w-auto h-36" />
      </div>

      <ul
        className={`nav-link list-none flex justify-center space-x-9 font-semibold flex-grow 
        ${isOpen ? "flex flex-col absolute bg-black w-45 h-[80vh] top-19 right-0 z-10 px-5 space-y-10" : "hidden md:flex"}`}
      >
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>
          <a href="#home" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#about" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#team" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Team
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#services" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#portfolio" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#faqs" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Academy
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#faqs" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            FAQs
          </a>
        </li>
        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>

          <a href="#contact" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <a href="#contact">
        <button className="hidden md:block bg-blue-500 hover:bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-base lg:text-lg font-semibold shadow-lg transition w-full sm:w-auto mt-2 sm:ml-4 mr-4">
          Get Started
        </button>

      </a>

      <div className="text-xl text-white cursor-pointer icon md:hidden mr-4" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
