import React, { useState } from 'react';
import { X, Phone, MessageSquare, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { Provider } from '../types';

interface ContactModalProps {
  provider: Provider | null;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  provider,
  onClose,
  onSubmitSuccess
}) => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!provider) return null;

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(provider.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    setSent(true);
    onSubmitSuccess(`Message transmitted to ${provider.name}. They will call you shortly.`);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between bg-slate-50">
          <div>
            <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
              Direct Contact & Inquiry
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              {provider.name}
            </h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-teal-600" />
              <span>{provider.locality}, {provider.city}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-5">
          
          {/* Quick Call Box */}
          <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block">
                Primary Phone Number
              </span>
              <span className="text-sm font-bold text-slate-900 font-mono">
                {provider.phone}
              </span>
              <div className="flex items-center gap-1 text-[11px] text-teal-700 mt-0.5">
                <Clock className="w-3 h-3" />
                <span>{provider.timings}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="px-2.5 py-1.5 text-xs font-semibold bg-white text-slate-700 border border-teal-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={`tel:${provider.phone.replace(/[^0-9+]/g, '')}`}
                className="px-3 py-1.5 text-xs font-semibold bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-xs flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="py-8 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
              <h4 className="text-base font-bold text-slate-900">Message Dispatched!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                The clinic reception has received your query and will reply via phone or WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="text-xs font-semibold text-slate-700">
                Or send a callback request:
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Patel"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Your Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 12345"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Inquiry / Note
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inquiring about puppy vaccine schedule, room boarding rates, or ambulance availability..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
                >
                  Send Callback Request
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
