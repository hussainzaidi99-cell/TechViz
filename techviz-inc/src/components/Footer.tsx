import React, { useState } from 'react';
import { PageId } from '../types';
import { TechVizLogo } from './TechVizLogo';
import { 
  Mail, Phone, MapPin, ArrowRight, Shield, Award, CheckCircle2, 
  Linkedin, Twitter, Github, Globe, Heart 
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  openContactModal: (defaultService?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, openContactModal, onSelectService }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleNav = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2540] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-700/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <button 
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none"
            >
              <TechVizLogo size="lg" lightMode={true} />
            </button>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              TechViz Inc is a premier digital product and custom mobile app development agency. We partner with ambitious startups and global enterprises to build high-impact iOS, Android, and Web applications.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Clutch 4.9★ Rated</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs font-medium text-slate-300">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>SOC2 & HIPAA Compliant</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                Subscribe to Tech & Product Insights
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You are subscribed to TechViz Insights.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-cyan-400 flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-black px-4 py-2.5 rounded-xl text-xs hover:opacity-90 transition-opacity shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cyan-400 font-black text-sm tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('webdev')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-bold text-sky-300">
                  <span>Web Dev Packages</span>
                  <span className="bg-amber-400 text-black text-[9px] font-extrabold px-1.5 rounded">Packages</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-300 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-300 transition-colors">
                  Case Studies & Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span>App Cost Estimator</span>
                  <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded">Hot</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-300 transition-colors">
                  About TechViz
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-cyan-400 font-black text-sm tracking-wider uppercase mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('ios-app-development'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  iOS App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('android-app-development'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Android App Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('cross-platform-development'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Cross-Platform Apps
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('web-saas-development'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Web & SaaS Engineering
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('ui-ux-product-design'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  UI/UX Product Design
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onSelectService) { onSelectService('ai-cloud-integration'); } else { handleNav('services'); }
                  }} 
                  className="hover:text-cyan-300 transition-colors text-left"
                >
                  Enterprise AI Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Global Hubs */}
          <div className="space-y-4">
            <h4 className="text-cyan-400 font-black text-sm tracking-wider uppercase mb-4">
              Global Offices
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">San Francisco (HQ)</strong>
                  <span className="text-slate-400">500 Howard St, Suite 400, CA 94105</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">London Hub</strong>
                  <span className="text-slate-400">1 Primrose St, London EC2A 2EX</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+1 (800) 583-2484</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>contact@techvizinc.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} TechViz Inc. All rights reserved. Registered Digital Agency.
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">
              Security & SLA
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
