
import { Service, GalleryItem, UserProfile, UserRole, Appointment, BlockedSlot, BlogPost } from '../types';

const API_BASE = window.location.hostname === 'localhost' ? "http://localhost:5050/api" : "/api";

export const DB = {
  // BLOG
  getBlogPosts: async (): Promise<BlogPost[]> => {
    const res = await fetch(`${API_BASE}/blog`);
    return await res.json();
  },

  addBlogPost: async (post: BlogPost): Promise<void> => {
    await fetch(`${API_BASE}/blog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
  },

  updateBlogPost: async (post: BlogPost): Promise<void> => {
    await fetch(`${API_BASE}/blog/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
  },

  deleteBlogPost: async (id: string): Promise<void> => {
    await fetch(`${API_BASE}/blog/${id}`, {
      method: 'DELETE'
    });
  },

  // SERVICES
  getServices: async (): Promise<Service[]> => {
    const res = await fetch(`${API_BASE}/services`);
    return await res.json();
  },

  addService: async (service: Service): Promise<void> => {
    await fetch(`${API_BASE}/services`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service)
    });
  },

  // GALLERY
  getGallery: async (): Promise<GalleryItem[]> => {
    const res = await fetch(`${API_BASE}/gallery`);
    return await res.json();
  },

  // APPOINTMENTS
  getAppointments: async (): Promise<Appointment[]> => {
    const res = await fetch(`${API_BASE}/appointments`);
    return await res.json();
  },

  addAppointment: async (app: Appointment): Promise<void> => {
    await fetch(`${API_BASE}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(app)
    });
  },

  // BLOCKED SLOTS
  getBlockedSlots: async (): Promise<BlockedSlot[]> => {
    const res = await fetch(`${API_BASE}/blocked-slots`);
    return await res.json();
  },

  toggleBlockedSlot: async (date: string, time: string): Promise<void> => {
    await fetch(`${API_BASE}/blocked-slots/toggle`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, time })
    });
  },

  // USERS (Mantenido como estático por ahora o expandible a API)
  getUsers: async (): Promise<UserProfile[]> => {
    return [
      {
        id: 'admin-1',
        name: 'Administrator',
        email: 'admin@exceptional.com',
        role: UserRole.ADMIN,
        preferences: { notifications: true, darkMode: false },
        inquiries: []
      }
    ];
  }
};
