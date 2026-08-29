import { Verse, Hadith, QuizQuestion } from '../types';

/**
 * Generates 3 relevant, engaging questions for a given day's Verse and Hadith.
 */
export function getQuizForDay(verse: Verse, hadith: Hadith): QuizQuestion[] {
  const day = verse.day;

  // Question 1: Based on Today's Quranic Verse
  const surahDisplayName = verse.surah_ar ? verse.surah_ar.replace(/^سورة\s+/, '') : verse.surah;
  const verseUrduSummary = verse.urdu_translation.length > 50 
    ? verse.urdu_translation.slice(0, 48) + '...' 
    : verse.urdu_translation;

  const q1: QuizQuestion = {
    id: `q-verse-${day}`,
    type: 'verse',
    reference: `Surah ${verse.surah} (${verse.ayah})`,
    questionUrdu: `آج کی قرآنی آیت کس سورت سے ماخوذ ہے اور اس کا مرکزی پیغام کیا ہے؟`,
    questionEn: `Which Surah is today's verse from, and what is its core theme?`,
    options: [
      `سورۃ ${surahDisplayName} — ${verseUrduSummary}`,
      `سورۃ البقرہ — احکامِ طہارت اور روزہ`,
      `سورۃ النساء — وراثت اور مالی معاملات`,
      `سورۃ الملک — آخرت اور تخلیقِ کائنات`
    ],
    correctIndex: 0,
    explanationUrdu: `آج کی آیت مبارکہ سورۃ ${verse.surah} کی آیت ${verse.ayah} ہے: "${verse.urdu_translation}"`,
    explanationEn: `Today's verse is from Surah ${verse.surah} (Ayah ${verse.ayah}): "${verse.explanation}"`
  };

  // Question 2: Based on Today's Prophetic Hadith
  const q2: QuizQuestion = {
    id: `q-hadith-${day}`,
    type: 'hadith',
    reference: hadith.source,
    questionUrdu: `آج کی حدیثِ نبوی ﷺ کے مطابق کونسا عملی اخلاق سکھایا گیا ہے؟`,
    questionEn: `According to today's Hadith, what key virtue or practical lesson is emphasized?`,
    options: [
      `صرف ظاہری عبادات پر توجہ دینا`,
      `${hadith.lesson.slice(0, 48)}`,
      `غیر ضروری بحث و مباحثہ کرنا`,
      `دنیاوی مال و دولت کی کثرت`
    ],
    correctIndex: 1,
    explanationUrdu: `حدیثِ نبوی ﷺ کا حوالہ (${hadith.source}) ہے۔ سبق: ${hadith.lesson}`,
    explanationEn: `Hadith source: ${hadith.source}. Lesson: ${hadith.lesson}`
  };

  // Question 3: Deep Reflection / Islamic Knowledge related to the theme
  const q3Pool = [
    {
      questionUrdu: `قرآن مجید کی تلاوت اور اس پر غور و فکر (تدبر) کا اصل مقصد کیا ہے؟`,
      questionEn: `What is the primary purpose of reciting and reflecting (Tadabbur) upon the Quran?`,
      options: [
        `محض الفاظ دہرانا بغیر سمجھے`,
        `اپنی زندگی کو اللہ کے احکامات کے مطابق ڈھالنا اور رہنمائی پانا`,
        `لوگوں کے سامنے علم کا اظہار کرنا`,
        `صرف تقریبات میں برکت کے لیے پڑھنا`
      ],
      correctIndex: 1,
      explanationUrdu: `اللہ تعالیٰ کا فرمان ہے: "یہ ایک برکت والی کتاب ہے تاکہ لوگ اس کی آیات پر غور کریں" (سورۃ ص: 29)۔`,
      explanationEn: `Allah says: "[This is] a blessed Book which We have revealed to you, that they might reflect upon its verses" (Surah Sad: 29).`
    },
    {
      questionUrdu: `رسول اللہ ﷺ نے بہترین مسلمان کسے قرار دیا ہے؟`,
      questionEn: `Whom did the Prophet Muhammad ﷺ describe as the best among people?`,
      options: [
        `جو سب سے زیادہ مالدار ہو`,
        `جس کے اخلاق سب سے اچھے ہوں اور جو دوسروں کو نفع پہنچائے`,
        `جو صرف اپنے لیے فکرمند رہے`,
        `جو دنیاوی شہرت حاصل کرے`
      ],
      correctIndex: 1,
      explanationUrdu: `حدیث مبارک ہے: "تم میں سے بہترین وہ ہے جس کے اخلاق اچھے ہوں" (صحیح بخاری)۔`,
      explanationEn: `The Prophet ﷺ said: "The best among you are those who have the best manners and character" (Sahih al-Bukhari).`
    },
    {
      questionUrdu: `صلح رحمی (رشتہ داروں کے ساتھ حسنِ سلوک) کے بارے میں اسلام کی کیا تعلیم ہے؟`,
      questionEn: `What is Islam's guidance regarding maintaining ties of kinship (Silah Rahmi)?`,
      options: [
        `رشتہ توڑنے والے سے بھی صلہ رحمی اور معافی کا رویہ رکھنا`,
        `صرف انہی سے ملنا جو ہم سے ملیں`,
        `رشتہ داروں سے فاصلہ رکھنا`,
        `معمولی بات پر قطع تعلق کر لینا`
      ],
      correctIndex: 0,
      explanationUrdu: `حدیث: "صلہ رحمی کرنے والا وہ نہیں جو بدلے میں کرے، بلکہ وہ ہے کہ جب اس سے رشتہ توڑا جائے تو وہ جوڑے" (صحیح بخاری)۔`,
      explanationEn: `The Prophet ﷺ said: "The one who maintains ties of kinship is not the one who reciprocates, but the one who joins them when they are severed."`
    },
    {
      questionUrdu: `غصے اور ناگواری کے وقت رسول اللہ ﷺ نے کیا طریقہ سکھایا ہے؟`,
      questionEn: `What did the Prophet ﷺ teach us to do when feeling angry?`,
      options: [
        `فورا اونچی آواز میں غصہ نکالنا`,
        `خاموش ہو جانا، اعوذ باللہ پڑھنا، اور وضو / جگہ تبدیل کرنا`,
        `دوسروں پر الزام لگانا`,
        `ضد پر اڑے رہنا`
      ],
      correctIndex: 1,
      explanationUrdu: `سنت نبوی ﷺ ہے کہ غصے کے وقت خاموشی اختیار کی جائے، پانی پیا جائے اور تعوذ پڑھا جائے۔`,
      explanationEn: `The Sunnah teaches us to remain silent, recite Ta'awwudh, drink water, or change posture when angry.`
    }
  ];

  const genericQ = q3Pool[day % q3Pool.length];

  const q3: QuizQuestion = {
    id: `q-knowledge-${day}`,
    type: 'general',
    reference: 'تعلیماتِ اسلام و اخلاق',
    questionUrdu: genericQ.questionUrdu,
    questionEn: genericQ.questionEn,
    options: genericQ.options,
    correctIndex: genericQ.correctIndex,
    explanationUrdu: genericQ.explanationUrdu,
    explanationEn: genericQ.explanationEn
  };

  return [q1, q2, q3];
}
