
import React, { useState, useEffect } from 'react';
import { DB } from '../services/db';
import { Service, Appointment, BlockedSlot, BlogPost } from '../types';

const HOURS = Array.from({ length: 10 }, (_, i) => `${i + 8}:00`.padStart(5, '0'));

const AdminDashboard: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [activeTab, setActiveTab] = useState<'services' | 'schedule' | 'blog'>('services');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [blockedSlots, setBlockedSlots] = useState<BlockedSlot[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Blog Form State
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    image_url: '',
    category: 'Innovation'
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [srv, slots, apps, posts] = await Promise.all([
        DB.getServices(),
        DB.getBlockedSlots(),
        DB.getAppointments(),
        DB.getBlogPosts()
      ]);
      setServices(srv);
      setBlockedSlots(slots);
      setAppointments(apps);
      setBlogPosts(posts);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleToggleBlock = async (time: string) => {
    await DB.toggleBlockedSlot(selectedDate, time);
    const updatedSlots = await DB.getBlockedSlots();
    setBlockedSlots(updatedSlots);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      await DB.updateBlogPost({ ...editingPost, ...blogForm });
    } else {
      await DB.addBlogPost({
        id: Math.random().toString(36).substr(2, 9),
        created_at: new Date().toISOString(),
        ...blogForm
      });
    }
    setBlogForm({ title: '', content: '', image_url: '', category: 'Innovation' });
    setEditingPost(null);
    const updatedPosts = await DB.getBlogPosts();
    setBlogPosts(updatedPosts);
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm("Delete this post permanently?")) {
      await DB.deleteBlogPost(id);
      setBlogPosts(prev => prev.filter(p => p.id !== id));
    }
  };

  const isBlocked = (time: string) => blockedSlots.some(s => s.date === selectedDate && s.time === time);
  const getAppointment = (time: string) => appointments.find(a => a.date === selectedDate && a.time === time);

  if (loading) {
    return <div className="p-20 text-center font-bold text-slate-500">Loading Dashboard...</div>;
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            <button 
              onClick={() => setActiveTab('services')}
              className={`flex-1 min-w-[150px] py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'services' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 min-w-[150px] py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'schedule' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Work Schedule
            </button>
            <button 
              onClick={() => setActiveTab('blog')}
              className={`flex-1 min-w-[150px] py-6 font-bold text-sm uppercase tracking-widest transition-colors ${activeTab === 'blog' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Blog
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'blog' ? (
              <div className="space-y-12">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100">
                  <h4 className="text-2xl font-serif font-bold mb-6">
                    {editingPost ? 'Edit Blog Post' : 'Create New Article'}
                  </h4>
                  <form onSubmit={handleBlogSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        required
                        placeholder="Article Title"
                        className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
                        value={blogForm.title}
                        onChange={e => setBlogForm({...blogForm, title: e.target.value})}
                      />
                      <input 
                        placeholder="Image URL"
                        className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
                        value={blogForm.image_url}
                        onChange={e => setBlogForm({...blogForm, image_url: e.target.value})}
                      />
                    </div>
                    <textarea 
                      required
                      placeholder="Post Content..."
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
                      value={blogForm.content}
                      onChange={e => setBlogForm({...blogForm, content: e.target.value})}
                    />
                    <div className="flex justify-between items-center">
                      <select 
                        className="px-6 py-3 rounded-xl border-none ring-1 ring-gray-200"
                        value={blogForm.category}
                        onChange={e => setBlogForm({...blogForm, category: e.target.value})}
                      >
                        <option>Innovation</option>
                        <option>Security</option>
                        <option>Design</option>
                        <option>Case Study</option>
                      </select>
                      <div className="space-x-2">
                        {editingPost && (
                          <button 
                            type="button"
                            onClick={() => { setEditingPost(null); setBlogForm({title:'', content:'', image_url:'', category:'Innovation'}); }}
                            className="px-8 py-3 rounded-full font-bold text-gray-500 hover:bg-gray-100 transition-all"
                          >
                            Cancel
                          </button>
                        )}
                        <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                          {editingPost ? 'Save Changes' : 'Publish Article'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold px-2">Published Articles</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {blogPosts.map(post => (
                      <div key={post.id} className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-md transition-all">
                        <div className="flex items-center space-x-6">
                          <img src={post.image_url} className="w-16 h-16 object-cover rounded-2xl" alt="" />
                          <div>
                            <h5 className="font-bold text-slate-900">{post.title}</h5>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{post.category} • {new Date(post.created_at).toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => {
                              setEditingPost(post);
                              setBlogForm({
                                title: post.title,
                                content: post.content,
                                image_url: post.image_url,
                                category: post.category
                              });
                            }}
                            className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                          </button>
                          <button 
                            onClick={() => handleDeletePost(post.id)}
                            className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : activeTab === 'schedule' ? (
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
