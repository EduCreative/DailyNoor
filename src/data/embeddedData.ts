import { Verse, Hadith } from '../types';

/**
 * Lightweight initial fallback dataset (Days 1-7)
 * Full 365-day dataset is loaded on-demand via dynamic month imports (monthLoader.ts)
 */
export const EMBEDDED_VERSES: Verse[] = [
  {
    day: 1,
    surah: "Al-Fatiha",
    surah_ar: "سورة الفاتحة",
    ayah: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    urdu_translation: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
    explanation: "You alone we worship, and You alone we ask for help. Complete reliance and monotheism.",
    family_tip: "آج کھانے کی میز پر بات کریں کہ جب بھی کوئی مشکل آئے تو سب سے پہلے اللہ سے رجوع کیسے کریں۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/001005.mp3"
  },
  {
    day: 2,
    surah: "Al-Baqarah",
    surah_ar: "سورة البقرة",
    ayah: 152,
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    urdu_translation: "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    explanation: "Remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    family_tip: "آج رات سونے سے پہلے فیملی کا ہر فرد اللہ کی کم از کم 3 نعمتوں کا شکر ادا کرے۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/002152.mp3"
  },
  {
    day: 3,
    surah: "Al-Baqarah",
    surah_ar: "سورة البقرة",
    ayah: 186,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    urdu_translation: "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو میں تو بہت قریب ہوں، پکارنے والے کی دعا قبول کرتا ہوں۔",
    explanation: "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant.",
    family_tip: "بچوں کو سکھائیں کہ دعا مانگنے کے لیے دل کا خلوص ضروری ہے، اللہ ہر وقت سنتا ہے۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/002186.mp3"
  },
  {
    day: 4,
    surah: "Al-Imran",
    surah_ar: "سورة آل عمران",
    ayah: 159,
    arabic: "فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ",
    urdu_translation: "اللہ کی رحمت سے آپ ان کے لیے نرم دل بن گئے، اگر آپ تندخو اور سخت دل ہوتے تو وہ آپ کے پاس سے منتشر ہو جاتے۔",
    explanation: "So by mercy from Allah, you were lenient with them. And if you had been rude and harsh in heart, they would have disbanded.",
    family_tip: "آج گھر میں ہر فرد ایک دوسرے سے خاص طور پر نرمی اور محبت سے بات کرنے کی کوشش کرے۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/003159.mp3"
  },
  {
    day: 5,
    surah: "An-Nisa",
    surah_ar: "سورة النساء",
    ayah: 36,
    arabic: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ",
    urdu_translation: "اور اللہ کی عبادت کرو اور اس کے ساتھ کسی کو شریک نہ ٹھہراؤ، اور والدین، قرابت داروں، یتیموں اور مسکینوں کے ساتھ حسنِ سلوک کرو۔",
    explanation: "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy.",
    family_tip: "آج کسی دور کے رشتہ دار یا ضرورت مند کا حال معلوم کریں اور ان کی مدد کریں۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/004036.mp3"
  },
  {
    day: 6,
    surah: "Al-Ma'idah",
    surah_ar: "سورة المائدة",
    ayah: 2,
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    urdu_translation: "اور نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کرو، اور گناہ اور زیادتی کے کاموں میں تعاون نہ کرو۔",
    explanation: "And cooperate in righteousness and piety, but do not cooperate in sin and aggression.",
    family_tip: "آج گھر میں کسی مشترکہ نیک کام کی منصوبہ بندی کریں جیسے راشن تقسیم یا کتابیں ہدیہ کرنا۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/005002.mp3"
  },
  {
    day: 7,
    surah: "Al-An'am",
    surah_ar: "سورة الأنعام",
    ayah: 162,
    arabic: "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    urdu_translation: "آپ فرما دیجئے کہ بے شک میری نماز، میری قربانی، میری زندگی اور میری موت سب اللہ ہی کے لیے ہے جو سارے جہانوں کا پالنے والا ہے۔",
    explanation: "Say, 'Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.'",
    family_tip: "ہر کام شروع کرنے سے پہلے نیت کو خالص اللہ کی رضا کے لیے کرنے کی مشق کریں۔",
    audio_url: "https://everyayah.com/data/Alafasy_128kbps/006162.mp3"
  }
];

export const EMBEDDED_HADITHS: Hadith[] = [
  {
    day: 1,
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    urdu_translation: "تمام اعمال کا دارومدار نیتوں پر ہے، اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    source: "صحیح البخاری: 1 (Sahih al-Bukhari 1)",
    category: "اخلاص و نیت",
    lesson: "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل برباد ہو جاتا ہے۔",
    family_tip: "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    day: 2,
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    urdu_translation: "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    source: "صحیح البخاری: 5027 (Sahih al-Bukhari 5027)",
    category: "فضیلتِ قرآن",
    lesson: "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت ہے۔",
    family_tip: "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    day: 3,
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    urdu_translation: "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    source: "صحیح البخاری: 10 (Sahih al-Bukhari 10)",
    category: "حقوق العباد",
    lesson: "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا ایمان کی نشانی ہے۔",
    family_tip: "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    day: 4,
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    urdu_translation: "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    source: "صحیح البخاری: 13 (Sahih al-Bukhari 13)",
    category: "اخوت و محبت",
    lesson: "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد سے بچنا سچے مومن کا معیار ہے۔",
    family_tip: "اپنے بہن بھائیوں یا دوستوں کے لیے بھی وہی چیز پسند کریں جو آپ اپنے لیے چاہتے ہیں۔"
  },
  {
    day: 5,
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    urdu_translation: "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    source: "جامع الترمذی: 1956 (Jami at-Tirmidhi 1956)",
    category: "حسنِ اخلاق",
    lesson: "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی خرچ کے نیکیوں کا عظیم ذریعہ ہے۔",
    family_tip: "آج گھر کے ہر فرد اور ملنے والے سے مسکرا کر اور گرم جوشی سے ملیں۔"
  },
  {
    day: 6,
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    urdu_translation: "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے پیچھے نیکی کرو جو اسے مٹا دے، اور لوگوں کے ساتھ اچھے اخلاق سے پیش آؤ۔",
    source: "جامع الترمذی: 1987 (Jami at-Tirmidhi 1987)",
    category: "تقویٰ و حسنِ اخلاق",
    lesson: "خلوت اور جلوت دونوں میں تقویٰ اختیار کرنا اور غلطی کے بعد فوری نیکی کرنا کامیابی ہے۔",
    family_tip: "تنہائی میں بھی یہ دھیان رکھیں کہ اللہ مجھے دیکھ رہا ہے۔"
  },
  {
    day: 7,
    arabic: "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    urdu_translation: "جو لوگوں پر رحم نہیں کرتا اللہ اس پر رحم نہیں فرماتا۔",
    source: "صحیح البخاری: 7376 (Sahih al-Bukhari 7376)",
    category: "رحمت و شفقت",
    lesson: "چھوٹوں پر شفقت، بڑوں کی عزت اور تمام مخلوق پر رحم کرنا اللہ کی رحمت کا سبب ہے۔",
    family_tip: "آج گھر میں کسی غلطی پر ڈانٹنے کی بجائے نرمی اور شفقت سے سمجھائیں۔"
  }
];
