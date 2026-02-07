
import React, { useState } from 'react';

interface Brochure {
  title: string;
  subtitle: string;
  category: 'Windows' | 'Doors' | 'Garage' | 'Technical';
  features: string[];
  pdfUrl: string;
  coverImage: string;
}

interface ProductGuideProps {
  onQuote: () => void;
}

const ProductGuide: React.FC<ProductGuideProps> = ({ onQuote }) => {
  const [activeBrand, setActiveBrand] = useState('ES Windows');

  const brochures: Record<string, Brochure[]> = {
    'ES Windows': [
      {
        title: "Elite uPVC Series",
        subtitle: "The Perfect Combination of Style & Security",
        category: 'Windows',
        features: ["Energy Efficiency", "Large Missile Impact Rated", "Sound Insulation", "uPVC Durability"],
        pdfUrl: "#", // Reemplazar con ruta real del PDF
        coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Prestige Collection",
        subtitle: "Architectural Luxury & Performance",
        category: 'Windows',
        features: ["Narrow Sightlines", "Thermally Broken Aluminum", "Ultra-Clear Interlayers", "High-End Aesthetics"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Garage Doors PGD3040",
        subtitle: "Innovation & Security in Every Detail",
        category: 'Garage',
        features: ["Premium Nylon Rollers", "Silicone Weather-Seals", "Anti-Deflection Interlocking", "5/16\"-9/16\" Glass Options"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Entry Doors PSD5030T",
        subtitle: "Pivot & French Configurations",
        category: 'Doors',
        features: ["Thermally Broken System", "AAMA 2605 Finishes", "Modular Multi-Point Lock", "Pivot Hinge Technology"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Multimax Series",
        subtitle: "Commercial & Multi-Family Solutions",
        category: 'Technical',
        features: ["Miami-Dade Approved", "AAMA 2604 Aluminum", "Cost-Effective Impact Protection", "High Security Standards"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
      }
    ],
    'Therma-Tru': [
      {
        title: "Impact-Rated Fiberglass",
        subtitle: "Classic-Craft & Smooth-Star Collections",
        category: 'Doors',
        features: ["24-Gauge Steel Plates", "Lip-Lite Frame Technology", "HVHZ/WBDR Certified", "Authentic Wood Grain Textures"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
      }
    ],
    'JELD-WEN': [
      {
        title: "Siteline Clad-Wood",
        subtitle: "Elegance Meets Thoughtful Engineering",
        category: 'Windows',
        features: ["AuraLast® Pine Protection", "20-Year Limited Warranty", "Historical to Contemporary Styles", "High Thermal Performance"],
        pdfUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const brands = Object.keys(brochures);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">Technical Library & Catalogs</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">The <span className="text-blue-300">Exceptional</span> Standard</h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
              Access full technical specifications, architectural details, and performance ratings for Florida's most trusted impact solutions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button onClick={onQuote} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-900/40">
                Technical Consultation
              </button>
              <a href="https://www.floridabuilding.org/pr/pr_app_srch.aspx" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all">
                Search FL Approvals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Navigation */}
      <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar py-6">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`text-sm font-bold uppercase tracking-widest whitespace-nowrap pb-2 transition-all border-b-2 ${
                  activeBrand === brand ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-slate-900'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {brochures[activeBrand].map((brochure, idx) => (
            <div key={idx} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img src={brochure.coverImage} alt={brochure.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter">
                    {brochure.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{brochure.title}</h3>
                <p className="text-gray-500 text-sm mb-8 font-medium italic">{brochure.subtitle}</p>
                
                <div className="space-y-3 mb-10 flex-grow">
                  {brochure.features.map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <a 
                    href={brochure.pdfUrl} 
                    className="flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download PDF</span>
                  </a>
                  <button className="p-2 bg-gray-50 rounded-full text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical FAQ / Compliance */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-8">Contractor & Architect Support</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
                  <div className="text-2xl mb-3">🛡️</div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">NOA Specialists</h4>
                  <p className="text-blue-100 text-sm">We provide all Notice of Acceptance (NOA) documentation required for high-velocity hurricane zones (HVHZ).</p>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
                  <div className="text-2xl mb-3">📋</div>
                  <h4 className="font-bold mb-2 uppercase tracking-widest text-xs">Shop Drawings</h4>
                  <p className="text-blue-100 text-sm">Technical support for custom architectural shapes and high-load structural requirements.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[3rem] p-12 text-slate-900 shadow-2xl">
              <h4 className="text-2xl font-serif font-bold mb-6">Need Technical Details?</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">Our experts can provide specific design pressures (DP), air infiltration ratings, and water resistance specifications for your brand of choice.</p>
              <button onClick={onQuote} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-3">
                <span>Request Technical Package</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGuide;
