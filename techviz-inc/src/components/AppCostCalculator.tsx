import React, { useState } from 'react';
import { EstimatorState } from '../types';
import { 
  Calculator, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, 
  Smartphone, Globe, Layers, ShieldCheck, Clock, Users, ArrowRight,
  DollarSign, Zap, RefreshCw, Send, Loader2
} from 'lucide-react';
import { submitToGoogleSheets } from '../services/googleSheets';

interface AppCostCalculatorProps {
  onCompleteQuote: (summary: string) => void;
}

export const AppCostCalculator: React.FC<AppCostCalculatorProps> = ({ onCompleteQuote }) => {
  const [step, setStep] = useState<number>(1);
  const [state, setState] = useState<EstimatorState>({
    platform: 'cross_platform',
    complexity: 'standard',
    features: ['auth', 'push', 'payment'],
    designLevel: 'custom',
    timeline: 'standard'
  });

  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');

  // Calculation Logic
  const calculatePrice = () => {
    let base = 12000;

    // Platform
    if (state.platform === 'ios') base += 4000;
    if (state.platform === 'android') base += 4000;
    if (state.platform === 'cross_platform') base += 6000;
    if (state.platform === 'web') base += 5000;
    if (state.platform === 'all') base += 11000;

    // Complexity
    if (state.complexity === 'mvp') base *= 0.85;
    if (state.complexity === 'standard') base *= 1.15;
    if (state.complexity === 'enterprise') base *= 1.6;

    // Features
    const featurePrices: Record<string, number> = {
      auth: 1200,
      payment: 2500,
      push: 1000,
      ai: 4500,
      maps: 2200,
      chat: 2800,
      admin: 3500
    };

    state.features.forEach(f => {
      base += featurePrices[f] || 1500;
    });

    // Design
    if (state.designLevel === 'clean') base += 1500;
    if (state.designLevel === 'custom') base += 3500;
    if (state.designLevel === 'bespoke') base += 7500;

    // Timeline multiplier
    if (state.timeline === 'express') base *= 1.25;

    const min = Math.round(base);
    const max = Math.round(base * 1.3);

    return { min, max };
  };

  const priceRange = calculatePrice();

  const toggleFeature = (id: string) => {
    if (state.features.includes(id)) {
      setState({ ...state, features: state.features.filter(f => f !== id) });
    } else {
      setState({ ...state, features: [...state.features, id] });
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);

    const timelineEstimate = state.complexity === 'mvp' ? '6 - 8 Weeks' : state.complexity === 'enterprise' ? '16 - 24 Weeks' : '10 - 14 Weeks';

    await submitToGoogleSheets({
      formType: 'App Cost Calculator Estimate Request',
      name: leadName,
      email: leadEmail,
      phone: leadPhone || '',
      platform: state.platform,
      complexity: state.complexity,
      designLevel: state.designLevel,
      timeline: state.timeline,
      featuresSelected: state.features.join(', '),
      estimatedPriceRange: `$${priceRange.min.toLocaleString()} - $${priceRange.max.toLocaleString()}`,
      estimatedTimelineWeeks: timelineEstimate
    });

    setIsSubmittingLead(false);
    setSubmitted(true);
    const summary = `App Estimate Request: ${state.platform.toUpperCase()} (${state.complexity.toUpperCase()}), Budget Range $${priceRange.min.toLocaleString()} - $${priceRange.max.toLocaleString()}. Contact: ${leadName} (${leadEmail}, ${leadPhone})`;
    onCompleteQuote(summary);
  };

  return (
    <div className="bg-slate-900/90 rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden max-w-5xl mx-auto my-6 text-white">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white p-6 sm:p-8 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full text-xs font-bold text-cyan-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Interactive Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              App Development Cost Calculator
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Get an accurate time and cost estimation for your custom iOS, Android, or Web application in 5 quick steps.
            </p>
          </div>

          {/* Real-time Price Counter Badge */}
          <div className="bg-slate-900 border border-cyan-500/30 p-4 rounded-2xl text-right shrink-0">
            <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Estimated Investment</span>
            <span className="text-xl sm:text-2xl font-black text-amber-400">
              ${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex-1 flex flex-col gap-1">
              <div 
                className={`h-2 rounded-full transition-all ${
                  s <= step ? 'bg-gradient-to-r from-cyan-400 to-amber-400' : 'bg-slate-800'
                }`}
              ></div>
              <span className={`text-[10px] font-bold text-center ${s === step ? 'text-cyan-300' : 'text-slate-500'}`}>
                Step {s}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Content */}
      <div className="p-6 sm:p-10">
        
        {/* Step 1: Platform Selection */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-white">Step 1: Which platforms are you targeting?</h3>
              <p className="text-slate-400 text-sm mt-1">Select the main deployment target for your digital product.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'cross_platform', title: 'Cross-Platform (iOS & Android)', desc: 'React Native or Flutter single codebase for both app stores.', icon: Layers, recommended: true },
                { id: 'ios', title: 'Native Apple iOS', desc: 'Swift & SwiftUI tailored specifically for iPhone & iPad.', icon: Smartphone },
                { id: 'android', title: 'Native Android', desc: 'Kotlin & Jetpack Compose for global Android devices.', icon: Smartphone },
                { id: 'web', title: 'Web & SaaS Platform', desc: 'Full-stack React, Next.js & Node.js web application.', icon: Globe },
                { id: 'all', title: 'Full Ecosystem (Mobile + Web)', desc: 'iOS, Android, Web App, and Admin Cloud Dashboard.', icon: Zap }
              ].map((p) => {
                const Icon = p.icon;
                const isSelected = state.platform === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setState({ ...state, platform: p.id as any })}
                    className={`p-5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/80 ring-2 ring-cyan-500/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    {p.recommended && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <div className={`p-2.5 rounded-xl w-fit mb-3 ${isSelected ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black' : 'bg-slate-800 text-slate-300'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-white text-base">{p.title}</div>
                      <div className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Product Complexity & Scale */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-white">Step 2: What is the scale & complexity?</h3>
              <p className="text-slate-400 text-sm mt-1">Select the development phase that best matches your launch goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  id: 'mvp',
                  title: 'MVP / Proof of Concept',
                  desc: 'Fast-to-market essential features to validate user demand and pitch investors.',
                  weeks: '6 - 8 Weeks',
                  team: '2 Engineers, 1 UX Designer'
                },
                {
                  id: 'standard',
                  title: 'Full Business Application',
                  desc: 'Complete commercial product with polished workflows, integrations, and monetization.',
                  weeks: '10 - 14 Weeks',
                  team: '3 Engineers, 1 Architect, 1 QA',
                  recommended: true
                },
                {
                  id: 'enterprise',
                  title: 'Enterprise Platform',
                  desc: 'High-availability architecture with custom backend, microservices, and SOC2 compliance.',
                  weeks: '16 - 24 Weeks',
                  team: '5+ Senior Engineers, Lead Architect'
                }
              ].map((item) => {
                const isSelected = state.complexity === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setState({ ...state, complexity: item.id as any })}
                    className={`p-6 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/80 ring-2 ring-cyan-500/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    {item.recommended && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                        Recommended
                      </span>
                    )}
                    <div className="space-y-3">
                      <div className="font-bold text-white text-lg">{item.title}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                      
                      <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="font-semibold">{item.weeks}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-300">
                          <Users className="w-4 h-4 text-emerald-400" />
                          <span>{item.team}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Features Selector */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-white">Step 3: Which key features will your app require?</h3>
              <p className="text-slate-400 text-sm mt-1">Select all modules that apply to your application roadmap.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { id: 'auth', label: 'User Auth & Social Login', sub: 'Biometrics, OAuth, SSO, Passkeys' },
                { id: 'payment', label: 'In-App Payments & Stripe', sub: 'Apple Pay, Google Pay, Subscriptions' },
                { id: 'push', label: 'Push Notifications', sub: 'Firebase FCM, OneSignal automated alerts' },
                { id: 'ai', label: 'Generative AI & Gemini API', sub: 'LLM Chatbot, Smart Summarizer, Vision' },
                { id: 'maps', label: 'Geolocation & Live Maps', sub: 'Google Maps API, GPS Tracking, Route UI' },
                { id: 'chat', label: 'Real-time Chat & WebSockets', sub: '1-on-1 messaging, presence, attachments' },
                { id: 'admin', label: 'Custom Web Admin Portal', sub: 'User management, analytics, content CMS' }
              ].map((feat) => {
                const isSelected = state.features.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/80 text-white font-semibold ring-1 ring-cyan-500/40'
                        : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800 text-slate-300'
                    }`}
                  >
                    <div className={`mt-0.5 p-1 rounded-md shrink-0 ${isSelected ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-500'}`}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{feat.label}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{feat.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: UI/UX Design Level */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-white">Step 4: What level of UI/UX design do you need?</h3>
              <p className="text-slate-400 text-sm mt-1">Our designers tailor user interfaces for optimal engagement.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  id: 'clean',
                  title: 'Clean Native Guidelines',
                  desc: 'Standard HIG and Material Design 3 UI patterns. Minimalist, highly functional, cost-efficient.'
                },
                {
                  id: 'custom',
                  title: 'Custom Brand & Animations',
                  desc: 'Unique visual theme matching your brand style guide, custom micro-interactions and smooth page transitions.',
                  recommended: true
                },
                {
                  id: 'bespoke',
                  title: 'Bespoke Design System',
                  desc: 'Full Figma design system, bespoke illustrations, 3D assets, custom icons, and usability testing labs.'
                }
              ].map((lvl) => {
                const isSelected = state.designLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setState({ ...state, designLevel: lvl.id as any })}
                    className={`p-6 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-950/80 ring-2 ring-cyan-500/40 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    {lvl.recommended && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                        Most Popular
                      </span>
                    )}
                    <div className="space-y-3">
                      <div className="font-bold text-white text-lg">{lvl.title}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{lvl.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 5: Timeline & Summary Review */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-white">Step 5: Review Estimate & Schedule Free Proposal</h3>
              <p className="text-slate-400 text-sm mt-1">Here is your tailored project calculation based on your selections.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Calculation Breakdown Box */}
              <div className="md:col-span-5 bg-slate-950/90 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-2">
                  Estimate Summary
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Platform:</span>
                    <strong className="text-white capitalize">{state.platform.replace('_', ' ')}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Complexity:</span>
                    <strong className="text-white capitalize">{state.complexity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Design Level:</span>
                    <strong className="text-white capitalize">{state.designLevel}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Features Count:</span>
                    <strong className="text-white">{state.features.length} Modules</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-xs text-slate-400">Estimated Cost Range:</div>
                  <div className="text-2xl font-black text-amber-400 mt-1">
                    ${priceRange.min.toLocaleString()} - ${priceRange.max.toLocaleString()}
                  </div>
                </div>

                <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes 30-day post-launch warranty & source code IP transfer.</span>
                </div>
              </div>

              {/* Lead Submission Form */}
              <div className="md:col-span-7 bg-slate-950/90 p-6 rounded-2xl border border-slate-800">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Estimate Proposal Sent!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto">
                      Thank you {leadName}. A Principal Architect from TechViz Inc will review your project parameters and send a detailed PDF roadmap to <strong>{leadEmail}</strong> within 2 hours.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:underline"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Start New Estimate</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitLead} className="space-y-4">
                    <h4 className="text-base font-bold text-white">Get Your Official PDF Proposal</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white text-xs focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-slate-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white text-xs focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-slate-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp (Optional)</label>
                      <input
                        type="tel"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 text-white text-xs focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-slate-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-sky-400 disabled:from-slate-700 disabled:to-slate-700 text-black disabled:text-slate-300 font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all disabled:cursor-not-allowed"
                    >
                      {isSubmittingLead ? (
                        <>
                          <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                          <span>Sending to Google Sheets...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black" />
                          <span>Generate Detailed Proposal & Book Strategy Call</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
              step === 1
                ? 'opacity-40 cursor-not-allowed text-slate-600'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {step < 5 && (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 text-black font-extrabold rounded-xl text-xs shadow-lg transition-all"
            >
              <span>Continue to Step {step + 1}</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
