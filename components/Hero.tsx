
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Bathroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm animate-pulse">Sarasota's #1 Glass Experts</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Elegance is in <br />
            <span className="text-blue-300">The Details.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed">
            Transforming Sarasota homes and businesses with premium custom glass, showers, and mirror installations since 1985.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onExplore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-blue-900/20 transform hover:-translate-y-1"
            >
              Explore Our Work
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
