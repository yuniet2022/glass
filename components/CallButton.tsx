
import React from 'react';
import { ADMIN_PHONE } from '../constants';

const CallButton: React.FC = () => {
  // Clean the phone number for the tel: link
  const dialableNumber = ADMIN_PHONE.replace(/\D/g, '');

  return (
    <div className="fixed bottom-6 right-[100px] z-[100]">
      <a 
        href={`tel:${dialableNumber}`}
        className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-400/40 transition-all transform hover:scale-110 active:scale-95 group"
        title="Call Administrator Now"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {/* Tooltip on hover */}
        <span className="absolute -top-12 right-0 bg-slate-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold">
          Call Now: {ADMIN_PHONE}
        </span>
      </a>
    </div>
  );
};

export default CallButton;
