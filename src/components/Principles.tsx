import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Heart, Clock, Award } from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: 'Customer-First Attitude',
    description:
      'Your satisfaction is our priority. We listen, we care, and we deliver results that exceed expectations every time.',
    accent: 'from-rose-400 to-pink-500',
    borderAccent: 'bg-gradient-to-b from-rose-400 to-pink-500',
    iconBg: 'from-rose-400/20 to-pink-500/20',
    iconGlow: 'rgba(244,63,94,0.25)',
  },
  {
    icon: Clock,
    title: 'Reliable & On-Time',
    description:
      'Young and motivated, we show up when we say we will. No excuses, no delays. Just solid, professional service you can depend on.',
    accent: 'from-blue-400 to-indigo-500',
    borderAccent: 'bg-gradient-to-b from-blue-400 to-indigo-500',
    iconBg: 'from-blue-400/20 to-indigo-500/20',
    iconGlow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: Award,
    title: 'Quality Results',
    description:
      'From driveways to siding, every job gets close attention and honest effort. No gimmicks—just quality work.',
    accent: 'from-amber-400 to-orange-500',
    borderAccent: 'bg-gradient-to-b from-amber-400 to-orange-500',
    iconBg: 'from-amber-400/20 to-orange-500/20',
    iconGlow: 'rgba(245,158,11,0.25)',
  },
];

/* Tilt card wrapper with perspective */
const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  index: number;
}> = ({ children, className = '', index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ perspective: 800, rotateX, rotateY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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

  return (
    <section
      id='principles'
      className='relative w-full bg-gradient-to-b from-white via-blue-50/50 to-white py-20 md:py-32 overflow-hidden'
    >
      {/* Dot pattern background */}
      <div
        className='absolute inset-0 pointer-events-none opacity-[0.35]'
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle floating gradient orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute w-[500px] h-[500px] rounded-full bg-blue-200/20 blur-3xl'
          style={{ left: '-10%', top: '-10%' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute w-[400px] h-[400px] rounded-full bg-indigo-200/15 blur-3xl'
          style={{ right: '-8%', bottom: '-5%' }}
          animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.1, 0.25, 0.1] }}
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
          {/* Glass pill label */}
          <motion.span
            className='inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-5 px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-200/40 shadow-sm'
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>

          {/* Gradient text heading */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-display bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent'>
            Our Principles
          </h2>
          <p className='text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed'>
            Diamond Pressure Washing is run by a hardworking young entrepreneur who takes pride in
            delivering straightforward, reliable service.
          </p>
        </motion.div>

        {/* Principle cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <TiltCard key={index} index={index} className='h-full'>
                <div className='relative h-full bg-white/70 backdrop-blur-lg border border-white/60 rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_50px_rgba(59,130,246,0.12)] transition-shadow duration-500 overflow-hidden group'>
                  {/* Left border accent */}
                  <div
                    className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${principle.borderAccent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Hover shimmer effect */}
                  <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-blue-50/30 group-hover:via-transparent group-hover:to-purple-50/20 transition-all duration-700 pointer-events-none' />

                  {/* Animated glass orb icon */}
                  <div className='relative mb-6'>
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.iconBg} backdrop-blur-sm border border-white/40 shadow-sm`}
                      animate={{
                        boxShadow: [
                          `0 0 10px ${principle.iconGlow}`,
                          `0 0 25px ${principle.iconGlow}`,
                          `0 0 10px ${principle.iconGlow}`,
                        ],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    >
                      <Icon
                        className='text-slate-700'
                        size={28}
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    {/* Floating ring */}
                    <motion.div
                      className='absolute inset-0 w-16 h-16 rounded-2xl border border-blue-300/30'
                      animate={{
                        scale: [1, 1.3, 1.3],
                        opacity: [0.3, 0, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  <h3 className='relative text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300'>
                    {principle.title}
                  </h3>
                  <p className='relative text-slate-500 leading-relaxed'>
                    {principle.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.0, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mt-16 md:mt-24 text-center'
        >
          <div className='relative inline-block max-w-3xl'>
            {/* Glass container for the tagline */}
            <div className='bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl px-8 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'>
              <p className='text-lg text-slate-600 leading-relaxed'>
                When you choose Diamond Pressure Washing, you're not just getting a clean driveway
                or fresh-looking patio — you're getting people who actually care about doing the job
                right. We show up on time, treat your property with respect, and make sure you're
                happy before we call it a day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Principles;
