import React from 'react';
import { Search, SlidersHorizontal, CalendarCheck, ShieldCheck } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Search className="w-5 h-5 text-teal-600" />;
      case 1:
        return <SlidersHorizontal className="w-5 h-5 text-teal-600" />;
      case 2:
        return <CalendarCheck className="w-5 h-5 text-teal-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Simple, Transparent Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1.5">
            How Practo for Animals Works
          </h2>
          <p className="text-sm text-slate-600 mt-2.5">
            We simplify animal healthcare by connecting pet parents and animal caregivers with audited, responsive veterinary professionals.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-teal-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 tracking-tight font-mono">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-teal-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>Verified Animal Care Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
