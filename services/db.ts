
import { Service, GalleryItem, UserProfile, UserRole, Appointment, BlockedSlot } from '../types';
import { INITIAL_SERVICES, INITIAL_GALLERY } from '../constants';

const DB_KEY = 'sarasota_glass_db';

interface DBState {
  services: Service[];
  gallery: GalleryItem[];
  users: UserProfile[];
  appointments: Appointment[];
  blockedSlots: BlockedSlot[];
}

const initialState: DBState = {
  services: INITIAL_SERVICES,
  gallery: INITIAL_GALLERY,
  appointments: [],
  blockedSlots: [],
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
  deleteService: (id: string) => {
    const db = getDB();
    db.services = db.services.filter(s => s.id !== id);
    saveDB(db);
  },
  getGallery: () => getDB().gallery,
  
  // Appointment Methods
  getAppointments: () => getDB().appointments,
  addAppointment: (app: Appointment) => {
    const db = getDB();
    db.appointments.push(app);
    saveDB(db);
  },
  
  // Blocked Slots Methods
  getBlockedSlots: () => getDB().blockedSlots,
  toggleBlockedSlot: (date: string, time: string) => {
    const db = getDB();
    const exists = db.blockedSlots.findIndex(s => s.date === date && s.time === time);
    if (exists > -1) {
      db.blockedSlots.splice(exists, 1);
    } else {
      db.blockedSlots.push({ date, time });
    }
    saveDB(db);
  },

  getUsers: () => getDB().users,
  getUser: (id: string) => getDB().users.find(u => u.id === id)
};
