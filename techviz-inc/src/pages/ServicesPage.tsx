import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/mockData';
import { 
  Smartphone, Tablet, Layers, Globe, Palette, Cpu, CheckCircle2, 
  ArrowRight, ShieldCheck, Zap, Award, Layers2, Sparkles, ChevronRight 
} from 'lucide-react';

interface ServicesPageProps {
  openContactModal: (defaultService?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ openContactModal, onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'mobile', label: 'Mobile Apps (iOS & Android)' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'ai', label: 'AI & Cloud Infrastructure' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  const handleServiceClick = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-14 rounded-3xl shadow-xl border border-slate-800 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Full-Lifecycle Engineering</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our Core Software & Mobile Services
        </h1>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From native Swift iOS apps and Kotlin Android systems to cross-platform Flutter builds and enterprise Gemini AI pipelines, TechViz Inc provides end-to-end technical craftsmanship.
        </p>

        {/* Category Filter Tabs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Grid */}
      <div className="space-y-12">
        {filteredServices.map((srv) => (
          <div 
            key={srv.id}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 hover:border-sky-300 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-sky-50 text-[#0284C7] border border-sky-100 rounded-2xl cursor-pointer" onClick={() => handleServiceClick(srv.id)}>
                  <Smartphone className="w-7 h-7" />
                </div>
                <div>
                  <h2 
                    onClick={() => handleServiceClick(srv.id)} 
                    className="text-2xl font-extrabold text-[#0A2540] hover:text-[#0284C7] cursor-pointer transition-colors"
                  >
                    {srv.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {srv.platforms.map((plat, idx) => (
                      <span key={idx} className="bg-slate-100 text-[#0284C7] border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {srv.fullDesc}
              </p>

              {/* Key Features */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">Core Capabilities</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {srv.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Tech Stack & Frameworks</div>
                <div className="flex flex-wrap gap-2">
                  {srv.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Deliverables & CTA Box */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider border-b border-slate-200 pb-2">
                  Project Deliverables
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {srv.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-800 flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Intellectual Property & Source Code Transfer</span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleServiceClick(srv.id)}
                  className="w-full py-3 px-4 bg-[#0A2540] hover:bg-[#041627] text-white font-extrabold rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore {srv.title} Details</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={() => openContactModal(srv.id)}
                  className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-xs border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Request Quote</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
