import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, CheckCircle, Navigation } from 'lucide-react';
import { ServiceCategory } from '../types';
import { CATEGORIES, CITIES } from '../data/mockData';

interface HeroProps {
  onSearch: (city: string, category: string, keyword: string) => void;
  onSelectCategory: (cat: ServiceCategory) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onSelectCategory }) => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [keyword, setKeyword] = useState('');
  const [locating, setLocating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedCity, selectedCategory, keyword);
    const element = document.getElementById('featured-providers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUseCurrentLocation = () => {
    setLocating(true);
    setTimeout(() => {
      setSelectedCity('Bangalore (Current Location)');
      setLocating(false);
    }, 600);
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-teal-50/50 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Interactive Search Engine */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="text-xs font-semibold tracking-wide uppercase text-teal-700 mb-3">
              India's Dedicated Animal Healthcare Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Trusted Care for <span className="text-teal-600">Every Paw</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Find the best veterinary clinics, hospitals and animal care services near you. Verified doctors, 24/7 emergency dispatch, and transparent reviews.
            </p>

            {/* Healthcare Search Box */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 p-3 sm:p-3.5 bg-white rounded-2xl border border-slate-200 shadow-md shadow-slate-100/70"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                
                {/* Location Input */}
                <div className="sm:col-span-4 relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mr-2" />
                  <div className="w-full">
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      Location
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none cursor-pointer truncate"
                    >
                      {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="button"
                    onClick={handleUseCurrentLocation}
                    title="Use Current Location"
                    className="p-1 hover:bg-slate-200 rounded text-slate-500 hover:text-teal-600 transition-colors ml-1"
                  >
                    <Navigation className={`w-3.5 h-3.5 ${locating ? 'animate-spin text-teal-600' : ''}`} />
                  </button>
                </div>

                {/* Service Dropdown */}
                <div className="sm:col-span-4 relative flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                  <div className="w-full">
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                      Service Type
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-transparent text-xs font-medium text-slate-900 focus:outline-none cursor-pointer truncate"
                    >
                      <option value="All">All Services</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-1 pointer-events-none" />
                </div>

                {/* Keyword search / input */}
                <div className="sm:col-span-4 relative flex items-center">
                  <button
                    type="submit"
                    className="w-full h-full min-h-[50px] px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Search className="w-4 h-4" />
                    <span>Find Care</span>
                  </button>
                </div>

              </div>

              {/* Sub-search search term query optional */}
              <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center px-2">
                <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
                <input
                  type="text"
                  placeholder="Or search by clinic name, doctor, or condition (e.g., vaccination, X-ray, kitten surgery)..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full text-xs text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                />
                {keyword && (
                  <button
                    type="button"
                    onClick={() => setKeyword('')}
                    className="text-xs text-slate-400 hover:text-slate-600 ml-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>

            {/* Popular quick searches (Zero pill discipline: unboxed clean text with · separators) */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Quick Searches:</span>
              <button
                type="button"
                onClick={() => onSelectCategory('Veterinary Clinics')}
                className="hover:text-teal-700 hover:underline cursor-pointer transition-colors"
              >
                Puppy Vaccination
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => onSelectCategory('Animal Hospitals')}
                className="hover:text-teal-700 hover:underline cursor-pointer transition-colors"
              >
                24/7 Pet Emergency
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => onSelectCategory('Pet Boarding')}
                className="hover:text-teal-700 hover:underline cursor-pointer transition-colors"
              >
                Cage-free Boarding
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => onSelectCategory('Ambulance')}
                className="hover:text-teal-700 hover:underline cursor-pointer transition-colors"
              >
                Stray Rescue Ambulance
              </button>
            </div>

            {/* Trust and Verification signals */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">4,200+</div>
                <div className="text-xs text-slate-600 mt-0.5">Verified Pet Clinics</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-teal-600 tracking-tight">24/7</div>
                <div className="text-xs text-slate-600 mt-0.5">Emergency Assistance</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">180k+</div>
                <div className="text-xs text-slate-600 mt-0.5">Happy Pets Treated</div>
              </div>
            </div>

          </div>

          {/* Right Column: High Fidelity Hero Photography */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-teal-900/5 aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              
              <img
                src="/images/hero_veterinary_care_1794316388830.jpg"
                alt="Friendly veterinary doctor in teal scrubs examining a happy golden retriever in a modern clinic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Gentle bottom overlay scrim for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating verified badge in bottom left */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Verified Veterinary Network</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Every practitioner and hospital undergoes physical credential audits and facility inspection.
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-slate-900">4.9 / 5</span>
                    <span className="block text-[10px] text-slate-500">Average Rating</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
