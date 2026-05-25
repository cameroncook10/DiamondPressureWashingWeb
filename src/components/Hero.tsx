import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

export const Hero: React.FC = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background image — visible, not washed out */}
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1920&q=80'
          alt=''
          aria-hidden='true'
          className='w-full h-full object-cover'
        />
        {/* Light blue tint — keeps the photo visible while shifting it toward the brand */}
        <div className='absolute inset-0 bg-sky-900/15 mix-blend-multiply' />
        {/* Left-anchored dark gradient — gives the headline contrast without darkening the whole frame */}
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/40 to-transparent' />
        {/* Bottom fade — keeps the trust strip readable */}
        <div className='absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70 to-transparent' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='max-w-3xl'
        >
          {/* Tagline chip — replaces the iconographic trust badges */}
          <div className='inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/25 px-4 py-1.5 mb-6'>
            <span className='inline-block w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse' />
            <span className='text-xs font-semibold tracking-widest uppercase text-white/90'>
              Richmond · Owner-Operated · Licensed
            </span>
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display'>
            Richmond's Trusted{' '}
            <span className='bg-gradient-to-r from-sky-200 via-cyan-200 to-white bg-clip-text text-transparent'>
              Pressure Washing
            </span>{' '}
            Experts
          </h1>

          {/* Subheading */}
          <p className='mt-6 text-lg sm:text-xl text-sky-50/90 leading-relaxed max-w-2xl'>
            From Short Pump driveways to RIC Airport hangars — owner-operated
            exterior cleaning across the Greater Richmond area.
          </p>

          {/* CTA Buttons */}
          <div className='on-dark mt-8 flex flex-col sm:flex-row gap-4'>
            <ShinyButton
              onClick={() => (window.location.href = '#contact')}
              className='bg-sky-500/95 text-white text-base py-4 px-8 shadow-lg shadow-sky-900/40 hover:shadow-sky-400/40'
            >
              <span className='flex items-center gap-2'>
                Get a Free Quote
                <ArrowRight size={18} />
              </span>
            </ShinyButton>
            <ShinyButton
              onClick={() => (window.location.href = 'tel:804-426-5663')}
              className='bg-white/10 text-white text-base py-4 px-8 border border-white/40 backdrop-blur-md hover:bg-white/15'
            >
              <span className='flex items-center gap-2'>
                <Phone size={18} />
                Call 804-426-5663
              </span>
            </ShinyButton>
          </div>
        </motion.div>
      </div>

      {/* Slim trust strip — sits at the bottom of the hero, replaces the floating icon row */}
      <div className='absolute bottom-0 inset-x-0 z-10 border-t border-white/15 bg-slate-950/30 backdrop-blur-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-2 text-xs sm:text-sm text-white/85 font-medium tracking-wide uppercase'>
          <span>Licensed &amp; Insured</span>
          <span className='hidden sm:inline-block w-1 h-1 rounded-full bg-sky-300/60' />
          <span>5.0 ★ Google Reviewed</span>
          <span className='hidden sm:inline-block w-1 h-1 rounded-full bg-sky-300/60' />
          <span>100% Satisfaction</span>
          <span className='hidden sm:inline-block w-1 h-1 rounded-full bg-sky-300/60' />
          <span>RIC Airport Certified</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
