import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Principles } from './components/Principles';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='w-full min-h-screen bg-white'>
      <Header />
      <Hero />
      <Principles />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
