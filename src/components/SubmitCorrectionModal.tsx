import React, { useState } from 'react';
import { X, Edit3, CheckCircle2 } from 'lucide-react';
import { Provider } from '../types';
import { SAMPLE_PROVIDERS } from '../data/mockData';

interface SubmitCorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const SubmitCorrectionModal: React.FC<SubmitCorrectionModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [selectedProviderName, setSelectedProviderName] = useState(SAMPLE_PROVIDERS[0]?.name || '');
  const [correctionType, setCorrectionType] = useState('Operating Hours / Closed');
  const [userEmail, setUserEmail] = useState('');
  const [correctionDetails, setCorrectionDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!correctionDetails) return;

    setSubmitted(true);
    onSubmitSuccess('Correction details submitted to our data integrity team. Thank you!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <Edit3 className="w-4 h-4" />
              <span>Data Quality & Accuracy</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Submit a Clinic Correction
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Help us keep animal healthcare records 100% accurate for every pet parent.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 text-xs">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Correction Received!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Our database editorial team will verify these details with the facility and update the listing within 4 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 px-5 py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Select Provider / Clinic *
                </label>
                <select
                  value={selectedProviderName}
                  onChange={(e) => setSelectedProviderName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
                >
                  {SAMPLE_PROVIDERS.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.locality})
                    </option>
                  ))}
                  <option value="Other / Unlisted Facility">Other / Unlisted Facility</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  What needs to be corrected? *
                </label>
                <select
                  value={correctionType}
                  onChange={(e) => setCorrectionType(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
                >
                  <option value="Operating Hours / Closed">Operating Hours or Permanently Closed</option>
                  <option value="Incorrect Phone / Contact Number">Incorrect Phone / Contact Number</option>
                  <option value="Relocated to New Address">Relocated to New Address</option>
                  <option value="New Doctor or Facility Added">New Equipment, Specialty or Doctor</option>
                  <option value="Price / Consultation Fee Change">Consultation Fee or Service Rate Change</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Correction Details & Supporting Notes *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. The clinic is now closed on Thursdays, or the new 24/7 emergency phone number is..."
                  value={correctionDetails}
                  onChange={(e) => setCorrectionDetails(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Your Email (for verification followup)
                </label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
                >
                  Submit Correction
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
