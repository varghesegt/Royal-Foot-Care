import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaComments } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const phoneNumber = 'tel:+917904747979';
const whatsappNumber = '917904747979';

export default function ContactPopupButton() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={popupRef}>
      {/* Toggle FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg hover:bg-teal-600 transition-all"
        aria-label="Contact Options"
      >
        <FaComments className="text-2xl" />
      </button>

      {/* Popup Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mt-3 flex flex-col items-end gap-3"
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                'Hi! I’d like to book a service with Royal Foot Care.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition-all"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            {/* Phone Call - Only on Mobile */}
            <a
              href={phoneNumber}
              className="md:hidden flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md transition-all"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
