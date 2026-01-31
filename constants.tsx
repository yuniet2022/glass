
import React from 'react';
import { Service, GalleryItem, UserRole } from './types';

export const ADMIN_PHONE = '(941) 735-0373';
export const INSTAGRAM_URL = 'https://www.instagram.com/exceptionalwindowsanddoors?igsh=MXVvNjVmY2hnNTYxcg%3D%3D&utm_source=qr';
export const FACEBOOK_URL = 'https://www.facebook.com/share/18BzkS9zzH/?mibextid=wwXIfr';

export const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Shower Enclosures',
    description: 'Custom frameless and semi-frameless glass shower doors tailored to your bathroom dimensions.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    category: 'Residential'
  },
  {
    id: '2',
    title: 'Custom Mirrors',
    description: 'From floor-to-ceiling gym mirrors to elegant decorative vanity mirrors with polished edges.',
    imageUrl: 'https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&q=80&w=800',
    category: 'Interior'
  },
  {
    id: '3',
    title: 'Glass Railings',
    description: 'Ultra-modern glass railings for balconies and staircases that provide safety without blocking views.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    category: 'Architectural'
  },
  {
    id: '4',
    title: 'Commercial Storefronts',
    description: 'Durable and professional glass solutions for retail stores, offices, and commercial buildings.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    category: 'Commercial'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: 'g0', type: 'image', title: 'Exceptional Entryway', url: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=1200', category: 'Doors' },
  { id: 'g1', type: 'image', title: 'Modern Bath', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200', category: 'Showers' },
  { id: 'g2', type: 'image', title: 'Luxe Railing', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200', category: 'Railings' },
  { id: 'g3', type: 'image', title: 'Office Glass', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200', category: 'Commercial' },
  { id: 'g4', type: 'image', title: 'Wall Mirror', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200', category: 'Mirrors' },
  { id: 'g5', type: 'image', title: 'Panoramic Windows', url: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1200', category: 'Windows' },
];

export const SYSTEM_PROMPT = `You are the AI assistant for Exceptional Windows & Doors, LLC.
Your phone number is ${ADMIN_PHONE}.
Your mission: "A Better View of Quality Service."
Your goal is to help customers with:
1. Product Brands: We carry PGT (WinGuard, EnergyVue), ES Windows (Elite, Prestige), ECO Window Systems, JELD-WEN, and Therma-Tru Fiberglass Doors.
2. Compliance: Explain that all products have Florida Product Approvals (FL#). Explain that HVHZ areas require Miami-Dade NOA documentation.
3. Permitting: We handle permit packages including approval sheets, design pressures, and size charts.
4. Window Types: We install Single Hung, Double Hung, Horizontal Rollers, Casements, Awnings, Picture, and Architectural Shapes.
5. Door Types: Sliding (pocketing/stacking up to 4 panels) and Swing (French, Inswing/Outswing).
Be professional, authoritative on Florida building codes, and guide users to the "Free Quote" section or call ${ADMIN_PHONE} for site visits.`;
