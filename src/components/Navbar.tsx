import React, { useState } from 'react';
import { Menu, X, Printer, Edit3 } from 'lucide-react';

interface NavbarProps {
  fullName: string;
  onOpenEditor: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  fullName,
  onOpenEditor,
  onPrint,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Academics', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Languages', href: '#languages' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE2D5] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 md:h-20">
          
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#profile"
            onClick={(e) => handleLinkClick(e, '#profile')}
            className="font-serif-display text-xl sm:text-2xl font-semibold tracking-tight text-[#0F2544] hover:text-[#1E3A8A] transition-colors whitespace-nowrap shrink-0"
          >
            {fullName}
          </a>

          {/* Zone 2: 4–5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-sans-ui text-[#475569]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#0F2544] transition-colors relative py-1 hover:border-b border-[#1E3A8A]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + secondary actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onPrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E3A8A] bg-white border border-[#EAE2D5] rounded-md hover:bg-[#F4EFEA] hover:border-[#D5C3A8] transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onOpenEditor}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#0F2544] hover:bg-[#1E3A8A] rounded-md transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Resume</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#0F2544] hover:bg-[#EAE2D5]/50 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE2D5] bg-[#FBF9F5] px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-sans-ui text-[#0F2544] hover:bg-[#F4EFEA] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
