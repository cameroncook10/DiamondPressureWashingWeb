import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Diamond } from './Diamond';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative w-full bg-neutral-900 text-white py-12 md:py-16 overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 overflow-hidden opacity-5'>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-400'
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
            style={{
              left: `${i * 25}%`,
              bottom: '-10%',
            }}
          >
            <Diamond size='lg' animated={false} />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              <div className='text-blue-400'>
                <Diamond size='md' animated={false} />
              </div>
              <div>
                <h3 className='text-xl font-bold'>Diamond Pressure Washing</h3>
                <p className='text-sm text-neutral-400'>RVA Premium Cleaning</p>
              </div>
            </div>
            <p className='text-neutral-400 text-sm leading-relaxed'>
              Honest service. Quality results. No hassle. Just clean.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-4'
          >
            <h4 className='font-bold text-lg'>Services</h4>
            <ul className='space-y-2 text-sm text-neutral-400'>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Driveway Cleaning
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Patio & Deck
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  House Siding
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Window Cleaning
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Commercial
                </a>
              </li>
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
            <h4 className='font-bold text-lg'>Contact</h4>
            <div className='space-y-3 text-sm text-neutral-400'>
              <a
                href='tel:804-426-5663'
                className='flex items-center gap-3 hover:text-blue-400 transition'
              >
                <Phone size={18} className='text-blue-400' />
                <span>804-426-5663</span>
              </a>
              <a
                href='mailto:diamondpressureservicesrva@gmail.com'
                className='flex items-center gap-3 hover:text-blue-400 transition'
              >
                <Mail size={18} className='text-blue-400' />
                <span>diamondpressureservicesrva@gmail.com</span>
              </a>
              <div className='flex items-start gap-3'>
                <MapPin size={18} className='text-blue-400 flex-shrink-0 mt-1' />
                <span>Richmond, Virginia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className='h-px bg-neutral-700 mb-8'
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-400 space-y-4 sm:space-y-0'
        >
          <p>&copy; {currentYear} Diamond Pressure Washing. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-blue-400 transition'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-blue-400 transition'>
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
