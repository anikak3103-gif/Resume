import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { LanguageItem } from '../types/resume';
import { Globe } from 'lucide-react';

interface LanguagesSectionProps {
  languages: LanguageItem[];
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
  return (
    <section id="languages" className="py-12 sm:py-16 border-b border-[#EAE2D5] bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto">
        <AnimatedHeading
          id="languages-heading"
          eyebrow="Global Communication"
          title="Languages"
          subtitle="Fluency levels across international business, technical, and conversational environments."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {languages.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-5 rounded-xl border border-[#EAE2D5] shadow-2xs hover:border-[#D5C3A8] transition-colors print-break-inside-avoid flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-md bg-[#EBF2FA] text-[#1E3A8A]">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-xl font-semibold text-[#0F2544]">
                  {item.language}
                </h3>
              </div>

              <div className="pt-2 border-t border-[#EAE2D5]/70">
                <span className="font-serif-body text-xs sm:text-sm text-[#475569] block leading-snug">
                  {item.proficiency}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
