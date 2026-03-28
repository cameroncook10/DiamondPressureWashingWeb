import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Diamond } from './Diamond';

export const Header: React.FC = () => {
  return (
    <header className='relative w-full bg-gradient-to-b from-neutral-50 to-white border-b border-blue-100'>
      {/* Diamond background pattern */}
      <div className='absolute inset-0 opacity-5 overflow-hidden'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-blue-400'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
            }}
            style={{
              right: `${i * 15}%`,
              top: `${(i % 3) * 30}%`,
            }}
          >
            <Diamond size='lg' animated={false} />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo and brand */}
          <div className='flex items-center space-x-4'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='text-blue-600'
            >
              <Diamond size='md' />
            </motion.div>

            <div>
              <h1 className='text-3xl font-bold text-neutral-900'>
                Diamond Pressure Washing
              </h1>
              <p className='text-blue-600 font-medium'>RVA Premium Cleaning Services</p>
            </div>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className='hidden md:flex items-center space-x-6'
          >
            <a
              href='tel:804-426-5663'
              className='flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition'
            >
              <Phone size={20} />
              <span className='font-semibold'>804-426-5663</span>
            </a>
            <a
              href='mailto:diamondpressureservicesrva@gmail.com'
              className='flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition'
            >
              <Mail size={20} />
              <span className='font-semibold'>Email Us</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile contact */}
        <div className='md:hidden mt-4 flex flex-col space-y-2'>
          <a
            href='tel:804-426-5663'
            className='text-sm text-blue-600 hover:text-blue-700 font-semibold'
          >
            📞 804-426-5663
          </a>
          <a
            href='mailto:diamondpressureservicesrva@gmail.com'
            className='text-sm text-blue-600 hover:text-blue-700 font-semibold'
          >
            📧 diamondpressureservicesrva@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
