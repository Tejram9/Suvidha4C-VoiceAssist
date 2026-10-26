import React, { useState } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, ServiceItem } from '../types';
import { 
  X, 
  CheckSquare, 
  Square, 
  Volume2, 
  VolumeX, 
  ExternalLink, 
  ShieldAlert, 
  Clock, 
  IndianRupee, 
  Calendar, 
  Building, 
  Printer, 
  ArrowRight
} from 'lucide-react';
import { speakText, stopSpeech } from '../utils/speech';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  ui: UIStrings;
  currentLang: Language;
  onBookAssistance: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  ui,
  currentLang,
  onBookAssistance
}) => {
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  if (!service) return null;

  const title = service.title[currentLang] || service.title.en;
  const dept = service.department[currentLang] || service.department.en;
  const fullDesc = service.fullDescription[currentLang] || service.fullDescription.en;
  const days = service.estimatedDays[currentLang] || service.estimatedDays.en;
  const fee = service.fee[currentLang] || service.fee.en;
  const validity = service.validity[currentLang] || service.validity.en;
  const eligibility = service.eligibility[currentLang] || service.eligibility.en;

  const toggleDoc = (docId: string) => {
    setCheckedDocs(prev => ({ ...prev, [docId]: !prev[docId] }));
  };

  const totalDocs = service.documents.length;
  const readyDocsCount = Object.values(checkedDocs).filter(Boolean).length;

  const handleToggleVoiceReadout = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    // Build spoken narrative in the selected language
    const docNames = service.documents
      .map((d, idx) => `${idx + 1}. ${d.name[currentLang] || d.name.en}. ${d.description[currentLang] || d.description.en}`)
      .join('. ');

    const speechScript = `${title}. ${dept}. ${ui.requiredDocuments}: ${docNames}. ${ui.advisoryText}`;

    const started = speakText(
      speechScript,
      currentLang,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );

    if (!started) {
      alert(ui.audioNotSupported);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-heading"
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-100 bg-emerald-50/50 shrink-0">
          <div className="space-y-1 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                <Building className="w-3 h-3 text-emerald-700" />
                {dept}
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                Sample Guidance Guide
              </span>
            </div>

            <h2 id="service-modal-heading" className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {currentLang !== 'en' ? service.title.en : service.title.mr}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Voice Readout Button */}
            <button
              onClick={handleToggleVoiceReadout}
              title={isPlayingAudio ? ui.stopAudio : ui.listenChecklist}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs ${
                isPlayingAudio
                  ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300 animate-pulse'
                  : 'bg-emerald-800 hover:bg-emerald-900 text-white'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">{ui.stopAudio}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-300" />
                  <span className="hidden sm:inline">{ui.listenChecklist}</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                stopSpeech();
                setIsPlayingAudio(false);
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={ui.closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Audio Playing Indicator Banner */}
          {isPlayingAudio && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3 text-xs text-amber-900 animate-pulse">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-700 animate-bounce" />
                <span className="font-semibold">{ui.playingAudio}</span>
              </div>
              <button
                onClick={handleToggleVoiceReadout}
                className="text-xs font-bold underline text-amber-950 hover:no-underline"
              >
                {ui.stopAudio}
              </button>
            </div>
          )}

          {/* Key Facts Summary Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">
                  {ui.timeLabel}
                </span>
                <span className="text-xs font-bold text-slate-900">{days}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <IndianRupee className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">
                  {ui.feeLabel}
                </span>
                <span className="text-xs font-bold text-slate-900">{fee}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-600 block">
                  {ui.validityLabel}
                </span>
                <span className="text-xs font-bold text-slate-900 truncate block max-w-[200px]" title={validity}>
                  {validity}
                </span>
              </div>
            </div>
          </div>

          {/* Full Description & About */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-emerald-700 rounded-full"></span>
              {ui.aboutService}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {fullDesc}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-emerald-700 rounded-full"></span>
              {ui.eligibilityCriteria}
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Document Checklist */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-3.5 bg-emerald-700 rounded-full"></span>
                  {ui.requiredDocuments}
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  {ui.checklistProgressNote}
                </p>
              </div>

              {/* Progress Counter Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                <span>{readyDocsCount} / {totalDocs} {ui.checkedCount}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {service.documents.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                const docName = doc.name[currentLang] || doc.name.en;
                const docDesc = doc.description[currentLang] || doc.description.en;
                const alternatives = doc.acceptableAlternatives
                  ? doc.acceptableAlternatives[currentLang] || doc.acceptableAlternatives.en
                  : null;

                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 shadow-2xs'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-emerald-800 shrink-0 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-700 fill-emerald-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs sm:text-sm font-bold ${
                          isChecked ? 'text-emerald-950 line-through opacity-85' : 'text-slate-900'
                        }`}>
                          {docName}
                        </span>

                        {doc.mandatory ? (
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-rose-50 text-rose-700 border border-rose-200">
                            {ui.mandatoryTag}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-slate-100 text-slate-600">
                            {ui.optionalTag}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {docDesc}
                      </p>

                      {alternatives && alternatives.length > 0 && (
                        <div className="pt-1 flex flex-wrap items-center gap-1 text-[11px] text-slate-500">
                          <span className="font-semibold text-slate-700">{ui.acceptableProof}:</span>
                          {alternatives.map((alt, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                              {alt}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Steps (Online vs Offline) */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 bg-emerald-700 rounded-full"></span>
              {ui.applicationSteps}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.steps.map((step) => {
                const stepTitle = step.title[currentLang] || step.title.en;
                const stepDetails = step.details[currentLang] || step.details.en;

                return (
                  <div key={step.stepNumber} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {step.stepNumber}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">
                        {stepTitle}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                      {stepDetails}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Official Portals & Verification Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/90 space-y-3">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-950">
                  {ui.officialPortalsTitle}
                </h4>
                <p className="text-xs text-amber-900/90 mt-0.5 leading-relaxed">
                  {ui.externalLinkNotice}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 pl-7">
              {service.officialLinks.map((link, idx) => {
                const linkTitle = link.title[currentLang] || link.title.en;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-bold text-emerald-900 hover:bg-emerald-50 transition-colors shadow-2xs"
                  >
                    <span>{linkTitle}</span>
                    <ExternalLink className="w-3 h-3 text-emerald-700" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{ui.printChecklist}</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                stopSpeech();
                setIsPlayingAudio(false);
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {ui.closeModal}
            </button>

            <button
              onClick={() => {
                stopSpeech();
                setIsPlayingAudio(false);
                onBookAssistance(service);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-all shadow-sm"
            >
              <span>{ui.bookAssistanceForThis}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
