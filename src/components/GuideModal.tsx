import React from 'react';
import { BookOpen, CheckCircle, FileText, ExternalLink, School, HelpCircle } from 'lucide-react';

export const GuideModal: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
          <School className="w-5 h-5 text-emerald-700" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Panduan & Spesifikasi Format Lesson Plan Sekolah Semesta
          </h2>
          <p className="text-xs text-slate-500">
            Rujukan standar penyusunan Rencana Pelaksanaan Pembelajaran (RPP) Pendidikan Agama Islam SMA (Grade 10, 11, 12).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
        {/* Kolom Kiri: Aturan Tata Letak & Standar Ekspor */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Aturan Pemformatan Dokumen Resmi</span>
            </h3>
            <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
              <li>
                <strong>Jenis Huruf (Font):</strong> Arial / Nunito, ukuran baku <strong>11 pt</strong>.
              </li>
              <li>
                <strong>Spasi Baris:</strong> <strong>1.15</strong> line spacing untuk keterbacaan optimal.
              </li>
              <li>
                <strong>Margin Halaman:</strong> <strong>1,5 cm (15 mm)</strong> di seluruh sisi (Atas, Bawah, Kiri, Kanan).
              </li>
              <li>
                <strong>Lebar Area Cetak:</strong> 180 mm lebar efektif, 267 mm tinggi efektif pada kertas A4 standar internasional.
              </li>
              <li>
                <strong>Aturan Keep-With-Next:</strong> Tabel tidak terpotong canggung di akhir halaman. Jika ruang tersisa tidak cukup, seluruh blok tabel secara otomatis dipindahkan ke halaman berikutnya.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
            <h3 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>Tabel Terpadu WALT / WILF / SLO (3 Kolom)</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Disajikan dalam satu tabel horizontal 3 kolom yang mengintegrasikan:
            </p>
            <ul className="space-y-1 list-disc pl-4 text-slate-600">
              <li>
                <strong>WALT (We Are Learning To):</strong> Sasaran kompetensi yang dipelajari siswa sesuai bab dan subtopik.
              </li>
              <li>
                <strong>WILF (What I'm Looking For):</strong> Kriteria sukses yang diawali frasa <em>"Saya dapat..."</em> dalam tahapan bilangan bulat terukur.
              </li>
              <li>
                <strong>SLO & Bahasa:</strong> Capaian pembelajaran, istilah kunci CLIL dengan kaligrafi Arab, dan dukungan kosakata dwibahasa (EAL).
              </li>
            </ul>
          </div>
        </div>

        {/* Kolom Kanan: 5E Model & Diferensiasi */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>Model Pembelajaran 5E per Pertemuan (80 Menit)</span>
            </h3>
            <div className="space-y-2 text-slate-600">
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Starter / Stimulus:</strong>
                Pemantik kontekstual, ayat Al-Qur'an, atau tayangan fenomena empiris di awal sesi.
              </div>
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Engage (10 menit):</strong>
                Pemanasan diagnostik mengenai materi, menampilkan WALT di papan tulis.
              </div>
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Explore (20 menit):</strong>
                Penemuan terbimbing (guided inquiry) melalui studi kasus atau bedah dalil nash.
              </div>
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Explain (15 menit):</strong>
                Penjelasan eksplisit guru, penegasan konsep syar'i, dan dalil naqli/aqli.
              </div>
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Elaborate (20 menit):</strong>
                Latihan mandiri atau kelompok bertingkat dengan lembar kerja terstruktur (LKPD).
              </div>
              <div className="border-l-2 border-emerald-600 pl-2.5">
                <strong className="text-slate-900 block">Evaluate (15 menit):</strong>
                Tiket keluar (Exit ticket) dan evaluasi pemahaman singkat yang selaras dengan SLO.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
            <h3 className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>Strategi Diferensiasi Multitaraf</span>
            </h3>
            <ul className="space-y-1 list-disc pl-4 text-slate-600">
              <li>
                <strong>Struggled Scaffolding:</strong> Panduan pengerjaan bertahap, bagan alur, dan bantuan peer-tutoring.
              </li>
              <li>
                <strong>Dukungan Bahasa (EAL):</strong> Representasi visual dan kalimat pemantik dwibahasa (Arab-Indonesia).
              </li>
              <li>
                <strong>Tugas Pengayaan (Extension):</strong> Soal penalaran tingkat tinggi (HOTS) dan telaah isu kontemporer.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dokumen Asli Template Link */}
      <div className="p-4 rounded-xl bg-slate-100 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-slate-600 shrink-0" />
          <span className="text-slate-700">
            Templat RPP Resmi Sekolah Semesta dapat ditinjau melalui Google Docs referensi resmi.
          </span>
        </div>
        <a
          href="https://docs.google.com/document/d/1_6dNPbXNMpeT89hU0smF0TyegIzzQ25x/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-emerald-800 hover:underline shrink-0"
        >
          Buka Templat Google Docs ↗
        </a>
      </div>
    </div>
  );
};
