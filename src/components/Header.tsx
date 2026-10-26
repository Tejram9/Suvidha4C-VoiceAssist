import React from 'react';
import type { Language } from '../types';
import type { UIStrings } from '../data/translations';
import { 
  Building2, 
  Languages, 
  Search, 
  MapPin, 
  FileCheck2, 
  Mic, 
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  ui: UIStrings;
  activeTab: 'services' | 'providers' | 'track';
  onTabChange: (tab: 'services' | 'providers' | 'track') => void;
  onOpenVoiceModal: () => void;
  activeRequestsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  ui,
  activeTab,
  onTabChange,
  onOpenVoiceModal,
  activeRequestsCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Subtle National Tricolor Ribbon */}
      <div className="h-1 w-full flex">
        <div className="h-full w-1/3 bg-amber-500"></div>
        <div className="h-full w-1/3 bg-white"></div>
        <div className="h-full w-1/3 bg-emerald-700"></div>
      </div>

      {/* Top Advisory Pill Banner */}
      <div className="bg-emerald-950 text-emerald-100 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-900 tracking-wider">
              {ui.prototypeBadge}
            </span>
            <span className="truncate opacity-90">{ui.prototypeNotice}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-emerald-200/80 text-[11px] shrink-0">
            <span>{ui.nationalMotto}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Logo & Civic Branding */}
          <div 
            onClick={() => onTabChange('services')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center shadow-sm group-hover:bg-emerald-900 transition-colors border border-emerald-700/50">
              <Building2 className="w-6 h-6 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                  Suvidha<span className="text-emerald-700">4C</span>
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  Voice Assist
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal truncate max-w-[240px] sm:max-w-xs">
                {ui.appSubtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => onTabChange('services')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'services'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Search className="w-4 h-4 text-emerald-700" />
              {ui.navServices}
            </button>

            <button
              onClick={() => onTabChange('providers')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'providers'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-700" />
              {ui.navProviders}
            </button>

            <button
              onClick={() => onTabChange('track')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 relative ${
                activeTab === 'track'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-emerald-700" />
              {ui.navTrack}
              {activeRequestsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-emerald-700 text-white">
                  {activeRequestsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Actions: Voice Mic & Language Selector */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Voice Assist Trigger Button */}
            <button
              onClick={onOpenVoiceModal}
              title={ui.voiceSearchBtn}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm transition-all focus:ring-2 focus:ring-emerald-500/50"
            >
              <Mic className="w-4 h-4 animate-pulse text-amber-300" />
              <span className="hidden sm:inline">{ui.voiceSearchBtn}</span>
            </button>

            {/* Working Trilingual Language Selector */}
            <div className="relative inline-flex items-center">
              <label htmlFor="lang-select" className="sr-only">Choose Language</label>
              <div className="flex items-center bg-slate-100 hover:bg-slate-200/80 rounded-lg p-1 border border-slate-200 transition-colors">
                <Languages className="w-4 h-4 text-slate-500 ml-1.5 mr-1" />
                <select
                  id="lang-select"
                  value={currentLang}
                  onChange={(e) => onLanguageChange(e.target.value as Language)}
                  className="bg-transparent text-xs font-semibold text-slate-800 py-1 pl-1 pr-6 cursor-pointer focus:outline-none appearance-none"
                >
                  <option value="en">English (EN)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="mr">मराठी (Marathi)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 -ml-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex md:hidden border-t border-slate-100 py-2 gap-1 overflow-x-auto scrollbar-none">
          <button
            onClick={() => onTabChange('services')}
            className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'services'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-slate-600 bg-slate-50'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            {ui.navServices}
          </button>
          <button
            onClick={() => onTabChange('providers')}
            className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'providers'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-slate-600 bg-slate-50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            {ui.navProviders}
          </button>
          <button
            onClick={() => onTabChange('track')}
            className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'track'
                ? 'bg-emerald-800 text-white font-semibold'
                : 'text-slate-600 bg-slate-50'
            }`}
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            {ui.navTrack}
            {activeRequestsCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-white text-emerald-900">
                {activeRequestsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
