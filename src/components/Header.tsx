import React, { useState, useEffect } from 'react';
import { Droplets, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <a href='#home' className='flex items-center gap-2 flex-shrink-0'>
            <Droplets
              size={28}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-emerald-600' : 'text-emerald-400'
              }`}
            />
            <span
              className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Diamond Pressure Washing
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className='hidden lg:flex items-center gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  scrolled
                    ? 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop phone + CTA */}
          <div className='hidden md:flex items-center gap-4'>
            <a
              href='tel:804-426-5663'
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                scrolled
                  ? 'text-slate-700 hover:text-emerald-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <Phone size={16} />
              <span>804-426-5663</span>
            </a>
            <a
              href='#contact'
              className='inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200'
            >
              Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled
                ? 'text-slate-700 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label='Toggle menu'
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='bg-white border-t border-slate-100 shadow-lg'>
          <div className='px-4 py-3 space-y-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className='block px-4 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200'
              >
                {link.label}
              </a>
            ))}
            <div className='pt-3 border-t border-slate-100 space-y-2'>
              <a
                href='tel:804-426-5663'
                className='flex items-center gap-3 px-4 py-3 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200'
              >
                <Phone size={18} />
                <span>804-426-5663</span>
              </a>
              <a
                href='#contact'
                onClick={() => setMobileOpen(false)}
                className='flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition-all duration-200'
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
