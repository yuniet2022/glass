
import React, { useState, useEffect } from 'react';
import { UserRole, UserProfile } from './types';
import { DB } from './services/db';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AdminDashboard from './components/AdminDashboard';
import ClientPortal from './components/ClientPortal';
import ChatBot from './components/ChatBot';
import AboutUs from './components/AboutUs';
import QuoteForm from './components/QuoteForm';
import CallButton from './components/CallButton';
import ProductGuide from './components/ProductGuide';

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>(UserRole.GUEST);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [view, setView] = useState<'home' | 'gallery' | 'portal' | 'admin' | 'about' | 'quote' | 'products'>('home');

  useEffect(() => {
    const savedRole = localStorage.getItem('app_role') as UserRole;
    if (savedRole) {
      setCurrentRole(savedRole);
      const user = DB.getUsers().find(u => u.role === savedRole);
      if (user) setCurrentUser(user);
    }
  }, []);

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    localStorage.setItem('app_role', role);
    if (role === UserRole.GUEST) {
      setCurrentUser(null);
      setView('home');
    } else {
      const user = DB.getUsers().find(u => u.role === role);
      setCurrentUser(user || null);
      setView(role === UserRole.ADMIN ? 'admin' : 'portal');
    }
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setView('gallery')} onQuote={() => setView('quote')} />
            <Services />
            <Gallery limit={3} onSeeMore={() => setView('gallery')} />
          </>
        );
      case 'gallery':
        return <Gallery />;
      case 'products':
        return <ProductGuide onQuote={() => setView('quote')} />;
      case 'about':
        return <AboutUs />;
      case 'quote':
        return <QuoteForm onSuccess={() => setView('home')} />;
      case 'admin':
        return currentRole === UserRole.ADMIN ? <AdminDashboard /> : <div className="p-20 text-center">Unauthorized</div>;
      case 'portal':
        return currentUser ? <ClientPortal user={currentUser} /> : <div className="p-20 text-center">Please login</div>;
      default:
        return <Hero onExplore={() => setView('gallery')} onQuote={() => setView('quote')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header 
        currentRole={currentRole} 
        onRoleChange={handleRoleChange} 
        setView={setView}
        currentView={view}
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={setView} />
      
      <div className="relative">
        <CallButton />
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
