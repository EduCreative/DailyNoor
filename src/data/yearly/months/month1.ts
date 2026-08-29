import { Verse, Hadith, DhikrItem } from '../../../types';
import { TafseerDetail } from '../../tafseerData';

export const month = 1;
export const monthName = "January";
export const startDay = 1;
export const endDay = 31;

export const verses: Verse[] = [
  {
    "day": 1,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 1,
    "arabic": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "urdu_translation": "شروع الله کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے",
    "explanation": "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 1) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001001.mp3"
  },
  {
    "day": 2,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 2,
    "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "سب طرح کی تعریف خدا ہی کو (سزاوار) ہے جو تمام مخلوقات کا پروردگار ہے",
    "explanation": "[All] praise is [due] to Allah, Lord of the worlds -",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 2) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001002.mp3"
  },
  {
    "day": 3,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 3,
    "arabic": "الرَّحْمَٰنِ الرَّحِيمِ",
    "urdu_translation": "بڑا مہربان نہایت رحم والا",
    "explanation": "The Entirely Merciful, the Especially Merciful,",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 3) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001003.mp3"
  },
  {
    "day": 4,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 4,
    "arabic": "مَالِكِ يَوْمِ الدِّينِ",
    "urdu_translation": "انصاف کے دن کا حاکم",
    "explanation": "Sovereign of the Day of Recompense.",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 4) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001004.mp3"
  },
  {
    "day": 5,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 5,
    "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "urdu_translation": "(اے پروردگار) ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں",
    "explanation": "It is You we worship and You we ask for help.",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 5) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001005.mp3"
  },
  {
    "day": 6,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 6,
    "arabic": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    "urdu_translation": "ہم کو سیدھے رستے چلا",
    "explanation": "Guide us to the straight path -",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 6) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001006.mp3"
  },
  {
    "day": 7,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 7,
    "arabic": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    "urdu_translation": "ان لوگوں کے رستے جن پر تو اپنا فضل وکرم کرتا رہا نہ ان کے جن پر غصے ہوتا رہا اور نہ گمراہوں کے",
    "explanation": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    "family_tip": "آج کے دن سورۃ سورة الفاتحة (آیت 7) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001007.mp3"
  },
  {
    "day": 8,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 2,
    "arabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
    "urdu_translation": "یہ کتاب (قرآن مجید) اس میں کچھ شک نہیں (کہ کلامِ خدا ہے۔ خدا سے) ڈرنے والوں کی رہنما ہے",
    "explanation": "This is the Book about which there is no doubt, a guidance for those conscious of Allah -",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 2) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002002.mp3"
  },
  {
    "day": 9,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 21,
    "arabic": "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    "urdu_translation": "لوگو! اپنے پروردگار کی عبات کرو جس نے تم کو اور تم سے پہلے لوگوں کو پیدا کیا تاکہ تم (اس کے عذاب سے) بچو",
    "explanation": "O mankind, worship your Lord, who created you and those before you, that you may become righteous -",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 21) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002021.mp3"
  },
  {
    "day": 10,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 30,
    "arabic": "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
    "urdu_translation": "اور (وہ وقت یاد کرنے کے قابل ہے) جب تمہارے پروردگار نے فرشتوں سے فرمایا کہ میں زمین میں (اپنا) نائب بنانے والا ہوں۔ انہوں نے کہا۔ کیا تُو اس میں ایسے شخص کو نائب بنانا چاہتا ہے جو خرابیاں کرے اور کشت وخون کرتا پھرے اور ہم تیری تعریف کے ساتھ تسبیح وتقدیس کرتے رہتے ہیں۔ (خدا نے) فرمایا میں وہ باتیں جانتا ہوں جو تم نہیں جانتے",
    "explanation": "And [mention, O Muhammad], when your Lord said to the angels, \"Indeed, I will make upon the earth a successive authority.\" They said, \"Will You place upon it one who causes corruption therein and sheds blood, while we declare Your praise and sanctify You?\" Allah said, \"Indeed, I know that which you do not know.\"",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 30) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002030.mp3"
  },
  {
    "day": 11,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 43,
    "arabic": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    "urdu_translation": "اور نماز پڑھا کرو اور زکوٰة دیا کرو اور (خدا کے آگے) جھکنے والوں کے ساتھ جھکا کرو",
    "explanation": "And establish prayer and give zakah and bow with those who bow [in worship and obedience].",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 43) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002043.mp3"
  },
  {
    "day": 12,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 45,
    "arabic": "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    "urdu_translation": "اور (رنج وتکلیف میں) صبر اور نماز سے مدد لیا کرو اور بے شک نماز گراں ہے، مگر ان لوگوں پر (گراں نہیں) جو عجز کرنے والے ہیں",
    "explanation": "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah]",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 45) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002045.mp3"
  },
  {
    "day": 13,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 83,
    "arabic": "وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ لَا تَعْبُدُونَ إِلَّا اللَّهَ وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَقُولُوا لِلنَّاسِ حُسْنًا وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِنْكُمْ وَأَنْتُمْ مُعْرِضُونَ",
    "urdu_translation": "اور جب ہم نے بنی اسرائیل سے عہد لیا کہ خدا کے سوا کسی کی عبادت نہ کرنا اور ماں باپ اور رشتہ داروں اور یتیموں اور محتاجوں کے ساتھ بھلائی کرتے رہنا اور لوگوں سے اچھی باتیں کہنا، اور نماز پڑھتے اور زکوٰة دیتے رہنا، تو چند شخصوں کے سوا تم سب (اس عہد سے) منہ پھیر کر پھر بیٹھے",
    "explanation": "And [recall] when We took the covenant from the Children of Israel, [enjoining upon them], \"Do not worship except Allah; and to parents do good and to relatives, orphans, and the needy. And speak to people good [words] and establish prayer and give zakah.\" Then you turned away, except a few of you, and you were refusing.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 83) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002083.mp3"
  },
  {
    "day": 14,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 110,
    "arabic": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ۚ وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِنْدَ اللَّهِ ۗ إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ",
    "urdu_translation": "اور نماز ادا کرتے رہو اور زکوٰة دیتے رہو۔ اور جو بھلائی اپنے لیے آگے بھیج رکھو گے، اس کو خدا کے ہاں پا لو گے۔ کچھ شک نہیں کہ خدا تمہارے سب کاموں کو دیکھ رہا ہے",
    "explanation": "And establish prayer and give zakah, and whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah of what you do, is Seeing.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 110) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002110.mp3"
  },
  {
    "day": 15,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 143,
    "arabic": "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِي كُنْتَ عَلَيْهَا إِلَّا لِنَعْلَمَ مَنْ يَتَّبِعُ الرَّسُولَ مِمَّنْ يَنْقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِنْ كَانَتْ لَكَبِيرَةً إِلَّا عَلَى الَّذِينَ هَدَى اللَّهُ ۗ وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ ۚ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ",
    "urdu_translation": "اور اسی طرح ہم نے تم کو امتِ معتدل بنایا ہے، تاکہ تم لوگوں پر گواہ بنو اور پیغمبر (آخرالزماں) تم پر گواہ بنیں۔ اور جس قبلے پر تم (پہلے) تھے، اس کو ہم نے اس لیے مقرر کیا تھا کہ معلوم کریں، کون (ہمارے) پیغمبر کا تابع رہتا ہے، اور کون الٹے پاؤں پھر جاتا ہے۔ اور یہ بات (یعنی تحویل قبلہ لوگوں کو) گراں معلوم ہوئی، مگر جن کو خدا نے ہدایت بخشی (وہ اسے گراں نہیں سمجھتے) اور خدا ایسا نہیں کہ تمہارے ایمان کو یونہی کھو دے۔ خدا تو لوگوں پر بڑا مہربان (اور) صاحبِ رحمت ہے",
    "explanation": "And thus we have made you a just community that you will be witnesses over the people and the Messenger will be a witness over you. And We did not make the qiblah which you used to face except that We might make evident who would follow the Messenger from who would turn back on his heels. And indeed, it is difficult except for those whom Allah has guided. And never would Allah have caused you to lose your faith. Indeed Allah is, to the people, Kind and Merciful.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 143) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002143.mp3"
  },
  {
    "day": 16,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "سو تم مجھے یاد کرو۔ میں تمہیں یاد کیا کروں گا۔ اور میرے احسان مانتے رہنا اور ناشکری نہ کرنا",
    "explanation": "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 152) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002152.mp3"
  },
  {
    "day": 17,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 153,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    "urdu_translation": "اے ایمان والو صبر اور نماز سے مدد لیا کرو بےشک خدا صبر کرنے والوں کے ساتھ ہے",
    "explanation": "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 153) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002153.mp3"
  },
  {
    "day": 18,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 155,
    "arabic": "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
    "urdu_translation": "اور ہم کسی قدر خوف اور بھوک اور مال اور جانوں اور میوؤں کے نقصان سے تمہاری آزمائش کریں گے توصبر کرنے والوں کو (خدا کی خوشنودی کی) بشارت سنا دو",
    "explanation": "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient,",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 155) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002155.mp3"
  },
  {
    "day": 19,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 156,
    "arabic": "الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    "urdu_translation": "ان لوگوں پر جب کوئی مصیبت واقع ہوتی ہے تو کہتے ہیں کہ ہم خدا ہی کا مال ہیں اور اسی کی طرف لوٹ کر جانے والے ہیں",
    "explanation": "Who, when disaster strikes them, say, \"Indeed we belong to Allah, and indeed to Him we will return.\"",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 156) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002156.mp3"
  },
  {
    "day": 20,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 177,
    "arabic": "۞ لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينَ وَابْنَ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا عَاهَدُوا ۖ وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ وَحِينَ الْبَأْسِ ۗ أُولَٰئِكَ الَّذِينَ صَدَقُوا ۖ وَأُولَٰئِكَ هُمُ الْمُتَّقُونَ",
    "urdu_translation": "نیکی یہی نہیں کہ تم مشرق یا مغرب کو (قبلہ سمجھ کر ان) کی طرف منہ کرلو بلکہ نیکی یہ ہے کہ لوگ خدا پر اور روز آخرت پر اور فرشتوں پر اور (خدا کی) کتاب پر اور پیغمبروں پر ایمان لائیں۔ اور مال باوجود عزیز رکھنے کے رشتہ داروں اور یتیموں اور محتاجوں اور مسافروں اور مانگنے والوں کو دیں اور گردنوں (کے چھڑانے) میں (خرچ کریں) اور نماز پڑھیں اور زکوٰة دیں۔ اور جب عہد کرلیں تو اس کو پورا کریں۔ اور سختی اور تکلیف میں اور (معرکہ) کارزار کے وقت ثابت قدم رہیں۔ یہی لوگ ہیں جو (ایمان میں) سچے ہیں اور یہی ہیں جو (خدا سے) ڈرنے والے ہیں",
    "explanation": "Righteousness is not that you turn your faces toward the east or the west, but [true] righteousness is [in] one who believes in Allah, the Last Day, the angels, the Book, and the prophets and gives wealth, in spite of love for it, to relatives, orphans, the needy, the traveler, those who ask [for help], and for freeing slaves; [and who] establishes prayer and gives zakah; [those who] fulfill their promise when they promise; and [those who] are patient in poverty and hardship and during battle. Those are the ones who have been true, and it is those who are the righteous.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 177) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002177.mp3"
  },
  {
    "day": 21,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 183,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    "urdu_translation": "مومنو! تم پر روزے فرض کئے گئے ہیں۔ جس طرح تم سے پہلے لوگوں پر فرض کئے گئے تھے تاکہ تم پرہیزگار بنو",
    "explanation": "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous -",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 183) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002183.mp3"
  },
  {
    "day": 22,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 185,
    "arabic": "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ ۚ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ ۖ وَمَنْ كَانَ مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ ۗ يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَىٰ مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ",
    "urdu_translation": "(روزوں کا مہینہ) رمضان کا مہینہ (ہے) جس میں قرآن (اول اول) نازل ہوا جو لوگوں کا رہنما ہے اور (جس میں) ہدایت کی کھلی نشانیاں ہیں اور (جو حق و باطل کو) الگ الگ کرنے والا ہے تو جو کوئی تم میں سے اس مہینے میں موجود ہو چاہیئے کہ پورے مہینے کے روزے رکھے اور جو بیمار ہو یا سفر میں ہو تو دوسرے دنوں میں (رکھ کر) ان کا شمار پورا کرلے۔ خدا تمہارے حق میں آسانی چاہتا ہے اور سختی نہیں چاہتا اور (یہ آسانی کا حکم) اس لئے (دیا گیا ہے) کہ تم روزوں کا شمار پورا کرلو اور اس احسان کے بدلے کہ خدا نے تم کو ہدایت بخشی ہے تم اس کو بزرگی سے یاد کر واور اس کا شکر کرو",
    "explanation": "The month of Ramadhan [is that] in which was revealed the Qur'an, a guidance for the people and clear proofs of guidance and criterion. So whoever sights [the new moon of] the month, let him fast it; and whoever is ill or on a journey - then an equal number of other days. Allah intends for you ease and does not intend for you hardship and [wants] for you to complete the period and to glorify Allah for that [to] which He has guided you; and perhaps you will be grateful.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 185) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002185.mp3"
  },
  {
    "day": 23,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 186,
    "arabic": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ",
    "urdu_translation": "اور (اے پیغمبر) جب تم سے میرے بندے میرے بارے میں دریافت کریں تو (کہہ دو کہ) میں تو (تمہارے) پاس ہوں جب کوئی پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول کرتا ہوں تو ان کو چاہیئے کہ میرے حکموں کو مانیں اور مجھ پر ایمان لائیں تاکہ نیک رستہ پائیں",
    "explanation": "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 186) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002186.mp3"
  },
  {
    "day": 24,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 201,
    "arabic": "وَمِنْهُمْ مَنْ يَقُولُ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "urdu_translation": "اور بعضے ایسے ہیں کہ دعا کرتے ہیں کہ پروردگار ہم کو دنیا میں بھی نعمت عطا فرما اور آخرت میں بھی نعمت بخشیو اور دوزخ کے عذاب سے محفوظ رکھیو",
    "explanation": "But among them is he who says, \"Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.\"",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 201) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002201.mp3"
  },
  {
    "day": 25,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 216,
    "arabic": "كُتِبَ عَلَيْكُمُ الْقِتَالُ وَهُوَ كُرْهٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ",
    "urdu_translation": "(مسلمانو) تم پر (خدا کے رستے میں) لڑنا فرض کردیا گیا ہے وہ تمہیں ناگوار تو ہوگا مگر عجب نہیں کہ ایک چیز تم کو بری لگے اور وہ تمہارے حق میں بھلی ہو اور عجب نہیں کہ ایک چیز تم کو بھلی لگے اور وہ تمہارے لئے مضر ہو۔ اور ان باتوں کو) خدا ہی بہتر جانتا ہے اور تم نہیں جانتے",
    "explanation": "Fighting has been enjoined upon you while it is hateful to you. But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah Knows, while you know not.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 216) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002216.mp3"
  },
  {
    "day": 26,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 255,
    "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "urdu_translation": "خدا (وہ معبود برحق ہے کہ) اس کے سوا کوئی عبادت کے لائق نہیں زندہ ہمیشہ رہنے والا اسے نہ اونگھ آتی ہے نہ نیند جو کچھ آسمانوں میں اور جو کچھ زمین میں ہیں سب اسی کا ہے کون ہے جو اس کی اجازت کے بغیر اس سے (کسی کی) سفارش کر سکے جو کچھ لوگوں کے روبرو ہو رہا ہے اور جو کچھ ان کے پیچھے ہوچکا ہے اسے سب معلوم ہے اور وہ اس کی معلومات میں سے کسی چیز پر دسترس حاصل نہیں کر سکتے ہاں جس قدر وہ چاہتا ہے (اسی قدر معلوم کرا دیتا ہے) اس کی بادشاہی (اور علم) آسمان اور زمین سب پر حاوی ہے اور اسے ان کی حفاظت کچھ بھی دشوار نہیں وہ بڑا عالی رتبہ اور جلیل القدر ہے",
    "explanation": "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 255) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002255.mp3"
  },
  {
    "day": 27,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 256,
    "arabic": "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انْفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ",
    "urdu_translation": "دین (اسلام) میں زبردستی نہیں ہے ہدایت (صاف طور پر ظاہر اور) گمراہی سے الگ ہو چکی ہے تو جو شخص بتوں سے اعتقاد نہ رکھے اور خدا پر ایمان لائے اس نے ایسی مضبوط رسی ہاتھ میں پکڑ لی ہے جو کبھی ٹوٹنے والی نہیں اور خدا (سب کچھ) سنتا اور (سب کچھ) جانتا ہے",
    "explanation": "There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong. So whoever disbelieves in Taghut and believes in Allah has grasped the most trustworthy handhold with no break in it. And Allah is Hearing and Knowing.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 256) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002256.mp3"
  },
  {
    "day": 28,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 261,
    "arabic": "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
    "urdu_translation": "جو لوگ اپنا مال خدا کی راہ میں خرچ کرتے ہیں ان (کے مال) کی مثال اس دانے کی سی ہے جس سے سات بالیں اگیں اور ہر ایک بال میں سو سو دانے ہوں اور خدا جس (کے مال) کو چاہتا ہے زیادہ کرتا ہے۔ وہ بڑی کشائش والا اور سب کچھ جاننے والا ہے",
    "explanation": "The example of those who spend their wealth in the way of Allah is like a seed [of grain] which grows seven spikes; in each spike is a hundred grains. And Allah multiplies [His reward] for whom He wills. And Allah is all-Encompassing and Knowing.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 261) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002261.mp3"
  },
  {
    "day": 29,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 263,
    "arabic": "۞ قَوْلٌ مَعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ مِنْ صَدَقَةٍ يَتْبَعُهَا أَذًى ۗ وَاللَّهُ غَنِيٌّ حَلِيمٌ",
    "urdu_translation": "جس خیرات دینے کے بعد (لینے والے کو) ایذا دی جائے اس سے تو نرم بات کہہ دینی اور (اس کی بے ادبی سے) درگزر کرنا بہتر ہے اور خدا بےپروا اور بردبار ہے",
    "explanation": "Kind speech and forgiveness are better than charity followed by injury. And Allah is Free of need and Forbearing.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 263) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002263.mp3"
  },
  {
    "day": 30,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 267,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا أَنْفِقُوا مِنْ طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُمْ مِنَ الْأَرْضِ ۖ وَلَا تَيَمَّمُوا الْخَبِيثَ مِنْهُ تُنْفِقُونَ وَلَسْتُمْ بِآخِذِيهِ إِلَّا أَنْ تُغْمِضُوا فِيهِ ۚ وَاعْلَمُوا أَنَّ اللَّهَ غَنِيٌّ حَمِيدٌ",
    "urdu_translation": "مومنو! جو پاکیزہ اور عمدہ مال تم کماتے ہوں اور جو چیزیں ہم تمہارے لئے زمین سےنکالتے ہیں ان میں سے (راہ خدا میں) خرچ کرو۔ اور بری اور ناپاک چیزیں دینے کا قصد نہ کرنا کہ (اگر وہ چیزیں تمہیں دی جائیں تو) بجز اس کے کہ (لیتے وقت) آنکھیں بند کرلو ان کو کبھی نہ لو۔ اور جان رکھو کہ خدا بےپروا (اور) قابل ستائش ہے",
    "explanation": "O you who have believed, spend from the good things which you have earned and from that which We have produced for you from the earth. And do not aim toward the defective therefrom, spending [from that] while you would not take it [yourself] except with closed eyes. And know that Allah is Free of need and Praiseworthy.",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 267) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002267.mp3"
  },
  {
    "day": 31,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 286,
    "arabic": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    "urdu_translation": "خدا کسی شخص کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا۔ اچھے کام کرے گا تو اس کو ان کا فائدہ ملے گا برے کرے گا تو اسے ان کا نقصان پہنچے گا۔ اے پروردگار اگر ہم سے بھول یا چوک ہوگئی ہو تو ہم سے مؤاخذہ نہ کیجیو۔ اے پروردگار ہم پر ایسا بوجھ نہ ڈالیو جیسا تو نے ہم سے پہلے لوگوں پر ڈالا تھا۔ اے پروردگار جتنا بوجھ اٹھانے کی ہم میں طاقت نہیں اتنا ہمارے سر پر نہ رکھیو۔ اور (اے پروردگار) ہمارے گناہوں سے درگزر کر اور ہمیں بخش دے۔ اور ہم پر رحم فرما۔ تو ہی ہمارا مالک ہے اور ہم کو کافروں پر غالب فرما",
    "explanation": "Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. \"Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.\"",
    "family_tip": "آج کے دن سورۃ سورة البقرة (آیت 286) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002286.mp3"
  }
];

