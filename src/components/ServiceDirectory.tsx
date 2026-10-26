import React, { useState, useMemo } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, ServiceItem, ServiceCategory } from '../types';
import { 
  Search, 
  Clock, 
  IndianRupee, 
  FileCheck2, 
  Building, 
  Filter, 
  RotateCcw
} from 'lucide-react';

interface ServiceDirectoryProps {
  services: ServiceItem[];
  ui: UIStrings;
  currentLang: Language;
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectService: (service: ServiceItem) => void;
  onBookAssistance: (service: ServiceItem) => void;
}

export const ServiceDirectory: React.FC<ServiceDirectoryProps> = ({
  services,
  ui,
  currentLang,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSelectService,
  onBookAssistance
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  // Extract unique departments for dropdown filter
  const departments = useMemo(() => {
    const set = new Set<string>();
    services.forEach(s => {
      set.add(s.department[currentLang] || s.department.en);
    });
    return Array.from(set);
  }, [services, currentLang]);

  // Filter services by category, department, and search query
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Category match
      if (selectedCategory !== 'all' && service.category !== selectedCategory) {
        return false;
      }

      // Department match
      if (selectedDept !== 'all') {
        const deptName = service.department[currentLang] || service.department.en;
        if (deptName !== selectedDept) return false;
      }

      // Query match (across title, description, keywords in all languages)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleEn = service.title.en.toLowerCase();
        const titleHi = service.title.hi.toLowerCase();
        const titleMr = service.title.mr.toLowerCase();
        const descEn = service.shortDescription.en.toLowerCase();
        const descHi = service.shortDescription.hi.toLowerCase();
        const descMr = service.shortDescription.mr.toLowerCase();
        const keywordMatch = service.keywords.some(k => k.toLowerCase().includes(q));

        if (
          !titleEn.includes(q) &&
          !titleHi.includes(q) &&
          !titleMr.includes(q) &&
          !descEn.includes(q) &&
          !descHi.includes(q) &&
          !descMr.includes(q) &&
          !keywordMatch
        ) {
          return false;
        }
      }

      return true;
    });
  }, [services, selectedCategory, selectedDept, searchQuery, currentLang]);

  const handleReset = () => {
    onSelectCategory('all');
    setSelectedDept('all');
    onSearchChange('');
  };

  return (
    <section id="services-directory" className="py-10 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Official Citizen Services Catalog
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {ui.servicesHeading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
              {ui.servicesSubtitle}
            </p>
          </div>

          {/* Active Filter Stats / Reset */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-100/70 text-emerald-900 border border-emerald-200">
              {filteredServices.length} {ui.servicesFoundCount}
            </span>

            {(selectedCategory !== 'all' || selectedDept !== 'all' || searchQuery) && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{ui.resetFilters}</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Toolbar */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-2xs mb-6 flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="w-full sm:w-auto flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-emerald-700" />
              {ui.deptLabel}:
            </span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">{ui.filterAllDepartments}</option>
              {departments.map((dept, i) => (
                <option key={i} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          {/* Search Feedback Info */}
          {searchQuery && (
            <div className="text-xs text-slate-500">
              Filtering by: <span className="font-bold text-emerald-800">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Services List / Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => {
              const title = service.title[currentLang] || service.title.en;
              const secondaryTitle = currentLang !== 'en' ? service.title.en : service.title.mr;
              const dept = service.department[currentLang] || service.department.en;
              const shortDesc = service.shortDescription[currentLang] || service.shortDescription.en;
              const days = service.estimatedDays[currentLang] || service.estimatedDays.en;
              const fee = service.fee[currentLang] || service.fee.en;
              const validity = service.validity[currentLang] || service.validity.en;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-emerald-600/40"
                >
                  {/* Top Tag & Department */}
                  <div className="p-5 pb-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        <Building className="w-3 h-3 text-emerald-700" />
                        <span className="truncate max-w-[200px]">{dept}</span>
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {service.documents.length} Docs
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {secondaryTitle}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 font-normal mt-3 line-clamp-3 leading-relaxed">
                      {shortDesc}
                    </p>
                  </div>

                  {/* Key Stats Pill Box */}
                  <div className="p-5 pt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-600 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-700" />
                          {ui.timeLabel}
                        </span>
                        <p className="font-semibold text-slate-800 truncate mt-0.5">
                          {days}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-600 flex items-center gap-1">
                          <IndianRupee className="w-3 h-3 text-emerald-700" />
                          {ui.feeLabel}
                        </span>
                        <p className="font-semibold text-slate-800 truncate mt-0.5">
                          {fee}
                        </p>
                      </div>

                      <div className="col-span-2 pt-1.5 border-t border-slate-200/60 text-[11px] text-slate-600 truncate" title={validity}>
                        <span className="font-semibold text-slate-700">{ui.validityLabel}:</span> {validity}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onSelectService(service)}
                        className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <FileCheck2 className="w-3.5 h-3.5 text-amber-300" />
                        <span>{ui.viewDetails}</span>
                      </button>

                      <button
                        onClick={() => onBookAssistance(service)}
                        title={ui.bookAssistanceForThis}
                        className="py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                      >
                        {ui.navBookAssistance}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">
                {ui.noServicesFound}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for "Income", "Caste", "उत्पन्न", "जाती", or reset your filters.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shadow-2xs"
            >
              {ui.resetFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
