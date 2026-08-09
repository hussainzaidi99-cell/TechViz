import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { 
  Phone, Mail, MapPin, Shield, Clock, Award, 
  MessageSquare, Sparkles, Globe 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-14 rounded-3xl shadow-xl border border-slate-800 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          <span>Direct Access</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Let's Build Something Great Together
        </h1>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Have an app project in mind or need an enterprise engineering audit? Contact our product team or book a free 30-minute strategy call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 border border-cyan-500/30 text-white p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Reach out directly via phone or email, or drop by one of our global technology hubs.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Direct SLA Phone</span>
                    <strong className="text-white font-bold">+1 (800) 583-2484</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Engineering Email</span>
                    <strong className="text-white font-bold">contact@techvizinc.com</strong>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">San Francisco HQ</span>
                    <strong className="text-white font-bold">500 Howard St, Suite 400, CA 94105</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2 text-xs">
              <div className="font-bold text-amber-400 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>NDA & Confidentiality Guarantee</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                We sign mutual Non-Disclosure Agreements prior to reviewing unreleased source code, pitch decks, or wireframe blueprints.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-lg space-y-3">
            <h4 className="font-bold text-white text-sm">Response Time Guarantee</h4>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Inquiries answered within 2 hours during global business hours.</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
