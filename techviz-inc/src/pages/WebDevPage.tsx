import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WEB_PACKAGES } from '../data/mockData';
import { WebPackage } from '../types';
import { 
  CheckCircle2, Sparkles, Zap, ArrowRight, ShieldCheck, Globe, 
  Clock, Code, Layers, Smartphone, Check, HelpCircle, Star, Server, Lock
} from 'lucide-react';

interface WebDevPageProps {
  openContactModal: (serviceOrPackage?: string) => void;
  setActivePage?: (page: any) => void;
}

export const WebDevPage: React.FC<WebDevPageProps> = ({ openContactModal }) => {
  const [selectedBillingTab, setSelectedBillingTab] = useState<'fixed' | 'monthly'>('fixed');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSelectPackage = (pkg: WebPackage) => {
    openContactModal(`Web Package: ${pkg.name} (${pkg.price})`);
  };

  const webFaqs = [
    {
      q: 'What makes TechViz web development superior to template platforms like WordPress or Wix?',
      a: 'We build clean, custom React & Next.js applications that load in under 1 second, pass Google Web Vitals with 95+ scores, and eliminate security vulnerabilities associated with bloated third-party plugins. You receive custom code fully owned by your company.'
    },
    {
      q: 'How long does it take to launch my website?',
      a: 'Our Starter Package ($600) launches in 5–7 business days. The Professional Package ($1,000) takes 10–14 business days, and the Enterprise E-Commerce Package ($1,500) takes 18–21 business days.'
    },
    {
      q: 'Are there any hidden monthly fees or vendor lock-in?',
      a: 'Zero hidden fees! Once built, you receive 100% source code ownership. Standard web hosting costs ($10–$20/mo on cloud providers like Vercel or AWS) are handled directly through your own accounts.'
    },
    {
      q: 'Can I request custom features not listed in the standard packages?',
      a: 'Yes! We specialize in custom integrations including Gemini AI workflows, custom CRM connectors, real-time dashboards, and specialized booking systems. You can choose our Custom Enterprise option for a tailored quote.'
    },
    {
      q: 'Is my website guaranteed to work seamlessly on mobile phones?',
      a: '100% yes! Every website we build is tested rigorously across iOS Safari, Android Chrome, tablets, laptops, and ultra-wide desktop displays to guarantee fluid mobile responsiveness.'
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-28">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-14 rounded-3xl shadow-xl border border-slate-800 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>High-Performance React & Next.js Web Development</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Transparent Web Development <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">Packages & Pricing</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Get a lightning-fast, mobile-responsive web platform built by senior React engineers. Clear upfront packages starting from $600 with guaranteed turnaround.
          </p>

          {/* Value Badges */}
          <div className="pt-4 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-white">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Mobile Responsive
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
              <Zap className="w-4 h-4 text-amber-400" /> Sub-Second Loading Speed
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-sky-300" /> 100% IP Code Transfer
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md shadow-sm">
              <Clock className="w-4 h-4 text-purple-300" /> Guaranteed Timeline
            </span>
          </div>
        </div>
      </section>

      {/* 2. PACKAGES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            Upfront & Transparent Pricing
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Choose Your Web Engineering Package
          </h2>
          <p className="text-slate-600 text-sm">
            No surprise add-ons. Every package includes responsive design, SEO optimization, and dedicated post-launch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WEB_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative bg-white border ${
                pkg.popular
                  ? 'border-2 border-[#0284C7] shadow-2xl ring-4 ring-sky-100 scale-[1.02] z-10'
                  : 'border-slate-200/90 shadow-md hover:border-sky-300 hover:shadow-xl'
              }`}
            >
              {/* Popular / Badge Banner */}
              {pkg.badge && (
                <div className={`mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide uppercase ${
                  pkg.popular 
                    ? 'bg-[#0284C7] text-white shadow-sm' 
                    : 'bg-sky-50 text-[#0284C7] border border-sky-200'
                }`}>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2540]">{pkg.name}</h3>
                  <p className="text-slate-600 text-xs mt-1 min-h-[32px]">{pkg.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-slate-100 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A2540]">{pkg.price}</span>
                  {pkg.originalPrice && (
                    <span className="text-sm font-bold text-slate-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  )}
                  {pkg.price !== 'Custom' && <span className="text-xs text-slate-600 font-semibold">one-time</span>}
                </div>

                {/* Delivery & Support */}
                <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Turnaround: <strong>{pkg.deliveryTime}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Support: <strong>{pkg.support}</strong></span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Package Features Included:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Stack & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.techIncluded.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Package Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#0A2540] hover:bg-[#041627] text-white shadow-xl hover:shadow-2xl'
                      : 'bg-slate-900 hover:bg-black text-white hover:border-sky-300'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DETAILED FEATURE COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            Feature Matrix Breakdown
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
            Compare Package Features Side-by-Side
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-[#0A2540]">
                <th className="py-3 px-4 font-extrabold">Feature / Capability</th>
                <th className="py-3 px-4 font-bold text-slate-700 text-center">Starter ($600)</th>
                <th className="py-3 px-4 font-bold text-[#0284C7] bg-sky-50 text-center rounded-t-xl">Pro ($1,000)</th>
                <th className="py-3 px-4 font-bold text-slate-700 text-center">E-Commerce ($1,500)</th>
                <th className="py-3 px-4 font-bold text-slate-700 text-center">Custom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3 px-4 font-medium">Page Count Included</td>
                <td className="py-3 px-4 text-center">Up to 5 Pages</td>
                <td className="py-3 px-4 text-center font-bold text-[#0A2540] bg-sky-50/50">Up to 10 Pages</td>
                <td className="py-3 px-4 text-center">Unlimited / Full Store</td>
                <td className="py-3 px-4 text-center">Custom Portal</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Mobile Phone Responsiveness</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-sky-50/50">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">SEO & Google Indexing</td>
                <td className="py-3 px-4 text-center">Basic On-Page</td>
                <td className="py-3 px-4 text-center font-bold text-[#0A2540] bg-sky-50/50">Full On-Page & Schema</td>
                <td className="py-3 px-4 text-center">Advanced E-Com SEO</td>
                <td className="py-3 px-4 text-center">Enterprise SEO</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">CMS Content Editing</td>
                <td className="py-3 px-4 text-center text-slate-500 font-semibold">—</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-sky-50/50">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Included</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Payment Gateway & Shopping Cart</td>
                <td className="py-3 px-4 text-center text-slate-500 font-semibold">—</td>
                <td className="py-3 px-4 text-center text-slate-500 font-semibold bg-sky-50/50">—</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Stripe / PayPal</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">✓ Custom Checkout</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Turnaround Speed</td>
                <td className="py-3 px-4 text-center font-semibold">5-7 Days</td>
                <td className="py-3 px-4 text-center font-bold text-[#0A2540] bg-sky-50/50">10-14 Days</td>
                <td className="py-3 px-4 text-center font-semibold">18-21 Days</td>
                <td className="py-3 px-4 text-center font-semibold">Custom Sprint</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Source Code Ownership</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">100% Transfer</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold bg-sky-50/50">100% Transfer</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">100% Transfer</td>
                <td className="py-3 px-4 text-center text-emerald-600 font-bold">100% Transfer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. WHY TECHVIZ WEB ENGINEERING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0A2540] via-[#081f36] to-[#0A2540] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Modern Web Craftsmanship
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Why Ambitious Brands Choose TechViz Web Engineering
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            We don't build clunky, slow, plugin-heavy WordPress templates. We engineer clean React code that ranks higher and converts visitors into paying customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 bg-sky-500/20 text-sky-300 rounded-xl w-fit">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Sub-Second Load Speeds</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Every millisecond counts. Our React & Vite applications load in under 800ms, boosting Google rankings and decreasing visitor bounce rates.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 bg-emerald-500/20 text-emerald-300 rounded-xl w-fit">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Bank-Grade Security</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Zero PHP plugin vulnerabilities. Built with modern TypeScript and isolated API proxies to protect customer data and prevent unauthorized breaches.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl w-fit">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">SEO & Conversion Optimization</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Pre-rendered HTML meta structures, OpenGraph social sharing tags, fast mobile touch states, and strategically engineered lead capture call-to-actions.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WEB DEVELOPMENT FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Web Development Questions</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {webFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-2"
            >
              <h3 className="font-bold text-[#0A2540] text-sm sm:text-base flex items-center gap-2">
                <span className="text-[#0284C7] font-black">Q:</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2540] text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Need a Custom Web Solution or Consultation?</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Schedule a free 30-minute consultation with our Principal Engineers. We will review your project goals and provide a detailed blueprint and fixed quote within 2 hours.
            </p>
          </div>

          <button
            onClick={() => openContactModal('Custom Web Development Inquiry')}
            className="px-8 py-4 bg-gradient-to-r from-sky-400 to-amber-400 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl hover:opacity-90 transition-all shrink-0 flex items-center gap-2 transform active:scale-95 cursor-pointer"
          >
            <span>Request Free Web Proposal</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </div>
  );
};
