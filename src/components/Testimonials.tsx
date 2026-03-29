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

const floatingOrbs = [
  { size: 180, x: '10%', y: '15%', delay: 0, duration: 18 },
  { size: 120, x: '80%', y: '25%', delay: 3, duration: 22 },
  { size: 90, x: '50%', y: '70%', delay: 6, duration: 20 },
  { size: 140, x: '25%', y: '80%', delay: 2, duration: 16 },
  { size: 60, x: '70%', y: '60%', delay: 8, duration: 24 },
  { size: 100, x: '90%', y: '85%', delay: 4, duration: 19 },
];

export const Testimonials: React.FC = () => {
  return (
    <section
      id='testimonials'
      className='relative w-full bg-gradient-to-b from-slate-900 to-blue-950 py-16 md:py-24 overflow-hidden'
    >
      {/* Floating light orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className='absolute rounded-full pointer-events-none'
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 50%, transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            scale: [1, 1.15, 0.95, 1.1, 1],
            opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className='text-center mb-12 md:mb-16'
        >
          <motion.span
            className='inline-block text-blue-400 font-semibold text-sm tracking-wider uppercase mb-3'
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            Testimonials
          </motion.span>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 font-display'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-blue-100/70 max-w-2xl mx-auto'>
            Don't just take our word for it — hear from the people we've worked with across
            Richmond.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className='group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500'
            >
              {/* Subtle card glow on hover */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-transparent to-blue-400/0 group-hover:from-blue-500/5 group-hover:to-blue-400/5 transition-all duration-500 pointer-events-none' />

              {/* Quote icon with blue glow */}
              <div className='absolute -top-3 left-6'>
                <motion.div
                  className='relative bg-blue-600/80 backdrop-blur-sm rounded-full p-2 shadow-lg shadow-blue-500/30'
                  animate={{ boxShadow: ['0 4px 20px rgba(59,130,246,0.3)', '0 4px 30px rgba(59,130,246,0.5)', '0 4px 20px rgba(59,130,246,0.3)'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                >
                  <Quote size={16} className='text-white' />
                </motion.div>
              </div>

              {/* Stars with shimmer */}
              <div className='flex gap-1 mb-4 mt-2'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.15 + index * 0.3,
                    }}
                  >
                    <Star
                      size={16}
                      className='text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]'
                      fill='currentColor'
                    />
                  </motion.div>
                ))}
              </div>

              {/* Review text */}
              <p className='relative z-10 text-blue-100/80 leading-relaxed mb-6 text-sm'>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className='relative z-10 flex items-center gap-3 pt-4 border-t border-white/10'>
                {/* Avatar with glowing blue ring */}
                <motion.div
                  className='relative'
                  animate={{
                    boxShadow: ['0 0 8px rgba(59,130,246,0.3)', '0 0 16px rgba(59,130,246,0.5)', '0 0 8px rgba(59,130,246,0.3)'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  style={{ borderRadius: '50%' }}
                >
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm ring-2 ring-blue-400/50'>
                    {testimonial.name.charAt(0)}
                  </div>
                </motion.div>
                <div>
                  <p className='font-semibold text-white text-sm'>{testimonial.name}</p>
                  <p className='text-xs text-neutral-400'>{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof stats in glass pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center'
        >
          {/* 5.0 Rating pill */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3'
          >
            <p className='text-2xl font-bold text-blue-400'>5.0</p>
            <div>
              <div className='flex gap-0.5 justify-center'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className='text-amber-400' fill='currentColor' />
                ))}
              </div>
              <p className='text-xs text-neutral-400 mt-0.5'>Average Rating</p>
            </div>
          </motion.div>

          {/* Glass divider */}
          <div className='hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent' />

          {/* Satisfaction pill */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3'
          >
            <p className='text-2xl font-bold text-blue-400'>100%</p>
            <p className='text-xs text-neutral-400 mt-0.5'>Satisfaction Rate</p>
          </motion.div>

          {/* Glass divider */}
          <div className='hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent' />

          {/* Local pill */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3'
          >
            <p className='text-2xl font-bold text-blue-400'>RVA</p>
            <p className='text-xs text-neutral-400 mt-0.5'>Proudly Local</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
