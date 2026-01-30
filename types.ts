
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  title: string;
  category: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  preferences: {
    notifications: boolean;
    darkMode: boolean;
  };
  inquiries: Inquiry[];
}

export interface Inquiry {
  id: string;
  date: string;
  message: string;
  status: 'pending' | 'responded' | 'resolved';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
}
