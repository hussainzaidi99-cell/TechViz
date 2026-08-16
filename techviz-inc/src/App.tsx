import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WebDevPage } from './pages/WebDevPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [contactModalDefaultService, setContactModalDefaultService] = useState<string | undefined>(undefined);

  const openContactModal = (defaultService?: string) => {
    setContactModalDefaultService(defaultService);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0284C7] selection:text-white">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Global Top Navbar */}
      <Navbar openContactModal={openContactModal} />

      {/* Primary Routes Viewport */}
      <main className="flex-1">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage openContactModal={openContactModal} />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesPage openContactModal={openContactModal} />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage openContactModal={openContactModal} />} />
          <Route path="/service-detail" element={<ServiceDetailPage openContactModal={openContactModal} />} />

          {/* Web Development & Pricing Routes */}
          <Route path="/web-development" element={<WebDevPage openContactModal={openContactModal} />} />
          <Route path="/webdev" element={<WebDevPage openContactModal={openContactModal} />} />
          <Route path="/pricing" element={<WebDevPage openContactModal={openContactModal} />} />

          {/* Case Studies & Portfolio Routes */}
          <Route path="/case-studies" element={<PortfolioPage openContactModal={openContactModal} />} />
          <Route path="/portfolio" element={<PortfolioPage openContactModal={openContactModal} />} />

          {/* Interactive Estimator Route */}
          <Route path="/calculator" element={<CalculatorPage openContactModal={openContactModal} />} />

          {/* Company & Contact Routes */}
          <Route path="/about" element={<AboutPage openContactModal={openContactModal} />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Paddle / Legal Compliance Routes */}
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/terms-of-service" element={<LegalPage type="terms" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="/refund-policy" element={<LegalPage type="refund" />} />

          {/* Catch-all Wildcard Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer openContactModal={openContactModal} />

      {/* Reusable Lead Capture Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
        defaultService={contactModalDefaultService} 
      />
    </div>
  );
}
