import React from 'react';
import type { UIStrings } from '../data/translations';
import type { Language } from '../types';
import { Search, Mic, X, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  ui: UIStrings;
  currentLang?: Language;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenVoiceModal: () => void;
  isListening: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  ui,
  currentLang: _currentLang,
  searchQuery,
  onSearchChange,
  onOpenVoiceModal,
  isListening
}) => {
  return (
    <section className="relative bg-gradient-to-b from-emerald-900 via-emerald-850 to-emerald-800 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/20 overflow-hidden">
      {/* Background Subtle Geometric Civic Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        {/* Civic Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-700/80 text-emerald-100 border border-emerald-500/40 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{ui.voicePromptBadge}</span>
        </div>

        {/* Hero Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {ui.heroHeading}{' '}
          <span className="text-amber-300 underline decoration-amber-400/50 underline-offset-8">
            {ui.heroHighlight}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
          {ui.heroSubheading}
        </p>

        {/* Primary Accessible Search & Voice Bar */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="relative flex items-center bg-white rounded-2xl shadow-xl p-2 border-2 border-emerald-600/30 focus-within:border-emerald-500 transition-all">
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5 text-emerald-700" />
            </div>

            <input
              type="text"
              id="hero-search-input"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full px-3 py-3 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none bg-transparent"
              aria-label={ui.searchPlaceholder}
            />

            {/* Clear Input Button */}
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                title={ui.clearSearch}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 mr-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Microphone Button with Pulse Wave */}
            <div className="relative shrink-0">
              {isListening && (
                <span className="absolute -inset-1 rounded-xl bg-amber-400 animate-ping opacity-75"></span>
              )}
              <button
                onClick={onOpenVoiceModal}
                title={ui.voiceSearchBtn}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  isListening
                    ? 'bg-amber-500 text-slate-900 font-bold ring-2 ring-amber-300'
                    : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                }`}
              >
                <Mic className={`w-4 h-4 ${isListening ? 'animate-bounce text-slate-950' : 'text-amber-300'}`} />
                <span className="hidden sm:inline">
                  {isListening ? ui.voiceModalListening : ui.voiceSearchBtn}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Search Suggestions / Voice Prompt Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-emerald-200">
          <span className="font-medium text-emerald-200/90">{ui.popularSearchesLabel}</span>
          {ui.quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => onSearchChange(prompt)}
              className="px-2.5 py-1 rounded-full bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 hover:text-white border border-emerald-600/40 transition-colors shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
