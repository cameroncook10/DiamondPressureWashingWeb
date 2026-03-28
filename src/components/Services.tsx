import React from 'react';
import { motion } from 'framer-motion';
import { Home, TreePine, Building2, Droplets, Sun, Warehouse } from 'lucide-react';
import { Diamond } from './Diamond';

const services = [
  {
    icon: Home,
    title: 'Driveway Cleaning',
    description:
      'Remove oil stains, dirt, and grime buildup. We bring your concrete and pavers back to looking brand new.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TreePine,
    title: 'Patio & Deck Restoration',
    description:
      'Algae, mildew, and weathering don\'t stand a chance. Restore your outdoor living space to its full potential.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Building2,
    title: 'House Siding',
    description:
      'Vinyl, brick, stucco — we handle it all. Safe, thorough cleaning that protects your home\'s exterior.',
    color: 'from-sky-500 to-sky-600',
  },
  {
    icon: Droplets,
    title: 'Window & Gutter Cleaning',
    description:
      'Crystal clear windows and clean gutters that actually work. Keep your home looking sharp and functioning right.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Sun,
    title: 'Roof Soft Wash',
    description:
      'Gentle, low-pressure cleaning that removes black streaks and moss without damaging your shingles.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Warehouse,
    title: 'Commercial Properties',
    description:
      'Storefronts, parking lots, and building exteriors. Make a great first impression on your customers.',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='services' className='relative w-full bg-neutral-50 py-16 md:py-24 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-100 opacity-20'
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
            style={{
              left: `${i * 30}%`,
              top: `${(i * 35) % 100}%`,
            }}
          >
            <Diamond size='lg' animated={false} />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='text-center mb-12 md:mb-16'
        >
          <span className='inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3'>
            What We Do
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-display'>
            Our Services
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            From residential driveways to commercial storefronts, we've got the equipment and
            expertise to handle any job.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className='bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 group'
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} mb-4 shadow-sm`}
                >
                  <Icon className='text-white' size={22} />
                </div>

                <h3 className='text-lg font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-sm text-neutral-600 leading-relaxed'>{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          <p className='text-neutral-600 mb-4'>
            Not sure what you need? We'll come take a look — no charge.
          </p>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition'
          >
            Request a free estimate
            <span aria-hidden='true'>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
