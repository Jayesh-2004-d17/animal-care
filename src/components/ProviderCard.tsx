import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Eye, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { Provider } from '../types';

interface ProviderCardProps {
  provider: Provider;
  onViewDetails: (provider: Provider) => void;
  onContact: (provider: Provider) => void;
  isSaved?: boolean;
  onToggleSave?: (providerId: string) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  onViewDetails,
  onContact,
  isSaved = false,
  onToggleSave
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between group">
      
      {/* Top Part: Image & Core Details */}
      <div>
        
        {/* Image Container with Fallback */}
        <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
          {!imageError ? (
            <img
              src={provider.image}
              alt={provider.name}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${provider.fallbackGradient} flex items-center justify-center p-6 text-center`}>
              <div>
                <ShieldCheck className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-slate-800">{provider.name}</span>
              </div>
            </div>
          )}

          {/* Top overlay items */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            {/* Category Marker */}
            <span className="px-2.5 py-1 text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-slate-800 rounded-md shadow-xs pointer-events-auto">
              {provider.category}
            </span>

            {/* Bookmark button */}
            {onToggleSave && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(provider.id);
                }}
                className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-slate-600 hover:text-rose-600 flex items-center justify-center shadow-xs transition-colors pointer-events-auto cursor-pointer"
                aria-label="Save Provider"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>
            )}
          </div>

          {/* 24/7 or Emergency Indicator Bar if applicable */}
          {provider.is24x7 && (
            <div className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-rose-600/95 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
              24/7 Emergency Active
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5">
          
          {/* Metadata Row: Category & Verification */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <span>{provider.locality}</span>
            <span aria-hidden="true">·</span>
            <span>{provider.city}</span>
            {provider.distanceKm && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{provider.distanceKm} km away</span>
              </>
            )}
          </div>

          {/* Provider Name */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
            {provider.name}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
            {provider.tagline}
          </p>

          {/* Unboxed Metadata & Ratings (Zero-pill discipline) */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            
            {/* Rating */}
            <div className="flex items-center gap-1 text-slate-800">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold">{provider.rating}</span>
              <span className="text-slate-400">({provider.reviewCount})</span>
            </div>

            {/* Pricing / Fee */}
            {provider.consultationFee && (
              <div className="font-medium text-slate-700">
                {provider.consultationFee}
              </div>
            )}

          </div>

          {/* Timings and Facilities line */}
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-500 truncate">
            <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
            <span className="truncate">{provider.timings}</span>
          </div>

          {/* Specialties preview text */}
          <div className="mt-2 text-[11px] text-slate-500 truncate">
            <span className="font-medium text-slate-700">Specialties:</span>{' '}
            {provider.specialties.slice(0, 3).join(', ')}
          </div>

        </div>

      </div>

      {/* Card Footer: Contact & View Details Buttons */}
      <div className="p-5 pt-0 mt-2 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onContact(provider)}
          className="px-3 py-2 bg-slate-100 hover:bg-slate-200/90 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>Contact</span>
        </button>

        <button
          type="button"
          onClick={() => onViewDetails(provider)}
          className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-xs"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>
      </div>

    </article>
  );
};
