/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { initialResumeData } from './data/defaultResume';
import { ResumeData } from './types/resume';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { ResumeEditorModal } from './components/ResumeEditorModal';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'curriculum_vitae_anika_s_kadam_v3';

export default function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback to default
    }
    return initialResumeData;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync document title with full name
  useEffect(() => {
    if (resumeData.fullName) {
      document.title = `${resumeData.fullName} — Curriculum Vitae`;
    }
  }, [resumeData.fullName]);

  const handleSaveData = (updatedData: ResumeData) => {
    setResumeData(updatedData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (e) {
      console.error('Failed to save resume data to localStorage', e);
    }
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset resume to original template content?')) {
      setResumeData(initialResumeData);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore
      }
      setIsEditorOpen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#0A1628] flex flex-col font-serif-body antialiased selection:bg-[#1E3A8A]/15 selection:text-[#0F2544]">
      {/* Top Bar Navigation (Top Bar Contract) */}
      <Navbar
        fullName={resumeData.fullName}
        onOpenEditor={() => setIsEditorOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Resume Canvas */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 print-page">
        
        {/* Executive Profile & Hero Section (Focused solely on career, objective & profile - NO photo, NO contact details) */}
        <HeroSection
          fullName={resumeData.fullName}
          professionalTitle={resumeData.professionalTitle}
          objective={resumeData.objective}
          executiveSummary={resumeData.executiveSummary}
        />

        {/* Academics & Education Section */}
        <EducationSection education={resumeData.education} />

        {/* Internship Experience Section */}
        <ExperienceSection experience={resumeData.experience} />

        {/* Technical Skills, Competencies & Personal Interests */}
        <SkillsSection
          skills={resumeData.skills}
          competencies={resumeData.competencies}
          interests={resumeData.interests}
        />

        {/* Languages Known Section */}
        <LanguagesSection languages={resumeData.languages} />

      </main>

      {/* Understated Minimalist Footer */}
      <Footer fullName={resumeData.fullName} />

      {/* Interactive Resume Customizer / Data Importer Drawer */}
      <ResumeEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        resumeData={resumeData}
        onSave={handleSaveData}
        onResetToDefault={handleResetToDefault}
      />
    </div>
  );
}
