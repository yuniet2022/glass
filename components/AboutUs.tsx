
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section for About */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Our Identity</h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Exceptional <br/><span className="text-blue-300">Windows and Doors</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed italic">
            "A Better View of Quality Service."
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" 
                alt="Window Installation Excellence" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-3xl -z-0 opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 z-20 text-center">
                <span className="text-white font-bold text-5xl block">2018</span>
                <span className="text-blue-200 text-xs uppercase tracking-widest font-bold">Established</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Mission & Values</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Exceptional Windows and Doors is a family-owned and operated window and door company, proudly serving homeowners since 2018. Built on hard work, craftsmanship, and honest service, our mission is simple: <span className="text-blue-600 font-semibold">A Better View of Quality Service.</span>
              </p>
              <p className="text-gray-600 leading-relaxed">
                With deep roots in the construction and remodeling industry, we specialize in high-quality window and door sales, replacements, and installations for residential properties. From the first consultation to the final walkthrough, we focus on doing things the right way — no shortcuts, no surprises.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is our hands-on, detail-driven approach. We don’t just sell products — we manage the entire process to ensure precise measurements, proper installation, and a finished result that enhances your home’s value, energy efficiency, and curb appeal. Every project is treated as if it were our own home.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe trust is earned through transparency, reliability, and consistent results. That’s why homeowners continue to choose Exceptional Windows and Doors for projects ranging from single window replacements to full home upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Residential Focus</h4>
              <p className="text-gray-500 text-sm">Specializing in high-end sales and professional installation for your family home.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 scale-105 ring-4 ring-blue-50">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Family Owned</h4>
              <p className="text-gray-500 text-sm">A personalized, hands-on approach where every customer is part of the family.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">No Shortcuts</h4>
              <p className="text-gray-500 text-sm">Integrity-driven service with a focus on transparency and long-term reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Ready for a better view?</h3>
          <p className="text-gray-600 mb-10">Experience the difference that detail-driven craftsmanship makes in your home renovation project.</p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
