import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Shield, Sparkles, Droplets, ArrowRight } from 'lucide-react';
import SpinningDiamond from './SpinningDiamond';

/* ------------------------------------------------------------------ */
/*  FloatingPaths - SVG background layer (adapted from background-paths) */
/* ------------------------------------------------------------------ */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${
      189 + i * 6
    } -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${
      616 - i * 5 * position
    } ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${
      875 - i * 6
    }`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className='absolute inset-0 pointer-events-none'>
      <svg
        className='w-full h-full'
        viewBox='0 0 696 316'
        fill='none'
        preserveAspectRatio='xMidYMid slice'
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke='rgba(147,197,253,0.15)'
            strokeWidth={path.width}
            strokeOpacity={0.05 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.3 }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.35, 0.15],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service checklist items                                            */
/* ------------------------------------------------------------------ */
const services = [
  'Driveway cleaning',
  'Patio & deck restoration',
  'House siding washing',
  'Window & gutter cleaning',
  'Commercial properties',
  'Free estimates',
];

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */
export const Hero: React.FC = () => {
  const headingLine1 = 'Pressure Washing';
  const headingLine2 = 'Done Right';

  return (
    <section
      id='home'
      className='relative w-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-24 md:pt-32 pb-16 md:pb-28 overflow-hidden'
    >
      {/* ---- Animated SVG background paths ---- */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Ambient glow orbs */}
      <motion.div
        className='absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-1/4 -right-32 w-80 h-80 rounded-full pointer-events-none'
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full pointer-events-none'
          style={{
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            background: `rgba(147,197,253,${0.2 + Math.random() * 0.3})`,
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            boxShadow: '0 0 6px rgba(147,197,253,0.4)',
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ---- Main content ---- */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          {/* ========== Left: Glass card ========== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='relative bg-white/[0.07] backdrop-blur-lg border border-white/[0.12] rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-950/30'
          >
            {/* Subtle glass reflection */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl' />

            <div className='space-y-6'>
              {/* Trust badge - floating bob */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-semibold px-4 py-2 rounded-full border border-white/10'
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Shield size={16} className='text-cyan-400' />
                  <span>Trusted in Richmond, VA</span>
                  <span className='flex gap-0.5 text-yellow-400'>
                    <Star size={14} fill='currentColor' />
                    <Star size={14} fill='currentColor' />
                    <Star size={14} fill='currentColor' />
                    <Star size={14} fill='currentColor' />
                    <Star size={14} fill='currentColor' />
                  </span>
                </motion.div>
              </motion.div>

              {/* Heading with letter-by-letter animation */}
              <div>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display'>
                  {/* Line 1 */}
                  <span className='block text-white'>
                    {headingLine1.split('').map((letter, i) => (
                      <motion.span
                        key={`l1-${i}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5 + i * 0.03,
                          type: 'spring',
                          stiffness: 150,
                          damping: 20,
                        }}
                        className='inline-block'
                        style={{ whiteSpace: letter === ' ' ? 'pre' : undefined }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </span>
                  {/* Line 2 - gradient */}
                  <span className='block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-300 bg-clip-text text-transparent'>
                    {headingLine2.split('').map((letter, i) => (
                      <motion.span
                        key={`l2-${i}`}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5 + headingLine1.length * 0.03 + i * 0.03,
                          type: 'spring',
                          stiffness: 150,
                          damping: 20,
                        }}
                        className='inline-block'
                        style={{ whiteSpace: letter === ' ' ? 'pre' : undefined }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className='text-blue-100/80 text-lg leading-relaxed max-w-xl'
              >
                Hey there — thanks for checking out Diamond Pressure Washing! I started
                this business with a simple goal: help people keep their homes and
                businesses looking clean without the hassle.
              </motion.p>

              {/* Service checklist - staggered slide in */}
              <div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  {services.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 1.4 + idx * 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                      }}
                      className='flex items-center gap-2.5 group'
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: 2 + idx * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <CheckCircle
                          size={18}
                          className='text-cyan-400 flex-shrink-0'
                        />
                      </motion.div>
                      <span className='text-sm text-blue-100/70 group-hover:text-white transition-colors duration-300'>
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons with glass + glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className='flex flex-col sm:flex-row gap-3 pt-2'
              >
                {/* Primary CTA */}
                <motion.a
                  href='#contact'
                  className='relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 overflow-hidden group'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Glow pulse behind button */}
                  <motion.div
                    className='absolute inset-0 rounded-xl bg-cyan-400/20'
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Shine sweep */}
                  <motion.div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    style={{
                      background:
                        'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                    }}
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                  <Sparkles size={18} className='relative z-10' />
                  <span className='relative z-10'>Get Your Free Quote</span>
                  <ArrowRight
                    size={16}
                    className='relative z-10 group-hover:translate-x-1 transition-transform duration-300'
                  />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href='tel:804-426-5663'
                  className='inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30'
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Droplets size={18} className='text-cyan-300' />
                  Call 804-426-5663
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* ========== Right: Spinning Diamond ========== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className='relative hidden lg:flex items-center justify-center'
          >
            {/* Ambient glow behind diamond */}
            <motion.div
              className='absolute w-80 h-80 rounded-full pointer-events-none'
              style={{
                background:
                  'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(56,189,248,0.05) 40%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Glass container */}
            <div className='relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 shadow-2xl shadow-blue-950/20 w-full max-w-md aspect-square flex items-center justify-center'>
              {/* Top glass edge */}
              <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-3xl' />

              <SpinningDiamond className='w-full h-full' />

              {/* Corner accent dots */}
              <motion.div
                className='absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-400/40'
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className='absolute bottom-4 left-4 w-2 h-2 rounded-full bg-blue-400/40'
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className='absolute -top-4 -right-4 p-3 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10'
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={20} className='text-cyan-400/60' />
            </motion.div>
            <motion.div
              className='absolute -bottom-2 -left-2 p-2.5 bg-white/[0.06] backdrop-blur-sm rounded-xl border border-white/10'
              animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <Droplets size={18} className='text-blue-400/60' />
            </motion.div>
          </motion.div>

          {/* Mobile diamond (below card on small screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className='lg:hidden flex items-center justify-center'
          >
            <div className='relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 shadow-xl w-64 h-64 flex items-center justify-center'>
              <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-3xl' />
              <SpinningDiamond className='w-full h-full' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
