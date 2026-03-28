import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Diamond } from './Diamond';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100'
          : 'bg-gradient-to-b from-neutral-50 to-white/80 backdrop-blur-sm'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo and brand */}
          <a href='#home' className='flex items-center space-x-3 flex-shrink-0'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='text-blue-600'
            >
              <Diamond size='sm' />
            </motion.div>
            <div>
              <h1 className='text-lg md:text-xl font-bold text-neutral-900 leading-tight'>
                Diamond Pressure Washing
              </h1>
              <p className='text-xs text-blue-600 font-medium hidden sm:block'>
                RVA Premium Cleaning
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='px-3 py-2 text-sm font-medium text-neutral-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop contact + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className='hidden md:flex items-center space-x-4'
          >
            <a
              href='tel:804-426-5663'
              className='flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition text-sm'
            >
              <Phone size={16} />
              <span className='font-semibold'>804-426-5663</span>
            </a>
            <a
              href='#contact'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition text-sm'
            >
              Free Quote
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className='lg:hidden p-2 rounded-md text-neutral-700 hover:bg-blue-50 transition'
            aria-label='Toggle menu'
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='lg:hidden bg-white border-t border-blue-100 shadow-lg overflow-hidden'
          >
            <div className='px-4 py-4 space-y-1'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className='block px-3 py-2 text-base font-medium text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition'
                >
                  {link.label}
                </a>
              ))}
              <div className='pt-3 border-t border-neutral-100 space-y-2'>
                <a
                  href='tel:804-426-5663'
                  className='flex items-center space-x-2 px-3 py-2 text-blue-600 font-semibold'
                >
                  <Phone size={18} />
                  <span>804-426-5663</span>
                </a>
                <a
                  href='mailto:diamondpressureservicesrva@gmail.com'
                  className='flex items-center space-x-2 px-3 py-2 text-blue-600 font-semibold'
                >
                  <Mail size={18} />
                  <span>diamondpressureservicesrva@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
