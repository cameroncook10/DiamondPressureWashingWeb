import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Reveal after the user scrolls past the hero — keeps it from competing with
  // the hero CTAs above the fold.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className='mx-3 mb-3 rounded-2xl bg-slate-900/95 backdrop-blur-md ring-1 ring-white/10 shadow-2xl'>
        <div className='grid grid-cols-2 gap-2 p-2'>
          <a
            href='tel:804-426-5663'
            className='flex items-center justify-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold text-sm py-3 transition-colors'
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href='sms:804-426-5663?body=Hi%20Diamond%2C%20I%27d%20like%20a%20quote%20for%3A%20'
            className='flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold text-sm py-3 border border-white/15 transition-colors'
          >
            <MessageSquare size={16} />
            Text for Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
