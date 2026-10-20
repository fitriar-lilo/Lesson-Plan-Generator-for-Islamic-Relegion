import React, { useState } from 'react';
import { Header } from './components/Header';
import { ConfigurationPanel } from './components/ConfigurationPanel';
import { LessonPlanPreview } from './components/LessonPlanPreview';
import { GuideModal } from './components/GuideModal';
import { LessonPlanState, ExportStatus, YearGroup, MeetingPlan5E } from './types/lessonPlan';
import { CURRICULUM_DATA, PRESET_COLOR_THEMES } from './data/curriculumData';
import { exportLessonPlanToPdf } from './utils/pdfExport';
import { exportLessonPlanToDocx } from './utils/docxExport';
import { Sparkles, Eye, Settings, FileCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'config' | 'preview' | 'guide'>('config');

  // Initial Curriculum Setup (Year 10 Bab 1 default)
  const defaultYear: YearGroup = 'Year 10';
  const defaultTopic = CURRICULUM_DATA.find((t) => t.id === 'y10-bab1') || CURRICULUM_DATA[0];
  const defaultSubtopic = defaultTopic.subtopics[0];

  // In-memory state (No localStorage/sessionStorage)
  const [lessonPlan, setLessonPlan] = useState<LessonPlanState>(() => {
    const preset = PRESET_COLOR_THEMES[0];
    return {
      schoolName: 'Sekolah Semesta Bilingual Boarding School',
      subjectName: 'Pendidikan Agama Islam dan Budi Pekerti',
      teacherName: '',
      principalName: 'Ahmad Nurani, S.T., M.Pd.',
      hodName: 'Drs. H. M. Arifin, M.Pd.I',
      yearGroup: defaultYear,
      durationPerMeeting: '80 menit (2 JP / Double Period)',
      numberOfMeetings: 2,
      dateRange: '19 - 30 Oktober 2026',
      academicYear: '2026/2027',
      semester: 'Semester 1 (Ganjil)',
      unitTitle: `${defaultTopic.chapterNumber} – ${defaultTopic.title}`,

      cambridgeAO1:
        'Peserta didik mampu memahami hakikat, dalil Al-Qur\'an dan hadis shahih secara tartil, serta kaidah-kaidah syariat Islam yang melandasinya.',
      cambridgeAO2:
        'Peserta didik mampu menganalisis permasalahan kontemporer, mengontekstualisasikan ajaran Islam dalam tindakan nyata, dan menemukan solusi berbasis akhlak mulia.',

      selectedTopicIds: [defaultTopic.id],
      selectedSubtopicIds: [defaultSubtopic.id],
      selectedObjectiveIds: defaultSubtopic.objectives.map((o) => o.id),

      waltItems: defaultSubtopic.defaultWalt ? [...defaultSubtopic.defaultWalt] : [],
      wilfItems: defaultSubtopic.defaultWilf ? [...defaultSubtopic.defaultWilf] : [],
      sloItems: defaultSubtopic.defaultSlo ? [...defaultSubtopic.defaultSlo] : [],
      clilTerms: defaultSubtopic.clilTerms ? [...defaultSubtopic.clilTerms] : [],
      ealVocabulary: defaultSubtopic.ealVocabulary ? [...defaultSubtopic.ealVocabulary] : [],

      differentiation: {
        struggled: defaultSubtopic.struggledScaffold
          ? { ...defaultSubtopic.struggledScaffold }
          : { title: 'Bimbingan Bertahap', strategies: ['Panduan kartu tugas'], scaffoldGuidance: 'Fokus pada konsep inti.' },
        eal: defaultSubtopic.ealSupport
          ? { ...defaultSubtopic.ealSupport }
          : { title: 'Dukungan Bahasa', visualSupport: 'Kartu visual', starterPrompts: ['Konsep ini bermakna...'] },
        extension: defaultSubtopic.extensionChallenge
          ? { ...defaultSubtopic.extensionChallenge }
          : { title: 'Tugas Pengayaan', challengeTask: 'Studi kasus lanjutan', realWorldContext: 'Aplikasi nyata di masyarakat.' }
      },

      meetings: [
        {
          meetingNumber: 1,
          topicTitle: defaultTopic.title,
          subtopicTitle: defaultSubtopic.title,
          date: 'Pekan I',
          duration: '80 menit (2 JP)',
          starterStimulus:
            defaultSubtopic.default5E?.starterStimulus ||
            'Audio murottal syahdu dan pemantik kontekstual mengenai pentingnya berlomba dalam kebaikan.',
          engage: {
            duration: '10 menit',
            description:
              defaultSubtopic.default5E?.engage ||
              'Pemanasan diagnostik mengenai materi, menampilkan WALT di papan tulis.',
            diagnosticWarmup: 'Siswa menemukan tanda wakaf dan makna fastabiqul khairat.'
          },
          explore: {
            duration: '20 menit',
            description:
              defaultSubtopic.default5E?.explore ||
              'Penemuan terbimbing (guided inquiry) membedah hukum bacaan wakaf dan washal.',
            guidedInquiry: 'Membaca secara berpasangan dan mengoreksi waqaf mamnu\'.'
          },
          explain: {
            duration: '15 menit',
            description:
              defaultSubtopic.default5E?.explain ||
              'Penjelasan eksplisit guru mengenai ketentuan tajwid dan asbabun nuzul ayat.',
            keyConcepts: 'Hukum wakaf lazim, jaiz, washal, dan urgensi tartil.',
            dalilText: 'Q.S. al-Mā’idah/5:48 dan hadis riwayat Bukhari.'
          },
          elaborate: {
            duration: '20 menit',
            description:
              defaultSubtopic.default5E?.elaborate ||
              'Latihan mandiri menyetorkan hafalan bait ayat dan menyusun peta konsep.',
            taskDetails: 'Mengerjakan LKPD bertahap identifikasi waqaf dan terjemah kata.'
          },
          evaluate: {
            duration: '15 menit',
            description:
              defaultSubtopic.default5E?.evaluate ||
              'Tiket keluar (exit ticket) dan evaluasi pemahaman singkat yang selaras dengan SLO.',
            exitTicketPrompt: 'Tuliskan makna simbol tanda wakaf lazim (م) dan contohnya.'
          }
        },
        {
          meetingNumber: 2,
          topicTitle: defaultTopic.title,
          subtopicTitle: 'Kandungan Nilai Fastabiqul Khairat & Etos Prestasi',
          date: 'Pekan II',
          duration: '80 menit (2 JP)',
          starterStimulus:
            'Tayangan profil ilmuwan muslim dunia yang berprestasi dan mengabdikan karyanya bagi kemanusiaan.',
          engage: {
            duration: '10 menit',
            description: 'Refleksi komparatif: Mengapa kompetisi sering disalahartikan sebagai saling menjatuhkan?',
            diagnosticWarmup: 'Siswa membedakan kompetisi positif vs hasad/iri dengki.'
          },
          explore: {
            duration: '20 menit',
            description: 'Studi kasus kelompok: Menganalisis fenomena flexing di medsos vs keikhlasan beramal.',
            guidedInquiry: 'Diskusi kelompok merumuskan solusi atas persaingan tidak sehat di sekolah.'
          },
          explain: {
            duration: '15 menit',
            description: 'Penjelasan guru mengenai pesan universal Al-Qur\'an tentang keragaman manusia.',
            keyConcepts: 'Konsep syir\'atan wa minhaja dan keutamaan bersegera berbuat kebaikan.',
            dalilText: 'Q.S. al-Baqarah/2:148: Fastabiqul khairat aina ma takunu ya\'ti bikumullah.'
          },
          elaborate: {
            duration: '20 menit',
            description: 'Menyusun aksi nyata "My Fastabiqul Khairat Plan" untuk semester berjalan.',
            taskDetails: 'Penyusunan target ibadah dan prestasi akademik terukur sepekan ke depan.'
          },
          evaluate: {
            duration: '15 menit',
            description: 'Evaluasi formatif akhir bab dan refleksi kebermaknaan pembelajaran.',
            exitTicketPrompt: 'Tuliskan 1 langkah nyata yang akan kamu mulai esok hari untuk berlomba dalam kebaikan.'
          }
        }
      ],

      formativeAssessment:
        'Penilaian autentik melalui lembar observasi tilawah dan tajwid, penilaian antarteman (peer-assessment), serta portofolio lembar kerja siswa.',
      homeworkConsolidation:
        'Menuntaskan hafalan Q.S. al-Mā’idah/5:48 dan mencatat 3 bentuk amal kebaikan yang dilakukan di lingkungan asrama/rumah.',
      reflectionQuestions: [
        'Apakah seluruh siswa telah mampu mengidentifikasi hukum bacaan wakaf dan washal dengan tepat?',
        'Bagaimana efektivitas scaffolding yang diberikan kepada siswa yang masih terbata-bata dalam membaca Al-Qur\'an?',
        'Apakah alokasi waktu 80 menit pada model 5E berjalan proporsional dan mencapai SLO yang ditargetkan?'
      ],

      resources: [
        {
          name: 'Buku Guru & Siswa PAI SMA Kelas X Kemendikbudristek',
          type: 'Buku Teks',
          urlOrRef: 'Pusat Kurikulum dan Perbukuan',
          note: 'Bab 1 Halaman 1-28'
        },
        {
          name: 'Mushaf Al-Qur\'an dan Terjemah Standar Kemenag RI',
          type: 'Al-Qur\'an & Hadis',
          urlOrRef: 'Lajnah Pentashihan Mushaf Al-Qur\'an',
          note: 'Kajian Surah Al-Maidah: 48'
        },
        {
          name: 'Audio Murottal Syaikh Misyari Rasyid Al-Afasy',
          type: 'Media Interaktif',
          urlOrRef: 'Digital Repository PAI Semesta',
          note: 'Panduan tartil dan hukum waqaf'
        }
      ],
      teacherResourceUrl: 'https://drive.google.com/drive/folders/semesta-pai-grade10',
      studentWorksheetUrl: 'https://classroom.google.com/c/semesta-pai-grade10',
      teacherPedagogicalNotes:
        'Terapkan metode talaqqi dan musyafahah secara berulang. Tekankan adab terhadap Al-Qur\'an sebelum memulai sesi membaca.',
      teacherContextualQuestions:
        'Bagaimana cara memotivasi diri agar tidak merasa minder saat melihat teman lain lebih cepat berprestasi?',

      teacherSignature: '',
      hodSignature: '',
      principalSignature: '',
      hodApproved: true,
      principalApproved: true,
      approvalDate: '20 Oktober 2026',

      headerGradientStart: preset.headerStart,
      headerGradientEnd: preset.headerEnd,
      sectionBarColor: preset.sectionBar,
      accentTextColor: preset.accentText
    };
  });

  const [exportStatus, setExportStatus] = useState<ExportStatus>({
    isExporting: false,
    format: null,
    message: ''
  });

  // Intelligent Auto-Generation from chosen topics and subtopics
  const handleAutoGenerate = () => {
    const selectedTopics = CURRICULUM_DATA.filter(
      (t) => t.yearGroup === lessonPlan.yearGroup && lessonPlan.selectedTopicIds.includes(t.id)
    );

    const selectedSubtopics: any[] = [];
    selectedTopics.forEach((t) => {
      t.subtopics.forEach((s) => {
        if (lessonPlan.selectedSubtopicIds.includes(s.id)) {
          selectedSubtopics.push({ ...s, parentTopicTitle: t.title });
        }
      });
    });

    if (selectedSubtopics.length === 0 && selectedTopics.length > 0) {
      // Pick first subtopic of each topic
      selectedTopics.forEach((t) => {
        if (t.subtopics[0]) selectedSubtopics.push({ ...t.subtopics[0], parentTopicTitle: t.title });
      });
    }

    if (selectedSubtopics.length === 0) {
      alert('Pilihlah minimal 1 bab atau subtopik terlebih dahulu pada tab "Topik & Tujuan PAI".');
      return;
    }

    // Merge WALT, WILF, SLO, CLIL, EAL
    const mergedWalt: string[] = [];
    const mergedWilf: string[] = [];
    const mergedSlo: string[] = [];
    const mergedClil: any[] = [];
    const mergedEal: any[] = [];

    selectedSubtopics.forEach((sub) => {
      if (sub.defaultWalt) mergedWalt.push(...sub.defaultWalt);
      if (sub.defaultWilf) mergedWilf.push(...sub.defaultWilf);
      if (sub.defaultSlo) mergedSlo.push(...sub.defaultSlo);
      if (sub.clilTerms) mergedClil.push(...sub.clilTerms);
      if (sub.ealVocabulary) mergedEal.push(...sub.ealVocabulary);
    });

    // Deduplicate
    const finalWalt = Array.from(new Set(mergedWalt)).slice(0, 6);
    const finalWilf = Array.from(new Set(mergedWilf)).slice(0, 6);
    const finalSlo = Array.from(new Set(mergedSlo)).slice(0, 4);

    const uniqueClilMap = new Map();
    mergedClil.forEach((c) => uniqueClilMap.set(c.term, c));
    const finalClil = Array.from(uniqueClilMap.values()).slice(0, 6);

    const uniqueEalMap = new Map();
    mergedEal.forEach((e) => uniqueEalMap.set(e.term, e));
    const finalEal = Array.from(uniqueEalMap.values()).slice(0, 6);

    // Differentiation based on primary subtopic
    const primeSub = selectedSubtopics[0];
    const newDiff = {
      struggled: primeSub?.struggledScaffold
        ? { ...primeSub.struggledScaffold }
        : lessonPlan.differentiation.struggled,
      eal: primeSub?.ealSupport ? { ...primeSub.ealSupport } : lessonPlan.differentiation.eal,
      extension: primeSub?.extensionChallenge
        ? { ...primeSub.extensionChallenge }
        : lessonPlan.differentiation.extension
    };

    // Build 5E meetings
    const numMeetings = lessonPlan.numberOfMeetings;
    const generatedMeetings: MeetingPlan5E[] = [];
    for (let i = 1; i <= numMeetings; i++) {
      const sub = selectedSubtopics[(i - 1) % selectedSubtopics.length];
      const default5E = sub.default5E;

      generatedMeetings.push({
        meetingNumber: i,
        topicTitle: sub.parentTopicTitle || lessonPlan.unitTitle,
        subtopicTitle: sub.title || `Pertemuan ke-${i}`,
        date: `Pertemuan ${i}`,
        duration: lessonPlan.durationPerMeeting,
        starterStimulus:
          default5E?.starterStimulus ||
          'Audio tilawah ayat Al-Qur\'an, tayangan video studi kasus, atau pertanyaan pemantik kontekstual.',
        engage: {
          duration: '10 menit',
          description:
            default5E?.engage ||
            'Pemanasan diagnostik mengenai materi prasyarat dan memaparkan WALT di papan kelas.',
          diagnosticWarmup: `Kuis pemahaman cepat dan apersepsi materi ${sub.title.slice(0, 35)}...`
        },
        explore: {
          duration: '20 menit',
          description:
            default5E?.explore ||
            'Penemuan terbimbing (guided inquiry) dan diskusi kelompok membedah ayat, hadis, atau studi kasus.',
          guidedInquiry: 'Lembar observasi kelompok menelaah kaidah syariat dan hikmah amaliah.'
        },
        explain: {
          duration: '15 menit',
          description:
            default5E?.explain ||
            'Penjelasan konsep kunci oleh guru, konfirmasi kaidah fikih/akhlak, dan penegasan dalil nash.',
          keyConcepts: `Hakikat ${sub.title.slice(0, 40)}, rukun dan konsekuensi syar'i.`,
          dalilText: 'Al-Qur\'an dan Sunnah shahihah yang menjadi pijakan hukum.'
        },
        elaborate: {
          duration: '20 menit',
          description:
            default5E?.elaborate ||
            'Latihan mandiri atau kolaborasi terstruktur dengan LKPD bertahap (scaffolded worksheet).',
          taskDetails: 'Mengerjakan studi kasus terstruktur dan merumuskan solusi pemecahan masalah.'
        },
        evaluate: {
          duration: '15 menit',
          description:
            default5E?.evaluate ||
            'Tiket keluar (exit ticket) dan evaluasi pemahaman singkat yang selaras dengan SLO.',
          exitTicketPrompt: `Tuliskan 1 konsep paling utama yang kamu pelajari mengenai ${sub.title.slice(0, 30)}.`
        }
      });
    }

    setLessonPlan((prev) => ({
      ...prev,
      waltItems: finalWalt.length > 0 ? finalWalt : prev.waltItems,
      wilfItems: finalWilf.length > 0 ? finalWilf : prev.wilfItems,
      sloItems: finalSlo.length > 0 ? finalSlo : prev.sloItems,
      clilTerms: finalClil.length > 0 ? finalClil : prev.clilTerms,
      ealVocabulary: finalEal.length > 0 ? finalEal : prev.ealVocabulary,
      differentiation: newDiff,
      meetings: generatedMeetings
    }));

    setExportStatus({
      isExporting: false,
      format: null,
      message: 'RPP Berhasil di-generate otomatis sesuai kurikulum Semesta!'
    });

    setTimeout(() => {
      setExportStatus((prev) => ({ ...prev, message: '' }));
    }, 4000);
  };

  // PDF Export Trigger
  const handleExportPdf = async () => {
    // If not preview tab, switch to preview tab first so DOM is mounted
    if (activeTab !== 'preview') {
      setActiveTab('preview');
      await new Promise((r) => setTimeout(r, 400));
    }

    const docEl = document.getElementById('semesta-lesson-plan-document');
    if (!docEl) {
      alert('Elemen dokumen tidak ditemukan.');
      return;
    }

    const filename = `RPP_${lessonPlan.subjectName.replace(/\s+/g, '_')}_${lessonPlan.yearGroup.replace(
      /\s+/g,
      '_'
    )}_${lessonPlan.unitTitle.slice(0, 25).replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;

    await exportLessonPlanToPdf({
      containerElement: docEl,
      filename,
      onStatusChange: (status) => {
        setExportStatus({
          isExporting: status.isExporting,
          format: 'pdf',
          message: status.message,
          progressPercent: status.progressPercent,
          error: status.error
        });
      }
    });
  };

  // DOCX Export Trigger
  const handleExportDocx = async () => {
    const filename = `RPP_${lessonPlan.subjectName.replace(/\s+/g, '_')}_${lessonPlan.yearGroup.replace(
      /\s+/g,
      '_'
    )}_${lessonPlan.unitTitle.slice(0, 25).replace(/[^a-zA-Z0-9]/g, '_')}.docx`;

    await exportLessonPlanToDocx({
      lessonPlan,
      filename,
      onStatusChange: (status) => {
        setExportStatus({
          isExporting: status.isExporting,
          format: 'docx',
          message: status.message,
          progressPercent: status.progressPercent,
          error: status.error
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onExportPdf={handleExportPdf}
        onExportDocx={handleExportDocx}
        exportStatus={exportStatus}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Quick Mode Switcher Banner (Below Header) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-xs font-semibold text-slate-800">
              {lessonPlan.yearGroup} · {lessonPlan.unitTitle || 'Pendidikan Agama Islam'}
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs text-slate-500">
              {lessonPlan.numberOfMeetings} Pertemuan ({lessonPlan.durationPerMeeting})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('config')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'config'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Konfigurasi & Edit</span>
            </button>

            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'preview'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Pratinjau A4 Dokumen</span>
            </button>

            <button
              onClick={handleAutoGenerate}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
              title="Perbarui otomatis WALT, WILF, SLO & 5E dari bab terpilih"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Generate Otomatis</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Configuration */}
        {activeTab === 'config' && (
          <div className="space-y-6">
            <ConfigurationPanel
              lessonPlan={lessonPlan}
              setLessonPlan={setLessonPlan}
              onAutoGenerate={handleAutoGenerate}
              onPreviewClick={() => setActiveTab('preview')}
            />
          </div>
        )}

        {/* Tab 2: Document Preview */}
        {activeTab === 'preview' && (
          <LessonPlanPreview
            lessonPlan={lessonPlan}
            setLessonPlan={setLessonPlan}
            onExportPdf={handleExportPdf}
            onExportDocx={handleExportDocx}
            exportStatus={exportStatus}
          />
        )}

        {/* Tab 3: Official Template Guide */}
        {activeTab === 'guide' && <GuideModal />}
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <p>
          Sekolah Semesta Bilingual Boarding School Semarang · Rencana Pelaksanaan Pembelajaran (Lesson Plan) PAI SMA
        </p>
      </footer>
    </div>
  );
}
