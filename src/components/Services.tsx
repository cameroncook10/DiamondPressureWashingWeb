import React from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ui/shiny-button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Driveway & Walkway Cleaning',
    blurb: 'Concrete, pavers, stamped, brick. Lifts oil, rust, mildew.',
    image:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Patio & Deck Restoration',
    blurb: 'Wood-safe pressures. Brings tired decks back to life.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brick & Vinyl Siding',
    blurb: "Soft-wash for Richmond's classic Colonials and modern builds.",
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Window & Gutter Cleaning',
    blurb: 'Streak-free glass. Gutters flushed and flowing.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Roof Soft Wash',
    blurb: 'Never blasted — gentle on shingles, brutal on algae.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Storefronts & Commercial',
    blurb: 'Restaurants, retail, HOAs. After-hours scheduling.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Airport & Hangar Cleaning',
    blurb: 'RIC hangar floors, jet-bridge glass, taxi-line restoration.',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fleet & Heavy Equipment',
    blurb: 'Trucks, trailers, construction iron — degreased and rinsed.',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
];

export const Services: React.FC = () => {
  return (
    <section id='services' className='w-full bg-slate-50 py-20 md:py-28'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div className='text-center mb-14'>
          <span className='text-sky-600 font-semibold text-sm tracking-widest uppercase'>
            OUR SERVICES
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 font-display'>
            What We Clean
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            From Short Pump driveways to RIC Airport hangars, we handle Richmond's
            toughest exterior jobs with professional-grade gear and a steady hand.
          </p>
        </div>

        {/* Service cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
              viewport={{ once: true, margin: '-40px' }}
              className='group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer ring-1 ring-slate-200/60 shadow-card hover:shadow-card-hover'
              style={{ contain: 'layout paint' }}
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                loading='lazy'
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
              />

              {/* Constant base gradient — always-on legibility for the title */}
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent' />

              {/* Glassmorphic reveal panel — slides up on hover */}
              <div className='absolute inset-x-3 bottom-3 translate-y-[55%] group-hover:translate-y-0 transition-transform duration-500 ease-out'>
                <div className='rounded-xl bg-white/12 backdrop-blur-xl border border-white/25 p-4 shadow-lg'>
                  <div className='flex items-center justify-between gap-2'>
                    <h3 className='text-white text-base md:text-lg font-bold leading-tight'>
                      {service.title}
                    </h3>
                    <span className='inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-sky-500/90 text-white transition-transform duration-300 group-hover:translate-x-0.5'>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                  <p className='mt-2 text-sm text-white/80 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    {service.blurb}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-12'>
          <ShinyButton
            onClick={() => (window.location.href = '#contact')}
            className='bg-sky-600 text-white text-base py-3 px-7 shadow-md hover:shadow-lg'
          >
            <span className='flex items-center gap-2'>
              Not sure what you need? Get a free estimate
              <ArrowRight size={16} />
            </span>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
