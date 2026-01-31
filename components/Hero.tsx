
import React from 'react';

interface HeroProps {
  onExplore: () => void;
  onQuote: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore, onQuote }) => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Windows and Doors" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm">A Better View of Quality Service</h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-none tracking-tighter">
            Exceptional <br />
            <span className="text-blue-200">Quality.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-lg font-light leading-relaxed">
            Sarasota's specialist in high-end impact windows and custom doors. Built on craftsmanship, integrity, and honest service since 2018.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onExplore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all shadow-2xl shadow-blue-900/40 transform hover:-translate-y-1"
            >
              Our Portfolio
            </button>
            <button 
              onClick={onQuote}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold transition-all transform hover:-translate-y-1"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex flex-col items-end">
        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Based in Florida</span>
        <div className="h-px w-20 bg-blue-600"></div>
      </div>
    </section>
  );
};

export default Hero;
