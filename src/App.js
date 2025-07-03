import React from 'react';
import { Helmet } from 'react-helmet';

// Page Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Floating UI
import ContactStickyButton from './components/ContactStickyButton';
import ScrollToTopButton from './components/ScrollToTopButton'; // ✅ Scroll to top

function App() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans scroll-smooth">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Royal Foot Care | Foot Reflexology & Wellness in Ahmedabad</title>
        <meta
          name="description"
          content="Royal Foot Care offers expert foot reflexology, pedicure, and wellness services in Ahmedabad. Experience holistic healing with certified therapists."
        />
        <meta
          name="keywords"
          content="foot reflexology, foot care, wellness spa, Ahmedabad spa, pedicure, stress relief, Royal Foot Care"
        />
        <meta name="author" content="Royal Foot Care" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="benefits">
          <Benefits />
        </section>

        <section id="pricing">
          <Plans />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Floating Buttons */}
      <ContactStickyButton />
      <ScrollToTopButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
