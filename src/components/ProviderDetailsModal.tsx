import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Stethoscope, 
  MessageSquare,
  AlertCircle,
  Share2,
  Navigation
} from 'lucide-react';
import { Provider } from '../types';

interface ProviderDetailsModalProps {
  provider: Provider | null;
  onClose: () => void;
  onContact: (provider: Provider) => void;
  onBookSuccess: (msg: string) => void;
}

export const ProviderDetailsModal: React.FC<ProviderDetailsModalProps> = ({
  provider,
  onClose,
  onContact,
  onBookSuccess
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'doctors' | 'facilities' | 'reviews' | 'book'>('overview');
  
  // Appointment Form state
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');
  const [selectedDate, setSelectedDate] = useState('2026-11-12');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [visitReason, setVisitReason] = useState('Routine Checkup & Vaccination');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!provider) return null;

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ownerName || !ownerPhone || !petName) return;

    const ref = 'PRA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setBookingConfirmed(true);
    onBookSuccess(`Appointment booked at ${provider.name}! Ref: ${ref}`);
  };

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:45 AM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header with Close Button */}
        <div className="relative h-44 sm:h-52 bg-slate-100 shrink-0">
          <img
            src={provider.image}
            alt={provider.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close & Share buttons */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Metadata overlaid on hero */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 mb-1">
              <span>{provider.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                Verified Facility
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white line-clamp-1">
              {provider.name}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                {provider.locality}, {provider.city}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                <strong>{provider.rating}</strong> ({provider.reviewCount} reviews)
              </span>
              {provider.consultationFee && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-teal-200 font-medium">{provider.consultationFee}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50/70 px-4 sm:px-6 overflow-x-auto scrollbar-none shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-teal-600 text-teal-700 bg-white/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          {provider.doctors && provider.doctors.length > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('doctors')}
              className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'doctors'
                  ? 'border-teal-600 text-teal-700 bg-white/50'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Veterinarians ({provider.doctors.length})
            </button>
          )}
          <button
            type="button"
            onClick={() => setActiveTab('facilities')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'facilities'
                ? 'border-teal-600 text-teal-700 bg-white/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Facilities & Specialties
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reviews')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'reviews'
                ? 'border-teal-600 text-teal-700 bg-white/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Verified Reviews ({provider.reviews.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('book')}
            className={`py-3 px-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'book'
                ? 'border-teal-600 text-teal-700 bg-white/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Book Appointment
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  About the Provider
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {provider.about}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Address & Location
                  </span>
                  <div className="text-xs text-slate-800 font-medium leading-relaxed">
                    {provider.address}, {provider.city}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <div className="text-xs text-slate-800 font-medium">
                    {provider.timings}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Direct Contact
                  </span>
                  <div className="text-xs text-slate-800 font-mono">
                    {provider.phone}
                  </div>
                </div>

                {provider.emergencyPhone && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-rose-600 uppercase tracking-wider">
                      24/7 Emergency Line
                    </span>
                    <div className="text-xs text-rose-700 font-mono font-bold">
                      {provider.emergencyPhone}
                    </div>
                  </div>
                )}
              </div>

              {/* Supported Pets */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Pets Handled
                </h4>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                  {provider.supportedPets.map((p, idx) => (
                    <span key={p} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>{p}</span>
                      {idx < provider.supportedPets.length - 1 && <span className="text-slate-300 ml-1">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOCTORS */}
          {activeTab === 'doctors' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Attending Veterinary Specialists
              </h4>

              {provider.doctors && provider.doctors.length > 0 ? (
                <div className="space-y-3">
                  {provider.doctors.map((doc) => (
                    <div
                      key={doc.name}
                      className="p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                          <Stethoscope className="w-5 h-5 text-teal-700" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900">{doc.name}</h5>
                          <p className="text-xs text-teal-700 font-medium">{doc.specialty}</p>
                          <p className="text-xs text-slate-600 mt-1">{doc.qualification}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{doc.experience}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500">Qualified staff always on duty during operational hours.</p>
              )}
            </div>
          )}

          {/* TAB 3: FACILITIES & SPECIALTIES */}
          {activeTab === 'facilities' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  In-House Medical Facilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {provider.facilities.map((fac) => (
                    <div key={fac} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Clinical Specialties
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {provider.specialties.map((spec) => (
                    <span key={spec} className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200/80 text-teal-800 font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-xl font-bold text-slate-900">{provider.rating}</span>
                  <span className="text-xs text-slate-500">out of 5.0</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {provider.reviewCount} verified pet parents
                </span>
              </div>

              <div className="space-y-3">
                {provider.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-bold text-slate-900">{rev.author}</span>
                        <div className="text-[11px] text-slate-500">
                          Pet: <span className="text-teal-700 font-medium">{rev.petName}</span> ({rev.petType})
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      "{rev.comment}"
                    </p>
                    <span className="block text-[10px] text-slate-400 mt-2">{rev.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: BOOK APPOINTMENT */}
          {activeTab === 'book' && (
            <div>
              {bookingConfirmed ? (
                <div className="p-6 text-center rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-teal-900">Appointment Request Received!</h4>
                  <p className="text-xs text-slate-700 max-w-md mx-auto">
                    We have notified the care desk at <strong>{provider.name}</strong>. You will receive an SMS and WhatsApp confirmation on <strong>{ownerPhone}</strong>.
                  </p>
                  <div className="p-3 bg-white rounded-xl inline-block border border-teal-200 text-xs font-mono font-bold text-teal-800">
                    Booking Reference: {bookingRef}
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(false)}
                      className="text-xs font-semibold text-teal-700 hover:underline cursor-pointer"
                    >
                      Book Another Visit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} className="space-y-4">
                  <div className="text-xs text-slate-600 mb-2">
                    Book a priority appointment or clinic consultation with confirmed slot.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pet Parent Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={ownerPhone}
                        onChange={(e) => setOwnerPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Pet Name & Breed *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bruno (Golden Retriever)"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Animal Type
                      </label>
                      <select
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Exotic">Exotic / Pocket Pet</option>
                        <option value="Community Stray">Community Stray Animal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Reason for Visit
                    </label>
                    <select
                      value={visitReason}
                      onChange={(e) => setVisitReason(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="Routine Checkup & Vaccination">Routine Checkup & Vaccination</option>
                      <option value="Illness or Lethargy">Illness, Vomiting or Lethargy</option>
                      <option value="Skin & Coat Allergy">Skin Infection or Allergy</option>
                      <option value="Surgery / Orthopedic Consult">Surgery or Orthopedic Consult</option>
                      <option value="Pet Boarding Inquiry">Pet Boarding Daycare Stay</option>
                      <option value="Diagnostics / Blood Test">Diagnostic Lab & Ultrasound</option>
                    </select>
                  </div>

                  {/* Slot Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Select Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-1.5 px-2 text-xs font-medium rounded border transition-colors cursor-pointer ${
                            selectedSlot === slot
                              ? 'bg-teal-600 text-white border-teal-600'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors cursor-pointer mt-4"
                  >
                    Confirm Priority Booking
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <a
              href={`tel:${provider.phone.replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {provider.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => onContact(provider)}
              className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('book')}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
