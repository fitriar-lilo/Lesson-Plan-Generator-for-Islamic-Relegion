/**
 * Type definitions for Sekolah Semesta PAI Lesson Plan Generator
 */

export type YearGroup = 'Year 10' | 'Year 11' | 'Year 12';

export interface LearningObjective {
  id: string;
  text: string;
}

export interface SubtopicItem {
  id: string;
  title: string;
  objectives: LearningObjective[];
  defaultWalt?: string[];
  defaultWilf?: string[];
  defaultSlo?: string[];
  clilTerms?: { term: string; arabic?: string; definition: string }[];
  ealVocabulary?: { term: string; arabic: string; indonesian: string; hint: string }[];
  struggledScaffold?: { title: string; strategies: string[]; scaffoldGuidance: string };
  ealSupport?: { title: string; visualSupport: string; starterPrompts: string[] };
  extensionChallenge?: { title: string; challengeTask: string; realWorldContext: string };
  default5E?: {
    starterStimulus: string;
    engage: string;
    explore: string;
    explain: string;
    elaborate: string;
    evaluate: string;
  };
}

export interface TopicItem {
  id: string;
  chapterNumber: number | string;
  title: string;
  yearGroup: YearGroup;
  subtopics: SubtopicItem[];
}

export interface MeetingPlan5E {
  meetingNumber: number;
  topicTitle: string;
  subtopicTitle: string;
  date: string;
  duration: string;
  starterStimulus: string;
  engage: {
    duration: string;
    description: string;
    diagnosticWarmup: string;
  };
  explore: {
    duration: string;
    description: string;
    guidedInquiry: string;
  };
  explain: {
    duration: string;
    description: string;
    keyConcepts: string;
    dalilText: string;
  };
  elaborate: {
    duration: string;
    description: string;
    taskDetails: string;
  };
  evaluate: {
    duration: string;
    description: string;
    exitTicketPrompt: string;
  };
}

export interface ClilTerm {
  term: string;
  arabic?: string;
  definition: string;
}

export interface EalVocab {
  term: string;
  arabic: string;
  indonesian: string;
  hint: string;
}

export interface DifferentiationPlan {
  struggled: {
    title: string;
    strategies: string[];
    scaffoldGuidance: string;
  };
  eal: {
    title: string;
    visualSupport: string;
    starterPrompts: string[];
  };
  extension: {
    title: string;
    challengeTask: string;
    realWorldContext: string;
  };
}

export interface ResourceItem {
  name: string;
  type: 'Buku Teks' | 'Al-Qur\'an & Hadis' | 'Slide / Presentasi' | 'LKPD Digital' | 'Media Interaktif' | 'Lainnya';
  urlOrRef: string;
  note: string;
}

export interface LessonPlanState {
  // Metadata Dasar
  schoolName: string;
  subjectName: string;
  teacherName: string;
  principalName: string;
  hodName: string;
  yearGroup: YearGroup;
  durationPerMeeting: string;
  numberOfMeetings: number;
  dateRange: string;
  academicYear: string;
  semester: string;
  unitTitle: string;

  // Cambridge Assessment Objectives (Adapted for PAI)
  cambridgeAO1: string; // Knowledge, Understanding, Scriptural Text (Dalil)
  cambridgeAO2: string; // Contextual Application, Moral Reasoning & Solution-Finding

  // Selections
  selectedTopicIds: string[];
  selectedSubtopicIds: string[];
  selectedObjectiveIds: string[];

  // WALT, WILF, SLO
  waltItems: string[];
  wilfItems: string[];
  sloItems: string[];
  clilTerms: ClilTerm[];
  ealVocabulary: EalVocab[];

  // Diferensiasi
  differentiation: DifferentiationPlan;

  // 5E Meeting Plans
  meetings: MeetingPlan5E[];

  // Asesmen & Refleksi
  formativeAssessment: string;
  homeworkConsolidation: string;
  reflectionQuestions: string[];

  // Sumber Belajar
  resources: ResourceItem[];
  teacherResourceUrl: string;
  studentWorksheetUrl: string;
  teacherPedagogicalNotes: string;
  teacherContextualQuestions: string;

  // Pengesahan & Tanda Tangan
  teacherSignature: string; // Base64 Data URL
  hodSignature: string; // Base64 Data URL
  principalSignature: string; // Base64 Data URL
  hodApproved: boolean;
  principalApproved: boolean;
  approvalDate: string;

  // Styling & Theme
  headerGradientStart: string;
  headerGradientEnd: string;
  sectionBarColor: string;
  accentTextColor: string;
}

export interface ExportStatus {
  isExporting: boolean;
  format: 'pdf' | 'docx' | null;
  message: string;
  progressPercent?: number;
  error?: string | null;
}
