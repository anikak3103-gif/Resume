import React from 'react';
import { motion } from 'motion/react';
import { AnimatedHeading } from './AnimatedHeading';
import { EducationItem } from '../types/resume';
import { GraduationCap, Award } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-12 sm:py-16 border-b border-[#EAE2D5] bg-[#FBF9F5]">
      <div className="max-w-4xl mx-auto">
        <AnimatedHeading
          id="education-heading"
          eyebrow="Academic Background"
          title="Academics & Education"
          subtitle="Formal management education, undergraduate degree, and secondary school qualifications."
        />

        {/* Clean Responsive Academic Credentials Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-xl border border-[#EAE2D5] shadow-xs overflow-hidden mb-10 print-break-inside-avoid"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EAE2D5] bg-[#F4EFEA]/70 text-[#0F2544] font-serif-display text-base">
                  <th className="py-3.5 px-4 sm:px-6 font-semibold">Course / Degree</th>
                  <th className="py-3.5 px-4 font-semibold">Institute / University</th>
                  <th className="py-3.5 px-4 font-semibold text-center whitespace-nowrap">Yr. of Passing</th>
                  <th className="py-3.5 px-4 sm:px-6 font-semibold text-right whitespace-nowrap">CGPA / %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2D5]/70 font-serif-body text-sm sm:text-base text-[#1E293B]">
                {education.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FBF9F5]/70 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-serif-display text-base sm:text-lg font-medium text-[#0F2544]">
                      {item.degree}
                    </td>
                    <td className="py-4 px-4 text-[#334155] leading-snug">
                      {item.institution}
                    </td>
                    <td className="py-4 px-4 text-center font-sans-ui text-xs sm:text-sm text-[#1E3A8A] font-medium tabular-nums whitespace-nowrap">
                      {item.period}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right font-sans-ui text-xs sm:text-sm font-semibold text-[#0F2544] tabular-nums whitespace-nowrap">
                      {item.score || item.honors || '―'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Detailed Academic Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-6 rounded-xl border border-[#EAE2D5] shadow-xs flex flex-col justify-between print-break-inside-avoid hover:border-[#D5C3A8] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#EBF2FA] text-[#1E3A8A]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="font-sans-ui text-xs font-semibold text-[#1E3A8A] tracking-wider tabular-nums">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl font-medium text-[#0F2544] mb-1">
                  {item.degree}
                </h3>

                <div className="text-sm font-serif-body text-[#475569] mb-3 leading-snug">
                  {item.institution}
                </div>

                {item.score && (
                  <div className="flex items-center gap-1.5 text-xs font-sans-ui font-semibold text-[#1E3A8A] mb-3 pb-2 border-b border-[#EAE2D5]/70">
                    <Award className="w-3.5 h-3.5" />
                    <span>Academic Result: {item.score}</span>
                  </div>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1 font-serif-body text-xs sm:text-sm text-[#475569]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#1E3A8A] mt-0.5 select-none text-xs">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
