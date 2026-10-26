import React, { useState } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, ServiceItem, ServiceProvider, DemoServiceRequest } from '../types';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldAlert, 
  Calendar, 
  User, 
  Phone, 
  ArrowRight
} from 'lucide-react';
import { saveDemoRequest } from '../utils/storage';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  ui: UIStrings;
  currentLang: Language;
  services: ServiceItem[];
  providers: ServiceProvider[];
  preselectedService?: ServiceItem | null;
  preselectedProvider?: ServiceProvider | null;
  onSuccess: (newRequest: DemoServiceRequest) => void;
  onGoToTracker: () => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  ui,
  currentLang,
  services,
  providers,
  preselectedService,
  preselectedProvider,
  onSuccess,
  onGoToTracker
}) => {
  const [serviceId, setServiceId] = useState<string>(
    preselectedService?.id || (services[0]?.id || '')
  );
  const [providerId, setProviderId] = useState<string>(
    preselectedProvider?.id || (providers[0]?.id || '')
  );
  const [applicantName, setApplicantName] = useState<string>('Pooja Shinde (Demo)');
  const [applicantPhone, setApplicantPhone] = useState<string>('98200XXXXX');
  const [assistanceType, setAssistanceType] = useState<DemoServiceRequest['assistanceType']>('document_check');
  const [preferredSlot, setPreferredSlot] = useState<string>(ui.slotMorning);
  const [notes, setNotes] = useState<string>('');
  
  const [createdRequest, setCreatedRequest] = useState<DemoServiceRequest | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const matchedService = services.find(s => s.id === serviceId) || services[0];
    const matchedProvider = providers.find(p => p.id === providerId) || providers[0];

    const newReq = saveDemoRequest({
      serviceId: matchedService.id,
      serviceTitle: matchedService.title[currentLang] || matchedService.title.en,
      providerId: matchedProvider.id,
      providerName: matchedProvider.name[currentLang] || matchedProvider.name.en,
      providerDistrict: matchedProvider.district[currentLang] || matchedProvider.district.en,
      applicantName: applicantName.trim() || 'Citizen Applicant (Demo)',
      applicantPhone: applicantPhone.trim() || '98000XXXXX',
      assistanceType,
      preferredSlot,
      preferredLanguage: currentLang,
      notes: notes.trim()
    });

    setCreatedRequest(newReq);
    onSuccess(newReq);
  };

  const handleCopyToken = () => {
    if (createdRequest?.tokenNumber) {
      navigator.clipboard.writeText(createdRequest.tokenNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const resetForm = () => {
    setCreatedRequest(null);
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-emerald-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
              <Calendar className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="text-base font-bold text-slate-900">
                {ui.bookingModalTitle}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {ui.bookingModalSubtitle}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {createdRequest ? (
          /* Success Screen */
          <div className="p-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center ring-8 ring-emerald-50">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {ui.bookingSuccessTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                {ui.bookingSuccessMessage}
              </p>
            </div>

            {/* Token Display Box */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-2">
              <span className="text-[11px] uppercase font-bold text-emerald-800 tracking-wider">
                {ui.yourTokenNumber}
              </span>
              <div className="text-2xl font-mono font-extrabold text-emerald-950 tracking-wider">
                {createdRequest.tokenNumber}
              </div>

              <div className="pt-1">
                <button
                  onClick={handleCopyToken}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-xs font-bold text-emerald-800 hover:bg-emerald-100/50 transition-colors shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{ui.tokenCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{ui.copyToken}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-left text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
              <p><span className="font-semibold text-slate-700">Service:</span> {createdRequest.serviceTitle}</p>
              <p><span className="font-semibold text-slate-700">Center:</span> {createdRequest.providerName}</p>
              <p><span className="font-semibold text-slate-700">Slot:</span> {createdRequest.preferredSlot}</p>
            </div>

            {/* Success Actions */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onGoToTracker();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span>{ui.viewInDashboard}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={resetForm}
                className="py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                {ui.bookAnother}
              </button>
            </div>
          </div>
        ) : (
          /* Form Input Screen */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Safety & Demo Notice */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                {ui.bookingDisclaimer}
              </p>
            </div>

            {/* Select Service */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {ui.selectServiceLabel} *
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                required
                className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {services.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.title[currentLang] || s.title.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Center */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {ui.selectCenterLabel} *
              </label>
              <select
                value={providerId}
                onChange={(e) => setProviderId(e.target.value)}
                required
                className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {providers.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name[currentLang] || p.name.en} ({p.district[currentLang] || p.district.en})
                  </option>
                ))}
              </select>
            </div>

            {/* Applicant Name & Demo Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {ui.applicantNameLabel}
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    required
                    className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {ui.applicantPhoneLabel}
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    required
                    placeholder="98000XXXXX"
                    className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <p className="text-[10px] text-slate-400">{ui.applicantPhoneHelp}</p>
              </div>
            </div>

            {/* Nature of Assistance */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {ui.assistanceTypeLabel}
              </label>
              <select
                value={assistanceType}
                onChange={(e) => setAssistanceType(e.target.value as any)}
                className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="document_check">{ui.typeDocCheck}</option>
                <option value="form_filling">{ui.typeFormFilling}</option>
                <option value="status_inquiry">{ui.typeStatusInquiry}</option>
                <option value="grievance">{ui.typeGrievance}</option>
              </select>
            </div>

            {/* Preferred Slot */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {ui.preferredSlotLabel}
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value={ui.slotMorning}>{ui.slotMorning}</option>
                <option value={ui.slotAfternoon}>{ui.slotAfternoon}</option>
                <option value={ui.slotEvening}>{ui.slotEvening}</option>
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {ui.notesLabel}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder={ui.notesPlaceholder}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>{ui.submitRequestBtn}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
