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
    title: 'Deep Relaxation Foot Reflexology – Trichy',
    description:
      'Melt stress away with our signature reflexology that enhances blood flow and calms your nervous system. Ideal for elders and first-time clients.',
    image: '/services/img9.webp',
    alt: 'Deep Relaxation Foot Reflexology in Trichy',
    icon: <FaSpa className="text-teal-400 text-4xl mb-4" />,
  },
  {
    title: 'Stress & Tension Relief Foot Massage – Trichy',
    description:
      'Foot massage therapy to release physical and mental stress. Trusted by working professionals and students in Tiruchirappalli.',
    image: '/services/img6.webp',
    alt: 'Stress Relief Foot Massage Trichy',
    icon: <FaLeaf className="text-cyan-400 text-4xl mb-4" />,
  },
  {
    title: 'Pain & Mobility Reflex Therapy – Trichy',
    description:
      'Boost flexibility and ease chronic joint or muscle pain with reflex zone stimulation. Suitable for seniors and pain patients.',
    image: '/services/img8.webp',
    alt: 'Pain Management Reflexology Trichy',
    icon: <FaHeart className="text-pink-400 text-4xl mb-4" />,
  },
  {
    title: 'Luxury Pedicure & Foot Spa – Trichy',
    description:
      'Rejuvenate feet with exfoliation, detox soak, nail care, and deep moisturizing. Best pedicure spa experience in Trichy.',
    image: '/services/img2.webp',
    alt: 'Luxury Pedicure Trichy',
    icon: <FaCut className="text-yellow-400 text-4xl mb-4" />,
  },
  {
    title: 'Women’s Hormonal Balance Reflexology – Trichy',
    description:
      'Ease PMS, menopause symptoms, and anxiety through hormone-balancing reflexology. Only by female therapists.',
    image: '/services/img5.webp',
    alt: 'Women Reflexology Hormonal Balance Trichy',
    icon: <FaFemale className="text-rose-400 text-4xl mb-4" />,
  },
  {
    title: 'Men’s Vital Energy Foot Reflexology – Trichy',
    description:
      'Designed to boost male vitality, energy, and mental clarity. Popular with executives and athletes in Tiruchirappalli.',
    image: '/services/img7.webp',
    alt: 'Men Vitality Reflexology Trichy',
    icon: <FaMale className="text-indigo-400 text-4xl mb-4" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-14 pb-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-[#0c0f14] via-[#11161d] to-[#0b0f16] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
        >
          Foot Reflexology & Pedicure Services in Trichy
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={index}
              itemScope
              itemType="https://schema.org/Service"
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
                alt={service.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover rounded-xl mb-4"
                itemProp="image"
              />
              {service.icon}
              <h3 className="text-lg font-semibold text-white mb-2" itemProp="name">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" itemProp="description">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
