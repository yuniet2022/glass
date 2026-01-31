
import React from 'react';
import { INSTAGRAM_URL, FACEBOOK_URL, ADMIN_PHONE } from '../constants';

interface FooterProps {
  setView: (view: 'home' | 'gallery' | 'portal' | 'admin' | 'about' | 'quote' | 'products') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-14 w-14 mr-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 2 A48 48 0 0 1 98 50 L50 50 Z" fill="#6B8EBD" />
                  <path d="M50 50 L98 50 A48 48 0 0 1 50 98 Z" fill="#4B6A96" />
                  <path d="M2 50 A48 48 0 0 1 50 2 L50 50 Z" fill="#5D7EA8" />
                  <path d="M50 50 L50 98 A48 48 0 0 1 2 50 Z" fill="#84A1C9" />
                  <line x1="50" y1="2" x2="50" y2="98" stroke="white" strokeWidth="3" />
                  <line x1="2" y1="50" x2="98" y2="50" stroke="white" strokeWidth="3" />
                  <rect x="58" y="60" width="18" height="28" fill="white" />
                  <rect x="60" y="62" width="14" height="24" fill="#4B6A96" />
                  <path d="M68 62 L82 58 L82 86 L68 90 Z" fill="white" />
                  <rect x="24" y="24" width="16" height="16" fill="white" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white leading-none uppercase">Exceptional</h1>
                <p className="text-[10px] tracking-[0.1em] text-blue-300 font-semibold uppercase mt-1">Windows & Doors. LLC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A family-owned window and door company built on hard work, craftsmanship, and honest service. A better view of quality service.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-pink-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => setView('home')} className="hover:text-blue-300 transition-colors">Home</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-blue-300 transition-colors">About Us</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-blue-300 transition-colors">Product Guide</button></li>
              <li><button onClick={() => setView('gallery')} className="hover:text-blue-300 transition-colors">Gallery</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-300">Solutions</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Impact Windows</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Fiberglass Doors</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Shower Enclosures</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Custom Mirrors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-300">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Sarasota, FL</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href={`tel:${ADMIN_PHONE}`} className="hover:text-white transition-colors">{ADMIN_PHONE}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 uppercase tracking-tighter font-semibold">
            &copy; 2025 Exceptional Windows & Doors. LLC
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
