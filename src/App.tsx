import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyItWorks from './components/WhyItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { setupIntersectionObserver } from './utils/IntersectionObserver';

function App() {
  // Set up intersection observer for animations
  setupIntersectionObserver();

  return (
    <div className="min-h-screen bg-primary-50 text-slate-800 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <WhyItWorks />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;