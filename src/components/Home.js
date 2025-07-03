import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    src: '/img1.jpg',
    title: 'Foot Reflexology',
    description: 'Activate natural healing through pressure points for stress relief and better wellness.'
  },
  {
    src: '/img3.jpg',
    title: 'Foot Massage',
    description: 'Relax tired feet and restore circulation with our expert therapeutic foot massage.'
  },
  {
    src: '/img11.png',
    title: 'Pedicure',
    description: 'Cleanse, exfoliate, and moisturize with our rejuvenating pedicure treatments.'
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
    >
      {/* Background Slideshow with Text Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 z-0' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {slide.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
