import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaInfoCircle, FaConciergeBell, FaTags, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaInfoCircle /> },
    { id: 'services', label: 'Services', icon: <FaConciergeBell /> },
    { id: 'pricing', label: 'Pricing', icon: <FaTags /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 animate-pulse-slow">
          Royal Foot Care
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 ml-auto pr-4">
          {navItems.map(({ id, label, icon }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-white flex items-center gap-2 font-medium cursor-pointer relative group transition-all"
            >
              {icon}
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-teal-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Under glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 blur-sm opacity-40" />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0e0e0e]/95 px-6 py-8 space-y-6 text-center border-t border-white/10">
          {navItems.map(({ id, label, icon }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="block text-white text-lg font-semibold hover:text-teal-400 transition"
            >
              <span className="inline-flex items-center gap-2 justify-center">{icon} {label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
