import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaStar, FaUsers, FaQuoteLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    name: "Nithya Durga",
    feedback:
      "Absolutely loved the ambiance and therapy. It’s a safe and welcoming space for women with professional women staff. Felt very comfortable throughout the session!",
    rating: 5,
  },
  {
    name: "Varghese G T",
    feedback:
      "Fantastic experience! The foot reflexology sessions here are incredibly relaxing and effective. Highly professional staff.",
    rating: 5,
  },
  {
    name: "Abdullah Vijay",
    feedback:
      "Best place for foot care and stress relief. Their combo packages are great value for money. Will definitely visit again.",
    rating: 5,
  },
  {
    name: "Priya Nithyananda",
    feedback:
      "This center is a hidden gem! The staff is extremely courteous and attentive. I felt deeply relaxed after my first session. Highly recommended for women.",
    rating: 5,
  },
  {
    name: "Manikandan Baskaran",
    feedback:
      "I had severe heel pain and was suggested reflexology. The results here have been beyond expectations. Clean, professional and result-oriented.",
    rating: 5,
  },
  {
    name: "Prakash M",
    feedback:
      "One of the best reflexology centers in Trichy. The therapists are well-trained and respectful. I could feel the difference in energy flow after just one visit.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#101010] text-white pt-16 pb-20 px-6 md:px-12">
      {/* ✅ SEO Meta & JSON-LD */}
      <Helmet>
        <title>Client Testimonials | Royal Foot Care Trichy</title>
        <meta
          name="description"
          content="Read real client reviews for Royal Foot Care in Trichy. 500+ happy clients. Certified reflexology and massage therapy for stress, pain relief, and wellness."
        />
        <meta
          name="keywords"
          content="foot reflexology reviews, Trichy spa testimonials, client experiences, Royal Foot Care ratings, stress relief reviews"
        />
        <meta property="og:title" content="Client Testimonials | Royal Foot Care" />
        <meta
          property="og:description"
          content="Discover what our happy clients say about foot reflexology, pedicure, and wellness sessions at Royal Foot Care Trichy."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Royal Foot Care",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "500",
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: { "@type": "Person", name: t.name },
              reviewBody: t.feedback,
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: "5",
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Rating Stats */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-6 mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://g.co/kgs/TWJ3ie1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
            aria-label="See Royal Foot Care reviews on Google"
          >
            <FaGoogle className="text-2xl" />
            <span className="text-xl font-semibold">4.9/5 Google Rating</span>
          </a>
          <div className="flex items-center gap-2 text-teal-400">
            <FaUsers className="text-2xl" />
            <span className="text-xl font-semibold">500+ Happy Clients</span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-teal-500/10 transition duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true }}
              itemProp="review"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-teal-400 opacity-20 text-4xl" />
              <div className="flex items-center justify-center gap-1 mb-3" aria-label={`Rated ${testimonial.rating} stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-semibold text-teal-400">{testimonial.name}</h4>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
