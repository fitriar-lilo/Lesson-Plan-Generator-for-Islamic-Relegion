import React, { useState } from 'react';
import {
  LessonPlanState,
  YearGroup,
  TopicItem,
  SubtopicItem
} from '../types/lessonPlan';
import { CURRICULUM_DATA, PRESET_COLOR_THEMES } from '../data/curriculumData';
import {
  BookOpen,
  Calendar,
  Clock,
  Layers,
  Sparkles,
  Users,
  CheckSquare,
  Square,
  Plus,
  Trash2,
  FileCheck,
  Palette,
  ExternalLink,
  PenTool,
  Check
} from 'lucide-react';
import { SignaturePadModal } from './SignaturePadModal';

interface ConfigurationPanelProps {
  lessonPlan: LessonPlanState;
  setLessonPlan: React.Dispatch<React.SetStateAction<LessonPlanState>>;
  onAutoGenerate: () => void;
  onPreviewClick: () => void;
}

export const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
  lessonPlan,
  setLessonPlan,
  onAutoGenerate,
  onPreviewClick
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'metadata' | 'curriculum' | 'walt' | 'differentiation' | '5e' | 'resources' | 'theme'
  >('curriculum');

  const [activeMeetingTab, setActiveMeetingTab] = useState<number>(1);
  const [sigModalType, setSigModalType] = useState<'teacher' | 'hod' | 'principal' | null>(null);

  // Available topics for selected year group
  const availableTopics = CURRICULUM_DATA.filter(
    (t) => t.yearGroup === lessonPlan.yearGroup
  );

  // Helper to update field
  const updateField = <K extends keyof LessonPlanState>(
    field: K,
    value: LessonPlanState[K]
  ) => {
    setLessonPlan((prev) => ({ ...prev, [field]: value }));
  };

  // Grade switch
  const handleYearGroupChange = (yg: YearGroup) => {
    const newTopics = CURRICULUM_DATA.filter((t) => t.yearGroup === yg);
    const firstTopic = newTopics[0];
    const firstSubtopic = firstTopic?.subtopics[0];

    setLessonPlan((prev) => {
      const nextState: LessonPlanState = {
        ...prev,
        yearGroup: yg,
        unitTitle: firstTopic ? `${firstTopic.chapterNumber} - ${firstTopic.title}` : prev.unitTitle,
        selectedTopicIds: firstTopic ? [firstTopic.id] : [],
        selectedSubtopicIds: firstSubtopic ? [firstSubtopic.id] : [],
        selectedObjectiveIds: firstSubtopic ? firstSubtopic.objectives.map((o) => o.id) : []
      };

      // Populate default WALT/WILF/SLO if available
      if (firstSubtopic) {
        if (firstSubtopic.defaultWalt) nextState.waltItems = [...firstSubtopic.defaultWalt];
        if (firstSubtopic.defaultWilf) nextState.wilfItems = [...firstSubtopic.defaultWilf];
        if (firstSubtopic.defaultSlo) nextState.sloItems = [...firstSubtopic.defaultSlo];
        if (firstSubtopic.clilTerms) nextState.clilTerms = [...firstSubtopic.clilTerms];
        if (firstSubtopic.ealVocabulary) nextState.ealVocabulary = [...firstSubtopic.ealVocabulary];
        if (firstSubtopic.struggledScaffold && firstSubtopic.ealSupport && firstSubtopic.extensionChallenge) {
          nextState.differentiation = {
            struggled: { ...firstSubtopic.struggledScaffold },
            eal: { ...firstSubtopic.ealSupport },
            extension: { ...firstSubtopic.extensionChallenge }
          };
        }
      }

      return nextState;
    });
  };

  // Toggle Topic selection
  const toggleTopic = (topicId: string) => {
    const current = lessonPlan.selectedTopicIds;
    const isSelected = current.includes(topicId);
    let nextTopicIds: string[];

    if (isSelected) {
      nextTopicIds = current.filter((id) => id !== topicId);
    } else {
      nextTopicIds = [...current, topicId];
    }

    // Update subtopics accordingly
    const targetTopic = availableTopics.find((t) => t.id === topicId);
    let nextSubtopicIds = [...lessonPlan.selectedSubtopicIds];
    let nextObjectiveIds = [...lessonPlan.selectedObjectiveIds];

    if (targetTopic) {
      if (isSelected) {
        // Remove this topic's subtopics & objectives
        const subIds = targetTopic.subtopics.map((s) => s.id);
        const objIds = targetTopic.subtopics.flatMap((s) => s.objectives.map((o) => o.id));
        nextSubtopicIds = nextSubtopicIds.filter((id) => !subIds.includes(id));
        nextObjectiveIds = nextObjectiveIds.filter((id) => !objIds.includes(id));
      } else {
        // Add all subtopics & objectives of newly selected topic
        const subIds = targetTopic.subtopics.map((s) => s.id);
        const objIds = targetTopic.subtopics.flatMap((s) => s.objectives.map((o) => o.id));
        nextSubtopicIds = Array.from(new Set([...nextSubtopicIds, ...subIds]));
        nextObjectiveIds = Array.from(new Set([...nextObjectiveIds, ...objIds]));
      }
    }

    setLessonPlan((prev) => ({
      ...prev,
      selectedTopicIds: nextTopicIds,
      selectedSubtopicIds: nextSubtopicIds,
      selectedObjectiveIds: nextObjectiveIds,
      unitTitle: nextTopicIds
        .map((tid) => availableTopics.find((t) => t.id === tid)?.title)
        .filter(Boolean)
        .join(' & ') || prev.unitTitle
    }));
  };

  // Toggle Subtopic selection
  const toggleSubtopic = (subtopic: SubtopicItem) => {
    const isSelected = lessonPlan.selectedSubtopicIds.includes(subtopic.id);
    let nextSubIds: string[];
    let nextObjIds: string[];

    const objIds = subtopic.objectives.map((o) => o.id);

    if (isSelected) {
      nextSubIds = lessonPlan.selectedSubtopicIds.filter((id) => id !== subtopic.id);
      nextObjIds = lessonPlan.selectedObjectiveIds.filter((id) => !objIds.includes(id));
    } else {
      nextSubIds = [...lessonPlan.selectedSubtopicIds, subtopic.id];
      nextObjIds = Array.from(new Set([...lessonPlan.selectedObjectiveIds, ...objIds]));
    }

    setLessonPlan((prev) => ({
      ...prev,
      selectedSubtopicIds: nextSubIds,
      selectedObjectiveIds: nextObjIds
    }));
  };

  // Toggle individual objective
  const toggleObjective = (objId: string) => {
    const isSelected = lessonPlan.selectedObjectiveIds.includes(objId);
    let next: string[];
    if (isSelected) {
      next = lessonPlan.selectedObjectiveIds.filter((id) => id !== objId);
    } else {
      next = [...lessonPlan.selectedObjectiveIds, objId];
    }
    updateField('selectedObjectiveIds', next);
  };

  // Number of meetings change
  const handleNumMeetingsChange = (num: number) => {
    const validNum = Math.max(1, Math.min(12, num));
    setLessonPlan((prev) => {
      const currentMeetings = [...prev.meetings];
      if (currentMeetings.length < validNum) {
        for (let i = currentMeetings.length + 1; i <= validNum; i++) {
          currentMeetings.push({
            meetingNumber: i,
            topicTitle: prev.unitTitle || 'Pendidikan Agama Islam',
            subtopicTitle: `Pendalaman Materi Pertemuan ke-${i}`,
            date: prev.dateRange || '',
            duration: prev.durationPerMeeting,
            starterStimulus: 'Apersepsi kontekstual, tilawah ayat, atau tayangan video inspiratif.',
            engage: {
              duration: '10 menit',
              description: 'Pemanasan diagnostik mengenai materi, menampilkan WALT di papan tulis.',
              diagnosticWarmup: 'Kuis cepat 3 butir soal pemahaman awal.'
            },
            explore: {
              duration: '20 menit',
              description: 'Penemuan terbimbing (guided inquiry) dan diskusi kelompok membedah dalil nash.',
              guidedInquiry: 'Lembar observasi kelompok menelaah ayat dan hadis terkait.'
            },
            explain: {
              duration: '15 menit',
              description: 'Penjelasan eksplisit konsep oleh guru, penegasan kaidah syar\'i, dan tanya jawab.',
              keyConcepts: 'Intisari hukum syariat, dimensi akidah/akhlak, dan hikmah amaliah.',
              dalilText: 'Rujukan Al-Qur\'an dan Hadis shahih terkait.'
            },
            elaborate: {
              duration: '20 menit',
              description: 'Latihan mandiri atau tugas kolaboratif bertingkat menyelesaikan studi kasus nyata.',
              taskDetails: 'Mengerjakan lembar kerja terstruktur (LKPD) berbasis pemecahan masalah.'
            },
            evaluate: {
              duration: '15 menit',
              description: 'Tiket keluar (exit ticket) dan evaluasi pemahaman singkat yang selaras dengan SLO.',
              exitTicketPrompt: 'Tuliskan 1 konsep paling bermakna yang kamu pahami hari ini.'
            }
          });
        }
      } else if (currentMeetings.length > validNum) {
        currentMeetings.splice(validNum);
      }
      return {
        ...prev,
        numberOfMeetings: validNum,
        meetings: currentMeetings
      };
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      {/* Sub-tabs Navigation */}
      <div className="flex items-center overflow-x-auto border-b border-slate-200 bg-slate-50/70 px-4 pt-3 gap-1 scrollbar-none">
        <button
          onClick={() => setActiveSubTab('curriculum')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'curriculum'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>1. Topik & Tujuan PAI</span>
        </button>

        <button
          onClick={() => setActiveSubTab('metadata')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'metadata'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>2. Metadata Pembelajaran</span>
        </button>

        <button
          onClick={() => setActiveSubTab('walt')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'walt'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5" />
          <span>3. WALT, WILF & SLO</span>
        </button>

        <button
          onClick={() => setActiveSubTab('differentiation')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'differentiation'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>4. Diferensiasi & Scaffolding</span>
        </button>

        <button
          onClick={() => setActiveSubTab('5e')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === '5e'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>5. Model Pembelajaran 5E</span>
        </button>

        <button
          onClick={() => setActiveSubTab('resources')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'resources'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>6. Sumber Belajar & Asesmen</span>
        </button>

        <button
          onClick={() => setActiveSubTab('theme')}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap shrink-0 ${
            activeSubTab === 'theme'
              ? 'bg-white text-emerald-800 border-t-2 border-emerald-700 shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>7. Desain & Tanda Tangan</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-5 sm:p-6">
        {/* ============================================================== */}
        {/* 1. TOPIK & TUJUAN PAI (CASCADING DROPDOWNS & CHECKLIST BOXES) */}
        {/* ============================================================== */}
        {activeSubTab === 'curriculum' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Pemilih Topik, Subtopik & Tujuan Pembelajaran (Cascading)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pilih tingkat kelas, bab materi PAI, serta centang tujuan pembelajaran yang diinginkan.
                </p>
              </div>

              {/* Year Group Selector Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
                {(['Year 10', 'Year 11', 'Year 12'] as YearGroup[]).map((yg) => (
                  <button
                    key={yg}
                    onClick={() => handleYearGroupChange(yg)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      lessonPlan.yearGroup === yg
                        ? 'bg-white text-emerald-800 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {yg} (SMA)
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Auto-generate banner button */}
            <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-900">
                <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Generate Otomatis Semesta:</strong> Perbarui WALT, WILF, SLO, 5E, dan Diferensiasi berdasarkan bab & subtopik terpilih.
                </span>
              </div>
              <button
                onClick={onAutoGenerate}
                className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Generate Otomatis Konten RPP</span>
              </button>
            </div>

            {/* Topic Cards & Cascading Checklists */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Daftar Bab & Topik ({lessonPlan.yearGroup})
                </span>
                <span className="text-xs text-slate-500">
                  {lessonPlan.selectedTopicIds.length} bab dipilih
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {availableTopics.map((topic) => {
                  const isTopicSelected = lessonPlan.selectedTopicIds.includes(topic.id);

                  return (
                    <div
                      key={topic.id}
                      className={`rounded-xl border transition-all ${
                        isTopicSelected
                          ? 'border-emerald-300 bg-emerald-50/20'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      {/* Topic Header Row */}
                      <div className="flex items-start sm:items-center justify-between p-4 cursor-pointer gap-3"
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            type="button"
                            className="mt-0.5 text-emerald-700 hover:text-emerald-800"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTopic(topic.id);
                            }}
                          >
                            {isTopicSelected ? (
                              <CheckSquare className="w-5 h-5 text-emerald-700" />
                            ) : (
                              <Square className="w-5 h-5 text-slate-400" />
                            )}
                          </button>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                {topic.chapterNumber}
                              </span>
                              <h4 className="text-sm font-bold text-slate-900">
                                {topic.title}
                              </h4>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">
                              {topic.subtopics.length} subtopik pembelajaran
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-emerald-700 font-medium whitespace-nowrap">
                          {isTopicSelected ? 'Terpilih' : 'Pilih Bab'}
                        </span>
                      </div>

                      {/* Subtopics and Objectives (Expanded when topic is selected) */}
                      {isTopicSelected && (
                        <div className="border-t border-emerald-200/60 p-4 bg-white/70 rounded-b-xl space-y-4">
                          {topic.subtopics.map((subtopic) => {
                            const isSubSelected = lessonPlan.selectedSubtopicIds.includes(subtopic.id);

                            return (
                              <div
                                key={subtopic.id}
                                className={`p-3.5 rounded-lg border text-xs ${
                                  isSubSelected
                                    ? 'border-emerald-200 bg-emerald-50/40'
                                    : 'border-slate-100 bg-slate-50'
                                }`}
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <label className="flex items-start gap-2.5 cursor-pointer font-semibold text-slate-900">
                                    <input
                                      type="checkbox"
                                      checked={isSubSelected}
                                      onChange={() => toggleSubtopic(subtopic)}
                                      className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-500 w-4 h-4"
                                    />
                                    <span>{subtopic.title}</span>
                                  </label>
                                  <span className="text-[11px] text-slate-400 shrink-0">
                                    {subtopic.objectives.length} Tujuan
                                  </span>
                                </div>

                                {/* Objectives Checklists */}
                                {isSubSelected && (
                                  <div className="mt-3 pl-6 space-y-2 border-l-2 border-emerald-300">
                                    <span className="text-[11px] font-bold text-slate-600 block uppercase tracking-wider">
                                      Tujuan Pembelajaran Spesifik (Checklist):
                                    </span>
                                    {subtopic.objectives.map((obj) => {
                                      const isObjSelected = lessonPlan.selectedObjectiveIds.includes(obj.id);
                                      return (
                                        <label
                                          key={obj.id}
                                          className="flex items-start gap-2 text-slate-700 cursor-pointer hover:text-slate-900"
                                        >
                                          <input
                                            type="checkbox"
                                            checked={isObjSelected}
                                            onChange={() => toggleObjective(obj.id)}
                                            className="mt-0.5 rounded text-emerald-700 focus:ring-emerald-500 w-3.5 h-3.5 shrink-0"
                                          />
                                          <span className="leading-relaxed">{obj.text}</span>
                                        </label>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 2. METADATA PEMBELAJARAN DASAR */}
        {/* ============================================================== */}
        {activeSubTab === 'metadata' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Informasi & Metadata Pembelajaran Dasar
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Konfigurasikan identitas guru, kepala sekolah, alokasi pertemuan, dan target kurikulum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Guru Pengampu PAI
                </label>
                <input
                  type="text"
                  value={lessonPlan.teacherName}
                  onChange={(e) => updateField('teacherName', e.target.value)}
                  placeholder="Contoh: Muhammad Fauzan, S.Pd.I"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Kepala Sekolah (Standar Semesta)
                </label>
                <input
                  type="text"
                  value={lessonPlan.principalName}
                  onChange={(e) => updateField('principalName', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ketua Departemen / HoD
                </label>
                <input
                  type="text"
                  value={lessonPlan.hodName}
                  onChange={(e) => updateField('hodName', e.target.value)}
                  placeholder="Nama Koordinator / HoD"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Durasi per Pertemuan
                </label>
                <select
                  value={lessonPlan.durationPerMeeting}
                  onChange={(e) => updateField('durationPerMeeting', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="80 menit (2 JP / Double Period)">
                    80 menit (2 JP / Double Period) - Standar Semesta
                  </option>
                  <option value="40 menit (1 JP / Single Period)">
                    40 menit (1 JP / Single Period)
                  </option>
                  <option value="120 menit (3 JP / Block Session)">
                    120 menit (3 JP / Block Session)
                  </option>
                  <option value="90 menit">90 menit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jumlah Pertemuan (Pertemuan ke-X dari N)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={12}
                    value={lessonPlan.numberOfMeetings}
                    onChange={(e) => handleNumMeetingsChange(parseInt(e.target.value) || 1)}
                    className="w-24 text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                  <span className="text-xs text-slate-500">pertemuan (1 s.d. 12)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Rentang Tanggal / Tanggal Pelaksanaan
                </label>
                <input
                  type="text"
                  value={lessonPlan.dateRange}
                  onChange={(e) => updateField('dateRange', e.target.value)}
                  placeholder="Misal: 19 - 30 Oktober 2026"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tahun Pelajaran & Semester
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={lessonPlan.academicYear}
                    onChange={(e) => updateField('academicYear', e.target.value)}
                    placeholder="2026/2027"
                    className="text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                  <select
                    value={lessonPlan.semester}
                    onChange={(e) => updateField('semester', e.target.value)}
                    className="text-xs px-2 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Semester 1 (Ganjil)">Semester 1 (Ganjil)</option>
                    <option value="Semester 2 (Genap)">Semester 2 (Genap)</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Judul Unit / Tema Utama
                </label>
                <input
                  type="text"
                  value={lessonPlan.unitTitle}
                  onChange={(e) => updateField('unitTitle', e.target.value)}
                  placeholder="Judul bab atau unit pembelajaran"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>
            </div>

            {/* Cambridge Assessment Objectives */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Cambridge Assessment Objectives (Adaptasi PAI)
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    AO1: Knowledge & Understanding (Pemahaman Konseptual & Dalil)
                  </label>
                  <textarea
                    rows={2}
                    value={lessonPlan.cambridgeAO1}
                    onChange={(e) => updateField('cambridgeAO1', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    AO2: Application & Problem Solving (Penerapan Kontekstual & Penalaran Nilai)
                  </label>
                  <textarea
                    rows={2}
                    value={lessonPlan.cambridgeAO2}
                    onChange={(e) => updateField('cambridgeAO2', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 3. WALT, WILF & SLO (EDITABLE LISTS & SUGGESTIONS) */}
        {/* ============================================================== */}
        {activeSubTab === 'walt' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Tabel Terpadu: WALT, WILF, SLO & Sasaran Bahasa (CLIL / EAL)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Rincian tujuan pembelajaran (WALT), kriteria keberhasilan (WILF "Saya dapat..."), capaian akhir (SLO), istilah kunci, dan kosakata dwibahasa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Kolom 1: WALT */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">
                    WALT (We Are Learning To)
                  </span>
                  <button
                    onClick={() => updateField('waltItems', [...lessonPlan.waltItems, 'Memahami...'])}
                    className="p-1 rounded text-emerald-700 hover:bg-emerald-50 flex items-center gap-1 text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah
                  </button>
                </div>
                <div className="space-y-2">
                  {lessonPlan.waltItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-xs font-bold text-slate-400 mt-1">{idx + 1}.</span>
                      <textarea
                        rows={2}
                        value={item}
                        onChange={(e) => {
                          const updated = [...lessonPlan.waltItems];
                          updated[idx] = e.target.value;
                          updateField('waltItems', updated);
                        }}
                        className="w-full text-xs p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => {
                          const updated = lessonPlan.waltItems.filter((_, i) => i !== idx);
                          updateField('waltItems', updated);
                        }}
                        className="p-1 text-slate-400 hover:text-rose-600 mt-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom 2: WILF */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">
                    WILF (What I'm Looking For)
                  </span>
                  <button
                    onClick={() => updateField('wilfItems', [...lessonPlan.wilfItems, 'Saya dapat...'])}
                    className="p-1 rounded text-emerald-700 hover:bg-emerald-50 flex items-center gap-1 text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah
                  </button>
                </div>
                <div className="space-y-2">
                  {lessonPlan.wilfItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-xs font-bold text-emerald-600 mt-1">✓</span>
                      <textarea
                        rows={2}
                        value={item}
                        onChange={(e) => {
                          const updated = [...lessonPlan.wilfItems];
                          updated[idx] = e.target.value;
                          updateField('wilfItems', updated);
                        }}
                        className="w-full text-xs p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => {
                          const updated = lessonPlan.wilfItems.filter((_, i) => i !== idx);
                          updateField('wilfItems', updated);
                        }}
                        className="p-1 text-slate-400 hover:text-rose-600 mt-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom 3: SLO & Sasaran Bahasa */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase">
                    SLO & Bahasa (CLIL / EAL)
                  </span>
                  <button
                    onClick={() => updateField('sloItems', [...lessonPlan.sloItems, 'Peserta didik mampu...'])}
                    className="p-1 rounded text-emerald-700 hover:bg-emerald-50 flex items-center gap-1 text-xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah SLO
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                    Student Learning Outcomes (SLO):
                  </span>
                  {lessonPlan.sloItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <textarea
                        rows={2}
                        value={item}
                        onChange={(e) => {
                          const updated = [...lessonPlan.sloItems];
                          updated[idx] = e.target.value;
                          updateField('sloItems', updated);
                        }}
                        className="w-full text-xs p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        onClick={() => {
                          const updated = lessonPlan.sloItems.filter((_, i) => i !== idx);
                          updateField('sloItems', updated);
                        }}
                        className="p-1 text-slate-400 hover:text-rose-600 mt-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* CLIL Terms List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider block">
                      Istilah Kunci (CLIL):
                    </span>
                    <button
                      onClick={() =>
                        updateField('clilTerms', [
                          ...lessonPlan.clilTerms,
                          { term: 'Istilah', arabic: 'عَرَبِيٌّ', definition: 'Penjelasan istilah' }
                        ])
                      }
                      className="text-xs text-emerald-700 hover:underline"
                    >
                      + Istilah
                    </button>
                  </div>
                  {lessonPlan.clilTerms.map((clil, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Term"
                          value={clil.term}
                          onChange={(e) => {
                            const updated = [...lessonPlan.clilTerms];
                            updated[idx].term = e.target.value;
                            updateField('clilTerms', updated);
                          }}
                          className="w-1/2 p-1 border border-slate-300 rounded font-semibold text-xs"
                        />
                        <input
                          type="text"
                          placeholder="Arab"
                          value={clil.arabic || ''}
                          onChange={(e) => {
                            const updated = [...lessonPlan.clilTerms];
                            updated[idx].arabic = e.target.value;
                            updateField('clilTerms', updated);
                          }}
                          className="w-1/2 p-1 border border-slate-300 rounded font-serif text-xs text-right"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Definisi"
                        value={clil.definition}
                        onChange={(e) => {
                          const updated = [...lessonPlan.clilTerms];
                          updated[idx].definition = e.target.value;
                          updateField('clilTerms', updated);
                        }}
                        className="w-full p-1 border border-slate-300 rounded text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 4. DIFERENSIASI & SCAFFOLDING */}
        {/* ============================================================== */}
        {activeSubTab === 'differentiation' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Tabel Diferensiasi Pembelajaran (Multi-Tier Scaffolding)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Sediakan strategi bimbingan bertahap (Struggled), penguatan bahasa (EAL Support), serta tugas tantangan siswa berprestasi tinggi (Extension).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1. Struggled */}
              <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 space-y-3">
                <span className="text-xs font-bold text-amber-900 uppercase block tracking-wider">
                  Struggled Scaffolding (Bimbingan Bertahap)
                </span>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Judul Strategi</label>
                  <input
                    type="text"
                    value={lessonPlan.differentiation.struggled.title}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        struggled: { ...lessonPlan.differentiation.struggled, title: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Panduan & Langkah Terstruktur
                  </label>
                  <textarea
                    rows={4}
                    value={lessonPlan.differentiation.struggled.scaffoldGuidance}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        struggled: { ...lessonPlan.differentiation.struggled, scaffoldGuidance: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                  />
                </div>
              </div>

              {/* 2. EAL */}
              <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/30 space-y-3">
                <span className="text-xs font-bold text-sky-900 uppercase block tracking-wider">
                  Dukungan Bahasa (EAL / Bilingual Support)
                </span>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Judul Dukungan</label>
                  <input
                    type="text"
                    value={lessonPlan.differentiation.eal.title}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        eal: { ...lessonPlan.differentiation.eal, title: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Representasi Visual / Gambar
                  </label>
                  <textarea
                    rows={4}
                    value={lessonPlan.differentiation.eal.visualSupport}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        eal: { ...lessonPlan.differentiation.eal, visualSupport: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                  />
                </div>
              </div>

              {/* 3. Extension */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-3">
                <span className="text-xs font-bold text-emerald-900 uppercase block tracking-wider">
                  Tugas Pengayaan (Extension Challenge)
                </span>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Judul Pengayaan</label>
                  <input
                    type="text"
                    value={lessonPlan.differentiation.extension.title}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        extension: { ...lessonPlan.differentiation.extension, title: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Tantangan & Konteks Nyata
                  </label>
                  <textarea
                    rows={4}
                    value={lessonPlan.differentiation.extension.challengeTask}
                    onChange={(e) =>
                      updateField('differentiation', {
                        ...lessonPlan.differentiation,
                        extension: { ...lessonPlan.differentiation.extension, challengeTask: e.target.value }
                      })
                    }
                    className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 5. MODEL PEMBELAJARAN 5E PER PERTEMUAN */}
        {/* ============================================================== */}
        {activeSubTab === '5e' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Rencana Pelaksanaan Model 5E per Pertemuan
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Starter, Engage (10m), Explore (20m), Explain (15m), Elaborate (20m), dan Evaluate (15m).
                </p>
              </div>

              {/* Meeting navigation buttons */}
              <div className="flex items-center gap-1 overflow-x-auto p-1 bg-slate-100 rounded-lg">
                {lessonPlan.meetings.map((m) => (
                  <button
                    key={m.meetingNumber}
                    onClick={() => setActiveMeetingTab(m.meetingNumber)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      activeMeetingTab === m.meetingNumber
                        ? 'bg-white text-emerald-800 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Pertemuan {m.meetingNumber}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Meeting Editor */}
            {(() => {
              const currentMeeting = lessonPlan.meetings.find(
                (m) => m.meetingNumber === activeMeetingTab
              ) || lessonPlan.meetings[0];

              if (!currentMeeting) return null;

              const updateMeeting = (updatedData: Partial<typeof currentMeeting>) => {
                const nextMeetings = lessonPlan.meetings.map((m) =>
                  m.meetingNumber === currentMeeting.meetingNumber
                    ? { ...m, ...updatedData }
                    : m
                );
                updateField('meetings', nextMeetings);
              };

              return (
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-emerald-800">
                        Pertemuan ke-{currentMeeting.meetingNumber} dari {lessonPlan.numberOfMeetings}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {currentMeeting.topicTitle} - {currentMeeting.subtopicTitle}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-500">
                      Alokasi: {currentMeeting.duration}
                    </span>
                  </div>

                  {/* 1. Starter / Stimulus */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Starter / Stimulus (Pemantik Awal Sesi)
                    </label>
                    <textarea
                      rows={2}
                      value={currentMeeting.starterStimulus}
                      onChange={(e) => updateMeeting({ starterStimulus: e.target.value })}
                      className="w-full text-xs p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  {/* 2. Engage */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase">
                        Engage ({currentMeeting.engage.duration})
                      </span>
                      <span className="text-[11px] text-slate-500">Apersepsi & Menampilkan WALT</span>
                    </div>
                    <textarea
                      rows={2}
                      value={currentMeeting.engage.description}
                      onChange={(e) =>
                        updateMeeting({
                          engage: { ...currentMeeting.engage, description: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                      placeholder="Deskripsi kegiatan apersepsi..."
                    />
                    <input
                      type="text"
                      value={currentMeeting.engage.diagnosticWarmup}
                      onChange={(e) =>
                        updateMeeting({
                          engage: { ...currentMeeting.engage, diagnosticWarmup: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white text-emerald-800 font-medium"
                      placeholder="Pemanasan Diagnostik..."
                    />
                  </div>

                  {/* 3. Explore */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase">
                        Explore ({currentMeeting.explore.duration})
                      </span>
                      <span className="text-[11px] text-slate-500">Guided Inquiry / Diskusi Penemuan</span>
                    </div>
                    <textarea
                      rows={2}
                      value={currentMeeting.explore.description}
                      onChange={(e) =>
                        updateMeeting({
                          explore: { ...currentMeeting.explore, description: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                    />
                  </div>

                  {/* 4. Explain */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase">
                        Explain ({currentMeeting.explain.duration})
                      </span>
                      <span className="text-[11px] text-slate-500">Penjelasan Guru & Penegasan Dalil</span>
                    </div>
                    <textarea
                      rows={2}
                      value={currentMeeting.explain.description}
                      onChange={(e) =>
                        updateMeeting({
                          explain: { ...currentMeeting.explain, description: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={currentMeeting.explain.keyConcepts}
                        onChange={(e) =>
                          updateMeeting({
                            explain: { ...currentMeeting.explain, keyConcepts: e.target.value }
                          })
                        }
                        className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white font-medium"
                        placeholder="Konsep Kunci..."
                      />
                      <input
                        type="text"
                        value={currentMeeting.explain.dalilText}
                        onChange={(e) =>
                          updateMeeting({
                            explain: { ...currentMeeting.explain, dalilText: e.target.value }
                          })
                        }
                        className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white text-emerald-900"
                        placeholder="Dalil Al-Qur'an & Hadis..."
                      />
                    </div>
                  </div>

                  {/* 5. Elaborate */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase">
                        Elaborate ({currentMeeting.elaborate.duration})
                      </span>
                      <span className="text-[11px] text-slate-500">Latihan Mandiri / LKPD Bertahap</span>
                    </div>
                    <textarea
                      rows={2}
                      value={currentMeeting.elaborate.description}
                      onChange={(e) =>
                        updateMeeting({
                          elaborate: { ...currentMeeting.elaborate, description: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                    />
                    <input
                      type="text"
                      value={currentMeeting.elaborate.taskDetails}
                      onChange={(e) =>
                        updateMeeting({
                          elaborate: { ...currentMeeting.elaborate, taskDetails: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                      placeholder="Detail Tugas..."
                    />
                  </div>

                  {/* 6. Evaluate */}
                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase">
                        Evaluate ({currentMeeting.evaluate.duration})
                      </span>
                      <span className="text-[11px] text-slate-500">Exit Ticket & Refleksi Cepat</span>
                    </div>
                    <textarea
                      rows={2}
                      value={currentMeeting.evaluate.description}
                      onChange={(e) =>
                        updateMeeting({
                          evaluate: { ...currentMeeting.evaluate, description: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white"
                    />
                    <input
                      type="text"
                      value={currentMeeting.evaluate.exitTicketPrompt}
                      onChange={(e) =>
                        updateMeeting({
                          evaluate: { ...currentMeeting.evaluate, exitTicketPrompt: e.target.value }
                        })
                      }
                      className="w-full text-xs p-2 border border-slate-300 rounded-md bg-white font-semibold text-rose-700"
                      placeholder="Pertanyaan Exit Ticket..."
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ============================================================== */}
        {/* 6. SUMBER BELAJAR, ASESMEN & TAUTAN GURU */}
        {/* ============================================================== */}
        {activeSubTab === 'resources' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Sumber Belajar, Asesmen & Tautan Mandiri Guru
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Masukkan tautan materi tayang, tautan LKPD siswa, tugas rumah (PR konsolidasi), serta pertanyaan refleksi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  URL Sumber Belajar Guru (Teacher Resources URL)
                </label>
                <input
                  type="url"
                  value={lessonPlan.teacherResourceUrl}
                  onChange={(e) => updateField('teacherResourceUrl', e.target.value)}
                  placeholder="https://drive.google.com/... atau tautan slide materi"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  URL Aktivitas / LKPD Siswa (Student Worksheets URL)
                </label>
                <input
                  type="url"
                  value={lessonPlan.studentWorksheetUrl}
                  onChange={(e) => updateField('studentWorksheetUrl', e.target.value)}
                  placeholder="https://... tautan LKPD interaktif"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Catatan Pedagogis / Gagasan Pembelajaran Mandiri Guru
                </label>
                <textarea
                  rows={2}
                  value={lessonPlan.teacherPedagogicalNotes}
                  onChange={(e) => updateField('teacherPedagogicalNotes', e.target.value)}
                  placeholder="Catatan metode pengajaran, contoh soal mandiri, atau penekanan adab..."
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Asesmen Formatif & Latihan
                </label>
                <textarea
                  rows={2}
                  value={lessonPlan.formativeAssessment}
                  onChange={(e) => updateField('formativeAssessment', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  PR / Tugas Konsolidasi Sesi Berikutnya
                </label>
                <textarea
                  rows={2}
                  value={lessonPlan.homeworkConsolidation}
                  onChange={(e) => updateField('homeworkConsolidation', e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Reflection Questions */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-xs font-bold text-slate-900 uppercase">
                Pertanyaan Refleksi Pasca Pembelajaran
              </span>
              <div className="space-y-2">
                {lessonPlan.reflectionQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{idx + 1}.</span>
                    <input
                      type="text"
                      value={q}
                      onChange={(e) => {
                        const updated = [...lessonPlan.reflectionQuestions];
                        updated[idx] = e.target.value;
                        updateField('reflectionQuestions', updated);
                      }}
                      className="w-full text-xs px-3 py-1.5 border border-slate-300 rounded-md bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* 7. KUSTOMISASI WARNA & TANDA TANGAN */}
        {/* ============================================================== */}
        {activeSubTab === 'theme' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Penyesuaian Warna Dokumen & Tanda Tangan Digital
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pilih gradasi warna judul/tabel, warna bilah subjudul, serta bubuhkan tanda tangan digital para pihak pengesah.
              </p>
            </div>

            {/* Color Presets */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 block">
                Tema Warna Presets:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESET_COLOR_THEMES.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => {
                      updateField('headerGradientStart', theme.headerStart);
                      updateField('headerGradientEnd', theme.headerEnd);
                      updateField('sectionBarColor', theme.sectionBar);
                      updateField('accentTextColor', theme.accentText);
                    }}
                    className="p-3 rounded-xl border border-slate-200 hover:border-slate-400 text-left transition-all bg-white"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.headerStart }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.sectionBar }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 block truncate">
                      {theme.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Warna Header (Start)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={lessonPlan.headerGradientStart}
                    onChange={(e) => updateField('headerGradientStart', e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={lessonPlan.headerGradientStart}
                    onChange={(e) => updateField('headerGradientStart', e.target.value)}
                    className="w-24 text-xs px-2 py-1 border border-slate-300 rounded font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Warna Header (End)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={lessonPlan.headerGradientEnd}
                    onChange={(e) => updateField('headerGradientEnd', e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={lessonPlan.headerGradientEnd}
                    onChange={(e) => updateField('headerGradientEnd', e.target.value)}
                    className="w-24 text-xs px-2 py-1 border border-slate-300 rounded font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Warna Bilah Subjudul (Section Bar)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={lessonPlan.sectionBarColor}
                    onChange={(e) => updateField('sectionBarColor', e.target.value)}
                    className="w-8 h-8 rounded border border-slate-300 cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={lessonPlan.sectionBarColor}
                    onChange={(e) => updateField('sectionBarColor', e.target.value)}
                    className="w-24 text-xs px-2 py-1 border border-slate-300 rounded font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Signatures & Approvals */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Lembar Tanda Tangan & Pengesahan Digital
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Guru Pengampu */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Guru Pengampu PAI</span>
                    <p className="text-[11px] text-slate-500 truncate">{lessonPlan.teacherName || 'Guru PAI'}</p>
                  </div>

                  <div className="h-28 border border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50 relative overflow-hidden">
                    {lessonPlan.teacherSignature ? (
                      <img
                        src={lessonPlan.teacherSignature}
                        alt="Tanda Tangan Guru"
                        className="max-h-full max-w-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-xs text-slate-400 italic">Belum ada tanda tangan</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSigModalType('teacher')}
                      className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md"
                    >
                      <PenTool className="w-3.5 h-3.5" />
                      <span>{lessonPlan.teacherSignature ? 'Ubah' : 'Bubuhkan Tanda Tangan'}</span>
                    </button>
                    {lessonPlan.teacherSignature && (
                      <button
                        onClick={() => updateField('teacherSignature', '')}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                        title="Hapus tanda tangan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. HoD */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Ketua Departemen / HoD</span>
                    <p className="text-[11px] text-slate-500 truncate">{lessonPlan.hodName || 'Koordinator PAI'}</p>
                  </div>

                  <div className="h-28 border border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50 relative overflow-hidden">
                    {lessonPlan.hodSignature ? (
                      <img
                        src={lessonPlan.hodSignature}
                        alt="Tanda Tangan HoD"
                        className="max-h-full max-w-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-xs text-slate-400 italic">Belum ada tanda tangan</span>
                    )}
                  </div>

                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lessonPlan.hodApproved}
                      onChange={(e) => updateField('hodApproved', e.target.checked)}
                      className="rounded text-emerald-700 focus:ring-emerald-500"
                    />
                    <span>Centang Persetujuan HoD</span>
                  </label>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSigModalType('hod')}
                      className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md"
                    >
                      <PenTool className="w-3.5 h-3.5" />
                      <span>{lessonPlan.hodSignature ? 'Ubah' : 'Bubuhkan Tanda Tangan'}</span>
                    </button>
                    {lessonPlan.hodSignature && (
                      <button
                        onClick={() => updateField('hodSignature', '')}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 3. Kepala Sekolah */}
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                  <div className="text-center pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-800">Kepala Sekolah</span>
                    <p className="text-[11px] text-slate-500 truncate">{lessonPlan.principalName}</p>
                  </div>

                  <div className="h-28 border border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50 relative overflow-hidden">
                    {lessonPlan.principalSignature ? (
                      <img
                        src={lessonPlan.principalSignature}
                        alt="Tanda Tangan Kepala Sekolah"
                        className="max-h-full max-w-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-xs text-slate-400 italic">Belum ada tanda tangan</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={lessonPlan.principalApproved}
                        onChange={(e) => updateField('principalApproved', e.target.checked)}
                        className="rounded text-emerald-700 focus:ring-emerald-500"
                      />
                      <span>Centang Pengesahan Kepala Sekolah</span>
                    </label>
                    <input
                      type="text"
                      value={lessonPlan.approvalDate}
                      onChange={(e) => updateField('approvalDate', e.target.value)}
                      placeholder="Tanggal pengesahan"
                      className="w-full text-xs px-2 py-1 border border-slate-300 rounded text-slate-600"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSigModalType('principal')}
                      className="flex-1 flex items-center justify-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md"
                    >
                      <PenTool className="w-3.5 h-3.5" />
                      <span>{lessonPlan.principalSignature ? 'Ubah' : 'Bubuhkan Tanda Tangan'}</span>
                    </button>
                    {lessonPlan.principalSignature && (
                      <button
                        onClick={() => updateField('principalSignature', '')}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Signature Modal */}
      <SignaturePadModal
        isOpen={sigModalType !== null}
        onClose={() => setSigModalType(null)}
        title={`Tanda Tangan ${
          sigModalType === 'teacher'
            ? 'Guru Pengampu'
            : sigModalType === 'hod'
            ? 'Ketua Departemen (HoD)'
            : 'Kepala Sekolah'
        }`}
        onSave={(dataUrl) => {
          if (sigModalType === 'teacher') updateField('teacherSignature', dataUrl);
          if (sigModalType === 'hod') updateField('hodSignature', dataUrl);
          if (sigModalType === 'principal') updateField('principalSignature', dataUrl);
        }}
      />
    </div>
  );
};
