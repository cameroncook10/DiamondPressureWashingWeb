import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PrecisionSpray } from './components/PrecisionSpray';
import { ServiceAreas } from './components/ServiceAreas';
import { Principles } from './components/Principles';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

function App() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <Header />
      <Hero />
      <Services />
      <PrecisionSpray />
      <ServiceAreas />
      <Principles />
      <Testimonials />
      <CTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
