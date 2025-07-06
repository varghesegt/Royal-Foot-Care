import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <div className="bg-[#0e0e0e] text-white font-sans scroll-smooth">
        {/* ✅ SEO Meta Tags */}
        <Helmet>
          <title>Royal Foot Care | Best Foot Reflexology & Wellness Spa in Trichy</title>
          <meta
            name="description"
            content="Royal Foot Care in Trichy provides expert foot reflexology, therapeutic foot massage, and wellness spa services by certified therapists. Experience stress relief and rejuvenation today."
          />
          <meta
            name="keywords"
            content="foot reflexology Trichy, foot massage Trichy, pedicure Trichy, wellness spa Trichy, Royal Foot Care Trichy, reflexology center Trichy, women foot spa Trichy"
          />
          <meta name="author" content="Royal Foot Care" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Royal Foot Care - Trichy’s Best Reflexology & Wellness Spa" />
          <meta
            property="og:description"
            content="Top-rated foot reflexology and wellness spa in Trichy. Professional therapists, stress relief treatments, and premium pedicure packages."
          />
          <meta property="og:url" content="https://royalfootcare.in" />
          <meta property="og:image" content="https://royalfootcare.in/logo192.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://royalfootcare.in/" />
        </Helmet>

        {/* Navigation Bar */}
        <Navbar />

        {/* Routes for Navigation */}
        <Routes>
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />

          <Route path="/plans" element={<Plans />} />
          {/* Add more routes here if needed */}
        </Routes>

        {/* Floating Buttons */}
        <ContactStickyButton />
        <ScrollToTopButton />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
