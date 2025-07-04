import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSpa,
  FaLeaf,
  FaHeart,
  FaCut,
  FaFemale,
  FaMale
} from 'react-icons/fa';

const services = [
  {
    title: 'Deep Relaxation Therapy',
    description:
      'Feel the stress melt away with foot reflexology that calms the nervous system and improves circulation. Ideal for first-timers and elderly clients.',
    image: '/services/img9.webp',
    icon: <FaSpa className="text-teal-400 text-4xl mb-4" />,
  },
  {
    title: 'Stress & Tension Relief',
    description:
      'Unwind and reset. Perfect for busy professionals seeking muscle relief, mental calm, and better energy flow.',
    image: '/services/img6.webp',
    icon: <FaLeaf className="text-cyan-400 text-4xl mb-4" />,
  },
  {
    title: 'Pain & Mobility Support',
    description:
      'Target chronic aches and improve flexibility using reflex zones. Best for elders and those needing natural pain management.',
    image: '/services/img8.webp',
    icon: <FaHeart className="text-pink-400 text-4xl mb-4" />,
  },
  {
    title: 'Luxury Pedicure',
    description:
      'Exfoliate, cleanse, and hydrate your feet with our gentle and refreshing pedicure experience. Ideal for foot care and rejuvenation.',
    image: '/services/img2.webp',
    icon: <FaCut className="text-yellow-400 text-4xl mb-4" />,
  },
  {
    title: 'Hormonal Balance Therapy (Women)',
    description:
      'Ease menstrual discomfort and restore hormonal balance with care from skilled women therapists. Recommended for cycle support and stress relief.',
    image: '/services/img5.webp',
    icon: <FaFemale className="text-rose-400 text-4xl mb-4" />,
  },
  {
    title: 'Vital Energy Reflexology (Men)',
    description:
      'Boost stamina, ease tension, and promote male wellness. A session designed for stress reduction and hormonal support.',
    image: '/services/img7.webp',
    icon: <FaMale className="text-indigo-400 text-4xl mb-4" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-12 sm:pt-14 md:pt-16 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-[#0c0f14] via-[#11161d] to-[#0b0f16] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#171a1e]/80 backdrop-blur-md min-h-[380px] border border-white/10 rounded-2xl shadow-md hover:shadow-teal-400/20 hover:-translate-y-1.5 transition-all duration-300 p-5 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
                ease: [0.33, 1, 0.68, 1],
              }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
                loading="lazy"
              />
              {service.icon}
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
