import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, Award } from 'lucide-react';

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
      'From driveways to siding, every job gets close attention and honest effort. No gimmicks — just quality work.',
  },
];

export const Principles: React.FC = () => {
  return (
    <section id='principles' className='w-full bg-slate-900 py-20 md:py-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center mb-14'>
          <span className='text-emerald-400 font-semibold text-sm tracking-widest uppercase'>
            WHY CHOOSE US
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-white mt-3 mb-4 font-display'>
            Our Principles
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
            Diamond Pressure Washing is run by a hardworking young entrepreneur who takes pride in
            delivering straightforward, reliable service.
          </p>
        </div>

        {/* Principle cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-60px' }}
                className='bg-slate-800/50 border border-slate-800 rounded-xl p-8'
              >
                {/* Icon */}
                <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 mb-6'>
                  <Icon className='text-emerald-400' size={26} />
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>{principle.title}</h3>
                <p className='text-slate-400 leading-relaxed'>{principle.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-16 text-center text-slate-400 max-w-3xl mx-auto leading-relaxed'
        >
          When you choose Diamond Pressure Washing, you're not just getting a clean driveway or
          fresh-looking patio — you're getting people who actually care about doing the job right. We
          show up on time, treat your property with respect, and make sure you're happy before we
          call it a day.
        </motion.p>
      </div>
    </section>
  );
};

export default Principles;
