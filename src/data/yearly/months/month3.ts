import { Verse, Hadith, DhikrItem } from '../../../types';
import { TafseerDetail } from '../../tafseerData';

export const month = 3;
export const monthName = "March";
export const startDay = 60;
export const endDay = 90;

export const verses: Verse[] = [
  {
    "day": 60,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 58,
    "arabic": "۞ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ ۚ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُمْ بِهِ ۗ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا",
    "urdu_translation": "خدا تم کو حکم دیتا ہے کہ امانت والوں کی امانتیں ان کے حوالے کردیا کرو اور جب لوگوں میں فیصلہ کرنے لگو تو انصاف سے فیصلہ کیا کرو خدا تمہیں بہت خوب نصیحت کرتا ہے بےشک خدا سنتا اور دیکھتا ہے",
    "explanation": "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice. Excellent is that which Allah instructs you. Indeed, Allah is ever Hearing and Seeing.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 58) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004058.mp3"
  },
  {
    "day": 61,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 59,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ ۖ فَإِنْ تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِنْ كُنْتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۚ ذَٰلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا",
    "urdu_translation": "مومنو! خدا اور اس کے رسول کی فرمانبرداری کرو اور جو تم میں سے صاحب حکومت ہیں ان کی بھی اور اگر کسی بات میں تم میں اختلاف واقع ہو تو اگر خدا اور روز آخرت پر ایمان رکھتے ہو تو اس میں خدا اور اس کے رسول (کے حکم) کی طرف رجوع کرو یہ بہت اچھی بات ہے اور اس کا مآل بھی اچھا ہے",
    "explanation": "O you who have believed, obey Allah and obey the Messenger and those in authority among you. And if you disagree over anything, refer it to Allah and the Messenger, if you should believe in Allah and the Last Day. That is the best [way] and best in result.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 59) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004059.mp3"
  },
  {
    "day": 62,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 86,
    "arabic": "وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ حَسِيبًا",
    "urdu_translation": "اور جب تم کو کوئی دعا دے تو (جواب میں) تم اس سے بہتر (کلمے) سے (اسے) دعا دو یا انہیں لفظوں سے دعا دو بےشک خدا ہر چیز کا حساب لینے والا ہے",
    "explanation": "And when you are greeted with a greeting, greet [in return] with one better than it or [at least] return it [in a like manner]. Indeed, Allah is ever, over all things, an Accountant.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 86) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004086.mp3"
  },
  {
    "day": 63,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 103,
    "arabic": "فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا اطْمَأْنَنْتُمْ فَأَقِيمُوا الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا",
    "urdu_translation": "پھر جب تم نماز تمام کرچکو تو کھڑے اور بیٹھے اور لیٹے (ہر حالت میں) خدا کو یاد کرو پھر جب خوف جاتا رہے تو (اس طرح سے) نماز پڑھو (جس طرح امن کی حالت میں پڑھتے ہو) بےشک نماز کا مومنوں پر اوقات (مقررہ) میں ادا کرنا فرض ہے",
    "explanation": "And when you have completed the prayer, remember Allah standing, sitting, or [lying] on your sides. But when you become secure, re-establish [regular] prayer. Indeed, prayer has been decreed upon the believers a decree of specified times.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 103) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004103.mp3"
  },
  {
    "day": 64,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 105,
    "arabic": "إِنَّا أَنْزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ لِتَحْكُمَ بَيْنَ النَّاسِ بِمَا أَرَاكَ اللَّهُ ۚ وَلَا تَكُنْ لِلْخَائِنِينَ خَصِيمًا",
    "urdu_translation": "(اے پیغمبر) ہم نے تم پر سچی کتاب نازل کی ہے تاکہ خدا کی ہدایت کے مطابق لوگوں کے مقدمات میں فیصلہ کرو اور (دیکھو) دغابازوں کی حمایت میں کبھی بحث نہ کرنا",
    "explanation": "Indeed, We have revealed to you, [O Muhammad], the Book in truth so you may judge between the people by that which Allah has shown you. And do not be for the deceitful an advocate.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 105) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004105.mp3"
  },
  {
    "day": 65,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 110,
    "arabic": "وَمَنْ يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَحِيمًا",
    "urdu_translation": "اور جو شخص کوئی برا کام کر بیٹھے یا اپنے حق میں ظلم کرلے پھر خدا سے بخشش مانگے تو خدا کو بخشنے والا اور مہربان پائے گا",
    "explanation": "And whoever does a wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 110) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004110.mp3"
  },
  {
    "day": 66,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 128,
    "arabic": "وَإِنِ امْرَأَةٌ خَافَتْ مِنْ بَعْلِهَا نُشُوزًا أَوْ إِعْرَاضًا فَلَا جُنَاحَ عَلَيْهِمَا أَنْ يُصْلِحَا بَيْنَهُمَا صُلْحًا ۚ وَالصُّلْحُ خَيْرٌ ۗ وَأُحْضِرَتِ الْأَنْفُسُ الشُّحَّ ۚ وَإِنْ تُحْسِنُوا وَتَتَّقُوا فَإِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
    "urdu_translation": "اور اگر کسی عورت کو اپنے خاوند کی طرف سے زیادتی یا بےرغبتی کا اندیشہ ہو تم میاں بیوی پر کچھ گناہ نہیں کہ آپس میں کسی قرارداد پر صلح کرلیں۔ اور صلح خوب (چیز) ہے اور طبیعتیں تو بخل کی طرف مائل ہوتی ہیں اور اگر تم نیکوکاری اور پرہیزگاری کرو گے تو خدا تمہارے سب کاموں سے واقف ہے",
    "explanation": "And if a woman fears from her husband contempt or evasion, there is no sin upon them if they make terms of settlement between them - and settlement is best. And present in [human] souls is stinginess. But if you do good and fear Allah - then indeed Allah is ever, with what you do, Acquainted.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 128) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004128.mp3"
  },
  {
    "day": 67,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 135,
    "arabic": "۞ يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنْفُسِكُمْ أَوِ الْوَالِدَيْنِ وَالْأَقْرَبِينَ ۚ إِنْ يَكُنْ غَنِيًّا أَوْ فَقِيرًا فَاللَّهُ أَوْلَىٰ بِهِمَا ۖ فَلَا تَتَّبِعُوا الْهَوَىٰ أَنْ تَعْدِلُوا ۚ وَإِنْ تَلْوُوا أَوْ تُعْرِضُوا فَإِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
    "urdu_translation": "اے ایمان والو! انصاف پر قائم رہو اور خدا کے لئے سچی گواہی دو خواہ (اس میں) تمہارا یا تمہارےماں باپ اور رشتہ داروں کا نقصان ہی ہو۔ اگر کوئی امیر ہے یا فقیر تو خدا ان کا خیر خواہ ہے۔ تو تم خواہش نفس کے پیچھے چل کر عدل کو نہ چھوڑ دینا۔ اگر تم پیچیدا شہادت دو گے یا (شہادت سے) بچنا چاہو گے تو (جان رکھو) خدا تمہارے سب کاموں سے واقف ہے",
    "explanation": "O you who have believed, be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives. Whether one is rich or poor, Allah is more worthy of both. So follow not [personal] inclination, lest you not be just. And if you distort [your testimony] or refuse [to give it], then indeed Allah is ever, with what you do, Acquainted.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 135) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004135.mp3"
  },
  {
    "day": 68,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 147,
    "arabic": "مَا يَفْعَلُ اللَّهُ بِعَذَابِكُمْ إِنْ شَكَرْتُمْ وَآمَنْتُمْ ۚ وَكَانَ اللَّهُ شَاكِرًا عَلِيمًا",
    "urdu_translation": "اگر تم (خدا کے شکرگزار رہو اور (اس پر) ایمان لے آؤ تو خدا تم کو عذاب دے کر کیا کرے گا۔ اور خدا تو قدرشناس اور دانا ہے",
    "explanation": "What would Allah do with your punishment if you are grateful and believe? And ever is Allah Appreciative and Knowing.",
    "family_tip": "آج کے دن سورۃ سورة النساء (آیت 147) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004147.mp3"
  },
  {
    "day": 69,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 2,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِنْ رَبِّهِمْ وَرِضْوَانًا ۚ وَإِذَا حَلَلْتُمْ فَاصْطَادُوا ۚ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَنْ صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَنْ تَعْتَدُوا ۘ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
    "urdu_translation": "مومنو! خدا کے نام کی چیزوں کی بےحرمتی نہ کرنا اور نہ ادب کے مہینے کی اور نہ قربانی کے جانوروں کی اور نہ ان جانوروں کی (جو خدا کی نذر کر دیئے گئے ہوں اور) جن کے گلوں میں پٹے بندھے ہوں اور نہ ان لوگوں کی جو عزت کے گھر (یعنی بیت الله) کو جا رہے ہوں (اور) اپنے پروردگار کے فضل اور اس کی خوشنودی کے طلبگار ہوں اور جب احرام اتار دو تو (پھر اختیار ہے کہ) شکار کرو اور لوگوں کی دشمنی اس وجہ سے کہ انہوں نے تم کو عزت والی مسجد سے روکا تھا تمہیں اس بات پر آمادہ نہ کرے کہ تم ان پر زیادتی کرنے لگو اور (دیکھو) نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کیا کرو اور گناہ اور ظلم کی باتوں میں مدد نہ کیا کرو اور خدا سے ڈرتے رہو۔ کچھ شک نہیں کہ خدا کا عذاب سخت ہے",
    "explanation": "O you who have believed, do not violate the rites of Allah or [the sanctity of] the sacred month or [neglect the marking of] the sacrificial animals and garlanding [them] or [violate the safety of] those coming to the Sacred House seeking bounty from their Lord and [His] approval. But when you come out of ihram, then [you may] hunt. And do not let the hatred of a people for having obstructed you from al-Masjid al-Haram lead you to transgress. And cooperate in righteousness and piety, but do not cooperate in sin and aggression. And fear Allah; indeed, Allah is severe in penalty.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 2) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005002.mp3"
  },
  {
    "day": 70,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 6,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ ۚ وَإِنْ كُنْتُمْ جُنُبًا فَاطَّهَّرُوا ۚ وَإِنْ كُنْتُمْ مَرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِنْكُمْ مِنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ مِنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُمْ مِنْ حَرَجٍ وَلَٰكِنْ يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
    "urdu_translation": "مومنو! جب تم نماز پڑھنے کا قصد کیا کرو تم منہ اور کہنیوں تک ہاتھ دھو لیا کرو اور سر کا مسح کر لیا کرو اور ٹخنوں تک پاؤں (دھو لیا کرو) اور اگر نہانے کی حاجت ہو تو (نہا کر) پاک ہو جایا کرو اور اگر بیمار ہو یا سفر میں ہو یا کوئی تم میں سے بیت الخلا سے ہو کر آیا ہو یا تم عورتوں سے ہم بستر ہوئے ہو اور تمہیں پانی نہ مل سکے تو پاک مٹی لو اور اس سے منہ اور ہاتھوں کا مسح (یعنی تیمم) کر لو۔ خدا تم پر کسی طرح کی تنگی نہیں کرنا چاہتا بلکہ یہ چاہتا ہے کہ تمہیں پاک کرے اور اپنی نعمتیں تم پر پوری کرے تاکہ تم شکر کرو",
    "explanation": "O you who have believed, when you rise to [perform] prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles. And if you are in a state of janabah, then purify yourselves. But if you are ill or on a journey or one of you comes from the place of relieving himself or you have contacted women and do not find water, then seek clean earth and wipe over your faces and hands with it. Allah does not intend to make difficulty for you, but He intends to purify you and complete His favor upon you that you may be grateful.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 6) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005006.mp3"
  },
  {
    "day": 71,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 8,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
    "urdu_translation": "اے ایمان والوں! خدا کے لیے انصاف کی گواہی دینے کے لیے کھڑے ہو جایا کرو۔ اور لوگوں کی دشمنی تم کو اس بات پر آمادہ نہ کرے کہ انصاف چھوڑ دو۔ انصاف کیا کرو کہ یہی پرہیزگاری کی بات ہے اور خدا سے ڈرتے رہو۔ کچھ شک نہیں کہ خدا تمہارے سب اعمال سے خبردار ہے",
    "explanation": "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness. And fear Allah; indeed, Allah is Acquainted with what you do.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 8) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005008.mp3"
  },
  {
    "day": 72,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 16,
    "arabic": "يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ وَيُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِهِ وَيَهْدِيهِمْ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ",
    "urdu_translation": "جس سے خدا اپنی رضا پر چلنے والوں کو نجات کے رستے دکھاتا ہے اور اپنے حکم سے اندھیرے میں سے نکال کر روشنی کی طرف لے جاتا اور ان کو سیدھے رستہ پر چلاتا ہے",
    "explanation": "By which Allah guides those who pursue His pleasure to the ways of peace and brings them out from darknesses into the light, by His permission, and guides them to a straight path.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 16) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005016.mp3"
  },
  {
    "day": 73,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 27,
    "arabic": "۞ وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ قَالَ لَأَقْتُلَنَّكَ ۖ قَالَ إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ",
    "urdu_translation": "اور (اے محمد) ان کو آدم کے دو بیٹوں (ہابیل اور قابیل) کے حالات (جو بالکل) سچے (ہیں) پڑھ کر سنا دو کہ جب ان دونوں نے خدا (کی جناب میں) کچھ نیازیں چڑھائیں تو ایک کی نیاز تو قبول ہو گئی اور دوسرے کی قبول نہ ہوئی (تب قابیل ہابیل سے) کہنے لگا کہ میں تجھے قتل کروں گا اس نے کہا کہ خدا پرہیزگاروں ہی کی (نیاز) قبول فرمایا کرتا ہے",
    "explanation": "And recite to them the story of Adam's two sons, in truth, when they both offered a sacrifice [to Allah], and it was accepted from one of them but was not accepted from the other. Said [the latter], \"I will surely kill you.\" Said [the former], \"Indeed, Allah only accepts from the righteous [who fear Him].",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 27) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005027.mp3"
  },
  {
    "day": 74,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 32,
    "arabic": "مِنْ أَجْلِ ذَٰلِكَ كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ أَنَّهُ مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ۚ وَلَقَدْ جَاءَتْهُمْ رُسُلُنَا بِالْبَيِّنَاتِ ثُمَّ إِنَّ كَثِيرًا مِنْهُمْ بَعْدَ ذَٰلِكَ فِي الْأَرْضِ لَمُسْرِفُونَ",
    "urdu_translation": "اس قتل کی وجہ سے ہم نے بنی اسرائیل پر یہ حکم نازل کیا کہ جو شخص کسی کو (ناحق) قتل کرے گا (یعنی) بغیر اس کے کہ جان کا بدلہ لیا جائے یا ملک میں خرابی کرنے کی سزا دی جائے اُس نے گویا تمام لوگوں کو قتل کیا اور جو اس کی زندگانی کا موجب ہوا تو گویا تمام لوگوں کی زندگانی کا موجب ہوا اور ان لوگوں کے پاس ہمارے پیغمبر روشن دلیلیں لا چکے ہیں پھر اس کے بعد بھی ان سے بہت سے لوگ ملک میں حدِ اعتدال سے نکل جاتے ہیں",
    "explanation": "Because of that, We decreed upon the Children of Israel that whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain mankind entirely. And whoever saves one - it is as if he had saved mankind entirely. And our messengers had certainly come to them with clear proofs. Then indeed many of them, [even] after that, throughout the land, were transgressors.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 32) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005032.mp3"
  },
  {
    "day": 75,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 35,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ وَجَاهِدُوا فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! خدا سے ڈرتے رہو اور اس کا قرب حاصل کرنے کا ذریعہ تلاش کرتے رہو اور اس کے رستے میں جہاد کرو تاکہ رستگاری پاؤ",
    "explanation": "O you who have believed, fear Allah and seek the means [of nearness] to Him and strive in His cause that you may succeed.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 35) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005035.mp3"
  },
  {
    "day": 76,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 54,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا مَنْ يَرْتَدَّ مِنْكُمْ عَنْ دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ أَذِلَّةٍ عَلَى الْمُؤْمِنِينَ أَعِزَّةٍ عَلَى الْكَافِرِينَ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ وَلَا يَخَافُونَ لَوْمَةَ لَائِمٍ ۚ ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَنْ يَشَاءُ ۚ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
    "urdu_translation": "اے ایمان والو اگر کوئی تم میں سے اپنے دین سے پھر جائے گا تو خدا ایسے لوگ پیدا کر دے گا جن کو وہ دوست رکھے اور جسے وہ دوست رکھیں اور جو مومنوں کے حق میں نرمی کریں اور کافروں سے سختی سے پیش آئیں خدا کی راہ میں جہاد کریں اور کسی ملامت کرنے والی کی ملامت سے نہ ڈریں یہ خدا کا فضل ہے وہ جسے چاہتا ہے دیتا ہے اور الله بڑی کشائش والا اور جاننے والا ہے",
    "explanation": "O you who have believed, whoever of you should revert from his religion - Allah will bring forth [in place of them] a people He will love and who will love Him [who are] humble toward the believers, powerful against the disbelievers; they strive in the cause of Allah and do not fear the blame of a critic. That is the favor of Allah; He bestows it upon whom He wills. And Allah is all-Encompassing and Knowing.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 54) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005054.mp3"
  },
  {
    "day": 77,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 90,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! شراب اور جوا اور بت اور پاسے (یہ سب) ناپاک کام اعمال شیطان سے ہیں سو ان سے بچتے رہنا تاکہ نجات پاؤ",
    "explanation": "O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone alters [to other than Allah], and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 90) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005090.mp3"
  },
  {
    "day": 78,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 119,
    "arabic": "قَالَ اللَّهُ هَٰذَا يَوْمُ يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ ۚ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۚ رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
    "urdu_translation": "خدا فرمائے گا کہ آج وہ دن ہے کہ راست بازوں کو ان کی سچائی ہی فائدہ دے گی ان کے لئے باغ ہیں جن کے نیچے نہریں بہہ رہی ہیں ابدالآباد ان میں بستے رہیں گے خدا ان سے خوش ہے اور وہ خدا سے خوش ہیں یہ بڑی کامیابی ہے",
    "explanation": "Allah will say, \"This is the Day when the truthful will benefit from their truthfulness.\" For them are gardens [in Paradise] beneath which rivers flow, wherein they will abide forever, Allah being pleased with them, and they with Him. That is the great attainment.",
    "family_tip": "آج کے دن سورۃ سورة المائدة (آیت 119) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005119.mp3"
  },
  {
    "day": 79,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 17,
    "arabic": "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    "urdu_translation": "اور اگر خدا تم کو کوئی سختی پہنچائے تو اس کے سوا اس کو کوئی دور کرنے والا نہیں اور اگر نعمت (وراحت) عطا کرے تو (کوئی اس کو روکنے والا نہیں) وہ ہر چیز پر قادر ہے",
    "explanation": "And if Allah should touch you with adversity, there is no remover of it except Him. And if He touches you with good - then He is over all things competent.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 17) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006017.mp3"
  },
  {
    "day": 80,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 32,
    "arabic": "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ ۖ وَلَلدَّارُ الْآخِرَةُ خَيْرٌ لِلَّذِينَ يَتَّقُونَ ۗ أَفَلَا تَعْقِلُونَ",
    "urdu_translation": "اور دنیا کی زندگی تو ایک کھیل اور مشغولہ ہے۔ اور بہت اچھا گھر تو آخرت کا گھر ہے (یعنی) ان کے لئے جو (خدا سے) ڈرتے ہیں۔ کیا تم سمجھتے نہیں",
    "explanation": "And the worldly life is not but amusement and diversion; but the home of the Hereafter is best for those who fear Allah, so will you not reason?",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 32) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006032.mp3"
  },
  {
    "day": 81,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 54,
    "arabic": "وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ ۖ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ ۖ أَنَّهُ مَنْ عَمِلَ مِنْكُمْ سُوءًا بِجَهَالَةٍ ثُمَّ تَابَ مِنْ بَعْدِهِ وَأَصْلَحَ فَأَنَّهُ غَفُورٌ رَحِيمٌ",
    "urdu_translation": "اور جب تمہارے پاس ایسے لوگ آیا کریں جو ہماری آیتوں پر ایمان لاتے ہیں تو (ان سے) سلام علیکم کہا کرو خدا نے اپنی ذات (پاک) پر رحمت کو لازم کرلیا ہے کہ جو کوئی تم میں نادانی سے کوئی بری حرکت کر بیٹھے پھر اس کے بعد توبہ کرلے اور نیکوکار ہوجائے تو وہ بخشنے والا مہربان ہے",
    "explanation": "And when those come to you who believe in Our verses, say, \"Peace be upon you. Your Lord has decreed upon Himself mercy: that any of you who does wrong out of ignorance and then repents after that and corrects himself - indeed, He is Forgiving and Merciful.\"",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 54) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006054.mp3"
  },
  {
    "day": 82,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 59,
    "arabic": "۞ وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ ۚ وَمَا تَسْقُطُ مِنْ وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ وَلَا رَطْبٍ وَلَا يَابِسٍ إِلَّا فِي كِتَابٍ مُبِينٍ",
    "urdu_translation": "اور اسی کے پاس غیب کی کنجیاں ہیں جن کو اس کے سوا کوئی نہیں جانتا۔ اور اسے جنگلوں اور دریاؤں کی سب چیزوں کا علم ہے۔ اور کوئی پتہ نہیں جھڑتا مگر وہ اس کو جانتا ہے اور زمین کے اندھیروں میں کوئی دانہ اور کوئی ہری اور سوکھی چیز نہیں ہے مگر کتاب روشن میں (لکھی ہوئی) ہے",
    "explanation": "And with Him are the keys of the unseen; none knows them except Him. And He knows what is on the land and in the sea. Not a leaf falls but that He knows it. And no grain is there within the darknesses of the earth and no moist or dry [thing] but that it is [written] in a clear record.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 59) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006059.mp3"
  },
  {
    "day": 83,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 95,
    "arabic": "۞ إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ ۖ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ الْمَيِّتِ مِنَ الْحَيِّ ۚ ذَٰلِكُمُ اللَّهُ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
    "urdu_translation": "بے شک خدا ہی دانے اور گٹھلی کو پھاڑ کر (ان سے درخت وغیرہ) اگاتا ہے وہی جاندار کو بے جان سے نکالتا ہے اور وہی بےجان کا جاندار سے نکالنے والا ہے۔ یہی تو خدا ہے۔ پھر تم کہاں بہکے پھرتے ہو",
    "explanation": "Indeed, Allah is the cleaver of grain and date seeds. He brings the living out of the dead and brings the dead out of the living. That is Allah; so how are you deluded?",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 95) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006095.mp3"
  },
  {
    "day": 84,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 102,
    "arabic": "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ خَالِقُ كُلِّ شَيْءٍ فَاعْبُدُوهُ ۚ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ",
    "urdu_translation": "یہی (اوصاف رکھنے والا) خدا تمہارا پروردگار ہے۔ اس کے سوا کوئی معبود نہیں۔ (وہی) ہر چیز کا پیداکرنے والا (ہے) تو اسی کی عبادت کرو۔ اور وہ ہر چیز کا نگراں ہے",
    "explanation": "That is Allah, your Lord; there is no deity except Him, the Creator of all things, so worship Him. And He is Disposer of all things.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 102) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006102.mp3"
  },
  {
    "day": 85,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 103,
    "arabic": "لَا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
    "urdu_translation": "(وہ ایسا ہے کہ) نگاہیں اس کا ادراک نہیں کرسکتیں اور وہ نگاہوں کا ادراک کرسکتا ہے اور وہ بھید جاننے والا خبردار ہے",
    "explanation": "Vision perceives Him not, but He perceives [all] vision; and He is the Subtle, the Acquainted.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 103) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006103.mp3"
  },
  {
    "day": 86,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 125,
    "arabic": "فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ",
    "urdu_translation": "تو جس شخص کو خدا چاہتا ہے کہ ہدایت بخشے اس کا سینہ اسلام کے لیے کھول دیتا ہے اور جسے چاہتا ہے کہ گمراہ کرے اس کا سینہ تنگ اور گھٹا ہوا کر دیتا ہے گویا وہ آسمان پر چڑھ رہا ہے اس طرح خدا ان لوگوں پر جو ایمان نہیں لاتے عذاب بھیجتا ہے",
    "explanation": "So whoever Allah wants to guide - He expands his breast to [contain] Islam; and whoever He wants to misguide - He makes his breast tight and constricted as though he were climbing into the sky. Thus does Allah place defilement upon those who do not believe.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 125) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006125.mp3"
  },
  {
    "day": 87,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 151,
    "arabic": "۞ قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ ۖ أَلَّا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا ۖ وَلَا تَقْتُلُوا أَوْلَادَكُمْ مِنْ إِمْلَاقٍ ۖ نَحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ ۖ وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ ۖ وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ ۚ ذَٰلِكُمْ وَصَّاكُمْ بِهِ لَعَلَّكُمْ تَعْقِلُونَ",
    "urdu_translation": "کہہ کہ (لوگو) آؤ میں تمہیں وہ چیزیں پڑھ کر سناؤں جو تمہارے پروردگار نے تم پر حرام کر دی ہیں (ان کی نسبت اس نے اس طرح ارشاد فرمایا ہے) کہ کسی چیز کو خدا کا شریک نہ بنانا اور ماں باپ (سے بدسلوکی نہ کرنا بلکہ) سلوک کرتے رہنا اور ناداری (کے اندیشے) سے اپنی اولاد کو قتل نہ کرنا کیونکہ تم کو اور ان کو ہم ہی رزق دیتے ہیں اور بےحیائی کے کام ظاہر ہوں یا پوشیدہ ان کے پاس نہ پھٹکنا اور کسی جان (والے) کو جس کے قتل کو خدا نے حرام کر دیا ہے قتل نہ کرنا مگر جائز طور پر (یعنی جس کا شریعت حکم دے) ان باتوں کا وہ تمہیں ارشاد فرماتا ہے تاکہ تم سمجھو",
    "explanation": "Say, \"Come, I will recite what your Lord has prohibited to you. [He commands] that you not associate anything with Him, and to parents, good treatment, and do not kill your children out of poverty; We will provide for you and them. And do not approach immoralities - what is apparent of them and what is concealed. And do not kill the soul which Allah has forbidden [to be killed] except by [legal] right. This has He instructed you that you may use reason.\"",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 151) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006151.mp3"
  },
  {
    "day": 88,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 152,
    "arabic": "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُ ۖ وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ ۖ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا ۖ وَإِذَا قُلْتُمْ فَاعْدِلُوا وَلَوْ كَانَ ذَا قُرْبَىٰ ۖ وَبِعَهْدِ اللَّهِ أَوْفُوا ۚ ذَٰلِكُمْ وَصَّاكُمْ بِهِ لَعَلَّكُمْ تَذَكَّرُونَ",
    "urdu_translation": "اور یتیم کے مال کے پاس بھی نہ جانا مگر ایسے طریق سے کہ بہت ہی پسندیدہ ہو یہاں تک کہ وہ جوانی کو پہنچ جائے اور ناپ تول انصاف کے ساتھ پوری پوری کیا کرو ہم کسی کو تکلیف نہیں دیتے مگر اس کی طاقت کے مطابق اور جب (کسی کی نسبت) کوئی بات کہو تو انصاف سے کہو گو وہ (تمہارا) رشتہ دار ہی ہو اور خدا کے عہد کو پورا کرو ان باتوں کا خدا تمہیں حکم دیتا ہے تاکہ تم نصحیت کرو",
    "explanation": "And do not approach the orphan's property except in a way that is best until he reaches maturity. And give full measure and weight in justice. We do not charge any soul except [with that within] its capacity. And when you testify, be just, even if [it concerns] a near relative. And the covenant of Allah fulfill. This has He instructed you that you may remember.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 152) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006152.mp3"
  },
  {
    "day": 89,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 160,
    "arabic": "مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا ۖ وَمَنْ جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا وَهُمْ لَا يُظْلَمُونَ",
    "urdu_translation": "اور جو کوئی (خدا کے حضور) نیکی لے کر آئے گا اس کو ویسی دس نیکیاں ملیں گی اور جو برائی لائے گا اسے سزا ویسے ہی ملے گی اور ان پر ظلم نہیں کیا جائے گا",
    "explanation": "Whoever comes [on the Day of Judgement] with a good deed will have ten times the like thereof [to his credit], and whoever comes with an evil deed will not be recompensed except the like thereof; and they will not be wronged.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 160) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006160.mp3"
  },
  {
    "day": 90,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 162,
    "arabic": "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "(یہ بھی) کہہ دو کہ میری نماز اور میری عبادت اور میرا جینا اور میرا مرنا سب خدائے رب العالمین ہی کے لیے ہے",
    "explanation": "Say, \"Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.",
    "family_tip": "آج کے دن سورۃ سورة الأنعام (آیت 162) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006162.mp3"
  }
];

