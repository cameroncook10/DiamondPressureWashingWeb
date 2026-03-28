import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, Send, CheckCircle } from 'lucide-react';
import { Diamond } from './Diamond';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(`Free Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:diamondpressureservicesrva@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id='contact'
      className='relative w-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 py-16 md:py-24 overflow-hidden'
    >
      {/* Animated diamond background */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-white opacity-5'
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${(i * 15) % 100}%`,
            }}
          >
            <Diamond size='lg' animated={false} className='text-white' />
          </motion.div>
        ))}
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left - Text & contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight font-display'>
              Ready to Get Your Place Looking Sharp?
            </h2>

            <p className='text-lg text-blue-100 leading-relaxed'>
              No sales pitch. No hidden fees. Just honest work and solid results. Fill out the form
              or give us a call — we'll get back to you fast.
            </p>

            <div className='space-y-4 pt-4'>
              {/* Call button */}
              <motion.a
                href='tel:804-426-5663'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition duration-300 border border-white/20'
              >
                <div className='bg-white/20 rounded-lg p-2.5'>
                  <Phone size={22} />
                </div>
                <div>
                  <p className='text-sm text-blue-200'>Call us now</p>
                  <p className='text-lg font-bold'>804-426-5663</p>
                </div>
              </motion.a>

              {/* Email button */}
              <motion.a
                href='mailto:diamondpressureservicesrva@gmail.com'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition duration-300 border border-white/20'
              >
                <div className='bg-white/20 rounded-lg p-2.5'>
                  <Mail size={22} />
                </div>
                <div>
                  <p className='text-sm text-blue-200'>Email us</p>
                  <p className='text-sm font-bold'>diamondpressureservicesrva@gmail.com</p>
                </div>
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className='flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-blue-200'>
              {['Free Estimates', 'Professional Service', 'Fully Insured', 'Satisfaction Guaranteed'].map((item) => (
                <span key={item} className='flex items-center gap-1.5'>
                  <CheckCircle size={14} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className='bg-white rounded-2xl p-6 md:p-8 shadow-2xl space-y-4'
            >
              <h3 className='text-xl font-bold text-neutral-900 mb-1'>Get a Free Quote</h3>
              <p className='text-sm text-neutral-500 mb-4'>
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <div>
                <label htmlFor='name' className='block text-sm font-medium text-neutral-700 mb-1'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-neutral-900'
                  placeholder='Your name'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-neutral-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-neutral-900'
                    placeholder='you@email.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-neutral-700 mb-1'
                  >
                    Phone
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition text-neutral-900'
                    placeholder='(804) 000-0000'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-neutral-700 mb-1'
                >
                  What do you need cleaned?
                </label>
                <textarea
                  id='message'
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none text-neutral-900'
                  placeholder='Tell us about your project...'
                />
              </div>

              <button
                type='submit'
                className='w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-600/25'
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Request
                  </>
                )}
              </button>

              <p className='text-xs text-neutral-400 text-center'>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
