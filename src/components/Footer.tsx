import React from 'react';
import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-slate-900 border-t-4 border-emerald-500'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <Droplets size={28} className='text-emerald-400' />
              <h3 className='text-xl font-bold text-white'>Diamond Pressure Washing</h3>
            </div>
            <p className='text-slate-400 text-sm leading-relaxed'>
              Honest service. Quality results. No hassle. Just clean. Proudly serving the greater
              Richmond, Virginia area.
            </p>
            <p className='text-slate-500 text-xs'>
              &copy; {currentYear} Diamond Pressure Washing. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div className='space-y-4'>
            <h4 className='font-bold text-lg text-white'>Services</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              {[
                'Driveway Cleaning',
                'Patio & Deck',
                'House Siding',
                'Window Cleaning',
                'Commercial',
              ].map((service) => (
                <li key={service}>
                  <a
                    href='#services'
                    className='hover:text-emerald-400 transition-colors duration-200'
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='font-bold text-lg text-white'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-slate-400'>
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='hover:text-emerald-400 transition-colors duration-200'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-4'>
            <h4 className='font-bold text-lg text-white'>Contact</h4>
            <div className='space-y-3 text-sm text-slate-400'>
              <a
                href='tel:804-426-5663'
                className='flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200'
              >
                <Phone size={16} className='text-emerald-400 flex-shrink-0' />
                804-426-5663
              </a>
              <a
                href='mailto:diamondpressureservicesrva@gmail.com'
                className='flex items-center gap-3 hover:text-emerald-400 transition-colors duration-200'
              >
                <Mail size={16} className='text-emerald-400 flex-shrink-0' />
                <span className='break-all'>diamondpressureservicesrva@gmail.com</span>
              </a>
              <div className='flex items-center gap-3'>
                <MapPin size={16} className='text-emerald-400 flex-shrink-0' />
                Richmond, Virginia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-slate-800 pt-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-4'>
            <p>&copy; {currentYear} Diamond Pressure Washing. All rights reserved.</p>
            <div className='flex gap-6'>
              <a href='#' className='hover:text-emerald-400 transition-colors duration-200'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-emerald-400 transition-colors duration-200'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
