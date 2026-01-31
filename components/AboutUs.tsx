
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section simple for About */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Our History</h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Glass Experts <br/><span className="text-blue-300">for Generations</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Since 1985, Sarasota Glass Elite has been the standard for quality and design in Florida, transforming spaces with the transparency and elegance of premium glass.
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
                alt="Craftsmanship" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-600 rounded-3xl -z-0 opacity-10"></div>
            </div>
            
            <div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Craftsmanship & Precision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                What began as a small family workshop has grown into the leading provider of custom glass solutions. Our passion for detail has allowed us to collaborate on the most ambitious architectural projects in the region.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We don't just install glass; we create experiences. Every cut, polish, and installation is overseen by master glassworkers with decades of experience, ensuring every piece meets the highest standards of safety and aesthetics.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-blue-600 font-bold text-4xl mb-2">35+</h4>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-blue-600 font-bold text-4xl mb-2">10k+</h4>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Completed Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-slate-900">Our Values</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Quality",
                desc: "We exclusively use top-tier materials and hardware from world-leading brands.",
                icon: "💎"
              },
              {
                title: "Design Innovation",
                desc: "We stay at the forefront of interior design trends and modern architecture.",
                icon: "🎨"
              },
              {
                title: "Local Commitment",
                desc: "Proudly based in Sarasota, we serve our community with integrity and care.",
                icon: "📍"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
