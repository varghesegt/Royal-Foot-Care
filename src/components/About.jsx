import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaHeart, FaLeaf } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0e0e0e] text-white pt-20 pb-14 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Royal Foot Care, Trichy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/img4.jpg"
              alt="Best foot reflexology therapy Trichy"
              className="rounded-2xl shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-400">
              Foot Reflexology & Wellness in Melapudur, Trichy
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              At <strong>Royal Foot Care</strong>, we specialize in <strong>therapeutic foot reflexology</strong>, <strong>stress relief massage</strong>, and <strong>natural foot care</strong> for both men and women in Trichy. Our <strong>certified therapists</strong> use authentic reflexology techniques to relieve pain, reduce stress, and improve overall wellness naturally in a calming, professional environment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <FaSpa className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">Certified Therapists</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaLeaf className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">Natural & Organic Oils</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaHeart className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">500+ Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Why Royal Foot Care Is Trichy’s Trusted Reflexology Choice
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Whether you're dealing with daily stress, body fatigue, hormonal imbalance, or chronic foot pain — our reflexology therapies are designed to help. We offer personalized sessions with professional care at our peaceful location in Melapudur, Trichy. Discover the difference holistic care can make. Book your session now.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
