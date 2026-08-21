import { Verse, Hadith, Dua, HijriDateInfo, QuizQuestion } from '../types';
import { getQuizForDay } from '../data/quizData';

export type CardTheme = 'emerald' | 'midnight' | 'pearl';
export type CardFormat = 'portrait' | 'story' | 'square';

export interface SummaryCardData {
  verse: Verse;
  hadith: Hadith;
  dua?: Dua;
  hijri: HijriDateInfo;
  gregorianDate: string;
  theme?: CardTheme;
  format?: CardFormat;
  includeQuiz?: boolean;
  includeDua?: boolean;
}

export interface SingleCardData {
  type: 'verse' | 'hadith';
  item: Verse | Hadith;
  hijri?: HijriDateInfo;
  gregorianDate?: string;
  theme?: CardTheme;
  format?: CardFormat;
}

/**
 * Utility: Wait until web fonts are completely loaded before rasterizing
 */
async function ensureFontsLoaded(): Promise<void> {
  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Font loading notice:', e);
    }
  }
}

/**
 * Utility: wrap text for canvas drawing with proper word breaking and line calculation
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  if (!text) return [];
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Draw rounded rectangle with fill and optional stroke
 */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill?: string | CanvasGradient,
  stroke?: string | CanvasGradient,
  strokeWidth: number = 1
) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Draw Islamic 8-Point Rub el Hizb Star Watermark
 */
function drawRubElHizb(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  strokeColor: string,
  lineWidth: number = 1.5,
  fillColor?: string
) {
  ctx.save();
  ctx.translate(cx, cy);

  if (fillColor) {
    ctx.fillStyle = fillColor;
  }
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;

  // Outer circles
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.84, 0, Math.PI * 2);
  ctx.stroke();

  // Two intersecting squares rotated 45 deg
  const s = radius * 0.72;
  const h = s / 2;

  ctx.save();
  ctx.strokeRect(-h, -h, s, s);
  ctx.rotate(Math.PI / 4);
  ctx.strokeRect(-h, -h, s, s);
  ctx.restore();

  // Center circle
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.2, 0, Math.PI * 2);
  if (fillColor) ctx.fill();
  ctx.stroke();

  ctx.restore();
}

/**
 * Draw Crescent & Star Logo Motif
 */