export const hadiths: Hadith[] = [
  {
    "day": 1,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل ضائع ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 2,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت اور خیر کا ذریعہ ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 3,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا سچے مومن کی پہچان ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 4,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد و جلن سے بچنا ایمان کی تکمیل ہے۔",
    "family_tip": "اپنے بہن بھائیوں اور دوستوں کے لیے بھی وہی سہولت اور بھلائی چاہیں جو اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 5,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی مالی خرچ کے نیکیوں کا عظیم خزانہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور باہر ملنے والوں سے مسکرا کر اور خندہ پیشانی سے ملیں۔"
  },
  {
    "day": 6,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے بعد نیکی کرو جو اسے مٹا دے، اور لوگوں سے اچھے اخلاق کے ساتھ پیش آؤ۔",
    "source": "جامع الترمذی: 1987",
    "category": "تقویٰ و اخلاق",
    "lesson": "تنہائی اور محفل دونوں میں اللہ کا خوف رکھنا اور غلطی کے بعد فوری نیکی کرنا کامیابی کی چابی ہے۔",
    "family_tip": "تنہائی میں موبائل یا انٹرنیٹ استعمال کرتے ہوئے بھی اللہ کے حاضر و ناظر ہونے کا دھیان رکھیں۔"
  },
  {
    "day": 7,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت کے مستحق وہی بنتے ہیں جو انسانوں اور جانوروں کے ساتھ رحم کا معاملہ کرتے ہیں۔",
    "family_tip": "گھر کے ارد گرد پرندوں کے لیے پانی رکھیں یا کسی ضرورت مند کی مدد کریں۔"
  },
  {
    "day": 8,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094",
    "category": "سچائی و امانت",
    "lesson": "ہمیشہ سچ بولنا دل کو اطمینان بخشتا ہے اور انسان کو عزت اور جنت کا وارث بناتا ہے۔",
    "family_tip": "مذاق میں بھی کبھی جھوٹ نہ بولنے کی گھریلو تربیت کریں۔"
  },
  {
    "day": 9,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "سنن أبي داود: 1479",
    "category": "فضیلتِ دعا",
    "lesson": "دعا اللہ کے سامنے بندے کی مکمل عاجزی اور بندگی کا سب سے اعلیٰ اظہار ہے۔",
    "family_tip": "دن کے مختلف اوقات میں چھوٹی مسنون دعائیں پڑھنے کی عادت ڈالیں۔"
  },
  {
    "day": 10,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ",
    "urdu_translation": "پاکیزگی اور صفائی آدھا ایمان ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "طہارت و پاکیزگی",
    "lesson": "جسمانی صفائی کے ساتھ ساتھ دل اور نیت کی پاکیزگی ایمان کا بنیادی تقاضا ہے۔",
    "family_tip": "اپنے کمرے اور ارد گرد کے ماحول کو صاف ستھرا رکھنے میں ہاتھ بٹائیں۔"
  },
  {
    "day": 11,
    "arabic": "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    "urdu_translation": "جو شخص اللہ اور یومِ آخرت پر ایمان رکھتا ہو اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
    "source": "صحیح البخاری: 6018",
    "category": "حفظِ لسان",
    "lesson": "غیر ضروری اور بے مقصد باتوں سے پرہیز کرنا انسان کے وقت اور وقار کی حفاظت کرتا ہے۔",
    "family_tip": "اگر کوئی بات کسی کو تکلیف دے سکتی ہو تو خاموشی اختیار کریں۔"
  },
  {
    "day": 12,
    "arabic": "الْبِرُّ حُسْنُ الْخُلُقِ ، وَالإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
    "urdu_translation": "نیکی اچھے اخلاق کا نام ہے، اور گناہ وہ ہے جو تمہارے دل میں کھٹکے اور تم ناپسند کرو کہ لوگ اس پر مطلع ہوں۔",
    "source": "صحیح مسلم: 2553",
    "category": "ضمیر کی بیداری",
    "lesson": "انسان کا پاک ضمیر سچائی اور برائی کو پہچاننے کا بہترین اندرونی پیمانہ ہے۔",
    "family_tip": "کسی بھی کام میں شک ہو تو اپنے دل سے فتویٰ لیں اور گناہ کے راستے سے بچیں۔"
  },
  {
    "day": 13,
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "urdu_translation": "جو شخص علم کی تلاش کے راستے پر چلتا ہے، اللہ تعالیٰ اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
    "source": "صحیح مسلم: 2699",
    "category": "طلبِ علم",
    "lesson": "دینی اور مفید دنیاوی علم کا حصول انسان کے درجات بلند کرتا ہے اور نجات کا ذریعہ ہے۔",
    "family_tip": "روزانہ کسی مستند اسلامی کتاب یا سیرت سے 10 منٹ مطالعہ کریں۔"
  },
  {
    "day": 14,
    "arabic": "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    "urdu_translation": "پہلوان وہ نہیں جو پچھاڑ دے، بلکہ حقیقی طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    "source": "صحیح البخاری: 6114",
    "category": "ضبطِ نفس",
    "lesson": "غصے کو قابو میں رکھنا حقیقی شجاعت اور کمالِ روحانیت کی دلیل ہے۔",
    "family_tip": "جب غصہ آئے تو 'اعوذ باللہ' پڑھیں اور بیٹھ جائیں۔"
  },
  {
    "day": 15,
    "arabic": "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    "urdu_translation": "اللہ جس کے ساتھ بھلائی کا ارادہ فرماتا ہے اسے دین کی گہری سمجھ عطا فرماتا ہے۔",
    "source": "صحیح البخاری: 71",
    "category": "فہمِ دین",
    "lesson": "دین کی سمجھ بوجھ اور حکمت اللہ تعالیٰ کی طرف سے ملنے والی سب سے بڑی نعمت ہے۔",
    "family_tip": "نماز اور عبادات کے احکام و مسائل سیکھنے میں دلچسپی لیں۔"
  },
  {
    "day": 16,
    "arabic": "الصَّلَاةُ نُورٌ ، وَالصَّدَقَةُ بُرْهَانٌ ، وَالصَّبْرُ ضِيَاءٌ",
    "urdu_translation": "نماز نور ہے، صدقہ دلیل ہے، اور صبر روشنی ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "روحانی ارکان",
    "lesson": "نماز اور صدقہ انسان کے دل اور قبر دونوں کو روشن کرتے ہیں۔",
    "family_tip": "نمازِ پنجگانہ کی پابندی کو گھر کا اولین اصول بنائیں۔"
  },
  {
    "day": 17,
    "arabic": "رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ",
    "urdu_translation": "رب کی خوشنودی والد کی خوشنودی میں ہے، اور رب کی ناراضگی والد کی ناراضگی میں ہے۔",
    "source": "جامع الترمذی: 1899",
    "category": "اطاعتِ والدین",
    "lesson": "والدین کی خدمت اور اطاعت اللہ کی رضا حاصل کرنے کا سب سے آسان اور یقینی راستہ ہے۔",
    "family_tip": "آج والدین کی خدمت کر کے ان سے دعائیں لیں۔"
  },
  {
    "day": 18,
    "arabic": "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    "urdu_translation": "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جس پر ہمیشگی کی جائے چاہے وہ تھوڑا ہی ہو۔",
    "source": "صحیح البخاری: 6464",
    "category": "مداومتِ عمل",
    "lesson": "نیکی کے کاموں میں استقامت اور تسلسل جذبات کی وقتی تیزی سے کہیں زیادہ قیمتی ہے۔",
    "family_tip": "روزانہ کا ایک چھوٹا سا وظیفہ یا نیکی مقرر کریں اور اس پر قائم رہیں۔"
  },
  {
    "day": 19,
    "arabic": "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ ، وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ ، فَلْيَصِلْ رَحِمَهُ",
    "urdu_translation": "جسے یہ پسند ہو کہ اس کے رزق میں کشادگی کی جائے اور اس کی عمر دراز ہو تو وہ صلہ رحمی کرے۔",
    "source": "صحیح البخاری: 2067",
    "category": "صلہ رحمی",
    "lesson": "رشتہ داروں کے ساتھ حسنِ سلوک اور تعلق جوڑنا دنیا میں برکت اور رزق کی فراوانی کا سبب ہے۔",
    "family_tip": "کسی ناراض رشتہ دار کو فون کر کے خیر خیریت معلوم کریں۔"
  },
  {
    "day": 20,
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu_translation": "دو کلمے زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں: سبحان اللہ وبحمدہ، سبحان اللہ العظیم۔",
    "source": "صحیح البخاری: 6406",
    "category": "فضیلتِ اذکار",
    "lesson": "یہ مبارک تسبیح پڑھنے سے نامہ اعمال میں نیکیوں کا پلڑا انتہائی وزنی ہو جاتا ہے۔",
    "family_tip": "چلتے پھرتے اور گاڑی چلاتے ہوئے یہ کلمات کثرت سے پڑھیں۔"
  },
  {
    "day": 21,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل ضائع ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 22,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت اور خیر کا ذریعہ ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 23,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا سچے مومن کی پہچان ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 24,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد و جلن سے بچنا ایمان کی تکمیل ہے۔",
    "family_tip": "اپنے بہن بھائیوں اور دوستوں کے لیے بھی وہی سہولت اور بھلائی چاہیں جو اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 25,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی مالی خرچ کے نیکیوں کا عظیم خزانہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور باہر ملنے والوں سے مسکرا کر اور خندہ پیشانی سے ملیں۔"
  },
  {
    "day": 26,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے بعد نیکی کرو جو اسے مٹا دے، اور لوگوں سے اچھے اخلاق کے ساتھ پیش آؤ۔",
    "source": "جامع الترمذی: 1987",
    "category": "تقویٰ و اخلاق",
    "lesson": "تنہائی اور محفل دونوں میں اللہ کا خوف رکھنا اور غلطی کے بعد فوری نیکی کرنا کامیابی کی چابی ہے۔",
    "family_tip": "تنہائی میں موبائل یا انٹرنیٹ استعمال کرتے ہوئے بھی اللہ کے حاضر و ناظر ہونے کا دھیان رکھیں۔"
  },
  {
    "day": 27,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت کے مستحق وہی بنتے ہیں جو انسانوں اور جانوروں کے ساتھ رحم کا معاملہ کرتے ہیں۔",
    "family_tip": "گھر کے ارد گرد پرندوں کے لیے پانی رکھیں یا کسی ضرورت مند کی مدد کریں۔"
  },
  {
    "day": 28,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094",
    "category": "سچائی و امانت",
    "lesson": "ہمیشہ سچ بولنا دل کو اطمینان بخشتا ہے اور انسان کو عزت اور جنت کا وارث بناتا ہے۔",
    "family_tip": "مذاق میں بھی کبھی جھوٹ نہ بولنے کی گھریلو تربیت کریں۔"
  },
  {
    "day": 29,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "سنن أبي داود: 1479",
    "category": "فضیلتِ دعا",
    "lesson": "دعا اللہ کے سامنے بندے کی مکمل عاجزی اور بندگی کا سب سے اعلیٰ اظہار ہے۔",
    "family_tip": "دن کے مختلف اوقات میں چھوٹی مسنون دعائیں پڑھنے کی عادت ڈالیں۔"
  },
  {
    "day": 30,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ",
    "urdu_translation": "پاکیزگی اور صفائی آدھا ایمان ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "طہارت و پاکیزگی",
    "lesson": "جسمانی صفائی کے ساتھ ساتھ دل اور نیت کی پاکیزگی ایمان کا بنیادی تقاضا ہے۔",
    "family_tip": "اپنے کمرے اور ارد گرد کے ماحول کو صاف ستھرا رکھنے میں ہاتھ بٹائیں۔"
  },
  {
    "day": 31,
    "arabic": "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    "urdu_translation": "جو شخص اللہ اور یومِ آخرت پر ایمان رکھتا ہو اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
    "source": "صحیح البخاری: 6018",
    "category": "حفظِ لسان",
    "lesson": "غیر ضروری اور بے مقصد باتوں سے پرہیز کرنا انسان کے وقت اور وقار کی حفاظت کرتا ہے۔",
    "family_tip": "اگر کوئی بات کسی کو تکلیف دے سکتی ہو تو خاموشی اختیار کریں۔"
  }
];

