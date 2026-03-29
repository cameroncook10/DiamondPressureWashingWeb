import React from 'react';
import { motion } from 'framer-motion';
import { Home, TreePine, Building2, Droplets, Sun, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Driveway Cleaning',
    description:
      'Remove oil stains, dirt, and grime buildup. We bring your concrete and pavers back to looking brand new.',
    color: 'from-blue-500 to-blue-600',
    glowColor: 'shadow-blue-500/20',
  },
  {
    icon: TreePine,
    title: 'Patio & Deck Restoration',
    description:
      "Algae, mildew, and weathering don't stand a chance. Restore your outdoor living space to its full potential.",
    color: 'from-emerald-500 to-emerald-600',
    glowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Building2,
    title: 'House Siding',
    description:
      "Vinyl, brick, stucco — we handle it all. Safe, thorough cleaning that protects your home's exterior.",
    color: 'from-sky-500 to-sky-600',
    glowColor: 'shadow-sky-500/20',
  },
  {
    icon: Droplets,
    title: 'Window & Gutter Cleaning',
    description:
      'Crystal clear windows and clean gutters that actually work. Keep your home looking sharp and functioning right.',
    color: 'from-cyan-500 to-cyan-600',
    glowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Sun,
    title: 'Roof Soft Wash',
    description:
      'Gentle, low-pressure cleaning that removes black streaks and moss without damaging your shingles.',
    color: 'from-amber-500 to-amber-600',
    glowColor: 'shadow-amber-500/20',
  },
  {
    icon: Warehouse,
    title: 'Commercial Properties',
    description:
      'Storefronts, parking lots, and building exteriors. Make a great first impression on your customers.',
    color: 'from-indigo-500 to-indigo-600',
    glowColor: 'shadow-indigo-500/20',
  },
];

/* Floating particle component */
const FloatingParticle: React.FC<{ delay: number; x: string; y: string; size: number }> = ({
  delay,
  x,
  y,
  size,
}) => (
  <motion.div
    className='absolute rounded-full bg-blue-400/30'
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, -10, 0],
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${(i * 17) % 100}%`,
    y: `${(i * 23 + 10) % 100}%`,
    size: 2 + (i % 4),
    delay: i * 0.4,
  }));

  return (
    <section
      id='services'
      className='relative w-full bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-20 md:py-32 overflow-hidden'
    >
      {/* Floating particles background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {particles.map((p) => (
          <FloatingParticle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
        ))}
      </div>

      {/* Ambient glow orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute w-96 h-96 rounded-full bg-blue-600/10 blur-3xl'
          style={{ left: '-5%', top: '10%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl'
          style={{ right: '-5%', bottom: '15%' }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute w-64 h-64 rounded-full bg-cyan-500/8 blur-3xl'
          style={{ left: '40%', top: '50%' }}
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          className='text-center mb-14 md:mb-20'
        >
          <motion.span
            className='inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/20 backdrop-blur-sm'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 font-display'>
            Our Services
          </h2>
          <p className='text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed'>
            From residential driveways to commercial storefronts, we've got the equipment and
            expertise to handle any job.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className='group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 transition-all duration-500 hover:bg-white/[0.08] hover:border-blue-400/30 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] cursor-default'
              >
                {/* Card inner glow on hover */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none' />

                {/* Icon in glass circle */}
                <div className='relative mb-5'>
                  <motion.div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${service.color} shadow-lg ${service.glowColor}`}
                    animate={{
                      boxShadow: [
                        '0 0 15px rgba(59,130,246,0.15)',
                        '0 0 25px rgba(59,130,246,0.25)',
                        '0 0 15px rgba(59,130,246,0.15)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <Icon className='text-white' size={24} />
                  </motion.div>
                  {/* Subtle ring pulse */}
                  <motion.div
                    className='absolute inset-0 w-14 h-14 rounded-full border border-white/20'
                    animate={{
                      scale: [1, 1.4, 1.4],
                      opacity: [0.4, 0, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: index * 0.3,
                    }}
                  />
                </div>

                <h3 className='relative text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='relative text-sm text-blue-100/60 leading-relaxed'>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center mt-14 md:mt-20'
        >
          <p className='text-blue-100/50 mb-5 text-lg'>
            Not sure what you need? We'll come take a look — no charge.
          </p>
          <motion.a
            href='#contact'
            className='inline-flex items-center gap-2 text-blue-400 font-semibold text-lg transition-all duration-300 px-6 py-3 rounded-full bg-blue-400/10 border border-blue-400/20 backdrop-blur-sm hover:bg-blue-400/20 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a free estimate
            <motion.span
              aria-hidden='true'
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              &rarr;
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
