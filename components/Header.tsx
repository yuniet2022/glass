
import React from 'react';
import { UserRole } from '../types';
import { INSTAGRAM_URL, FACEBOOK_URL } from '../constants';

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  setView: (view: 'home' | 'gallery' | 'portal' | 'admin' | 'about' | 'quote' | 'products' | 'blog') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange, setView, currentView }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect bg-white/90 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group" onClick={() => setView('home')}>
            <div className="relative h-14 w-14 mr-4 transform group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-600">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200" />
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
                <line x1="32" y1="24" x2="32" y2="40" stroke="#5D7EA8" strokeWidth="1" />
                <line x1="24" y1="32" x2="40" y2="32" stroke="#5D7EA8" strokeWidth="1" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800 leading-none">EXCEPTIONAL</h1>
              <p className="text-[10px] tracking-[0.1em] text-slate-500 font-semibold uppercase mt-1">WINDOWS & DOORS. LLC</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => setView('home')} 
              className={`${currentView === 'home' ? 'text-blue-700 font-bold' : 'text-gray-600'} hover:text-blue-700 transition-colors font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('products')} 
              className={`${currentView === 'products' ? 'text-blue-700 font-bold' : 'text-gray-600'} hover:text-blue-700 transition-colors font-medium`}
            >
              Products
            </button>
            <button 
              onClick={() => setView('gallery')} 
              className={`${currentView === 'gallery' ? 'text-blue-700 font-bold' : 'text-gray-600'} hover:text-blue-700 transition-colors font-medium`}
            >
              Gallery
            </button>
            <button 
              onClick={() => setView('blog')} 
              className={`${currentView === 'blog' ? 'text-blue-700 font-bold' : 'text-gray-600'} hover:text-blue-700 transition-colors font-medium`}
            >
              Blog
            </button>
            <button 
              onClick={() => setView('about')} 
              className={`${currentView === 'about' ? 'text-blue-700 font-bold' : 'text-gray-600'} hover:text-blue-700 transition-colors font-medium`}
            >
              About
            </button>
            
            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <div className="flex items-center space-x-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-800 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>

            <button 
              onClick={() => setView('quote')} 
              className="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 transition-all font-bold px-6 py-2 rounded-full ml-4"
            >
              Free Quote
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <select 
              value={currentRole}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
              className="bg-slate-100 border-none rounded-full px-4 py-2 text-xs font-bold focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={UserRole.GUEST}>Public View</option>
              <option value={UserRole.USER}>Client Portal</option>
              <option value={UserRole.ADMIN}>Staff Login</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
