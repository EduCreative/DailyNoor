import { TafseerDetail, getTafseerForDay, getTafseerBySurahAyah } from '../data/tafseerData';

export interface DynamicTafseerEdition {
  id: string;
  nameUrdu: string;
  nameEn: string;
  author: string;
  language: 'ur' | 'en' | 'ar';
}

export const TAFSEER_EDITIONS: DynamicTafseerEdition[] = [
  {
    id: 'embedded',
    nameUrdu: 'تفسیرِ آسان (منتخب خلاصہ و دروس)',
    nameEn: 'Daily Noor Simplified Tafseer',
    author: 'Mufti Taqi Usmani / Ibn Kathir Summary',
    language: 'ur'
  },
  {
    id: 'ibn-kathir-ur',
    nameUrdu: 'تفسیر ابنِ کثیر (اردو)',
    nameEn: 'Tafseer Ibn Kathir (Urdu)',
    author: 'Hafiz Ibn Kathir',
    language: 'ur'
  },
  {
    id: 'maududi-ur',
    nameUrdu: 'تفہیم القرآن (مولانا مودودیؒ)',
    nameEn: 'Tafheem-ul-Quran (Maududi)',
    author: 'Abul A\'la Maududi',
    language: 'ur'
  },
  {
    id: 'ibn-kathir-en',
    nameUrdu: 'تفسیر ابنِ کثیر (انگلش)',
    nameEn: 'Tafseer Ibn Kathir (English)',
    author: 'Hafiz Ibn Kathir',
    language: 'en'
  }
];

// Helper to strip HTML tags from raw API responses
function cleanHtmlText(rawText: string): string {
  if (!rawText) return '';
  const div = document.createElement('div');
  div.innerHTML = rawText;
  let clean = div.textContent || div.innerText || '';
  clean = clean.replace(/<[^>]*>?/gm, '');
  clean = clean.replace(/\s+/g, ' ').trim();
  return clean;
}

export async function fetchDynamicTafseer(
  surahNumber: number,
  ayahNumber: number,
  editionId: string = 'embedded',
  fallbackDay: number = 1
): Promise<{
  text: string;
  sourceName: string;
  isOnline: boolean;
  error?: string;
}> {
  // If embedded option selected or offline, return local embedded
  if (editionId === 'embedded') {
    const local = getTafseerBySurahAyah(surahNumber, ayahNumber) || getTafseerForDay(fallbackDay);
    return {
      text: local.tafseerUrdu,
      sourceName: local.sourceNameUrdu,
      isOnline: false
    };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    let apiUrl = '';
    let tafseerName = '';

    if (editionId === 'ibn-kathir-ur') {
      // Quran.com API v4 Tafsir ID 169 (Ibn Kathir Urdu) or 168 (Jalalayn Urdu)
      apiUrl = `https://api.quran.com/api/v4/tafsirs/169/by_ayah/${surahNumber}:${ayahNumber}`;
      tafseerName = 'تفسیر ابنِ کثیر (آن لائن اردو)';
    } else if (editionId === 'ibn-kathir-en') {
      // Quran.com API v4 Tafsir ID 171 (Ibn Kathir English) or 168
      apiUrl = `https://api.quran.com/api/v4/tafsirs/171/by_ayah/${surahNumber}:${ayahNumber}`;
      tafseerName = 'Tafseer Ibn Kathir (Online English)';
    } else if (editionId === 'maududi-ur') {
      // Fawaz Ahmed CDN / Github API for Maududi Tafheem
      apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/urd-abullamaududi/${surahNumber}/${ayahNumber}.json`;
      tafseerName = 'تفہیم القرآن (مولانا ابوالاعلیٰ مودودیؒ)';
    }

    if (!apiUrl) {
      const local = getTafseerForDay(fallbackDay);
      return { text: local.tafseerUrdu, sourceName: local.sourceNameUrdu, isOnline: false };
    }

    const res = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Server returned HTTP ${res.status}`);
    }

    const data = await res.json();
    let extractedText = '';

    if (data?.tafsir?.text) {
      extractedText = cleanHtmlText(data.tafsir.text);
    } else if (data?.text) {
      extractedText = cleanHtmlText(data.text);
    }

    if (extractedText && extractedText.length > 20) {
      return {
        text: extractedText,
        sourceName: tafseerName,
        isOnline: true
      };
    } else {
      throw new Error('No content returned from API');
    }
  } catch (err: any) {
    console.warn(`Dynamic Tafseer fetch note (${editionId}):`, err.message || err);
    // Fallback gracefully to local dataset
    const local = getTafseerBySurahAyah(surahNumber, ayahNumber) || getTafseerForDay(fallbackDay);
    return {
      text: local.tafseerUrdu,
      sourceName: `${local.sourceNameUrdu} (Offline Fallback)`,
      isOnline: false,
      error: 'آن لائن تفسير حاصل کرنے میں عارضی تاخیر کی وجہ سے مقامی ذخیرہ دکھایا جا رہا ہے۔'
    };
  }
}
