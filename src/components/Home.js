import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Title, Meta, Link as HeadLink } from 'react-head';
import { useNavigate } from 'react-router-dom'; // ✅ Correct import for CRA

const slides = [
  {
    src: '/img3.webp',
    title: 'Foot Reflexology in Trichy',
    description:
      'Best foot reflexology in Trichy to relieve stress, improve circulation, and naturally enhance overall wellness.',
  },
  {
    src: '/img1.webp',
    title: 'Therapeutic Foot Massage',
    description:
      'Relax and heal with expert foot massage therapy in Trichy — improves blood flow, relieves pain, and refreshes your body.',
  },
  {
    src: '/img11.webp',
    title: 'Pedicure Spa Services',
    description:
      'Rejuvenate your feet with cleansing, exfoliation, and moisturizing pedicure services at Royal Foot Care, Trichy.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate(); // ✅ CRA navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔍 SEO Meta Tags */}
      <Title>Royal Foot Care – Foot Reflexology, Pedicure & Massage in Trichy</Title>
      <Meta name="description" content="Royal Foot Care in Trichy offers certified foot reflexology, pain relief massage, and pedicure spa services for men and women. Visit us in Melapudur today!" />
      <Meta name="keywords" content="foot reflexology Trichy, foot massage Trichy, pedicure Trichy, women foot spa Trichy, foot therapy Tiruchirappalli, Royal Foot Care" />
      <Meta name="author" content="Royal Foot Care" />
      <Meta property="og:title" content="Foot Reflexology & Pedicure Spa in Trichy | Royal Foot Care" />
      <Meta property="og:description" content="Certified therapists offering the best foot reflexology, therapeutic massage, and pedicure services in Trichy. Book now for stress relief and wellness." />
      <Meta property="og:image" content="https://royalfootcare.in/logo192.png" />
      <Meta property="og:url" content="https://royalfootcare.in" />
      <Meta name="twitter:card" content="summary_large_image" />
      <HeadLink rel="canonical" href="https://royalfootcare.in/" />
      <HeadLink rel="preload" as="image" href="/img3.webp" />
      <HeadLink rel="icon" type="image/png" href="/logo192.png" sizes="192x192" />
      <HeadLink rel="apple-touch-icon" href="/logo192.png" />

      {/* 🧠 JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Royal Foot Care',
          image: 'https://royalfootcare.in/logo192.png',
          '@id': 'https://royalfootcare.in',
          url: 'https://royalfootcare.in',
          telephone: '+91-7904747979',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '6/i Ramesh Building, Melapudur',
            addressLocality: 'Tiruchirappalli',
            postalCode: '620001',
            addressCountry: 'IN',
          },
          openingHours: 'Mo-Su 10:30-21:00',
          priceRange: '₹₹',
        })}
      </script>

      {/* 🖼 Hero Slideshow */}
      <main>
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
        >
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slides[current].src}
                  alt={`${slides[current].title} | Royal Foot Care Trichy`}
                  loading={current === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {slides[current].title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-gray-100 max-w-xl mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    {slides[current].description}
                  </motion.p>
                  <motion.button
  onClick={() => {
    const plansSection = document.getElementById('pricing');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="px-6 py-3 text-lg font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-2xl shadow-xl transition-transform transform hover:scale-105"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.4 }}
>
  Book Now
</motion.button>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
