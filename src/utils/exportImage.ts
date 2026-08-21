import * as htmlToImage from 'html-to-image';
import html2canvas from 'html2canvas';

export interface ExportImageOptions {
  scale?: number;
  filename?: string;
  borderRadius?: string;
  quality?: number;
}

export interface ExportResult {
  success: boolean;
  dataUrl?: string;
  blob?: Blob;
  error?: string;
}

/**
 * Downloads a PNG data URL cleanly across browsers and iframe sandboxes
 */
export async function downloadDataUrl(
  dataUrl: string,
  filename: string
): Promise<ExportResult> {
  try {
    let downloadUrl = dataUrl;
    let blobObj: Blob | undefined;

    try {
      const res = await fetch(dataUrl);
      blobObj = await res.blob();
      downloadUrl = URL.createObjectURL(blobObj);
    } catch {
      downloadUrl = dataUrl;
    }

    const safeFilename = `${filename.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = safeFilename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';

    document.body.appendChild(link);
    
    // Dispatch mouse event
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    link.dispatchEvent(clickEvent);

    // Clean up
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      if (downloadUrl.startsWith('blob:')) {
        URL.revokeObjectURL(downloadUrl);
      }
    }, 2000);

    return { success: true, dataUrl, blob: blobObj };
  } catch (error: any) {
    console.error('[ExportImage] downloadDataUrl error:', error);
    return { success: false, dataUrl, error: error?.message || 'Download failed' };
  }
}

/**
 * Generates a PNG data URL from a DOM element using html-to-image with html2canvas fallback.
 */
export async function generateCardDataUrl(
  elementId: string,
  options?: ExportImageOptions
): Promise<string | null> {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`[ExportImage] Element #${elementId} not found in DOM`);
    return null;
  }

  const pixelRatio = options?.scale ?? 2.5;

  // 1. Try html-to-image
  try {
    const dataUrl = await htmlToImage.toPng(element, {
      pixelRatio,
      quality: options?.quality ?? 0.95,
      cacheBust: true,
      skipAutoScale: false,
      style: {
        borderRadius: options?.borderRadius || undefined,
        boxShadow: 'none',
        transform: 'none'
      },
      filter: (node) => {
        if (node instanceof HTMLElement && node.getAttribute('data-no-export') === 'true') {
          return false;
        }
        return true;
      }
    });

    if (dataUrl && dataUrl.startsWith('data:image/png')) {
      return dataUrl;
    }
  } catch (err) {
    console.warn('[ExportImage] html-to-image failed, trying html2canvas fallback...', err);
  }

  // 2. Fallback to html2canvas
  try {
    const canvas = await html2canvas(element, {
      scale: pixelRatio,
      useCORS: true,
      allowTaint: false,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          if (options?.borderRadius) {
            clonedEl.style.borderRadius = options.borderRadius;
          }
          clonedEl.style.boxShadow = 'none';
        }
      }
    });

    return canvas.toDataURL('image/png', 1.0);
  } catch (canvasErr) {
    console.error('[ExportImage] html2canvas fallback also failed:', canvasErr);
    return null;
  }
}

/**
 * Triggers a file download with robust iframe/browser compatibility.
 */
export async function exportCardAsImage(
  elementId: string,
  filename: string,
  options?: ExportImageOptions
): Promise<ExportResult> {
  try {
    const dataUrl = await generateCardDataUrl(elementId, options);
    if (!dataUrl) {
      return { success: false, error: 'Failed to render image canvas' };
    }
    return await downloadDataUrl(dataUrl, filename);
  } catch (error: any) {
    console.error('[ExportImage] Download export error:', error);
    return { success: false, error: error?.message || 'Download error' };
  }
}
