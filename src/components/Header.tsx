import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, Phone, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#principles' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-blue-900/5'
          : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      {/* Animated gradient shimmer border at bottom */}
      <div className='absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden'>
        <motion.div
          className='h-full w-[200%]'
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(59,130,246,0.1), rgba(56,189,248,0.4), rgba(147,197,253,0.6), rgba(56,189,248,0.4), rgba(59,130,246,0.1), transparent)',
          }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo and brand */}
          <a href='#home' className='flex items-center space-x-3 flex-shrink-0 group'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
              className='relative'
            >
              {/* Pulse ring behind icon */}
              <motion.div
                className='absolute inset-0 rounded-full bg-blue-400/20'
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className='relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl p-2 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300'>
                <Droplets size={22} className='text-white' />
              </div>
            </motion.div>
            <div>
              <h1 className='text-lg md:text-xl font-bold text-neutral-900 leading-tight tracking-tight'>
                Diamond Pressure Washing
              </h1>
              <p className='text-xs text-blue-500 font-medium hidden sm:flex items-center gap-1'>
                <Sparkles size={10} className='text-cyan-400' />
                RVA Premium Cleaning
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className='relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-blue-600 rounded-full transition-all duration-300 hover:bg-blue-50/80 hover:shadow-sm'
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop contact + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='hidden md:flex items-center space-x-4'
          >
            <a
              href='tel:804-426-5663'
              className='flex items-center space-x-2 text-neutral-600 hover:text-blue-600 transition-colors duration-300 text-sm group'
            >
              <div className='p-1.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300'>
                <Phone size={14} className='text-blue-500' />
              </div>
              <span className='font-semibold'>804-426-5663</span>
            </a>

            {/* Glowing Free Quote button */}
            <motion.a
              href='#contact'
              className='relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]'
              whileTap={{ scale: 0.97 }}
            >
              {/* Glow pulse */}
              <motion.div
                className='absolute inset-0 rounded-full bg-blue-400/30'
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <Sparkles size={15} className='relative z-10' />
              <span className='relative z-10 text-sm'>Free Quote</span>
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='lg:hidden p-2.5 rounded-xl text-neutral-700 hover:bg-blue-50/80 transition-colors duration-300 backdrop-blur-sm'
            aria-label='Toggle menu'
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode='wait'>
              {mobileOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{
              opacity: 1,
              height: 'auto',
              y: 0,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, delay: 0.1 },
                y: { duration: 0.3, type: 'spring', stiffness: 300, damping: 30 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -10,
              transition: {
                height: { duration: 0.3, ease: 'easeInOut' },
                opacity: { duration: 0.2 },
              },
            }}
            className='lg:hidden bg-white/80 backdrop-blur-xl border-t border-blue-100/50 shadow-xl overflow-hidden'
          >
            <div className='px-4 py-4 space-y-1'>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  className='block px-4 py-3 text-base font-medium text-neutral-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all duration-300'
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 25 }}
                className='pt-3 border-t border-blue-100/50 space-y-2'
              >
                <a
                  href='tel:804-426-5663'
                  className='flex items-center space-x-3 px-4 py-3 text-blue-600 font-semibold rounded-xl hover:bg-blue-50/60 transition-all duration-300'
                >
                  <div className='p-2 rounded-full bg-blue-50'>
                    <Phone size={16} className='text-blue-500' />
                  </div>
                  <span>804-426-5663</span>
                </a>
                <a
                  href='mailto:diamondpressureservicesrva@gmail.com'
                  className='flex items-center space-x-3 px-4 py-3 text-blue-600 font-semibold rounded-xl hover:bg-blue-50/60 transition-all duration-300'
                >
                  <div className='p-2 rounded-full bg-blue-50'>
                    <Mail size={16} className='text-blue-500' />
                  </div>
                  <span className='text-sm'>diamondpressureservicesrva@gmail.com</span>
                </a>
                <a
                  href='#contact'
                  onClick={() => setMobileOpen(false)}
                  className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300'
                >
                  <Sparkles size={16} />
                  Get Your Free Quote
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
