
import React, { useState } from 'react';
import { DB } from '../services/db';

interface GalleryProps {
  limit?: number;
  onSeeMore?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ limit, onSeeMore }) => {
  const gallery = DB.getGallery();
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(gallery.map(item => item.category))];
  const items = filter === 'All' ? gallery : gallery.filter(item => item.category === filter);
  const displayItems = limit ? items.slice(0, limit) : items;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">Showcasing Excellence</h3>
          </div>
          
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-xl bg-white">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                <h4 className="text-white text-2xl font-serif font-bold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {limit && gallery.length > limit && (
          <div className="mt-16 text-center">
            <button 
              onClick={onSeeMore}
              className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              <span>View Full Gallery</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
