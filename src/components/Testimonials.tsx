import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

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
    <section
      id='testimonials'
      className='relative w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 overflow-hidden'
    >
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='text-center mb-12 md:mb-16'
        >
          <span className='inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-3'>
            Testimonials
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-display'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-neutral-600 max-w-2xl mx-auto'>
            Don't just take our word for it — hear from the people we've worked with across
            Richmond.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: '-60px' }}
              className='relative bg-white rounded-xl p-6 md:p-8 shadow-sm border border-neutral-100 hover:shadow-lg transition-shadow duration-300'
            >
              {/* Quote icon */}
              <div className='absolute -top-3 left-6 bg-blue-600 rounded-full p-2'>
                <Quote size={16} className='text-white' />
              </div>

              {/* Stars */}
              <div className='flex gap-1 mb-4 mt-2'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className='text-yellow-400'
                    fill='currentColor'
                  />
                ))}
              </div>

              {/* Review text */}
              <p className='text-neutral-700 leading-relaxed mb-6 text-sm'>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className='flex items-center gap-3 pt-4 border-t border-neutral-100'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm'>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className='font-semibold text-neutral-900 text-sm'>{testimonial.name}</p>
                  <p className='text-xs text-neutral-500'>{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center'
        >
          <div>
            <p className='text-3xl font-bold text-blue-600'>5.0</p>
            <div className='flex gap-0.5 justify-center my-1'>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className='text-yellow-400' fill='currentColor' />
              ))}
            </div>
            <p className='text-xs text-neutral-500'>Average Rating</p>
          </div>
          <div className='hidden sm:block w-px h-12 bg-neutral-200' />
          <div>
            <p className='text-3xl font-bold text-blue-600'>100%</p>
            <p className='text-xs text-neutral-500 mt-1'>Satisfaction Rate</p>
          </div>
          <div className='hidden sm:block w-px h-12 bg-neutral-200' />
          <div>
            <p className='text-3xl font-bold text-blue-600'>RVA</p>
            <p className='text-xs text-neutral-500 mt-1'>Proudly Local</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
