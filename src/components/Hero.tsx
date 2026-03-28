import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Shield, Sparkles } from 'lucide-react';
import { PressureWasherAnimation } from './PressureWasherAnimation';
import { Diamond } from './Diamond';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id='home'
      className='relative w-full bg-gradient-to-b from-blue-50 via-white to-neutral-50 pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden'
    >
      {/* Animated background diamonds */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-200 opacity-10'
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i * 18) % 80}%`,
            }}
          >
            <Diamond size={i % 2 === 0 ? 'lg' : 'md'} animated={false} />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'
        >
          {/* Left content */}
          <div className='space-y-6'>
            {/* Trust badge */}
            <motion.div variants={itemVariants} className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full'>
              <Shield size={16} />
              <span>Trusted in Richmond, VA</span>
              <span className='flex gap-0.5 text-yellow-500'>
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
                <Star size={14} fill='currentColor' />
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight font-display'>
                Pressure Washing{' '}
                <span className='bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent'>
                  Done Right
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className='text-lg text-neutral-600 leading-relaxed max-w-xl'
            >
              Hey there — thanks for checking out Diamond Pressure Washing! I started this business
              with a simple goal: help people keep their homes and businesses looking clean without
              the hassle.
            </motion.p>

            <motion.div variants={itemVariants} className='space-y-3'>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-700'>
                {[
                  'Driveway cleaning',
                  'Patio & deck restoration',
                  'House siding washing',
                  'Window & gutter cleaning',
                  'Commercial properties',
                  'Free estimates',
                ].map((item, idx) => (
                  <li key={idx} className='flex items-center gap-2'>
                    <CheckCircle size={18} className='text-blue-500 flex-shrink-0' />
                    <span className='text-sm'>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className='flex flex-col sm:flex-row gap-3 pt-2'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/25'
              >
                <Sparkles size={18} />
                Get Your Free Quote
              </a>
              <a
                href='tel:804-426-5663'
                className='inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-blue-600 font-bold py-3.5 px-8 rounded-lg transition duration-300 border-2 border-blue-200 hover:border-blue-300'
              >
                Call 804-426-5663
              </a>
            </motion.div>
          </div>

          {/* Right animation */}
          <motion.div
            variants={itemVariants}
            className='relative h-80 md:h-96 lg:h-[480px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-100'
          >
            <PressureWasherAnimation />

            {/* Decorative diamonds */}
            <motion.div
              className='absolute top-8 right-8 text-blue-400'
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <Diamond size='md' animated={false} />
            </motion.div>

            <motion.div
              className='absolute bottom-8 left-8 text-blue-300'
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <Diamond size='lg' animated={false} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
