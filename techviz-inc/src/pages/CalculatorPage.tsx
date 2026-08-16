import React from 'react';
import { AppCostCalculator } from '../components/AppCostCalculator';
import { Calculator, Sparkles } from 'lucide-react';

interface CalculatorPageProps {
  openContactModal?: (defaultService?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = () => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#0A2540] via-[#0F345C] to-[#050812] text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-800 text-center max-w-5xl mx-auto space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-sky-400/30 backdrop-blur-md rounded-full text-xs font-bold text-sky-300 shadow-sm">
          <Calculator className="w-3.5 h-3.5 text-amber-400" />
          <span>Interactive Cost & Timeline Engine</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Mobile App & Web Cost Estimator
        </h1>

        <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Calculate instant, transparent price and timeline estimates based on your chosen platforms, architecture complexity, design fidelity, and feature requirements.
        </p>
      </div>

      <AppCostCalculator />
    </div>
  );
};
