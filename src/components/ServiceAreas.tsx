import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane } from 'lucide-react';

// Richmond-area neighborhoods + key landmarks. Order is intentional —
// alternating size/weight in the chip cloud breaks the monotony.
const areas = [
  { name: 'Short Pump', tier: 'primary' },
  { name: 'Glen Allen', tier: 'primary' },
  { name: 'Midlothian', tier: 'primary' },
  { name: 'The Fan', tier: 'secondary' },
  { name: 'Church Hill', tier: 'secondary' },
  { name: 'Mechanicsville', tier: 'primary' },
  { name: 'Henrico', tier: 'primary' },
  { name: 'Chesterfield', tier: 'primary' },
  { name: 'Ashland', tier: 'secondary' },
  { name: 'Powhatan', tier: 'secondary' },
  { name: 'Bon Air', tier: 'secondary' },
  { name: 'Tuckahoe', tier: 'secondary' },
  { name: 'Innsbrook', tier: 'secondary' },
  { name: 'Scott’s Addition', tier: 'secondary' },
  { name: 'Manchester', tier: 'secondary' },
  { name: 'Carytown', tier: 'secondary' },
  { name: 'West End', tier: 'primary' },
  { name: 'Hanover County', tier: 'secondary' },
] as const;

// Marquee row — keeps the eye moving so the section never reads as static.
const MarqueeRow: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className='relative overflow-hidden py-3 mask-fade-x'>
    <div
      className={`flex gap-3 whitespace-nowrap ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      }`}
      style={{ width: 'max-content' }}
    >
      {[...items, ...items].map((label, i) => (
        <span
          key={`${label}-${i}`}
          className='inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm'
        >
          <span className='inline-block w-1.5 h-1.5 rounded-full bg-sky-400' />
          {label}
        </span>
      ))}
    </div>
  </div>
);

export const ServiceAreas: React.FC = () => {
  const top = areas.filter((a) => a.tier === 'primary').map((a) => a.name);
  const bot = areas.filter((a) => a.tier === 'secondary').map((a) => a.name);

  return (
    <section
      id='areas'
      className='on-dark relative w-full overflow-hidden bg-slate-950'
      style={{ contain: 'layout paint' }}
    >
      {/* Background — subtle map-grid + radial wash */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(56,189,248,0.22),_transparent_60%)]' />
      <div
        className='absolute inset-0 opacity-[0.05] pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20'>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-60px' }}
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10'
        >
          <div>
            <span className='inline-flex items-center gap-2 text-sky-400 font-semibold text-sm tracking-widest uppercase mb-3'>
              <MapPin size={14} /> Service Map
            </span>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight'>
              Cleaning every corner of{' '}
              <span className='bg-gradient-to-r from-sky-300 to-sky-300 bg-clip-text text-transparent'>
                Greater Richmond
              </span>
            </h2>
          </div>
          <div className='flex flex-wrap gap-3'>
            <span className='inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-4 py-2 text-sm text-sky-200'>
              <Plane size={14} /> RIC Airport • Hangars
            </span>
            <span className='inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-4 py-2 text-sm text-sky-200'>
              • James River Corridor
            </span>
          </div>
        </motion.div>

        {/* Marquees */}
        <div className='space-y-2'>
          <MarqueeRow items={top} />
          <MarqueeRow items={bot} reverse />
        </div>

        {/* Stat strip */}
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { value: '18+', label: 'Richmond Neighborhoods' },
            { value: '24h', label: 'Quote Turnaround' },
            { value: '100%', label: 'Owner-Operated' },
            { value: 'RIC', label: 'Airport-Certified' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true, margin: '-30px' }}
              className='rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-5 text-center'
            >
              <p className='text-3xl md:text-4xl font-bold text-white font-display'>
                {stat.value}
              </p>
              <p className='mt-1 text-xs uppercase tracking-wider text-slate-400'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
