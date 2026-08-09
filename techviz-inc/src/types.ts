export type PageId = 'home' | 'services' | 'service-detail' | 'webdev' | 'portfolio' | 'calculator' | 'about' | 'contact';

export interface WebPackage {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  idealFor: string;
  deliveryTime: string;
  features: string[];
  notIncluded?: string[];
  techIncluded: string[];
  support: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'mobile' | 'web' | 'design' | 'ai' | 'cloud';
  platforms: string[];
  techStack: string[];
  keyFeatures: string[];
  deliverables: string[];
  caseStudyRef?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    avatar: string;
  };
  appScreens?: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string[];
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface EstimatorState {
  platform: 'ios' | 'android' | 'cross_platform' | 'web' | 'all';
  complexity: 'mvp' | 'standard' | 'enterprise';
  features: string[];
  designLevel: 'clean' | 'custom' | 'bespoke';
  timeline: 'express' | 'standard' | 'relaxed';
  userEmail?: string;
  userName?: string;
  userPhone?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
  dateSubmitted?: string;
}
