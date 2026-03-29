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
    <section id='contact' className='w-full bg-emerald-700 py-16 md:py-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* Left - Text & contact info */}
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight font-display'>
              Ready to Get Your Place Looking Sharp?
            </h2>

            <p className='text-lg text-emerald-100 leading-relaxed'>
              No sales pitch. No hidden fees. Just honest work and solid results. Fill out the form
              or give us a call — we'll get back to you fast.
            </p>

            <div className='space-y-3 pt-4'>
              {/* Call card */}
              <a
                href='tel:804-426-5663'
                className='flex items-center gap-4 bg-white/10 text-white py-4 px-5 rounded-xl hover:bg-white/15 transition-colors duration-200'
              >
                <div className='bg-white/15 rounded-lg p-2.5'>
                  <Phone size={22} />
                </div>
                <div>
                  <p className='text-sm text-emerald-200'>Call us now</p>
                  <p className='text-lg font-bold'>804-426-5663</p>
                </div>
              </a>

              {/* Email card */}
              <a
                href='mailto:diamondpressureservicesrva@gmail.com'
                className='flex items-center gap-4 bg-white/10 text-white py-4 px-5 rounded-xl hover:bg-white/15 transition-colors duration-200'
              >
                <div className='bg-white/15 rounded-lg p-2.5'>
                  <Mail size={22} />
                </div>
                <div>
                  <p className='text-sm text-emerald-200'>Email us</p>
                  <p className='text-sm font-bold'>diamondpressureservicesrva@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className='grid grid-cols-2 gap-3 pt-4'>
              {['Free Estimates', 'Professional Service', 'Fully Insured', 'Satisfaction Guaranteed'].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-2 text-emerald-200 text-sm'
                >
                  <CheckCircle size={16} className='text-emerald-300 flex-shrink-0' />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className='bg-white rounded-2xl shadow-2xl p-6 md:p-8 space-y-5'
            >
              <div>
                <h3 className='text-2xl font-bold text-slate-900 mb-1'>Get a Free Quote</h3>
                <p className='text-sm text-slate-500'>
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>

              <div>
                <label htmlFor='name' className='block text-sm font-medium text-slate-700 mb-1'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-slate-900 placeholder-slate-400'
                  placeholder='Your name'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-slate-700 mb-1'>
                    Email
                  </label>
                  <input
                    id='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-slate-900 placeholder-slate-400'
                    placeholder='you@email.com'
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-slate-700 mb-1'>
                    Phone
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className='w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 text-slate-900 placeholder-slate-400'
                    placeholder='(804) 000-0000'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium text-slate-700 mb-1'>
                  What do you need cleaned?
                </label>
                <textarea
                  id='message'
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-200 resize-none text-slate-900 placeholder-slate-400'
                  placeholder='Tell us about your project...'
                />
              </div>

              <button
                type='submit'
                className='w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200'
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

              <p className='text-xs text-slate-400 text-center'>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