export const tafseers: TafseerDetail[] = [
  {
    "day": 1,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 1,
    "arabic": "﻿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "urdu_translation": "شروع الله کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 1) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 1) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 2,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 2,
    "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "سب طرح کی تعریف خدا ہی کو (سزاوار) ہے جو تمام مخلوقات کا پروردگار ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 2) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 2) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 3,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 3,
    "arabic": "الرَّحْمَٰنِ الرَّحِيمِ",
    "urdu_translation": "بڑا مہربان نہایت رحم والا",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 3) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 3) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 4,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 4,
    "arabic": "مَالِكِ يَوْمِ الدِّينِ",
    "urdu_translation": "انصاف کے دن کا حاکم",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 4) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 4) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 5,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 5,
    "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "urdu_translation": "(اے پروردگار) ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 5) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 5) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 6,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 6,
    "arabic": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    "urdu_translation": "ہم کو سیدھے رستے چلا",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 6) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 6) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 7,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 7,
    "arabic": "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    "urdu_translation": "ان لوگوں کے رستے جن پر تو اپنا فضل وکرم کرتا رہا نہ ان کے جن پر غصے ہوتا رہا اور نہ گمراہوں کے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 7) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 7) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 8,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 2,
    "arabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
    "urdu_translation": "یہ کتاب (قرآن مجید) اس میں کچھ شک نہیں (کہ کلامِ خدا ہے۔ خدا سے) ڈرنے والوں کی رہنما ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 2) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 2) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 9,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 21,
    "arabic": "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    "urdu_translation": "لوگو! اپنے پروردگار کی عبات کرو جس نے تم کو اور تم سے پہلے لوگوں کو پیدا کیا تاکہ تم (اس کے عذاب سے) بچو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 21) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 21) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 10,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 30,
    "arabic": "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً ۖ قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ ۖ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُونَ",
    "urdu_translation": "اور (وہ وقت یاد کرنے کے قابل ہے) جب تمہارے پروردگار نے فرشتوں سے فرمایا کہ میں زمین میں (اپنا) نائب بنانے والا ہوں۔ انہوں نے کہا۔ کیا تُو اس میں ایسے شخص کو نائب بنانا چاہتا ہے جو خرابیاں کرے اور کشت وخون کرتا پھرے اور ہم تیری تعریف کے ساتھ تسبیح وتقدیس کرتے رہتے ہیں۔ (خدا نے) فرمایا میں وہ باتیں جانتا ہوں جو تم نہیں جانتے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 30) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 30) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 11,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 43,
    "arabic": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    "urdu_translation": "اور نماز پڑھا کرو اور زکوٰة دیا کرو اور (خدا کے آگے) جھکنے والوں کے ساتھ جھکا کرو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 43) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 43) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 12,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 45,
    "arabic": "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    "urdu_translation": "اور (رنج وتکلیف میں) صبر اور نماز سے مدد لیا کرو اور بے شک نماز گراں ہے، مگر ان لوگوں پر (گراں نہیں) جو عجز کرنے والے ہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 45) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 45) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 13,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 83,
    "arabic": "وَإِذْ أَخَذْنَا مِيثَاقَ بَنِي إِسْرَائِيلَ لَا تَعْبُدُونَ إِلَّا اللَّهَ وَبِالْوَالِدَيْنِ إِحْسَانًا وَذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ وَقُولُوا لِلنَّاسِ حُسْنًا وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِنْكُمْ وَأَنْتُمْ مُعْرِضُونَ",
    "urdu_translation": "اور جب ہم نے بنی اسرائیل سے عہد لیا کہ خدا کے سوا کسی کی عبادت نہ کرنا اور ماں باپ اور رشتہ داروں اور یتیموں اور محتاجوں کے ساتھ بھلائی کرتے رہنا اور لوگوں سے اچھی باتیں کہنا، اور نماز پڑھتے اور زکوٰة دیتے رہنا، تو چند شخصوں کے سوا تم سب (اس عہد سے) منہ پھیر کر پھر بیٹھے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 83) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 83) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 14,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 110,
    "arabic": "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ ۚ وَمَا تُقَدِّمُوا لِأَنْفُسِكُمْ مِنْ خَيْرٍ تَجِدُوهُ عِنْدَ اللَّهِ ۗ إِنَّ اللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ",
    "urdu_translation": "اور نماز ادا کرتے رہو اور زکوٰة دیتے رہو۔ اور جو بھلائی اپنے لیے آگے بھیج رکھو گے، اس کو خدا کے ہاں پا لو گے۔ کچھ شک نہیں کہ خدا تمہارے سب کاموں کو دیکھ رہا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 110) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 110) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 15,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 143,
    "arabic": "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ وَمَا جَعَلْنَا الْقِبْلَةَ الَّتِي كُنْتَ عَلَيْهَا إِلَّا لِنَعْلَمَ مَنْ يَتَّبِعُ الرَّسُولَ مِمَّنْ يَنْقَلِبُ عَلَىٰ عَقِبَيْهِ ۚ وَإِنْ كَانَتْ لَكَبِيرَةً إِلَّا عَلَى الَّذِينَ هَدَى اللَّهُ ۗ وَمَا كَانَ اللَّهُ لِيُضِيعَ إِيمَانَكُمْ ۚ إِنَّ اللَّهَ بِالنَّاسِ لَرَءُوفٌ رَحِيمٌ",
    "urdu_translation": "اور اسی طرح ہم نے تم کو امتِ معتدل بنایا ہے، تاکہ تم لوگوں پر گواہ بنو اور پیغمبر (آخرالزماں) تم پر گواہ بنیں۔ اور جس قبلے پر تم (پہلے) تھے، اس کو ہم نے اس لیے مقرر کیا تھا کہ معلوم کریں، کون (ہمارے) پیغمبر کا تابع رہتا ہے، اور کون الٹے پاؤں پھر جاتا ہے۔ اور یہ بات (یعنی تحویل قبلہ لوگوں کو) گراں معلوم ہوئی، مگر جن کو خدا نے ہدایت بخشی (وہ اسے گراں نہیں سمجھتے) اور خدا ایسا نہیں کہ تمہارے ایمان کو یونہی کھو دے۔ خدا تو لوگوں پر بڑا مہربان (اور) صاحبِ رحمت ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 143) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 143) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 16,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "سو تم مجھے یاد کرو۔ میں تمہیں یاد کیا کروں گا۔ اور میرے احسان مانتے رہنا اور ناشکری نہ کرنا",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 152) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 152) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 17,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 153,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    "urdu_translation": "اے ایمان والو صبر اور نماز سے مدد لیا کرو بےشک خدا صبر کرنے والوں کے ساتھ ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 153) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 153) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 18,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 155,
    "arabic": "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
    "urdu_translation": "اور ہم کسی قدر خوف اور بھوک اور مال اور جانوں اور میوؤں کے نقصان سے تمہاری آزمائش کریں گے توصبر کرنے والوں کو (خدا کی خوشنودی کی) بشارت سنا دو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 155) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 155) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 19,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 156,
    "arabic": "الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    "urdu_translation": "ان لوگوں پر جب کوئی مصیبت واقع ہوتی ہے تو کہتے ہیں کہ ہم خدا ہی کا مال ہیں اور اسی کی طرف لوٹ کر جانے والے ہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 156) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 156) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 20,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 177,
    "arabic": "۞ لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَالْمَلَائِكَةِ وَالْكِتَابِ وَالنَّبِيِّينَ وَآتَى الْمَالَ عَلَىٰ حُبِّهِ ذَوِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينَ وَابْنَ السَّبِيلِ وَالسَّائِلِينَ وَفِي الرِّقَابِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ وَالْمُوفُونَ بِعَهْدِهِمْ إِذَا عَاهَدُوا ۖ وَالصَّابِرِينَ فِي الْبَأْسَاءِ وَالضَّرَّاءِ وَحِينَ الْبَأْسِ ۗ أُولَٰئِكَ الَّذِينَ صَدَقُوا ۖ وَأُولَٰئِكَ هُمُ الْمُتَّقُونَ",
    "urdu_translation": "نیکی یہی نہیں کہ تم مشرق یا مغرب کو (قبلہ سمجھ کر ان) کی طرف منہ کرلو بلکہ نیکی یہ ہے کہ لوگ خدا پر اور روز آخرت پر اور فرشتوں پر اور (خدا کی) کتاب پر اور پیغمبروں پر ایمان لائیں۔ اور مال باوجود عزیز رکھنے کے رشتہ داروں اور یتیموں اور محتاجوں اور مسافروں اور مانگنے والوں کو دیں اور گردنوں (کے چھڑانے) میں (خرچ کریں) اور نماز پڑھیں اور زکوٰة دیں۔ اور جب عہد کرلیں تو اس کو پورا کریں۔ اور سختی اور تکلیف میں اور (معرکہ) کارزار کے وقت ثابت قدم رہیں۔ یہی لوگ ہیں جو (ایمان میں) سچے ہیں اور یہی ہیں جو (خدا سے) ڈرنے والے ہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 177) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 177) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 21,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 183,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    "urdu_translation": "مومنو! تم پر روزے فرض کئے گئے ہیں۔ جس طرح تم سے پہلے لوگوں پر فرض کئے گئے تھے تاکہ تم پرہیزگار بنو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 183) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 183) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 22,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 185,
    "arabic": "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ ۚ فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ ۖ وَمَنْ كَانَ مَرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ ۗ يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَىٰ مَا هَدَاكُمْ وَلَعَلَّكُمْ تَشْكُرُونَ",
    "urdu_translation": "(روزوں کا مہینہ) رمضان کا مہینہ (ہے) جس میں قرآن (اول اول) نازل ہوا جو لوگوں کا رہنما ہے اور (جس میں) ہدایت کی کھلی نشانیاں ہیں اور (جو حق و باطل کو) الگ الگ کرنے والا ہے تو جو کوئی تم میں سے اس مہینے میں موجود ہو چاہیئے کہ پورے مہینے کے روزے رکھے اور جو بیمار ہو یا سفر میں ہو تو دوسرے دنوں میں (رکھ کر) ان کا شمار پورا کرلے۔ خدا تمہارے حق میں آسانی چاہتا ہے اور سختی نہیں چاہتا اور (یہ آسانی کا حکم) اس لئے (دیا گیا ہے) کہ تم روزوں کا شمار پورا کرلو اور اس احسان کے بدلے کہ خدا نے تم کو ہدایت بخشی ہے تم اس کو بزرگی سے یاد کر واور اس کا شکر کرو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 185) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 185) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 23,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 186,
    "arabic": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ ۖ فَلْيَسْتَجِيبُوا لِي وَلْيُؤْمِنُوا بِي لَعَلَّهُمْ يَرْشُدُونَ",
    "urdu_translation": "اور (اے پیغمبر) جب تم سے میرے بندے میرے بارے میں دریافت کریں تو (کہہ دو کہ) میں تو (تمہارے) پاس ہوں جب کوئی پکارنے والا مجھے پکارتا ہے تو میں اس کی دعا قبول کرتا ہوں تو ان کو چاہیئے کہ میرے حکموں کو مانیں اور مجھ پر ایمان لائیں تاکہ نیک رستہ پائیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 186) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 186) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 24,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 201,
    "arabic": "وَمِنْهُمْ مَنْ يَقُولُ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "urdu_translation": "اور بعضے ایسے ہیں کہ دعا کرتے ہیں کہ پروردگار ہم کو دنیا میں بھی نعمت عطا فرما اور آخرت میں بھی نعمت بخشیو اور دوزخ کے عذاب سے محفوظ رکھیو",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 201) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 201) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 25,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 216,
    "arabic": "كُتِبَ عَلَيْكُمُ الْقِتَالُ وَهُوَ كُرْهٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ",
    "urdu_translation": "(مسلمانو) تم پر (خدا کے رستے میں) لڑنا فرض کردیا گیا ہے وہ تمہیں ناگوار تو ہوگا مگر عجب نہیں کہ ایک چیز تم کو بری لگے اور وہ تمہارے حق میں بھلی ہو اور عجب نہیں کہ ایک چیز تم کو بھلی لگے اور وہ تمہارے لئے مضر ہو۔ اور ان باتوں کو) خدا ہی بہتر جانتا ہے اور تم نہیں جانتے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 216) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 216) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 26,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 255,
    "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    "urdu_translation": "خدا (وہ معبود برحق ہے کہ) اس کے سوا کوئی عبادت کے لائق نہیں زندہ ہمیشہ رہنے والا اسے نہ اونگھ آتی ہے نہ نیند جو کچھ آسمانوں میں اور جو کچھ زمین میں ہیں سب اسی کا ہے کون ہے جو اس کی اجازت کے بغیر اس سے (کسی کی) سفارش کر سکے جو کچھ لوگوں کے روبرو ہو رہا ہے اور جو کچھ ان کے پیچھے ہوچکا ہے اسے سب معلوم ہے اور وہ اس کی معلومات میں سے کسی چیز پر دسترس حاصل نہیں کر سکتے ہاں جس قدر وہ چاہتا ہے (اسی قدر معلوم کرا دیتا ہے) اس کی بادشاہی (اور علم) آسمان اور زمین سب پر حاوی ہے اور اسے ان کی حفاظت کچھ بھی دشوار نہیں وہ بڑا عالی رتبہ اور جلیل القدر ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 255) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 255) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 27,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 256,
    "arabic": "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انْفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ",
    "urdu_translation": "دین (اسلام) میں زبردستی نہیں ہے ہدایت (صاف طور پر ظاہر اور) گمراہی سے الگ ہو چکی ہے تو جو شخص بتوں سے اعتقاد نہ رکھے اور خدا پر ایمان لائے اس نے ایسی مضبوط رسی ہاتھ میں پکڑ لی ہے جو کبھی ٹوٹنے والی نہیں اور خدا (سب کچھ) سنتا اور (سب کچھ) جانتا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 256) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 256) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 28,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 261,
    "arabic": "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ ۗ وَاللَّهُ يُضَاعِفُ لِمَنْ يَشَاءُ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
    "urdu_translation": "جو لوگ اپنا مال خدا کی راہ میں خرچ کرتے ہیں ان (کے مال) کی مثال اس دانے کی سی ہے جس سے سات بالیں اگیں اور ہر ایک بال میں سو سو دانے ہوں اور خدا جس (کے مال) کو چاہتا ہے زیادہ کرتا ہے۔ وہ بڑی کشائش والا اور سب کچھ جاننے والا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 261) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 261) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 29,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 263,
    "arabic": "۞ قَوْلٌ مَعْرُوفٌ وَمَغْفِرَةٌ خَيْرٌ مِنْ صَدَقَةٍ يَتْبَعُهَا أَذًى ۗ وَاللَّهُ غَنِيٌّ حَلِيمٌ",
    "urdu_translation": "جس خیرات دینے کے بعد (لینے والے کو) ایذا دی جائے اس سے تو نرم بات کہہ دینی اور (اس کی بے ادبی سے) درگزر کرنا بہتر ہے اور خدا بےپروا اور بردبار ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 263) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 263) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 30,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 267,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا أَنْفِقُوا مِنْ طَيِّبَاتِ مَا كَسَبْتُمْ وَمِمَّا أَخْرَجْنَا لَكُمْ مِنَ الْأَرْضِ ۖ وَلَا تَيَمَّمُوا الْخَبِيثَ مِنْهُ تُنْفِقُونَ وَلَسْتُمْ بِآخِذِيهِ إِلَّا أَنْ تُغْمِضُوا فِيهِ ۚ وَاعْلَمُوا أَنَّ اللَّهَ غَنِيٌّ حَمِيدٌ",
    "urdu_translation": "مومنو! جو پاکیزہ اور عمدہ مال تم کماتے ہوں اور جو چیزیں ہم تمہارے لئے زمین سےنکالتے ہیں ان میں سے (راہ خدا میں) خرچ کرو۔ اور بری اور ناپاک چیزیں دینے کا قصد نہ کرنا کہ (اگر وہ چیزیں تمہیں دی جائیں تو) بجز اس کے کہ (لیتے وقت) آنکھیں بند کرلو ان کو کبھی نہ لو۔ اور جان رکھو کہ خدا بےپروا (اور) قابل ستائش ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 267) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 267) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  },
  {
    "day": 31,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 286,
    "arabic": "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    "urdu_translation": "خدا کسی شخص کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا۔ اچھے کام کرے گا تو اس کو ان کا فائدہ ملے گا برے کرے گا تو اسے ان کا نقصان پہنچے گا۔ اے پروردگار اگر ہم سے بھول یا چوک ہوگئی ہو تو ہم سے مؤاخذہ نہ کیجیو۔ اے پروردگار ہم پر ایسا بوجھ نہ ڈالیو جیسا تو نے ہم سے پہلے لوگوں پر ڈالا تھا۔ اے پروردگار جتنا بوجھ اٹھانے کی ہم میں طاقت نہیں اتنا ہمارے سر پر نہ رکھیو۔ اور (اے پروردگار) ہمارے گناہوں سے درگزر کر اور ہمیں بخش دے۔ اور ہم پر رحم فرما۔ تو ہی ہمارا مالک ہے اور ہم کو کافروں پر غالب فرما",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 286) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 286) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
    "asbabAlNuzulEn": "Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
    "keyLessonsUrdu": [
      "قرآن مجید کے ہر حکم میں انسان کے لیے دنیا و آخرت کی بھلائی ہے۔",
      "اللہ کی وحدانیت اور رحمت پر کامل یقین رکھنا چاہیے۔",
      "نیکی اور تقویٰ کی راہ پر ثابت قدمی اختیار کرنی چاہیے۔"
    ],
    "keyLessonsEn": [
      "Every Quranic directive embodies profound wisdom and timeless guidance.",
      "Sincere belief in Divine mercy empowers the soul through all life phases.",
      "Practicing righteousness consistently brings enduring peace and reward."
    ],
    "reflectionsUrdu": "کیا میں اس قرآنی آیت کی روشنی میں اپنے روزمرہ کے اعمال اور نیتوں کا جائزہ لیتا ہوں؟",
    "reflectionsEn": "How does this verse inspire my daily actions, intentions, and character?"
  }
];

