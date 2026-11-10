import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FilterBar } from './components/FilterBar';
import { ProviderCard } from './components/ProviderCard';
import { ProviderDetailsModal } from './components/ProviderDetailsModal';
import { ContactModal } from './components/ContactModal';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { BusinessCta } from './components/BusinessCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ListBusinessModal } from './components/ListBusinessModal';
import { SubmitCorrectionModal } from './components/SubmitCorrectionModal';
import { Toast } from './components/Toast';
import { Provider, FilterState, ServiceCategory } from './types';
import { SAMPLE_PROVIDERS } from './data/mockData';
import { Search, Frown } from 'lucide-react';

export default function App() {
  // Global filter state
  const [filterState, setFilterState] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: 'All',
    selectedCity: 'All Locations',
    minRating: 0,
    onlyOpenNow: false,
    only24x7: false,
    onlyHomeVisits: false,
    petType: 'All Animals'
  });

  // Modal states
  const [selectedProviderForDetails, setSelectedProviderForDetails] = useState<Provider | null>(null);
  const [selectedProviderForContact, setSelectedProviderForContact] = useState<Provider | null>(null);
  const [isListBusinessOpen, setIsListBusinessOpen] = useState(false);
  const [isSubmitCorrectionOpen, setIsSubmitCorrectionOpen] = useState(false);
  
  // Bookmarked / Saved providers
  const [savedProviderIds, setSavedProviderIds] = useState<Set<string>>(new Set(['prov-1']));

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleToggleSave = (providerId: string) => {
    setSavedProviderIds(prev => {
      const next = new Set(prev);
      if (next.has(providerId)) {
        next.delete(providerId);
        showToast('Removed from saved pet care providers.');
      } else {
        next.add(providerId);
        showToast('Saved to your preferred pet care facilities!');
      }
      return next;
    });
  };

  const handleHeroSearch = (city: string, category: string, keyword: string) => {
    const cleanCity = city.includes('Bangalore') ? 'Bangalore' : city;
    setFilterState(prev => ({
      ...prev,
      selectedCity: cleanCity,
      selectedCategory: category,
      searchQuery: keyword
    }));
  };

  const handleSelectCategory = (category: ServiceCategory | string) => {
    setFilterState(prev => ({
      ...prev,
      selectedCategory: category
    }));
    const element = document.getElementById('featured-providers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEmergency = () => {
    setFilterState(prev => ({
      ...prev,
      selectedCategory: 'Animal Hospitals',
      only24x7: true
    }));
    const element = document.getElementById('featured-providers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setFilterState({
      searchQuery: '',
      selectedCategory: 'All',
      selectedCity: 'All Locations',
      minRating: 0,
      onlyOpenNow: false,
      only24x7: false,
      onlyHomeVisits: false,
      petType: 'All Animals'
    });
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered providers
  const filteredProviders = useMemo(() => {
    return SAMPLE_PROVIDERS.filter((provider) => {
      // 1. Search Query
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase();
        const matchesName = provider.name.toLowerCase().includes(q);
        const matchesLocality = provider.locality.toLowerCase().includes(q);
        const matchesTagline = provider.tagline.toLowerCase().includes(q);
        const matchesSpecialty = provider.specialties.some(s => s.toLowerCase().includes(q));
        const matchesFacility = provider.facilities.some(f => f.toLowerCase().includes(q));
        const matchesDoctor = provider.doctors?.some(d => d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q));

        if (!matchesName && !matchesLocality && !matchesTagline && !matchesSpecialty && !matchesFacility && !matchesDoctor) {
          return false;
        }
      }

      // 2. Category
      if (filterState.selectedCategory !== 'All') {
        if (provider.category !== filterState.selectedCategory) {
          return false;
        }
      }

      // 3. City
      if (filterState.selectedCity !== 'All Locations') {
        const targetCity = filterState.selectedCity.toLowerCase();
        if (!provider.city.toLowerCase().includes(targetCity.replace(' (current location)', ''))) {
          return false;
        }
      }

      // 4. Rating
      if (filterState.minRating > 0) {
        if (provider.rating < filterState.minRating) {
          return false;
        }
      }

      // 5. Open Now
      if (filterState.onlyOpenNow && !provider.isOpenNow) {
        return false;
      }

      // 6. 24x7
      if (filterState.only24x7 && !provider.is24x7) {
        return false;
      }

      // 7. Home Visits
      if (filterState.onlyHomeVisits && !provider.homeVisits) {
        return false;
      }

      return true;
    });
  }, [filterState]);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      

      {/* Top Bar with Brand, Navigation links, and List Your Business */}
      <Navbar
        onOpenListBusiness={() => setIsListBusinessOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section with interactive Search and Filter triggers */}
        <Hero
          onSearch={handleHeroSearch}
          onSelectCategory={handleSelectCategory}
        />

        {/* 6 Core Animal Healthcare Disciplines */}
        <CategoryGrid
          selectedCategory={filterState.selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Featured Providers Section with Search and Filters */}
        <section id="featured-providers" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                  Verified Healthcare Marketplace
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                  Featured Animal Care Providers
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Audited veterinary clinics, specialty emergency hospitals, certified boarding resorts, and compassionate animal NGOs near you.
                </p>
              </div>

              {/* Quick filter summary */}
              <div className="text-xs text-slate-500 font-medium">
                {filterState.selectedCategory !== 'All' ? (
                  <span>Filtering for <strong className="text-teal-700">{filterState.selectedCategory}</strong></span>
                ) : (
                  <span>Showing all animal healthcare categories</span>
                )}
              </div>
            </div>

            {/* Filter Bar */}
            <FilterBar
              filterState={filterState}
              onFilterChange={(updates) => setFilterState(prev => ({ ...prev, ...updates }))}
              onReset={handleResetFilters}
              totalResults={filteredProviders.length}
            />

            {/* Providers Grid */}
            {filteredProviders.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProviders.map((provider) => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    onViewDetails={(prov) => setSelectedProviderForDetails(prov)}
                    onContact={(prov) => setSelectedProviderForContact(prov)}
                    isSaved={savedProviderIds.has(provider.id)}
                    onToggleSave={handleToggleSave}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">No Providers Match Your Filters</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  We couldn't find any facilities matching your criteria in this location. Try loosening your rating or availability filters.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* About Section */}
        <AboutSection />

        {/* Business CTA: List Business & Submit Correction */}
        <BusinessCta
          onOpenListBusiness={() => setIsListBusinessOpen(true)}
          onOpenSubmitCorrection={() => setIsSubmitCorrectionOpen(true)}
        />

        {/* Contact Section */}
        <ContactSection onSuccessToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onNavigate={handleNavigate}
        onOpenListBusiness={() => setIsListBusinessOpen(true)}
        onOpenSubmitCorrection={() => setIsSubmitCorrectionOpen(true)}
        onToast={showToast}
      />

      {/* Provider Details Modal with Tabbed Doctor Credentials, Facilities & Appointment Booking */}
      <ProviderDetailsModal
        provider={selectedProviderForDetails}
        onClose={() => setSelectedProviderForDetails(null)}
        onContact={(prov) => {
          setSelectedProviderForDetails(null);
          setSelectedProviderForContact(prov);
        }}
        onBookSuccess={showToast}
      />

      {/* Contact & Inquiry Modal */}
      <ContactModal
        provider={selectedProviderForContact}
        onClose={() => setSelectedProviderForContact(null)}
        onSubmitSuccess={showToast}
      />

      {/* List Your Business Registration Modal */}
      <ListBusinessModal
        isOpen={isListBusinessOpen}
        onClose={() => setIsListBusinessOpen(false)}
        onSubmitSuccess={showToast}
      />

      {/* Submit a Clinic Correction Modal */}
      <SubmitCorrectionModal
        isOpen={isSubmitCorrectionOpen}
        onClose={() => setIsSubmitCorrectionOpen(false)}
        onSubmitSuccess={showToast}
      />

      {/* Toast Feedback Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
