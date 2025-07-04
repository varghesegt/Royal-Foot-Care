import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Title, Meta, Link as HeadLink } from 'react-head';

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
      'Relax and heal with expert foot massage therapy—improves blood flow, relieves pain, and refreshes your body.',
  },
  {
    src: '/img11.webp',
    title: 'Professional Pedicure Treatments',
    description:
      'Rejuvenate your feet with cleansing, exfoliation, and moisturizing pedicure services at Royal Foot Care, Trichy.',
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
    <>
      {/* 🔍 SEO Meta Tags */}
      <Title>Royal Foot Care | Best Foot Reflexology & Massage in Trichy</Title>
      <Meta
        name="description"
        content="Top-rated foot reflexology, massage, and pedicure center in Trichy. Relieve stress and improve wellness naturally at Royal Foot Care."
      />
      <Meta
        name="keywords"
        content="foot reflexology Trichy, best foot massage in Trichy, pedicure spa Trichy, Royal Foot Care, wellness center, foot therapy"
      />
      <Meta name="author" content="Royal Foot Care" />
      <Meta property="og:title" content="Royal Foot Care | Foot Reflexology & Massage in Trichy" />
      <Meta
        property="og:description"
        content="Experience foot reflexology, massage, and pedicure from certified therapists in Trichy. Book your wellness session today!"
      />
      <Meta property="og:image" content="https://royalfootcare.in/img3.webp" />
      <Meta property="og:url" content="https://royalfootcare.in" />
      <Meta name="twitter:card" content="summary_large_image" />
      <HeadLink rel="canonical" href="https://royalfootcare.in/" />
      <HeadLink rel="preload" as="image" href="/img3.webp" />

      {/* 🧠 JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Royal Foot Care',
          image: 'https://royalfootcare.in/img3.webp',
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slides[current].src}
                  alt={`${slides[current].title} | Royal Foot Care Trichy`}
                  loading={current === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {slides[current].title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl text-gray-300 max-w-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    {slides[current].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
