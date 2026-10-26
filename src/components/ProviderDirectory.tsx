import React, { useState, useMemo } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, ServiceProvider } from '../types';
import { 
  MapPin, 
  Clock, 
  ShieldAlert, 
  Accessibility, 
  Fingerprint, 
  Star, 
  Building2, 
  Calendar, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface ProviderDirectoryProps {
  providers: ServiceProvider[];
  ui: UIStrings;
  currentLang: Language;
  onRequestAssistance: (provider: ServiceProvider) => void;
}

export const ProviderDirectory: React.FC<ProviderDirectoryProps> = ({
  providers,
  ui,
  currentLang,
  onRequestAssistance
}) => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Extract unique districts
  const districts = useMemo(() => {
    const set = new Set<string>();
    providers.forEach(p => {
      set.add(p.district[currentLang] || p.district.en);
    });
    return Array.from(set);
  }, [providers, currentLang]);

  // Filter providers
  const filteredProviders = useMemo(() => {
    return providers.filter(p => {
      if (selectedDistrict !== 'all') {
        const d = p.district[currentLang] || p.district.en;
        if (d !== selectedDistrict) return false;
      }
      if (selectedType !== 'all' && p.type !== selectedType) {
        return false;
      }
      return true;
    });
  }, [providers, selectedDistrict, selectedType, currentLang]);

  const handleReset = () => {
    setSelectedDistrict('all');
    setSelectedType('all');
  };

  return (
    <section id="providers-directory" className="py-10 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Assisted Application Kiosks (CSC & Seva Kendras)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            {ui.providersHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
            {ui.providersSubtitle}
          </p>
        </div>

        {/* Prototype Transparency Notice */}
        <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">{ui.providerDisclaimer}</span>
          </p>
        </div>

        {/* Filter Controls Toolbar */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-200 shadow-2xs mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                {ui.filterByDistrict}:
              </span>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{ui.allDistricts}</option>
                {districts.map((d, i) => (
                  <option key={i} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                {ui.filterByType}:
              </span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">{ui.allTypes}</option>
                <option value="aaple_sarkar">Aaple Sarkar Seva Kendra</option>
                <option value="csc">CSC Digital Seva</option>
                <option value="jan_seva">Jan Seva Kendra</option>
                <option value="suvidha_kiosk">Suvidha Citizen Kiosk</option>
                <option value="mahaonline">MahaOnline Hub</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
              {filteredProviders.length} Centers Listed
            </span>
            {(selectedDistrict !== 'all' || selectedType !== 'all') && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline"
              >
                <RotateCcw className="w-3 h-3" />
                {ui.resetFilters}
              </button>
            )}
          </div>
        </div>

        {/* Providers Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProviders.map((provider) => {
              const name = provider.name[currentLang] || provider.name.en;
              const typeLabel = provider.typeLabel[currentLang] || provider.typeLabel.en;
              const district = provider.district[currentLang] || provider.district.en;
              const taluka = provider.taluka[currentLang] || provider.taluka.en;
              const address = provider.address[currentLang] || provider.address.en;
              const landmark = provider.landmark[currentLang] || provider.landmark.en;
              const hours = provider.operatingHours[currentLang] || provider.operatingHours.en;
              const days = provider.workingDays[currentLang] || provider.workingDays.en;

              return (
                <div
                  key={provider.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-emerald-600/40 relative"
                >
                  {/* Top Watermark Badge */}
                  <div className="bg-slate-100 border-b border-slate-200/80 px-4 py-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase flex items-center justify-between">
                    <span>{ui.providerCardSampleBadge}</span>
                    <span className="text-emerald-800 font-semibold">{provider.tokenPrefix}</span>
                  </div>

                  <div className="p-5 pb-0 space-y-3">
                    {/* Header with Type & Rating */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        <Building2 className="w-3 h-3 text-emerald-700" />
                        {typeLabel}
                      </span>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-xs font-bold border border-amber-200/80">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                        <span>{provider.rating}</span>
                      </div>
                    </div>

                    {/* Provider Name */}
                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {name}
                    </h3>

                    {/* Address & Landmark */}
                    <div className="space-y-1 text-xs text-slate-600">
                      <div className="flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-800">{taluka}, {district}</p>
                          <p className="text-slate-500 line-clamp-2">{address}</p>
                          <p className="text-[11px] text-emerald-800 font-medium mt-0.5">Near: {landmark}</p>
                        </div>
                      </div>
                    </div>

                    {/* Operating Hours & Days */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1 text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="font-semibold text-slate-800">{hours}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{days}</span>
                      </div>
                    </div>

                    {/* Badges: Wheelchair & Biometric */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                      {provider.wheelchairAccessible && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                          <Accessibility className="w-3 h-3 text-emerald-700" />
                          <span>Wheelchair Access</span>
                        </span>
                      )}
                      {provider.biometricAuthAvailable && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                          <Fingerprint className="w-3 h-3 text-blue-700" />
                          <span>Aadhaar eKYC</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-5 pt-4">
                    <button
                      onClick={() => onRequestAssistance(provider)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>{ui.requestAssistanceBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 max-w-md mx-auto space-y-3 shadow-xs">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">{ui.noProvidersFound}</h3>
            <button
              onClick={handleReset}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors"
            >
              {ui.resetFilters}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
