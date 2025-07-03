import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const slides = [
  {
    src: '/img1.webp',
    title: 'Foot Reflexology',
    description: 'Activate natural healing through pressure points for stress relief and better wellness.'
  },
  {
    src: '/img3.webp',
    title: 'Foot Massage',
    description: 'Relax tired feet and restore circulation with our expert therapeutic foot massage.'
  },
  {
    src: '/img11.webp',
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
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Royal Foot Care | Foot Reflexology & Massage in Trichy</title>
        <meta
          name="description"
          content="Experience the best foot reflexology, massage, and pedicure treatments in Tiruchirappalli. Relax, heal, and rejuvenate naturally with Royal Foot Care."
        />
        <meta name="keywords" content="foot reflexology, foot massage, pedicure, royal foot care, trichy wellness, foot spa tiruchirappalli, relaxation therapy" />
        <meta name="author" content="Royal Foot Care" />
        <meta property="og:title" content="Royal Foot Care | Foot Reflexology & Massage in Trichy" />
        <meta property="og:description" content="Best foot care and wellness center in Tiruchirappalli offering reflexology, massage, and pedicure services." />
        <meta property="og:image" content="https://royalfootcare.in/img1.webp" />
        <meta property="og:url" content="https://royalfootcare.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://royalfootcare.in/" />
      </Helmet>

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
              loading={idx === current ? 'eager' : 'lazy'}
              className="w-full h-full object-cover object-center opacity-0 transition-opacity duration-700 ease-in-out"
              onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
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
