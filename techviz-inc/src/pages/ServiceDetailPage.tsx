import React, { useState } from 'react';
import { SERVICES, CASE_STUDIES } from '../data/mockData';
import { ServiceItem, PageId } from '../types';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap, 
  Smartphone, Tablet, Layers, Globe, Palette, Cpu, Sparkles, 
  Clock, Check, HelpCircle, Code2, Server, Terminal, Lock, 
  ChevronRight, FileText, ExternalLink, Award, Layers2
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onSelectService: (id: string) => void;
  setActivePage: (page: PageId) => void;
  openContactModal: (defaultService?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onSelectService,
  setActivePage,
  openContactModal,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Find the selected service or default to first
  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  // Icon mapping helper
  const renderIcon = (iconName: string, className = "w-8 h-8") => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Tablet': return <Tablet className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  // Service specific extended content data
  const getExtendedServiceDetails = (id: string) => {
    switch (id) {
      case 'ios-app-development':
        return {
          heroBadge: 'Apple Ecosystem Specialists',
          overviewTitle: 'Native Swift & SwiftUI Engineering for iPhone, iPad & Apple Watch',
          overviewParagraphs: [
            'Apple users expect flawless, silky-smooth performance with instant response times and intuitive gestures. Our iOS engineering team builds native applications using Swift 5.10 and SwiftUI, following Apple\'s Human Interface Guidelines (HIG) to the letter.',
            'We leverage native Apple hardware acceleration, CoreData/SwiftData for offline-first persistence, FaceID/TouchID biometric security, Apple Pay integration, and CoreML for on-device machine learning. Whether building a consumer app targeting millions or an enterprise iOS deployment, we ensure zero dropped frames and full compliance with Apple Store guidelines.'
          ],
          workflowSteps: [
            { step: '01', title: 'HIG Wireframing & UX', desc: 'Designing Apple-standard UI layouts with Xcode previews and gesture prototypes.' },
            { step: '02', title: 'Native Swift Architecture', desc: 'Implementing clean MVVM-C or VIPER architecture with async/await concurrency.' },
            { step: '03', title: 'APIs, CoreData & Apple Pay', desc: 'Integrating secure REST/GraphQL backends, local persistence, and biometric checkout.' },
            { step: '04', title: 'XCTest & TestFlight QA', desc: 'Automated unit tests and multi-device TestFlight beta distribution across target iPhones.' },
            { step: '05', title: 'App Store Submission', desc: 'Handling App Store Connect metadata, privacy nutrition labels, and guaranteed review approval.' }
          ],
          architectureDetails: [
            { label: 'Language', val: 'Swift 5.10 & Swift Concurrency' },
            { label: 'UI Framework', val: 'SwiftUI & UIKit interop' },
            { label: 'Persistence', val: 'CoreData / SwiftData / Keychain' },
            { label: 'Network & Security', val: 'URLSession + OAuth2 + TLS Pinning' },
            { label: 'Target OS', val: 'iOS 16.0+, iPadOS, watchOS, visionOS' }
          ],
          faqs: [
            { q: 'Do you guarantee approval on the Apple App Store?', a: 'Yes! We handle all App Store Connect submission compliance, export compliance forms, and privacy nutrition label disclosures. In the rare event Apple requests changes, we fix them at zero additional cost.' },
            { q: 'Why choose native Swift over cross-platform for iOS?', a: 'Native Swift provides 120Hz ProMotion UI rendering, lower battery usage, immediate zero-day access to new iOS features (e.g., iOS 18 Dynamic Island, Live Activities, Apple Intelligence), and robust memory management.' },
            { q: 'Can you convert our existing Web or Android app to native iOS?', a: 'Absolutely. We refactor and rebuild Web or Android business logic into native Swift, matching your brand design tokens while adopting iOS-native navigation patterns.' }
          ]
        };

      case 'android-app-development':
        return {
          heroBadge: 'Global Android Engineering',
          overviewTitle: 'Native Kotlin & Jetpack Compose Android Platform Engineering',
          overviewParagraphs: [
            'Android powers billions of active devices worldwide. Delivering a consistent, high-performing app across thousands of diverse device models, screen sizes, and OS versions requires deep Android engineering discipline.',
            'Our Android engineers craft native Kotlin applications using Jetpack Compose, Material Design 3, Coroutines for non-blocking I/O, Room DB for offline cache, and Hilt for dependency injection. We conduct automated lab testing across 500+ physical device configurations to guarantee 99.9% crash-free sessions.'
          ],
          workflowSteps: [
            { step: '01', title: 'Material Design 3 UX', desc: 'Crafting expressive, responsive adaptive layouts for phones, tablets, and foldables.' },
            { step: '02', title: 'Kotlin & Jetpack Compose', desc: 'Writing clean declarative UI components powered by StateFlow and ViewModel.' },
            { step: '03', title: 'Room DB & Retrofit Sync', desc: 'Engineering offline-first local database caching and secure REST API sync.' },
            { step: '04', title: '500+ Device Lab Testing', desc: 'Stress testing RAM, battery usage, and screen density on real Android hardware.' },
            { step: '05', title: 'Google Play Release', desc: 'Managing Play Console staged rollouts, Android App Bundles (.aab), and store SEO.' }
          ],
          architectureDetails: [
            { label: 'Language', val: 'Kotlin 2.0 & Coroutines' },
            { label: 'UI Framework', val: 'Jetpack Compose declarative UI' },
            { label: 'Architecture Pattern', val: 'Android Clean Architecture + MVVM' },
            { label: 'Dependency Injection', val: 'Hilt / Dagger2' },
            { label: 'Min SDK', val: 'API 26 (Android 8.0) through API 35 (Android 15)' }
          ],
          faqs: [
            { q: 'How do you handle the fragment fragmentation of Android devices?', a: 'We use Jetpack Compose adaptive layouts and WindowSizeClass APIs. This guarantees your app scales automatically from compact 5-inch smartphones to dual-screen foldables and 12-inch Android tablets.' },
            { q: 'What format do you provide for Google Play submission?', a: 'We deliver optimized Android App Bundles (.aab) with dynamic feature modules, reducing user download sizes by up to 35% compared to legacy APKs.' },
            { q: 'Do you support Google Play Billing & In-App Purchases?', a: 'Yes! We integrate Google Play Billing Library v6+ for subscriptions, one-time purchases, and automated server-side webhook validation.' }
          ]
        };

      case 'cross-platform-development':
        return {
          heroBadge: 'Dual OS Single-Codebase Experts',
          overviewTitle: 'Cross-Platform React Native & Flutter Mobile Systems',
          overviewParagraphs: [
            'Need to reach both iOS and Android users quickly without doubling your engineering budget? Cross-platform development allows you to maintain a single unified codebase while delivering near-native speed and aesthetics.',
            'Using React Native (with Expo / Hermes Engine) or Flutter (with Dart), we build cross-platform mobile apps with over 90% shared code logic. You get simultaneous iOS and Android store launches, Over-The-Air (OTA) instantaneous bug fixes, and seamless hardware access.'
          ],
          workflowSteps: [
            { step: '01', title: 'Cross-Platform Spec', desc: 'Designing adaptive design tokens that render natively on both iOS and Android.' },
            { step: '02', title: 'React Native / Flutter Build', desc: 'Writing modular TypeScript or Dart component code with atomic state management.' },
            { step: '03', title: 'Native Bridge Integration', desc: 'Connecting native iOS Swift and Android Kotlin modules for hardware access.' },
            { step: '04', title: 'Dual Device QA Matrix', desc: 'Rigorous parallel testing on both iPhones and flagship Android devices.' },
            { step: '05', title: 'Simultaneous Store Launch', desc: 'Deploying to both Apple App Store and Google Play Store simultaneously.' }
          ],
          architectureDetails: [
            { label: 'Frameworks', val: 'React Native 0.74+ / Flutter 3.22+' },
            { label: 'Languages', val: 'TypeScript / Dart' },
            { label: 'JS Engine', val: 'Hermes Engine (Sub-100ms TTI)' },
            { label: 'State Engine', val: 'Redux Toolkit / Zustand / Riverpod' },
            { label: 'OTA Updates', val: 'Expo Application Services (EAS Updates)' }
          ],
          faqs: [
            { q: 'Is React Native or Flutter fast enough for high-traffic apps?', a: 'Yes! With the new React Native Architecture (Fabric & TurboModules) and Flutter\'s Impeller C++ rendering engine, apps achieve steady 60fps animations and instant cold starts.' },
            { q: 'How much code is actually shared between iOS and Android?', a: 'Typically 85% to 95% of business logic, state management, UI components, and API connectors are shared 100% across both platforms.' },
            { q: 'Can we update the app without waiting for App Store approval?', a: 'Yes! With Expo Over-The-Air (OTA) updates, JavaScript and asset updates can be pushed directly to users\' devices in seconds, bypassing store review queues for urgent fixes.' }
          ]
        };

      case 'web-saas-development':
        return {
          heroBadge: 'Full-Stack Web Engineering',
          overviewTitle: 'Enterprise Web Applications, Multi-Tenant SaaS & APIs',
          overviewParagraphs: [
            'Your web application is often the central engine of your business operations. Whether building a complex multi-tenant SaaS platform, an internal enterprise dashboard, or a customer portal, performance, security, and developer clarity are non-negotiable.',
            'We build full-stack web platforms using React, Next.js, TypeScript, Node.js, and cloud relational databases (PostgreSQL/Firestore). Our applications are engineered for sub-second initial loads, WCAG AAA accessibility, and seamless payment processor integrations (Stripe, PayPal).'
          ],
          workflowSteps: [
            { step: '01', title: 'System Architecture Blueprint', desc: 'Designing database schemas, multi-tenant isolation, and API route structures.' },
            { step: '02', title: 'Responsive UI/UX Build', desc: 'Engineering modular React & Tailwind CSS layouts with zero content layout shifts.' },
            { step: '03', title: 'Backend & Stripe Integration', desc: 'Developing secure REST/GraphQL endpoints, JWT/OAuth auth, and subscription billing.' },
            { step: '04', title: 'CI/CD & Docker Setup', desc: 'Automating build testing, containerizing services, and setting up staging environments.' },
            { step: '05', title: 'Cloud Launch & SLA', desc: 'Deploying to Cloud Run / Vercel / AWS with SSL certificates and health alerts.' }
          ],
          architectureDetails: [
            { label: 'Frontend Stack', val: 'React 18 / Next.js / Tailwind CSS' },
            { label: 'Backend Runtime', val: 'Node.js / Express / TypeScript' },
            { label: 'Database System', val: 'PostgreSQL / Firestore / Redis' },
            { label: 'Auth & Security', val: 'OAuth2 / Firebase Auth / Argon2' },
            { label: 'Cloud Hosting', val: 'Google Cloud Run / AWS ECS / Vercel' }
          ],
          faqs: [
            { q: 'What is the difference between a custom web app and a standard website?', a: 'A standard website displays static info. A custom web application (like a SaaS platform, portal, or CRM) contains interactive database logic, user authentication, payment processing, background jobs, and real-time APIs.' },
            { q: 'How do you handle database security and tenant isolation in SaaS apps?', a: 'We implement Row Level Security (RLS) or dedicated schema isolation per organization, combined with encrypted JWT auth tokens and strict role-based access control (RBAC).' },
            { q: 'Can you migrate our legacy web application to modern React/Next.js?', a: 'Yes! We specialize in zero-downtime refactoring, extracting database schemas and building modern React frontends while maintaining business continuity.' }
          ]
        };

      case 'ui-ux-product-design':
        return {
          heroBadge: 'Human-Centered Product Design',
          overviewTitle: 'Interactive Figma Prototypes, Design Systems & UX Research',
          overviewParagraphs: [
            'Software success is defined by how intuitive and pleasant it is to use. A brilliant technical engine fails if users struggle to navigate your application or complete core tasks.',
            'Our UX/UI product design team conducts user research, constructs wireframe journeys, creates pixel-perfect Figma design systems, and builds clickable interactive prototypes. We turn complex user workflows into seamless, conversion-optimized interfaces.'
          ],
          workflowSteps: [
            { step: '01', title: 'User Research & Personas', desc: 'Analyzing target audience needs, competitor benchmarks, and core user goals.' },
            { step: '02', title: 'Information Architecture', desc: 'Mapping user flows, screen hierarchies, and navigation blueprints.' },
            { step: '03', title: 'High-Fidelity UI Design', desc: 'Creating modern, dark/light themed interfaces with custom typography and icon sets.' },
            { step: '04', title: 'Interactive Clickable Prototype', desc: 'Building fully interactive Figma prototypes to validate usability with test users.' },
            { step: '05', title: 'Design System & Token Handoff', desc: 'Delivering comprehensive component libraries and CSS variables ready for engineering.' }
          ],
          architectureDetails: [
            { label: 'Primary Design Tool', val: 'Figma (Master Files & Variants)' },
            { label: 'Design System', val: 'Atomic Design & Design Tokens' },
            { label: 'Prototyping', val: 'Figma Interactive Components / ProtoPie' },
            { label: 'Accessibility', val: 'WCAG 2.1 AA & AAA Contrast Standard' },
            { label: 'Handoff Format', val: 'Figma Dev Mode + Tailwind Tokens' }
          ],
          faqs: [
            { q: 'What deliverables do we receive at the end of a UI/UX project?', a: 'You receive 100% ownership of the Master Figma file, clickable mobile/web prototypes, a reusable Design System component library, developer handoff specs, and SVG icon sets.' },
            { q: 'Can you work directly with our existing engineering team?', a: 'Yes! Our designers export clean Figma tokens and collaborate directly with your frontend developers via Slack or Jira to ensure 1:1 fidelity implementation.' },
            { q: 'How long does a full UI/UX design phase take?', a: 'A typical MVP mobile app UI design phase takes 2–3 weeks. Complex enterprise SaaS platforms take 3–5 weeks.' }
          ]
        };

      case 'ai-cloud-integration':
        return {
          heroBadge: 'AI & Machine Learning Engineers',
          overviewTitle: 'Google Gemini AI Integration, RAG Pipelines & Cloud Elasticity',
          overviewParagraphs: [
            'Artificial intelligence is transforming software capabilities. Adding natural language comprehension, automated document parsing, predictive analytics, or conversational AI assistants gives your product an undeniable edge.',
            'We integrate the Google Gemini API (@google/genai SDK), build Retrieval-Augmented Generation (RAG) pipelines over your private company data, and deploy serverless cloud microservices on AWS or GCP. We ensure bank-grade security, data privacy, and optimized AI latency.'
          ],
          workflowSteps: [
            { step: '01', title: 'AI Feasibility & Data Audit', desc: 'Evaluating business processes to identify highest ROI generative AI use cases.' },
            { step: '02', title: 'Prompt & RAG Engineering', desc: 'Connecting vector databases (Pinecone/Qdrant) to stream context-rich AI answers.' },
            { step: '03', title: 'Gemini API Proxy Build', desc: 'Constructing secure backend API proxies to protect API keys and handle rate-limits.' },
            { step: '04', title: 'Cloud Infrastructure Setup', desc: 'Deploying auto-scaling microservices on Google Cloud Run or AWS ECS.' },
            { step: '05', title: 'Monitoring & Optimization', desc: 'Tracking token usage, latency metrics, and response accuracy in production.' }
          ],
          architectureDetails: [
            { label: 'AI SDK', val: '@google/genai (Gemini 1.5 Pro / Flash)' },
            { label: 'Backend Stack', val: 'Python FastAPI / Node.js Express' },
            { label: 'Vector Indexing', val: 'Pinecone / Qdrant / Pgvector' },
            { label: 'Frameworks', val: 'LangChain / LlamaIndex' },
            { label: 'Security Standard', val: 'Zero Data-Training Policy & OAuth2' }
          ],
          faqs: [
            { q: 'Is our company data safe when using Google Gemini AI?', a: 'Yes! We use Enterprise Gemini API endpoints where your proprietary data is strictly ephemeral and never used to train foundational AI models.' },
            { q: 'What is Retrieval-Augmented Generation (RAG)?', a: 'RAG connects AI models directly to your private company documents, PDFs, or databases so the AI provides 100% accurate, hallucination-free answers based on your internal data.' },
            { q: 'How do you control AI API usage costs?', a: 'We implement intelligent server-side caching (Redis), fallback model routing (Flash vs Pro), and rate-limiting to keep API token costs predictable and minimal.' }
          ]
        };

      default:
        return {
          heroBadge: 'Software Engineering Excellence',
          overviewTitle: 'Custom Software Development & Engineering Services',
          overviewParagraphs: [
            'TechViz Inc delivers end-to-end digital product design, mobile app development, and cloud platform engineering.'
          ],
          workflowSteps: [],
          architectureDetails: [],
          faqs: []
        };
    }
  };

  const extended = getExtendedServiceDetails(currentService.id);

  // Matching Case Studies
  const relatedCaseStudies = CASE_STUDIES.filter(cs => 
    cs.techStack.some(t => currentService.techStack.includes(t)) || 
    cs.category.toLowerCase().includes(currentService.category)
  );

  return (
    <div className="pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. BREADCRUMBS & TOP NAV */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
          <button 
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[#0284C7] transition-colors flex items-center gap-1 font-bold text-slate-700"
          >
            <ArrowLeft className="w-4 h-4 text-[#0284C7]" />
            <span>All Services</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#0284C7] font-bold">{currentService.title}</span>
        </div>

        {/* Quick Service Switching Dropdown / Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <span className="text-xs text-slate-700 font-bold hidden sm:inline">Switch Service:</span>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                onSelectService(s.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold shrink-0 transition-all ${
                s.id === currentService.id
                  ? 'bg-[#0A2540] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {s.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 2. SERVICE HERO BANNER */}
      <section className="relative bg-gradient-to-br from-[#0A2540] via-[#0D3054] to-[#0A2540] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-sky-500/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-500/20 border border-sky-400/30 rounded-full text-xs font-bold text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{extended.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {currentService.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {currentService.shortDesc}
            </p>

            {/* Target Platforms & Categories */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mr-2">Supported Targets:</span>
              {currentService.platforms.map((plat, idx) => (
                <span key={idx} className="bg-white/10 text-white border border-white/20 text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-md">
                  {plat}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/15 space-y-4">
            <div className="p-4 bg-white text-[#0A2540] rounded-2xl w-fit shadow-lg">
              {renderIcon(currentService.iconName, "w-10 h-10")}
            </div>
            <div className="text-sm font-bold text-white">Guaranteed Project SLAs</div>
            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Intellectual Property & Code Transfer</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Dedicated Senior Lead Engineer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Post-Launch Maintenance Warranty</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE OVERVIEW & BUSINESS IMPACT */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Detailed Service Overview</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
            {extended.overviewTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {extended.overviewParagraphs.map((para, idx) => (
            <p key={idx} className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATIONS & ARCHITECTURE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Core Capabilities Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Technical Capabilities</div>
            <h3 className="text-xl font-bold text-[#0A2540]">Key Features & Engineering Highlights</h3>
          </div>

          <div className="space-y-3">
            {currentService.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {feat}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tech Stack & Frameworks Used</div>
            <div className="flex flex-wrap gap-2">
              {currentService.techStack.map((tech, idx) => (
                <span key={idx} className="bg-[#0A2540] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Specs & Deliverables Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Architecture Card */}
          <div className="bg-[#0A2540] text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Architecture Specs</span>
            </div>
            <div className="divide-y divide-slate-800 text-xs">
              {extended.architectureDetails.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                  <span className="text-slate-400 font-medium">{item.label}</span>
                  <span className="font-bold text-sky-300 text-right">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-3">
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>What You Receive (Deliverables)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {currentService.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 5. ENGINEERING WORKFLOW & PROCESS STEPS */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Methodology & Execution</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
            Our 5-Step Engineering Workflow
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Structured, transparent development sprints with continuous staging access and weekly demo calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {extended.workflowSteps.map((ws, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2 relative">
              <span className="text-2xl font-black text-[#0284C7]/30 block">{ws.step}</span>
              <h4 className="font-bold text-[#0A2540] text-sm">{ws.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{ws.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. RELATED CASE STUDIES */}
      {relatedCaseStudies.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider">Proven Track Record</div>
              <h2 className="text-2xl font-extrabold text-[#0A2540]">Featured {currentService.title} Case Studies</h2>
            </div>
            <button
              onClick={() => {
                setActivePage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
            >
              <span>View All Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedCaseStudies.slice(0, 2).map((cs) => (
              <div key={cs.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-extrabold bg-sky-50 text-[#0284C7] px-2.5 py-1 rounded-full border border-sky-200">
                      {cs.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{cs.client}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540]">{cs.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">{cs.summary}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.techStack.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setActivePage('portfolio');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. SERVICE FAQS */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Service FAQs</span>
          </div>
          <h2 className="text-2xl font-extrabold text-[#0A2540]">{currentService.title} Questions</h2>
        </div>

        <div className="space-y-3">
          {extended.faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-[#0A2540] text-sm flex items-center gap-2">
                <span className="text-[#0284C7] font-black">Q:</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CONSULTATION ACTION */}
      <section className="bg-[#0A2540] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-black">Ready to Build Your {currentService.title}?</h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
            Connect with our Principal Engineers for a free 30-minute architecture review and fixed scope proposal.
          </p>
        </div>

        <button
          onClick={() => openContactModal(currentService.id)}
          className="px-8 py-3.5 bg-gradient-to-r from-sky-400 to-amber-400 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-xl hover:opacity-90 transition-all shrink-0 flex items-center gap-2 transform active:scale-95"
        >
          <span>Schedule {currentService.title.split(' ')[0]} Consultation</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </button>
      </section>

    </div>
  );
};
