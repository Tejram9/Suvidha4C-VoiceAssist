import React, { useMemo } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, ServiceItem } from '../types';
import { 
  Mic, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface VoiceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  ui: UIStrings;
  currentLang: Language;
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  error: string | null;
  isSupported: boolean;
  onStartListening: () => void;
  onStopListening: () => void;
  onApplyTranscript: (query: string) => void;
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const VoiceSearchModal: React.FC<VoiceSearchModalProps> = ({
  isOpen,
  onClose,
  ui,
  currentLang,
  isListening,
  transcript,
  interimTranscript,
  error,
  isSupported,
  onStartListening,
  onStopListening,
  onApplyTranscript,
  services,
  onSelectService
}) => {
  const activeTranscript = transcript || interimTranscript;

  // Real-time matching derived during render
  const matchedService = useMemo(() => {
    if (!activeTranscript) return null;

    const query = activeTranscript.toLowerCase().trim();
    const match = services.find(s => {
      const titleEn = s.title.en.toLowerCase();
      const titleHi = s.title.hi.toLowerCase();
      const titleMr = s.title.mr.toLowerCase();
      const keywordsMatch = s.keywords.some(k => query.includes(k.toLowerCase()) || k.toLowerCase().includes(query));

      return (
        titleEn.includes(query) ||
        titleHi.includes(query) ||
        titleMr.includes(query) ||
        keywordsMatch
      );
    });

    return match || null;
  }, [activeTranscript, services]);

  if (!isOpen) return null;

  const handleApply = () => {
    if (activeTranscript) {
      onApplyTranscript(activeTranscript);
      onClose();
    }
  };

  const handleMatchSelect = () => {
    if (matchedService) {
      onSelectService(matchedService);
      onClose();
    }
  };

  const getLanguageLabel = () => {
    switch (currentLang) {
      case 'hi':
        return 'हिंदी (hi-IN)';
      case 'mr':
        return 'मराठी (mr-IN)';
      case 'en':
      default:
        return 'English (en-IN)';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="voice-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-emerald-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
              <Mic className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h2 id="voice-modal-title" className="text-base font-bold text-slate-900">
                {ui.voiceModalTitle}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {ui.voiceModalSupportedLangs} <span className="font-semibold text-emerald-800">{getLanguageLabel()}</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              onStopListening();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title={ui.voiceModalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center space-y-6">
          {/* Animated Microphone Ring / Waveform */}
          <div className="relative flex items-center justify-center py-4">
            {isListening && (
              <>
                <div className="absolute w-28 h-28 rounded-full bg-emerald-500/20 animate-ping"></div>
                <div className="absolute w-24 h-24 rounded-full bg-emerald-500/30 animate-pulse"></div>
              </>
            )}

            <button
              onClick={isListening ? onStopListening : onStartListening}
              disabled={!isSupported}
              className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                !isSupported
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : isListening
                  ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-300 shadow-amber-500/30'
                  : 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-emerald-800/30'
              }`}
            >
              {isListening ? (
                <Mic className="w-9 h-9 animate-bounce text-slate-950" />
              ) : (
                <Mic className="w-9 h-9 text-amber-300" />
              )}
            </button>
          </div>

          {/* Status Instruction */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">
              {isListening ? ui.voiceModalSpeakNow : ui.voiceModalInstruction}
            </p>
            <p className="text-xs text-slate-500">
              {ui.voiceModalSupportedLangs}: <span className="font-semibold text-slate-700">{getLanguageLabel()}</span>
            </p>
          </div>

          {/* Live Transcript Display Box */}
          <div className="min-h-[80px] p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-center text-center">
            {activeTranscript ? (
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  {ui.voiceModalTranscriptLabel}
                </span>
                <p className="text-lg font-bold text-slate-900 leading-snug">
                  "{activeTranscript}"
                </p>
              </div>
            ) : isListening ? (
              <div className="flex items-center justify-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce delay-100"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce delay-200"></span>
                <span className="text-xs ml-2 font-medium">{ui.voiceModalListening}</span>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">
                {ui.voiceModalInstruction}
              </p>
            )}
          </div>

          {/* Error Notices & Unsupported Fallback */}
          {!isSupported && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-left flex items-start gap-2.5 text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{ui.voiceModalNotSupported}</p>
              </div>
            </div>
          )}

          {error && error === 'not-allowed' && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-left flex items-start gap-2.5 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{ui.voiceModalErrorPermission}</p>
              </div>
            </div>
          )}

          {error && error === 'no-speech' && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-left flex items-start gap-2.5 text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{ui.voiceModalErrorNoSpeech}</p>
              </div>
            </div>
          )}

          {/* Instant Matched Service Card */}
          {matchedService && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-left flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <div>
                  <span className="text-[11px] font-bold uppercase text-emerald-800 tracking-wider">
                    {ui.voiceModalMatchFound}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 line-clamp-1">
                    {matchedService.title[currentLang] || matchedService.title.en}
                  </h4>
                </div>
              </div>
              <button
                onClick={handleMatchSelect}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shrink-0 flex items-center gap-1 shadow-xs"
              >
                <span>{ui.viewDetails}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={isListening ? onStopListening : onStartListening}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            {isListening ? ui.voiceModalStop : ui.voiceModalStart}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onStopListening();
                onClose();
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {ui.voiceModalClose}
            </button>

            {activeTranscript && (
              <button
                onClick={handleApply}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shadow-xs"
              >
                Search "{activeTranscript.slice(0, 20)}..."
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
