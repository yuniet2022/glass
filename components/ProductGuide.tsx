
import React from 'react';

interface ProductGuideProps {
  onQuote: () => void;
}

const ProductGuide: React.FC<ProductGuideProps> = ({ onQuote }) => {
  const brands = [
    {
      name: "PGT Windows & Doors",
      series: "WinGuard, EnergyVue, PremierVue, ClassicVue",
      types: "Single Hung, Double Hung, Horizontal Roller, Casement, Awning, Picture/Fixed, Architectural Shapes",
      sliders: "2, 3, 4 panel, pocketing and stacking sliders",
      swing: "In-swing and Out-swing French doors",
      approval: "https://approvalsandcertifications.pgtwindows.com/",
      color: "blue"
    },
    {
      name: "ES Windows",
      series: "Elite, Multimax, Prestige",
      types: "Casement, Awning, Fixed, Horizontal Sliding",
      sliders: "Standard, heavy-panel, multi-track, pocketing",
      swing: "Hinged French and Pivot doors",
      approval: "https://www.floridabuilding.org/pr/pr_app_srch.aspx",
      color: "slate"
    },
    {
      name: "ECO Window Systems",
      series: "Series 50, 60, 70, 80/85 (Casement/Awning)",
      types: "Fixed, Single Hung, Horizontal Roller",
      sliders: "700, 750, 760, 775 (Eco-Novo), 900 (Bifold)",
      swing: "950 Outswing French, 960 Inswing French",
      approval: "https://www.floridabuilding.org/pr/pr_app_srch.aspx",
      color: "emerald"
    },
    {
      name: "JELD-WEN Windows & Doors",
      series: "V-2500 Vinyl, V-4500 Premium Vinyl, W-5500 Clad Wood",
      types: "Single Hung, Double Hung, Sliding, Casement, Awning, Fixed, Specialty",
      sliders: "Sliding Patio Doors and Hinged Patio Doors",
      approval: "https://www.jeld-wen.com/en-us/coastal-selections",
      color: "indigo"
    },
    {
      name: "Therma-Tru Fiberglass Doors",
      series: "Classic-Craft, Fiber-Classic, Smooth-Star, Pulse, Profiles, Traditions",
      types: "Impact entry doors, French doors, inswing/outswing hinged doors",
      approval: "https://www.thermatru.com/technical/product-approvals/florida-product-approvals/",
      color: "orange"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Product Guide</h2>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Built for <span className="text-blue-300">Florida's Environment</span></h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
              We exclusively partner with the industry's most trusted brands, ensuring every installation meets the rigorous standards of Florida Product Approvals (FL#) and Miami-Dade NOA documentation.
            </p>
            <button 
              onClick={onQuote}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-900/40"
            >
              Consult an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, idx) => (
            <div key={idx} className="border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all group bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{brand.name}</h3>
                <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Florida Approved</span>
              </div>
              
              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">Series Available</h4>
                  <p className="text-slate-700 font-medium leading-relaxed">{brand.series}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">Window & Door Types</h4>
                  <p className="text-slate-600">{brand.types}</p>
                </div>

                {brand.sliders && (
                  <div>
                    <h4 className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">Sliding Systems</h4>
                    <p className="text-slate-600">{brand.sliders}</p>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <a 
                    href={brand.approval} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline flex items-center"
                  >
                    <span>View Certifications</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Other brands card */}
          <div className="bg-slate-50 rounded-[2rem] p-8 border-2 border-dashed border-slate-200 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Other Fiberglass Door Options</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['ProVia', 'Masonite', 'Plastpro'].map(b => (
                <span key={b} className="bg-white px-4 py-2 rounded-xl text-sm font-bold border border-slate-100 shadow-sm">{b}</span>
              ))}
            </div>
            <p className="text-gray-500 text-sm italic">
              Use Florida Approval Search for specific models from these manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Permit & Compliance Excellence</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">🛡️</div>
                  <div>
                    <h4 className="font-bold mb-1">Impact Rated Excellence</h4>
                    <p className="text-blue-100 text-sm">All our products are available with Florida Product Approvals (FL#) for high-wind protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">🌴</div>
                  <div>
                    <h4 className="font-bold mb-1">HVHZ & Miami-Dade NOA</h4>
                    <p className="text-blue-100 text-sm">HVHZ areas require Miami-Dade NOA documentation, which we handle as part of our full-service permit packages.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-2xl">📋</div>
                  <div>
                    <h4 className="font-bold mb-1">Full Documentation</h4>
                    <p className="text-blue-100 text-sm">Our permit packages include approval sheets, design pressures, size charts, and precision installation instructions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 text-center">
              <h4 className="text-2xl font-serif font-bold mb-4">Start Your Upgrade</h4>
              <p className="text-blue-100 mb-8">Let us handle the technical complexities of your window and door project.</p>
              <button 
                onClick={onQuote}
                className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold shadow-2xl hover:bg-blue-50 transition-all"
              >
                Request Technical Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGuide;
