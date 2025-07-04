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
import Footer from './components/Footer'; // ✅ Make sure this is latest

// Floating UI
import ContactStickyButton from './components/ContactStickyButton';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="bg-[#0e0e0e] text-white font-sans scroll-smooth">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Royal Foot Care | Foot Reflexology & Wellness in Trichy</title>
        <meta
          name="description"
          content="Royal Foot Care offers expert foot reflexology, therapeutic pedicure, and stress relief in Trichy. Experience certified wellness by professionals."
        />
        <meta
          name="keywords"
          content="foot reflexology Trichy, foot massage Melapudur, therapeutic pedicure, Royal Foot Care, women's wellness spa, Tiruchirappalli"
        />
        <meta name="author" content="Royal Foot Care Foot Reflexology" />
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

      {/* ✅ Updated Footer SEO - Confirm Latest Footer Content is Loaded */}
      <Footer />
    </div>
  );
}

export default App;
