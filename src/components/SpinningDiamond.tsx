import React from 'react';
import { motion } from 'framer-motion';

export const SpinningDiamond: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glow backdrop */}
      <motion.div
        className='absolute w-64 h-64 rounded-full'
        style={{
          background:
            'radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(14,165,233,0.1) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 3D Diamond container */}
      <div
        className='relative w-48 h-48 md:w-64 md:h-64'
        style={{
          perspective: '800px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <motion.div
          className='w-full h-full'
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [5, -5, 5],
          }}
          transition={{
            rotateY: { duration: 6, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Diamond SVG - multi-faceted gem */}
          <svg
            viewBox='0 0 200 240'
            className='w-full h-full drop-shadow-2xl'
            style={{ filter: 'drop-shadow(0 0 30px rgba(56,189,248,0.5))' }}
          >
            <defs>
              {/* Brilliant cut facet gradients */}
              <linearGradient id='facet1' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#e0f2fe' />
                <stop offset='50%' stopColor='#7dd3fc' />
                <stop offset='100%' stopColor='#38bdf8' />
              </linearGradient>
              <linearGradient id='facet2' x1='100%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor='#bae6fd' />
                <stop offset='50%' stopColor='#0ea5e9' />
                <stop offset='100%' stopColor='#0284c7' />
              </linearGradient>
              <linearGradient id='facet3' x1='50%' y1='0%' x2='50%' y2='100%'>
                <stop offset='0%' stopColor='#f0f9ff' />
                <stop offset='30%' stopColor='#bae6fd' />
                <stop offset='100%' stopColor='#0369a1' />
              </linearGradient>
              <linearGradient id='facet4' x1='0%' y1='100%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#075985' />
                <stop offset='50%' stopColor='#38bdf8' />
                <stop offset='100%' stopColor='#e0f2fe' />
              </linearGradient>
              <linearGradient id='facet5' x1='50%' y1='100%' x2='50%' y2='0%'>
                <stop offset='0%' stopColor='#0c4a6e' />
                <stop offset='50%' stopColor='#0284c7' />
                <stop offset='100%' stopColor='#7dd3fc' />
              </linearGradient>
              <linearGradient id='crown' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#f0f9ff' stopOpacity='0.95' />
                <stop offset='100%' stopColor='#bae6fd' stopOpacity='0.9' />
              </linearGradient>
              <linearGradient id='tableGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#ffffff' stopOpacity='0.9' />
                <stop offset='50%' stopColor='#e0f2fe' stopOpacity='0.8' />
                <stop offset='100%' stopColor='#bae6fd' stopOpacity='0.7' />
              </linearGradient>
              {/* Sparkle filter */}
              <filter id='glow'>
                <feGaussianBlur stdDeviation='2' result='blur' />
                <feMerge>
                  <feMergeNode in='blur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>

            {/* === CROWN (top) === */}
            {/* Table (top flat) */}
            <polygon points='70,55 130,55 140,70 60,70' fill='url(#tableGrad)' stroke='#bae6fd' strokeWidth='0.5' />

            {/* Crown left star facet */}
            <polygon points='30,70 60,70 70,55 50,40' fill='url(#facet1)' stroke='#93c5fd' strokeWidth='0.5' opacity='0.9' />
            {/* Crown right star facet */}
            <polygon points='170,70 140,70 130,55 150,40' fill='url(#facet2)' stroke='#93c5fd' strokeWidth='0.5' opacity='0.9' />
            {/* Crown top-left bezel */}
            <polygon points='50,40 70,55 100,30' fill='url(#crown)' stroke='#bae6fd' strokeWidth='0.5' opacity='0.85' />
            {/* Crown top-right bezel */}
            <polygon points='150,40 130,55 100,30' fill='url(#facet4)' stroke='#bae6fd' strokeWidth='0.5' opacity='0.75' />
            {/* Crown top peak */}
            <polygon points='70,55 130,55 100,30' fill='url(#tableGrad)' stroke='#bae6fd' strokeWidth='0.5' opacity='0.6' />

            {/* === GIRDLE (middle band) === */}
            <polygon points='30,70 170,70 175,78 25,78' fill='#0ea5e9' stroke='#0284c7' strokeWidth='0.8' opacity='0.9' />

            {/* === PAVILION (bottom) === */}
            {/* Left pavilion facet */}
            <polygon points='25,78 100,220 70,78' fill='url(#facet3)' stroke='#7dd3fc' strokeWidth='0.5' opacity='0.85' />
            {/* Center-left pavilion */}
            <polygon points='70,78 100,220 100,78' fill='url(#facet5)' stroke='#38bdf8' strokeWidth='0.5' opacity='0.9' />
            {/* Center-right pavilion */}
            <polygon points='100,78 100,220 130,78' fill='url(#facet1)' stroke='#38bdf8' strokeWidth='0.5' opacity='0.8' />
            {/* Right pavilion facet */}
            <polygon points='130,78 100,220 175,78' fill='url(#facet4)' stroke='#7dd3fc' strokeWidth='0.5' opacity='0.85' />

            {/* Light reflection lines */}
            <line x1='65' y1='60' x2='90' y2='50' stroke='white' strokeWidth='1.5' opacity='0.6' filter='url(#glow)' />
            <line x1='110' y1='48' x2='135' y2='58' stroke='white' strokeWidth='1' opacity='0.4' filter='url(#glow)' />

            {/* Sparkle highlights */}
            <circle cx='80' cy='52' r='2' fill='white' opacity='0.9' filter='url(#glow)' />
            <circle cx='120' cy='56' r='1.5' fill='white' opacity='0.7' filter='url(#glow)' />
            <circle cx='100' cy='42' r='1.5' fill='white' opacity='0.8' filter='url(#glow)' />
          </svg>
        </motion.div>
      </div>

      {/* Sparkle particles around diamond */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1.5 h-1.5 bg-white rounded-full'
          style={{
            boxShadow: '0 0 6px 2px rgba(56,189,248,0.8)',
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI) / 4) * 120, 0],
            y: [0, Math.sin((i * Math.PI) / 4) * 120, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Pressure washer spray hitting the diamond */}
      <div className='absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2'>
        {/* Nozzle */}
        <motion.div
          className='relative'
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {/* Wand */}
          <div className='w-16 md:w-24 h-3 bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-400 rounded-r-sm shadow-lg' />
          <div className='absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-neutral-400 to-neutral-300 rounded-full border border-neutral-500' />
        </motion.div>

        {/* Water spray cone */}
        <div className='absolute left-16 md:left-24 top-1/2 -translate-y-1/2'>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute rounded-full'
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: `rgba(56, 189, 248, ${0.4 + Math.random() * 0.5})`,
                boxShadow: '0 0 4px rgba(56,189,248,0.6)',
              }}
              animate={{
                x: [0, 40 + Math.random() * 60],
                y: [(i - 6) * 2, (i - 6) * (8 + Math.random() * 6)],
                opacity: [0.8, 0],
                scale: [1, 0.3],
              }}
              transition={{
                duration: 0.4 + Math.random() * 0.3,
                delay: i * 0.05,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Main water stream */}
          <motion.div
            className='absolute h-0.5 rounded-full'
            style={{
              width: '80px',
              background: 'linear-gradient(to right, rgba(56,189,248,0.8), rgba(56,189,248,0))',
              top: '-1px',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scaleY: [1, 1.5, 1],
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Water splash/mist from diamond */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`splash-${i}`}
          className='absolute rounded-full'
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            background: `rgba(186, 230, 253, ${0.3 + Math.random() * 0.4})`,
            boxShadow: '0 0 8px rgba(56,189,248,0.3)',
            left: '55%',
            top: '50%',
          }}
          animate={{
            x: [0, 30 + Math.random() * 50],
            y: [-20 + i * 8, -40 + i * 15 + Math.random() * 20],
            opacity: [0.7, 0],
            scale: [0.5, 1.5],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            delay: i * 0.1,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default SpinningDiamond;
