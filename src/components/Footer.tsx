import React, { useState } from 'react';
import { HeartHandshake, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { ServiceCategory } from '../types';
import { CATEGORIES } from '../data/mockData';

interface FooterProps {
  onSelectCategory: (cat: ServiceCategory) => void;
  onNavigate: (sectionId: string) => void;
  onOpenListBusiness: () => void;
  onOpenSubmitCorrection: () => void;
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigate,
  onOpenListBusiness,
  onOpenSubmitCorrection,
  onToast
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    onToast(`Subscribed ${newsletterEmail} to weekly pet health tips!`);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Practo <span className="text-teal-400 font-semibold">for Animals</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's comprehensive animal-care discovery directory connecting pet owners and rescue volunteers with verified veterinary clinics, 24/7 hospitals, ambulances, and animal welfare foundations.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>24/7 Helpline: 1800-PET-CARE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>care@practoforanimals.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Indiranagar, Bangalore · Operating Pan-India</span>
              </div>
            </div>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCategory(cat.name);
                      const el = document.getElementById('featured-providers');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Partners (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company & Help
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Contact Support
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenListBusiness}
                  className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
                >
                  List Your Business
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSubmitCorrection}
                  className="hover:text-slate-300 cursor-pointer"
                >
                  Submit a Correction
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Pet Tips (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Weekly Pet Care Dispatch
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curated vaccination reminders, seasonal pet safety alerts, and vet medical advice delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg p-1.5 focus-within:border-teal-500">
                <input
                  type="email"
                  required
                  placeholder="Enter pet parent email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-transparent px-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded transition-colors shrink-0 cursor-pointer flex items-center gap-1"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                  <span>{subscribed ? 'Joined' : 'Join'}</span>
                </button>
              </div>
              <span className="block text-[11px] text-slate-500">
                No spam. Unsubscribe at any time.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social media links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Practo for Animals. All rights reserved. Built with love for pets and animal welfare.
          </div>

          {/* Social media links as clean typography */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-slate-800">·</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
