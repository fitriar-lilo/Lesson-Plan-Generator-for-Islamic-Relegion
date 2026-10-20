import React, { useRef, useState } from 'react';
import { LessonPlanState, ExportStatus } from '../types/lessonPlan';
import {
  Download,
  Printer,
  Edit3,
  CheckCircle2,
  AlertCircle,
  FileText,
  School,
  ExternalLink
} from 'lucide-react';

interface LessonPlanPreviewProps {
  lessonPlan: LessonPlanState;
  setLessonPlan: React.Dispatch<React.SetStateAction<LessonPlanState>>;
  onExportPdf: () => void;
  onExportDocx: () => void;
  exportStatus: ExportStatus;
}

export const LessonPlanPreview: React.FC<LessonPlanPreviewProps> = ({
  lessonPlan,
  setLessonPlan,
  onExportPdf,
  onExportDocx,
  exportStatus
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInlineEditMode, setIsInlineEditMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      {/* Action Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
            <School className="w-4 h-4 text-emerald-700" />
            <span>Format Resmi Sekolah Semesta</span>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Arial 11 pt · Spasi 1.15 · Margin 1,5 cm
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Inline Edit Toggle */}
          <button
            type="button"
            onClick={() => setIsInlineEditMode(!isInlineEditMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
              isInlineEditMode
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isInlineEditMode ? 'Sunting Langsung: Aktif' : 'Sunting Langsung'}</span>
          </button>

          {/* Print */}
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak</span>
          </button>

          {/* Export DOCX */}
          <button
            type="button"
            onClick={onExportDocx}
            disabled={exportStatus.isExporting}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor DOCX</span>
          </button>

          {/* Export PDF */}
          <button
            type="button"
            onClick={onExportPdf}
            disabled={exportStatus.isExporting}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ekspor PDF</span>
          </button>
        </div>
      </div>

      {/* Export Status Banner */}
      {exportStatus.message && (
        <div
          className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
            exportStatus.error
              ? 'bg-rose-50 border-rose-200 text-rose-800'
              : exportStatus.isExporting
              ? 'bg-blue-50 border-blue-200 text-blue-800 animate-pulse'
              : 'bg-emerald-50 border-emerald-200 text-emerald-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {exportStatus.error ? (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            ) : exportStatus.isExporting ? (
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
            <span className="font-medium">{exportStatus.message}</span>
          </div>

          {exportStatus.progressPercent !== undefined && exportStatus.isExporting && (
            <span className="font-mono font-semibold text-xs text-blue-900">
              {exportStatus.progressPercent}%
            </span>
          )}
        </div>
      )}

      {/* Document Viewport Wrapper */}
      <div className="bg-slate-200/80 p-3 sm:p-6 rounded-2xl overflow-x-auto flex justify-center shadow-inner">
        {/* Printable Paper Canvas: A4 Width (210mm) with 15mm margins on all sides */}
        <div
          ref={containerRef}
          id="semesta-lesson-plan-document"
          contentEditable={isInlineEditMode}
          suppressContentEditableWarning
          className="bg-white text-slate-900 shadow-xl border border-slate-300 w-full max-w-[820px] min-h-[1160px] p-[15mm] text-[11pt] leading-[1.15] font-sans antialiased transition-all selection:bg-emerald-100"
          style={{
            fontFamily: 'Nunito, Arial, sans-serif'
          }}
        >
          {/* ========================================================= */}
          {/* BLOK 1: HEADER & TOP INFORMATION BAR                      */}
          {/* ========================================================= */}
          <div className="lesson-plan-block mb-6 page-break-inside-avoid">
            {/* Header Title Gradient Bar */}
            <div
              className="rounded-t-lg p-4 text-white text-center shadow-xs"
              style={{
                background: `linear-gradient(135deg, ${lessonPlan.headerGradientStart}, ${lessonPlan.headerGradientEnd})`
              }}
            >
              <h1 className="text-xl font-bold tracking-tight uppercase">
                SEKOLAH SEMESTA - LESSON PLAN
              </h1>
              <p className="text-xs text-emerald-100 font-medium mt-0.5">
                Mata Pelajaran: {lessonPlan.subjectName} · Tingkat: {lessonPlan.yearGroup} (SMA)
              </p>
            </div>

            {/* Information Grid Table */}
            <table className="w-full text-[10.5pt] border-collapse border border-slate-300 bg-white">
              <tbody>
                <tr className="border-b border-slate-300">
                  <td className="w-1/4 p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Mata Pelajaran / Unit
                  </td>
                  <td className="w-1/4 p-2.5 border-r border-slate-300">
                    {lessonPlan.subjectName} – {lessonPlan.unitTitle}
                  </td>
                  <td className="w-1/4 p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Tingkat / Tahun
                  </td>
                  <td className="w-1/4 p-2.5">
                    {lessonPlan.yearGroup} · TP {lessonPlan.academicYear} ({lessonPlan.semester})
                  </td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Guru Pengampu PAI
                  </td>
                  <td className="p-2.5 border-r border-slate-300 font-medium">
                    {lessonPlan.teacherName || 'Guru PAI'}
                  </td>
                  <td className="p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Alokasi & Pertemuan
                  </td>
                  <td className="p-2.5">
                    {lessonPlan.numberOfMeetings} Pertemuan ({lessonPlan.durationPerMeeting})
                  </td>
                </tr>

                <tr className="border-b border-slate-300">
                  <td className="p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Rentang Waktu / Tanggal
                  </td>
                  <td className="p-2.5 border-r border-slate-300">
                    {lessonPlan.dateRange || '-'}
                  </td>
                  <td className="p-2.5 font-bold bg-slate-100 border-r border-slate-300">
                    Kepala Sekolah
                  </td>
                  <td className="p-2.5 font-medium">
                    {lessonPlan.principalName}
                  </td>
                </tr>

                {/* Cambridge Assessment Objectives */}
                <tr className="bg-slate-50/80">
                  <td
                    colSpan={4}
                    className="p-3 text-[10pt] leading-relaxed"
                  >
                    <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                      <span>Cambridge Assessment Objectives (Adaptasi Mata Pelajaran PAI):</span>
                    </div>
                    <div className="space-y-1 pl-2">
                      <p>
                        <strong className="text-slate-800">AO1 (Knowledge & Understanding):</strong>{' '}
                        {lessonPlan.cambridgeAO1}
                      </p>
                      <p>
                        <strong className="text-slate-800">AO2 (Application & Problem Solving):</strong>{' '}
                        {lessonPlan.cambridgeAO2}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 2: TABEL TERPADU WALT / WILF / SLO (1 TABEL 3 KOLOM) */}
          {/* ========================================================= */}
          <div className="lesson-plan-block mb-6 page-break-inside-avoid">
            {/* Section Banner */}
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              1. Tabel Terpadu WALT, WILF, SLO & Sasaran Bahasa (CLIL / EAL)
            </div>

            <table className="w-full text-[10.5pt] border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-left font-bold text-slate-800">
                  <th className="w-1/3 p-2.5 border-r border-slate-300">
                    WALT (We Are Learning To)
                  </th>
                  <th className="w-1/3 p-2.5 border-r border-slate-300">
                    WILF (What I'm Looking For)
                  </th>
                  <th className="w-1/3 p-2.5">
                    SLO & Sasaran Bahasa (CLIL / EAL)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  {/* Kolom 1: WALT */}
                  <td className="p-3 border-r border-slate-300 space-y-2">
                    <ul className="list-decimal pl-4 space-y-1.5 text-slate-800">
                      {lessonPlan.waltItems.map((walt, idx) => (
                        <li key={idx} className="leading-snug">
                          {walt}
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Kolom 2: WILF */}
                  <td className="p-3 border-r border-slate-300 space-y-2">
                    <ul className="list-none space-y-1.5 text-slate-800">
                      {lessonPlan.wilfItems.map((wilf, idx) => (
                        <li key={idx} className="leading-snug flex items-start gap-1.5">
                          <span className="text-emerald-700 font-bold shrink-0">✓</span>
                          <span>{wilf}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Kolom 3: SLO, CLIL, EAL */}
                  <td className="p-3 space-y-3">
                    {/* SLO */}
                    <div>
                      <span className="font-bold text-sky-900 block text-[10pt] uppercase tracking-wide">
                        Student Learning Outcomes (SLO):
                      </span>
                      <ul className="list-disc pl-4 text-slate-800 space-y-1 text-[10pt] mt-0.5">
                        {lessonPlan.sloItems.map((slo, idx) => (
                          <li key={idx} className="leading-snug">
                            {slo}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CLIL / Istilah Kunci */}
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-sky-900 block text-[10pt] uppercase tracking-wide">
                        Istilah Kunci (CLIL):
                      </span>
                      <div className="space-y-1 text-[10pt] mt-0.5">
                        {lessonPlan.clilTerms.map((clil, idx) => (
                          <div key={idx} className="leading-snug">
                            <strong className="text-slate-900">{clil.term}</strong>{' '}
                            {clil.arabic && (
                              <span className="font-serif text-slate-700 font-normal">
                                ({clil.arabic})
                              </span>
                            )}
                            : <span className="text-slate-700">{clil.definition}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* EAL Support */}
                    <div className="pt-2 border-t border-slate-200">
                      <span className="font-bold text-sky-900 block text-[10pt] uppercase tracking-wide">
                        Dukungan EAL (Kosakata Bilingual):
                      </span>
                      <div className="space-y-1 text-[9.5pt] mt-0.5">
                        {lessonPlan.ealVocabulary.map((eal, idx) => (
                          <div key={idx} className="text-slate-700 leading-snug">
                            • <strong className="text-slate-900">{eal.term}</strong> (
                            <span className="font-serif">{eal.arabic}</span>) : {eal.indonesian}{' '}
                            <span className="text-slate-500 italic">[{eal.hint}]</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 3: TABEL DIFERENSIASI PEMBELAJARAN                   */}
          {/* ========================================================= */}
          <div className="lesson-plan-block mb-6 page-break-inside-avoid">
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              2. Tabel Diferensiasi Pembelajaran (Multi-Tier Scaffolding & Extension)
            </div>

            <table className="w-full text-[10pt] border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="border-b border-slate-300 text-left font-bold text-slate-800">
                  <th className="w-1/3 p-2.5 bg-amber-50/80 border-r border-slate-300 text-amber-950">
                    Struggled Scaffolding (Bimbingan Bertahap)
                  </th>
                  <th className="w-1/3 p-2.5 bg-sky-50/80 border-r border-slate-300 text-sky-950">
                    Dukungan Bahasa (EAL Support)
                  </th>
                  <th className="w-1/3 p-2.5 bg-emerald-50/80 text-emerald-950">
                    Tugas Pengayaan (Extension Challenge)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  {/* Struggled */}
                  <td className="p-3 border-r border-slate-300 space-y-2">
                    <strong className="text-slate-900 block font-bold">
                      {lessonPlan.differentiation.struggled.title}
                    </strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      {lessonPlan.differentiation.struggled.strategies.map((s, idx) => (
                        <li key={idx} className="leading-snug">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-amber-50 rounded border border-amber-200 text-amber-900 text-[9.5pt] leading-snug">
                      <strong>Panduan Khusus:</strong> {lessonPlan.differentiation.struggled.scaffoldGuidance}
                    </div>
                  </td>

                  {/* EAL */}
                  <td className="p-3 border-r border-slate-300 space-y-2">
                    <strong className="text-slate-900 block font-bold">
                      {lessonPlan.differentiation.eal.title}
                    </strong>
                    <p className="text-slate-700 leading-snug">
                      <strong>Visual Support:</strong> {lessonPlan.differentiation.eal.visualSupport}
                    </p>
                    <div className="space-y-1">
                      <span className="font-semibold text-slate-800 block text-[9.5pt]">
                        Kalimat Pemantik (Sentence Starters):
                      </span>
                      {lessonPlan.differentiation.eal.starterPrompts.map((p, idx) => (
                        <p key={idx} className="text-slate-600 italic text-[9.5pt] leading-snug">
                          "{p}"
                        </p>
                      ))}
                    </div>
                  </td>

                  {/* Extension */}
                  <td className="p-3 space-y-2">
                    <strong className="text-slate-900 block font-bold">
                      {lessonPlan.differentiation.extension.title}
                    </strong>
                    <p className="text-slate-700 leading-snug">
                      <strong>Tugas Tantangan:</strong> {lessonPlan.differentiation.extension.challengeTask}
                    </p>
                    <div className="p-2 bg-emerald-50 rounded border border-emerald-200 text-emerald-900 text-[9.5pt] leading-snug">
                      <strong>Konteks Nyata:</strong> {lessonPlan.differentiation.extension.realWorldContext}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 4: MODEL PEMBELAJARAN 5E PER PERTEMUAN              */}
          {/* ========================================================= */}
          <div className="space-y-6">
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              3. Rencana Pelaksanaan Model 5E (Per Pertemuan)
            </div>

            {lessonPlan.meetings.map((meeting) => (
              <div
                key={meeting.meetingNumber}
                className="lesson-plan-block border border-slate-300 rounded-lg overflow-hidden bg-white shadow-xs page-break-inside-avoid"
              >
                {/* Meeting Header */}
                <div className="bg-slate-100 p-2.5 border-b border-slate-300 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-emerald-800 block">
                      PERTEMUAN KE-{meeting.meetingNumber} DARI {lessonPlan.numberOfMeetings}
                    </span>
                    <span className="font-semibold text-slate-900 text-sm">
                      {meeting.topicTitle} – {meeting.subtopicTitle}
                    </span>
                  </div>
                  <div className="text-right text-slate-600">
                    <div>{meeting.duration}</div>
                    <div className="text-[10pt] text-slate-500">{meeting.date || lessonPlan.dateRange}</div>
                  </div>
                </div>

                {/* 5E Steps Table */}
                <table className="w-full text-[10pt] border-collapse">
                  <tbody>
                    {/* Starter */}
                    <tr className="border-b border-slate-200">
                      <td className="w-1/4 p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Starter / Stimulus
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug">
                        {meeting.starterStimulus}
                      </td>
                    </tr>

                    {/* Engage */}
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Engage ({meeting.engage.duration})
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug space-y-1">
                        <p>{meeting.engage.description}</p>
                        <p className="text-emerald-800 font-medium">
                          <strong>Pemanasan Diagnostik:</strong> {meeting.engage.diagnosticWarmup}
                        </p>
                      </td>
                    </tr>

                    {/* Explore */}
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Explore ({meeting.explore.duration})
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug space-y-1">
                        <p>{meeting.explore.description}</p>
                        <p className="text-slate-600 italic">
                          <strong>Guided Inquiry:</strong> {meeting.explore.guidedInquiry}
                        </p>
                      </td>
                    </tr>

                    {/* Explain */}
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Explain ({meeting.explain.duration})
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug space-y-1">
                        <p>{meeting.explain.description}</p>
                        <p>
                          <strong>Konsep Kunci:</strong> {meeting.explain.keyConcepts}
                        </p>
                        <p className="text-emerald-900 font-serif text-[10pt]">
                          <strong>Dalil Naqli/Aqli:</strong> {meeting.explain.dalilText}
                        </p>
                      </td>
                    </tr>

                    {/* Elaborate */}
                    <tr className="border-b border-slate-200">
                      <td className="p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Elaborate ({meeting.elaborate.duration})
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug space-y-1">
                        <p>{meeting.elaborate.description}</p>
                        <p>
                          <strong>Aktivitas / LKPD:</strong> {meeting.elaborate.taskDetails}
                        </p>
                      </td>
                    </tr>

                    {/* Evaluate */}
                    <tr>
                      <td className="p-2.5 font-bold bg-slate-50/70 text-slate-800 border-r border-slate-200">
                        Evaluate ({meeting.evaluate.duration})
                      </td>
                      <td className="p-2.5 text-slate-700 leading-snug space-y-1">
                        <p>{meeting.evaluate.description}</p>
                        <p className="text-rose-800 font-bold">
                          <strong>Tiket Keluar (Exit Ticket):</strong> {meeting.evaluate.exitTicketPrompt}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 5: ASESMEN FORMATIF, TUGAS KONSOLIDASI & REFLEKSI     */}
          {/* ========================================================= */}
          <div className="lesson-plan-block mb-6 page-break-inside-avoid">
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              4. Asesmen Formatif, Tugas Konsolidasi & Refleksi Guru
            </div>

            <table className="w-full text-[10.5pt] border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-left font-bold text-slate-800">
                  <th className="w-1/2 p-2.5 border-r border-slate-300">
                    Asesmen Formatif & PR Konsolidasi
                  </th>
                  <th className="w-1/2 p-2.5">
                    Refleksi Pasca Pembelajaran (Guru & Siswa)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="p-3 border-r border-slate-300 space-y-2">
                    <p className="leading-snug text-slate-800">
                      <strong>Strategi Asesmen:</strong> {lessonPlan.formativeAssessment}
                    </p>
                    <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-[10pt] text-slate-700 leading-snug">
                      <strong>PR / Konsolidasi Sesi Berikutnya:</strong> {lessonPlan.homeworkConsolidation}
                    </div>
                  </td>
                  <td className="p-3 space-y-1.5 text-slate-800">
                    <p className="font-bold text-[10pt] text-slate-900 mb-1">
                      Pertanyaan Evaluasi Efektivitas Guru:
                    </p>
                    <ul className="list-decimal pl-4 space-y-1 text-[10pt]">
                      {lessonPlan.reflectionQuestions.map((q, idx) => (
                        <li key={idx} className="leading-snug">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 6: DAFTAR SUMBER BELAJAR (RESOURCE LIST)              */}
          {/* ========================================================= */}
          <div className="lesson-plan-block mb-6 page-break-inside-avoid">
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              5. Daftar Sumber Belajar & Tautan Materi
            </div>

            <table className="w-full text-[10pt] border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-left font-bold text-slate-800">
                  <th className="w-1/3 p-2 border-r border-slate-300">Nama Sumber Belajar</th>
                  <th className="w-1/4 p-2 border-r border-slate-300">Kategori</th>
                  <th className="w-5/12 p-2">Tautan / Catatan Rujukan</th>
                </tr>
              </thead>
              <tbody>
                {lessonPlan.resources.map((res, idx) => (
                  <tr key={idx} className="border-b border-slate-200">
                    <td className="p-2 border-r border-slate-300 font-semibold text-slate-900">
                      {res.name}
                    </td>
                    <td className="p-2 border-r border-slate-300 text-slate-600">
                      {res.type}
                    </td>
                    <td className="p-2 text-slate-700">
                      {res.urlOrRef} <span className="text-slate-400">({res.note})</span>
                    </td>
                  </tr>
                ))}

                {lessonPlan.teacherResourceUrl && (
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-r border-slate-300 font-semibold text-slate-900">
                      Materi Tayang / Slide Guru
                    </td>
                    <td className="p-2 border-r border-slate-300 text-slate-600">
                      Sumber Belajar Guru (Online)
                    </td>
                    <td className="p-2 text-blue-700 underline truncate max-w-xs">
                      <a href={lessonPlan.teacherResourceUrl} target="_blank" rel="noreferrer">
                        {lessonPlan.teacherResourceUrl}
                      </a>
                    </td>
                  </tr>
                )}

                {lessonPlan.studentWorksheetUrl && (
                  <tr className="border-b border-slate-200">
                    <td className="p-2 border-r border-slate-300 font-semibold text-slate-900">
                      Lembar Aktivitas / LKPD Siswa
                    </td>
                    <td className="p-2 border-r border-slate-300 text-slate-600">
                      Digital Worksheet
                    </td>
                    <td className="p-2 text-blue-700 underline truncate max-w-xs">
                      <a href={lessonPlan.studentWorksheetUrl} target="_blank" rel="noreferrer">
                        {lessonPlan.studentWorksheetUrl}
                      </a>
                    </td>
                  </tr>
                )}

                {lessonPlan.teacherPedagogicalNotes && (
                  <tr>
                    <td colSpan={3} className="p-2.5 bg-slate-50 text-[9.5pt] text-slate-700">
                      <strong>Catatan Tambahan Pedagogis Guru:</strong> {lessonPlan.teacherPedagogicalNotes}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="h-4" />

          {/* ========================================================= */}
          {/* BLOK 7: TABEL PENGESAHAN (SIGN-OFF FOOTER TABLE)          */}
          {/* ========================================================= */}
          <div className="lesson-plan-block page-break-inside-avoid">
            <div
              className="py-2 px-3 text-white text-xs font-bold tracking-wide uppercase rounded-t-md mb-0"
              style={{ backgroundColor: lessonPlan.sectionBarColor }}
            >
              6. Lembar Pengesahan Rencana Pembelajaran
            </div>

            <table className="w-full text-[10pt] border-collapse border border-slate-300 bg-white">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-center font-bold text-slate-800">
                  <th className="w-1/3 p-2 border-r border-slate-300">Guru Pengampu PAI</th>
                  <th className="w-1/3 p-2 border-r border-slate-300">Ketua Departemen (HoD)</th>
                  <th className="w-1/3 p-2">Kepala Sekolah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center align-bottom">
                  {/* Guru */}
                  <td className="p-3 border-r border-slate-300 h-36">
                    <div className="h-20 flex items-center justify-center">
                      {lessonPlan.teacherSignature ? (
                        <img
                          src={lessonPlan.teacherSignature}
                          alt="Tanda Tangan Guru"
                          className="max-h-20 max-w-[140px] object-contain"
                        />
                      ) : (
                        <span className="text-slate-300 text-xs italic">[Tanda Tangan]</span>
                      )}
                    </div>
                    <div className="mt-2 font-bold text-slate-900 underline">
                      {lessonPlan.teacherName || 'Guru Pengampu PAI'}
                    </div>
                    <div className="text-[9pt] text-slate-500">Guru PAI SMA Semesta</div>
                  </td>

                  {/* HoD */}
                  <td className="p-3 border-r border-slate-300 h-36">
                    <div className="text-[9pt] text-emerald-800 font-semibold mb-1">
                      {lessonPlan.hodApproved ? '✓ Terverifikasi & Disetujui' : '[ ] Menunggu Verifikasi'}
                    </div>
                    <div className="h-16 flex items-center justify-center">
                      {lessonPlan.hodSignature ? (
                        <img
                          src={lessonPlan.hodSignature}
                          alt="Tanda Tangan HoD"
                          className="max-h-16 max-w-[140px] object-contain"
                        />
                      ) : (
                        <span className="text-slate-300 text-xs italic">[Tanda Tangan HoD]</span>
                      )}
                    </div>
                    <div className="mt-2 font-bold text-slate-900 underline">
                      {lessonPlan.hodName || 'Koordinator PAI'}
                    </div>
                    <div className="text-[9pt] text-slate-500">Ketua Departemen PAI</div>
                  </td>

                  {/* Kepala Sekolah */}
                  <td className="p-3 h-36">
                    <div className="text-[9pt] text-emerald-800 font-semibold mb-1">
                      {lessonPlan.principalApproved ? '✓ Disahkan & Disetujui' : '[ ] Menunggu Pengesahan'}
                    </div>
                    <div className="text-[8.5pt] text-slate-500 mb-1">
                      Semarang, {lessonPlan.approvalDate || new Date().toLocaleDateString('id-ID')}
                    </div>
                    <div className="h-16 flex items-center justify-center">
                      {lessonPlan.principalSignature ? (
                        <img
                          src={lessonPlan.principalSignature}
                          alt="Tanda Tangan Kepala Sekolah"
                          className="max-h-16 max-w-[140px] object-contain"
                        />
                      ) : (
                        <span className="text-slate-300 text-xs italic">[Tanda Tangan Kepala Sekolah]</span>
                      )}
                    </div>
                    <div className="mt-2 font-bold text-slate-900 underline">
                      {lessonPlan.principalName}
                    </div>
                    <div className="text-[9pt] text-slate-500">Kepala SMA Semesta</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
