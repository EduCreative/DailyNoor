import { loadAll365Data } from '../data/yearly/monthLoader';

export interface ExportProgress {
  status: 'idle' | 'generating' | 'downloaded' | 'error';
  format?: 'json' | 'csv' | 'text';
  error?: string;
}

/**
 * Generates the full structured 365-Day curriculum payload dynamically on-demand
 */
export async function generateComplete365Payload() {
  const { verses, hadiths, tafseers, dhikrs } = await loadAll365Data();
  const combinedDays = [];

  for (let day = 1; day <= 365; day++) {
    const idx = day - 1;
    const verse = verses[idx] || null;
    const hadith = hadiths[idx] || null;
    const tafseer = tafseers[idx] || null;
    const dhikr = dhikrs[idx] || null;

    combinedDays.push({
      dayOfYear: day,
      verse: verse ? {
        day: verse.day,
        surah: verse.surah,
        surahArabic: verse.surah_ar,
        ayah: verse.ayah,
        arabicText: verse.arabic,
        urduTranslation: verse.urdu_translation,
        englishExplanation: verse.explanation,
        familyDiscussionPrompt: verse.family_tip,
        audioRecitationUrl: verse.audio_url
      } : null,
      hadith: hadith ? {
        day: hadith.day,
        arabicText: hadith.arabic,
        urduTranslation: hadith.urdu_translation,
        source: hadith.source,
        category: hadith.category,
        coreLesson: hadith.lesson,
        actionableDeed: hadith.family_tip
      } : null,
      tafseer: tafseer ? {
        surah: tafseer.surah,
        surahArabic: tafseer.surah_ar,
        surahNumber: tafseer.surahNumber,
        ayah: tafseer.ayah,
        tafseerUrdu: tafseer.tafseerUrdu,
        tafseerEn: tafseer.tafseerEn,
        sourceNameUrdu: tafseer.sourceNameUrdu,
        sourceNameEn: tafseer.sourceNameEn,
        asbabAlNuzulUrdu: tafseer.asbabAlNuzulUrdu,
        asbabAlNuzulEn: tafseer.asbabAlNuzulEn,
        keyLessonsUrdu: tafseer.keyLessonsUrdu,
        keyLessonsEn: tafseer.keyLessonsEn,
        reflectionsUrdu: tafseer.reflectionsUrdu,
        reflectionsEn: tafseer.reflectionsEn
      } : null,
      dhikr: dhikr ? {
        id: dhikr.id,
        day: dhikr.day,
        titleEn: dhikr.titleEn,
        titleUrdu: dhikr.titleUrdu,
        arabic: dhikr.arabic,
        transliteration: dhikr.transliteration,
        urduTranslation: dhikr.urdu_translation,
        englishTranslation: dhikr.english_translation,
        virtueUrdu: dhikr.virtueUrdu,
        virtueEn: dhikr.virtueEn,
        targetCount: dhikr.targetCount,
        source: dhikr.source,
        category: dhikr.category
      } : null
    });
  }

  return {
    metadata: {
      appName: 'Daily Noor (نورِ روزانہ)',
      description: 'Complete 365-Day Annual Islamic Curriculum: Quran Verses, Authentic Hadith, In-depth Tafseer & Daily Dhikr',
      exportedAt: new Date().toISOString(),
      version: '2.7.0',
      totalDays: 365,
      totalVerses: verses.length,
      totalHadiths: hadiths.length,
      totalTafseerEntries: tafseers.length,
      totalDhikrEntries: dhikrs.length,
      languages: ['Arabic', 'Urdu', 'English'],
      license: 'Open Islamic Educational Resource'
    },
    days: combinedDays
  };
}

/**
 * Downloads the complete 365-day dataset as JSON file (on-demand dynamically loaded)
 */
export async function download365JsonDataset() {
  const data = await generateComplete365Payload();
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  triggerFileDownload(blob, `daily-noor-365-curriculum-${new Date().toISOString().split('T')[0]}.json`);
}

/**
 * Helper to escape CSV cell fields
 */
