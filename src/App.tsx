import React, { useState, useMemo } from 'react';
import type { Language, ServiceCategory, ServiceItem, ServiceProvider, DemoServiceRequest } from './types';
import { translations } from './data/translations';
import { servicesData } from './data/services';
import { providersData } from './data/providers';
import { loadDemoRequests } from './utils/storage';
import { useVoiceRecognition } from './hooks/useVoiceRecognition';

import { Header } from './components/Header';
import { AdvisoryBanner } from './components/AdvisoryBanner';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { ServiceDirectory } from './components/ServiceDirectory';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProviderDirectory } from './components/ProviderDirectory';
import { DemoRequestModal } from './components/DemoRequestModal';
import { TrackingDashboard } from './components/TrackingDashboard';
import { VoiceSearchModal } from './components/VoiceSearchModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Language State with localStorage persistence
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('suvidha4c_lang');
      if (saved === 'hi' || saved === 'mr' || saved === 'en') {
        return saved;
      }
    }
    return 'en';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('suvidha4c_lang', newLang);
    }
  };

  const ui = translations[language];

  // Navigation and View states
  const [activeTab, setActiveTab] = useState<'services' | 'providers' | 'track'>('services');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');

  // Modals state
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<ServiceItem | null>(null);
  const [bookingProvider, setBookingProvider] = useState<ServiceProvider | null>(null);

  // Stored demo requests state
  const [demoRequests, setDemoRequests] = useState<DemoServiceRequest[]>(() => loadDemoRequests());

  const refreshRequests = () => {
    setDemoRequests(loadDemoRequests());
  };

  // Voice Recognition Hook
  const {
    isListening,
    transcript,
    interimTranscript,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript
  } = useVoiceRecognition(language, (finalText) => {
    setSearchQuery(finalText);
  });

  const handleOpenVoiceModal = () => {
    resetTranscript();
    setIsVoiceModalOpen(true);
    startListening();
  };

  const handleCloseVoiceModal = () => {
    stopListening();
    setIsVoiceModalOpen(false);
  };

  const handleApplyVoiceQuery = (query: string) => {
    setSearchQuery(query);
    setActiveTab('services');
  };

  // Handle Booking Flow
  const handleOpenBookingForService = (service: ServiceItem) => {
    setBookingService(service);
    setBookingProvider(null);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingForProvider = (provider: ServiceProvider) => {
    setBookingProvider(provider);
    setBookingService(null);
    setIsBookingModalOpen(true);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ServiceCategory, number> = {
      all: servicesData.length,
      certificates: 0,
      revenue: 0,
      education: 0,
      welfare: 0,
      health: 0,
      agriculture: 0,
      identity: 0
    };

    servicesData.forEach(s => {
      if (counts[s.category] !== undefined) {
        counts[s.category]++;
      }
    });

    return counts;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header with Language Selector & Navigation */}
      <Header
        currentLang={language}
        onLanguageChange={handleLanguageChange}
        ui={ui}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenVoiceModal={handleOpenVoiceModal}
        activeRequestsCount={demoRequests.length}
      />

      {/* 2. Official Civic Advisory Banner */}
      <AdvisoryBanner ui={ui} />

      {/* 3. Hero Section (Shown on Services Tab or Overview) */}
      <HeroSection
        ui={ui}
        currentLang={language}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (activeTab !== 'services') {
            setActiveTab('services');
          }
        }}
        onOpenVoiceModal={handleOpenVoiceModal}
        isListening={isListening}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'services' && (
          <>
            {/* Category Filter Cards */}
            <CategoryGrid
              ui={ui}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                const el = document.getElementById('services-directory');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              categoryCounts={categoryCounts}
            />

            {/* Service Directory Cards */}
            <ServiceDirectory
              services={servicesData}
              ui={ui}
              currentLang={language}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectService={(service) => setSelectedService(service)}
              onBookAssistance={handleOpenBookingForService}
            />
          </>
        )}

        {activeTab === 'providers' && (
          <ProviderDirectory
            providers={providersData}
            ui={ui}
            currentLang={language}
            onRequestAssistance={handleOpenBookingForProvider}
          />
        )}

        {activeTab === 'track' && (
          <TrackingDashboard
            requests={demoRequests}
            ui={ui}
            currentLang={language}
            onRefreshRequests={refreshRequests}
            onOpenBookingModal={() => {
              setBookingService(null);
              setBookingProvider(null);
              setIsBookingModalOpen(true);
            }}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer ui={ui} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        ui={ui}
        currentLang={language}
        onBookAssistance={(srv) => {
          setSelectedService(null);
          handleOpenBookingForService(srv);
        }}
      />

      {/* Voice Assistant Modal */}
      <VoiceSearchModal
        isOpen={isVoiceModalOpen}
        onClose={handleCloseVoiceModal}
        ui={ui}
        currentLang={language}
        isListening={isListening}
        transcript={transcript}
        interimTranscript={interimTranscript}
        error={error}
        isSupported={isSupported}
        onStartListening={startListening}
        onStopListening={stopListening}
        onApplyTranscript={handleApplyVoiceQuery}
        services={servicesData}
        onSelectService={(service) => {
          setSelectedService(service);
        }}
      />

      {/* Demo Request Booking Modal */}
      <DemoRequestModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        ui={ui}
        currentLang={language}
        services={servicesData}
        providers={providersData}
        preselectedService={bookingService}
        preselectedProvider={bookingProvider}
        onSuccess={() => {
          refreshRequests();
        }}
        onGoToTracker={() => {
          setActiveTab('track');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
};

export default App;
