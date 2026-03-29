import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      className='relative w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-16 md:py-24 overflow-hidden'
    >
      {/* Animated light streaks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute pointer-events-none'
          style={{
            width: '1px',
            height: `${80 + i * 40}px`,
            left: `${12 + i * 16}%`,
            top: '-10%',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)',
            transformOrigin: 'top center',
          }}
          animate={{
            y: ['0%', '800%'],
            opacity: [0, 0.6, 0],
            rotate: [15 + i * 3, 15 + i * 3],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 1.8,
          }}
        />
      ))}

      {/* Ambient glow orbs */}
      <motion.div
        className='absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none'
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left - Text & contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
              {/* Call button - glass card with icon glow */}
              <motion.a
                href='tel:804-426-5663'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='group flex items-center gap-4 bg-white/10 backdrop-blur-md text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30'
              >
                <motion.div
                  className='bg-white/15 backdrop-blur-sm rounded-lg p-2.5 group-hover:bg-white/25 transition-all duration-300'
                  animate={{
                    boxShadow: ['0 0 10px rgba(96,165,250,0.2)', '0 0 20px rgba(96,165,250,0.4)', '0 0 10px rgba(96,165,250,0.2)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Phone size={22} />
                </motion.div>
                <div>
                  <p className='text-sm text-blue-200'>Call us now</p>
                  <p className='text-lg font-bold'>804-426-5663</p>
                </div>
              </motion.a>

              {/* Email button - glass card with icon glow */}
              <motion.a
                href='mailto:diamondpressureservicesrva@gmail.com'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className='group flex items-center gap-4 bg-white/10 backdrop-blur-md text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 hover:border-white/30'
              >
                <motion.div
                  className='bg-white/15 backdrop-blur-sm rounded-lg p-2.5 group-hover:bg-white/25 transition-all duration-300'
                  animate={{
                    boxShadow: ['0 0 10px rgba(96,165,250,0.2)', '0 0 20px rgba(96,165,250,0.4)', '0 0 10px rgba(96,165,250,0.2)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <Mail size={22} />
                </motion.div>
                <div>
                  <p className='text-sm text-blue-200'>Email us</p>
                  <p className='text-sm font-bold'>diamondpressureservicesrva@gmail.com</p>
                </div>
              </motion.a>
            </div>

            {/* Trust indicators in glass pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className='flex flex-wrap gap-2 pt-4'
            >
              {['Free Estimates', 'Professional Service', 'Fully Insured', 'Satisfaction Guaranteed'].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className='inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5 text-xs text-blue-100'
                >
                  <CheckCircle size={12} className='text-blue-300' />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Contact form with strong glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className='relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4'
            >
              {/* Form inner glow */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-blue-400/5 pointer-events-none' />

              <div className='relative z-10 space-y-4'>
                <h3 className='text-xl font-bold text-white mb-1'>Get a Free Quote</h3>
                <p className='text-sm text-blue-200/80 mb-4'>
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>

                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-blue-100 mb-1'>
                    Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 text-white placeholder-white/30'
                    placeholder='Your name'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-blue-100 mb-1'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 text-white placeholder-white/30'
                      placeholder='you@email.com'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-blue-100 mb-1'
                    >
                      Phone
                    </label>
                    <input
                      id='phone'
                      type='tel'
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 text-white placeholder-white/30'
                      placeholder='(804) 000-0000'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-blue-100 mb-1'
                  >
                    What do you need cleaned?
                  </label>
                  <textarea
                    id='message'
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 resize-none text-white placeholder-white/30'
                    placeholder='Tell us about your project...'
                  />
                </div>

                {/* Submit button with animated gradient */}
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative w-full flex items-center justify-center gap-2 text-white font-bold py-3 px-6 rounded-lg overflow-hidden shadow-lg shadow-blue-600/30 transition-all duration-300'
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className='absolute inset-0'
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8, #3b82f6)',
                      backgroundSize: '300% 300%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className='relative z-10 flex items-center gap-2'>
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
                  </span>
                </motion.button>

                <p className='text-xs text-white/40 text-center'>
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
