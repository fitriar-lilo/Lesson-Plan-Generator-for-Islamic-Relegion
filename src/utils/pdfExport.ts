/**
 * PDF Export Utility for Sekolah Semesta PAI Lesson Plan
 * Uses html2canvas v1.4.1 and jsPDF v2.5.1 via window globals
 */

declare global {
  interface Window {
    jspdf?: {
      jsPDF: any;
    };
    html2canvas?: any;
    MathJax?: {
      typesetPromise?: (elements?: any[]) => Promise<void>;
      svg?: {
        fontCache?: string;
      };
    };
  }
}

export interface PdfExportOptions {
  containerElement: HTMLElement;
  filename?: string;
  onStatusChange?: (status: {
    isExporting: boolean;
    message: string;
    progressPercent?: number;
    error?: string | null;
  }) => void;
}

export async function exportLessonPlanToPdf({
  containerElement,
  filename = 'RPP_PAI_Semesta.pdf',
  onStatusChange
}: PdfExportOptions): Promise<void> {
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
    updateStatus(true, 'Menyiapkan dokumen dan fon...', 5);

    // 1. Check window dependencies
    if (!window.html2canvas) {
      throw new Error('Pustaka html2canvas belum termuat. Harap muat ulang halaman.');
    }
    const jsPdfConstructor = window.jspdf ? window.jspdf.jsPDF : null;
    if (!jsPdfConstructor) {
      throw new Error('Pustaka jsPDF belum termuat. Harap muat ulang halaman.');
    }

    // 2. Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // 3. Typeset MathJax if present and set explicit SVG dimensions
    if (window.MathJax && window.MathJax.typesetPromise) {
      updateStatus(true, 'Merender persamaan dan simbol matematika...', 15);
      await window.MathJax.typesetPromise([containerElement]);
    }

    // Ensure explicit width and height on any SVG in the container
    const svgElements = containerElement.querySelectorAll('svg');
    svgElements.forEach((svg) => {
      const rect = svg.getBoundingClientRect();
      if (!svg.getAttribute('width') || svg.getAttribute('width')?.includes('%')) {
        svg.setAttribute('width', `${Math.round(rect.width || 24)}px`);
      }
      if (!svg.getAttribute('height') || svg.getAttribute('height')?.includes('%')) {
        svg.setAttribute('height', `${Math.round(rect.height || 24)}px`);
      }
    });

    // 4. Identify blocks with class .lesson-plan-block
    let blocks: HTMLElement[] = Array.from(
      containerElement.querySelectorAll<HTMLElement>('.lesson-plan-block')
    );

    // Fallback: if no .lesson-plan-block class, collect top-level direct children
    if (blocks.length === 0) {
      blocks = Array.from(containerElement.children) as HTMLElement[];
    }

    if (blocks.length === 0) {
      throw new Error('Tidak ada blok konten rencana pembelajaran yang ditemukan untuk diekspor.');
    }

    // 5. Initialize A4 jsPDF instance: portrait, mm, [210, 297]
    const pdf = new jsPdfConstructor({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 15; // 15 mm margins all sides
    const contentWidth = pageWidth - margin * 2; // 180 mm
    const maxContentHeight = pageHeight - margin * 2; // 267 mm

    let currentY = margin;
    let pageNumber = 1;

    updateStatus(true, 'Memulai pemotretan kanvas blok dokumen...', 25);

    const totalBlocks = blocks.length;

    for (let i = 0; i < totalBlocks; i++) {
      const block = blocks[i];

      // Skip invisible elements
      if (block.offsetWidth === 0 && block.offsetHeight === 0) {
        continue;
      }

      const progress = Math.round(25 + ((i + 1) / totalBlocks) * 60);
      updateStatus(
        true,
        `Memproses blok ${i + 1} dari ${totalBlocks}...`,
        progress
      );

      // Capture block using html2canvas
      const canvas = await window.html2canvas(block, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: containerElement.scrollWidth || 1200
      });

      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        continue;
      }

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      // Calculate height in mm corresponding to contentWidth (180mm)
      const imgHeightMm = (canvas.height * contentWidth) / canvas.width;

      // Keep-with-next logic:
      // If block does not fit in remaining space and it doesn't exceed a full page alone,
      // start a new page
      if (currentY + imgHeightMm > margin + maxContentHeight) {
        if (imgHeightMm <= maxContentHeight) {
          // Normal block that fits on a clean page
          pdf.addPage();
          pageNumber++;
          currentY = margin;
        } else {
          // Large block that exceeds one full page:
          // If we are already partly down the page, move to fresh page first
          if (currentY > margin + 5) {
            pdf.addPage();
            pageNumber++;
            currentY = margin;
          }
        }
      }

      // If the block is taller than maxContentHeight, we need to slice it or place it carefully
      if (imgHeightMm > maxContentHeight) {
        // Slice into chunks
        let remainingHeight = imgHeightMm;
        let sourceY = 0;

        while (remainingHeight > 0) {
          const sliceHeight = Math.min(remainingHeight, maxContentHeight);
          // Calculate source canvas pixel height for this slice
          const sliceCanvasHeight = (sliceHeight / imgHeightMm) * canvas.height;

          // Create temporary slice canvas
          const sliceCanvas = document.createElement('canvas');
          sliceCanvas.width = canvas.width;
          sliceCanvas.height = sliceCanvasHeight;
          const sCtx = sliceCanvas.getContext('2d');
          if (sCtx) {
            sCtx.drawImage(
              canvas,
              0,
              sourceY,
              canvas.width,
              sliceCanvasHeight,
              0,
              0,
              canvas.width,
              sliceCanvasHeight
            );
            const sliceData = sliceCanvas.toDataURL('image/jpeg', 0.95);
            pdf.addImage(
              sliceData,
              'JPEG',
              margin,
              currentY,
              contentWidth,
              sliceHeight,
              undefined,
              'FAST'
            );
          }

          remainingHeight -= sliceHeight;
          sourceY += sliceCanvasHeight;

          if (remainingHeight > 0) {
            pdf.addPage();
            pageNumber++;
            currentY = margin;
          } else {
            currentY += sliceHeight;
          }
        }
      } else {
        // Normal block placement
        pdf.addImage(
          imgData,
          'JPEG',
          margin,
          currentY,
          contentWidth,
          imgHeightMm,
          undefined,
          'FAST'
        );
        currentY += imgHeightMm;
      }

      // Add a small spacing between blocks (approx 2 lines / 5mm) if there's room
      if (i < totalBlocks - 1 && currentY + 5 <= margin + maxContentHeight) {
        currentY += 4;
      }
    }

    // Add page numbers in footer
    const totalPages = pdf.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      pdf.setPage(p);
      pdf.setFontSize(8);
      pdf.setTextColor(120, 120, 120);
      pdf.text(
        `Rencana Pembelajaran PAI - Sekolah Semesta  |  Halaman ${p} dari ${totalPages}`,
        pageWidth / 2,
        pageHeight - 8,
        { align: 'center' }
      );
    }

    updateStatus(true, 'Menyelesaikan pembentukan berkas PDF...', 95);

    // 6. Save via Blob with fallback
    const pdfBlob = pdf.output('blob');
    try {
      const blobUrl = URL.createObjectURL(pdfBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
      updateStatus(false, 'PDF berhasil diunduh!', 100);
    } catch {
      // Fallback
      pdf.save(filename);
      updateStatus(false, 'PDF berhasil disimpan!', 100);
    }
  } catch (err: any) {
    console.error('PDF Export Error:', err);
    updateStatus(
      false,
      'Gagal membuat PDF: ' + (err?.message || 'Terjadi kesalahan sistem.'),
      undefined,
      err?.message || 'Kesalahan'
    );
  }
}
