
import React, { useState, useEffect, useCallback } from 'react';
import { DB } from '../services/db';
import { GalleryItem } from '../types';

interface GalleryProps {
  limit?: number;
  onSeeMore?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ limit, onSeeMore }) => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  useEffect(() => {
    DB.getGallery().then(data => {
      setGallery(data);
      setLoading(false);
    });
  }, []);

  // Manejo de teclado para cerrar el modal
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Habilitar scroll
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleKeyDown]);

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
          
          {!limit && !loading && (
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat ? 'bg-blue-700 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage(item)}
                className="relative group overflow-hidden rounded-3xl aspect-[4/3] shadow-xl bg-white cursor-zoom-in"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <div className="flex justify-between items-center">
                    <h4 className="text-white text-2xl font-serif font-bold">{item.title}</h4>
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {limit && gallery.length > limit && (
          <div className="mt-16 text-center">
            <button 
              onClick={onSeeMore}
              className="inline-flex items-center space-x-2 text-blue-700 font-bold hover:text-blue-900 transition-colors"
            >
              <span>View Full Gallery</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal de Imagen */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón Cerrar */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 z-[210]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagen Principal con Zoom */}
          <div 
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="rounded-2xl shadow-2xl object-contain max-h-[80vh] w-auto border border-white/10"
            />
            
            {/* Info de la Imagen */}
            <div className="mt-6 text-center text-white">
              <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-serif font-bold tracking-tight">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
