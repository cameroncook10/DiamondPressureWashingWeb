import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Driveway Cleaning',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Patio & Deck Restoration',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'House Siding',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Window & Gutter Cleaning',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Roof Soft Wash',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Commercial Properties',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
];

export const Services: React.FC = () => {
  return (
    <section id='services' className='w-full bg-slate-50 py-20 md:py-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center mb-14'>
          <span className='text-emerald-600 font-semibold text-sm tracking-widest uppercase'>
            OUR SERVICES
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 font-display'>
            What We Clean
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            From residential driveways to commercial storefronts, we handle it all with
            professional-grade equipment and care.
          </p>
        </div>

        {/* Service cards grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
              className='group relative rounded-xl overflow-hidden min-h-[250px] cursor-pointer'
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />

              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/80' />

              {/* Service title */}
              <div className='absolute inset-0 flex items-end p-6'>
                <h3 className='text-white text-xl font-bold'>{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-12'>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors duration-300'
          >
            Not sure what you need? Get a free estimate
            <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
