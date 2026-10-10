import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { SkillCategory } from '../types/resume';
import { CheckCircle2, Sparkles, Heart } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillCategory[];
  competencies: string[];
  interests: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  competencies,
  interests,
}) => {
  return (
    <section id="skills" className="py-12 sm:py-16 border-b border-[#EAE2D5]">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Main Skills Heading */}
        <div>
          <AnimatedHeading
            id="skills-heading"
            eyebrow="Skillsets & Capabilities"
            title="Technical Skills & Competencies"
            subtitle="Productivity software, HR administration tools, analytical techniques, and interpersonal leadership competencies."
          />

          {/* Technical Skills Category Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {skills.map((categoryGroup, idx) => (
              <motion.div
                key={categoryGroup.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#EAE2D5] shadow-xs hover:border-[#D5C3A8] transition-colors print-break-inside-avoid"
              >
                <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0F2544] mb-4 pb-2 border-b border-[#EAE2D5]/80 flex items-center justify-between">
                  <span>{categoryGroup.category}</span>
                  <span className="text-xs font-sans-ui text-[#73829C] font-normal tabular-nums">
                    {categoryGroup.skills.length} skills
                  </span>
                </h3>

                {/* Zero-Pill Discipline: Clean unboxed list with typographic bullets */}
                <ul className="space-y-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-baseline gap-2.5 text-sm sm:text-base font-serif-body text-[#334155] group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-[#0F2544] transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Interpersonal Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-xl border border-[#EAE2D5] shadow-xs print-break-inside-avoid"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 rounded-md bg-[#EBF2FA] text-[#1E3A8A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif-display text-2xl font-semibold text-[#0F2544]">
              Core Competencies
            </h3>
          </div>

          <p className="font-serif-body text-sm text-[#64748B] mb-5">
            Interpersonal strengths and management competencies demonstrated during organizational activities and academic projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((comp) => (
              <div
                key={comp}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FBF9F5] border border-[#EAE2D5]/70"
              >
                <CheckCircle2 className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="font-serif-body text-sm text-[#0F2544] font-medium leading-snug">
                  {comp}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests & Creative Pursuits */}
        {interests && interests.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-[#F4EFEA]/60 p-6 rounded-xl border border-[#EAE2D5] print-break-inside-avoid"
          >
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4 text-[#1E3A8A]" />
              <h4 className="font-serif-display text-xl font-semibold text-[#0F2544]">
                Personal Interests & Creative Pursuits
              </h4>
            </div>
            <p className="font-serif-body text-sm text-[#475569] mb-4">
              Disciplines fostering creative problem-solving, mindfulness, and expressive focus:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {interests.map((interest, iIdx) => (
                <div
                  key={interest}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-[#EAE2D5] font-serif-display text-base text-[#0F2544]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                  <span>{interest}</span>
                  {iIdx < interests.length - 1 && (
                    <span aria-hidden="true" className="text-[#CFC1A8] ml-1">·</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
