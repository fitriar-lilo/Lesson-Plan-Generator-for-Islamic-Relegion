/**
 * DOCX Export Utility for Sekolah Semesta PAI Lesson Plan
 * Generates fully editable Microsoft Word (.docx) document
 * Using window.docx loaded from CDN
 */

import { LessonPlanState } from '../types/lessonPlan';

declare global {
  interface Window {
    docx?: any;
  }
}

export interface DocxExportOptions {
  lessonPlan: LessonPlanState;
  filename?: string;
  onStatusChange?: (status: {
    isExporting: boolean;
    message: string;
    progressPercent?: number;
    error?: string | null;
  }) => void;
}

export async function exportLessonPlanToDocx({
  lessonPlan,
  filename = 'RPP_PAI_Semesta.docx',
  onStatusChange
}: DocxExportOptions): Promise<void> {
  const updateStatus = (
    isExporting: boolean,
    message: string,
    progressPercent?: number,
    error?: string | null
  ) => {
    if (onStatusChange) {
      onStatusChange({ isExporting, message, progressPercent, error: error || null });
    }
  };

  try {
    updateStatus(true, 'Menyiapkan berkas Microsoft Word (DOCX)...', 10);

    const docx = window.docx;
    if (!docx) {
      throw new Error('Pustaka docx belum termuat. Harap periksa koneksi internet Anda atau muat ulang halaman.');
    }

    const {
      Document,
      Packer,
      Paragraph,
      TextRun,
      Table,
      TableRow,
      TableCell,
      WidthType,
      BorderStyle,
      AlignmentType,
      HeadingLevel,
      convertMillimetersToTwip,
      ShadingType
    } = docx;

    updateStatus(true, 'Menyusun tabel WALT, WILF, SLO dan diferensiasi...', 30);

    const marginTwip = convertMillimetersToTwip(15); // 1.5 cm = ~850 twips
    const fontName = 'Arial';
    const primaryColor = lessonPlan.headerGradientStart.replace('#', '') || '064E3B';
    const sectionColor = lessonPlan.sectionBarColor.replace('#', '') || '0F766E';

    // Helper: Standard table border
    const thinBorder = {
      style: BorderStyle.SINGLE,
      size: 4,
      color: 'CCCCCC'
    };
    const borders = {
      top: thinBorder,
      bottom: thinBorder,
      left: thinBorder,
      right: thinBorder,
      insideHorizontal: thinBorder,
      insideVertical: thinBorder
    };

    const cellPadding = {
      top: 100,
      bottom: 100,
      left: 140,
      right: 140
    };

    // Helper: Paragraph with 1.15 line spacing and Arial font
    const createP = (text: string, options: any = {}) => {
      return new Paragraph({
        spacing: {
          line: 276, // 1.15 line spacing (240 * 1.15)
          before: options.before || 40,
          after: options.after || 40
        },
        alignment: options.alignment || AlignmentType.LEFT,
        children: [
          new TextRun({
            text: text || '',
            font: fontName,
            size: options.size || 22, // 11pt = 22 half-points
            bold: options.bold || false,
            italics: options.italics || false,
            color: options.color || '111827'
          })
        ]
      });
    };

    // Helper: Section Banner Table
    const createSectionHeader = (title: string) => {
      return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
          top: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE },
          left: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE }
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 100, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: sectionColor },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: title,
                        bold: true,
                        color: 'FFFFFF',
                        font: fontName,
                        size: 24
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      });
    };

    // 1. TOP INFORMATION BAR (Title & Metadata Table)
    const headerTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 4,
              shading: { type: ShadingType.CLEAR, fill: primaryColor },
              margins: { top: 180, bottom: 180, left: 160, right: 160 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'SEKOLAH SEMESTA - LESSON PLAN',
                      bold: true,
                      color: 'FFFFFF',
                      font: fontName,
                      size: 28
                    })
                  ]
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: `Mata Pelajaran: ${lessonPlan.subjectName} | ${lessonPlan.yearGroup}`,
                      color: 'E2E8F0',
                      font: fontName,
                      size: 22
                    })
                  ]
                })
              ]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Mata Pelajaran / Unit', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(`${lessonPlan.subjectName} - ${lessonPlan.unitTitle}`)]
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Tingkat / Tahun', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(`${lessonPlan.yearGroup} | ${lessonPlan.academicYear} (${lessonPlan.semester})`)]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Guru Pengampu', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(lessonPlan.teacherName || 'Guru PAI')]
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Alokasi & Pertemuan', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(`${lessonPlan.numberOfMeetings} Pertemuan (${lessonPlan.durationPerMeeting})`)]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Rentang Tanggal', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(lessonPlan.dateRange || '-')]
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Kepala Sekolah', { bold: true })]
            }),
            new TableCell({
              margins: cellPadding,
              children: [createP(lessonPlan.principalName)]
            })
          ]
        }),
        // Cambridge Assessment Objectives (Adapted)
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 4,
              shading: { type: ShadingType.CLEAR, fill: 'F8FAFC' },
              margins: cellPadding,
              children: [
                createP('Assessment Objectives (Cambridge Adapted):', { bold: true, size: 20, color: '047857' }),
                createP(`• AO1 (Knowledge & Understanding): ${lessonPlan.cambridgeAO1}`, { size: 20 }),
                createP(`• AO2 (Application & Contextual Problem Solving): ${lessonPlan.cambridgeAO2}`, { size: 20 })
              ]
            })
          ]
        })
      ]
    });

    // 2. WALT / WILF / SLO TABLE (1 Table, 3 Columns)
    const waltWilfSloRows = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 33, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            margins: cellPadding,
            children: [createP('WALT (We Are Learning To)', { bold: true, color: '0F172A' })]
          }),
          new TableCell({
            width: { size: 33, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            margins: cellPadding,
            children: [createP("WILF (What I'm Looking For)", { bold: true, color: '0F172A' })]
          }),
          new TableCell({
            width: { size: 34, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            margins: cellPadding,
            children: [createP('SLO & Sasaran Bahasa (CLIL / EAL)', { bold: true, color: '0F172A' })]
          })
        ]
      }),
      new TableRow({
        children: [
          // Column 1: WALT
          new TableCell({
            margins: cellPadding,
            children: lessonPlan.waltItems.map((item, idx) =>
              createP(`${idx + 1}. ${item}`, { before: 30, after: 30 })
            )
          }),
          // Column 2: WILF
          new TableCell({
            margins: cellPadding,
            children: lessonPlan.wilfItems.map((item, idx) =>
              createP(`✓ ${item}`, { before: 30, after: 30 })
            )
          }),
          // Column 3: SLO + CLIL + EAL
          new TableCell({
            margins: cellPadding,
            children: [
              createP('Student Learning Outcomes (SLO):', { bold: true, size: 20, color: '0369A1' }),
              ...lessonPlan.sloItems.map((item) => createP(`• ${item}`, { size: 20 })),
              createP('Istilah Kunci (CLIL):', { bold: true, size: 20, color: '0369A1', before: 80 }),
              ...lessonPlan.clilTerms.map(
                (c) => createP(`• ${c.term} (${c.arabic || ''}): ${c.definition}`, { size: 20 })
              ),
              createP('Dukungan EAL (Kosakata Bilingual):', { bold: true, size: 20, color: '0369A1', before: 80 }),
              ...lessonPlan.ealVocabulary.map(
                (v) => createP(`• ${v.term} / ${v.arabic} : ${v.indonesian} (${v.hint})`, { size: 20 })
              )
            ]
          })
        ]
      })
    ];
    const waltTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: waltWilfSloRows
    });

    // 3. DIFFERENTIATION TABLE
    const diffTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 33, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'FEF3C7' },
              margins: cellPadding,
              children: [createP('Struggled Scaffolding (Dukungan Bertahap)', { bold: true, color: '92400E' })]
            }),
            new TableCell({
              width: { size: 33, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'E0F2FE' },
              margins: cellPadding,
              children: [createP('Dukungan Bahasa / EAL Support', { bold: true, color: '075985' })]
            }),
            new TableCell({
              width: { size: 34, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'DCFCE7' },
              margins: cellPadding,
              children: [createP('Tugas Pengayaan / Extension Challenge', { bold: true, color: '166534' })]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              margins: cellPadding,
              children: [
                createP(lessonPlan.differentiation.struggled.title, { bold: true }),
                ...lessonPlan.differentiation.struggled.strategies.map((s) => createP(`• ${s}`)),
                createP(`Panduan: ${lessonPlan.differentiation.struggled.scaffoldGuidance}`, { italics: true, before: 60 })
              ]
            }),
            new TableCell({
              margins: cellPadding,
              children: [
                createP(lessonPlan.differentiation.eal.title, { bold: true }),
                createP(`Representasi Visual: ${lessonPlan.differentiation.eal.visualSupport}`),
                createP('Kalimat Pemantik:', { bold: true, before: 40 }),
                ...lessonPlan.differentiation.eal.starterPrompts.map((p) => createP(`" ${p} "`))
              ]
            }),
            new TableCell({
              margins: cellPadding,
              children: [
                createP(lessonPlan.differentiation.extension.title, { bold: true }),
                createP(`Tantangan: ${lessonPlan.differentiation.extension.challengeTask}`),
                createP(`Konteks Riil: ${lessonPlan.differentiation.extension.realWorldContext}`, { italics: true, before: 60 })
              ]
            })
          ]
        })
      ]
    });

    // 4. MODEL PEMBELAJARAN 5E (Per Pertemuan)
    updateStatus(true, 'Menyusun alur pembelajaran Model 5E...', 50);

    const meetingTables: any[] = [];
    lessonPlan.meetings.forEach((m) => {
      const mTable = new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: borders,
        rows: [
          new TableRow({
            children: [
              new TableCell({
                columnSpan: 3,
                shading: { type: ShadingType.CLEAR, fill: sectionColor },
                margins: cellPadding,
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `PERTEMUAN KE-${m.meetingNumber} DARI ${lessonPlan.numberOfMeetings}: ${m.topicTitle} - ${m.subtopicTitle}`,
                        bold: true,
                        color: 'FFFFFF',
                        font: fontName,
                        size: 22
                      })
                    ]
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `Alokasi Waktu: ${m.duration}  |  Tanggal: ${m.date || lessonPlan.dateRange}`,
                        color: 'E2E8F0',
                        font: fontName,
                        size: 20
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 22, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP('Starter / Stimulus', { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [createP(m.starterStimulus)]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP(`Engage (${m.engage.duration})`, { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [
                  createP(m.engage.description),
                  createP(`Pemanasan Diagnostik: ${m.engage.diagnosticWarmup}`, { italics: true, color: '047857' })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP(`Explore (${m.explore.duration})`, { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [
                  createP(m.explore.description),
                  createP(`Guided Inquiry: ${m.explore.guidedInquiry}`, { italics: true })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP(`Explain (${m.explain.duration})`, { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [
                  createP(m.explain.description),
                  createP(`Konsep Kunci: ${m.explain.keyConcepts}`, { bold: true }),
                  createP(`Dalil & Rujukan: ${m.explain.dalilText}`, { italics: true, color: '065F46' })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP(`Elaborate (${m.elaborate.duration})`, { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [
                  createP(m.elaborate.description),
                  createP(`Tugas & Aktivitas: ${m.elaborate.taskDetails}`)
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
                margins: cellPadding,
                children: [createP(`Evaluate (${m.evaluate.duration})`, { bold: true })]
              }),
              new TableCell({
                columnSpan: 2,
                margins: cellPadding,
                children: [
                  createP(m.evaluate.description),
                  createP(`Exit Ticket / Tiket Keluar: ${m.evaluate.exitTicketPrompt}`, { bold: true, color: 'B91C1C' })
                ]
              })
            ]
          })
        ]
      });

      meetingTables.push(mTable);
      meetingTables.push(new Paragraph({ spacing: { before: 180, after: 180 } }));
    });

    // 5. ASESMEN & REFLEKSI TABLE
    const assessmentTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Asesmen Formatif & PR Konsolidasi', { bold: true })]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Refleksi Pasca Pembelajaran (Guru & Siswa)', { bold: true })]
            })
          ]
        }),
        new TableRow({
          children: [
            new TableCell({
              margins: cellPadding,
              children: [
                createP(lessonPlan.formativeAssessment),
                createP(`PR / Persiapan Pertemuan Berikutnya: ${lessonPlan.homeworkConsolidation}`, { italics: true, before: 60 })
              ]
            }),
            new TableCell({
              margins: cellPadding,
              children: lessonPlan.reflectionQuestions.map((q, idx) => createP(`${idx + 1}. ${q}`))
            })
          ]
        })
      ]
    });

    // 6. RESOURCE LIST TABLE
    const resourceRows = [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 30, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
            margins: cellPadding,
            children: [createP('Nama Sumber Belajar', { bold: true })]
          }),
          new TableCell({
            width: { size: 25, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
            margins: cellPadding,
            children: [createP('Kategori / Jenis', { bold: true })]
          }),
          new TableCell({
            width: { size: 45, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
            margins: cellPadding,
            children: [createP('Tautan / Catatan Rujukan', { bold: true })]
          })
        ]
      }),
      ...lessonPlan.resources.map(
        (r) =>
          new TableRow({
            children: [
              new TableCell({ margins: cellPadding, children: [createP(r.name, { bold: true })] }),
              new TableCell({ margins: cellPadding, children: [createP(r.type)] }),
              new TableCell({ margins: cellPadding, children: [createP(`${r.urlOrRef} - ${r.note}`)] })
            ]
          })
      )
    ];

    if (lessonPlan.teacherResourceUrl) {
      resourceRows.push(
        new TableRow({
          children: [
            new TableCell({ margins: cellPadding, children: [createP('Tautan Materi Guru (Online)', { bold: true })] }),
            new TableCell({ margins: cellPadding, children: [createP('Slide / Bahan Tayang')] }),
            new TableCell({ margins: cellPadding, children: [createP(lessonPlan.teacherResourceUrl)] })
          ]
        })
      );
    }

    if (lessonPlan.studentWorksheetUrl) {
      resourceRows.push(
        new TableRow({
          children: [
            new TableCell({ margins: cellPadding, children: [createP('Aktivitas / LKPD Digital Siswa', { bold: true })] }),
            new TableCell({ margins: cellPadding, children: [createP('LKPD / Worksheet')] }),
            new TableCell({ margins: cellPadding, children: [createP(lessonPlan.studentWorksheetUrl)] })
          ]
        })
      );
    }

    const resourcesTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: resourceRows
    });

    // 7. SIGN-OFF FOOTER TABLE (Tabel Pengesahan)
    updateStatus(true, 'Menyusun tabel pengesahan dan tanda tangan...', 80);

    const signOffTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: borders,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 33, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Guru Pengampu PAI', { bold: true, alignment: AlignmentType.CENTER })]
            }),
            new TableCell({
              width: { size: 33, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Ketua Departemen / HoD', { bold: true, alignment: AlignmentType.CENTER })]
            }),
            new TableCell({
              width: { size: 34, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              margins: cellPadding,
              children: [createP('Kepala Sekolah', { bold: true, alignment: AlignmentType.CENTER })]
            })
          ]
        }),
        new TableRow({
          children: [
            // Teacher
            new TableCell({
              margins: { top: 300, bottom: 200, left: 140, right: 140 },
              children: [
                createP('(Tanda Tangan Digital)', { italics: true, alignment: AlignmentType.CENTER, color: '9CA3AF' }),
                createP(lessonPlan.teacherName || 'Guru Pengampu PAI', {
                  bold: true,
                  alignment: AlignmentType.CENTER,
                  before: 200
                }),
                createP('NIP / ID Guru: -', { alignment: AlignmentType.CENTER, size: 18 })
              ]
            }),
            // HOD
            new TableCell({
              margins: { top: 300, bottom: 200, left: 140, right: 140 },
              children: [
                createP(
                  lessonPlan.hodApproved ? '[√] Telah Diverifikasi & Disetujui' : '[ ] Menunggu Verifikasi',
                  {
                    bold: true,
                    alignment: AlignmentType.CENTER,
                    color: lessonPlan.hodApproved ? '047857' : '6B7280'
                  }
                ),
                createP(lessonPlan.hodName || 'Koordinator PAI', {
                  bold: true,
                  alignment: AlignmentType.CENTER,
                  before: 200
                }),
                createP('Ketua Departemen PAI', { alignment: AlignmentType.CENTER, size: 18 })
              ]
            }),
            // Principal
            new TableCell({
              margins: { top: 300, bottom: 200, left: 140, right: 140 },
              children: [
                createP(
                  lessonPlan.principalApproved ? '[√] Disahkan & Disetujui' : '[ ] Menunggu Pengesahan',
                  {
                    bold: true,
                    alignment: AlignmentType.CENTER,
                    color: lessonPlan.principalApproved ? '047857' : '6B7280'
                  }
                ),
                createP(`Tanggal: ${lessonPlan.approvalDate || new Date().toLocaleDateString('id-ID')}`, {
                  alignment: AlignmentType.CENTER,
                  size: 18
                }),
                createP(lessonPlan.principalName, {
                  bold: true,
                  alignment: AlignmentType.CENTER,
                  before: 140
                }),
                createP('Kepala SMA Semesta', { alignment: AlignmentType.CENTER, size: 18 })
              ]
            })
          ]
        })
      ]
    });

    // ASSEMBLE DOCUMENT
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: marginTwip,
                bottom: marginTwip,
                left: marginTwip,
                right: marginTwip
              }
            }
          },
          children: [
            headerTable,
            new Paragraph({ spacing: { before: 140, after: 100 } }),

            createSectionHeader('1. TABEL TERPADU WALT, WILF, SLO & SASARAN BAHASA'),
            new Paragraph({ spacing: { before: 60, after: 60 } }),
            waltTable,
            new Paragraph({ spacing: { before: 180, after: 100 } }),

            createSectionHeader('2. TABEL DIFERENSIASI PEMBELAJARAN (SCAFFOLDING & EXTENSION)'),
            new Paragraph({ spacing: { before: 60, after: 60 } }),
            diffTable,
            new Paragraph({ spacing: { before: 180, after: 100 } }),

            createSectionHeader('3. RENCANA PELAKSANAAN MODEL 5E PER PERTEMUAN'),
            new Paragraph({ spacing: { before: 80, after: 80 } }),
            ...meetingTables,

            createSectionHeader('4. ASESMEN FORMATIF, TUGAS KONSOLIDASI & REFLEKSI'),
            new Paragraph({ spacing: { before: 60, after: 60 } }),
            assessmentTable,
            new Paragraph({ spacing: { before: 180, after: 100 } }),

            createSectionHeader('5. DAFTAR SUMBER BELAJAR & REFERENSI'),
            new Paragraph({ spacing: { before: 60, after: 60 } }),
            resourcesTable,
            new Paragraph({ spacing: { before: 180, after: 100 } }),

            createSectionHeader('6. LEMBAR PENGESAHAN DOKUMEN'),
            new Paragraph({ spacing: { before: 60, after: 60 } }),
            signOffTable
          ]
        }
      ]
    });

    updateStatus(true, 'Mengemas berkas DOCX...', 90);

    const blob = await Packer.toBlob(doc);

    // Save
    const blobUrl = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);

    updateStatus(false, 'DOCX berhasil diunduh!', 100);
  } catch (err: any) {
    console.error('DOCX Export Error:', err);
    updateStatus(
      false,
      'Gagal membuat berkas DOCX: ' + (err?.message || 'Terjadi kesalahan.'),
      undefined,
      err?.message || 'Gagal export DOCX'
    );
  }
}
