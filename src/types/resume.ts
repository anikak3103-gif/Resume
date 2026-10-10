export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  division?: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  competencies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  honors?: string;
  score?: string;
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency?: string;
}

export interface ResumeData {
  fullName: string;
  professionalTitle: string;
  objective: string;
  executiveSummary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  competencies: string[];
  languages: LanguageItem[];
  interests: string[];
}
