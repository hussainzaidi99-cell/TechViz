import React from 'react';
import { Shield, FileText, RefreshCw, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalPageProps {
  type: 'terms' | 'privacy' | 'refund';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-800 text-center space-y-4 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          {type === 'terms' && <FileText className="w-3.5 h-3.5 text-amber-400" />}
          {type === 'privacy' && <Shield className="w-3.5 h-3.5 text-emerald-400" />}
          {type === 'refund' && <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />}
          <span>Legal & Compliance Documentation</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          {type === 'terms' && 'Terms of Service'}
          {type === 'privacy' && 'Privacy Policy'}
          {type === 'refund' && 'Refund & Cancellation Policy'}
        </h1>

        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          TechViz Inc • Last Updated: August 2026 • Effective Date: January 1, 2026
        </p>

        {/* Quick Nav Tabs */}
        <div className="pt-4 flex flex-wrap justify-center gap-2">
          <Link
            to="/terms"
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              type === 'terms'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              type === 'privacy'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund-policy"
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              type === 'refund'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Refund Policy
          </Link>
        </div>
      </div>

      {/* Main Legal Content Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-8 text-slate-700 text-sm leading-relaxed">
        {type === 'terms' && (
          <>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or entering into a Master Services Agreement (MSA) or Statement of Work (SOW) with TechViz Inc ("Company", "we", "us", "our"), you ("Client", "User") agree to be bound by these Terms of Service. If you do not agree to these terms, do not access or use our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">2. Services & Engineering Scope</h2>
              <p>
                TechViz Inc provides custom software development, mobile application development (iOS & Android), web development packages, UI/UX design, cloud architecture, and artificial intelligence integration services as outlined in individual Statements of Work or selected package plans.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">3. Intellectual Property (IP) Transfer</h2>
              <p>
                Upon receipt of full payment for completed deliverables or milestones, TechViz Inc hereby transfers and assigns 100% of all right, title, and interest in and to the custom source code, design assets, and deliverable artifacts created exclusively for the Client. TechViz Inc retains no proprietary licensing locks on custom work delivered.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">4. Payment Terms & Invoicing</h2>
              <p>
                Fixed packages (such as our $600 Starter, $1,000 Growth, or $1,500 Enterprise Web Packages) are billed according to the payment schedules specified during checkout or in the applicable invoice. Custom enterprise contracts are billed in milestone installments or monthly agile sprint cycles as detailed in the corresponding SOW.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">5. Confidentiality & Non-Disclosure</h2>
              <p>
                Both parties agree to protect and maintain confidential all non-public information, proprietary source code, business logic, customer data, and trade secrets disclosed during the course of any project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">6. Warranty & Defect Remediation</h2>
              <p>
                TechViz Inc provides a 30-day post-launch warranty period on all custom software deployments. Any reproducible defects or bugs identified within the agreed scope will be remediated at zero additional cost to the Client.
              </p>
            </section>
          </>
        )}

        {type === 'privacy' && (
          <>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">1. Information We Collect</h2>
              <p>
                TechViz Inc collects information you provide directly to us when requesting a consultation, submitting a contact form, subscribing to our newsletter, or entering into a service contract. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Contact Information: Name, work email address, phone number, and company name.</li>
                <li>Project Requirements: Service category, estimated budget, technical specifications, and timeline goals.</li>
                <li>Technical Data: IP address, browser type, device information, and anonymous session telemetry.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">2. How We Use Your Information</h2>
              <p>
                We use collected information solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Provide accurate project estimates, technical scopes, and architectural reviews.</li>
                <li>Execute contracts, process invoices, and manage client communications.</li>
                <li>Send technical insights or project updates when explicitly opted in.</li>
                <li>Ensure compliance with security standards (SOC2, HIPAA, GDPR).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">3. Data Security & Storage</h2>
              <p>
                We employ bank-grade SSL/TLS 256-bit encryption for all transmitted data. Client data is stored in ISO 27001 and SOC2 certified Google Cloud and AWS data centers with strict access controls and zero third-party data selling.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">4. Your Privacy Rights (GDPR & CCPA)</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please email our Data Privacy Officer at <a href="mailto:privacy@techvizinc.com" className="text-[#0284C7] font-semibold underline">privacy@techvizinc.com</a>.
              </p>
            </section>
          </>
        )}

        {type === 'refund' && (
          <>
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">1. Overview & Satisfaction Commitment</h2>
              <p>
                At TechViz Inc, we are committed to delivering exceptional digital products. Because our work involves custom software engineering, design sprints, and dedicated developer allocations, our refund terms are structured around milestone deliverables and project kickoff phases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">2. Pre-Kickoff Cancellations (100% Refund)</h2>
              <p>
                If you purchase a web development package or sign a project agreement and request cancellation <strong>prior to the formal kickoff meeting or initial sprint allocation</strong> (within 72 hours of purchase), you will receive a full 100% refund of your initial deposit.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">3. Milestone-Based & Custom Projects</h2>
              <p>
                For in-flight custom engineering projects:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Completed & Approved Milestones:</strong> Payments made for milestones that have been reviewed, approved, and delivered are non-refundable.</li>
                <li><strong>Unstarted Milestones:</strong> Any funds held in escrow or prepaid for future unstarted sprint cycles will be refunded in full upon written cancellation notice.</li>
                <li><strong>In-Progress Sprints:</strong> If cancellation occurs mid-sprint, charges will be prorated based on documented engineering hours completed, with remaining funds refunded.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#0A2540]">4. How to Request a Refund</h2>
              <p>
                To request a refund or project modification, contact your assigned Account Manager or send an email with your invoice number to <a href="mailto:billing@techvizinc.com" className="text-[#0284C7] font-semibold underline">billing@techvizinc.com</a>. All valid requests are reviewed and processed within 3–5 business days.
              </p>
            </section>
          </>
        )}

        {/* Support & Contact Footer */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0284C7]" />
            <span>Questions? Contact <a href="mailto:contact@techvizinc.com" className="text-[#0A2540] font-bold underline">contact@techvizinc.com</a></span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Toll-Free: +1 (800) 583-2484</span>
          </div>
        </div>
      </div>
    </div>
  );
};
