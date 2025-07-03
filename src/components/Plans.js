import React from 'react';
import { motion } from 'framer-motion';

const phoneNumber = '917904747979';

const services = [
  { title: 'Foot Reflexology', duration: '30 min', price: '₹900' },
  { title: 'Foot Reflexology', duration: '45 min', price: '₹1100' },
  { title: 'Foot Reflexology', duration: '60 min', price: '₹1300' },
  { title: 'Foot Reflexology (Combo)', duration: '90 min', price: '₹1800' },
  { title: 'Basic Pedicure', duration: '45 min', price: '₹700' },
  { title: 'Moisturising Pedicure', duration: '60 min', price: '₹900' },
];

const packages = [
  { title: 'Silver', price: '₹5000', duration: '5 Hours', validity: '2 Months' },
  { title: 'Gold', price: '₹10000', duration: '12 Hours', validity: '4 Months', popular: true },
  { title: 'Platinum', price: '₹15000', duration: '20 Hours', validity: '6 Months' },
];

export default function Plans() {
  return (
    <section
      id="pricing"
      className="pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-14 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-[#0c0f14] via-[#11161d] to-[#0b0f16] text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Services & Packages
        </motion.h2>

        {/* ───── Individual Services ───── */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl md:text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Individual Services
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#171a1e] border border-white/10 rounded-2xl p-5 shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-white mb-1">{service.title}</h4>
                <p className="text-sm text-gray-400 mb-1">🕒 {service.duration}</p>
                <p className="text-2xl font-bold text-teal-400 mb-3">{service.price}</p>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Hi, I'm interested in the *${service.title}* service (${service.duration}, ${service.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───── Packages Section ───── */}
        <div>
          <motion.h3
            className="text-2xl md:text-4xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Value Packages
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-[#171a1e] border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-teal-500/20 ${
                  pkg.popular ? 'border-teal-500 scale-[1.02]' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {pkg.popular && (
                  <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.title} Package</h4>
                <p className="text-3xl font-extrabold text-teal-400 mb-3">{pkg.price}</p>
                <ul className="text-gray-300 text-sm space-y-1 mb-4">
                  <li>🕒 {pkg.duration}</li>
                  <li>📅 Valid for {pkg.validity}</li>
                </ul>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    `Hi, I'm interested in the *${pkg.title} Package* worth ${pkg.price} (${pkg.duration} / Valid for ${pkg.validity}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
