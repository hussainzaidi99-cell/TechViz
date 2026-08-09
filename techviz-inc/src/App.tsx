import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WebDevPage } from './pages/WebDevPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AppCostCalculator } from './components/AppCostCalculator';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ios-app-development');
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [contactModalDefaultService, setContactModalDefaultService] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActivePage('service-detail');
  };

  const openContactModal = (defaultService?: string) => {
    setContactModalDefaultService(defaultService);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openContactModal={openContactModal} 
        onSelectService={handleSelectService}
      />

      {/* Main Active Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            openContactModal={openContactModal} 
            onSelectService={handleSelectService}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage 
            openContactModal={openContactModal} 
            onSelectService={handleSelectService}
          />
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailPage 
            serviceId={selectedServiceId}
            onSelectService={handleSelectService}
            setActivePage={setActivePage}
            openContactModal={openContactModal}
          />
        )}

        {activePage === 'webdev' && (
          <WebDevPage 
            openContactModal={openContactModal}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioPage 
            openContactModal={openContactModal} 
          />
        )}

        {activePage === 'calculator' && (
          <div className="pt-28 pb-16 px-4">
            <AppCostCalculator 
              onCompleteQuote={(summary) => {
                console.log(summary);
              }} 
            />
          </div>
        )}

        {activePage === 'about' && (
          <AboutPage 
            openContactModal={openContactModal} 
          />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Universal Footer */}
      <Footer 
        setActivePage={setActivePage} 
        openContactModal={openContactModal} 
        onSelectService={handleSelectService}
      />

      {/* Quick Contact / Request Quote Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
        defaultService={contactModalDefaultService} 
      />
    </div>
  );
}
