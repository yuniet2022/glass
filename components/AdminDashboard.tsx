
import React, { useState } from 'react';
import { DB } from '../services/db';
import { Service, GalleryItem } from '../types';

const AdminDashboard: React.FC = () => {
  const [services, setServices] = useState(DB.getServices());
  const [gallery, setGallery] = useState(DB.getGallery());
  const [activeTab, setActiveTab] = useState<'services' | 'gallery'>('services');

  // Simple form state for additions
  const [newService, setNewService] = useState<Partial<Service>>({ title: '', description: '', category: 'General' });

  const handleAddService = () => {
    if (newService.title && newService.description) {
      const s: Service = {
        id: Math.random().toString(36).substr(2, 9),
        title: newService.title,
        description: newService.description,
        imageUrl: 'https://picsum.photos/seed/new/800/600',
        category: newService.category || 'General'
      };
      DB.addService(s);
      setServices(DB.getServices());
      setNewService({ title: '', description: '', category: 'General' });
    }
  };

  const handleDeleteService = (id: string) => {
    DB.deleteService(id);
    setServices(DB.getServices());
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'services' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Manage Services
            </button>
            <button 
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'gallery' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Manage Gallery
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'services' ? (
              <div className="space-y-12">
                <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                  <h4 className="text-lg font-bold mb-4">Add New Service</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input 
                      type="text" 
                      placeholder="Service Title" 
                      className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      value={newService.title}
                      onChange={e => setNewService({...newService, title: e.target.value})}
                    />
                    <input 
                      type="text" 
                      placeholder="Category" 
                      className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      value={newService.category}
                      onChange={e => setNewService({...newService, category: e.target.value})}
                    />
                    <button 
                      onClick={handleAddService}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Add Service
                    </button>
                    <textarea 
                      placeholder="Description" 
                      className="col-span-1 md:col-span-3 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      value={newService.description}
                      onChange={e => setNewService({...newService, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {services.map(s => (
                    <div key={s.id} className="flex items-center justify-between p-4 bg-white border rounded-xl hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <img src={s.imageUrl} className="w-16 h-16 object-cover rounded-lg" alt={s.title} />
                        <div>
                          <h5 className="font-bold">{s.title}</h5>
                          <p className="text-xs text-gray-500">{s.category}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg></button>
                        <button 
                          onClick={() => handleDeleteService(s.id)}
                          className="p-2 text-gray-400 hover:text-red-600"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                Gallery CRUD Module - Similar pattern as Services would be implemented here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
