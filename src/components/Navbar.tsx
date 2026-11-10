import React, { useState } from 'react';
import { Menu, X, HeartHandshake, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenListBusiness: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenListBusiness, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand element */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0 cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-sm group-hover:bg-teal-700 transition-colors">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
              Practo <span className="text-teal-600 font-semibold">for Animals</span>
            </div>
          </div>
        </button>

        {/* Zone 2: 4-5 Clean Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick('home')}
            className="hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Explore Services
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-teal-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenListBusiness}
            className="px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            List Your Business
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenListBusiness}
            className="px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-md whitespace-nowrap"
          >
            List Business
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
          >
            Explore Services
          </button>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
          >
            Contact
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenListBusiness();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              List Your Business
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