function drawLogoMotif(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number,
  theme: CardTheme
) {
  ctx.save();
  ctx.translate(cx, cy);

  const isMidnight = theme === 'midnight';
  const badgeBg = isMidnight ? '#061D14' : '#0B5D3C';
  const moonColor = isMidnight ? '#E5C76B' : '#F5E3A9';

  // Background Badge
  drawRoundedRect(ctx, -size / 2, -size / 2, size, size, size * 0.28, badgeBg, '#C9A227', 2);

  // Crescent Moon
  ctx.fillStyle = moonColor;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.32, 0, Math.PI * 2, false);
  ctx.fill();

  ctx.fillStyle = badgeBg;
  ctx.beginPath();
  ctx.arc(size * 0.12, -size * 0.05, size * 0.28, 0, Math.PI * 2, false);
  ctx.fill();

  // Star
  ctx.fillStyle = '#FFF3CD';
  ctx.beginPath();
  ctx.arc(size * 0.14, -size * 0.12, size * 0.08, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * Theme Palette Definition
 */
interface ThemeColors {
  name: CardTheme;
  canvasBg: (ctx: CanvasRenderingContext2D, w: number, h: number) => CanvasGradient | string;
  outerBorder: string;
  headerBg: string;
  headerText: string;
  headerDateText: string;
  cardBg: string;
  cardBorder: string;
  goldHeading: string;
  arabicText: string;
  urduText: string;
  subBoxBg: string;
  subBoxBorder: string;
  subBoxUrduText: string;
  pillBg: string;
  pillText: string;
  quizBoxBg: string;
  quizBoxBorder: string;
  quizAnswerBg: string;
  quizAnswerText: string;
  watermarkAlpha: number;
}

function getThemeColors(theme: CardTheme): ThemeColors {
  if (theme === 'midnight') {
    // Midnight: Dark Forest Obsidian aesthetic (as in dark screenshot)
    return {
      name: 'midnight',
      canvasBg: (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#05140D');
        g.addColorStop(0.35, '#092319');
        g.addColorStop(0.7, '#071C14');
        g.addColorStop(1, '#030C08');
        return g;
      },
      outerBorder: 'rgba(201, 162, 39, 0.45)',
      headerBg: 'rgba(5, 19, 13, 0.9)',
      headerText: '#E5C76B',
      headerDateText: 'rgba(255, 255, 255, 0.75)',
      cardBg: 'rgba(8, 28, 20, 0.95)',
      cardBorder: 'rgba(201, 162, 39, 0.35)',
      goldHeading: '#E5C76B',
      arabicText: '#FFFFFF',
      urduText: '#F0F5F2',
      subBoxBg: 'rgba(6, 21, 15, 0.9)',
      subBoxBorder: 'rgba(201, 162, 39, 0.25)',
      subBoxUrduText: '#E8EFEA',
      pillBg: '#C9A227',
      pillText: '#061811',
      quizBoxBg: 'rgba(8, 28, 20, 0.95)',
      quizBoxBorder: 'rgba(201, 162, 39, 0.4)',
      quizAnswerBg: 'rgba(201, 162, 39, 0.15)',
      quizAnswerText: '#E5C76B',
      watermarkAlpha: 0.06
    };
  } else if (theme === 'pearl') {
    // Pearl: Warm Parchment & Ivory Light aesthetic
    return {
      name: 'pearl',
      canvasBg: () => '#F5F1E8',
      outerBorder: '#0B5D3C',
      headerBg: '#EBE3D3',
      headerText: '#0B5D3C',
      headerDateText: '#4A5D53',
      cardBg: '#FFFFFF',
      cardBorder: 'rgba(11, 93, 60, 0.25)',
      goldHeading: '#8F7212',
      arabicText: '#0B5D3C',
      urduText: '#1D2B24',
      subBoxBg: '#FAF7F0',
      subBoxBorder: 'rgba(11, 93, 60, 0.2)',
      subBoxUrduText: '#2B3C34',
      pillBg: '#0B5D3C',
      pillText: '#FFFFFF',
      quizBoxBg: '#FFFFFF',
      quizBoxBorder: 'rgba(11, 93, 60, 0.3)',
      quizAnswerBg: 'rgba(11, 93, 60, 0.08)',
      quizAnswerText: '#0B5D3C',
      watermarkAlpha: 0.04
    };
  } else {
    // Emerald (Default): Royal Deep Emerald gradient with Cream Parchment inner cards
    return {
      name: 'emerald',
      canvasBg: (ctx, w, h) => {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, '#06442B');
        g.addColorStop(0.3, '#0B5D3C');
        g.addColorStop(0.7, '#08482E');
        g.addColorStop(1, '#032316');
        return g;
      },
      outerBorder: '#C9A227',
      headerBg: 'rgba(3, 27, 18, 0.75)',
      headerText: '#F5E3A9',
      headerDateText: 'rgba(255, 255, 255, 0.85)',
      cardBg: '#FAF7F0',
      cardBorder: '#C9A227',
      goldHeading: '#8F7212',
      arabicText: '#0B5D3C',
      urduText: '#1A2C23',
      subBoxBg: '#F3ECE0',
      subBoxBorder: 'rgba(201, 162, 39, 0.4)',
      subBoxUrduText: '#1D2D25',
      pillBg: '#0B5D3C',
      pillText: '#F5F1E8',
      quizBoxBg: '#FAF7F0',
      quizBoxBorder: '#C9A227',
      quizAnswerBg: 'rgba(11, 93, 60, 0.1)',
      quizAnswerText: '#0B5D3C',
      watermarkAlpha: 0.08
    };
  }
}

/**
 * Generate high-resolution studio quality PNG (with 2x supersampling for crisp zooming).
 * Fully supports Emerald, Midnight, and Pearl themes, plus 3 Quiz Questions & Answers.
 */
