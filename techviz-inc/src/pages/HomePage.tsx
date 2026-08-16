import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES, CASE_STUDIES, TESTIMONIALS, AGENCY_FAQS } from '../data/mockData';
import { AppSimulator } from '../components/AppSimulator';
import { 
  Smartphone, Globe, Layers, Cpu, Sparkles, ArrowRight, 
  CheckCircle2, Star, ChevronRight, ArrowUpRight, HelpCircle,
  ShieldCheck, Server, Database, Code2, Lock, Cloud, Terminal, Award
} from 'lucide-react';

interface HomePageProps {
  openContactModal: (defaultService?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ openContactModal }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50">
        {/* Abstract background color blooms */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-amber-100/30 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-sky-200/90 shadow-sm rounded-full text-xs font-bold text-[#0284C7]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Full-Lifecycle Software & App Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A2540] tracking-tight leading-[1.1]">
              We Engineer World-Class <br />
              <span className="bg-gradient-to-r from-[#0284C7] via-blue-600 to-amber-600 bg-clip-text text-transparent">Mobile Apps & Digital Systems</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              TechViz Inc turns complex business challenges into high-performance iOS, Android, and Cloud AI applications for ambitious founders and global enterprises.
            </p>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openContactModal()}
                className="w-full sm:w-auto px-8 py-4 bg-[#0A2540] hover:bg-[#041627] text-white font-extrabold rounded-2xl text-base shadow-xl transition-all flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Schedule Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 text-amber-400" />
              </button>

              <Link
                to="/web-development"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-50 text-[#0A2540] font-bold rounded-2xl text-base border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2.5 hover:border-sky-300"
              >
                <Globe className="w-5 h-5 text-[#0284C7]" />
                <span>Web Dev Packages</span>
              </Link>
            </div>

            {/* Key Metric Highlights */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0A2540]">350+</div>
                <div className="text-xs text-[#0284C7] font-semibold mt-1">Apps Delivered</div>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0A2540]">$120M+</div>
                <div className="text-xs text-slate-700 font-semibold mt-1">Client Venture Funding</div>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#0A2540]">98.4%</div>
                <div className="text-xs text-slate-700 font-semibold mt-1">Client Satisfaction</div>
              </div>
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-black text-[#D97706] flex items-center justify-center gap-1">
                  <span>4.9</span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div className="text-xs text-slate-700 font-semibold mt-1">Clutch & App Store</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WEB DEVELOPMENT PACKAGES HIGHLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A2540] via-[#0D3054] to-[#0A2540] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-500/20 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-3 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Transparent Web Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Professional Web Development Packages from <span className="text-amber-400">$600</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Fast, high-converting, mobile-responsive React websites. Choose from Starter ($600), Growth ($1,000), Enterprise E-Commerce ($1,500), or Custom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0 z-10">
            <Link
              to="/web-development"
              className="px-6 py-3.5 bg-gradient-to-r from-sky-400 to-amber-400 text-slate-950 font-extrabold rounded-2xl text-xs sm:text-sm shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span>Explore Web Packages ($600 - $1,500)</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CLIENT TRUST & TECHNOLOGY STANDARDS */}
      <section id="client-trust" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-10 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">
              Enterprise Trust & Technology Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Engineered with World-Class Technologies & Industry Standards
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We build on battle-tested architectures adhering to strict enterprise security, cloud reliability, and modern development standards.
            </p>
          </div>

          {/* Technology Logos / Stacks (Grayscale to Color on Hover) */}
          <div className="space-y-4">
            <div className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Core Technologies & Frameworks
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              
              {/* React / Next.js */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-sky-100 rounded-xl transition-colors">
                  <Layers className="w-5 h-5 text-slate-600 group-hover:text-[#0284C7] transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">React & Next.js</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Frontend UI</span>
              </div>

              {/* Node.js */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-emerald-100 rounded-xl transition-colors">
                  <Server className="w-5 h-5 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Node.js & TS</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Backend APIs</span>
              </div>

              {/* Amazon Web Services */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-amber-100 rounded-xl transition-colors">
                  <Cloud className="w-5 h-5 text-slate-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Amazon Web Services</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Cloud Infrastructure</span>
              </div>

              {/* Google Cloud */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-blue-100 rounded-xl transition-colors">
                  <Cpu className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Google Cloud & AI</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Cloud & Gemini</span>
              </div>

              {/* Apple iOS Swift */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-slate-800 rounded-xl transition-colors">
                  <Smartphone className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Apple Swift 6</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Native iOS</span>
              </div>

              {/* Android Kotlin */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-purple-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-purple-100 rounded-xl transition-colors">
                  <Terminal className="w-5 h-5 text-slate-600 group-hover:text-purple-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Android Kotlin</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Native Android</span>
              </div>

              {/* PostgreSQL */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-sky-100 rounded-xl transition-colors">
                  <Database className="w-5 h-5 text-slate-600 group-hover:text-[#0284C7] transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">PostgreSQL & Redis</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">High-IOPS Storage</span>
              </div>

              {/* Docker & K8s */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-blue-100 rounded-xl transition-colors">
                  <Code2 className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Docker & K8s</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Containers</span>
              </div>

              {/* Flutter */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-cyan-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-cyan-100 rounded-xl transition-colors">
                  <Smartphone className="w-5 h-5 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Flutter & Dart</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Multi-Platform</span>
              </div>

              {/* GraphQL & REST */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-pink-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-pink-100 rounded-xl transition-colors">
                  <Globe className="w-5 h-5 text-slate-600 group-hover:text-pink-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">GraphQL & REST</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">API Architecture</span>
              </div>

              {/* Stripe Payments */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-indigo-100 rounded-xl transition-colors">
                  <Lock className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">Stripe & Paddle</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">Global Payments</span>
              </div>

              {/* AI & Vector DBs */}
              <div className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 cursor-default">
                <div className="p-2 bg-slate-200/70 group-hover:bg-amber-100 rounded-xl transition-colors">
                  <Sparkles className="w-5 h-5 text-slate-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <div className="font-bold text-xs text-slate-700 group-hover:text-[#0A2540] transition-colors">GenAI & Pinecone</div>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-500">LLM Workflows</span>
              </div>

            </div>
          </div>

          {/* Industry Standards & Compliance Badges */}
          <div className="pt-6 border-t border-slate-100">
            <div className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Industry Standards & Security Compliance
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">SOC 2 Type II</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Award className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">ISO 27001 Aligned</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">HIPAA Ready</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">PCI-DSS Level 1</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">GDPR & CCPA</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors">
                <Cloud className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold">99.99% Cloud SLA</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            End-to-End Capabilities
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Comprehensive Digital Engineering
          </h2>
          <p className="text-slate-600 text-sm">
            From initial strategy and user experience to App Store release and cloud elasticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-sky-50 text-[#0284C7] border border-sky-100 rounded-2xl w-fit group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                  <Smartphone className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {srv.shortDesc}
                </p>

                <div className="space-y-1.5 pt-2">
                  {srv.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600">
                  <span>{srv.platforms.slice(0, 2).join(' • ')}</span>
                </div>

                <Link
                  to={`/services/${srv.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] group-hover:text-amber-600 transition-colors"
                >
                  <span>Explore Details</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE APP SIMULATOR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppSimulator />
      </section>

      {/* 5. DEVELOPMENT PROCESS & AGILE SPRINTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 py-12 px-6 sm:px-10 rounded-3xl border border-slate-200/90 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              Transparent Execution
            </div>
            <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Our 5-Phase App Engineering Lifecycle
            </h2>
            <p className="text-slate-600 text-sm">
              Predictable delivery with zero technical debt, bi-weekly sprint demos, and guaranteed App Store release.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Discovery & Blueprint', desc: 'Architecture mapping, feature backlog, and risk mitigation.' },
              { step: '02', title: 'UI/UX Prototypes', desc: 'Clickable Figma wireframes, Human Interface guidelines compliance.' },
              { step: '03', title: 'Native Engineering', desc: 'Swift, Kotlin, or React Native development in 2-week agile sprints.' },
              { step: '04', title: 'QA & Security Audit', desc: 'Automated unit tests, device lab checks, SOC2/HIPAA compliance.' },
              { step: '05', title: 'Deployment & SLA', desc: 'App Store submission, cloud monitoring, 30-day warranty.' }
            ].map((phase, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 relative hover:border-sky-400 hover:shadow-md transition-all">
                <div className="text-2xl font-black text-[#0284C7] font-mono">{phase.step}</div>
                <h3 className="font-bold text-[#0A2540] text-sm">{phase.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED CASE STUDIES / PORTFOLIO SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
              Proven Track Record
            </div>
            <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight mt-1">
              Featured Case Studies & Work
            </h2>
          </div>

          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0A2540] transition-colors"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((cs) => (
            <div key={cs.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={cs.heroImage}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 text-[#0284C7] border border-sky-100 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                    {cs.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0A2540] leading-snug group-hover:text-[#0284C7] transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        <div className="text-base font-black text-[#0A2540]">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/case-studies"
                  className="w-full py-2.5 bg-slate-100 hover:bg-[#0A2540] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WHY TECHVIZ COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200/80 text-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-md">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Why Founders Choose TechViz Inc
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
            TechViz Inc vs Traditional Agencies
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-3 px-4 font-bold">Feature</th>
                <th className="py-3 px-4 font-bold text-[#0284C7] bg-sky-50 border-t border-x border-sky-200 rounded-t-xl">TechViz Inc</th>
                <th className="py-3 px-4 font-bold">Traditional Development Shops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold">Engineering Talent</td>
                <td className="py-3.5 px-4 font-bold text-[#0A2540] bg-sky-50/50 border-x border-sky-100">100% Senior US/EU Engineers</td>
                <td className="py-3.5 px-4 text-slate-500">Junior offshore contractors</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">IP & Code Ownership</td>
                <td className="py-3.5 px-4 font-bold text-emerald-600 bg-sky-50/50 border-x border-sky-100">100% Assigned to Client</td>
                <td className="py-3.5 px-4 text-slate-500">Hidden license dependencies</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">App Store Guarantee</td>
                <td className="py-3.5 px-4 font-bold text-[#0A2540] bg-sky-50/50 border-x border-sky-100">Guaranteed First-Pass Release</td>
                <td className="py-3.5 px-4 text-slate-500">Extra fees for re-submissions</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold">Sprint Transparency</td>
                <td className="py-3.5 px-4 font-bold text-[#0A2540] bg-sky-50/50 border-x border-sky-100 border-b rounded-b-xl">Weekly Demos & Live Staging</td>
                <td className="py-3.5 px-4 text-slate-500">Monthly delayed reports</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">
            Verified Reviews
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Loved by Founders & Product Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-xs leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-sky-200"
                />
                <div>
                  <div className="font-bold text-[#0A2540] text-xs">{t.author}</div>
                  <div className="text-[11px] text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQS SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0A2540]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {AGENCY_FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <h3 className="font-bold text-[#0A2540] text-sm">{faq.question}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FINAL CONTACT CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A2540] text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Next Mobile Product?</h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Schedule a 30-minute consultation with our Senior Engineering Leads. We will provide a complete technical scope and quote within 24 hours.
            </p>
          </div>

          <button
            onClick={() => openContactModal()}
            className="px-8 py-4 bg-gradient-to-r from-sky-400 to-amber-400 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl hover:opacity-90 transition-all shrink-0 flex items-center gap-2 transform active:scale-95 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </section>

    </div>
  );
};
