import React from 'react';
import { motion } from 'framer-motion';

interface PressureWasherAnimationProps {
  className?: string;
}

export const PressureWasherAnimation: React.FC<PressureWasherAnimationProps> = ({
  className = '',
}) => {
  const nozzleVariants = {
    animate: {
      x: [0, 300, 0],
      y: [0, 150, 0],
      rotate: [0, 45, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const sprayVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Pressure washer body */}
      <motion.svg
        className='absolute w-20 h-20'
        viewBox='0 0 100 100'
        initial={{ x: 0, y: 0 }}
      >
        {/* Machine body */}
        <rect x='20' y='50' width='60' height='30' fill='#075985' rx='4' />

        {/* Wheel left */}
        <circle cx='35' cy='85' r='8' fill='#0a0a0a' />

        {/* Wheel right */}
        <circle cx='65' cy='85' r='8' fill='#0a0a0a' />

        {/* Handle */}
        <path
          d='M 50 50 Q 45 30 50 10'
          stroke='#075985'
          strokeWidth='4'
          fill='none'
        />

        {/* Hose connection */}
        <line x1='75' y1='65' x2='85' y2='55' stroke='#075985' strokeWidth='3' />
      </motion.svg>

      {/* Animated nozzle */}
      <motion.div
        className='absolute w-4 h-4 bg-blue-600 rounded-full'
        variants={nozzleVariants}
        animate='animate'
        style={{
          top: '20px',
          left: '20px',
          filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.8))',
        }}
      >
        {/* Spray particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-300 rounded-full'
            variants={sprayVariants}
            animate='animate'
            style={{
              left: '6px',
              top: '6px',
              transition: {
                delay: i * 0.1,
              },
            }}
          />
        ))}
      </motion.div>

      {/* Water stream effect */}
      <motion.svg
        className='absolute'
        viewBox='0 0 400 300'
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.path
          d='M 50 50 Q 150 50 300 100'
          stroke='rgba(14, 165, 233, 0.5)'
          strokeWidth='3'
          fill='none'
          variants={nozzleVariants}
          animate='animate'
        />
      </motion.svg>
    </div>
  );
};

export default PressureWasherAnimation;
