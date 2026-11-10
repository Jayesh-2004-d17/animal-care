import React from 'react';
import { Search, Filter, RotateCcw, Check, Star } from 'lucide-react';
import { FilterState, ServiceCategory } from '../types';
import { CATEGORIES, CITIES } from '../data/mockData';

interface FilterBarProps {
  filterState: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterState,
  onFilterChange,
  onReset,
  totalResults
}) => {
  const categoryOptions = ['All', ...CATEGORIES.map(c => c.name)];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm mb-8">
      
      {/* Top row: Search and Location inputs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-4">
        
        {/* Search Input */}
        <div className="md:col-span-6 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by clinic name, doctor, or treatment (e.g., Apex, surgery, vaccination)..."
            value={filterState.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Location Dropdown */}
        <div className="md:col-span-3">
          <select
            value={filterState.selectedCity}
            onChange={(e) => onFilterChange({ selectedCity: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c === 'All Locations' ? 'All Locations (India)' : c}
              </option>
            ))}
          </select>
        </div>

        {/* Minimum Rating Dropdown */}
        <div className="md:col-span-3">
          <select
            value={filterState.minRating}
            onChange={(e) => onFilterChange({ minRating: Number(e.target.value) })}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
          >
            <option value={0}>Any Rating</option>
            <option value={4.5}>Rating 4.5+ ★ (Top Rated)</option>
            <option value={4.8}>Rating 4.8+ ★ (Premier)</option>
          </select>
        </div>

      </div>

      {/* Middle row: Category Segmented Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-100">
        <span className="text-xs font-semibold text-slate-500 mr-1.5 shrink-0">Service:</span>
        {categoryOptions.map((cat) => {
          const isActive = filterState.selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onFilterChange({ selectedCategory: cat })}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Bottom row: Availability Toggles, Pet Type & Reset Button */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold text-slate-600">Availability:</span>

          {/* Open Now Checkbox */}
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 hover:text-slate-900 select-none">
            <input
              type="checkbox"
              checked={filterState.onlyOpenNow}
              onChange={(e) => onFilterChange({ onlyOpenNow: e.target.checked })}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-3.5 h-3.5"
            />
            <span>Open Now</span>
          </label>

          {/* 24/7 Emergency Checkbox */}
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 hover:text-slate-900 select-none">
            <input
              type="checkbox"
              checked={filterState.only24x7}
              onChange={(e) => onFilterChange({ only24x7: e.target.checked })}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-3.5 h-3.5"
            />
            <span>24/7 Emergency</span>
          </label>

          {/* Home Visits Checkbox */}
          <label className="flex items-center gap-1.5 cursor-pointer text-slate-700 hover:text-slate-900 select-none">
            <input
              type="checkbox"
              checked={filterState.onlyHomeVisits}
              onChange={(e) => onFilterChange({ onlyHomeVisits: e.target.checked })}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 w-3.5 h-3.5"
            />
            <span>Home Visits</span>
          </label>
        </div>

        {/* Right side: Results Count & Reset Filter */}
        <div className="flex items-center gap-4">
          <span className="text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{totalResults}</strong> animal care providers
          </span>
          
          {(filterState.searchQuery || 
            filterState.selectedCategory !== 'All' || 
            filterState.selectedCity !== 'All Locations' || 
            filterState.minRating > 0 || 
            filterState.onlyOpenNow || 
            filterState.only24x7 || 
            filterState.onlyHomeVisits) && (
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1 text-teal-700 hover:text-teal-800 font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

    </div>
  );
};
