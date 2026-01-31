
import React, { useState } from 'react';
import { DB } from '../services/db';
import { Service, Appointment, BlockedSlot } from '../types';

const HOURS = Array.from({ length: 10 }, (_, i) => `${i + 8}:00`.padStart(5, '0'));

const AdminDashboard: React.FC = () => {
  const [services, setServices] = useState(DB.getServices());
  const [activeTab, setActiveTab] = useState<'services' | 'schedule'>('services');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [blockedSlots, setBlockedSlots] = useState(DB.getBlockedSlots());
  const [appointments, setAppointments] = useState(DB.getAppointments());

  const handleToggleBlock = (time: string) => {
    DB.toggleBlockedSlot(selectedDate, time);
    setBlockedSlots(DB.getBlockedSlots());
  };

  const isBlocked = (time: string) => blockedSlots.some(s => s.date === selectedDate && s.time === time);
  const getAppointment = (time: string) => appointments.find(a => a.date === selectedDate && a.time === time);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b">
            <button 
              onClick={() => setActiveTab('services')}
              className={`flex-1 py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'services' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'schedule' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Work Schedule
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'schedule' ? (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-serif font-bold">Daily Management</h4>
                    <p className="text-gray-500">Block hours or view scheduled appointments.</p>
                  </div>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-6 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 font-bold text-blue-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {HOURS.map(hour => {
                    const app = getAppointment(hour);
                    const blocked = isBlocked(hour);
                    return (
                      <div 
                        key={hour}
                        onClick={() => !app && handleToggleBlock(hour)}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                          app ? 'bg-green-50 border-green-200' :
                          blocked ? 'bg-red-50 border-red-200' :
                          'bg-white border-gray-100 hover:border-blue-200 hover:bg-blue-50/30'
                        }`}
                      >
                        <span className="block text-lg font-bold mb-2">{hour}</span>
                        {app ? (
                          <div>
                            <span className="text-xs font-bold text-green-700 uppercase">Booked</span>
                            <p className="text-sm font-semibold truncate">{app.clientName}</p>
                          </div>
                        ) : blocked ? (
                          <span className="text-xs font-bold text-red-700 uppercase">Blocked</span>
                        ) : (
                          <span className="text-xs font-bold text-blue-400 uppercase">Available</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-blue-800 text-sm italic">
                    Note: Clicking on an available hour will block it for customers. Clicking a blocked hour will release it. 
                    Hours with active appointments cannot be manually blocked.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h4 className="text-xl font-bold">Service Catalog Management</h4>
                <div className="grid grid-cols-1 gap-4">
                  {services.map(s => (
                    <div key={s.id} className="flex items-center justify-between p-4 bg-white border rounded-xl">
                      <div className="flex items-center space-x-4">
                        <img src={s.imageUrl} className="w-12 h-12 object-cover rounded-lg" alt={s.title} />
                        <h5 className="font-bold">{s.title}</h5>
                      </div>
                      <button className="text-red-500 hover:underline text-sm font-bold">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