export const dhikrs: DhikrItem[] = [
  {
    "id": "dhikr-1",
    "day": 1,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-2",
    "day": 2,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-3",
    "day": 3,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-4",
    "day": 4,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-5",
    "day": 5,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-6",
    "day": 6,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-7",
    "day": 7,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-8",
    "day": 8,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-9",
    "day": 9,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-10",
    "day": 10,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-11",
    "day": 11,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-12",
    "day": 12,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-13",
    "day": 13,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-14",
    "day": 14,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-15",
    "day": 15,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-16",
    "day": 16,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-17",
    "day": 17,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-18",
    "day": 18,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-19",
    "day": 19,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-20",
    "day": 20,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-21",
    "day": 21,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-22",
    "day": 22,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-23",
    "day": 23,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-24",
    "day": 24,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-25",
    "day": 25,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-26",
    "day": 26,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  },
  {
    "id": "dhikr-27",
    "day": 27,
    "titleEn": "Astaghfirullah wa Atubu Ilayh",
    "titleUrdu": "استغفر اللہ واتوب الیہ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal Azeem alladhi la ilaha illa huwal Hayyul Qayyumu wa atoobu ilayh",
    "urdu_translation": "میں اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ اور قائم رہنے والا ہے اور میں اسی کے حضور توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah, the Magnificent, whom there is no deity but Him, the Ever-Living, Sustainer.",
    "targetCount": 100,
    "virtueUrdu": "حضور ﷺ نے فرمایا کہ جو یہ استغفار پڑھے اس کے گناہ معاف کر دیے جاتے ہیں چاہے وہ میدانِ جنگ سے بھاگا ہو۔",
    "virtueEn": "Pardons sins even if one fled from battle array.",
    "source": "جامع الترمذی: 3577",
    "category": "Seeking Forgiveness"
  },
  {
    "id": "dhikr-28",
    "day": 28,
    "titleEn": "Ayat al-Kareemah (Deliverance)",
    "titleUrdu": "آیتِ کریمہ (تسبیحِ یونسؑ)",
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 40,
    "virtueUrdu": "کوئی بھی مسلمان کسی بھی پریشانی میں اس دعا کے ذریعے اللہ کو پکارے تو اللہ اس کی دعا ضرور قبول فرماتا ہے۔",
    "virtueEn": "No Muslim supplicates with this for any difficulty except that Allah answers him.",
    "source": "جامع الترمذی: 3505",
    "category": "Relief from Distress"
  },
  {
    "id": "dhikr-29",
    "day": 29,
    "titleEn": "Salawat (Durood Ibrahim)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibrahima wa 'ala aali Ibrahima innaka Hamidum Majeed",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسے تو نے رحمت نازل فرمائی ابراہیمؑ پر اور ان کی آل پر، بے شک تو قابلِ تعریف اور بزرگی والا ہے۔",
    "english_translation": "O Allah, bestow peace upon Muhammad and upon the family of Muhammad, as You bestowed peace upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "جو شخص مجھ پر ایک مرتبہ درود بھیجتا ہے، اللہ تعالیٰ اس پر دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔",
    "virtueEn": "Whoever sends one blessing upon me, Allah sends ten blessings upon him.",
    "source": "صحیح مسلم: 408",
    "category": "Blessings upon the Prophet"
  },
  {
    "id": "dhikr-30",
    "day": 30,
    "titleEn": "Hawqala (Power & Might)",
    "titleUrdu": "لا حول ولا قوة إلا بالله",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil 'Aliyyil 'Azeem",
    "urdu_translation": "گناہوں سے بچنے کی طاقت اور نیکی کرنے کی قوت صرف بلند و برتر اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے اور 99 بیماریوں کا علاج ہے جن میں سب سے ادنیٰ پریشانی ہے۔",
    "virtueEn": "A treasure from the treasures of Paradise, relieving anxiety and sorrow.",
    "source": "صحیح البخاری: 4205",
    "category": "Spiritual Strength"
  },
  {
    "id": "dhikr-31",
    "day": 31,
    "titleEn": "Subhan Allah wa bihamdihi",
    "titleUrdu": "سبحان اللہ وبحمدہ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "transliteration": "Subhanallahi wa bihamdihi, Subhanallahil Azeem",
    "urdu_translation": "پاک ہے اللہ اپنی تمام تعریفوں کے ساتھ، پاک ہے اللہ جو بہت عظمت والا ہے۔",
    "english_translation": "Glory be to Allah and His is the praise, Glory be to Allah, the Supreme.",
    "targetCount": 33,
    "virtueUrdu": "دو کلمات زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں۔",
    "virtueEn": "Two words light on tongue, heavy on scales, beloved to the Most Merciful.",
    "source": "صحیح البخاری: 6406",
    "category": "Tasbih & Praise"
  }
];
