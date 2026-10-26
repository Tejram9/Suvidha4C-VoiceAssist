import React from 'react';
import type { UIStrings } from '../data/translations';
import { ShieldAlert, ExternalLink } from 'lucide-react';

interface AdvisoryBannerProps {
  ui: UIStrings;
}

export const AdvisoryBanner: React.FC<AdvisoryBannerProps> = ({ ui }) => {
  return (
    <div className="bg-amber-50/80 border-b border-amber-200/90 py-2.5 px-4 text-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs">
        <div className="flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900 mr-1.5">{ui.advisoryTitle}:</span>
            <span className="text-slate-700 leading-relaxed">{ui.advisoryText}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
          <a
            href="https://services.india.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 hover:no-underline"
          >
            <span>National Portal (india.gov.in)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="https://aaplesarkar.mahaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 hover:no-underline"
          >
            <span>Aaple Sarkar</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
