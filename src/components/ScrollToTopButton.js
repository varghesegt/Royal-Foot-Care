import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when scrollY > 200
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 left-5 z-50 p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full shadow-md hover:scale-110 transition-transform duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  ) : null;
}
