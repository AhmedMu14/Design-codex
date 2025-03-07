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
      className={`navbar flex justify-between items-center px-4 h-24 text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-start p-1 logo">
        <img src={logo} alt="logo" className="w-auto h-36" />
      </div>

      <ul
        className={`nav-link list-none flex justify-center space-x-9 font-semibold flex-grow 
        ${isOpen ? "flex flex-col absolute bg-black w-45 h-[50vh] top-18 right-0 z-10 px-5 space-y-10" : "hidden md:flex"}`}
      >
        <li>
          <a href="#home" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#faqs" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            FAQs
          </a>
        </li>
        <li>
          <a href="#contact" className="text-base text-white transition-colors hover:text-[#7093c5]" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <a href="#contact">
        <button className="hidden px-4 py-2 text-lg text-white transition-all bg-[#114B9F] rounded-md hover:bg-[#7093c5] md:inline-block">
          Get Started
        </button>
      </a>

      <div className="text-xl text-white cursor-pointer icon md:hidden" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
