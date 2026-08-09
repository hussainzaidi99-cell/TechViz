import { ServiceItem, CaseStudy, BlogArticle, TeamMember, FAQItem, WebPackage } from '../types';

export const WEB_PACKAGES: WebPackage[] = [
  {
    id: 'starter-web',
    name: 'Starter Web Package',
    price: '$600',
    originalPrice: '$850',
    badge: 'Best for Small Biz & Landing Pages',
    tagline: 'High-converting, mobile-responsive website to kickstart your online brand presence.',
    idealFor: 'Startups, Local Services, Consultants, Freelancers, & Single Product Launches',
    deliveryTime: '5 - 7 Business Days',
    features: [
      'Up to 5 Custom Designed Pages (Home, About, Services, Gallery, Contact)',
      '100% Mobile & Smartphone Responsive Layout',
      'Modern High-Contrast Clean UI with Fast Loading Speed (<1s)',
      'Contact Form with Instant Email Notifications',
      'Basic On-Page SEO Optimization & Google Indexing',
      'SSL Security & Domain Setup Assistance',
      'Social Media Integration (LinkedIn, Instagram, X/Twitter)',
      '14 Days Complimentary Post-Launch Support'
    ],
    techIncluded: ['React', 'Tailwind CSS', 'Vite', 'HTML5/CSS3', 'SEO Meta Tags'],
    support: '14 Days Free Maintenance'
  },
  {
    id: 'professional-web',
    name: 'Professional Web Package',
    price: '$1,000',
    originalPrice: '$1,400',
    popular: true,
    badge: 'Most Popular for Growing Businesses',
    tagline: 'Feature-rich custom website with CMS, analytics, lead capture, and performance tuning.',
    idealFor: 'Growing Companies, Service Agencies, SaaS Platforms, & Professional Services',
    deliveryTime: '10 - 14 Business Days',
    features: [
      'Up to 10 Custom Designed Interactive Pages',
      'Custom UI/UX Wireframing & Brand Identity Alignment',
      'Headless CMS or Content Management Integration (Easy Edits)',
      'Interactive Contact Forms, Lead Capture Popups & CRM Booking Sync',
      'Advanced Speed & Performance Tuning (Lighthouse 95+ Score)',
      'Full On-Page & Technical SEO Setup (Schema markup, sitemap)',
      'Google Analytics 4 & Meta Pixel Tracking Setup',
      'Blog / News Insights Module Setup',
      '30 Days Dedicated Post-Launch SLA Support'
    ],
    techIncluded: ['React', 'Next.js / Vite', 'Node.js', 'Tailwind CSS', 'Headless CMS', 'GA4 Analytics'],
    support: '30 Days Dedicated SLA'
  },
  {
    id: 'enterprise-ecommerce-web',
    name: 'Enterprise & E-Commerce Package',
    price: '$1,500',
    originalPrice: '$2,100',
    badge: 'Full E-Commerce & Web Applications',
    tagline: 'Full-fledged e-commerce store or web application with payment gateways & dynamic database.',
    idealFor: 'E-Commerce Brands, Online Stores, Membership Sites, & Custom Web Portals',
    deliveryTime: '18 - 21 Business Days',
    features: [
      'Full E-Commerce Store or Dynamic Web Application (Unlimited Products/Items)',
      'Secure Stripe / PayPal / Apple Pay Payment Gateway Integration',
      'User Account Creation, Order Management & Customer Dashboard',
      'Shopping Cart, Wishlist & Instant Checkout Workflows',
      'Dynamic Relational Database Integration (PostgreSQL / Firestore)',
      'Inventory Tracking, Automated Email Receipts & Order Notifications',
      'Custom API Integrations & Webhook Connectors',
      'Enterprise-Grade Security Hardening & Rate-Limiting',
      '60 Days Priority Warranty & Cloud Maintenance'
    ],
    techIncluded: ['React', 'Node.js / Express', 'Stripe API', 'PostgreSQL / Firestore', 'Tailwind CSS', 'Docker'],
    support: '60 Days Priority SLA'
  },
  {
    id: 'custom-web',
    name: 'Custom Enterprise Portal',
    price: 'Custom',
    badge: 'Bespoke SaaS & Complex Platforms',
    tagline: 'Custom SaaS web platform, multi-tenant portals, AI workflows, and dedicated microservices.',
    idealFor: 'Enterprise Organizations, FinTech, HealthTech, AI Platforms, & High-Scale Systems',
    deliveryTime: 'Custom Timeline',
    features: [
      'Bespoke Multi-Tenant SaaS or Enterprise Customer Portal',
      'Gemini AI API & Generative Automation Workflows',
      'Custom Backend Architecture with Microservices & REST/GraphQL APIs',
      'Advanced Role-Based Access Control (RBAC) & Single Sign-On (SSO)',
      'Real-Time WebSockets, Push Notifications & Live Dashboards',
      'Dedicated Project Manager, Solutions Architect, & DevOps Lead',
      '24/7 Enterprise SLA Support, Cloud Monitoring & Auto-Scaling'
    ],
    techIncluded: ['React / Next.js', 'Node.js', 'Python / FastAPI', 'Gemini AI', 'AWS / GCP', 'Docker / K8s'],
    support: 'Dedicated 24/7 SLA & Retainer'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ios-app-development',
    title: 'iOS App Development',
    shortDesc: 'Native Apple iOS, iPadOS, and watchOS apps engineered with Swift, SwiftUI, and Human Interface guidelines.',
    fullDesc: 'We craft high-performance, intuitive iOS applications tailored for iPhone, iPad, and Apple Watch. Leveraging Swift, SwiftUI, and native Apple APIs, our engineering team ensures lightning-fast execution, zero-latency animations, and seamless integration with Apple Pay, FaceID, CoreML, and CloudKit.',
    iconName: 'Smartphone',
    category: 'mobile',
    platforms: ['iPhone', 'iPad', 'Apple Watch', 'Apple TV'],
    techStack: ['Swift', 'SwiftUI', 'CoreData', 'Combine', 'Combine/RxSwift', 'Xcode', 'TestFlight'],
    keyFeatures: [
      'Native Swift & SwiftUI modular architecture',
      'Human Interface Design (HIG) compliance',
      'Biometric authentication & Apple Pay integration',
      'Offline-first synchronization & background tasks',
      '100% App Store Submission & Compliance Guarantee'
    ],
    deliverables: [
      'Complete Source Code & Xcode Project',
      'App Store Connect Account Setup & Release',
      'Comprehensive Technical Architecture Documentation',
      '30-Day Post-Launch Warranty & Monitoring'
    ],
    caseStudyRef: 'finpulse-ai'
  },
  {
    id: 'android-app-development',
    title: 'Android App Development',
    shortDesc: 'Native Android applications powered by Kotlin, Jetpack Compose, and Material Design 3 for maximum reach.',
    fullDesc: 'Capture the global mobile audience with robust, scalable native Android applications. We build resilient Android apps using Kotlin and Jetpack Compose, optimized for performance across thousands of diverse device models, screen resolutions, and OS versions.',
    iconName: 'Tablet',
    category: 'mobile',
    platforms: ['Android Phones', 'Android Tablets', 'Wear OS', 'Android Auto'],
    techStack: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Hilt/Dagger', 'Room DB', 'Retrofit'],
    keyFeatures: [
      'Modern Jetpack Compose declarative UI architecture',
      'Material Design 3 expressive visual patterns',
      'Fragment & multi-window responsive layout support',
      'Google Play Billing & Push Notification Services',
      'Automated device lab testing across 500+ Android models'
    ],
    deliverables: [
      'Production APK and Android App Bundle (.aab)',
      'Google Play Console deployment & Store Optimization',
      'Full CI/CD Pipeline Configuration',
      'Security Audit & Data Encryption Compliance Report'
    ],
    caseStudyRef: 'medicare-connect'
  },
  {
    id: 'cross-platform-development',
    title: 'Cross-Platform App Development',
    shortDesc: 'Single codebase applications using React Native and Flutter for fast time-to-market and dual OS reach.',
    fullDesc: 'Slash development costs and accelerate launch timelines without sacrificing native performance. Our cross-platform experts utilize React Native and Flutter to build beautiful iOS and Android apps from a single, unified codebase.',
    iconName: 'Layers',
    category: 'mobile',
    platforms: ['iOS', 'Android', 'Web', 'Desktop'],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'Expo', 'Redux Toolkit'],
    keyFeatures: [
      '90%+ shared code efficiency across iOS and Android',
      'Native bridge modules for hardware acceleration',
      'Instant Over-The-Air (OTA) updates via Expo Updates',
      'Unified design token system for visual consistency',
      'Seamless multi-platform QA testing'
    ],
    deliverables: [
      'Unified React Native / Flutter Code Repository',
      'Simultaneous iOS App Store & Android Play Store releases',
      'Cross-platform UI component library',
      'Automated deployment scripts'
    ],
    caseStudyRef: 'swiftride'
  },
  {
    id: 'web-saas-development',
    title: 'Web & SaaS Engineering',
    shortDesc: 'Full-stack web applications, enterprise SaaS portals, and API microservices engineered for cloud scale.',
    fullDesc: 'Transform complex business logic into lightning-fast web applications. We build resilient enterprise web platforms, customer portals, and multi-tenant SaaS solutions using React, Next.js, Node.js, and cloud-native architecture.',
    iconName: 'Globe',
    category: 'web',
    platforms: ['Web Browsers', 'Desktop Web', 'PWA (Progressive Web Apps)'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    keyFeatures: [
      'High-performance SSR / SSG architecture',
      'Multi-tenant database schema & RBAC security',
      'Stripe / Braintree subscription & billing integration',
      'Real-time WebSockets & event-driven notifications',
      'Sub-second page load times & WCAG AAA Accessibility'
    ],
    deliverables: [
      'Production-ready Web Application Repository',
      'Docker Container Build & Cloud Deployment',
      'Interactive API Documentation (OpenAPI/Swagger)',
      'SLA performance & security verification'
    ],
    caseStudyRef: 'novasaas'
  },
  {
    id: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    shortDesc: 'Human-centered UI design, interactive Figma prototypes, user research, and comprehensive design systems.',
    fullDesc: 'Great apps start with deep user empathy and intuitive design. Our product designers conduct in-depth user research, wireframing, rapid interactive prototyping, and design system creation to ensure your product delights users from day one.',
    iconName: 'Palette',
    category: 'design',
    platforms: ['Mobile UI', 'Web Apps', 'Design Systems'],
    techStack: ['Figma', 'Protopie', 'Design Tokens', 'UserTesting', 'Principle'],
    keyFeatures: [
      'In-depth User Research & Persona Mapping',
      'Clickable Interactive Figma Prototypes',
      'Scalable Design System with Tokens & Component Libraries',
      'Usability Testing & Conversion Rate Optimization (CRO)',
      'Pixel-perfect developer handoff specs'
    ],
    deliverables: [
      'Complete Master Figma Design File',
      'Interactive Mobile & Web Prototypes',
      'Design System Documentation & Style Guide',
      'User Journey & Wireframe Maps'
    ]
  },
  {
    id: 'ai-cloud-integration',
    title: 'Enterprise AI & Cloud Infrastructure',
    shortDesc: 'Integration of Gemini LLMs, custom machine learning pipelines, AWS/GCP cloud, and serverless backends.',
    fullDesc: 'Power your app with cutting-edge artificial intelligence and cloud elasticity. We integrate Google Gemini, OpenAI, custom vector databases (Pinecone, Qdrant), and cloud serverless pipelines to give your business a competitive edge.',
    iconName: 'Cpu',
    category: 'ai',
    platforms: ['Cloud API', 'Serverless', 'AI Microservices'],
    techStack: ['Gemini API', 'Python', 'FastAPI', 'AWS Lambda', 'Google Cloud', 'Docker', 'Redis'],
    keyFeatures: [
      'Generative AI text, image, and data processing workflows',
      'RAG (Retrieval-Augmented Generation) & Vector Search',
      'Automated DevOps CI/CD and Cloud Auto-scaling',
      'Zero-downtime microservices & API Gateway',
      'SOC2 & GDPR Data Privacy Compliance'
    ],
    deliverables: [
      'Custom AI Pipeline Microservice',
      'Infrastructure as Code (Terraform / CloudFormation)',
      'API Security & Rate-Limiting setup',
      '24/7 Server Health Monitoring Dashboards'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'finpulse-ai',
    title: 'FinPulse - AI-Powered Personal Wealth & Trading Assistant',
    client: 'FinPulse Technologies Inc (San Francisco, CA)',
    category: 'Mobile App / FinTech',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    summary: 'A next-generation wealth management app that uses generative AI to provide personalized portfolio insights, automated rebalancing recommendations, and real-time market sentiment analysis.',
    challenge: 'FinPulse needed a high-security mobile platform capable of streaming real-time stock ticker data, processing complex AI financial queries, and maintaining sub-100ms UI responsiveness under high volatility.',
    solution: 'TechViz designed and built a native iOS & Android app using Swift and Kotlin, supported by a Node.js microservice backend connected to the Gemini API for natural language financial summaries and real-time market insights.',
    metrics: [
      { label: 'Active Users', value: '450,000+' },
      { label: 'Capital Raised', value: '$28M Series A' },
      { label: 'App Store Rating', value: '4.9 ★ (18k reviews)' },
      { label: 'Latency Reduction', value: '62%' }
    ],
    techStack: ['Swift', 'Kotlin', 'Gemini API', 'Node.js', 'WebSockets', 'AWS ElastiCache'],
    testimonial: {
      quote: 'TechViz delivered our core product 3 weeks ahead of schedule. Their attention to security, slick native UI, and AI integrations impressed our investors and our half-a-million users.',
      author: 'David Vance',
      title: 'Co-Founder & CEO, FinPulse',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    appScreens: [
      'Dashboard & AI Portfolio Analysis',
      'Instant Trade Execution',
      'Smart News Sentiment Summarizer',
      'Biometric Vault & Asset Transfer'
    ]
  },
  {
    id: 'medicare-connect',
    title: 'MediCare Connect - HIPAA-Compliant Telehealth & Monitoring Platform',
    client: 'MediCare Global Health (New York, NY)',
    category: 'Healthcare / Mobile App',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    summary: 'A comprehensive mobile telehealth ecosystem linking patients with board-certified physicians for encrypted HD video consultations, remote vital sign tracking, and e-prescriptions.',
    challenge: 'Strict HIPAA compliance requirements, seamless WebRTC audio/video calls on low-bandwidth cellular networks, and integration with legacy Electronic Health Record (EHR) systems.',
    solution: 'TechViz developed a cross-platform React Native app with end-to-end encrypted video streaming, integrated Apple HealthKit and Google Fit for Bluetooth medical hardware sync, and deployed on HIPAA-verified GCP infrastructure.',
    metrics: [
      { label: 'Consultations Completed', value: '1.2M+' },
      { label: 'Patient Retention', value: '88%' },
      { label: 'EHR Systems Integrated', value: '14 Core Providers' },
      { label: 'Uptime SLA', value: '99.99%' }
    ],
    techStack: ['React Native', 'WebRTC', 'TypeScript', 'Node.js', 'PostgreSQL', 'Google Cloud Healthcare API'],
    testimonial: {
      quote: 'The team at TechViz understands healthcare engineering deeply. They built a platform that our doctors find effortless to use and that patients trust with their medical data.',
      author: 'Dr. Elena Rostova',
      title: 'Chief Medical Officer, MediCare Global',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'swiftride',
    title: 'SwiftRide - On-Demand Autonomous Fleet & Mobility Platform',
    client: 'SwiftRide Technologies (Austin, TX)',
    category: 'Logistics & Mobility',
    heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Real-time urban ride-hailing and fleet tracking application featuring live driver navigation, route optimization, split-fare payments, and rider safety tools.',
    challenge: 'Precise location tracking with minimal battery drain, handling 50,000 simultaneous driver location pings per second, and dynamic price surge algorithms.',
    solution: 'Built with Flutter and Google Maps Platform API, backed by Go microservices and Redis geospatial caching. Reduced battery draw by 40% while maintaining sub-meter map accuracy.',
    metrics: [
      { label: 'Daily Rides', value: '120,000+' },
      { label: 'Avg Match Time', value: '14 Seconds' },
      { label: 'App Rating', value: '4.8 ★' },
      { label: 'Battery Savings', value: '40%' }
    ],
    techStack: ['Flutter', 'Google Maps Platform', 'Go (Golang)', 'Redis', 'Kafka', 'Stripe Connect'],
    testimonial: {
      quote: 'TechViz engineered a mapping and dispatch algorithm that outperformed our previous legacy codebase by tenfold. They are true product leaders.',
      author: 'Marcus Chen',
      title: 'VP of Product, SwiftRide',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'novasaas',
    title: 'NovaSaaS - Enterprise Customer Success & Intelligence Dashboard',
    client: 'Nova Systems Inc (London, UK)',
    category: 'SaaS / Web Engineering',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary: 'A multi-tenant SaaS analytics platform aggregating customer health scores, churn risk predictions, and automated outreach workflows for B2B tech enterprises.',
    challenge: 'Aggregating data from Salesforce, HubSpot, and Stripe into unified real-time dashboard visualization without overwhelming browser memory.',
    solution: 'Architected a React + Tailwind frontend with D3.js and Recharts visualization components, backed by Express Node.js and PostgreSQL with automated background sync workers.',
    metrics: [
      { label: 'ARR Churn Reduced', value: '-35%' },
      { label: 'Data Points Processed', value: '500M+ / Day' },
      { label: 'Enterprise Clients', value: '120+ Companies' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'D3.js', 'PostgreSQL', 'Tailwind CSS'],
    testimonial: {
      quote: 'Working with TechViz felt like adding an elite in-house engineering team. The code quality, documentation, and design standards were outstanding.',
      author: 'Sarah Jenkins',
      title: 'CTO, Nova Systems',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    quote: 'TechViz rebuilt our core mobile experience from scratch. The brand-aligned visual design, instant response time, and clean architecture helped us secure our $15M Series A.',
    author: 'Jason Rodriguez',
    role: 'Founder & CEO',
    company: 'Apex Digital Labs',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 't2',
    quote: 'Unlike traditional development agencies that overpromise and underdeliver, TechViz gave us full code transparency, weekly sprint demos, and launched on the exact target date.',
    author: 'Amara Okafor',
    role: 'Chief Product Officer',
    company: 'Finova Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 't3',
    quote: 'The App Cost Estimator on TechViz gave us a realistic quote from day one, and they stuck to the budget line by line. The app has received rave reviews on the App Store!',
    author: 'Brian Stern',
    role: 'Head of Innovation',
    company: 'HealthLine Network',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Alexander Wright',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former Tech Lead at Apple and Google. 14+ years experience building mobile ecosystems and enterprise cloud solutions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'm2',
    name: 'Sophia Sterling',
    role: 'Chief Product & Design Officer',
    bio: 'Award-winning product designer behind 20+ top-charted App Store applications. Specialist in Human Interface guidelines & design systems.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'm3',
    name: 'David K. Miller',
    role: 'VP of Mobile Engineering',
    bio: 'Pioneer in cross-platform mobile frameworks, Swift compiler optimization, and high-security fintech mobile protocols.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'm4',
    name: 'Priya Patel',
    role: 'Head of Cloud & AI Solutions',
    bio: 'Specialist in Generative AI pipelines, Gemini API integration, serverless AWS/GCP infrastructure, and SOC2 compliance.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'flutter-vs-react-native-2026',
    title: 'Flutter vs React Native in 2026: Choosing the Right Cross-Platform Stack',
    category: 'Mobile Engineering',
    author: 'David K. Miller',
    authorRole: 'VP of Mobile Engineering',
    date: 'August 4, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    snippet: 'An objective analysis of execution speed, developer velocity, bridge overhead, and UI customization across React Native and Flutter for modern mobile products.',
    tags: ['React Native', 'Flutter', 'Mobile App', 'iOS', 'Android'],
    content: [
      'Choosing between Flutter and React Native remains one of the most critical decisions for CTOs and founders aiming to build cross-platform mobile apps.',
      'In 2026, both frameworks have reached mature, high-performance milestones. React Native now benefits from the New Architecture (Fabric renderer and TurboModules) offering C++ direct binding without JSON bridge bottlenecks.',
      'Meanwhile, Flutter 3.x with Impeller rendering engine guarantees constant 120 FPS animations without shader compilation jank on modern iOS and Android displays.',
      'Key Decision Matrix: Choose React Native if your web team already uses React and TypeScript, or if you require extensive native OS UI components. Choose Flutter if you require custom complex canvas animations, pixel-identical UI across all devices, and embedded IoT or desktop targets.'
    ]
  },
  {
    id: 'building-ai-native-mobile-apps-gemini',
    title: 'Building AI-Native Mobile Apps with the Gemini 2.0 API',
    category: 'AI & Cloud',
    author: 'Priya Patel',
    authorRole: 'Head of Cloud & AI Solutions',
    date: 'July 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    snippet: 'How to implement zero-latency AI feature sets, structured multimodal processing, and privacy-first local caching in iOS and Android applications.',
    tags: ['Gemini API', 'AI', 'Machine Learning', 'Serverless', 'Mobile UI'],
    content: [
      'Artificial intelligence is no longer an optional add-on feature—it is becoming the core interaction model for modern mobile applications.',
      'By combining server-side proxy routes with streaming WebSocket connections to the Gemini API, developers can offer live voice assistance, camera object recognition, and personalized user guidance without exposing secrets to the client app.',
      'In this technical guide, we outline our battle-tested backend architecture for proxying AI requests, implementing rate limits, and managing context token usage efficiently.'
    ]
  },
  {
    id: 'app-store-approval-guide',
    title: 'How to Avoid the Top 10 App Store Rejection Reasons in 2026',
    category: 'Product Strategy',
    author: 'Sophia Sterling',
    authorRole: 'Chief Product Officer',
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
    snippet: 'Essential pre-flight checklist for Apple App Store and Google Play Store reviews, including privacy nutrition labels, in-app purchase compliance, and login guidelines.',
    tags: ['App Store', 'Google Play', 'Compliance', 'iOS', 'Product Management'],
    content: [
      'Submitting your mobile app to Apple and Google can feel nerve-wracking. Over 20% of first-time submissions experience an initial rejection due to easily avoidable guidelines oversights.',
      'Top guidelines to watch: Guideline 2.1 (Performance & Broken Links), Guideline 3.1.1 (In-App Purchases vs External Links), and Guideline 5.1.1 (Data Privacy Disclosures).',
      'At TechViz, every mobile build undergoes our 45-point automated pre-submission checklist before reaching App Store Reviewers, guaranteeing a 99.4% first-time pass rate.'
    ]
  }
];

export const AGENCY_FAQS: FAQItem[] = [
  {
    question: 'How much does it cost to build a mobile app with TechViz?',
    answer: 'App development costs depend on project scope, target platforms (iOS, Android, Web), feature complexity, and custom UI requirements. Standard MVP applications typically start between $12,000 to $25,000, while complex enterprise platforms range from $35,000 to $90,000+. You can use our interactive App Cost Calculator on this site to generate an instant estimate!',
    category: 'Pricing'
  },
  {
    question: 'How long does it take to design and launch an app?',
    answer: 'A streamlined MVP app typically takes 6 to 10 weeks from initial wireframes to App Store submission. Full-scale custom enterprise mobile apps take approximately 12 to 20 weeks. We work in 2-week agile sprints with working software demos provided at the end of every sprint.',
    category: 'Timeline'
  },
  {
    question: 'Do I own 100% of the source code and intellectual property (IP)?',
    answer: 'Yes! Upon project completion and milestone fulfillment, 100% of the source code, design assets, patents, and intellectual property rights are fully assigned to your business with zero recurring royalties or hidden vendor lock-ins.',
    category: 'IP & Code'
  },
  {
    question: 'What happens after my app is launched on the App Store and Google Play?',
    answer: 'Every TechViz project includes a complimentary 30-day post-launch warranty period for bug fixes and server monitoring. We also offer ongoing App SLA & Maintenance plans for continuous OS updates, new feature iterations, and 24/7 cloud server uptime management.',
    category: 'Support'
  },
  {
    question: 'Can TechViz help us secure venture capital or present to investors?',
    answer: 'Absolutely. We regularly design interactive, high-fidelity clickable prototypes in Figma and build functional investor MVPs. Over $120 Million in venture funding has been raised by TechViz client startups using our product prototypes.',
    category: 'Startups'
  }
];
