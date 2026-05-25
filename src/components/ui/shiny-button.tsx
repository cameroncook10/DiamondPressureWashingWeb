'use client';

import React from 'react';
import { motion, type AnimationProps } from 'framer-motion';

import { cn } from '@/lib/utils';

const animationProps: AnimationProps = {
  initial: { '--x': '100%', scale: 0.95 } as any,
  animate: { '--x': '-100%', scale: 1 } as any,
  whileTap: { scale: 0.97 } as any,
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg px-6 py-2 font-semibold backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_24px_hsl(var(--primary)/35%)]',
        className
      )}
    >
      <span
        className="relative z-20 flex items-center justify-center gap-2 size-full text-sm uppercase tracking-wider"
        style={{
          maskImage:
            'linear-gradient(-75deg,hsl(var(--primary-foreground)) calc(var(--x) + 20%),hsl(var(--primary-foreground) / 60%) calc(var(--x) + 30%),hsl(var(--primary-foreground)) calc(var(--x) + 100%))',
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
          WebkitMask:
            'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/15%)_calc(var(--x)+20%),hsl(var(--primary)/80%)_calc(var(--x)+25%),hsl(var(--primary)/15%)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
};

export default { ShinyButton };
