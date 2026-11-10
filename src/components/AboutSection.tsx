import React from 'react';
import { ShieldCheck, Heart, Users, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              About Practo for Animals
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              Democratizing World-Class Healthcare for Domestic Pets and Community Animals
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Practo for Animals was built on a simple premise: every pet, rescue dog, and stray animal deserves rapid access to qualified, ethical veterinary medicine.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate the panic of finding emergency midnight care, untangling opaque pricing, or trusting unlicensed practitioners. Through physical credential audits, transparent review moderation, and rapid 24/7 emergency dispatch integration, we empower pet parents to make life-saving decisions with confidence.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Council Verified</strong>
                  <span className="text-slate-500">Only VCI-registered veterinarians</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Stray Welfare Support</strong>
                  <span className="text-slate-500">Free listings for non-profit shelters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Proof */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Our 4 Pillars of Veterinary Integrity
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Mandatory Degree & Registration Verification</h4>
                  <p className="text-slate-600 mt-0.5">Every doctor profile is cross-referenced with State Veterinary Councils and University records before listing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Transparent Consultation & Facility Pricing</h4>
                  <p className="text-slate-600 mt-0.5">No hidden diagnostic or emergency surcharges. Transparent baseline fee schedules upfront.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">24/7 Trauma & Oxygen Transit Coordination</h4>
                  <p className="text-slate-600 mt-0.5">Real-time mapping of facilities with active intensive care units, incubators, and mobile oxygen support.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Community Feedback Moderation</h4>
                  <p className="text-slate-600 mt-0.5">Zero paid promotions or fake reviews. Only authentic feedback submitted by verified pet owners.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Pet Parent Testimonials */}
        <div className="mt-12 pt-12 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">What Pet Parents Say</h3>
            <p className="text-xs text-slate-500 mt-1">Real stories from dog, cat, and community animal caretakers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{t.author}</span>
                    <span className="text-[11px] text-teal-700">{t.pet}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{t.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
