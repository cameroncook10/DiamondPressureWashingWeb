import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Award } from 'lucide-react';
import { Diamond } from './Diamond';

const principles = [
  {
    icon: Heart,
    title: 'Customer-First Attitude',
    description:
      'Your satisfaction is our priority. We listen, we care, and we deliver results that exceed expectations every time.',
  },
  {
    icon: Clock,
    title: 'Reliable & On-Time',
    description:
      'Young and motivated, we show up when we say we will. No excuses, no delays. Just solid, professional service you can depend on.',
  },
  {
    icon: Award,
    title: 'Quality Results',
    description:
      'From driveways to siding, every job gets close attention and honest effort. No gimmicks—just quality work.',
  },
];

export const Principles: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id='principles' className='relative w-full bg-white py-16 md:py-24 overflow-hidden'>
      {/* Decorative diamonds */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-100 opacity-30'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              right: `${i * 20}%`,
              top: `${(i * 25) % 100}%`,
            }}
          >
            <Diamond size={i % 2 === 0 ? 'lg' : 'md'} animated={false} />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className='text-center mb-12 md:mb-16'
        >
          <span className='inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3'>
            Why Choose Us
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-display'>Our Principles</h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            Diamond Pressure Washing is run by a hardworking young entrepreneur who takes pride
            in delivering straightforward, reliable service.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className='relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-xl p-8 hover:shadow-lg transition duration-300 group'
              >
                {/* Hover diamond animation */}
                <motion.div
                  className='absolute top-4 right-4 text-blue-200 opacity-0 group-hover:opacity-100'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <Diamond size='sm' animated={false} />
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className='mb-4 inline-block'
                >
                  <div className='bg-blue-100 p-3 rounded-lg'>
                    <Icon className='text-blue-600' size={28} />
                  </div>
                </motion.div>

                <h3 className='text-xl font-bold text-neutral-900 mb-3'>{principle.title}</h3>
                <p className='text-neutral-700 leading-relaxed'>{principle.description}</p>

                {/* Bottom accent */}
                <div className='mt-6 pt-4 border-t border-blue-100 flex justify-end'>
                  <div className='text-blue-600 font-bold'>◆</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <p className='text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed'>
            When you choose Diamond Pressure Washing, you're not just getting a clean driveway
            or fresh-looking patio—you're getting people who actually care about doing the job
            right. We show up on time, treat your property with respect, and make sure you're
            happy before we call it a day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Principles;
