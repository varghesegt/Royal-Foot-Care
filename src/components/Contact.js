import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0c0f14] via-[#11161d] to-[#0b0f16] text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Animated Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          className="bg-[#171a1e] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-md text-center space-y-6 hover:shadow-teal-500/10 transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            We’re here to help! Connect with us via call, WhatsApp, or visit our center.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Call Us */}
            <a
              href="tel:+917904747979"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:brightness-110 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <FaPhoneAlt /> Call Us
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917904747979"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:brightness-110 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            {/* Find Us */}
            <a
              href="https://maps.app.goo.gl/NSAcE1awUeWmkajb8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:brightness-110 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <FaMapMarkerAlt /> Find Us
            </a>
          </div>

          {/* Address */}
          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>📍 Ground Floor, Door No 6/I, Ramesh Building,</p>
            <p>Melapudur, Tiruchirappalli, Tamil Nadu 620001</p>
            <p>📞 <a href="tel:+917904747979" className="text-teal-400 hover:underline">+91 79047 47979</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
