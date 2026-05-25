import React from 'react';
import { motion } from 'framer-motion';
import { SpiralAnimation } from './ui/spiral-animation';
import { ShinyButton } from './ui/shiny-button';
import { ArrowRight, Droplets } from 'lucide-react';

// A pressure-washer wand SVG, angled so the nozzle points at the center of the spiral.
// The spiral renders behind it as the water spray pattern fanning out in a circle.
const PressureWashWand: React.FC = () => (
  <svg
    viewBox="0 0 220 220"
    className="absolute z-20 left-1/2 top-1/2 -translate-x-[78%] -translate-y-[110%] w-[210px] sm:w-[260px] md:w-[300px] drop-shadow-[0_8px_24px_rgba(14,165,233,0.45)]"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="wand-metal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#cbd5e1" />
        <stop offset="50%" stopColor="#94a3b8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="wand-grip" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>
      <linearGradient id="nozzle-glow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#bae6fd" stopOpacity="0" />
        <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.9" />
      </linearGradient>
    </defs>

    {/* Hose curling in from upper-left */}
    <path
      d="M 5 25 Q 40 10, 65 40 T 110 95"
      stroke="#1e293b"
      strokeWidth="11"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 5 25 Q 40 10, 65 40 T 110 95"
      stroke="#0ea5e9"
      strokeWidth="3"
      strokeDasharray="2 6"
      fill="none"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* Trigger grip */}
    <path
      d="M 88 78 L 120 110 L 102 128 L 70 96 Z"
      fill="url(#wand-grip)"
      stroke="#0c4a6e"
      strokeWidth="1.5"
    />
    {/* Trigger guard */}
    <path
      d="M 78 108 Q 70 124, 86 132 L 100 122"
      fill="none"
      stroke="#0c4a6e"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Main barrel */}
    <rect
      x="108"
      y="86"
      width="92"
      height="22"
      rx="4"
      transform="rotate(45 108 86)"
      fill="url(#wand-metal)"
      stroke="#334155"
      strokeWidth="1.2"
    />
    {/* Barrel highlight */}
    <rect
      x="112"
      y="89"
      width="80"
      height="4"
      rx="2"
      transform="rotate(45 112 89)"
      fill="#f1f5f9"
      opacity="0.6"
    />

    {/* Nozzle tip */}
    <circle cx="172" cy="150" r="9" fill="#0ea5e9" stroke="#0c4a6e" strokeWidth="2" />
    <circle cx="172" cy="150" r="4" fill="#bae6fd" />

    {/* Spray cone glow */}
    <path d="M 170 148 L 200 178 L 178 142 Z" fill="url(#nozzle-glow)" opacity="0.7" />
  </svg>
);

export const PrecisionSpray: React.FC = () => {
  return (
    <section
      id="precision"
      className="on-dark relative w-full overflow-hidden bg-slate-950"
      style={{ contain: 'layout paint' }}
    >
      {/* Layered gradients for depth — navy at the bottom, deeper indigo blue at the top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.18)_0%,_rgba(2,6,23,0)_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Faint diamond watermark pattern */}
      <div className="diamond-pattern absolute inset-0 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 text-sky-300 font-semibold text-sm tracking-widest uppercase mb-4">
              <Droplets size={16} className="text-sky-400" />
              Precision Power
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] font-display">
              Every spray.{' '}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
                Calibrated.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Soft wash where it counts. High-pressure where it earns it. We tune
              the angle, distance, and PSI to your surface — so you get a deeper
              clean without the etching, gouging, or stripping the other guys
              leave behind.
            </p>

            {/* Stat row */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { value: '3500', label: 'Max PSI' },
                { value: '160°', label: 'Hot Water' },
                { value: '0', label: 'Surface Damage' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm py-4 px-3 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-white font-display">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ShinyButton
                onClick={() => (window.location.href = '#contact')}
                className="bg-sky-600/90 text-white text-base py-4 px-8 shadow-lg shadow-sky-900/30"
              >
                <span className="flex items-center gap-2">
                  Book a Pro Clean
                  <ArrowRight size={18} />
                </span>
              </ShinyButton>
              <ShinyButton
                onClick={() => (window.location.href = '#services')}
                className="bg-white/5 text-white text-base py-4 px-8 border border-white/15"
              >
                See What We Clean
              </ShinyButton>
            </div>
          </motion.div>

          {/* Spiral side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative flex items-center justify-center"
          >
            <div
              className="relative w-full aspect-square max-w-[520px] mx-auto"
              style={{ contain: 'layout paint', willChange: 'transform' }}
            >
              {/* The spiral animation — clipped to a circle so the water-spray pattern reads cleanly */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_120px_rgba(14,165,233,0.35)] ring-1 ring-white/10">
                {/* Inner radial wash so the spiral pops against a dim center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(2,6,23,0.95)_0%,_rgba(2,6,23,0.35)_60%,_rgba(2,6,23,0)_100%)] z-10 pointer-events-none" />
                <SpiralAnimation
                  sizeMode="container"
                  particleCount={1200}
                  paletteStops={[
                    'rgba(207, 250, 254, 0.95)',
                    'rgba(125, 211, 252, 0.92)',
                    'rgba(56, 189, 248, 0.85)',
                    'rgba(14, 165, 233, 0.78)',
                    'rgba(255, 255, 255, 0.98)',
                  ]}
                />
              </div>

              {/* Concentric ring overlays — visual reinforcement of "circular spray pattern" */}
              <div className="pointer-events-none absolute inset-0 rounded-full border border-sky-400/15" />
              <div className="pointer-events-none absolute inset-[8%] rounded-full border border-sky-400/10" />
              <div className="pointer-events-none absolute inset-[18%] rounded-full border border-sky-400/8" />

              {/* The pressure-washer wand on top, angled into the spiral center */}
              <PressureWashWand />

              {/* Mist / drift dots */}
              <div className="pointer-events-none absolute inset-0">
                {[
                  { top: '12%', left: '18%', delay: 0 },
                  { top: '70%', left: '12%', delay: 1.2 },
                  { top: '78%', left: '76%', delay: 2.1 },
                  { top: '22%', left: '80%', delay: 0.8 },
                ].map((d, i) => (
                  <motion.span
                    key={i}
                    className="absolute block w-2 h-2 rounded-full bg-sky-200/70"
                    style={{ top: d.top, left: d.left, boxShadow: '0 0 10px rgba(186,230,253,0.8)' }}
                    animate={{ y: [0, -10, 0], opacity: [0.2, 0.9, 0.2] }}
                    transition={{ duration: 3.4, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft transition lip to next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
    </section>
  );
};

export default PrecisionSpray;
