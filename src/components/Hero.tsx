import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Star, label: '5-Star Rated' },
  { icon: CheckCircle, label: '100% Satisfaction' },
];

export const Hero: React.FC = () => {
  return (
    <section id='home' className='relative min-h-screen flex items-center'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80'
          alt='Professional pressure washing service'
          className='w-full h-full object-cover'
        />
        {/* Dark overlay */}
        <div className='absolute inset-0 bg-slate-900/60' />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='max-w-3xl'
        >
          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-display'>
            Richmond's Trusted{' '}
            <span className='text-emerald-400'>Pressure Washing</span>{' '}
            Experts
          </h1>

          {/* Subheading */}
          <p className='mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl'>
            Professional exterior cleaning for homes and businesses across RVA.
            No hassle, just results.
          </p>

          {/* CTA Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200'
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href='tel:804-426-5663'
              className='inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg py-4 px-8 rounded-lg transition-all duration-200'
            >
              <Phone size={20} />
              Call 804-426-5663
            </a>
          </div>

          {/* Trust badges */}
          <div className='mt-10 flex flex-wrap gap-6 sm:gap-8'>
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className='flex items-center gap-2 text-white/90'
              >
                <badge.icon
                  size={20}
                  className='text-amber-400 flex-shrink-0'
                />
                <span className='text-sm sm:text-base font-medium'>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
