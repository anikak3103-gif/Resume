import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  fullName: string;
}

export const Footer: React.FC<FooterProps> = ({ fullName }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EAE2D5] bg-[#FBF9F5] py-12 px-4 sm:px-6 lg:px-8 no-print">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif-body text-[#73829C]">
        <div>
          <span className="font-serif-display font-medium text-sm text-[#0F2544]">
            {fullName}
          </span>
          <span className="mx-2 text-[#CBD5E1]">·</span>
          <span>Curriculum Vitae</span>
          <span className="mx-2 text-[#CBD5E1]">·</span>
          <span>Confidential Professional Record</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-sans-ui text-[#94A3B8]">
            Built with minimalist serif typography & responsive layout
          </span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-md hover:bg-[#F4EFEA] text-[#0F2544] transition-colors flex items-center gap-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="text-[11px] font-sans-ui uppercase tracking-wider">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
