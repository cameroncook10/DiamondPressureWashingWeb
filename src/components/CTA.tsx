import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Diamond } from './Diamond';

export const CTA: React.FC = () => {
  return (
    <section className='relative w-full bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-24 overflow-hidden'>
      {/* Animated diamond background */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-white opacity-10'
            animate={{
              y: [0, -50, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Diamond size='lg' animated={false} className='text-white' />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='space-y-8'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            Ready to Get Your Place Looking Sharp?
          </h2>

          <p className='text-xl text-blue-100 max-w-2xl mx-auto'>
            No sales pitch. No hidden fees. Just honest work and solid results. Let's make your
            place look like new again, without any of the stress.
          </p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center pt-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Call button */}
            <motion.a
              href='tel:804-426-5663'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center justify-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg'
            >
              <Phone size={24} />
              <span>Call Now: 804-426-5663</span>
            </motion.a>

            {/* Email button */}
            <motion.a
              href='mailto:diamondpressureservicesrva@gmail.com'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center justify-center gap-3 bg-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-400 transition duration-300 border-2 border-white'
            >
              <Mail size={24} />
              <span>Email Us</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className='pt-8 space-y-4 text-blue-100'
          >
            <div className='flex items-center justify-center gap-2 flex-wrap'>
              <span>✓ Free Estimates</span>
              <span>✓ Professional Service</span>
              <span>✓ Fully Insured</span>
              <span>✓ Satisfaction Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
