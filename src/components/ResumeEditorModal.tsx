import React, { useState } from 'react';
import { ResumeData, ExperienceItem, EducationItem, SkillCategory, LanguageItem } from '../types/resume';
import { X, Plus, Trash2, RotateCcw, Check, FileText } from 'lucide-react';

interface ResumeEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeData: ResumeData;
  onSave: (data: ResumeData) => void;
  onResetToDefault: () => void;
}

export const ResumeEditorModal: React.FC<ResumeEditorModalProps> = ({
  isOpen,
  onClose,
  resumeData,
  onSave,
  onResetToDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'experience' | 'education' | 'skills' | 'languages' | 'json'>('profile');
  const [formData, setFormData] = useState<ResumeData>(resumeData);
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify(resumeData, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Keep local form in sync when opened
  React.useEffect(() => {
    setFormData(resumeData);
    setJsonInput(JSON.stringify(resumeData, null, 2));
  }, [resumeData, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleJsonApply = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setFormData(parsed);
      onSave(parsed);
      setJsonError(null);
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 600);
    } catch {
      setJsonError('Invalid JSON format. Please verify syntax.');
    }
  };

  const addExperienceItem = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      role: 'New Role Title',
      organization: 'Organization Name',
      period: '2024 — Present',
      isCurrent: true,
      highlights: ['Key accomplishment or delivered business outcome.'],
      competencies: ['Core Skill 1', 'Core Skill 2']
    };
    setFormData({
      ...formData,
      experience: [newItem, ...formData.experience]
    });
  };

  const removeExperienceItem = (id: string) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((e) => e.id !== id)
    });
  };

  const addEducationItem = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: 'Master of Science in Relevant Discipline',
      institution: 'University Name',
      period: '2018 — 2020',
      honors: 'Distinction / Honors',
      highlights: ['Specialized thesis or capstone initiative']
    };
    setFormData({
      ...formData,
      education: [...formData.education, newItem]
    });
  };

  const removeEducationItem = (id: string) => {
    setFormData({
      ...formData,
      education: formData.education.filter((e) => e.id !== id)
    });
  };

  const addLanguageItem = () => {
    const newItem: LanguageItem = {
      id: `lang-${Date.now()}`,
      language: 'New Language',
      proficiency: 'Professional Working Proficiency'
    };
    setFormData({
      ...formData,
      languages: [...formData.languages, newItem]
    });
  };

  const removeLanguageItem = (id: string) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((l) => l.id !== id)
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#FBF9F5] border border-[#EAE2D5] rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#EAE2D5] bg-white flex items-center justify-between">
          <div>
            <h2 className="font-serif-display text-2xl font-semibold text-[#0F2544]">
              Customize Resume Content
            </h2>
            <p className="text-xs text-[#64748B] font-serif-body">
              Update roles, education, skills, and languages. Changes save instantly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#0F2544] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer"
            aria-label="Close editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EAE2D5] bg-[#F4EFEA] px-6 gap-2 overflow-x-auto text-xs font-sans-ui font-medium">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Profile & Summary
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'experience'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Experience ({formData.experience.length})
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'education'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Education ({formData.education.length})
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'skills'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Skills ({formData.skills.length} Categories)
          </button>
          <button
            onClick={() => setActiveTab('languages')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'languages'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Languages ({formData.languages.length})
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'json'
                ? 'border-[#1E3A8A] text-[#1E3A8A] font-semibold bg-[#FBF9F5]'
                : 'border-transparent text-[#64748B] hover:text-[#0F2544]'
            }`}
          >
            Raw JSON / Paste
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* TAB 1: Profile & Title */}
          {activeTab === 'profile' && (
            <div className="space-y-5 max-w-2xl">
              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-display text-lg focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Professional Title / Role
                </label>
                <input
                  type="text"
                  value={formData.professionalTitle}
                  onChange={(e) => setFormData({ ...formData, professionalTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-body text-base focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Career Objective
                </label>
                <textarea
                  rows={3}
                  value={formData.objective || ''}
                  onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-body text-sm leading-relaxed focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Professional Profile / About Me
                </label>
                <textarea
                  rows={4}
                  value={formData.executiveSummary}
                  onChange={(e) => setFormData({ ...formData, executiveSummary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-body text-sm leading-relaxed focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Core Competencies (comma separated)
                </label>
                <input
                  type="text"
                  value={(formData.competencies || []).join(', ')}
                  onChange={(e) => setFormData({ ...formData, competencies: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-body text-sm focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-xs font-sans-ui uppercase tracking-wider text-[#0F2544] font-semibold mb-1">
                  Personal Interests (comma separated)
                </label>
                <input
                  type="text"
                  value={(formData.interests || []).join(', ')}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EAE2D5] rounded-lg text-[#0F2544] font-serif-body text-sm focus:outline-hidden focus:border-[#1E3A8A]"
                />
              </div>

              <div className="p-4 rounded-lg bg-[#EBF2FA] border border-[#CBD5E1] text-xs text-[#1E3A8A] font-serif-body leading-relaxed">
                <span className="font-semibold">Privacy Discipline Enforced:</span> Personal phone numbers, email addresses, and home/work street addresses are intentionally omitted to keep your dossier focused strictly on education, internship experience, skills, and competencies.
              </div>
            </div>
          )}

          {/* TAB 2: Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#64748B]">
                  Manage Professional Positions
                </span>
                <button
                  type="button"
                  onClick={addExperienceItem}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#16325C] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Position</span>
                </button>
              </div>

              {formData.experience.map((item, idx) => (
                <div key={item.id} className="p-5 bg-white border border-[#EAE2D5] rounded-xl space-y-4 relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-sans-ui text-[#1E3A8A] font-bold">Position #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeExperienceItem(item.id)}
                      className="p-1 text-[#EF4444] hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                      title="Remove Position"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Role Title</label>
                      <input
                        type="text"
                        value={item.role}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[idx].role = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Organization / Company</label>
                      <input
                        type="text"
                        value={item.organization}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[idx].organization = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Division / Group</label>
                      <input
                        type="text"
                        value={item.division || ''}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[idx].division = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Timeframe (e.g. 2021 — Present)</label>
                      <input
                        type="text"
                        value={item.period}
                        onChange={(e) => {
                          const updated = [...formData.experience];
                          updated[idx].period = e.target.value;
                          setFormData({ ...formData, experience: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-1">
                      Key Highlights (one per line)
                    </label>
                    <textarea
                      rows={3}
                      value={item.highlights.join('\n')}
                      onChange={(e) => {
                        const updated = [...formData.experience];
                        updated[idx].highlights = e.target.value.split('\n').filter(Boolean);
                        setFormData({ ...formData, experience: updated });
                      }}
                      className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544] font-serif-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-1">
                      Competencies / Technologies (comma separated)
                    </label>
                    <input
                      type="text"
                      value={(item.competencies || []).join(', ')}
                      onChange={(e) => {
                        const updated = [...formData.experience];
                        updated[idx].competencies = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        setFormData({ ...formData, experience: updated });
                      }}
                      className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Education */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#64748B]">
                  Academic Degrees & Institutions
                </span>
                <button
                  type="button"
                  onClick={addEducationItem}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#16325C] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Degree</span>
                </button>
              </div>

              {formData.education.map((item, idx) => (
                <div key={item.id} className="p-5 bg-white border border-[#EAE2D5] rounded-xl space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-sans-ui text-[#1E3A8A] font-bold">Degree #{idx + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeEducationItem(item.id)}
                      className="p-1 text-[#EF4444] hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Degree Name</label>
                      <input
                        type="text"
                        value={item.degree}
                        onChange={(e) => {
                          const updated = [...formData.education];
                          updated[idx].degree = e.target.value;
                          setFormData({ ...formData, education: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Institution</label>
                      <input
                        type="text"
                        value={item.institution}
                        onChange={(e) => {
                          const updated = [...formData.education];
                          updated[idx].institution = e.target.value;
                          setFormData({ ...formData, education: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Period (e.g. 2008 — 2010)</label>
                      <input
                        type="text"
                        value={item.period}
                        onChange={(e) => {
                          const updated = [...formData.education];
                          updated[idx].period = e.target.value;
                          setFormData({ ...formData, education: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Score / CGPA / %</label>
                      <input
                        type="text"
                        value={item.score || ''}
                        onChange={(e) => {
                          const updated = [...formData.education];
                          updated[idx].score = e.target.value;
                          setFormData({ ...formData, education: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Skills */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <span className="text-xs font-sans-ui uppercase tracking-wider text-[#64748B] block">
                Domain Categories & Skill Sets
              </span>

              {formData.skills.map((cat, idx) => (
                <div key={cat.id} className="p-5 bg-white border border-[#EAE2D5] rounded-xl space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F2544] mb-1">
                      Category {idx + 1} Name
                    </label>
                    <input
                      type="text"
                      value={cat.category}
                      onChange={(e) => {
                        const updated = [...formData.skills];
                        updated[idx].category = e.target.value;
                        setFormData({ ...formData, skills: updated });
                      }}
                      className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#475569] mb-1">
                      Skills (comma-separated)
                    </label>
                    <textarea
                      rows={2}
                      value={cat.skills.join(', ')}
                      onChange={(e) => {
                        const updated = [...formData.skills];
                        updated[idx].skills = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        setFormData({ ...formData, skills: updated });
                      }}
                      className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: Languages */}
          {activeTab === 'languages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans-ui uppercase tracking-wider text-[#64748B]">
                  Spoken & Business Languages
                </span>
                <button
                  type="button"
                  onClick={addLanguageItem}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#1E3A8A] rounded-md hover:bg-[#16325C] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Language</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.languages.map((item, idx) => (
                  <div key={item.id} className="p-4 bg-white border border-[#EAE2D5] rounded-xl space-y-3 relative">
                    <button
                      type="button"
                      onClick={() => removeLanguageItem(item.id)}
                      className="absolute top-3 right-3 p-1 text-[#EF4444] hover:bg-red-50 rounded-md cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Language</label>
                      <input
                        type="text"
                        value={item.language}
                        onChange={(e) => {
                          const updated = [...formData.languages];
                          updated[idx].language = e.target.value;
                          setFormData({ ...formData, languages: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#475569] mb-1">Fluency Description</label>
                      <input
                        type="text"
                        value={item.proficiency}
                        onChange={(e) => {
                          const updated = [...formData.languages];
                          updated[idx].proficiency = e.target.value;
                          setFormData({ ...formData, languages: updated });
                        }}
                        className="w-full px-3 py-1.5 bg-[#FBF9F5] border border-[#EAE2D5] rounded-md text-sm text-[#0F2544]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: Raw JSON Paste / Importer */}
          {activeTab === 'json' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#475569]">
                <FileText className="w-4 h-4 text-[#1E3A8A]" />
                <span>Paste or export your complete resume schema in JSON format.</span>
              </div>
              <textarea
                rows={14}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full p-3 font-mono text-xs bg-slate-900 text-slate-100 rounded-lg border border-slate-700 focus:outline-hidden focus:ring-1 focus:ring-[#1E3A8A]"
              />
              {jsonError && (
                <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-md border border-red-200">
                  {jsonError}
                </div>
              )}
              <button
                type="button"
                onClick={handleJsonApply}
                className="px-4 py-2 text-xs font-medium text-white bg-[#1E3A8A] rounded-lg hover:bg-[#16325C] transition-colors cursor-pointer"
              >
                Apply JSON Data
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-[#EAE2D5] bg-white flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetToDefault}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#475569] hover:text-[#0F2544] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Sample</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#475569] hover:bg-[#F4EFEA] rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-medium text-white bg-[#0F2544] hover:bg-[#1E3A8A] rounded-lg transition-colors shadow-2xs cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save & Apply</span>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
