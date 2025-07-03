import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHandsHelping,
  FaSmileBeam,
  FaHeartbeat,
  FaLeaf,
  FaBed,
  FaSpa,
  FaWalking,
  FaBrain,
  FaBolt,
} from 'react-icons/fa';

const benefits = [
  {
    title: "Relieves Pain & Fatigue",
    icon: <FaHandsHelping className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Targets foot pressure points to ease aches, joint stiffness, and chronic fatigue.",
  },
  {
    title: "Reduces Stress Instantly",
    icon: <FaSmileBeam className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Calms the nervous system and lowers cortisol levels for full-body relaxation.",
  },
  {
    title: "Boosts Blood Circulation",
    icon: <FaHeartbeat className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Improves blood flow and oxygen delivery to muscles and vital organs.",
  },
  {
    title: "Detoxifies the Body",
    icon: <FaLeaf className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Flushes out toxins by stimulating lymphatic flow through reflex zones.",
  },
  {
    title: "Improves Sleep Quality",
    icon: <FaBed className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Induces deeper, more restful sleep by relaxing the body and mind.",
  },
  {
    title: "Enhances Mood & Energy",
    icon: <FaBolt className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Releases endorphins and boosts vitality—feel lighter, happier, and recharged.",
  },
  {
    title: "Strengthens Immunity",
    icon: <FaSpa className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Activates reflex points linked to the immune system for natural defense support.",
  },
  {
    title: "Relieves Mental Fatigue",
    icon: <FaBrain className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Improves clarity, focus, and reduces mental overload through neuro-reflex points.",
  },
  {
    title: "Supports Foot Health",
    icon: <FaWalking className="text-4xl text-teal-400 transition-transform duration-500 group-hover:scale-110" />,
    desc: "Eases plantar fasciitis, arch pain, and improves balance and flexibility.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#0e0e0e] text-white pt-10 pb-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          Benefits of Foot Reflexology
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-teal-500/30 transition-all duration-500 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
