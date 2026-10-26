import React, { useState, useMemo } from 'react';
import type { UIStrings } from '../data/translations';
import type { Language, DemoServiceRequest, RequestStatus } from '../types';
import { 
  Search, 
  FileCheck2, 
  Copy, 
  Check, 
  Trash2, 
  RefreshCw, 
  ShieldAlert, 
  Plus
} from 'lucide-react';
import { advanceRequestStatus, deleteDemoRequest, clearAllDemoRequests } from '../utils/storage';

interface TrackingDashboardProps {
  requests: DemoServiceRequest[];
  ui: UIStrings;
  currentLang?: Language;
  onRefreshRequests: () => void;
  onOpenBookingModal: () => void;
}

export const TrackingDashboard: React.FC<TrackingDashboardProps> = ({
  requests,
  ui,
  currentLang: _currentLang,
  onRefreshRequests,
  onOpenBookingModal
}) => {
  const [searchToken, setSearchToken] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Filter requests
  const filteredRequests = useMemo(() => {
    return requests.filter(req => {
      if (selectedStatus !== 'all' && req.status !== selectedStatus) {
        return false;
      }
      if (searchToken.trim()) {
        const query = searchToken.toLowerCase().trim();
        const matchesToken = req.tokenNumber.toLowerCase().includes(query);
        const matchesApplicant = req.applicantName.toLowerCase().includes(query);
        const matchesService = req.serviceTitle.toLowerCase().includes(query);
        if (!matchesToken && !matchesApplicant && !matchesService) {
          return false;
        }
      }
      return true;
    });
  }, [requests, selectedStatus, searchToken]);

  const handleAdvance = (reqId: string) => {
    advanceRequestStatus(reqId);
    onRefreshRequests();
  };

  const handleDelete = (reqId: string) => {
    deleteDemoRequest(reqId);
    onRefreshRequests();
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all stored demo requests?')) {
      clearAllDemoRequests();
      onRefreshRequests();
    }
  };

  const handleCopy = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case 'Submitted':
        return {
          label: ui.statusSubmitted,
          classes: 'bg-blue-50 text-blue-800 border-blue-200'
        };
      case 'In Progress':
        return {
          label: ui.statusInProgress,
          classes: 'bg-amber-50 text-amber-800 border-amber-200'
        };
      case 'Verification Pending':
        return {
          label: ui.statusVerificationPending,
          classes: 'bg-purple-50 text-purple-800 border-purple-200'
        };
      case 'Completed':
        return {
          label: ui.statusCompleted,
          classes: 'bg-emerald-50 text-emerald-800 border-emerald-200'
        };
      default:
        return {
          label: status,
          classes: 'bg-slate-50 text-slate-800 border-slate-200'
        };
    }
  };

  return (
    <section id="tracking-dashboard" className="py-10 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Civic Workflow & Status Simulator
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {ui.trackingHeading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
              {ui.trackingSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4 text-amber-300" />
              <span>{ui.navBookAssistance}</span>
            </button>
          </div>
        </div>

        {/* Prototype Disclaimer Banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-900 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">{ui.trackingDisclaimer}</span>
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Token Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchToken}
              onChange={(e) => setSearchToken(e.target.value)}
              placeholder={ui.searchTokenPlaceholder}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-slate-500">
              {ui.filterByStatus}:
            </span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">{ui.allStatuses}</option>
              <option value="Submitted">{ui.statusSubmitted}</option>
              <option value="In Progress">{ui.statusInProgress}</option>
              <option value="Verification Pending">{ui.statusVerificationPending}</option>
              <option value="Completed">{ui.statusCompleted}</option>
            </select>

            {requests.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold px-2 py-1 ml-2 underline"
              >
                {ui.clearAllRequests}
              </button>
            )}
          </div>
        </div>

        {/* Requests Cards List */}
        {filteredRequests.length > 0 ? (
          <div className="space-y-4">
            {filteredRequests.map((req) => {
              const statusInfo = getStatusBadge(req.status);

              return (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:shadow-md transition-all space-y-4"
                >
                  {/* Top Bar: Token & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-bold text-slate-400">
                        {ui.tokenIdLabel}:
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-base font-extrabold text-emerald-950">
                          {req.tokenNumber}
                        </span>
                        <button
                          onClick={() => handleCopy(req.tokenNumber)}
                          className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          title={ui.copyToken}
                        >
                          {copiedToken === req.tokenNumber ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusInfo.classes}`}>
                        ● {statusInfo.label}
                      </span>
                    </div>
                  </div>

                  {/* Request Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {ui.serviceNameLabel}
                      </span>
                      <p className="font-bold text-slate-800 line-clamp-1">{req.serviceTitle}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {ui.centerLabel}
                      </span>
                      <p className="font-bold text-slate-800 line-clamp-1">{req.providerName}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {ui.applicantLabel}
                      </span>
                      <p className="font-bold text-slate-800">{req.applicantName}</p>
                      <p className="text-[11px] text-slate-500 font-mono">{req.applicantPhone}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">
                        {ui.dateLabel}
                      </span>
                      <p className="font-bold text-slate-800">{req.submittedAt}</p>
                      <p className="text-[11px] text-slate-500">{req.preferredSlot}</p>
                    </div>
                  </div>

                  {/* Status Timeline History */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      {ui.statusTimelineLabel}:
                    </span>
                    <div className="space-y-1.5 pl-2 border-l-2 border-emerald-600/30">
                      {req.statusHistory.map((hist, idx) => (
                        <div key={idx} className="text-xs text-slate-600 pl-2">
                          <span className="font-bold text-slate-900">{hist.status}</span>
                          <span className="text-slate-400 text-[10px] ml-2">({hist.timestamp})</span>
                          <p className="text-[11px] text-slate-600 mt-0.5">{hist.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Advance Simulation & Delete */}
                  <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => handleAdvance(req.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 transition-colors shadow-2xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{ui.simulateAdvanceStatus}</span>
                    </button>

                    <button
                      onClick={() => handleDelete(req.id)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                      title={ui.deleteRequest}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{ui.deleteRequest}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Tracker State */
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 max-w-lg mx-auto space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-800">
                {ui.noRequestsTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                {ui.noRequestsSubtitle}
              </p>
            </div>
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shadow-xs"
            >
              {ui.createSampleRequestBtn}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
