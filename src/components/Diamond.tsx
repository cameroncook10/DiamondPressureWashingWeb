import React from 'react';
import { motion } from 'framer-motion';

interface DiamondProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

export const Diamond: React.FC<DiamondProps> = ({
  size = 'md',
  animated = true,
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
  };

  const diamondVariants = {
    initial: { opacity: 0.7, scale: 1 },
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.05, 1],
    },
  };

  return (
    <motion.svg
      className={`${sizeMap[size]} ${className}`}
      viewBox='0 0 100 100'
      variants={animated ? diamondVariants : undefined}
      initial='initial'
      animate={animated ? 'animate' : undefined}
      transition={{ duration: 3, repeat: Infinity }}
    >
      {/* Diamond outline */}
      <g fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
        {/* Top facets */}
        <line x1='50' y1='10' x2='35' y2='30' className='stroke-blue-300' />
        <line x1='50' y1='10' x2='65' y2='30' className='stroke-blue-400' />

        {/* Upper left facet */}
        <polygon
          points='35,30 50,10 50,50'
          fill='#e0f2fe'
          opacity='0.6'
          className='stroke-blue-500'
        />

        {/* Upper right facet */}
        <polygon
          points='65,30 50,10 50,50'
          fill='#0ea5e9'
          opacity='0.4'
          className='stroke-blue-600'
        />

        {/* Lower left facet */}
        <polygon
          points='35,30 50,50 35,70'
          fill='#ffffff'
          opacity='0.8'
          className='stroke-slate-200'
        />

        {/* Lower right facet */}
        <polygon
          points='65,30 50,50 65,70'
          fill='#0ea5e9'
          opacity='0.6'
          className='stroke-blue-500'
        />

        {/* Bottom facets */}
        <line x1='50' y1='90' x2='35' y2='70' className='stroke-blue-300' />
        <line x1='50' y1='90' x2='65' y2='70' className='stroke-blue-400' />
      </g>
    </motion.svg>
  );
};

export default Diamond;
