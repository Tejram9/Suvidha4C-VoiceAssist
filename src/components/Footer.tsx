import React from 'react';
import type { UIStrings } from '../data/translations';
import { Building2, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  ui: UIStrings;
}

export const Footer: React.FC<FooterProps> = ({ ui }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
                <Building2 className="w-4 h-4 text-emerald-200" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Suvidha<span className="text-emerald-400">4C</span> Voice Assist
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {ui.footerAboutText}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{ui.nationalMotto}</span>
            </div>
          </div>

          {/* Official Portals Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {ui.footerOfficialPortalsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.india.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span>{ui.footerNationalPortal}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span>{ui.footerAapleSarkar}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.digilocker.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span>{ui.footerDigiLocker}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://serviceonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <span>{ui.footerServicePlus}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Accessibility & Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {ui.footerAccessibilityTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {ui.footerAccessibilityText}
            </p>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 leading-relaxed">
              {ui.footerDisclaimerText}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Tricolor Line & Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>{ui.copyrightText}</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Stand-alone Civic Prototype</span>
            <span>•</span>
            <span>React • TypeScript • Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
