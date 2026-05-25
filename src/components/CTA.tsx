import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id='contact' className='w-full bg-sky-700 py-16 md:py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight font-display'>
          Ready to Get Your Place Looking Sharp?
        </h2>

        <p className='mt-5 text-lg text-sky-100 leading-relaxed'>
          No sales pitch. No hidden fees. Just honest work and solid results.
          Give us a call or send an email — we'll get back to you fast.
        </p>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left'>
          <a
            href='tel:804-426-5663'
            className='flex items-center gap-4 bg-white/10 text-white py-5 px-6 rounded-xl hover:bg-white/15 transition-colors duration-200'
          >
            <div className='bg-white/15 rounded-lg p-3'>
              <Phone size={24} />
            </div>
            <div>
              <p className='text-sm text-sky-200'>Call us</p>
              <p className='text-lg font-bold'>804-426-5663</p>
            </div>
          </a>

          <a
            href='mailto:diamondpressureservicesrva@gmail.com'
            className='flex items-center gap-4 bg-white/10 text-white py-5 px-6 rounded-xl hover:bg-white/15 transition-colors duration-200'
          >
            <div className='bg-white/15 rounded-lg p-3'>
              <Mail size={24} />
            </div>
            <div className='min-w-0'>
              <p className='text-sm text-sky-200'>Email us</p>
              <p className='text-sm font-bold truncate'>diamondpressureservicesrva@gmail.com</p>
            </div>
          </a>
        </div>

        <div className='mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left'>
          {['Free Estimates', 'Professional Service', 'Fully Insured', 'Satisfaction Guaranteed'].map((item) => (
            <div key={item} className='flex items-center gap-2 text-sky-200 text-sm'>
              <CheckCircle size={16} className='text-sky-300 flex-shrink-0' />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
