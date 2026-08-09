import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { 
  Building, Award, Shield, CheckCircle2, Globe, MapPin, 
  Linkedin, Users, Sparkles, ArrowRight 
} from 'lucide-react';

interface AboutPageProps {
  openContactModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ openContactModal }) => {
  return (
    <div className="pt-28 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-14 rounded-3xl shadow-xl border border-slate-800 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          <Building className="w-3.5 h-3.5 text-amber-400" />
          <span>Engineering Culture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About TechViz Inc
        </h1>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We are a team of senior mobile architects, product designers, and cloud systems engineers dedicated to building high-performance digital products for modern brands.
        </p>
      </div>

      {/* Brand Values & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl space-y-3 transition-all ring-1 ring-slate-900/5">
          <div className="p-3 bg-sky-50 text-[#0284C7] border border-sky-100 rounded-2xl w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0A2540]">Zero Technical Debt</h3>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            We write clean, modular Swift, Kotlin, and TypeScript code adhering strictly to official Apple Human Interface and Android Material Design 3 guidelines.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 hover:border-emerald-400 shadow-md hover:shadow-xl space-y-3 transition-all ring-1 ring-slate-900/5">
          <div className="p-3 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl w-fit">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0A2540]">100% Code & IP Ownership</h3>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Unlike agencies that lock clients into proprietary backend dependencies, 100% of the repository, source code, and design files belong exclusively to you.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-xl space-y-3 transition-all ring-1 ring-slate-900/5">
          <div className="p-3 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl w-fit">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#0A2540]">Predictable Agile Sprints</h3>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Every 2 weeks, your team receives working staging builds on TestFlight and Google Play Internal Beta with direct Slack engineering channels.
          </p>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-slate-100/80 p-8 sm:p-12 rounded-3xl border border-slate-200/80 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-extrabold text-[#0284C7] uppercase tracking-wider">Leadership</div>
          <h2 className="text-3xl font-extrabold text-[#0A2540]">Engineers & Product Leaders</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md space-y-4 p-5 text-center hover:border-sky-400 hover:shadow-xl transition-all">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-sky-400 shadow-sm" />
              <div>
                <h3 className="font-bold text-[#0A2540] text-base">{member.name}</h3>
                <span className="text-[11px] font-extrabold text-[#0284C7] block">{member.role}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Locations */}
      <div className="bg-[#0A2540] border border-sky-500/20 text-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Global Reach</div>
          <h2 className="text-3xl font-extrabold text-white">TechViz Headquarters & Engineering Hubs</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Francisco (HQ)</span>
            </div>
            <p className="text-slate-300">500 Howard St, Suite 400<br />San Francisco, CA 94105</p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>London</span>
            </div>
            <p className="text-slate-300">1 Primrose St, Suite 210<br />London EC2A 2EX</p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>New York</span>
            </div>
            <p className="text-slate-300">350 Fifth Ave, Floor 42<br />New York, NY 10118</p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
            <p className="text-slate-300">1 Marina Boulevard<br />Singapore 018989</p>
          </div>
        </div>
      </div>

    </div>
  );
};
