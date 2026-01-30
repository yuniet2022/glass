
import React from 'react';
import { UserRole } from '../types';

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  setView: (view: 'home' | 'gallery' | 'portal' | 'admin') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange, setView, currentView }) => {
  return (
    <header className="sticky top-0 z-50 glass-effect bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-blue-600 h-10 w-10 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-serif text-2xl font-bold">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">SARASOTA GLASS</h1>
              <p className="text-[10px] tracking-[0.2em] text-blue-600 font-semibold uppercase">Elite Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => setView('home')} 
              className={`${currentView === 'home' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('gallery')} 
              className={`${currentView === 'gallery' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}
            >
              Gallery
            </button>
            {currentRole === UserRole.USER && (
              <button 
                onClick={() => setView('portal')} 
                className={`${currentView === 'portal' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}
              >
                My Portal
              </button>
            )}
            {currentRole === UserRole.ADMIN && (
              <button 
                onClick={() => setView('admin')} 
                className={`${currentView === 'admin' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}
              >
                Admin Panel
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <select 
              value={currentRole}
              onChange={(e) => onRoleChange(e.target.value as UserRole)}
              className="bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={UserRole.GUEST}>Guest View</option>
              <option value={UserRole.USER}>Client View</option>
              <option value={UserRole.ADMIN}>Admin View</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
