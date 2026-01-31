
import React, { useState, useEffect } from 'react';
import { DB } from '../services/db';
import { Appointment } from '../types';

const HOURS = Array.from({ length: 10 }, (_, i) => `${i + 8}:00`.padStart(5, '0'));

interface QuoteFormProps {
  onSuccess: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'Shower Enclosure',
    notes: '',
    date: new Date().toISOString().split('T')[0],
    time: ''
  });

  const [blockedSlots, setBlockedSlots] = useState(DB.getBlockedSlots());
  const [appointments, setAppointments] = useState(DB.getAppointments());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAvailable = (hour: string) => {
    const isBlocked = blockedSlots.some(s => s.date === formData.date && s.time === hour);
    const isBooked = appointments.some(a => a.date === formData.date && a.time === hour);
    return !isBlocked && !isBooked;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) return alert("Please select an appointment time.");
    
    setIsSubmitting(true);
    
    const newApp: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      clientId: 'guest',
      clientName: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      projectType: formData.project,
      notes: formData.notes
    };

    setTimeout(() => {
      DB.addAppointment(newApp);
      alert("Appointment successfully booked! We will contact you shortly.");
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-blue-600 p-12 text-white">
              <h2 className="text-3xl font-serif font-bold mb-6">Start Your <br/>Dream Project</h2>
              <p className="text-blue-100 mb-12 font-light leading-relaxed">
                Schedule a site visit and get a precise, no-obligation quote from our master installers.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">📏</div>
                  <div>
                    <h4 className="font-bold text-sm">Free Measurements</h4>
                    <p className="text-xs text-blue-200">On-site precision check</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">📅</div>
                  <div>
                    <h4 className="font-bold text-sm">Instant Booking</h4>
                    <p className="text-xs text-blue-200">Select your preferred slot</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">📞</div>
                  <div>
                    <h4 className="font-bold text-sm">Expert Consultation</h4>
                    <p className="text-xs text-blue-200">Direct phone support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                      placeholder="(941) 555-0123"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Type</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                      value={formData.project}
                      onChange={e => setFormData({...formData, project: e.target.value})}
                    >
                      <option>Shower Enclosure</option>
                      <option>Custom Mirror</option>
                      <option>Glass Railing</option>
                      <option>Window/Door Repair</option>
                      <option>Commercial Glass</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Date</label>
                    <input 
                      required
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 font-bold"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value, time: ''})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Available Time</label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {HOURS.map(hour => {
                      const available = isAvailable(hour);
                      return (
                        <button
                          key={hour}
                          type="button"
                          disabled={!available}
                          onClick={() => setFormData({...formData, time: hour})}
                          className={`py-2 text-xs font-bold rounded-lg transition-all ${
                            formData.time === hour ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 
                            available ? 'bg-white border border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50' :
                            'bg-gray-100 text-gray-300 cursor-not-allowed opacity-50'
                          }`}
                        >
                          {hour}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Additional Details (Optional)</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all h-24 resize-none"
                    placeholder="Tell us about dimensions, glass type, or hardware finish preferences..."
                    value={formData.notes}
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Confirm Appointment</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-8 text-gray-400 text-sm">
          By booking, you agree to our privacy policy and terms of service.
        </p>
      </div>
    </div>
  );
};

export default QuoteForm;
