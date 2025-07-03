import React from 'react';
import { motion } from 'framer-motion';
import { FaSpa, FaHeart, FaLeaf } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="bg-[#0e0e0e] text-white pt-20 pb-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/img4.jpg"
              alt="Foot Reflexology Session"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-teal-400">
              Experience Wellness, Naturally
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              At our studio, we believe in the healing power of touch, nature, and calm. With over a decade of experience,
              our certified therapists specialize in foot reflexology, therapeutic pedicure, and holistic rejuvenation packages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <FaSpa className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">Certified Therapists</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaLeaf className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">Natural & Organic Products</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FaHeart className="text-4xl text-teal-400 mb-2" />
                <p className="text-white font-medium">1000+ Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Whether you're looking to unwind after a long day, treat yourself or your loved ones, or manage chronic
            stress, our tailored services are designed with your wellness in mind. Step into our world of calm,
            and leave rejuvenated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
