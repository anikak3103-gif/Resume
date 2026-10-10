import { ResumeData } from '../types/resume';

export const initialResumeData: ResumeData = {
  fullName: "Anika S. Kadam",
  professionalTitle: "Management Candidate · Human Resources & People Management",
  objective: "To gain advanced experience in Human Resources, develop my professional skills, and contribute positively to an organization while learning and growing as a management student.",
  executiveSummary: "Motivated management student with a dedicated focus on Human Resources and people management, offering practical experience in core HR activities, workplace research, and data analysis. A quick learner with strong interpersonal communication, collaborative teamwork, creative problem-solving, and organizational discipline.",
  experience: [
    {
      id: "exp-1",
      role: "HR Intern",
      organization: "Rite Water Solutions",
      division: "Human Resources Department",
      period: "Internship Experience",
      isCurrent: false,
      highlights: [
        "Maintained and regularly updated comprehensive employee records and confidential HR data files.",
        "Assisted in workforce data collection, survey administration, and reporting to support HR decision-making.",
        "Supported the end-to-end planning, logistics, and management of internal employee events and engagement initiatives.",
        "Acquired thorough practical understanding of corporate discipline, operational workflows, and professional workplace culture.",
        "Developed heightened confidence in professional business communication and effective coordination with senior management and team leads.",
        "Gained hands-on operational exposure to day-to-day HR functions, record keeping, and employee lifecycle management."
      ],
      competencies: [
        "HR Operations",
        "Employee Records",
        "Data Collection & Surveys",
        "Event Coordination",
        "Corporate Communication"
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "PDGM (Post Graduate Diploma in Management)",
      institution: "Deccan Education Society's Institute of Management Development and Research (IMDR ®), Pune",
      period: "Pursuing",
      score: "Pursuing",
      honors: "Candidate for Post Graduate Diploma in Management",
      highlights: [
        "Specializing in Human Resources, organizational behavior, talent management, and modern corporate administration."
      ]
    },
    {
      id: "edu-2",
      degree: "Graduation (Bachelor's Degree)",
      institution: "M.E.S Senior College",
      period: "Passing 2026",
      score: "8.14 CGPA",
      honors: "Distinction · 8.14 CGPA",
      highlights: [
        "Comprehensive undergraduate academic curriculum in management studies and analytical methods."
      ]
    },
    {
      id: "edu-3",
      degree: "HSC (Higher Secondary Certificate)",
      institution: "Sir Parshurambhau College",
      period: "Passed 2023",
      score: "69.8%",
      honors: "First Class · 69.8%",
      highlights: [
        "Higher secondary education with focused studies in commerce, business organization, and quantitative disciplines."
      ]
    },
    {
      id: "edu-4",
      degree: "SSC (Secondary School Certificate)",
      institution: "Sinhgad Spring Dale Public School",
      period: "Passed 2021",
      score: "83.4%",
      honors: "Distinction · 83.4%",
      highlights: [
        "Excellence in core academics along with continuous participation in school activities and cultural events."
      ]
    }
  ],
  skills: [
    {
      id: "sk-1",
      category: "Technical & Productivity Tools",
      skills: [
        "MS Excel (Data Sorting, Formulas & Spreadsheets)",
        "MS Word (Documentation & Reporting)",
        "MS PowerPoint (Presentations & Briefings)",
        "Google Workspace (Docs, Sheets, Slides, Drive)",
        "Basic HRIS (Human Resources Information Systems)",
        "Survey Tools & Questionnaire Administration",
        "Data Collection & Analysis",
        "Internet & Online Secondary Research"
      ]
    },
    {
      id: "sk-2",
      category: "Human Resources Domain Expertise",
      skills: [
        "Employee Records Management",
        "Workforce Data Administration",
        "HR Survey Design & Data Gathering",
        "Employee Engagement & Activity Planning",
        "Onboarding Support & Workflow Coordination",
        "Workplace Policy & Corporate Discipline"
      ]
    }
  ],
  competencies: [
    "Event / Activity Coordination",
    "Conflict Resolution",
    "Time Management & Prioritization",
    "Leadership & Initiative",
    "Professional Communication",
    "Teamwork & Cross-Functional Collaboration"
  ],
  languages: [
    {
      id: "lang-1",
      language: "English",
      proficiency: "Full Professional Working Proficiency"
    },
    {
      id: "lang-2",
      language: "Hindi",
      proficiency: "Fluent / Conversational Proficiency"
    },
    {
      id: "lang-3",
      language: "Marathi",
      proficiency: "Native / Mother Tongue"
    }
  ],
  interests: [
    "Dance",
    "Singing",
    "Mandala Art"
  ]
};
