import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Short Pump, VA',
    text: "Our driveway hadn't been cleaned in years. Diamond Pressure Washing made it look brand new in just a couple hours. Super professional and easy to work with!",
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Midlothian, VA',
    text: "I was impressed by how thorough and careful they were. They didn't just blast everything — they took their time and did it right. My deck looks amazing.",
    rating: 5,
  },
  {
    name: 'Linda K.',
    location: 'Glen Allen, VA',
    text: 'Finally found someone reliable. They showed up on time, did great work on our siding, and the price was exactly what they quoted. No surprises.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id='testimonials' className='w-full bg-slate-50 py-16 md:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='text-center mb-12 md:mb-16'
        >
          <span className='inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3'>
            Testimonials
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            Don't just take our word for it — hear from the people we've worked with across
            Richmond.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '-60px' }}
              className='bg-white rounded-xl shadow-md p-8'
            >
              {/* Stars */}
              <div className='flex gap-1 mb-5'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className='text-amber-400'
                    fill='currentColor'
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className='text-slate-700 italic leading-relaxed mb-6'>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <hr className='border-slate-200 mb-5' />

              {/* Author */}
              <div>
                <p className='font-bold text-slate-900'>{testimonial.name}</p>
                <p className='text-sm text-slate-500'>{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 text-center'
        >
          <div className='px-8'>
            <p className='text-2xl font-bold text-slate-900'>5.0</p>
            <p className='text-sm text-slate-500'>Average Rating</p>
          </div>

          <div className='hidden sm:block w-px h-10 bg-slate-300' />

          <div className='px-8'>
            <p className='text-2xl font-bold text-slate-900'>100%</p>
            <p className='text-sm text-slate-500'>Satisfaction</p>
          </div>

          <div className='hidden sm:block w-px h-10 bg-slate-300' />

          <div className='px-8'>
            <p className='text-2xl font-bold text-slate-900'>Serving RVA</p>
            <p className='text-sm text-slate-500'>Richmond, Virginia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
