
import { Service, GalleryItem, UserProfile, UserRole } from '../types';
import { INITIAL_SERVICES, INITIAL_GALLERY } from '../constants';

const DB_KEY = 'sarasota_glass_db';

interface DBState {
  services: Service[];
  gallery: GalleryItem[];
  users: UserProfile[];
}

const initialState: DBState = {
  services: INITIAL_SERVICES,
  gallery: INITIAL_GALLERY,
  users: [
    {
      id: 'admin-1',
      name: 'Administrator',
      email: 'admin@sarasotaglass.com',
      role: UserRole.ADMIN,
      preferences: { notifications: true, darkMode: false },
      inquiries: []
    },
    {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.USER,
      preferences: { notifications: true, darkMode: false },
      inquiries: [
        { id: 'inq-1', date: '2024-05-10', message: 'I need a quote for a 60x72 shower door.', status: 'pending' }
      ]
    }
  ]
};

export const getDB = (): DBState => {
  const data = localStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : initialState;
};

export const saveDB = (state: DBState) => {
  localStorage.setItem(DB_KEY, JSON.stringify(state));
};

export const DB = {
  getServices: () => getDB().services,
  addService: (service: Service) => {
    const db = getDB();
    db.services.push(service);
    saveDB(db);
  },
  updateService: (updated: Service) => {
    const db = getDB();
    db.services = db.services.map(s => s.id === updated.id ? updated : s);
    saveDB(db);
  },
  deleteService: (id: string) => {
    const db = getDB();
    db.services = db.services.filter(s => s.id !== id);
    saveDB(db);
  },
  getGallery: () => getDB().gallery,
  addGalleryItem: (item: GalleryItem) => {
    const db = getDB();
    db.gallery.push(item);
    saveDB(db);
  },
  deleteGalleryItem: (id: string) => {
    const db = getDB();
    db.gallery = db.gallery.filter(g => g.id !== id);
    saveDB(db);
  },
  getUsers: () => getDB().users,
  getUser: (id: string) => getDB().users.find(u => u.id === id),
  updateUser: (updated: UserProfile) => {
    const db = getDB();
    db.users = db.users.map(u => u.id === updated.id ? updated : u);
    saveDB(db);
  }
};
