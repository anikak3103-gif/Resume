import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Award, Languages, Compass } from 'lucide-react';

interface HeroSectionProps {
  fullName: string;
  professionalTitle: string;
  objective: string;
  executiveSummary: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  fullName,
  professionalTitle,
  objective,
  executiveSummary,
}) => {
  return (
    <section id="profile" className="pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-[#EAE2D5] bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Subtitle / Academic Institution Affiliation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#1E3A8A] font-semibold font-sans-ui mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
          <span>Curriculum Vitae</span>
          <span aria-hidden="true" className="text-[#CFC1A8]">·</span>
          <span>IMDR ® Pune Management Candidate</span>
        </motion.div>

        {/* Candidate Name - Large Serif Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#0F2544] leading-[1.08] mb-3 text-balance"
        >
          {fullName}
        </motion.h1>

        {/* Professional Title & Domain Specialization */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-[#1E3A8A] font-serif-display italic font-medium tracking-wide mb-8"
        >
          {professionalTitle}
        </motion.div>

        {/* Dual Cards: Objective & About Me */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Objective Card */}
          <div className="bg-white p-6 rounded-xl border border-[#EAE2D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans-ui uppercase tracking-wider text-[#1E3A8A] font-semibold mb-3">
                <Compass className="w-3.5 h-3.5 text-[#1E3A8A]" />
                <span>Career Objective</span>
              </div>
              <p className="font-serif-body text-sm sm:text-base text-[#1F2937] leading-relaxed">
                {objective}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE2D5]/70 text-[11px] font-sans-ui text-[#73829C]">
              Focused on contributing positively while expanding HR capabilities
            </div>
          </div>

          {/* About Me / Profile Card */}
          <div className="bg-white p-6 rounded-xl border border-[#EAE2D5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans-ui uppercase tracking-wider text-[#1E3A8A] font-semibold mb-3">
                <Award className="w-3.5 h-3.5 text-[#1E3A8A]" />
                <span>Professional Profile</span>
              </div>
              <p className="font-serif-body text-sm sm:text-base text-[#1F2937] leading-relaxed">
                {executiveSummary}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE2D5]/70 text-[11px] font-sans-ui text-[#73829C]">
              Strengths: Communication · Teamwork · Creativity · Corporate Discipline
            </div>
          </div>
        </motion.div>

        {/* Professional Metric Highlights Bar (Clean unboxed typographic layout) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#EAE2D5]"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#73829C] font-sans-ui mb-1">
              <GraduationCap className="w-3.5 h-3.5 text-[#1E3A8A]" />
              <span>Current Status</span>
            </div>
            <div className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0F2544]">
              PGDM
            </div>
            <div className="text-xs text-[#64748B] font-serif-body">IMDR ® Pune (Pursuing)</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#73829C] font-sans-ui mb-1">
              <Briefcase className="w-3.5 h-3.5 text-[#1E3A8A]" />
              <span>Industry Exposure</span>
            </div>
            <div className="font-serif-display text-lg sm:text-xl font-semibold text-[#0F2544] truncate" title="Rite Water Solutions">
              HR Intern
            </div>
            <div className="text-xs text-[#64748B] font-serif-body">Rite Water Solutions</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#73829C] font-sans-ui mb-1">
              <Award className="w-3.5 h-3.5 text-[#1E3A8A]" />
              <span>Undergraduate CGPA</span>
            </div>
            <div className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0F2544] tabular-nums">
              8.14 CGPA
            </div>
            <div className="text-xs text-[#64748B] font-serif-body">M.E.S Senior College (2026)</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#73829C] font-sans-ui mb-1">
              <Languages className="w-3.5 h-3.5 text-[#1E3A8A]" />
              <span>Languages Known</span>
            </div>
            <div className="font-serif-display text-xl sm:text-2xl font-semibold text-[#0F2544]">
              3 Languages
            </div>
            <div className="text-xs text-[#64748B] font-serif-body">English · Hindi · Marathi</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
