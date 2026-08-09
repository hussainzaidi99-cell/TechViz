import React, { useState } from 'react';
import { 
  Smartphone, Shield, TrendingUp, Heart, Navigation, Bot, 
  CreditCard, Bell, Sparkles, Activity, CheckCircle, Search, 
  ArrowUpRight, Users, Play, Cpu, Wifi 
} from 'lucide-react';

export const AppSimulator: React.FC = () => {
  const [activeApp, setActiveApp] = useState<'fintech' | 'health' | 'ai' | 'ride'>('fintech');
  const [activeTab, setActiveTab] = useState<'home' | 'analytics' | 'chat' | 'profile'>('home');

  return (
    <div className="bg-slate-900/90 rounded-3xl p-6 md:p-10 border border-cyan-500/20 text-white relative overflow-hidden shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Side: Controls & Info */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 rounded-full text-xs font-bold text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Mobile Product Showcase</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Try Our Live Mobile UI Engine
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            Every mobile product crafted by TechViz Inc undergoes rigorous Human Interface Design validation and fluid 120 FPS animation engineering. Switch between demo apps below:
          </p>

          {/* App Switcher Tabs */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActiveApp('fintech')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                activeApp === 'fintech'
                  ? 'bg-cyan-950/80 border-cyan-400 text-white ring-2 ring-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeApp === 'fintech' ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-black' : 'bg-slate-700 text-slate-300'}`}>
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">FinPulse AI</div>
                <div className="text-xs opacity-75">Wealth & Trading</div>
              </div>
            </button>

            <button
              onClick={() => setActiveApp('health')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                activeApp === 'health'
                  ? 'bg-emerald-950/80 border-emerald-400 text-white ring-2 ring-emerald-500/40'
                  : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeApp === 'health' ? 'bg-emerald-400 text-black' : 'bg-slate-700 text-slate-300'}`}>
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">MediCare</div>
                <div className="text-xs opacity-75">Telehealth App</div>
              </div>
            </button>

            <button
              onClick={() => setActiveApp('ai')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                activeApp === 'ai'
                  ? 'bg-amber-950/80 border-amber-400 text-white ring-2 ring-amber-500/40'
                  : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeApp === 'ai' ? 'bg-amber-400 text-black' : 'bg-slate-700 text-slate-300'}`}>
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">Gemini Assistant</div>
                <div className="text-xs opacity-75">Enterprise AI</div>
              </div>
            </button>

            <button
              onClick={() => setActiveApp('ride')}
              className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                activeApp === 'ride'
                  ? 'bg-indigo-950/80 border-indigo-400 text-white ring-2 ring-indigo-500/40'
                  : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeApp === 'ride' ? 'bg-indigo-400 text-black' : 'bg-slate-700 text-slate-300'}`}>
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm">SwiftRide</div>
                <div className="text-xs opacity-75">Fleet & Logistics</div>
              </div>
            </button>
          </div>

          <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-300">
            <div className="font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Native iOS & Android Architecture Features:</span>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Biometric FaceID</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> WebSockets Live Sync</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> Offline DB Encryption</li>
              <li className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-cyan-400" /> 120Hz Smooth Scroll</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Phone Device Frame Simulator */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-[300px] sm:w-[320px] bg-slate-950 border-4 border-slate-800 rounded-[42px] p-3 shadow-2xl relative select-none ring-1 ring-slate-700">
            {/* Dynamic Island / Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2.5 gap-1.5 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>

            {/* Simulated Mobile Screen Canvas */}
            <div className="bg-[#0F172A] rounded-[32px] overflow-hidden min-h-[500px] flex flex-col justify-between p-4 border border-slate-800">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                <span className="font-bold text-white">9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-[10px] font-bold bg-sky-950 text-sky-400 px-1.5 py-0.5 rounded">5G</span>
                </div>
              </div>

              {/* Dynamic App Content depending on activeApp */}
              <div className="py-3 flex-1 space-y-3">
                {activeApp === 'fintech' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="bg-gradient-to-br from-sky-900/80 to-[#0A2540] p-4 rounded-2xl border border-sky-700/50">
                      <div className="text-xs text-sky-200">Total Portfolio Value</div>
                      <div className="text-2xl font-black text-white mt-1">$148,920.50</div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400 mt-2 font-bold">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>+$4,820.10 (3.4%) Today</span>
                      </div>
                    </div>

                    {/* AI Insight Box */}
                    <div className="bg-amber-950/40 border border-amber-800/60 p-3 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-amber-300">Gemini AI Recommendation</strong>
                        <span>Rebalance tech allocation +2.5% into dividend yields before rate cut.</span>
                      </div>
                    </div>

                    {/* Holdings list */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-400 uppercase">Top Assets</div>
                      <div className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 font-bold flex items-center justify-center">NVDA</div>
                          <div>
                            <div className="font-bold text-white">NVIDIA Corp</div>
                            <div className="text-[10px] text-slate-400">12 Shares</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">$1,320.00</div>
                          <div className="text-[10px] text-emerald-400">+5.8%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center">AAPL</div>
                          <div>
                            <div className="font-bold text-white">Apple Inc</div>
                            <div className="text-[10px] text-slate-400">25 Shares</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">$234.50</div>
                          <div className="text-[10px] text-emerald-400">+1.2%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeApp === 'health' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="bg-emerald-950/60 border border-emerald-800/80 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-xs text-emerald-300">Next Consultation</div>
                        <div className="font-bold text-white text-base mt-0.5">Dr. Sarah Jenkins</div>
                        <div className="text-xs text-slate-400">Today at 2:30 PM (HD Video)</div>
                      </div>
                      <button className="p-3 bg-emerald-500 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Join
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
                        <span className="text-slate-400 block text-[10px]">Heart Rate</span>
                        <span className="text-lg font-black text-white">72 BPM</span>
                        <span className="text-[10px] text-emerald-400 block">Normal resting</span>
                      </div>
                      <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60">
                        <span className="text-slate-400 block text-[10px]">Blood Oxygen</span>
                        <span className="text-lg font-black text-white">99 %</span>
                        <span className="text-[10px] text-sky-400 block">Optimal SPO2</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeApp === 'ai' && (
                  <div className="space-y-2.5 text-xs animate-in fade-in duration-300">
                    <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-slate-300">
                      <strong>User:</strong> Analyze our mobile app retention funnel for Q3.
                    </div>
                    <div className="p-3 bg-sky-950/80 border border-sky-800 rounded-xl text-sky-100 space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[11px]">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Gemini 2.0 Thinking...</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        Retention increased +24% after implementing the new Swift 6 onboarding flow. Onboarding drop-off reduced from 32% to 8%.
                      </p>
                    </div>
                  </div>
                )}

                {activeApp === 'ride' && (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <div className="h-28 bg-slate-800 rounded-2xl relative overflow-hidden border border-slate-700 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 to-sky-900/40"></div>
                      <div className="relative text-center">
                        <Navigation className="w-8 h-8 text-sky-400 mx-auto animate-bounce" />
                        <span className="text-xs font-bold text-white block mt-1">Autonomous Fleet En Route</span>
                        <span className="text-[10px] text-sky-300">Arriving in 3 Mins</span>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs flex justify-between items-center">
                      <div>
                        <div className="font-bold text-white">SwiftRide Black SUV</div>
                        <div className="text-[10px] text-slate-400">Tesla Model X • License 8XYZ99</div>
                      </div>
                      <span className="font-black text-emerald-400">$18.50</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation Bar inside Phone */}
              <div className="pt-2 border-t border-slate-800 grid grid-cols-4 gap-1 text-center text-[10px] text-slate-500">
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'home' ? 'text-sky-400 font-bold' : ''}`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Home</span>
                </button>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'analytics' ? 'text-sky-400 font-bold' : ''}`}
                >
                  <Activity className="w-4 h-4" />
                  <span>Stats</span>
                </button>
                <button 
                  onClick={() => setActiveTab('chat')}
                  className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'chat' ? 'text-sky-400 font-bold' : ''}`}
                >
                  <Bell className="w-4 h-4" />
                  <span>Alerts</span>
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`p-1 flex flex-col items-center gap-0.5 ${activeTab === 'profile' ? 'text-sky-400 font-bold' : ''}`}
                >
                  <Users className="w-4 h-4" />
                  <span>Account</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
