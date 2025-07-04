import React from 'react';
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-gray-400 pt-12 pb-6 border-t border-white/10">
      {/* Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 blur-sm opacity-40 mb-8"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Royal Foot Care Foot Reflexology</h1>
          <p className="text-sm">
            Certified Women's Foot Reflexology & Pedicure Center in Trichy. Rejuvenate with ancient healing touch and modern luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-teal-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-teal-400 transition">Services</a></li>
            <li><a href="#pricing" className="hover:text-teal-400 transition">Pricing</a></li>
            <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <address className="not-italic text-sm mb-2 leading-relaxed">
            📍 Ground Floor, Door No 6/i,<br />
            Ramesh Building, Melapudur,<br />
            Tiruchirappalli, Tamil Nadu – 620008
          </address>
          <p className="text-sm mb-2">
            📞 <a href="tel:+917904747979" className="hover:text-teal-400">+91 79047 47979</a>
          </p>
          <p className="text-sm mb-2">
            📧 <a href="mailto:mathew.roby96@gmail.com" className="hover:text-teal-400">mathew.roby96@gmail.com</a>
          </p>
          <p className="text-sm mb-4">🕒 Open Daily: 10:30 AM – 9:00 PM</p>

          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="https://wa.me/917904747979"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-teal-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.facebook.com/share/15bjPn8vtY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-teal-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://maps.app.goo.gl/NSAcE1awUeWmkajb8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps Location"
              className="hover:text-teal-400 transition"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-white/30">
        &copy; {new Date().getFullYear()} Royal Foot Reflexology. All rights reserved.
      </div>
    </footer>
  );
}