export const hadiths: Hadith[] = [
  {
    "day": 60,
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu_translation": "دو کلمے زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں: سبحان اللہ وبحمدہ، سبحان اللہ العظیم۔",
    "source": "صحیح البخاری: 6406",
    "category": "فضیلتِ اذکار",
    "lesson": "یہ مبارک تسبیح پڑھنے سے نامہ اعمال میں نیکیوں کا پلڑا انتہائی وزنی ہو جاتا ہے۔",
    "family_tip": "چلتے پھرتے اور گاڑی چلاتے ہوئے یہ کلمات کثرت سے پڑھیں۔"
  },
  {
    "day": 61,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل ضائع ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 62,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت اور خیر کا ذریعہ ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 63,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا سچے مومن کی پہچان ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 64,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد و جلن سے بچنا ایمان کی تکمیل ہے۔",
    "family_tip": "اپنے بہن بھائیوں اور دوستوں کے لیے بھی وہی سہولت اور بھلائی چاہیں جو اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 65,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی مالی خرچ کے نیکیوں کا عظیم خزانہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور باہر ملنے والوں سے مسکرا کر اور خندہ پیشانی سے ملیں۔"
  },
  {
    "day": 66,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے بعد نیکی کرو جو اسے مٹا دے، اور لوگوں سے اچھے اخلاق کے ساتھ پیش آؤ۔",
    "source": "جامع الترمذی: 1987",
    "category": "تقویٰ و اخلاق",
    "lesson": "تنہائی اور محفل دونوں میں اللہ کا خوف رکھنا اور غلطی کے بعد فوری نیکی کرنا کامیابی کی چابی ہے۔",
    "family_tip": "تنہائی میں موبائل یا انٹرنیٹ استعمال کرتے ہوئے بھی اللہ کے حاضر و ناظر ہونے کا دھیان رکھیں۔"
  },
  {
    "day": 67,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت کے مستحق وہی بنتے ہیں جو انسانوں اور جانوروں کے ساتھ رحم کا معاملہ کرتے ہیں۔",
    "family_tip": "گھر کے ارد گرد پرندوں کے لیے پانی رکھیں یا کسی ضرورت مند کی مدد کریں۔"
  },
  {
    "day": 68,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094",
    "category": "سچائی و امانت",
    "lesson": "ہمیشہ سچ بولنا دل کو اطمینان بخشتا ہے اور انسان کو عزت اور جنت کا وارث بناتا ہے۔",
    "family_tip": "مذاق میں بھی کبھی جھوٹ نہ بولنے کی گھریلو تربیت کریں۔"
  },
  {
    "day": 69,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "سنن أبي داود: 1479",
    "category": "فضیلتِ دعا",
    "lesson": "دعا اللہ کے سامنے بندے کی مکمل عاجزی اور بندگی کا سب سے اعلیٰ اظہار ہے۔",
    "family_tip": "دن کے مختلف اوقات میں چھوٹی مسنون دعائیں پڑھنے کی عادت ڈالیں۔"
  },
  {
    "day": 70,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ",
    "urdu_translation": "پاکیزگی اور صفائی آدھا ایمان ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "طہارت و پاکیزگی",
    "lesson": "جسمانی صفائی کے ساتھ ساتھ دل اور نیت کی پاکیزگی ایمان کا بنیادی تقاضا ہے۔",
    "family_tip": "اپنے کمرے اور ارد گرد کے ماحول کو صاف ستھرا رکھنے میں ہاتھ بٹائیں۔"
  },
  {
    "day": 71,
    "arabic": "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    "urdu_translation": "جو شخص اللہ اور یومِ آخرت پر ایمان رکھتا ہو اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
    "source": "صحیح البخاری: 6018",
    "category": "حفظِ لسان",
    "lesson": "غیر ضروری اور بے مقصد باتوں سے پرہیز کرنا انسان کے وقت اور وقار کی حفاظت کرتا ہے۔",
    "family_tip": "اگر کوئی بات کسی کو تکلیف دے سکتی ہو تو خاموشی اختیار کریں۔"
  },
  {
    "day": 72,
    "arabic": "الْبِرُّ حُسْنُ الْخُلُقِ ، وَالإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
    "urdu_translation": "نیکی اچھے اخلاق کا نام ہے، اور گناہ وہ ہے جو تمہارے دل میں کھٹکے اور تم ناپسند کرو کہ لوگ اس پر مطلع ہوں۔",
    "source": "صحیح مسلم: 2553",
    "category": "ضمیر کی بیداری",
    "lesson": "انسان کا پاک ضمیر سچائی اور برائی کو پہچاننے کا بہترین اندرونی پیمانہ ہے۔",
    "family_tip": "کسی بھی کام میں شک ہو تو اپنے دل سے فتویٰ لیں اور گناہ کے راستے سے بچیں۔"
  },
  {
    "day": 73,
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "urdu_translation": "جو شخص علم کی تلاش کے راستے پر چلتا ہے، اللہ تعالیٰ اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
    "source": "صحیح مسلم: 2699",
    "category": "طلبِ علم",
    "lesson": "دینی اور مفید دنیاوی علم کا حصول انسان کے درجات بلند کرتا ہے اور نجات کا ذریعہ ہے۔",
    "family_tip": "روزانہ کسی مستند اسلامی کتاب یا سیرت سے 10 منٹ مطالعہ کریں۔"
  },
  {
    "day": 74,
    "arabic": "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    "urdu_translation": "پہلوان وہ نہیں جو پچھاڑ دے، بلکہ حقیقی طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    "source": "صحیح البخاری: 6114",
    "category": "ضبطِ نفس",
    "lesson": "غصے کو قابو میں رکھنا حقیقی شجاعت اور کمالِ روحانیت کی دلیل ہے۔",
    "family_tip": "جب غصہ آئے تو 'اعوذ باللہ' پڑھیں اور بیٹھ جائیں۔"
  },
  {
    "day": 75,
    "arabic": "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    "urdu_translation": "اللہ جس کے ساتھ بھلائی کا ارادہ فرماتا ہے اسے دین کی گہری سمجھ عطا فرماتا ہے۔",
    "source": "صحیح البخاری: 71",
    "category": "فہمِ دین",
    "lesson": "دین کی سمجھ بوجھ اور حکمت اللہ تعالیٰ کی طرف سے ملنے والی سب سے بڑی نعمت ہے۔",
    "family_tip": "نماز اور عبادات کے احکام و مسائل سیکھنے میں دلچسپی لیں۔"
  },
  {
    "day": 76,
    "arabic": "الصَّلَاةُ نُورٌ ، وَالصَّدَقَةُ بُرْهَانٌ ، وَالصَّبْرُ ضِيَاءٌ",
    "urdu_translation": "نماز نور ہے، صدقہ دلیل ہے، اور صبر روشنی ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "روحانی ارکان",
    "lesson": "نماز اور صدقہ انسان کے دل اور قبر دونوں کو روشن کرتے ہیں۔",
    "family_tip": "نمازِ پنجگانہ کی پابندی کو گھر کا اولین اصول بنائیں۔"
  },
  {
    "day": 77,
    "arabic": "رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ",
    "urdu_translation": "رب کی خوشنودی والد کی خوشنودی میں ہے، اور رب کی ناراضگی والد کی ناراضگی میں ہے۔",
    "source": "جامع الترمذی: 1899",
    "category": "اطاعتِ والدین",
    "lesson": "والدین کی خدمت اور اطاعت اللہ کی رضا حاصل کرنے کا سب سے آسان اور یقینی راستہ ہے۔",
    "family_tip": "آج والدین کی خدمت کر کے ان سے دعائیں لیں۔"
  },
  {
    "day": 78,
    "arabic": "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    "urdu_translation": "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جس پر ہمیشگی کی جائے چاہے وہ تھوڑا ہی ہو۔",
    "source": "صحیح البخاری: 6464",
    "category": "مداومتِ عمل",
    "lesson": "نیکی کے کاموں میں استقامت اور تسلسل جذبات کی وقتی تیزی سے کہیں زیادہ قیمتی ہے۔",
    "family_tip": "روزانہ کا ایک چھوٹا سا وظیفہ یا نیکی مقرر کریں اور اس پر قائم رہیں۔"
  },
  {
    "day": 79,
    "arabic": "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ ، وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ ، فَلْيَصِلْ رَحِمَهُ",
    "urdu_translation": "جسے یہ پسند ہو کہ اس کے رزق میں کشادگی کی جائے اور اس کی عمر دراز ہو تو وہ صلہ رحمی کرے۔",
    "source": "صحیح البخاری: 2067",
    "category": "صلہ رحمی",
    "lesson": "رشتہ داروں کے ساتھ حسنِ سلوک اور تعلق جوڑنا دنیا میں برکت اور رزق کی فراوانی کا سبب ہے۔",
    "family_tip": "کسی ناراض رشتہ دار کو فون کر کے خیر خیریت معلوم کریں۔"
  },
  {
    "day": 80,
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu_translation": "دو کلمے زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں: سبحان اللہ وبحمدہ، سبحان اللہ العظیم۔",
    "source": "صحیح البخاری: 6406",
    "category": "فضیلتِ اذکار",
    "lesson": "یہ مبارک تسبیح پڑھنے سے نامہ اعمال میں نیکیوں کا پلڑا انتہائی وزنی ہو جاتا ہے۔",
    "family_tip": "چلتے پھرتے اور گاڑی چلاتے ہوئے یہ کلمات کثرت سے پڑھیں۔"
  },
  {
    "day": 81,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل ضائع ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 82,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت اور خیر کا ذریعہ ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 83,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا سچے مومن کی پہچان ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 84,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد و جلن سے بچنا ایمان کی تکمیل ہے۔",
    "family_tip": "اپنے بہن بھائیوں اور دوستوں کے لیے بھی وہی سہولت اور بھلائی چاہیں جو اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 85,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی مالی خرچ کے نیکیوں کا عظیم خزانہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور باہر ملنے والوں سے مسکرا کر اور خندہ پیشانی سے ملیں۔"
  },
  {
    "day": 86,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے بعد نیکی کرو جو اسے مٹا دے، اور لوگوں سے اچھے اخلاق کے ساتھ پیش آؤ۔",
    "source": "جامع الترمذی: 1987",
    "category": "تقویٰ و اخلاق",
    "lesson": "تنہائی اور محفل دونوں میں اللہ کا خوف رکھنا اور غلطی کے بعد فوری نیکی کرنا کامیابی کی چابی ہے۔",
    "family_tip": "تنہائی میں موبائل یا انٹرنیٹ استعمال کرتے ہوئے بھی اللہ کے حاضر و ناظر ہونے کا دھیان رکھیں۔"
  },
  {
    "day": 87,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت کے مستحق وہی بنتے ہیں جو انسانوں اور جانوروں کے ساتھ رحم کا معاملہ کرتے ہیں۔",
    "family_tip": "گھر کے ارد گرد پرندوں کے لیے پانی رکھیں یا کسی ضرورت مند کی مدد کریں۔"
  },
  {
    "day": 88,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094",
    "category": "سچائی و امانت",
    "lesson": "ہمیشہ سچ بولنا دل کو اطمینان بخشتا ہے اور انسان کو عزت اور جنت کا وارث بناتا ہے۔",
    "family_tip": "مذاق میں بھی کبھی جھوٹ نہ بولنے کی گھریلو تربیت کریں۔"
  },
  {
    "day": 89,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "سنن أبي داود: 1479",
    "category": "فضیلتِ دعا",
    "lesson": "دعا اللہ کے سامنے بندے کی مکمل عاجزی اور بندگی کا سب سے اعلیٰ اظہار ہے۔",
    "family_tip": "دن کے مختلف اوقات میں چھوٹی مسنون دعائیں پڑھنے کی عادت ڈالیں۔"
  },
  {
    "day": 90,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ",
    "urdu_translation": "پاکیزگی اور صفائی آدھا ایمان ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "طہارت و پاکیزگی",
    "lesson": "جسمانی صفائی کے ساتھ ساتھ دل اور نیت کی پاکیزگی ایمان کا بنیادی تقاضا ہے۔",
    "family_tip": "اپنے کمرے اور ارد گرد کے ماحول کو صاف ستھرا رکھنے میں ہاتھ بٹائیں۔"
  }
];

