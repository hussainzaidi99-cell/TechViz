import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { 
  Briefcase, ArrowUpRight, Star, CheckCircle2, Shield, 
  X, Layers, Smartphone, Sparkles, Building 
} from 'lucide-react';

interface PortfolioPageProps {
  openContactModal: (defaultService?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ openContactModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Mobile App', label: 'Mobile Apps' },
    { id: 'Healthcare', label: 'Healthcare & Telehealth' },
    { id: 'SaaS', label: 'SaaS & Web Platforms' },
    { id: 'Logistics', label: 'Mobility & Logistics' }
  ];

  const filteredCaseStudies = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category.includes(activeCategory));

  return (
    <div className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-14 rounded-3xl shadow-xl border border-slate-800 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          <span>Case Studies & Client Impact</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our Mobile & Software Portfolio
        </h1>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Explore real-world applications designed, engineered, and launched by TechViz Inc. Over $120M in venture funding raised by our client partners.
        </p>

        {/* Filter Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg scale-105'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCaseStudies.map((cs) => (
          <div
            key={cs.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image Banner */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={cs.heroImage}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900/90 text-sky-300 border border-slate-700 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {cs.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{cs.client}</span>
                </div>

                <h2 className="text-xl font-bold text-[#0A2540] leading-snug group-hover:text-[#0284C7] transition-colors">
                  {cs.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cs.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                      <div className="text-sm font-black text-[#0284C7]">{m.value}</div>
                      <div className="text-[10px] text-slate-600 font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-100 text-[#0284C7] border border-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Trigger */}
            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={() => setSelectedCaseStudy(cs)}
                className="w-full py-3 bg-slate-100 hover:bg-[#0A2540] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Deep-Dive Modal Drawer */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 bg-slate-50 text-[#0A2540] flex items-center justify-between relative shrink-0 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">{selectedCaseStudy.category}</span>
                <h3 className="text-xl font-bold mt-1 text-[#0A2540]">{selectedCaseStudy.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-200/80 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
              <div className="h-56 rounded-2xl overflow-hidden border border-slate-200">
                <img src={selectedCaseStudy.heroImage} alt={selectedCaseStudy.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#0A2540] text-base">The Business Challenge</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.challenge}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#0284C7] text-base">TechViz Engineering Solution</h4>
                <p className="text-slate-600 leading-relaxed">{selectedCaseStudy.solution}</p>
              </div>

              {selectedCaseStudy.testimonial && (
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <p className="italic text-slate-700 text-xs sm:text-sm">"{selectedCaseStudy.testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img src={selectedCaseStudy.testimonial.avatar} alt="" className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <strong className="block text-[#0A2540] text-xs font-bold">{selectedCaseStudy.testimonial.author}</strong>
                      <span className="text-[11px] text-slate-600">{selectedCaseStudy.testimonial.title}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    openContactModal();
                  }}
                  className="py-3 px-6 bg-[#0A2540] hover:bg-[#041627] text-white font-extrabold rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Build Similar App for My Business</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
