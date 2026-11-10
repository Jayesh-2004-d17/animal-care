import React from 'react';
import { 
  Stethoscope, 
  Building2, 
  Home, 
  Activity, 
  Truck, 
  HeartHandshake, 
  ArrowUpRight 
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { CATEGORIES } from '../data/mockData';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (category: ServiceCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-teal-600" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-amber-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-indigo-600" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-rose-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      default:
        return <Stethoscope className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Care Disciplines
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Explore Animal Care Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              From everyday wellness check-ups to round-the-clock emergency hospital admissions, specialized pet pathology, and stray rescue coordination.
            </p>
          </div>

          <div className="text-xs text-slate-500">
            <span>Showing verified healthcare facilities across 6 specialties</span>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.name;

            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => onSelectCategory(cat.name)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 group cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'border-teal-500 bg-teal-50/40 shadow-sm ring-1 ring-teal-500'
                    : 'border-slate-200/90 bg-white hover:border-teal-300 hover:shadow-md hover:shadow-slate-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {getIcon(cat.iconName)}
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-teal-600 transition-colors flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">
                    {cat.providerCount} Providers
                  </span>
                  <span className="text-slate-500">
                    {cat.highlight}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
