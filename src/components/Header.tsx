import React from 'react';
import { FileText, Download, BookOpen, Settings, Eye } from 'lucide-react';
import { ExportStatus } from '../types/lessonPlan';

interface HeaderProps {
  activeTab: 'config' | 'preview' | 'guide';
  setActiveTab: (tab: 'config' | 'preview' | 'guide') => void;
  onExportPdf: () => void;
  onExportDocx: () => void;
  exportStatus: ExportStatus;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onExportPdf,
  onExportDocx,
  exportStatus
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center shadow-xs">
            <BookOpen className="w-5 h-5 text-emerald-200" />
          </div>
          <div>
            <span className="text-base font-bold text-slate-900 tracking-tight whitespace-nowrap block">
              Semesta Lesson Planner PAI
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">
              Pendidikan Agama Islam (SMA Grade 10, 11, 12)
            </span>
          </div>
        </div>

        {/* Zone 2: Concise navigation links */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('config')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'config'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Konfigurasi & Input</span>
          </button>

          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'preview'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Pratinjau RPP</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'guide'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Standar Format Semesta</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action triggers */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onExportDocx}
            disabled={exportStatus.isExporting}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 whitespace-nowrap shrink-0 disabled:opacity-50"
            title="Ekspor ke Microsoft Word (.docx) yang dapat diedit bebas"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Unduh DOCX</span>
          </button>

          <button
            onClick={onExportPdf}
            disabled={exportStatus.isExporting}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 disabled:opacity-50"
            title="Ekspor ke PDF A4 standar Sekolah Semesta"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{exportStatus.isExporting && exportStatus.format === 'pdf' ? 'Memproses...' : 'Unduh PDF'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
