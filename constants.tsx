
import React from 'react';
import { Service, GalleryItem, UserRole } from './types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Shower Enclosures',
    description: 'Custom frameless and semi-frameless glass shower doors tailored to your bathroom dimensions.',
    imageUrl: 'https://picsum.photos/seed/glass1/800/600',
    category: 'Residential'
  },
  {
    id: '2',
    title: 'Custom Mirrors',
    description: 'From floor-to-ceiling gym mirrors to elegant decorative vanity mirrors with polished edges.',
    imageUrl: 'https://picsum.photos/seed/mirror2/800/600',
    category: 'Interior'
  },
  {
    id: '3',
    title: 'Glass Railings',
    description: 'Ultra-modern glass railings for balconies and staircases that provide safety without blocking views.',
    imageUrl: 'https://picsum.photos/seed/railing3/800/600',
    category: 'Architectural'
  },
  {
    id: '4',
    title: 'Commercial Storefronts',
    description: 'Durable and professional glass solutions for retail stores, offices, and commercial buildings.',
    imageUrl: 'https://picsum.photos/seed/comm4/800/600',
    category: 'Commercial'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  { id: 'g1', type: 'image', title: 'Modern Bath', url: 'https://picsum.photos/seed/g1/1200/800', category: 'Showers' },
  { id: 'g2', type: 'image', title: 'Luxe Railing', url: 'https://picsum.photos/seed/g2/1200/800', category: 'Railings' },
  { id: 'g3', type: 'image', title: 'Office Glass', url: 'https://picsum.photos/seed/g3/1200/800', category: 'Commercial' },
  { id: 'g4', type: 'image', title: 'Wall Mirror', url: 'https://picsum.photos/seed/g4/1200/800', category: 'Mirrors' },
  { id: 'g5', type: 'image', title: 'Patio Doors', url: 'https://picsum.photos/seed/g5/1200/800', category: 'Doors' },
  { id: 'g6', type: 'image', title: 'Kitchen Backsplash', url: 'https://picsum.photos/seed/g6/1200/800', category: 'Interior' },
];

export const SYSTEM_PROMPT = `You are the AI assistant for Sarasota Glass Elite, a premier glass and mirror installation company.
Your goal is to help customers with:
1. Product Information: Explaining differences between frameless, semi-frameless, and framed showers.
2. Estimates: Informing them that we need measurements for precise quotes, but providing general price ranges.
3. Appointments: Guiding them to the contact form or suggesting times for a site visit.
4. Technical specs: Tempered glass standards, thicknesses (3/8", 1/2"), and hardware finishes.
Be professional, helpful, and friendly. If you don't know an answer, ask the user to leave their contact info for a specialist to reach out.`;