export const tafseers: TafseerDetail[] = [
  {
    "day": 60,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 58,
    "arabic": "۞ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ ۚ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُمْ بِهِ ۗ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا",
    "urdu_translation": "خدا تم کو حکم دیتا ہے کہ امانت والوں کی امانتیں ان کے حوالے کردیا کرو اور جب لوگوں میں فیصلہ کرنے لگو تو انصاف سے فیصلہ کیا کرو خدا تمہیں بہت خوب نصیحت کرتا ہے بےشک خدا سنتا اور دیکھتا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 58) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 58) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 61,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 59,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنْكُمْ ۖ فَإِنْ تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِنْ كُنْتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ۚ ذَٰلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا",
    "urdu_translation": "مومنو! خدا اور اس کے رسول کی فرمانبرداری کرو اور جو تم میں سے صاحب حکومت ہیں ان کی بھی اور اگر کسی بات میں تم میں اختلاف واقع ہو تو اگر خدا اور روز آخرت پر ایمان رکھتے ہو تو اس میں خدا اور اس کے رسول (کے حکم) کی طرف رجوع کرو یہ بہت اچھی بات ہے اور اس کا مآل بھی اچھا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 59) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 59) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 62,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 86,
    "arabic": "وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ حَسِيبًا",
    "urdu_translation": "اور جب تم کو کوئی دعا دے تو (جواب میں) تم اس سے بہتر (کلمے) سے (اسے) دعا دو یا انہیں لفظوں سے دعا دو بےشک خدا ہر چیز کا حساب لینے والا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 86) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 86) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 63,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 103,
    "arabic": "فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا اطْمَأْنَنْتُمْ فَأَقِيمُوا الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا",
    "urdu_translation": "پھر جب تم نماز تمام کرچکو تو کھڑے اور بیٹھے اور لیٹے (ہر حالت میں) خدا کو یاد کرو پھر جب خوف جاتا رہے تو (اس طرح سے) نماز پڑھو (جس طرح امن کی حالت میں پڑھتے ہو) بےشک نماز کا مومنوں پر اوقات (مقررہ) میں ادا کرنا فرض ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 103) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 103) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 64,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 105,
    "arabic": "إِنَّا أَنْزَلْنَا إِلَيْكَ الْكِتَابَ بِالْحَقِّ لِتَحْكُمَ بَيْنَ النَّاسِ بِمَا أَرَاكَ اللَّهُ ۚ وَلَا تَكُنْ لِلْخَائِنِينَ خَصِيمًا",
    "urdu_translation": "(اے پیغمبر) ہم نے تم پر سچی کتاب نازل کی ہے تاکہ خدا کی ہدایت کے مطابق لوگوں کے مقدمات میں فیصلہ کرو اور (دیکھو) دغابازوں کی حمایت میں کبھی بحث نہ کرنا",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 105) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 105) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 65,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 110,
    "arabic": "وَمَنْ يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَحِيمًا",
    "urdu_translation": "اور جو شخص کوئی برا کام کر بیٹھے یا اپنے حق میں ظلم کرلے پھر خدا سے بخشش مانگے تو خدا کو بخشنے والا اور مہربان پائے گا",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 110) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 110) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 66,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 128,
    "arabic": "وَإِنِ امْرَأَةٌ خَافَتْ مِنْ بَعْلِهَا نُشُوزًا أَوْ إِعْرَاضًا فَلَا جُنَاحَ عَلَيْهِمَا أَنْ يُصْلِحَا بَيْنَهُمَا صُلْحًا ۚ وَالصُّلْحُ خَيْرٌ ۗ وَأُحْضِرَتِ الْأَنْفُسُ الشُّحَّ ۚ وَإِنْ تُحْسِنُوا وَتَتَّقُوا فَإِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
    "urdu_translation": "اور اگر کسی عورت کو اپنے خاوند کی طرف سے زیادتی یا بےرغبتی کا اندیشہ ہو تم میاں بیوی پر کچھ گناہ نہیں کہ آپس میں کسی قرارداد پر صلح کرلیں۔ اور صلح خوب (چیز) ہے اور طبیعتیں تو بخل کی طرف مائل ہوتی ہیں اور اگر تم نیکوکاری اور پرہیزگاری کرو گے تو خدا تمہارے سب کاموں سے واقف ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 128) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 128) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 67,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 135,
    "arabic": "۞ يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلَّهِ وَلَوْ عَلَىٰ أَنْفُسِكُمْ أَوِ الْوَالِدَيْنِ وَالْأَقْرَبِينَ ۚ إِنْ يَكُنْ غَنِيًّا أَوْ فَقِيرًا فَاللَّهُ أَوْلَىٰ بِهِمَا ۖ فَلَا تَتَّبِعُوا الْهَوَىٰ أَنْ تَعْدِلُوا ۚ وَإِنْ تَلْوُوا أَوْ تُعْرِضُوا فَإِنَّ اللَّهَ كَانَ بِمَا تَعْمَلُونَ خَبِيرًا",
    "urdu_translation": "اے ایمان والو! انصاف پر قائم رہو اور خدا کے لئے سچی گواہی دو خواہ (اس میں) تمہارا یا تمہارےماں باپ اور رشتہ داروں کا نقصان ہی ہو۔ اگر کوئی امیر ہے یا فقیر تو خدا ان کا خیر خواہ ہے۔ تو تم خواہش نفس کے پیچھے چل کر عدل کو نہ چھوڑ دینا۔ اگر تم پیچیدا شہادت دو گے یا (شہادت سے) بچنا چاہو گے تو (جان رکھو) خدا تمہارے سب کاموں سے واقف ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 135) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 135) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 68,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 147,
    "arabic": "مَا يَفْعَلُ اللَّهُ بِعَذَابِكُمْ إِنْ شَكَرْتُمْ وَآمَنْتُمْ ۚ وَكَانَ اللَّهُ شَاكِرًا عَلِيمًا",
    "urdu_translation": "اگر تم (خدا کے شکرگزار رہو اور (اس پر) ایمان لے آؤ تو خدا تم کو عذاب دے کر کیا کرے گا۔ اور خدا تو قدرشناس اور دانا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 147) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 147) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 69,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 2,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِنْ رَبِّهِمْ وَرِضْوَانًا ۚ وَإِذَا حَلَلْتُمْ فَاصْطَادُوا ۚ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَنْ صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَنْ تَعْتَدُوا ۘ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
    "urdu_translation": "مومنو! خدا کے نام کی چیزوں کی بےحرمتی نہ کرنا اور نہ ادب کے مہینے کی اور نہ قربانی کے جانوروں کی اور نہ ان جانوروں کی (جو خدا کی نذر کر دیئے گئے ہوں اور) جن کے گلوں میں پٹے بندھے ہوں اور نہ ان لوگوں کی جو عزت کے گھر (یعنی بیت الله) کو جا رہے ہوں (اور) اپنے پروردگار کے فضل اور اس کی خوشنودی کے طلبگار ہوں اور جب احرام اتار دو تو (پھر اختیار ہے کہ) شکار کرو اور لوگوں کی دشمنی اس وجہ سے کہ انہوں نے تم کو عزت والی مسجد سے روکا تھا تمہیں اس بات پر آمادہ نہ کرے کہ تم ان پر زیادتی کرنے لگو اور (دیکھو) نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کیا کرو اور گناہ اور ظلم کی باتوں میں مدد نہ کیا کرو اور خدا سے ڈرتے رہو۔ کچھ شک نہیں کہ خدا کا عذاب سخت ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 2) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 2) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 70,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 6,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ ۚ وَإِنْ كُنْتُمْ جُنُبًا فَاطَّهَّرُوا ۚ وَإِنْ كُنْتُمْ مَرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِنْكُمْ مِنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ مِنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُمْ مِنْ حَرَجٍ وَلَٰكِنْ يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُونَ",
    "urdu_translation": "مومنو! جب تم نماز پڑھنے کا قصد کیا کرو تم منہ اور کہنیوں تک ہاتھ دھو لیا کرو اور سر کا مسح کر لیا کرو اور ٹخنوں تک پاؤں (دھو لیا کرو) اور اگر نہانے کی حاجت ہو تو (نہا کر) پاک ہو جایا کرو اور اگر بیمار ہو یا سفر میں ہو یا کوئی تم میں سے بیت الخلا سے ہو کر آیا ہو یا تم عورتوں سے ہم بستر ہوئے ہو اور تمہیں پانی نہ مل سکے تو پاک مٹی لو اور اس سے منہ اور ہاتھوں کا مسح (یعنی تیمم) کر لو۔ خدا تم پر کسی طرح کی تنگی نہیں کرنا چاہتا بلکہ یہ چاہتا ہے کہ تمہیں پاک کرے اور اپنی نعمتیں تم پر پوری کرے تاکہ تم شکر کرو",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 6) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 6) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 71,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 8,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
    "urdu_translation": "اے ایمان والوں! خدا کے لیے انصاف کی گواہی دینے کے لیے کھڑے ہو جایا کرو۔ اور لوگوں کی دشمنی تم کو اس بات پر آمادہ نہ کرے کہ انصاف چھوڑ دو۔ انصاف کیا کرو کہ یہی پرہیزگاری کی بات ہے اور خدا سے ڈرتے رہو۔ کچھ شک نہیں کہ خدا تمہارے سب اعمال سے خبردار ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 8) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 8) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 72,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 16,
    "arabic": "يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ وَيُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِهِ وَيَهْدِيهِمْ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ",
    "urdu_translation": "جس سے خدا اپنی رضا پر چلنے والوں کو نجات کے رستے دکھاتا ہے اور اپنے حکم سے اندھیرے میں سے نکال کر روشنی کی طرف لے جاتا اور ان کو سیدھے رستہ پر چلاتا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 16) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 16) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 73,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 27,
    "arabic": "۞ وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ قَالَ لَأَقْتُلَنَّكَ ۖ قَالَ إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ",
    "urdu_translation": "اور (اے محمد) ان کو آدم کے دو بیٹوں (ہابیل اور قابیل) کے حالات (جو بالکل) سچے (ہیں) پڑھ کر سنا دو کہ جب ان دونوں نے خدا (کی جناب میں) کچھ نیازیں چڑھائیں تو ایک کی نیاز تو قبول ہو گئی اور دوسرے کی قبول نہ ہوئی (تب قابیل ہابیل سے) کہنے لگا کہ میں تجھے قتل کروں گا اس نے کہا کہ خدا پرہیزگاروں ہی کی (نیاز) قبول فرمایا کرتا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 27) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 27) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 74,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 32,
    "arabic": "مِنْ أَجْلِ ذَٰلِكَ كَتَبْنَا عَلَىٰ بَنِي إِسْرَائِيلَ أَنَّهُ مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا ۚ وَلَقَدْ جَاءَتْهُمْ رُسُلُنَا بِالْبَيِّنَاتِ ثُمَّ إِنَّ كَثِيرًا مِنْهُمْ بَعْدَ ذَٰلِكَ فِي الْأَرْضِ لَمُسْرِفُونَ",
    "urdu_translation": "اس قتل کی وجہ سے ہم نے بنی اسرائیل پر یہ حکم نازل کیا کہ جو شخص کسی کو (ناحق) قتل کرے گا (یعنی) بغیر اس کے کہ جان کا بدلہ لیا جائے یا ملک میں خرابی کرنے کی سزا دی جائے اُس نے گویا تمام لوگوں کو قتل کیا اور جو اس کی زندگانی کا موجب ہوا تو گویا تمام لوگوں کی زندگانی کا موجب ہوا اور ان لوگوں کے پاس ہمارے پیغمبر روشن دلیلیں لا چکے ہیں پھر اس کے بعد بھی ان سے بہت سے لوگ ملک میں حدِ اعتدال سے نکل جاتے ہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 32) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 32) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 75,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 35,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ وَجَاهِدُوا فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! خدا سے ڈرتے رہو اور اس کا قرب حاصل کرنے کا ذریعہ تلاش کرتے رہو اور اس کے رستے میں جہاد کرو تاکہ رستگاری پاؤ",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 35) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 35) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 76,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 54,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا مَنْ يَرْتَدَّ مِنْكُمْ عَنْ دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ أَذِلَّةٍ عَلَى الْمُؤْمِنِينَ أَعِزَّةٍ عَلَى الْكَافِرِينَ يُجَاهِدُونَ فِي سَبِيلِ اللَّهِ وَلَا يَخَافُونَ لَوْمَةَ لَائِمٍ ۚ ذَٰلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَنْ يَشَاءُ ۚ وَاللَّهُ وَاسِعٌ عَلِيمٌ",
    "urdu_translation": "اے ایمان والو اگر کوئی تم میں سے اپنے دین سے پھر جائے گا تو خدا ایسے لوگ پیدا کر دے گا جن کو وہ دوست رکھے اور جسے وہ دوست رکھیں اور جو مومنوں کے حق میں نرمی کریں اور کافروں سے سختی سے پیش آئیں خدا کی راہ میں جہاد کریں اور کسی ملامت کرنے والی کی ملامت سے نہ ڈریں یہ خدا کا فضل ہے وہ جسے چاہتا ہے دیتا ہے اور الله بڑی کشائش والا اور جاننے والا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 54) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 54) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 77,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 90,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! شراب اور جوا اور بت اور پاسے (یہ سب) ناپاک کام اعمال شیطان سے ہیں سو ان سے بچتے رہنا تاکہ نجات پاؤ",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 90) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 90) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 78,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 119,
    "arabic": "قَالَ اللَّهُ هَٰذَا يَوْمُ يَنْفَعُ الصَّادِقِينَ صِدْقُهُمْ ۚ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ۚ رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ ۚ ذَٰلِكَ الْفَوْزُ الْعَظِيمُ",
    "urdu_translation": "خدا فرمائے گا کہ آج وہ دن ہے کہ راست بازوں کو ان کی سچائی ہی فائدہ دے گی ان کے لئے باغ ہیں جن کے نیچے نہریں بہہ رہی ہیں ابدالآباد ان میں بستے رہیں گے خدا ان سے خوش ہے اور وہ خدا سے خوش ہیں یہ بڑی کامیابی ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 119) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 119) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 79,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 17,
    "arabic": "وَإِنْ يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِنْ يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    "urdu_translation": "اور اگر خدا تم کو کوئی سختی پہنچائے تو اس کے سوا اس کو کوئی دور کرنے والا نہیں اور اگر نعمت (وراحت) عطا کرے تو (کوئی اس کو روکنے والا نہیں) وہ ہر چیز پر قادر ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 17) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 17) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 80,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 32,
    "arabic": "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا لَعِبٌ وَلَهْوٌ ۖ وَلَلدَّارُ الْآخِرَةُ خَيْرٌ لِلَّذِينَ يَتَّقُونَ ۗ أَفَلَا تَعْقِلُونَ",
    "urdu_translation": "اور دنیا کی زندگی تو ایک کھیل اور مشغولہ ہے۔ اور بہت اچھا گھر تو آخرت کا گھر ہے (یعنی) ان کے لئے جو (خدا سے) ڈرتے ہیں۔ کیا تم سمجھتے نہیں",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 32) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 32) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 81,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 54,
    "arabic": "وَإِذَا جَاءَكَ الَّذِينَ يُؤْمِنُونَ بِآيَاتِنَا فَقُلْ سَلَامٌ عَلَيْكُمْ ۖ كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ ۖ أَنَّهُ مَنْ عَمِلَ مِنْكُمْ سُوءًا بِجَهَالَةٍ ثُمَّ تَابَ مِنْ بَعْدِهِ وَأَصْلَحَ فَأَنَّهُ غَفُورٌ رَحِيمٌ",
    "urdu_translation": "اور جب تمہارے پاس ایسے لوگ آیا کریں جو ہماری آیتوں پر ایمان لاتے ہیں تو (ان سے) سلام علیکم کہا کرو خدا نے اپنی ذات (پاک) پر رحمت کو لازم کرلیا ہے کہ جو کوئی تم میں نادانی سے کوئی بری حرکت کر بیٹھے پھر اس کے بعد توبہ کرلے اور نیکوکار ہوجائے تو وہ بخشنے والا مہربان ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 54) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 54) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 82,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 59,
    "arabic": "۞ وَعِنْدَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ ۚ وَيَعْلَمُ مَا فِي الْبَرِّ وَالْبَحْرِ ۚ وَمَا تَسْقُطُ مِنْ وَرَقَةٍ إِلَّا يَعْلَمُهَا وَلَا حَبَّةٍ فِي ظُلُمَاتِ الْأَرْضِ وَلَا رَطْبٍ وَلَا يَابِسٍ إِلَّا فِي كِتَابٍ مُبِينٍ",
    "urdu_translation": "اور اسی کے پاس غیب کی کنجیاں ہیں جن کو اس کے سوا کوئی نہیں جانتا۔ اور اسے جنگلوں اور دریاؤں کی سب چیزوں کا علم ہے۔ اور کوئی پتہ نہیں جھڑتا مگر وہ اس کو جانتا ہے اور زمین کے اندھیروں میں کوئی دانہ اور کوئی ہری اور سوکھی چیز نہیں ہے مگر کتاب روشن میں (لکھی ہوئی) ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 59) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 59) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 83,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 95,
    "arabic": "۞ إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ ۖ يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَمُخْرِجُ الْمَيِّتِ مِنَ الْحَيِّ ۚ ذَٰلِكُمُ اللَّهُ ۖ فَأَنَّىٰ تُؤْفَكُونَ",
    "urdu_translation": "بے شک خدا ہی دانے اور گٹھلی کو پھاڑ کر (ان سے درخت وغیرہ) اگاتا ہے وہی جاندار کو بے جان سے نکالتا ہے اور وہی بےجان کا جاندار سے نکالنے والا ہے۔ یہی تو خدا ہے۔ پھر تم کہاں بہکے پھرتے ہو",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 95) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 95) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 84,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 102,
    "arabic": "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ ۖ لَا إِلَٰهَ إِلَّا هُوَ ۖ خَالِقُ كُلِّ شَيْءٍ فَاعْبُدُوهُ ۚ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ وَكِيلٌ",
    "urdu_translation": "یہی (اوصاف رکھنے والا) خدا تمہارا پروردگار ہے۔ اس کے سوا کوئی معبود نہیں۔ (وہی) ہر چیز کا پیداکرنے والا (ہے) تو اسی کی عبادت کرو۔ اور وہ ہر چیز کا نگراں ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 102) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 102) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 85,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 103,
    "arabic": "لَا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
    "urdu_translation": "(وہ ایسا ہے کہ) نگاہیں اس کا ادراک نہیں کرسکتیں اور وہ نگاہوں کا ادراک کرسکتا ہے اور وہ بھید جاننے والا خبردار ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 103) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 103) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 86,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 125,
    "arabic": "فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ ۖ وَمَنْ يُرِدْ أَنْ يُضِلَّهُ يَجْعَلْ صَدْرَهُ ضَيِّقًا حَرَجًا كَأَنَّمَا يَصَّعَّدُ فِي السَّمَاءِ ۚ كَذَٰلِكَ يَجْعَلُ اللَّهُ الرِّجْسَ عَلَى الَّذِينَ لَا يُؤْمِنُونَ",
    "urdu_translation": "تو جس شخص کو خدا چاہتا ہے کہ ہدایت بخشے اس کا سینہ اسلام کے لیے کھول دیتا ہے اور جسے چاہتا ہے کہ گمراہ کرے اس کا سینہ تنگ اور گھٹا ہوا کر دیتا ہے گویا وہ آسمان پر چڑھ رہا ہے اس طرح خدا ان لوگوں پر جو ایمان نہیں لاتے عذاب بھیجتا ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 125) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 125) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 87,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 151,
    "arabic": "۞ قُلْ تَعَالَوْا أَتْلُ مَا حَرَّمَ رَبُّكُمْ عَلَيْكُمْ ۖ أَلَّا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا ۖ وَلَا تَقْتُلُوا أَوْلَادَكُمْ مِنْ إِمْلَاقٍ ۖ نَحْنُ نَرْزُقُكُمْ وَإِيَّاهُمْ ۖ وَلَا تَقْرَبُوا الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ ۖ وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللَّهُ إِلَّا بِالْحَقِّ ۚ ذَٰلِكُمْ وَصَّاكُمْ بِهِ لَعَلَّكُمْ تَعْقِلُونَ",
    "urdu_translation": "کہہ کہ (لوگو) آؤ میں تمہیں وہ چیزیں پڑھ کر سناؤں جو تمہارے پروردگار نے تم پر حرام کر دی ہیں (ان کی نسبت اس نے اس طرح ارشاد فرمایا ہے) کہ کسی چیز کو خدا کا شریک نہ بنانا اور ماں باپ (سے بدسلوکی نہ کرنا بلکہ) سلوک کرتے رہنا اور ناداری (کے اندیشے) سے اپنی اولاد کو قتل نہ کرنا کیونکہ تم کو اور ان کو ہم ہی رزق دیتے ہیں اور بےحیائی کے کام ظاہر ہوں یا پوشیدہ ان کے پاس نہ پھٹکنا اور کسی جان (والے) کو جس کے قتل کو خدا نے حرام کر دیا ہے قتل نہ کرنا مگر جائز طور پر (یعنی جس کا شریعت حکم دے) ان باتوں کا وہ تمہیں ارشاد فرماتا ہے تاکہ تم سمجھو",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 151) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 151) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 88,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 152,
    "arabic": "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُ ۖ وَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ بِالْقِسْطِ ۖ لَا نُكَلِّفُ نَفْسًا إِلَّا وُسْعَهَا ۖ وَإِذَا قُلْتُمْ فَاعْدِلُوا وَلَوْ كَانَ ذَا قُرْبَىٰ ۖ وَبِعَهْدِ اللَّهِ أَوْفُوا ۚ ذَٰلِكُمْ وَصَّاكُمْ بِهِ لَعَلَّكُمْ تَذَكَّرُونَ",
    "urdu_translation": "اور یتیم کے مال کے پاس بھی نہ جانا مگر ایسے طریق سے کہ بہت ہی پسندیدہ ہو یہاں تک کہ وہ جوانی کو پہنچ جائے اور ناپ تول انصاف کے ساتھ پوری پوری کیا کرو ہم کسی کو تکلیف نہیں دیتے مگر اس کی طاقت کے مطابق اور جب (کسی کی نسبت) کوئی بات کہو تو انصاف سے کہو گو وہ (تمہارا) رشتہ دار ہی ہو اور خدا کے عہد کو پورا کرو ان باتوں کا خدا تمہیں حکم دیتا ہے تاکہ تم نصحیت کرو",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 152) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 152) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 89,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 160,
    "arabic": "مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا ۖ وَمَنْ جَاءَ بِالسَّيِّئَةِ فَلَا يُجْزَىٰ إِلَّا مِثْلَهَا وَهُمْ لَا يُظْلَمُونَ",
    "urdu_translation": "اور جو کوئی (خدا کے حضور) نیکی لے کر آئے گا اس کو ویسی دس نیکیاں ملیں گی اور جو برائی لائے گا اسے سزا ویسے ہی ملے گی اور ان پر ظلم نہیں کیا جائے گا",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 160) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 160) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "day": 90,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 162,
    "arabic": "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "(یہ بھی) کہہ دو کہ میری نماز اور میری عبادت اور میرا جینا اور میرا مرنا سب خدائے رب العالمین ہی کے لیے ہے",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 162) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 162) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
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
    "id": "dhikr-60",
    "day": 60,
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
    "id": "dhikr-61",
    "day": 61,
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
    "id": "dhikr-62",
    "day": 62,
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
    "id": "dhikr-63",
    "day": 63,
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
    "id": "dhikr-64",
    "day": 64,
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
    "id": "dhikr-65",
    "day": 65,
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
    "id": "dhikr-66",
    "day": 66,
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
    "id": "dhikr-67",
    "day": 67,
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
    "id": "dhikr-68",
    "day": 68,
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
    "id": "dhikr-69",
    "day": 69,
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
    "id": "dhikr-70",
    "day": 70,
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
    "id": "dhikr-71",
    "day": 71,
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
    "id": "dhikr-72",
    "day": 72,
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
    "id": "dhikr-73",
    "day": 73,
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
    "id": "dhikr-74",
    "day": 74,
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
    "id": "dhikr-75",
    "day": 75,
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
    "id": "dhikr-76",
    "day": 76,
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
    "id": "dhikr-77",
    "day": 77,
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
    "id": "dhikr-78",
    "day": 78,
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
    "id": "dhikr-79",
    "day": 79,
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
    "id": "dhikr-80",
    "day": 80,
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
    "id": "dhikr-81",
    "day": 81,
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
    "id": "dhikr-82",
    "day": 82,
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
    "id": "dhikr-83",
    "day": 83,
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
    "id": "dhikr-84",
    "day": 84,
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
    "id": "dhikr-85",
    "day": 85,
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
    "id": "dhikr-86",
    "day": 86,
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
    "id": "dhikr-87",
    "day": 87,
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
    "id": "dhikr-88",
    "day": 88,
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
    "id": "dhikr-89",
    "day": 89,
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
    "id": "dhikr-90",
    "day": 90,
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
  }
];
