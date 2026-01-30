
import React from 'react';
import { DB } from '../services/db';

const Services: React.FC = () => {
  const services = DB.getServices();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Specialties</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900">Custom Glass Solutions</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            From sleek modern showers to heavy-duty commercial storefronts, we deliver precision craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 shadow-lg">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-semibold">View Projects &rarr;</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
