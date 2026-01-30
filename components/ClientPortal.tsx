
import React from 'react';
import { UserProfile } from '../types';

interface ClientPortalProps {
  user: UserProfile;
}

const ClientPortal: React.FC<ClientPortalProps> = ({ user }) => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Welcome Back, {user.name}</h2>
          <p className="text-gray-500">Track your project inquiries and manage your profile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-xl shadow-blue-100">
            <h4 className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Total Inquiries</h4>
            <p className="text-4xl font-bold">{user.inquiries.length}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Status</h4>
            <p className="text-xl font-bold text-slate-900">Active Account</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
            <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Tier</h4>
            <p className="text-xl font-bold text-slate-900">Preferred Client</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-900">Your Inquiry History</h3>
            <button className="text-sm text-blue-600 font-bold hover:underline">New Request</button>
          </div>
          <div className="p-0">
            {user.inquiries.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {user.inquiries.map(inq => (
                  <div key={inq.id} className="px-8 py-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-gray-400">{inq.date}</span>
                      <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                        inq.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-slate-800 leading-relaxed">{inq.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-400">
                No history found. Start a project today!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
