import React, { useState } from 'react';
import { ContactSubmission } from '../types';
import { 
  Send, CheckCircle2, Paperclip, Calendar, Clock, 
  Building, Mail, Phone, User, MessageSquare, Sparkles 
} from 'lucide-react';

interface ContactFormProps {
  defaultService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService, onSuccess }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || 'ios-app-development',
    budget: '$25,000 - $50,000',
    message: '',
    preferredContact: 'email'
  });

  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 10:00 AM EST');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 3500);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-3xl border border-emerald-300 text-center space-y-4 shadow-xl animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-[#0A2540]">Strategy Consultation Scheduled!</h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Reference Ticket ID: <span className="font-mono bg-slate-100 px-2 py-0.5 rounded font-bold text-[#0284C7] border border-slate-200">TVZ-8921</span>.
        </p>
        <p className="text-xs text-slate-500">
          We have sent a calendar invite for <strong>{selectedDate}</strong> to <strong>{formData.email}</strong>. A Principal Engineer from TechViz Inc will prepare a preliminary technical blueprint prior to our call.
        </p>
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#0284C7] hover:underline"
          >
            Submit another query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-xl font-bold text-[#0A2540]">Request a Free Quote & Strategy Call</h3>
          <p className="text-xs text-slate-500 mt-0.5">Response guaranteed within 2 hours by our Senior Product Team.</p>
        </div>
        <div className="p-2 bg-sky-50 text-[#0284C7] border border-sky-100 rounded-xl shrink-0 hidden sm:block">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Alexander Wright"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none placeholder-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alexander@company.com"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number / WhatsApp</label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none placeholder-slate-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="TechViz Startup Inc"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Core Service Required *</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-900 focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none font-medium"
        >
          <option value="ios-app-development">iOS & Apple Ecosystem Development</option>
          <option value="android-app-development">Android Native Development</option>
          <option value="cross-platform-development">Cross-Platform (React Native / Flutter)</option>
          <option value="web-saas-development">Web & Enterprise SaaS Engineering</option>
          <option value="ui-ux-product-design">UI/UX Product Design & Wireframing</option>
          <option value="ai-cloud-integration">Enterprise AI & Gemini LLM Integration</option>
        </select>
      </div>

      {/* Budget Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Budget Range</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setFormData({ ...formData, budget: b })}
              className={`py-2 px-3 rounded-xl border text-center font-semibold transition-all ${
                formData.budget === b
                  ? 'bg-[#0A2540] text-white border-[#0A2540] font-bold shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Message Details */}
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1">Project Description & Scope</label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly describe your app idea, key features, or target launch date..."
          className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs focus:ring-2 focus:ring-[#0284C7] focus:bg-white focus:outline-none placeholder-slate-400"
        ></textarea>
      </div>

      {/* File Upload Attachment Dropzone */}
      <div className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <Paperclip className="w-4 h-4 text-[#0284C7]" />
          <span>{attachedFileName ? `Attached: ${attachedFileName}` : 'Attach Project Brief or Wireframe (PDF, DOCX, Figma)'}</span>
        </div>
        <label className="cursor-pointer bg-white px-3 py-1.5 border border-slate-200 rounded-lg text-slate-800 font-bold hover:bg-slate-100 transition-colors shrink-0 shadow-sm">
          <span>Browse</span>
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>
      </div>

      {/* Strategy Call Time Slot Selector */}
      <div className="p-3 bg-sky-50/70 border border-sky-200/80 rounded-xl space-y-1.5">
        <div className="text-xs font-bold text-[#0284C7] flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-[#0284C7]" />
          <span>Select 30-Min Strategy Consultation Slot</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
          {['Tomorrow, 10:00 AM EST', 'Tomorrow, 2:30 PM EST', 'In 2 Days, 11:00 AM EST'].map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedDate(slot)}
              className={`p-1.5 rounded-lg border text-center font-medium transition-colors ${
                selectedDate === slot
                  ? 'bg-[#0A2540] text-white border-[#0A2540] font-bold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3.5 px-6 bg-[#0A2540] hover:bg-[#041627] text-white font-black rounded-xl text-sm shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-[0.99]"
      >
        <Send className="w-4 h-4 text-amber-400" />
        <span>Submit Inquiry & Schedule Free Consultation</span>
      </button>

      <p className="text-[11px] text-center text-slate-500">
        🔒 Non-Disclosure Agreement (NDA) guaranteed prior to detail sharing.
      </p>
    </form>
  );
};
