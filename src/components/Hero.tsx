import React from 'react';
import { motion } from 'framer-motion';
import { PressureWasherAnimation } from './PressureWasherAnimation';
import { Diamond } from './Diamond';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className='relative w-full bg-gradient-to-b from-blue-50 via-white to-neutral-50 py-12 md:py-24 overflow-hidden'>
      {/* Animated background diamonds */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-200 opacity-20'
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
          className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center'
        >
          {/* Left content */}
          <div className='space-y-6'>
            <motion.div variants={itemVariants}>
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight'>
                Pressure Washing <span className='text-blue-600'>Done Right</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className='text-lg text-neutral-700 leading-relaxed'>
              Hey there—thanks for checking out Diamond Pressure Washing! I'm the guy behind the
              hose, a young entrepreneur who started this business with a simple goal: to help
              people keep their homes and businesses looking clean without the hassle.
            </motion.p>

            <motion.div variants={itemVariants} className='space-y-3'>
              <h3 className='text-xl font-bold text-blue-600'>What We Offer</h3>
              <ul className='space-y-2 text-neutral-700'>
                {[
                  'Professional driveway cleaning',
                  'Patio and deck restoration',
                  'House siding pressure washing',
                  'Window and gutter cleaning',
                  'Commercial property maintenance',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className='flex items-start space-x-3'
                  >
                    <span className='text-blue-600 font-bold mt-1'>◆</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className='pt-4'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105'>
                Get Your Free Quote
              </button>
            </motion.div>
          </div>

          {/* Right animation */}
          <motion.div
            variants={itemVariants}
            className='relative h-96 md:h-full min-h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl'
          >
            <PressureWasherAnimation />

            {/* Decorative diamonds in animation area */}
            <motion.div
              className='absolute top-10 right-10 text-blue-400'
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <Diamond size='md' animated={false} />
            </motion.div>

            <motion.div
              className='absolute bottom-10 left-10 text-blue-300'
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
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
