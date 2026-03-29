import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative w-full bg-slate-950 text-white overflow-hidden'>
      {/* Animated gradient line at top */}
      <motion.div
        className='absolute top-0 left-0 right-0 h-px'
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(147,197,253,0.6), rgba(59,130,246,0.5), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Fade-in gradient overlay from top */}
      <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-950/30 to-transparent pointer-events-none' />

      {/* Subtle ambient glow */}
      <motion.div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.03) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <div className='flex items-center space-x-3'>
              <motion.div
                className='text-blue-400'
                animate={{
                  filter: ['drop-shadow(0 0 4px rgba(96,165,250,0.3))', 'drop-shadow(0 0 8px rgba(96,165,250,0.5))', 'drop-shadow(0 0 4px rgba(96,165,250,0.3))'],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Droplets size={28} />
              </motion.div>
              <div>
                <h3 className='text-xl font-bold text-white'>Diamond Pressure Washing</h3>
                <p className='text-sm text-neutral-400'>RVA Premium Cleaning</p>
              </div>
            </div>
            <p className='text-neutral-400 text-sm leading-relaxed'>
              Honest service. Quality results. No hassle. Just clean.
            </p>

            {/* Serving Richmond badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mt-2'
            >
              <MapPin size={14} className='text-blue-400' />
              <span className='text-xs text-blue-200/80'>Proudly Serving Richmond, VA</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h4 className='font-bold text-lg text-white'>Services</h4>
            <ul className='space-y-2 text-sm text-neutral-400'>
              {['Driveway Cleaning', 'Patio & Deck', 'House Siding', 'Window Cleaning', 'Commercial'].map((service) => (
                <li key={service}>
                  <a
                    href='#'
                    className='inline-block hover:text-blue-400 transition-all duration-300 hover:translate-x-1 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]'
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h4 className='font-bold text-lg text-white'>Contact</h4>
            <div className='space-y-3 text-sm text-neutral-400'>
              <a
                href='tel:804-426-5663'
                className='group flex items-center gap-3 hover:text-blue-400 transition-all duration-300'
              >
                <motion.div
                  animate={{
                    filter: ['drop-shadow(0 0 3px rgba(96,165,250,0.2))', 'drop-shadow(0 0 6px rgba(96,165,250,0.4))', 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Phone size={18} className='text-blue-400' />
                </motion.div>
                <span className='group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.3)] transition-all duration-300'>804-426-5663</span>
              </a>
              <a
                href='mailto:diamondpressureservicesrva@gmail.com'
                className='group flex items-center gap-3 hover:text-blue-400 transition-all duration-300'
              >
                <motion.div
                  animate={{
                    filter: ['drop-shadow(0 0 3px rgba(96,165,250,0.2))', 'drop-shadow(0 0 6px rgba(96,165,250,0.4))', 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Mail size={18} className='text-blue-400' />
                </motion.div>
                <span className='group-hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.3)] transition-all duration-300'>diamondpressureservicesrva@gmail.com</span>
              </a>
              <div className='flex items-start gap-3'>
                <motion.div
                  animate={{
                    filter: ['drop-shadow(0 0 3px rgba(96,165,250,0.2))', 'drop-shadow(0 0 6px rgba(96,165,250,0.4))', 'drop-shadow(0 0 3px rgba(96,165,250,0.2))'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                  <MapPin size={18} className='text-blue-400 flex-shrink-0 mt-1' />
                </motion.div>
                <span>Richmond, Virginia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Glass divider with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className='h-px mb-8'
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(255,255,255,0.1), rgba(59,130,246,0.3), transparent)',
          }}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-500 space-y-4 sm:space-y-0'
        >
          <p>&copy; {currentYear} Diamond Pressure Washing. All rights reserved.</p>
          <div className='flex gap-6'>
            <a
              href='#'
              className='hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]'
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into darkness */}
      <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none' />
    </footer>
  );
};

export default Footer;