function escapeCsvCell(cell: string | number | undefined | null): string {
  if (cell === null || cell === undefined) return '""';
  const str = String(cell).replace(/"/g, '""');
  return `"${str}"`;
}

/**
 * Downloads the complete 365-day dataset as CSV file
 */
export async function download365CsvDataset() {
  const { verses, hadiths, tafseers, dhikrs } = await loadAll365Data();
  const headers = [
    'Day',
    'Surah Name (EN)',
    'Surah Name (AR)',
    'Ayah No',
    'Verse Arabic',
    'Verse Urdu Translation',
    'Verse English Explanation',
    'Verse Family Tip',
    'Hadith Source',
    'Hadith Category',
    'Hadith Arabic',
    'Hadith Urdu Translation',
    'Hadith Lesson',
    'Hadith Daily Deed',
    'Tafseer Source (UR)',
    'Tafseer Text (UR)',
    'Asbab al-Nuzul (UR)',
    'Tafseer Reflections (UR)',
    'Daily Dhikr Title (UR)',
    'Daily Dhikr Arabic',
    'Daily Dhikr Urdu Meaning',
    'Daily Dhikr Target Count',
    'Dhikr Virtue (UR)'
  ];

  const rows: string[] = [headers.map(escapeCsvCell).join(',')];

  for (let day = 1; day <= 365; day++) {
    const idx = day - 1;
    const verse = verses[idx] || ({} as any);
    const hadith = hadiths[idx] || ({} as any);
    const tafseer = tafseers[idx] || ({} as any);
    const dhikr = dhikrs[idx] || ({} as any);

    const row = [
      day,
      verse.surah || '',
      verse.surah_ar || '',
      verse.ayah || '',
      verse.arabic || '',
      verse.urdu_translation || '',
      verse.explanation || '',
      verse.family_tip || '',
      hadith.source || '',
      hadith.category || '',
      hadith.arabic || '',
      hadith.urdu_translation || '',
      hadith.lesson || '',
      hadith.family_tip || '',
      tafseer.sourceNameUrdu || '',
      tafseer.tafseerUrdu || '',
      tafseer.asbabAlNuzulUrdu || '',
      tafseer.reflectionsUrdu || '',
      dhikr.titleUrdu || '',
      dhikr.arabic || '',
      dhikr.urdu_translation || '',
      dhikr.targetCount || '',
      dhikr.virtueUrdu || ''
    ];

    rows.push(row.map(escapeCsvCell).join(','));
  }

  // Prepend UTF-8 BOM so Excel/Numbers renders Arabic & Urdu Nastaliq correctly
  const csvContent = '\uFEFF' + rows.join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  triggerFileDownload(blob, `daily-noor-365-curriculum-${new Date().toISOString().split('T')[0]}.csv`);
}

/**
 * Downloads a clean Markdown summary guide
 */
export async function download365MarkdownGuide() {
  const { verses, hadiths, tafseers, dhikrs } = await loadAll365Data();
  const lines: string[] = [
    '# Daily Noor (نورِ روزانہ) — Complete 365-Day Islamic Curriculum Guide',
    `Exported on: ${new Date().toLocaleDateString('en-US', { dateStyle: 'full' })}`,
    'Website: Daily Noor (1 Quran Verse, 1 Hadith, Tafseer & Dhikr Daily)',
    '',
    '---',
    ''
  ];

  for (let day = 1; day <= 365; day++) {
    const idx = day - 1;
    const verse = verses[idx];
    const hadith = hadiths[idx];
    const tafseer = tafseers[idx];
    const dhikr = dhikrs[idx];

    lines.push(`## 📅 Day ${day} of 365`);
    if (verse) {
      lines.push(`### 📖 Daily Quran Verse: ${verse.surah} (${verse.surah_ar}) — Ayah ${verse.ayah}`);
      lines.push(`> **Arabic**: ${verse.arabic}`);
      lines.push(`> **اردو ترجمہ**: ${verse.urdu_translation}`);
      lines.push(`> **English**: ${verse.explanation}`);
      lines.push(`> **Family Reflection**: ${verse.family_tip}`);
      lines.push('');
    }

    if (hadith) {
      lines.push(`### 📜 Daily Hadith: ${hadith.source} (${hadith.category})`);
      lines.push(`> **Arabic**: ${hadith.arabic}`);
      lines.push(`> **اردو ترجمہ**: ${hadith.urdu_translation}`);
      lines.push(`> **Lesson**: ${hadith.lesson}`);
      lines.push(`> **Daily Action Item**: ${hadith.family_tip}`);
      lines.push('');
    }

    if (tafseer) {
      lines.push(`### 🔍 Tafseer Highlight: ${tafseer.surah} (${tafseer.sourceNameUrdu || 'تفسیر'})`);
      lines.push(`- **تفسیری نکات**: ${tafseer.tafseerUrdu}`);
      if (tafseer.asbabAlNuzulUrdu) {
        lines.push(`- **شانِ نزول**: ${tafseer.asbabAlNuzulUrdu}`);
      }
      lines.push('');
    }

    if (dhikr) {
      lines.push(`### 📿 Daily Dhikr: ${dhikr.titleUrdu} (Count: ${dhikr.targetCount}x)`);
      lines.push(`> **Arabic**: ${dhikr.arabic}`);
      lines.push(`> **اردو معنی**: ${dhikr.urdu_translation}`);
      lines.push(`> **فضیلت**: ${dhikr.virtueUrdu}`);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8;' });
  triggerFileDownload(blob, `daily-noor-365-guide-${new Date().toISOString().split('T')[0]}.md`);
}

/**
 * Triggers standard browser file download
 */
function triggerFileDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
