import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Principles } from './components/Principles';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <Header />
      <Hero />
      <Services />
      <Principles />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
