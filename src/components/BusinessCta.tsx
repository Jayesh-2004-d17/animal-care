import React from 'react';
import { Building2, Edit3, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface BusinessCtaProps {
  onOpenListBusiness: () => void;
  onOpenSubmitCorrection: () => void;
}

export const BusinessCta: React.FC<BusinessCtaProps> = ({
  onOpenListBusiness,
  onOpenSubmitCorrection
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden relative">
          
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-teal-500/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-xs text-teal-300 font-medium">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>For Veterinary Practices, Boarding Resorts & NGOs</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
                Join India's Fastest Growing Animal Care Ecosystem
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Are you a licensed veterinarian, pet clinic owner, animal ambulance provider, or registered shelter? Connect with thousands of responsible pet parents looking for trusted care every day.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Free Profile Listing
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Instant Pet Parent Bookings
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Emergency Dispatch Integration
                </span>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={onOpenListBusiness}
                className="w-full px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Building2 className="w-4 h-4 text-slate-950" />
                <span>List Your Business</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenSubmitCorrection}
                className="w-full px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Edit3 className="w-4 h-4 text-slate-400" />
                <span>Submit a Correction</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
