import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { TechVizLogo } from './TechVizLogo';
import { 
  Menu, X, ChevronDown, ArrowRight, 
  Smartphone, Globe, Layers, Palette, Cpu 
} from 'lucide-react';

interface NavbarProps {
  openContactModal: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services', isDropdown: true },
    { path: '/web-development', label: 'Web Dev', badge: '$600+' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/calculator', label: 'Estimator' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleSelectServiceItem = (serviceId: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/services/${serviceId}`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="focus:outline-none focus:ring-2 focus:ring-[#0284C7] rounded-lg p-0.5 transition-transform hover:opacity-95 shrink-0"
          aria-label="TechViz Inc Home"
        >
          <TechVizLogo size="md" lightMode={false} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isServicesActive = location.pathname.startsWith('/services');
              return (
                <div 
                  key={link.path} 
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <NavLink
                    to="/services"
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-1 ${
                      isServicesActive
                        ? 'text-[#0284C7] bg-sky-50 font-bold'
                        : 'text-slate-700 hover:text-[#0A2540] hover:bg-slate-100/80'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
                  </NavLink>

                  {/* Services Dropdown */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-[480px] bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid grid-cols-2 gap-2 transition-all animate-in fade-in duration-150">
                      <Link
                        to="/web-development"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200 col-span-2 bg-sky-50/60"
                      >
                        <div className="p-2 rounded-lg bg-[#0284C7] text-white">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-[#0A2540] text-xs flex items-center gap-1.5">
                            <span>Web Dev Packages</span>
                            <span className="text-[10px] bg-amber-500 text-white font-extrabold px-1.5 py-0.2 rounded">$600 - $1,500</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">Custom React & Next.js Websites</div>
                        </div>
                      </Link>

                      <button
                        onClick={() => handleSelectServiceItem('ios-app-development')}
                        className="p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200"
                      >
                        <div className="p-2 rounded-lg bg-sky-50 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A2540] text-xs group-hover:text-[#0284C7]">iOS & Android Native</div>
                          <div className="text-[11px] text-slate-500">Swift & Kotlin Apps</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleSelectServiceItem('cross-platform-development')}
                        className="p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A2540] text-xs group-hover:text-[#0284C7]">Cross-Platform</div>
                          <div className="text-[11px] text-slate-500">React Native & Flutter</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleSelectServiceItem('ui-ux-product-design')}
                        className="p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200"
                      >
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <Palette className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A2540] text-xs group-hover:text-[#0284C7]">UI/UX Design</div>
                          <div className="text-[11px] text-slate-500">Figma Wireframes & UI</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleSelectServiceItem('ai-cloud-integration')}
                        className="p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200"
                      >
                        <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#0A2540] text-xs group-hover:text-[#0284C7]">AI & Cloud Systems</div>
                          <div className="text-[11px] text-slate-500">Gemini AI Integrations</div>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-semibold transition-all inline-flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#0284C7] bg-sky-50 font-bold'
                      : 'text-slate-700 hover:text-[#0A2540] hover:bg-slate-100/80'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-amber-500 text-white text-[10px] font-extrabold px-1.5 py-0.2 rounded uppercase">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Single Primary Navbar CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => openContactModal()}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0A2540] hover:bg-[#041627] rounded-xl shadow-sm transition-all active:scale-95"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-[#0A2540] hover:bg-slate-100 min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between min-h-[44px] ${
                    isActive
                      ? 'bg-sky-50 text-[#0284C7] font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-1 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal();
              }}
              className="w-full min-h-[44px] py-2.5 px-4 bg-[#0A2540] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
