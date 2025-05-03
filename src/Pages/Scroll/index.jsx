import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const checkScrollPosition = () => {
    if (window.scrollY > 200) { // Adjust the scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  // Event listener to detect scroll position
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 p-2 bg-[#114B9F] text-white rounded shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7-7-7 7M12 16V3"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;