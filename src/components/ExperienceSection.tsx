import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { ExperienceItem } from '../types/resume';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-b border-[#EAE2D5]">
      <div className="max-w-4xl mx-auto">
        <AnimatedHeading
          id="experience-heading"
          eyebrow="Practical Experience"
          title="Internship & Professional Experience"
          subtitle="Corporate internships, HR operational support, and workforce data administration."
        />

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="print-break-inside-avoid relative pl-6 sm:pl-8 border-l border-[#D5C3A8]/70"
            >
              {/* Subtle timeline node marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1E3A8A] ring-4 ring-[#FBF9F5]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#0F2544] leading-snug">
                  {item.role}
                </h3>
                <span className="font-serif-body text-xs sm:text-sm text-[#1E3A8A] font-semibold tracking-wider whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {/* Clean unboxed metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#475569] font-serif-body mb-4">
                <span className="font-medium text-[#0F2544]">{item.organization}</span>
                {item.division && (
                  <>
                    <span aria-hidden="true" className="text-[#CFC1A8]">/</span>
                    <span>{item.division}</span>
                  </>
                )}
                {item.isCurrent && (
                  <>
                    <span aria-hidden="true" className="text-[#CFC1A8]">·</span>
                    <span className="text-[#1E3A8A] font-sans-ui text-xs tracking-wider uppercase font-medium">Present Role</span>
                  </>
                )}
              </div>

              {/* Highlights & Concrete Outcomes */}
              <ul className="space-y-2.5 mb-5 font-serif-body text-sm sm:text-base text-[#334155] leading-relaxed">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="text-[#1E3A8A] mt-1.5 select-none font-bold text-xs">―</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Competencies used in role (unboxed, clean typography) */}
              {item.competencies && item.competencies.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#64748B] font-sans-ui pt-2 border-t border-[#EAE2D5]/60">
                  <span className="text-[#1E3A8A] font-medium uppercase tracking-wider text-[11px]">Domain Focus:</span>
                  {item.competencies.map((comp, cIdx) => (
                    <React.Fragment key={comp}>
                      <span className="text-[#334155]">{comp}</span>
                      {cIdx < item.competencies!.length - 1 && (
                        <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