export async function renderDailySummaryCardToCanvas(
  data: SummaryCardData
): Promise<string> {
  const {
    verse,
    hadith,
    dua,
    hijri,
    gregorianDate,
    theme = 'emerald',
    format = 'portrait',
    includeQuiz = true,
    includeDua = true
  } = data;

  await ensureFontsLoaded();

  const colors = getThemeColors(theme);
  const quizQuestions = getQuizForDay(verse, hadith);

  // Logical dimensions (1080 standard width, dynamic height)
  const logicalWidth = 1080;
  
  // 2x Supersampling Scale Factor for crisp, retina vector font quality on zoom
  const scale = 2;

  // We first perform a measurement pass on temporary canvas to calculate exact height needed
  const measureCanvas = document.createElement('canvas');
  measureCanvas.width = logicalWidth;
  measureCanvas.height = 1000;
  const mCtx = measureCanvas.getContext('2d')!;

  const margin = 30;
  const contentWidth = logicalWidth - (margin + 20) * 2;
  const cardPadding = 28;
  const cardInnerWidth = contentWidth - cardPadding * 2;

  // 1. Measure Verse Box
  mCtx.font = 'bold 36px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
  const vArabicLines = wrapText(mCtx, verse.arabic, cardInnerWidth - 40);
  const vArabicH = vArabicLines.length * 58;

  mCtx.font = '600 23px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
  const vUrduLines = wrapText(mCtx, verse.urdu_translation, cardInnerWidth - 40);
  const vUrduH = vUrduLines.length * 46;

  mCtx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  const vTafseerLines = wrapText(mCtx, verse.explanation, cardInnerWidth - 60);
  const vTafseerH = Math.max(64, vTafseerLines.length * 32 + 38);

  const vFamilyLines = verse.family_tip ? wrapText(mCtx, verse.family_tip, cardInnerWidth - 60) : [];
  const vFamilyH = verse.family_tip ? Math.max(60, vFamilyLines.length * 32 + 38) : 0;

  const verseBoxH = 65 + vArabicH + 24 + vUrduH + 24 + vTafseerH + (vFamilyH > 0 ? vFamilyH + 14 : 0) + 26;

  // 2. Measure Hadith Box
  mCtx.font = 'bold 33px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
  const hArabicLines = wrapText(mCtx, hadith.arabic, cardInnerWidth - 40);
  const hArabicH = hArabicLines.length * 54;

  mCtx.font = '600 22px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
  const hUrduLines = wrapText(mCtx, hadith.urdu_translation, cardInnerWidth - 40);
  const hUrduH = hUrduLines.length * 44;

  mCtx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  const hLessonLines = hadith.lesson ? wrapText(mCtx, hadith.lesson, cardInnerWidth - 60) : [];
  const hLessonH = hadith.lesson ? Math.max(64, hLessonLines.length * 32 + 38) : 0;

  const hFamilyLines = hadith.family_tip ? wrapText(mCtx, hadith.family_tip, cardInnerWidth - 60) : [];
  const hFamilyH = hadith.family_tip ? Math.max(60, hFamilyLines.length * 32 + 38) : 0;

  const hadithBoxH = 65 + hArabicH + 24 + hUrduH + 24 + (hLessonH > 0 ? hLessonH + 12 : 0) + (hFamilyH > 0 ? hFamilyH + 12 : 0) + 26;

  // 3. Measure Dua of the Week Box
  let duaBoxH = 0;
  let dArabicLines: string[] = [];
  let dUrduLines: string[] = [];
  let dBenefitLines: string[] = [];
  let dBenefitH = 0;

  if (includeDua && dua) {
    mCtx.font = 'bold 32px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
    dArabicLines = wrapText(mCtx, dua.arabic, cardInnerWidth - 40);
    const dArabicH = dArabicLines.length * 52;

    mCtx.font = '600 21px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
    dUrduLines = wrapText(mCtx, dua.urdu_translation, cardInnerWidth - 40);
    const dUrduH = dUrduLines.length * 42;

    const benefitFullText = `${dua.source} • ${dua.occasion || ''} ${dua.benefit ? `— ${dua.benefit}` : ''}`.trim();
    mCtx.font = '500 16px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    dBenefitLines = wrapText(mCtx, benefitFullText, cardInnerWidth - 60);
    dBenefitH = Math.max(56, dBenefitLines.length * 30 + 36);

    duaBoxH = 65 + dArabicH + 22 + dUrduH + 22 + dBenefitH + 26;
  }

  // 4. Measure Quiz Box (3 Questions with Correct Answers)
  let quizBoxH = 0;
  interface MeasuredQ {
    qLines: string[];
    ansLines: string[];
    h: number;
  }
  const measuredQuestions: MeasuredQ[] = [];

  if (includeQuiz && quizQuestions.length > 0) {
    mCtx.font = '600 16px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    for (const q of quizQuestions) {
      const qLines = wrapText(mCtx, q.questionUrdu, cardInnerWidth - 60);
      const correctAns = q.options[q.correctIndex];
      const ansLines = wrapText(mCtx, `✓ جواب: ${correctAns}`, cardInnerWidth - 70);
      const qH = qLines.length * 28 + ansLines.length * 26 + 24;
      measuredQuestions.push({ qLines, ansLines, h: qH });
    }
    quizBoxH = 65 + measuredQuestions.reduce((acc, curr) => acc + curr.h + 12, 0) + 16;
  }

  // Calculate Total Required Canvas Height
  const headerHeight = 78;
  const headerY = margin + 24;
  const topSpacing = headerY + headerHeight + 20;
  const footerSpace = 70;

  const totalContentHeight = topSpacing + verseBoxH + 22 + hadithBoxH + (duaBoxH > 0 ? 22 + duaBoxH : 0) + (quizBoxH > 0 ? 22 + quizBoxH : 0) + footerSpace;
  const logicalHeight = format === 'story' 
    ? Math.max(1920, totalContentHeight) 
    : format === 'square' 
    ? Math.max(1080, totalContentHeight) 
    : Math.max(1780, totalContentHeight);

  // Initialize High-Density Canvas
  const canvas = document.createElement('canvas');
  canvas.width = logicalWidth * scale;
  canvas.height = logicalHeight * scale;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) throw new Error('Failed to get canvas 2D context');

  // Scale context so everything draws at high DPI (ultra crisp fonts)
  ctx.scale(scale, scale);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // 1. Draw Canvas Background
  const bg = colors.canvasBg(ctx, logicalWidth, logicalHeight);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, logicalWidth, logicalHeight);

  // 2. Islamic Star Watermarks in background
  ctx.save();
  ctx.globalAlpha = colors.watermarkAlpha;
  drawRubElHizb(ctx, logicalWidth / 2, logicalHeight * 0.22, 500, '#C9A227', 3);
  drawRubElHizb(ctx, logicalWidth / 2, logicalHeight * 0.65, 500, '#C9A227', 3);
  ctx.restore();

  // 3. Outer Framing
  drawRoundedRect(
    ctx,
    margin,
    margin,
    logicalWidth - margin * 2,
    logicalHeight - margin * 2,
    28,
    undefined,
    colors.outerBorder,
    2.5
  );

  // 4. Header Bar
  drawRoundedRect(
    ctx,
    margin + 16,
    headerY,
    logicalWidth - (margin + 16) * 2,
    headerHeight,
    20,
    colors.headerBg,
    colors.outerBorder,
    1.5
  );

  // Left: Logo & Brand
  drawLogoMotif(ctx, margin + 60, headerY + 39, 48, theme);

  ctx.fillStyle = colors.headerText;
  ctx.font = 'bold 24px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Daily Noor', margin + 100, headerY + 28);

  ctx.fillStyle = colors.headerText;
  ctx.font = 'bold 18px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.fillText('•  نورِ روزانہ', margin + 235, headerY + 28);

  ctx.fillStyle = colors.headerDateText;
  ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Day ${verse.day} of 365  •  Daily Routine: Verse, Hadith & Quiz`, margin + 100, headerY + 54);

  // Right: Hijri & Gregorian Dates
  ctx.textAlign = 'right';
  ctx.fillStyle = colors.headerText;
  ctx.font = 'bold 16px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.fillText(hijri.formatted, logicalWidth - margin - 40, headerY + 28);

  ctx.fillStyle = colors.headerDateText;
  ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(gregorianDate, logicalWidth - margin - 40, headerY + 54);

  const contentX = margin + 20;
  let cursorY = headerY + headerHeight + 20;

  // ==========================================
  // SECTION 1: TODAY'S VERSE
  // ==========================================
  drawRoundedRect(
    ctx,
    contentX,
    cursorY,
    contentWidth,
    verseBoxH,
    24,
    colors.cardBg,
    colors.cardBorder,
    1.5
  );

  // Section Header: TODAY'S VERSE
  ctx.fillStyle = colors.goldHeading;
  ctx.font = '900 18px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText("TODAY'S VERSE", contentX + cardPadding, cursorY + 22);

  // Pill badge: آیتِ مبارکہ
  drawRoundedRect(ctx, contentX + cardPadding + 165, cursorY + 18, 105, 26, 8, colors.pillBg);
  ctx.fillStyle = colors.pillText;
  ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('آیتِ مبارکہ', contentX + cardPadding + 165 + 52, cursorY + 31);

  // Right Surah citation
  ctx.fillStyle = colors.goldHeading;
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(`Surah ${verse.surah}: ${verse.ayah}`, contentX + contentWidth - cardPadding, cursorY + 22);

  let vInnerY = cursorY + 68;

  // Arabic Calligraphy (Ultra Crisp Vector Font Rendering)
  ctx.font = 'bold 36px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
  ctx.fillStyle = colors.arabicText;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  for (const line of vArabicLines) {
    ctx.fillText(line, logicalWidth / 2, vInnerY);
    vInnerY += 58;
  }

  // Golden Divider
  vInnerY += 6;
  const divGrad = ctx.createLinearGradient(logicalWidth / 2 - 110, 0, logicalWidth / 2 + 110, 0);
  divGrad.addColorStop(0, 'rgba(201, 162, 39, 0)');
  divGrad.addColorStop(0.5, '#C9A227');
  divGrad.addColorStop(1, 'rgba(201, 162, 39, 0)');
  ctx.fillStyle = divGrad;
  ctx.fillRect(logicalWidth / 2 - 110, vInnerY, 220, 2);
  vInnerY += 18;

  // Urdu Translation
  ctx.font = '600 23px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
  ctx.fillStyle = colors.urduText;
  ctx.textAlign = 'center';
  for (const line of vUrduLines) {
    ctx.fillText(line, logicalWidth / 2, vInnerY);
    vInnerY += 46;
  }

  vInnerY += 16;

  // Tafseer Box
  drawRoundedRect(
    ctx,
    contentX + cardPadding,
    vInnerY,
    cardInnerWidth,
    vTafseerH,
    14,
    colors.subBoxBg,
    colors.subBoxBorder,
    1
  );

  ctx.fillStyle = colors.goldHeading;
  ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('TAFSEER / EXPLANATION', contentX + cardPadding + 16, vInnerY + 12);

  ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.textAlign = 'right';
  ctx.fillText('وضاحت و نصیحت', contentX + contentWidth - cardPadding - 16, vInnerY + 10);

  ctx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.fillStyle = colors.subBoxUrduText;
  ctx.textAlign = 'right';
  let tafY = vInnerY + 34;
  for (const line of vTafseerLines) {
    ctx.fillText(line, contentX + contentWidth - cardPadding - 16, tafY);
    tafY += 30;
  }

  vInnerY += vTafseerH + 12;

  // Family Tip Box (if available)
  if (verse.family_tip && vFamilyH > 0) {
    drawRoundedRect(
      ctx,
      contentX + cardPadding,
      vInnerY,
      cardInnerWidth,
      vFamilyH,
      14,
      colors.subBoxBg,
      colors.subBoxBorder,
      1
    );

    ctx.fillStyle = colors.goldHeading;
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('👥 FAMILY DISCUSSION TIP', contentX + cardPadding + 16, vInnerY + 12);

    ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.textAlign = 'right';
    ctx.fillText('خاندانی مکالمہ', contentX + contentWidth - cardPadding - 16, vInnerY + 10);

    ctx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.fillStyle = colors.subBoxUrduText;
    ctx.textAlign = 'right';
    let famY = vInnerY + 34;
    for (const line of vFamilyLines) {
      ctx.fillText(line, contentX + contentWidth - cardPadding - 16, famY);
      famY += 30;
    }
  }

  // ==========================================
  // SECTION 2: DAILY HADITH
  // ==========================================
  cursorY += verseBoxH + 22;

  drawRoundedRect(
    ctx,
    contentX,
    cursorY,
    contentWidth,
    hadithBoxH,
    24,
    colors.cardBg,
    colors.cardBorder,
    1.5
  );

  // Section Header: DAILY HADITH
  ctx.fillStyle = colors.goldHeading;
  ctx.font = '900 18px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText("DAILY HADITH", contentX + cardPadding, cursorY + 22);

  // Pill badge: حدیثِ نبوی ﷺ
  drawRoundedRect(ctx, contentX + cardPadding + 145, cursorY + 18, 115, 26, 8, colors.pillBg);
  ctx.fillStyle = colors.pillText;
  ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('حدیثِ نبوی ﷺ', contentX + cardPadding + 145 + 57, cursorY + 31);

  // Right Hadith Source
  ctx.fillStyle = colors.goldHeading;
  ctx.font = 'bold 15px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(hadith.source, contentX + contentWidth - cardPadding, cursorY + 22);

  let hInnerY = cursorY + 68;

  // Arabic Calligraphy
  ctx.font = 'bold 33px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
  ctx.fillStyle = colors.arabicText;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  for (const line of hArabicLines) {
    ctx.fillText(line, logicalWidth / 2, hInnerY);
    hInnerY += 54;
  }

  // Golden Divider
  hInnerY += 6;
  ctx.fillStyle = divGrad;
  ctx.fillRect(logicalWidth / 2 - 110, hInnerY, 220, 2);
  hInnerY += 18;

  // Urdu Translation
  ctx.font = '600 22px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
  ctx.fillStyle = colors.urduText;
  ctx.textAlign = 'center';
  for (const line of hUrduLines) {
    ctx.fillText(line, logicalWidth / 2, hInnerY);
    hInnerY += 44;
  }

  hInnerY += 16;

  // Character Lesson Box
  if (hadith.lesson && hLessonH > 0) {
    drawRoundedRect(
      ctx,
      contentX + cardPadding,
      hInnerY,
      cardInnerWidth,
      hLessonH,
      14,
      colors.subBoxBg,
      colors.subBoxBorder,
      1
    );

    ctx.fillStyle = colors.goldHeading;
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('💡 CHARACTER LESSON', contentX + cardPadding + 16, hInnerY + 12);

    ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.textAlign = 'right';
    ctx.fillText(`موضوع: ${hadith.category || 'اخلاق و سیرت'}`, contentX + contentWidth - cardPadding - 16, hInnerY + 10);

    ctx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.fillStyle = colors.subBoxUrduText;
    ctx.textAlign = 'right';
    let lesY = hInnerY + 34;
    for (const line of hLessonLines) {
      ctx.fillText(line, contentX + contentWidth - cardPadding - 16, lesY);
      lesY += 30;
    }

    hInnerY += hLessonH + 12;
  }

  // Hadith Family Tip Box
  if (hadith.family_tip && hFamilyH > 0) {
    drawRoundedRect(
      ctx,
      contentX + cardPadding,
      hInnerY,
      cardInnerWidth,
      hFamilyH,
      14,
      colors.subBoxBg,
      colors.subBoxBorder,
      1
    );

    ctx.fillStyle = colors.goldHeading;
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('👥 FAMILY DISCUSSION TIP', contentX + cardPadding + 16, hInnerY + 12);

    ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.textAlign = 'right';
    ctx.fillText('خاندانی مکالمہ', contentX + contentWidth - cardPadding - 16, hInnerY + 10);

    ctx.font = '500 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.fillStyle = colors.subBoxUrduText;
    ctx.textAlign = 'right';
    let famY2 = hInnerY + 34;
    for (const line of hFamilyLines) {
      ctx.fillText(line, contentX + contentWidth - cardPadding - 16, famY2);
      famY2 += 30;
    }
  }

  // Advance cursor past Hadith box
  cursorY += hadithBoxH + 22;

  // ==========================================
  // SECTION 3: DUA OF THE WEEK
  // ==========================================
  if (includeDua && dua && duaBoxH > 0) {
    drawRoundedRect(
      ctx,
      contentX,
      cursorY,
      contentWidth,
      duaBoxH,
      24,
      colors.cardBg,
      colors.cardBorder,
      1.5
    );

    // Section Header: DUA OF THE WEEK
    ctx.fillStyle = colors.goldHeading;
    ctx.font = '900 18px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText("DUA OF THE WEEK", contentX + cardPadding, cursorY + 22);

    // Pill badge: دعائے مسنونہ
    drawRoundedRect(ctx, contentX + cardPadding + 190, cursorY + 18, 120, 26, 8, colors.pillBg);
    ctx.fillStyle = colors.pillText;
    ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('دعائے مسنونہ', contentX + cardPadding + 190 + 60, cursorY + 31);

    // Right citation
    ctx.fillStyle = colors.goldHeading;
    ctx.font = 'bold 15px "Noto Nastaliq Urdu", "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`Week ${dua.week} • ${dua.titleUrdu}`, contentX + contentWidth - cardPadding, cursorY + 22);

    let dInnerY = cursorY + 68;

    // Arabic Calligraphy
    ctx.font = 'bold 32px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
    ctx.fillStyle = colors.arabicText;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (const line of dArabicLines) {
      ctx.fillText(line, logicalWidth / 2, dInnerY);
      dInnerY += 52;
    }

    // Golden Divider
    dInnerY += 6;
    ctx.fillStyle = divGrad;
    ctx.fillRect(logicalWidth / 2 - 110, dInnerY, 220, 2);
    dInnerY += 18;

    // Urdu Translation
    ctx.font = '600 21px "Noto Nastaliq Urdu", "Noto Sans Arabic", "Amiri", serif';
    ctx.fillStyle = colors.urduText;
    ctx.textAlign = 'center';
    for (const line of dUrduLines) {
      ctx.fillText(line, logicalWidth / 2, dInnerY);
      dInnerY += 42;
    }

    dInnerY += 16;

    // Dua Benefit / Reference Sub-box
    if (dBenefitH > 0) {
      drawRoundedRect(
        ctx,
        contentX + cardPadding,
        dInnerY,
        cardInnerWidth,
        dBenefitH,
        14,
        colors.subBoxBg,
        colors.subBoxBorder,
        1
      );

      ctx.fillStyle = colors.goldHeading;
      ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText('📌 OCCASION & BENEFIT', contentX + cardPadding + 16, dInnerY + 12);

      ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
      ctx.textAlign = 'right';
      ctx.fillText(dua.occasion || 'فضیلت و موقع', contentX + contentWidth - cardPadding - 16, dInnerY + 10);

      ctx.font = '500 16px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
      ctx.fillStyle = colors.subBoxUrduText;
      ctx.textAlign = 'right';
      let benY = dInnerY + 34;
      for (const line of dBenefitLines) {
        ctx.fillText(line, contentX + contentWidth - cardPadding - 16, benY);
        benY += 28;
      }
    }

    // Advance cursor past Dua box
    cursorY += duaBoxH + 22;
  }

  // ==========================================
  // SECTION 4: DAILY QUIZ QUESTIONS & ANSWERS
  // ==========================================
  if (includeQuiz && quizBoxH > 0) {
    drawRoundedRect(
      ctx,
      contentX,
      cursorY,
      contentWidth,
      quizBoxH,
      24,
      colors.quizBoxBg,
      colors.quizBoxBorder,
      1.5
    );

    // Section Header: DAILY QUIZ & ANSWERS
    ctx.fillStyle = colors.goldHeading;
    ctx.font = '900 18px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText("DAILY REFLECTION QUIZ & ANSWERS", contentX + cardPadding, cursorY + 22);

    // Pill badge: کوئز اور جوابات
    drawRoundedRect(ctx, contentX + cardPadding + 340, cursorY + 18, 125, 26, 8, colors.pillBg);
    ctx.fillStyle = colors.pillText;
    ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('کوئز اور جوابات', contentX + cardPadding + 340 + 62, cursorY + 31);

    // Right subtitle
    ctx.fillStyle = colors.goldHeading;
    ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('3 Questions & Solutions', contentX + contentWidth - cardPadding, cursorY + 22);

    let qInnerY = cursorY + 68;

    for (let i = 0; i < quizQuestions.length; i++) {
      const q = quizQuestions[i];
      const m = measuredQuestions[i];
      const qNum = i + 1;

      // Question sub container
      drawRoundedRect(
        ctx,
        contentX + cardPadding,
        qInnerY,
        cardInnerWidth,
        m.h,
        12,
        colors.subBoxBg,
        colors.subBoxBorder,
        1
      );

      // Question Number badge
      ctx.fillStyle = colors.goldHeading;
      ctx.font = '800 13px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(`Q${qNum}. [${q.type === 'verse' ? 'Verse' : q.type === 'hadith' ? 'Hadith' : 'Knowledge'}]`, contentX + cardPadding + 14, qInnerY + 12);

      // Question Urdu text
      ctx.font = '600 16px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
      ctx.fillStyle = colors.subBoxUrduText;
      ctx.textAlign = 'right';
      let qTextY = qInnerY + 10;
      for (const line of m.qLines) {
        ctx.fillText(line, contentX + contentWidth - cardPadding - 14, qTextY);
        qTextY += 26;
      }

      // Answer highlight pill
      const ansBoxY = qTextY + 6;
      const ansBoxH = m.ansLines.length * 24 + 10;
      drawRoundedRect(
        ctx,
        contentX + cardPadding + 12,
        ansBoxY,
        cardInnerWidth - 24,
        ansBoxH,
        8,
        colors.quizAnswerBg
      );

      ctx.font = 'bold 15px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
      ctx.fillStyle = colors.quizAnswerText;
      ctx.textAlign = 'right';
      let aTextY = ansBoxY + 6;
      for (const aLine of m.ansLines) {
        ctx.fillText(aLine, contentX + contentWidth - cardPadding - 24, aTextY);
        aTextY += 24;
      }

      qInnerY += m.h + 12;
    }
  }

  // 8. Bottom Footer
  const footerY = logicalHeight - margin - 32;
  ctx.fillStyle = colors.headerDateText;
  ctx.font = 'bold 15px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Daily Noor App  •  Seek Light in Quran & Sunnah Every Day', logicalWidth / 2, footerY);

  return canvas.toDataURL('image/png', 1.0);
}

/**
 * Standalone Single Card (Verse or Hadith) Export
 */
export async function renderSingleCardToCanvas(
  data: SingleCardData
): Promise<string> {
  const {
    type,
    item,
    hijri,
    gregorianDate,
    theme = 'emerald',
    format = 'portrait'
  } = data;

  await ensureFontsLoaded();

  const colors = getThemeColors(theme);
  const scale = 2; // 2x supersampling

  const logicalWidth = 1080;
  const logicalHeight = format === 'story' ? 1920 : format === 'square' ? 1080 : 1420;

  const canvas = document.createElement('canvas');
  canvas.width = logicalWidth * scale;
  canvas.height = logicalHeight * scale;
  const ctx = canvas.getContext('2d', { alpha: false });
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  ctx.scale(scale, scale);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Background
  const bg = colors.canvasBg(ctx, logicalWidth, logicalHeight);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, logicalWidth, logicalHeight);

  // Mandala Watermark
  ctx.save();
  ctx.globalAlpha = colors.watermarkAlpha;
  drawRubElHizb(ctx, logicalWidth / 2, logicalHeight / 2, 480, '#C9A227', 3);
  ctx.restore();

  // Outer Border
  const margin = 32;
  drawRoundedRect(ctx, margin, margin, logicalWidth - margin * 2, logicalHeight - margin * 2, 28, undefined, colors.outerBorder, 2.5);

  // Header Banner
  const headerY = margin + 28;
  drawLogoMotif(ctx, margin + 60, headerY + 36, 50, theme);

  ctx.fillStyle = colors.headerText;
  ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Daily Noor', margin + 105, headerY + 26);

  ctx.fillStyle = colors.headerText;
  ctx.font = 'bold 18px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.fillText('•   نورِ روزانہ', margin + 250, headerY + 26);

  ctx.fillStyle = colors.headerDateText;
  ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(type === 'verse' ? 'Daily Quranic Verse' : 'Daily Prophetic Hadith', margin + 105, headerY + 52);

  if (hijri) {
    ctx.textAlign = 'right';
    ctx.fillStyle = colors.headerText;
    ctx.font = 'bold 17px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
    ctx.fillText(hijri.formatted, logicalWidth - margin - 40, headerY + 26);

    if (gregorianDate) {
      ctx.fillStyle = colors.headerDateText;
      ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(gregorianDate, logicalWidth - margin - 40, headerY + 50);
    }
  }

  // Central Card Box
  const boxMargin = 55;
  const boxX = boxMargin;
  const boxY = headerY + 95;
  const boxWidth = logicalWidth - boxMargin * 2;
  const boxHeight = logicalHeight - boxY - 110;

  drawRoundedRect(ctx, boxX, boxY, boxWidth, boxHeight, 26, colors.cardBg, colors.cardBorder, 1.5);

  const isVerse = type === 'verse';
  const verseItem = item as Verse;
  const hadithItem = item as Hadith;

  // Header inside box
  ctx.fillStyle = colors.goldHeading;
  ctx.font = '900 19px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(isVerse ? "TODAY'S VERSE" : "DAILY HADITH", boxX + 28, boxY + 24);

  // Pill
  const pillText = isVerse ? 'آیتِ مبارکہ' : 'حدیثِ نبوی ﷺ';
  drawRoundedRect(ctx, boxX + (isVerse ? 200 : 180), boxY + 20, 110, 26, 8, colors.pillBg);
  ctx.fillStyle = colors.pillText;
  ctx.font = 'bold 13px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(pillText, boxX + (isVerse ? 200 : 180) + 55, boxY + 33);

  // Right source
  ctx.fillStyle = colors.goldHeading;
  ctx.font = 'bold 16px "Plus Jakarta Sans", "Noto Nastaliq Urdu", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(isVerse ? `Surah ${verseItem.surah}: ${verseItem.ayah}` : hadithItem.source, boxX + boxWidth - 28, boxY + 24);

  // Arabic Calligraphy
  let curY = boxY + 85;
  ctx.font = 'bold 40px "Amiri", "Scheherazade New", "Noto Sans Arabic", serif';
  ctx.fillStyle = colors.arabicText;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  const arabicLines = wrapText(ctx, item.arabic, boxWidth - 80);
  for (const line of arabicLines) {
    ctx.fillText(line, logicalWidth / 2, curY);
    curY += 62;
  }

  // Gold Divider
  curY += 14;
  const divGrad = ctx.createLinearGradient(logicalWidth / 2 - 120, 0, logicalWidth / 2 + 120, 0);
  divGrad.addColorStop(0, 'rgba(201, 162, 39, 0)');
  divGrad.addColorStop(0.5, '#C9A227');
  divGrad.addColorStop(1, 'rgba(201, 162, 39, 0)');
  ctx.fillStyle = divGrad;
  ctx.fillRect(logicalWidth / 2 - 120, curY, 240, 2);
  curY += 24;

  // Urdu Translation
  ctx.font = '600 24px "Noto Nastaliq Urdu", "Noto Sans Arabic", serif';
  ctx.fillStyle = colors.urduText;
  const urduLines = wrapText(ctx, item.urdu_translation, boxWidth - 80);
  for (const line of urduLines) {
    ctx.fillText(line, logicalWidth / 2, curY);
    curY += 48;
  }

  // Footer Note
  ctx.fillStyle = colors.headerDateText;
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Daily Noor App  •  Seek Light in Quran & Sunnah Every Day', logicalWidth / 2, logicalHeight - margin - 35);

  return canvas.toDataURL('image/png', 1.0);
}
