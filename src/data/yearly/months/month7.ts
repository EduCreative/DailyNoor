import { Verse, Hadith, DhikrItem } from '../../../types';
import { TafseerDetail } from '../../tafseerData';

export const month = 7;
export const monthName = "July";
export const startDay = 182;
export const endDay = 212;

export const verses: Verse[] = [
  {
    "day": 182,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    "explanation": "Remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    "family_tip": "آج رات سونے سے پہلے فیملی کا ہر فرد اللہ کی کم از کم 3 نعمتوں کا شکر ادا کرے۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002152.mp3"
  },
  {
    "day": 183,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 186,
    "arabic": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    "urdu_translation": "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو میں تو بہت قریب ہوں، پکارنے والے کی دعا قبول کرتا ہوں۔",
    "explanation": "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant.",
    "family_tip": "بچوں کو سکھائیں کہ دعا مانگنے کے لیے دل کا خلوص ضروری ہے، اللہ ہر وقت سنتا ہے۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002186.mp3"
  },
  {
    "day": 184,
    "surah": "Al-Imran",
    "surah_ar": "سورة آل عمران",
    "ayah": 159,
    "arabic": "فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ",
    "urdu_translation": "اللہ کی رحمت سے آپ ان کے لیے نرم دل بن گئے، اگر آپ تندخو اور سخت دل ہوتے تو وہ آپ کے پاس سے منتشر ہو جاتے۔",
    "explanation": "So by mercy from Allah, you were lenient with them. And if you had been rude and harsh in heart, they would have disbanded.",
    "family_tip": "آج گھر میں ہر فرد ایک دوسرے سے خاص طور پر نرمی اور محبت سے بات کرنے کی کوشش کرے۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/003159.mp3"
  },
  {
    "day": 185,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "ayah": 36,
    "arabic": "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ",
    "urdu_translation": "اور اللہ کی عبادت کرو اور اس کے ساتھ کسی کو شریک نہ ٹھہراؤ، اور والدین، قرابت داروں، یتیموں اور مسکینوں کے ساتھ حسنِ سلوک کرو۔",
    "explanation": "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy.",
    "family_tip": "آج کسی دور کے رشتہ دار یا ضرورت مند کا حال معلوم کریں اور ان کی مدد کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/004036.mp3"
  },
  {
    "day": 186,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "ayah": 2,
    "arabic": "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    "urdu_translation": "اور نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کرو، اور گناہ اور زیادتی کے کاموں میں تعاون نہ کرو۔",
    "explanation": "And cooperate in righteousness and piety, but do not cooperate in sin and aggression.",
    "family_tip": "آج گھر میں کسی مشترکہ نیک کام کی منصوبہ بندی کریں جیسے راشن تقسیم یا کتابیں ہدیہ کرنا۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/005002.mp3"
  },
  {
    "day": 187,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "ayah": 162,
    "arabic": "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "آپ فرما دیجئے کہ بے شک میری نماز، میری قربانی، میری زندگی اور میری موت سب اللہ ہی کے لیے ہے جو سارے جہانوں کا پالنے والا ہے۔",
    "explanation": "Say, 'Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.'",
    "family_tip": "ہر کام شروع کرنے سے پہلے نیت کو خالص اللہ کی رضا کے لیے کرنے کی مشق کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/006162.mp3"
  },
  {
    "day": 188,
    "surah": "Al-A'raf",
    "surah_ar": "سورة الأعراف",
    "ayah": 199,
    "arabic": "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
    "urdu_translation": "درگزر کی عادت اپنائیے، اچھے کام کا حکم دیجئے اور جاہلوں سے کنارہ کشی اختیار کیجئے۔",
    "explanation": "Take what is given freely, enjoin what is good, and turn away from the ignorant.",
    "family_tip": "اگر کسی سے کوئی غلطی ہو جائے تو آج اسے فورا معاف کر کے درگزر کا مظاہرہ کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/007199.mp3"
  },
  {
    "day": 189,
    "surah": "Al-Anfal",
    "surah_ar": "سورة الأنفال",
    "ayah": 2,
    "arabic": "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا",
    "urdu_translation": "سچے مومن تو وہی ہیں کہ جب اللہ کا ذکر کیا جائے تو ان کے دل ڈر جاتے ہیں اور جب اس کی آیات ان پر پڑھی جائیں تو ان کا ایمان بڑھ جاتا ہے۔",
    "explanation": "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited, it increases their faith.",
    "family_tip": "روزانہ قرآن مجید کی چند آیات ترجمے اور غور و تدبر کے ساتھ سننے کی محفل سجائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/008002.mp3"
  },
  {
    "day": 190,
    "surah": "At-Tawbah",
    "surah_ar": "سورة التوبة",
    "ayah": 128,
    "arabic": "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
    "urdu_translation": "بے شک تمہارے پاس تمہارے ہی میں سے ایک رسول تشریف لائے ہیں، جن پر تمہارا تکلیف میں پڑنا بہت گراں گزرتا ہے، وہ تمہاری بھلائی کے سخت خواہش مند ہیں اور مومنوں پر نہایت شفیق اور مہربان ہیں۔",
    "explanation": "There has certainly come to you a Messenger from among yourselves. Grievous to him is what you suffer; he is concerned over you and full of pity and mercy.",
    "family_tip": "رسول اللہ ﷺ کی سیرتِ طیبہ اور امت کے لیے شفقت کے واقعات فیملی کے ساتھ دہرائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/009128.mp3"
  },
  {
    "day": 191,
    "surah": "Yunus",
    "surah_ar": "سورة يونس",
    "ayah": 57,
    "arabic": "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَاءٌ لِّمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
    "urdu_translation": "اے لوگو! تمہارے پاس تمہارے رب کی طرف سے نصیحت اور دلوں کے امراض کے لیے شفا اور مومنوں کے لیے ہدایت اور رحمت آ چکی ہے۔",
    "explanation": "O mankind, there has to come to you instruction from your Lord and healing for what is in the breasts and guidance and mercy for the believers.",
    "family_tip": "جب بھی دل میں بے چینی یا وسوسہ آئے تو قرآن کی تلاوت سے دلی سکون حاصل کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/010057.mp3"
  },
  {
    "day": 192,
    "surah": "Hud",
    "surah_ar": "سورة هود",
    "ayah": 114,
    "arabic": "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ",
    "urdu_translation": "بے شک نیکیاں برائیوں کو مٹا دیتی ہیں، یہ یاد رکھنے والوں کے لیے ایک نصیحت ہے۔",
    "explanation": "Indeed, good deeds do away with misdeeds. That is a reminder for those who remember.",
    "family_tip": "اگر دن میں کوئی غلطی ہو جائے تو فورا کوئی نیکی، صدقہ یا تسبیح پڑھ کر اس کی تلافی کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/011114.mp3"
  },
  {
    "day": 193,
    "surah": "Yusuf",
    "surah_ar": "سورة يوسف",
    "ayah": 86,
    "arabic": "قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ",
    "urdu_translation": "یعقوب علیہ السلام نے کہا: میں تو اپنی پریشانی اور غم کی فریاد صرف اللہ ہی کے حضور کرتا ہوں اور میں اللہ کی طرف سے وہ باتیں جانتا ہوں جو تم نہیں جانتے۔",
    "explanation": "He said, 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know.'",
    "family_tip": "آزمائش کے وقت شکوہ شکایت کرنے کی بجائے اپنا دکھ صرف اللہ کے سامنے بیان کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/012086.mp3"
  },
  {
    "day": 194,
    "surah": "Ar-Ra'd",
    "surah_ar": "سورة الرعد",
    "ayah": 28,
    "arabic": "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    "urdu_translation": "وہ لوگ جو ایمان لائے اور جن کے دل اللہ کے ذکر سے اطمینان پاتے ہیں، خبردار! اللہ کے ذکر ہی سے دلوں کو سکون ملتا ہے۔",
    "explanation": "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured.",
    "family_tip": "گھر میں ہلکی آواز سے تسبیح یا قرآنی آیات کا ورد کر کے ماحول کو پرسکون بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/013028.mp3"
  },
  {
    "day": 195,
    "surah": "Ibrahim",
    "surah_ar": "سورة إبراهيم",
    "ayah": 7,
    "arabic": "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
    "urdu_translation": "اور جب تمہارے رب نے آگاہ فرمایا کہ اگر تم شکر ادا کرو گے تو میں تمہیں ضرور زیادہ دوں گا اور اگر تم ناشکری کرو گے تو بے شک میرا عذاب بڑا سخت ہے۔",
    "explanation": "And when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'",
    "family_tip": "کھانے، صحت اور چھت جیسی بنیادی نعمتوں کو یاد کر کے شکر ادا کرنے کا معمول بنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/014007.mp3"
  },
  {
    "day": 196,
    "surah": "Al-Hijr",
    "surah_ar": "سورة الحجر",
    "ayah": 9,
    "arabic": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    "urdu_translation": "بے شک ہم ہی نے اس قرآن کو نازل کیا ہے اور ہم ہی اس کی حفاظت کرنے والے ہیں۔",
    "explanation": "Indeed, it is We who sent down the Quran and indeed, We will be its guardian.",
    "family_tip": "بچوں کو قرآن مجید کے حفظ اور حفاظت کی تاریخی معجزاتی داستان سنائیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/015009.mp3"
  },
  {
    "day": 197,
    "surah": "An-Nahl",
    "surah_ar": "سورة النحل",
    "ayah": 125,
    "arabic": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ",
    "urdu_translation": "اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ بلائیے، اور ان سے ایسے طریقے سے بحث کیجئے جو بہترین ہو۔",
    "explanation": "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
    "family_tip": "جب کسی کو کوئی بات سمجھانی ہو تو حکمت اور پیار کا راستہ اختیار کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/016125.mp3"
  },
  {
    "day": 198,
    "surah": "Al-Isra",
    "surah_ar": "سورة الإسراء",
    "ayah": 23,
    "arabic": "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ",
    "urdu_translation": "اور آپ کے رب نے فیصلہ فرما دیا کہ تم اس کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ حسنِ سلوک کرو، اگر ان میں سے ایک یا دونوں بڑھاپے کو پہنچ جائیں تو انہیں 'اُف' تک نہ کہو۔",
    "explanation": "And your Lord has decreed that you not worship except Him, and to parents, good treatment. If one or both reach old age with you, say not to them 'uff'.",
    "family_tip": "آج والدین کے ہاتھ چومیں، ان کے لیے خصوصی دعا کریں اور ان کا کوئی کام خوش دلی سے کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/017023.mp3"
  },
  {
    "day": 199,
    "surah": "Al-Kahf",
    "surah_ar": "سورة الكهف",
    "ayah": 46,
    "arabic": "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا",
    "urdu_translation": "مال اور بیٹے تو دنیاوی زندگی کی رونق ہیں، اور باقی رہنے والے نیک اعمال آپ کے رب کے نزدیک ثواب کے لحاظ سے اور امید کے لحاظ سے کہیں بہتر ہیں۔",
    "explanation": "Wealth and children are but adornment of the worldly life. But the enduring good deeds are better to your Lord for reward and better for hope.",
    "family_tip": "جمعہ کے دن سورۃ الکہف کی تلاوت کا اہتمام کریں اور دائمی نیکیوں میں حصہ لیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/018046.mp3"
  },
  {
    "day": 200,
    "surah": "Maryam",
    "surah_ar": "سورة مريم",
    "ayah": 96,
    "arabic": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا",
    "urdu_translation": "بے شک جو لوگ ایمان لائے اور انہوں نے نیک اعمال کیے، رحمن عنقریب ان کے لیے (لوگوں کے دلوں میں) محبت پیدا فرما دے گا۔",
    "explanation": "Indeed, those who have believed and done righteous deeds - the Most Merciful will appoint for them affection.",
    "family_tip": "نیک اعمال کے ذریعے اللہ کی محبت تلاش کریں، لوگوں کے دل اللہ خود آپ کی طرف موڑ دے گا۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/019096.mp3"
  },
  {
    "day": 201,
    "surah": "Ta-Ha",
    "surah_ar": "سورة طه",
    "ayah": 114,
    "arabic": "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِن قَبْلِ أَن يُقْضَىٰ إِلَيْكَ وَحْيُهُ ۖ وَقُل رَّبِّ زِدْنِي عِلْمًا",
    "urdu_translation": "پس اللہ ہی سب سے بلند و برتر ہے جو حقیقی بادشاہ ہے، اور قرآن پڑھنے میں جلدی نہ کیجئے قبل اس کے کہ اس کی وحی پوری ہو جائے، اور دعا کیجئے: اے میرے رب! میرے علم میں اضافہ فرما۔",
    "explanation": "So high is Allah, the Sovereign, the Truth. And do not hasten with the recitation of the Quran before its revelation is completed to you, and say, 'My Lord, increase me in knowledge.'",
    "family_tip": "روزانہ مطالعے کے وقت 'رَبِّ زِدْنِي عِلْمًا' پڑھنے کی عادت بنائیں اور نئی مفید چیز سیکھیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/020114.mp3"
  },
  {
    "day": 202,
    "surah": "Al-Anbiya",
    "surah_ar": "سورة الأنبياء",
    "ayah": 87,
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "urdu_translation": "(یونسؑ نے پکارا کہ) تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "explanation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "family_tip": "جب بھی کوئی پریشانی لاحق ہو تو فیملی کے ساتھ آیتِ کریمہ کا ورد کریں اور توبہ کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/021087.mp3"
  },
  {
    "day": 203,
    "surah": "Al-Hajj",
    "surah_ar": "سورة الحج",
    "ayah": 77,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! رکوع کرو، سجدہ کرو، اپنے رب کی بندگی کرو اور نیک کام کرو تاکہ تم کامیاب ہو جاؤ۔",
    "explanation": "O you who have believed, bow and prostrate and worship your Lord and do good that you may succeed.",
    "family_tip": "نماز کو اس کے وقت پر خشوع اور خضوع کے ساتھ باجماعت ادا کرنے کا اہتمام کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/022077.mp3"
  },
  {
    "day": 204,
    "surah": "Al-Mu'minun",
    "surah_ar": "سورة المؤمنون",
    "ayah": 1,
    "arabic": "قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    "urdu_translation": "یقیناً وہ ایمان والے کامیاب ہو گئے جو اپنی نمازوں میں خشوع و خضوع اختیار کرتے ہیں۔",
    "explanation": "Certainly will the believers have succeeded: they who are during their prayer humbly submissive.",
    "family_tip": "نماز شروع کرنے سے پہلے چند سیکنڈ دل کو دنیا کے خیالات سے خالی کرنے کی مشق کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/023001.mp3"
  },
  {
    "day": 205,
    "surah": "An-Nur",
    "surah_ar": "سورة النور",
    "ayah": 35,
    "arabic": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
    "urdu_translation": "اللہ آسمانوں اور زمین کا نور ہے، اس کے نور کی مثال ایسی ہے جیسے ایک طاق ہو جس میں چراغ رکھا ہو۔",
    "explanation": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp.",
    "family_tip": "آیتِ نور پر غور کر کے دل کو ایمان، سچائی اور ہدایت کے نور سے روشن کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/024035.mp3"
  },
  {
    "day": 206,
    "surah": "Al-Furqan",
    "surah_ar": "سورة الفرقان",
    "ayah": 63,
    "arabic": "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
    "urdu_translation": "اور رحمن کے (خاص) بندے وہ ہیں جو زمین پر عاجزی کے ساتھ چلتے ہیں اور جب جاہل لوگ ان سے الجھتے ہیں تو وہ سلامتی کی بات کہہ کر الگ ہو جاتے ہیں۔",
    "explanation": "And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them harshly, they say words of peace.",
    "family_tip": "کسی کے بدتمیزی کرنے پر بدلہ لینے کی بجائے تحمل اور سلامتی کا جواب دینے کا مظاہرہ کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/025063.mp3"
  },
  {
    "day": 207,
    "surah": "Ash-Shu'ara",
    "surah_ar": "سورة الشعراء",
    "ayah": 88,
    "arabic": "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
    "urdu_translation": "جس دن نہ مال کوئی فائدہ دے گا اور نہ اولاد، سوائے اس شخص کے جو اللہ کے پاس قلبِ سلیم (پاکیزہ دل) لے کر آیا۔",
    "explanation": "The Day when there will not benefit [anyone] wealth or children, but only one who comes to Allah with a sound heart.",
    "family_tip": "حسد، بغض اور کینے سے دل کو پاک کرنے کی دعا مانگیں اور دوسروں کو معاف کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/026088.mp3"
  },
  {
    "day": 208,
    "surah": "An-Naml",
    "surah_ar": "سورة النمل",
    "ayah": 19,
    "arabic": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
    "urdu_translation": "اے میرے رب! مجھے توفیق دے کہ میں تیری اس نعمت کا شکر ادا کروں جو تو نے مجھ پر اور میرے والدین پر کی، اور ایسے نیک اعمال کروں جن سے تو راضی ہو جائے۔",
    "explanation": "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve.",
    "family_tip": "کسی بھی نعمت یا کامیابی کے ملنے پر سب سے پہلے شکر کا سجدہ اور دعا کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/027019.mp3"
  },
  {
    "day": 209,
    "surah": "Al-Qasas",
    "surah_ar": "سورة القصص",
    "ayah": 24,
    "arabic": "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    "urdu_translation": "اے میرے پروردگار! تو میری طرف جو بھی خیر اور بھلائی نازل فرما دے میں اس کا محتاج ہوں۔",
    "explanation": "My Lord, indeed I am in need of whatever good You would send down to me.",
    "family_tip": "اپنی ہر چھوٹی بڑی حاجت اور رزق کے لیے اللہ کے حضور اس مبارک دعا کو پڑھیں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/028024.mp3"
  },
  {
    "day": 210,
    "surah": "Al-Ankabut",
    "surah_ar": "سورة العنكبوت",
    "ayah": 69,
    "arabic": "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
    "urdu_translation": "اور جن لوگوں نے ہمارے راستے میں جدوجہد کی، ہم ضرور انہیں اپنے راستوں کی ہدایت دیں گے، اور بے شک اللہ احسان کرنے والوں کے ساتھ ہے۔",
    "explanation": "And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.",
    "family_tip": "نفس کی بری خواہشات کے خلاف کوشش کریں، اللہ نیکی کے راستے آسان فرما دے گا۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/029069.mp3"
  },
  {
    "day": 211,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "ayah": 5,
    "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "urdu_translation": "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
    "explanation": "You alone we worship, and You alone we ask for help. Complete reliance and monotheism.",
    "family_tip": "آج کھانے کی میز پر بات کریں کہ جب بھی کوئی مشکل آئے تو سب سے پہلے اللہ سے رجوع کیسے کریں۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/001005.mp3"
  },
  {
    "day": 212,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    "explanation": "Remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    "family_tip": "آج رات سونے سے پہلے فیملی کا ہر فرد اللہ کی کم از کم 3 نعمتوں کا شکر ادا کرے۔",
    "audio_url": "https://everyayah.com/data/Alafasy_128kbps/002152.mp3"
  }
];

export const hadiths: Hadith[] = [
  {
    "day": 182,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027 (Sahih al-Bukhari 5027)",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 183,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10 (Sahih al-Bukhari 10)",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا ایمان کی نشانی ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 184,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13 (Sahih al-Bukhari 13)",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد سے بچنا سچے مومن کا معیار ہے۔",
    "family_tip": "اپنے بہن بھائیوں یا دوستوں کے لیے بھی وہی چیز پسند کریں جو آپ اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 185,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956 (Jami at-Tirmidhi 1956)",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی خرچ کے نیکیوں کا عظیم ذریعہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور ملنے والے سے مسکرا کر اور گرم جوشی سے ملیں۔"
  },
  {
    "day": 186,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے پیچھے نیکی کرو جو اسے مٹا دے، اور لوگوں کے ساتھ اچھے اخلاق سے پیش آؤ۔",
    "source": "جامع الترمذی: 1987 (Jami at-Tirmidhi 1987)",
    "category": "تقویٰ و حسنِ اخلاق",
    "lesson": "خلوت اور جلوت دونوں میں تقویٰ اختیار کرنا اور غلطی کے بعد فوری نیکی کرنا کامیابی ہے۔",
    "family_tip": "تنہائی میں بھی یہ دھیان رکھیں کہ اللہ مجھے دیکھ رہا ہے۔"
  },
  {
    "day": 187,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376 (Sahih al-Bukhari 7376)",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت حاصل کرنے کے لیے بندوں، جانوروں اور تمام مخلوق پر رحم کرنا شرط ہے۔",
    "family_tip": "گھر کے پرندوں، بلیوں یا کسی ضرورت مند کے ساتھ رحم و کرم کا عملی مظاہرہ کریں۔"
  },
  {
    "day": 188,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094 (Sahih al-Bukhari 6094)",
    "category": "سچائی و دیانت",
    "lesson": "سچائی دل کو اطمینان بخشتی ہے اور انسان کے کردار کو بلند کرتی ہے۔",
    "family_tip": "ہر حال میں سچ بولنے کا عہد کریں، خواہ اس میں وقتی نقصان ہی کیوں نہ نظر آتا ہو۔"
  },
  {
    "day": 189,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
    "urdu_translation": "پاکیزگی نصف ایمان ہے، اور 'الحمد للہ' نیکیوں کے ترازو کو بھر دیتا ہے۔",
    "source": "صحیح مسلم: 223 (Sahih Muslim 223)",
    "category": "طہارت و ذکر",
    "lesson": "جسم، کپڑوں اور دل کی طہارت کے ساتھ شکر گزاری میزان میں سب سے وزنی عمل ہے۔",
    "family_tip": "اپنے کمرے اور اردگرد کے ماحول کو صاف ستھرا رکھنے میں حصہ لیں۔"
  },
  {
    "day": 190,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "جامع الترمذی: 3372 (Jami at-Tirmidhi 3372)",
    "category": "دعا و مناجات",
    "lesson": "دعا مانگنا بندگی کا اعلیٰ ترین اظہار ہے کیونکہ اس میں بندہ اپنی عاجزی اور رب کی عظمت مانتا ہے۔",
    "family_tip": "ہر نماز کے بعد کم از کم 2 منٹ مانگنے کے لیے وقف کریں۔"
  },
  {
    "day": 191,
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "urdu_translation": "جو شخص علم کی تلاش میں کسی راستے پر چلتا ہے، اللہ اس کے بدلے اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
    "source": "صحیح مسلم: 2699 (Sahih Muslim 2699)",
    "category": "طلبِ علم",
    "lesson": "دینی و نافع علم حاصل کرنے کی ہر کوشش انسان کو جنت کے قریب کرتی ہے۔",
    "family_tip": "روزانہ کسی مستند اسلامی کتاب کا ایک صفحہ پڑھنے کا معمول بنائیں۔"
  },
  {
    "day": 192,
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu_translation": "دو کلمے زبان پر ہلکے، ترازو میں بھاری اور رحمان کو نہایت محبوب ہیں: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ۔",
    "source": "صحیح البخاری: 6682 (Sahih al-Bukhari 6682)",
    "category": "ذکر و تسبیح",
    "lesson": "زبان کو آسان اور وزنی کلمات سے تر رکھنا اللہ کی محبت حاصل کرنے کا ذریعہ ہے۔",
    "family_tip": "چلتے پھرتے 'سبحان اللہ وبحمدہ سبحان اللہ العظیم' پڑھتے رہیں۔"
  },
  {
    "day": 193,
    "arabic": "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    "urdu_translation": "طاقتور وہ نہیں جو پہلوانی میں پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    "source": "صحیح البخاری: 6114 (Sahih al-Bukhari 6114)",
    "category": "صبر و ضبطِ نفس",
    "lesson": "غصے پر قابو پانا سب سے بڑی بہادری ہے، غصہ آئے تو اعوذ باللہ پڑھیں اور وضو کریں۔",
    "family_tip": "جب غصہ آئے تو بیٹھ جائیں اور خاموشی اختیار کریں۔"
  },
  {
    "day": 194,
    "arabic": "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا",
    "urdu_translation": "صدقہ دینے سے مال میں کوئی کمی نہیں ہوتی، اور معاف کرنے سے اللہ انسان کی عزت میں اضافہ ہی فرماتا ہے۔",
    "source": "صحیح مسلم: 2588 (Sahih Muslim 2588)",
    "category": "صدقہ و درگزر",
    "lesson": "اللہ کے راستے میں خرچ کرنا برکت لاتا ہے اور درگزر کرنا انسان کو معزز بناتا ہے۔",
    "family_tip": "اپنی جیب خرچ سے روزانہ یا ہفتہ وار کچھ نہ کچھ صدقہ نکالنے کی عادت ڈالیں۔"
  },
  {
    "day": 195,
    "arabic": "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    "urdu_translation": "رحم کرنے والوں پر رحمان رحم فرماتا ہے، تم زمین والوں پر رحم کرو آسمان والا تم پر رحم کرے گا۔",
    "source": "جامع الترمذی: 1924 (Jami at-Tirmidhi 1924)",
    "category": "شفقت و احسان",
    "lesson": "مخلوقِ خدا پر شفقت و مہربانی اللہ کے فضل و کرم کو اپنی طرف متوجہ کرتی ہے۔",
    "family_tip": "چھوٹوں پر شفقت اور بڑوں کا ادب گھر کے ماحول کو جنت بنا دیتا ہے۔"
  },
  {
    "day": 196,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے، اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1 (Sahih al-Bukhari 1)",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل برباد ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 197,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027 (Sahih al-Bukhari 5027)",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "day": 198,
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu_translation": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10 (Sahih al-Bukhari 10)",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا ایمان کی نشانی ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "day": 199,
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu_translation": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13 (Sahih al-Bukhari 13)",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد سے بچنا سچے مومن کا معیار ہے۔",
    "family_tip": "اپنے بہن بھائیوں یا دوستوں کے لیے بھی وہی چیز پسند کریں جو آپ اپنے لیے چاہتے ہیں۔"
  },
  {
    "day": 200,
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu_translation": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956 (Jami at-Tirmidhi 1956)",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی خرچ کے نیکیوں کا عظیم ذریعہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور ملنے والے سے مسکرا کر اور گرم جوشی سے ملیں۔"
  },
  {
    "day": 201,
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu_translation": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے پیچھے نیکی کرو جو اسے مٹا دے، اور لوگوں کے ساتھ اچھے اخلاق سے پیش آؤ۔",
    "source": "جامع الترمذی: 1987 (Jami at-Tirmidhi 1987)",
    "category": "تقویٰ و حسنِ اخلاق",
    "lesson": "خلوت اور جلوت دونوں میں تقویٰ اختیار کرنا اور غلطی کے بعد فوری نیکی کرنا کامیابی ہے۔",
    "family_tip": "تنہائی میں بھی یہ دھیان رکھیں کہ اللہ مجھے دیکھ رہا ہے۔"
  },
  {
    "day": 202,
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu_translation": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376 (Sahih al-Bukhari 7376)",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت حاصل کرنے کے لیے بندوں، جانوروں اور تمام مخلوق پر رحم کرنا شرط ہے۔",
    "family_tip": "گھر کے پرندوں، بلیوں یا کسی ضرورت مند کے ساتھ رحم و کرم کا عملی مظاہرہ کریں۔"
  },
  {
    "day": 203,
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu_translation": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094 (Sahih al-Bukhari 6094)",
    "category": "سچائی و دیانت",
    "lesson": "سچائی دل کو اطمینان بخشتی ہے اور انسان کے کردار کو بلند کرتی ہے۔",
    "family_tip": "ہر حال میں سچ بولنے کا عہد کریں، خواہ اس میں وقتی نقصان ہی کیوں نہ نظر آتا ہو۔"
  },
  {
    "day": 204,
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
    "urdu_translation": "پاکیزگی نصف ایمان ہے، اور 'الحمد للہ' نیکیوں کے ترازو کو بھر دیتا ہے۔",
    "source": "صحیح مسلم: 223 (Sahih Muslim 223)",
    "category": "طہارت و ذکر",
    "lesson": "جسم، کپڑوں اور دل کی طہارت کے ساتھ شکر گزاری میزان میں سب سے وزنی عمل ہے۔",
    "family_tip": "اپنے کمرے اور اردگرد کے ماحول کو صاف ستھرا رکھنے میں حصہ لیں۔"
  },
  {
    "day": 205,
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu_translation": "دعا ہی اصل عبادت ہے۔",
    "source": "جامع الترمذی: 3372 (Jami at-Tirmidhi 3372)",
    "category": "دعا و مناجات",
    "lesson": "دعا مانگنا بندگی کا اعلیٰ ترین اظہار ہے کیونکہ اس میں بندہ اپنی عاجزی اور رب کی عظمت مانتا ہے۔",
    "family_tip": "ہر نماز کے بعد کم از کم 2 منٹ مانگنے کے لیے وقف کریں۔"
  },
  {
    "day": 206,
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "urdu_translation": "جو شخص علم کی تلاش میں کسی راستے پر چلتا ہے، اللہ اس کے بدلے اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
    "source": "صحیح مسلم: 2699 (Sahih Muslim 2699)",
    "category": "طلبِ علم",
    "lesson": "دینی و نافع علم حاصل کرنے کی ہر کوشش انسان کو جنت کے قریب کرتی ہے۔",
    "family_tip": "روزانہ کسی مستند اسلامی کتاب کا ایک صفحہ پڑھنے کا معمول بنائیں۔"
  },
  {
    "day": 207,
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu_translation": "دو کلمے زبان پر ہلکے، ترازو میں بھاری اور رحمان کو نہایت محبوب ہیں: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ۔",
    "source": "صحیح البخاری: 6682 (Sahih al-Bukhari 6682)",
    "category": "ذکر و تسبیح",
    "lesson": "زبان کو آسان اور وزنی کلمات سے تر رکھنا اللہ کی محبت حاصل کرنے کا ذریعہ ہے۔",
    "family_tip": "چلتے پھرتے 'سبحان اللہ وبحمدہ سبحان اللہ العظیم' پڑھتے رہیں۔"
  },
  {
    "day": 208,
    "arabic": "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    "urdu_translation": "طاقتور وہ نہیں جو پہلوانی میں پچھاڑ دے، بلکہ طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    "source": "صحیح البخاری: 6114 (Sahih al-Bukhari 6114)",
    "category": "صبر و ضبطِ نفس",
    "lesson": "غصے پر قابو پانا سب سے بڑی بہادری ہے، غصہ آئے تو اعوذ باللہ پڑھیں اور وضو کریں۔",
    "family_tip": "جب غصہ آئے تو بیٹھ جائیں اور خاموشی اختیار کریں۔"
  },
  {
    "day": 209,
    "arabic": "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا",
    "urdu_translation": "صدقہ دینے سے مال میں کوئی کمی نہیں ہوتی، اور معاف کرنے سے اللہ انسان کی عزت میں اضافہ ہی فرماتا ہے۔",
    "source": "صحیح مسلم: 2588 (Sahih Muslim 2588)",
    "category": "صدقہ و درگزر",
    "lesson": "اللہ کے راستے میں خرچ کرنا برکت لاتا ہے اور درگزر کرنا انسان کو معزز بناتا ہے۔",
    "family_tip": "اپنی جیب خرچ سے روزانہ یا ہفتہ وار کچھ نہ کچھ صدقہ نکالنے کی عادت ڈالیں۔"
  },
  {
    "day": 210,
    "arabic": "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    "urdu_translation": "رحم کرنے والوں پر رحمان رحم فرماتا ہے، تم زمین والوں پر رحم کرو آسمان والا تم پر رحم کرے گا۔",
    "source": "جامع الترمذی: 1924 (Jami at-Tirmidhi 1924)",
    "category": "شفقت و احسان",
    "lesson": "مخلوقِ خدا پر شفقت و مہربانی اللہ کے فضل و کرم کو اپنی طرف متوجہ کرتی ہے۔",
    "family_tip": "چھوٹوں پر شفقت اور بڑوں کا ادب گھر کے ماحول کو جنت بنا دیتا ہے۔"
  },
  {
    "day": 211,
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu_translation": "تمام اعمال کا دارومدار نیتوں پر ہے، اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1 (Sahih al-Bukhari 1)",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل برباد ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "day": 212,
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu_translation": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027 (Sahih al-Bukhari 5027)",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  }
];

export const tafseers: TafseerDetail[] = [
  {
    "day": 182,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 152) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 152) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "تحویلِ قبلہ کے بعد مسلمانوں کو اللہ کے ذکر اور شکر پر قائم رہنے کا حکم دیا گیا۔",
    "asbabAlNuzulEn": "Revealed following the change of Qiblah to anchor the believers in continuous remembrance.",
    "keyLessonsUrdu": [
      "ذکرِ الٰہی سے دلوں کو اطمینان ملتا ہے۔",
      "شکر گزاری سے نعمتوں میں اضافہ ہوتا ہے۔",
      "ناشکری سے بچنا لازم ہے۔"
    ],
    "keyLessonsEn": [
      "Remembrance of Allah brings peace.",
      "Gratitude increases blessings.",
      "Guarding against ingratitude."
    ],
    "reflectionsUrdu": "آج کے دن میں نے اللہ کے ذکر میں کتنا وقت گزارا؟",
    "reflectionsEn": "How much of my day was consciously spent in the remembrance of Allah?"
  },
  {
    "day": 183,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 186,
    "arabic": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    "urdu_translation": "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو میں تو بہت قریب ہوں، پکارنے والے کی دعا قبول کرتا ہوں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 186) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 186) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "صحابہ کرام نے پوچھا کہ ہمارا رب قریب ہے یا دور؟ تو اللہ نے یہ آیت نازل فرمائی۔",
    "asbabAlNuzulEn": "Companions asked if their Lord was near or far, and Allah revealed this comforting reply.",
    "keyLessonsUrdu": [
      "اللہ تعالیٰ ہر بندے کی شہ رگ سے زیادہ قریب ہے۔",
      "دعا کبھی رائیگاں نہیں جاتی۔",
      "خلوص کے ساتھ مانگنا شرط ہے۔"
    ],
    "keyLessonsEn": [
      "Allah is closer to His servant than their jugular vein.",
      "No sincere prayer is wasted.",
      "Sincerity is key."
    ],
    "reflectionsUrdu": "کیا میں دل کی گہرائیوں سے اپنے رب سے دعا مانگتا ہوں؟",
    "reflectionsEn": "Do I converse with Allah from the depths of my heart in private?"
  },
  {
    "day": 184,
    "surah": "Al-Imran",
    "surah_ar": "سورة آل عمران",
    "surahNumber": 3,
    "ayah": 159,
    "arabic": "فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ",
    "urdu_translation": "اللہ کی رحمت سے آپ ان کے لیے نرم دل بن گئے، اگر آپ تندخو اور سخت دل ہوتے تو وہ آپ کے پاس سے منتشر ہو جاتے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة آل عمران، آیت 159) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Imran (Ayah 159) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "غزوہ احد کے نازک حالات کے بعد نبی کریم ﷺ کے اخلاقِ کریمانہ کی تعریف اور مشاورت کا حکم۔",
    "asbabAlNuzulEn": "Revealed after the trial of Uhud, highlighting the Prophet's ﷺ sublime gentleness.",
    "keyLessonsUrdu": [
      "نرمی اور شفقت دلوں کو جوڑتی ہے۔",
      "غصے اور سختی سے بچنا سنتِ نبوی ہے۔",
      "مشاورت میں برکت ہے۔"
    ],
    "keyLessonsEn": [
      "Gentleness unites hearts.",
      "Avoiding harshness is the Prophetic way.",
      "Consultation brings blessing."
    ],
    "reflectionsUrdu": "میرے لہجے میں دوسروں کے لیے کتنی نرمی اور رحم دلی ہے؟",
    "reflectionsEn": "How much gentle compassion reflects in my tone towards my family and colleagues?"
  },
  {
    "day": 185,
    "surah": "An-Nisa",
    "surah_ar": "سورة النساء",
    "surahNumber": 4,
    "ayah": 36,
    "arabic": "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا ۖ وَبِالْوَالِدَيْنِ إِحْسَانًا وَبِذِي الْقُرْبَىٰ وَالْيَتَامَىٰ وَالْمَسَاكِينِ",
    "urdu_translation": "اور اللہ کی عبادت کرو اور اس کے ساتھ کسی کو شریک نہ ٹھہراؤ، اور والدین، قرابت داروں، یتیموں اور مسکینوں کے ساتھ حسنِ سلوک کرو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة النساء، آیت 36) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from An-Nisa (Ayah 36) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "معاشرتی عدل اور تمام طبقات کے حقوق کی تفصیلی وضاحت کے لیے یہ احکام نازل ہوئے۔",
    "asbabAlNuzulEn": "Revealed to establish holistic societal justice and the fundamental rights of all relations.",
    "keyLessonsUrdu": [
      "توحید کے بعد سب سے اہم حق والدین اور رشتہ داروں کا ہے۔",
      "یتیموں اور مسکینوں کی خبر گیری ضروری ہے۔",
      "ہمسایوں کے حقوق کا خیال رکھنا۔"
    ],
    "keyLessonsEn": [
      "After Tawhid, the greatest obligation is to parents and relatives.",
      "Caring for the vulnerable.",
      "Protecting neighborly ties."
    ],
    "reflectionsUrdu": "کیا میں نے حال ہی میں اپنے والدین اور رشتہ داروں کے حقوق کا حق ادا کیا؟",
    "reflectionsEn": "Have I actively shown practical kindness to my parents and kin recently?"
  },
  {
    "day": 186,
    "surah": "Al-Ma'idah",
    "surah_ar": "سورة المائدة",
    "surahNumber": 5,
    "ayah": 2,
    "arabic": "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    "urdu_translation": "اور نیکی اور پرہیزگاری کے کاموں میں ایک دوسرے کی مدد کرو، اور گناہ اور زیادتی کے کاموں میں تعاون نہ کرو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة المائدة، آیت 2) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Ma'idah (Ayah 2) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "معاہدات اور معاشرتی امن کو قائم رکھنے کے لیے قرآنی اصول بیان فرمایا گیا۔",
    "asbabAlNuzulEn": "Revealed to institute the sublime Islamic principle of ethical cooperation.",
    "keyLessonsUrdu": [
      "نیکی کے ہر کام میں دوسروں کا ہاتھ بٹائیں۔",
      "برائی اور ظلم میں کسی کا ساتھ نہ دیں۔",
      "تقویٰ معاشرتی امن کی بنیاد ہے۔"
    ],
    "keyLessonsEn": [
      "Support all righteous initiatives.",
      "Never assist in injustice or transgression.",
      "Piety anchors society."
    ],
    "reflectionsUrdu": "آج میں نے کس نیکی کے کام میں کسی دوسرے کی مدد کی؟",
    "reflectionsEn": "In what righteous action did I support or uplift someone today?"
  },
  {
    "day": 187,
    "surah": "Al-An'am",
    "surah_ar": "سورة الأنعام",
    "surahNumber": 6,
    "ayah": 162,
    "arabic": "قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ",
    "urdu_translation": "آپ فرما دیجئے کہ بے شک میری نماز، میری قربانی، میری زندگی اور میری موت سب اللہ ہی کے لیے ہے جو سارے جہانوں کا پالنے والا ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنعام، آیت 162) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-An'am (Ayah 162) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مشرکین کے شرک کے مقابلے میں نبی کریم ﷺ کو مکمل اخلاص کے اعلان کا حکم ہوا۔",
    "asbabAlNuzulEn": "Revealed to proclaim absolute dedication and surrender to Allah alone.",
    "keyLessonsUrdu": [
      "زندگی کا ہر لمحہ عبادت بن سکتا ہے اگر نیت پاک ہو۔",
      "صرف اللہ کی رضا کے لیے کام کرنا اخلاص ہے۔",
      "تمام کائنات کا رب صرف اللہ ہے۔"
    ],
    "keyLessonsEn": [
      "Every daily act becomes worship with pure intention.",
      "Sincerity is doing all for Allah.",
      "Allah is the Sustainer of all."
    ],
    "reflectionsUrdu": "کیا میرے دن کے معمولات اللہ کی رضا کے محور پر گھومتے ہیں؟",
    "reflectionsEn": "Is the underlying intention of my daily pursuits genuinely aligned with pleasing Allah?"
  },
  {
    "day": 188,
    "surah": "Al-A'raf",
    "surah_ar": "سورة الأعراف",
    "surahNumber": 7,
    "ayah": 199,
    "arabic": "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ",
    "urdu_translation": "درگزر کی عادت اپنائیے، اچھے کام کا حکم دیجئے اور جاہلوں سے کنارہ کشی اختیار کیجئے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأعراف، آیت 199) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-A'raf (Ayah 199) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "جب یہ آیت اتری تو نبی کریم ﷺ نے جبرائیلؑ سے اس کا مفہوم پوچھا، انہوں نے کہا: جو تجھ پر ظلم کرے اسے معاف کر دے اور جو تجھے محروم کرے اسے عطا کر۔",
    "asbabAlNuzulEn": "The Prophet ﷺ asked Jibril about its meaning; he explained: 'Forgive those who wrong you and give to those who deprive you.'",
    "keyLessonsUrdu": [
      "معاف کرنا اور درگزر کرنا اعلیٰ ترین اخلاق ہے۔",
      "نیکی کی تلقین نرمی سے کرنی چاہیے۔",
      "بے ہودہ بحث مباحثے سے پرہیز کریں۔"
    ],
    "keyLessonsEn": [
      "Forgiveness is the pinnacle of nobility.",
      "Advocate goodness with wisdom.",
      "Avoid futile arguments with the ignorant."
    ],
    "reflectionsUrdu": "کیا میں لوگوں کی کوتاہیوں کو فراخدلی سے معاف کرنے کے لیے تیار ہوں؟",
    "reflectionsEn": "Am I ready to overlook human faults with genuine magnanimity today?"
  },
  {
    "day": 189,
    "surah": "Al-Anfal",
    "surah_ar": "سورة الأنفال",
    "surahNumber": 8,
    "ayah": 2,
    "arabic": "إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا",
    "urdu_translation": "سچے مومن تو وہی ہیں کہ جب اللہ کا ذکر کیا جائے تو ان کے دل ڈر جاتے ہیں اور جب اس کی آیات ان پر پڑھی جائیں تو ان کا ایمان بڑھ جاتا ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنفال، آیت 2) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Anfal (Ayah 2) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "غزوہ بدر کے بعد مومنین کے قلبی اوصاف اور حقیقی ایمان کے تقاضے واضح کیے گئے۔",
    "asbabAlNuzulEn": "Revealed following the Battle of Badr to delineate the spiritual traits of true believers.",
    "keyLessonsUrdu": [
      "قرآن سننے سے دل میں خشوع اور ایمان میں اضافہ ہوتا ہے۔",
      "اللہ کا خوف انسان کو گناہوں سے بچاتا ہے۔",
      "اپنے رب پر کامل توکل رکھنا۔"
    ],
    "keyLessonsEn": [
      "Quranic reflection nurtures faith.",
      "Awe of Allah protects against wrongdoing.",
      "Unshakable trust in God."
    ],
    "reflectionsUrdu": "کیا قرآن کریم کے الفاظ میرے دل پر اثر انداز ہوتے ہیں؟",
    "reflectionsEn": "Does the recitation of Allah's word soften and elevate my heart?"
  },
  {
    "day": 190,
    "surah": "At-Tawbah",
    "surah_ar": "سورة التوبة",
    "surahNumber": 9,
    "ayah": 128,
    "arabic": "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
    "urdu_translation": "بے شک تمہارے پاس تمہارے ہی میں سے ایک رسول تشریف لائے ہیں، جن پر تمہارا تکلیف میں پڑنا بہت گراں گزرتا ہے، وہ تمہاری بھلائی کے سخت خواہش مند ہیں اور مومنوں پر نہایت شفیق اور مہربان ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة التوبة، آیت 128) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from At-Tawbah (Ayah 128) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "امت پر نبی کریم ﷺ کی بے پایاں رحمت اور شفقت کو خراجِ تحسین پیش کرنے کے لیے نازل ہوئی۔",
    "asbabAlNuzulEn": "Revealed to comfort and inspire the Ummah by showcasing the Prophet's boundless care for them.",
    "keyLessonsUrdu": [
      "حضور ﷺ امت کے لیے سراپا رحمت ہیں۔",
      "دوسروں کے دکھ درد کو اپنا سمجھنا سنت ہے۔",
      "آپ ﷺ سے سچی محبت ایمان کی تکمیل ہے۔"
    ],
    "keyLessonsEn": [
      "The Prophet ﷺ is an unmatched mercy for all.",
      "Empathizing with others' hardship is a prophetic virtue.",
      "Loving the Prophet ﷺ completes faith."
    ],
    "reflectionsUrdu": "کیا میری زندگی میں رسول اللہ ﷺ کی سنت اور اخلاق کی جھلک نظر آتی ہے؟",
    "reflectionsEn": "Does my daily character reflect the compassionate sunnah of the Beloved Messenger ﷺ?"
  },
  {
    "day": 191,
    "surah": "Yunus",
    "surah_ar": "سورة يونس",
    "surahNumber": 10,
    "ayah": 57,
    "arabic": "يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَاءٌ لِّمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
    "urdu_translation": "اے لوگو! تمہارے پاس تمہارے رب کی طرف سے نصیحت اور دلوں کے امراض کے لیے شفا اور مومنوں کے لیے ہدایت اور رحمت آ چکی ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة يونس، آیت 57) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Yunus (Ayah 57) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "قرآن مجید کے جامع اثرات (نصیحت، روحانی شفا، ہدایت اور رحمت) کا تعارف کرایا گیا۔",
    "asbabAlNuzulEn": "Revealed to introduce the multifaceted cure, guidance, and mercy residing within the Quran.",
    "keyLessonsUrdu": [
      "قرآن مجید دل کے وسوسوں اور روحانی بیماریوں کی شفا ہے۔",
      "یہ سراسر ہدایت اور رحمت ہے۔",
      "قرآن کی نصیحت پر عمل کرنا فلاح کی ضمانت ہے۔"
    ],
    "keyLessonsEn": [
      "The Quran heals spiritual anxieties.",
      "It is pure guidance and mercy.",
      "Acting upon its counsel brings eternal peace."
    ],
    "reflectionsUrdu": "کیا میں اپنے دل کی الجھنوں کے حل کے لیے قرآن سے رجوع کرتا ہوں؟",
    "reflectionsEn": "Do I turn to the Quran as a primary sanctuary to heal my heart's distress?"
  },
  {
    "day": 192,
    "surah": "Hud",
    "surah_ar": "سورة هود",
    "surahNumber": 11,
    "ayah": 114,
    "arabic": "إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ",
    "urdu_translation": "بے شک نیکیاں برائیوں کو مٹا دیتی ہیں، یہ یاد رکھنے والوں کے لیے ایک نصیحت ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة هود، آیت 114) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Hud (Ayah 114) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "ایک صحابی سے لغزش ہوئی تو انہوں نے نبی ﷺ سے توبہ کی تدبیر پوچھی، تب یہ آیت اتری۔",
    "asbabAlNuzulEn": "Revealed when a Companion asked how to atone for an error; Allah taught that good deeds erase wrongs.",
    "keyLessonsUrdu": [
      "نیک اعمال گناہوں کا کفارہ بنتے ہیں۔",
      "توبہ اور نماز گناہوں کو دھو ڈالتی ہے۔",
      "ہمیشہ اچھائی کی طرف پیش قدمی کریں۔"
    ],
    "keyLessonsEn": [
      "Righteous deeds expiate minor sins.",
      "Prayer and charity wash away faults.",
      "Always hasten to follow an error with good."
    ],
    "reflectionsUrdu": "کیا میں اپنی غلطیوں کے بعد فورا نیکی اور استغفار سے دل کو پاک کرتا ہوں؟",
    "reflectionsEn": "Do I actively replace my mistakes with acts of charity, prayer, and kindness?"
  },
  {
    "day": 193,
    "surah": "Yusuf",
    "surah_ar": "سورة يوسف",
    "surahNumber": 12,
    "ayah": 86,
    "arabic": "قَالَ إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ",
    "urdu_translation": "یعقوب علیہ السلام نے کہا: میں تو اپنی پریشانی اور غم کی فریاد صرف اللہ ہی کے حضور کرتا ہوں اور میں اللہ کی طرف سے وہ باتیں جانتا ہوں جو تم نہیں جانتے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة يوسف، آیت 86) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Yusuf (Ayah 86) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت یعقوبؑ کے صبرِ جمیل اور کمالِ توکل کا بے مثال نمونہ امت کی تسلی کے لیے پیش کیا گیا۔",
    "asbabAlNuzulEn": "Illustrates the sublime patience of Prophet Yaqub (as) who confided solely in Allah.",
    "keyLessonsUrdu": [
      "غم اور تکلیف میں صرف اللہ سے شکوہ کرنا صبر کے منافی نہیں۔",
      "اللہ کی رحمت سے کبھی مایوس نہیں ہونا چاہیے۔",
      "امید اور یقین دل کو مضبوط بناتے ہیں۔"
    ],
    "keyLessonsEn": [
      "Confiding grief to Allah is true patience.",
      "Never despair of Allah's boundless mercy.",
      "Hope and trust fortify the soul."
    ],
    "reflectionsUrdu": "کیا میں مشکلات میں لوگوں کے آگے رونے کی بجائے اللہ کی بارگاہ میں سجدہ ریز ہوتا ہوں؟",
    "reflectionsEn": "In moments of deep sorrow, do I make Allah my very first confidant?"
  },
  {
    "day": 194,
    "surah": "Ar-Ra'd",
    "surah_ar": "سورة الرعد",
    "surahNumber": 13,
    "ayah": 28,
    "arabic": "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    "urdu_translation": "وہ لوگ جو ایمان لائے اور جن کے دل اللہ کے ذکر سے اطمینان پاتے ہیں، خبردار! اللہ کے ذکر ہی سے دلوں کو سکون ملتا ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الرعد، آیت 28) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Ar-Ra'd (Ayah 28) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مومنین کے دلوں کے حقیقی سکون اور روحانی تسکین کا سرچشمہ واضح کیا گیا۔",
    "asbabAlNuzulEn": "Revealed to direct humanity to the ultimate source of inner tranquility.",
    "keyLessonsUrdu": [
      "دنیاوی چیزیں عارضی سکون دیتی ہیں، حقیقی سکون صرف ذکرِ الٰہی میں ہے۔",
      "ذکر سے دل کے زنگ اور پریشانیاں دور ہوتی ہیں۔",
      "ہمہ وقت اللہ کا دھیان رکھنا دل کی دوا ہے۔"
    ],
    "keyLessonsEn": [
      "Worldly luxuries give fleeting comfort; true peace is in remembering Allah.",
      "Dhikr cleanses the heart.",
      "Mindfulness of Allah is spiritual medicine."
    ],
    "reflectionsUrdu": "کیا میں نے آج کے دن اپنے دل کو ذکرِ الٰہی کا پرسکون تحفہ دیا؟",
    "reflectionsEn": "Have I gifted my heart moments of stillness through mindful remembrance of Allah?"
  },
  {
    "day": 195,
    "surah": "Ibrahim",
    "surah_ar": "سورة إبراهيم",
    "surahNumber": 14,
    "ayah": 7,
    "arabic": "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
    "urdu_translation": "اور جب تمہارے رب نے آگاہ فرمایا کہ اگر تم شکر ادا کرو گے تو میں تمہیں ضرور زیادہ دوں گا اور اگر تم ناشکری کرو گے تو بے شک میرا عذاب بڑا سخت ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة إبراهيم، آیت 7) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Ibrahim (Ayah 7) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت موسیٰؑ نے اپنی قوم کو اللہ کے احسانات یاد دلا کر شکر گزاری کی تلقین فرمائی۔",
    "asbabAlNuzulEn": "Prophet Musa (as) reminded his people of Allah's favors and the compounding power of gratitude.",
    "keyLessonsUrdu": [
      "شکر گزاری نعمتوں کو محفوظ اور زیادہ کرتی ہے۔",
      "ناشکری زوالِ نعمت کا سبب بنتی ہے۔",
      "زبان، دل اور اعضاء تینوں سے شکر ادا کرنا چاہیے۔"
    ],
    "keyLessonsEn": [
      "Gratitude preserves and multiplies blessings.",
      "Ingratitude leads to loss of favors.",
      "Express gratitude in words, heart, and actions."
    ],
    "reflectionsUrdu": "کیا میں ہر چھوٹی بڑی نعمت کا اعتراف کر کے اپنے رب کا شکر گزار بنتا ہوں؟",
    "reflectionsEn": "Do I consciously thank Allah for both small favors and major milestones?"
  },
  {
    "day": 196,
    "surah": "Al-Hijr",
    "surah_ar": "سورة الحجر",
    "surahNumber": 15,
    "ayah": 9,
    "arabic": "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    "urdu_translation": "بے شک ہم ہی نے اس قرآن کو نازل کیا ہے اور ہم ہی اس کی حفاظت کرنے والے ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الحجر، آیت 9) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Hijr (Ayah 9) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "کفار کے طعنوں کے جواب میں اللہ نے قرآن مجید کی تا قیامت حفاظت کی الہامی ضمانت دی۔",
    "asbabAlNuzulEn": "Revealed to provide a divine guarantee that the Quran will be preserved intact until the Day of Judgement.",
    "keyLessonsUrdu": [
      "قرآن مجید ہر قسم کی تحریف سے محفوظ کتاب ہے۔",
      "قرآن کے حفاظ اور قراء اللہ کے چنے ہوئے محافظ ہیں۔",
      "قرآن کی حفاظت ہمارے ایمان کا حصہ ہے۔"
    ],
    "keyLessonsEn": [
      "The Quran is miraculously preserved without single alteration.",
      "Those who memorize it share in its noble honor.",
      "Guarding its values is our duty."
    ],
    "reflectionsUrdu": "کیا میں روزانہ قرآن مجید کو کھول کر اس سے اپنا رشتہ مضبوط رکھتا ہوں؟",
    "reflectionsEn": "How deeply connected am I to reading, understanding, and preserving the Quran's teachings in my home?"
  },
  {
    "day": 197,
    "surah": "An-Nahl",
    "surah_ar": "سورة النحل",
    "surahNumber": 16,
    "ayah": 125,
    "arabic": "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ",
    "urdu_translation": "اپنے رب کے راستے کی طرف حکمت اور اچھی نصیحت کے ساتھ بلائیے، اور ان سے ایسے طریقے سے بحث کیجئے جو بہترین ہو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة النحل، آیت 125) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from An-Nahl (Ayah 125) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "دین کی تبلیغ اور معاشرتی مکالمے کے سنہرے اصول سکھانے کے لیے نازل ہوئی۔",
    "asbabAlNuzulEn": "Revealed to set forth the golden ethical rules for Islamic discourse and invitation.",
    "keyLessonsUrdu": [
      "دعوتِ دین میں حکمت اور نرمی بنیاد ہے۔",
      "بدکلامی اور طنز سے پرہیز کرنا ضروری ہے۔",
      "سامنے والے کے فہم اور جذبات کا لحاظ رکھنا۔"
    ],
    "keyLessonsEn": [
      "Wisdom and kindness are the bedrock of conveying truth.",
      "Avoid insults or cynicism.",
      "Respect the perspective and intelligence of listeners."
    ],
    "reflectionsUrdu": "کیا میری گفتگو میں حکمت اور شائستگی پائی جاتی ہے؟",
    "reflectionsEn": "Does wisdom, gentleness, and dignified speech define my conversations?"
  },
  {
    "day": 198,
    "surah": "Al-Isra",
    "surah_ar": "سورة الإسراء",
    "surahNumber": 17,
    "ayah": 23,
    "arabic": "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ",
    "urdu_translation": "اور آپ کے رب نے فیصلہ فرما دیا کہ تم اس کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ حسنِ سلوک کرو، اگر ان میں سے ایک یا دونوں بڑھاپے کو پہنچ جائیں تو انہیں 'اُف' تک نہ کہو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الإسراء، آیت 23) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Isra (Ayah 23) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "توحید کے بعد والدین کے اکرام کو دین کا سب سے عظیم اخلاقی فرض قرار دیا گیا۔",
    "asbabAlNuzulEn": "Revealed to pair the oneness of God with the utmost duty of honouring parents in their vulnerable years.",
    "keyLessonsUrdu": [
      "والدین کے سامنے اف تک کہنا گناہ ہے۔",
      "بڑھاپے میں ان کی زیادہ خدمت اور دلجوئی کی ضرورت ہے۔",
      "والدین کی رضا میں رب کی رضا ہے۔"
    ],
    "keyLessonsEn": [
      "Uttering even 'uff' or sighing at parents is forbidden.",
      "Old age demands tender care and patience.",
      "Pleasing parents earns Allah's pleasure."
    ],
    "reflectionsUrdu": "کیا میں اپنے والدین کے سامنے اپنی آواز اور لہجے کو ہمیشہ پست اور مودب رکھتا ہوں؟",
    "reflectionsEn": "Do I always lower the wing of humility and utter devotion before my parents?"
  },
  {
    "day": 199,
    "surah": "Al-Kahf",
    "surah_ar": "سورة الكهف",
    "surahNumber": 18,
    "ayah": 46,
    "arabic": "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا",
    "urdu_translation": "مال اور بیٹے تو دنیاوی زندگی کی رونق ہیں، اور باقی رہنے والے نیک اعمال آپ کے رب کے نزدیک ثواب کے لحاظ سے اور امید کے لحاظ سے کہیں بہتر ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الكهف، آیت 46) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Kahf (Ayah 46) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مکہ کے مالداروں کے تکبر کے جواب میں دائمی اور فانی چیزوں کا فرق واضح کیا گیا۔",
    "asbabAlNuzulEn": "Revealed to redirect human focus from transient material vanity to everlasting spiritual works.",
    "keyLessonsUrdu": [
      "دنیاوی مال و دولت فانی ہے۔",
      "سبحان اللہ، الحمد للہ جیسے اذکار 'الباقیات الصالحات' ہیں۔",
      "آخرت کے لیے ذخیرہ جمع کرنا ہی اصل دانشمندی ہے۔"
    ],
    "keyLessonsEn": [
      "Worldly riches are transient.",
      "Phrases of tasbih and good deeds are the truly enduring treasures.",
      "Investing in the Hereafter is true wisdom."
    ],
    "reflectionsUrdu": "کیا میری ترجیح فانی دنیا کی زینت ہے یا آخرت کی باقی رہنے والی نیکیاں؟",
    "reflectionsEn": "Are my ambitions weighed towards temporary worldly status or permanent eternal deeds?"
  },
  {
    "day": 200,
    "surah": "Maryam",
    "surah_ar": "سورة مريم",
    "surahNumber": 19,
    "ayah": 96,
    "arabic": "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا",
    "urdu_translation": "بے شک جو لوگ ایمان لائے اور انہوں نے نیک اعمال کیے، رحمن عنقریب ان کے لیے (لوگوں کے دلوں میں) محبت پیدا فرما دے گا۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة مريم، آیت 96) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Maryam (Ayah 96) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مومنین کی حوصلہ افزائی کے لیے کہ اخلاص والے بندوں کی محبت کائنات میں پھیلا دی جاتی ہے۔",
    "asbabAlNuzulEn": "Revealed to reassure believers that sincere faith plants sincere love in the hearts of humanity.",
    "keyLessonsUrdu": [
      "ایمان اور نیک اعمال سے اللہ کی اور فرشتوں کی محبت حاصل ہوتی ہے۔",
      "نیک انسان کی مقبولیت زمین میں عام کر دی جاتی ہے۔",
      "شہرت کے پیچھے بھاگنے کی بجائے اخلاص اپنائیں۔"
    ],
    "keyLessonsEn": [
      "Faith and righteous deeds attract divine affection.",
      "Allah places love for the sincere among righteous people.",
      "Seek sincerity over worldly popularity."
    ],
    "reflectionsUrdu": "کیا میرے اعمال میں اتنا اخلاص ہے کہ وہ اللہ کی محبت کا سبب بن سکیں؟",
    "reflectionsEn": "Do I cultivate pure intentions that draw the pleasure and love of the Most Merciful?"
  },
  {
    "day": 201,
    "surah": "Ta-Ha",
    "surah_ar": "سورة طه",
    "surahNumber": 20,
    "ayah": 114,
    "arabic": "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِن قَبْلِ أَن يُقْضَىٰ إِلَيْكَ وَحْيُهُ ۖ وَقُل رَّبِّ زِدْنِي عِلْمًا",
    "urdu_translation": "پس اللہ ہی سب سے بلند و برتر ہے جو حقیقی بادشاہ ہے، اور قرآن پڑھنے میں جلدی نہ کیجئے قبل اس کے کہ اس کی وحی پوری ہو جائے، اور دعا کیجئے: اے میرے رب! میرے علم میں اضافہ فرما۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة طه، آیت 114) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Ta-Ha (Ayah 114) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "نبی کریم ﷺ وحی کے یاد کرنے میں جلدی فرماتے تھے تاکہ کچھ بھول نہ جائے، تو اللہ نے اطمینان دلایا اور علم کی دعا سکھائی۔",
    "asbabAlNuzulEn": "Revealed when the Prophet ﷺ hastened during revelation; Allah comforted him and taught this timeless prayer for knowledge.",
    "keyLessonsUrdu": [
      "علم کے حصول کے لیے ہمیشہ طالب بن کر رہنا چاہیے۔",
      "علم نافع دنیا و آخرت کی سب سے بڑی دولت ہے۔",
      "قرآن فہمی میں جلد بازی کی بجائے غور و فکر ضروری ہے۔"
    ],
    "keyLessonsEn": [
      "Always remain a humble seeker of knowledge.",
      "Beneficial knowledge is the highest asset.",
      "Patience and reflection are vital in understanding scripture."
    ],
    "reflectionsUrdu": "کیا میں نے آج کے دن اپنے دینی اور مفید علم میں کوئی اضافہ کیا؟",
    "reflectionsEn": "Did I acquire any beneficial knowledge today that draws me closer to truth?"
  },
  {
    "day": 202,
    "surah": "Al-Anbiya",
    "surah_ar": "سورة الأنبياء",
    "surahNumber": 21,
    "ayah": 87,
    "arabic": "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "urdu_translation": "(یونسؑ نے پکارا کہ) تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الأنبياء، آیت 87) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Anbiya (Ayah 87) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت یونسؑ نے مچھلی کے پیٹ کے اندھیروں میں اس دعا کے ذریعے اللہ کو پکارا اور نجات پائی۔",
    "asbabAlNuzulEn": "Prophet Yunus (as) supplicated with this in the belly of the whale and was granted immediate deliverance.",
    "keyLessonsUrdu": [
      "اعترافِ گناہ اور تسبیح دعا کی قبولیت کی کنجی ہے۔",
      "اللہ ہر اندھیرے اور مصیبت سے نکالنے پر قادر ہے۔",
      "مایوسی کے وقت بھی امید کا دامن نہ چھوڑیں۔"
    ],
    "keyLessonsEn": [
      "Acknowledging weakness and glorifying Allah is the key to answered prayer.",
      "Allah can deliver from the deepest darkness.",
      "Never despair."
    ],
    "reflectionsUrdu": "کیا میں اپنی غلطیوں پر شرمندہ ہو کر عاجزی کے ساتھ اللہ سے معافی مانگتا ہوں؟",
    "reflectionsEn": "Do I readily humble myself and confess my shortcomings before Allah?"
  },
  {
    "day": 203,
    "surah": "Al-Hajj",
    "surah_ar": "سورة الحج",
    "surahNumber": 22,
    "ayah": 77,
    "arabic": "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ",
    "urdu_translation": "اے ایمان والو! رکوع کرو، سجدہ کرو، اپنے رب کی بندگی کرو اور نیک کام کرو تاکہ تم کامیاب ہو جاؤ۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الحج، آیت 77) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Hajj (Ayah 77) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "کامیابی کا مکمل قرآنی نقشہ (نماز، سجدہ، عبادات اور کارِ خیر) بیان کیا گیا۔",
    "asbabAlNuzulEn": "Revealed to outline the complete spiritual pathway to ultimate success through prayer and charity.",
    "keyLessonsUrdu": [
      "نماز اور سجدہ بندگی کا معراج ہے۔",
      "حقوق اللہ کے ساتھ حقوق العباد اور خدمتِ خلق ضروری ہے۔",
      "فلاح اور کامیابی نیک اعمال سے مشروط ہے۔"
    ],
    "keyLessonsEn": [
      "Prayer and prostration are the zenith of devotion.",
      "Service to humanity complements direct worship.",
      "Eternal success is built on righteous living."
    ],
    "reflectionsUrdu": "کیا میرا سجدہ میرے دل کو تکبر سے پاک اور منکسر المزاج بناتا ہے؟",
    "reflectionsEn": "Does my prostration infuse my soul with genuine humility before Allah and His creation?"
  },
  {
    "day": 204,
    "surah": "Al-Mu'minun",
    "surah_ar": "سورة المؤمنون",
    "surahNumber": 23,
    "ayah": 1,
    "arabic": "قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    "urdu_translation": "یقیناً وہ ایمان والے کامیاب ہو گئے جو اپنی نمازوں میں خشوع و خضوع اختیار کرتے ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة المؤمنون، آیت 1) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Mu'minun (Ayah 1) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "کامل مومنین کے سات بنیادی اوصاف کی ابتداء نماز کے خشوع سے کی گئی۔",
    "asbabAlNuzulEn": "Revealed to describe the essential characteristics of spiritually triumphant believers.",
    "keyLessonsUrdu": [
      "خشوع نماز کی روح اور جان ہے۔",
      "نماز میں دل کا حاضر ہونا ضروری ہے۔",
      "سچی کامیابی ایمان اور تقویٰ میں ہے۔"
    ],
    "keyLessonsEn": [
      "Khushu (humility) is the living soul of prayer.",
      "Mindful presence is essential in Salah.",
      "True triumph lies in genuine piety."
    ],
    "reflectionsUrdu": "میری نماز میں کتنی یکسوئی اور دل کی حاضری موجود ہوتی ہے؟",
    "reflectionsEn": "How attentively present is my heart when standing before Allah in prayer?"
  },
  {
    "day": 205,
    "surah": "An-Nur",
    "surah_ar": "سورة النور",
    "surahNumber": 24,
    "ayah": 35,
    "arabic": "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
    "urdu_translation": "اللہ آسمانوں اور زمین کا نور ہے، اس کے نور کی مثال ایسی ہے جیسے ایک طاق ہو جس میں چراغ رکھا ہو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة النور، آیت 35) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from An-Nur (Ayah 35) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "کائنات کی روحانی و مادی حقیقت اور دلِ مومن میں ایمان کے چراغ کی عظمت بیان ہوئی۔",
    "asbabAlNuzulEn": "Revealed to portray the magnificent parable of divine light illuminating the believer's pure heart.",
    "keyLessonsUrdu": [
      "تمام کائنات اللہ کے نور سے روشن ہے۔",
      "ایمان کا نور گناہوں کی تاریکیوں کو مٹا دیتا ہے۔",
      "پاکیزہ دل ہی ہدایت کے نور کو جذب کرتا ہے۔"
    ],
    "keyLessonsEn": [
      "The cosmos is illuminated by Allah's divine wisdom.",
      "The light of faith expels moral darkness.",
      "Only pure hearts absorb true guidance."
    ],
    "reflectionsUrdu": "کیا میرا دل اللہ کی محبت اور ایمان کے نور سے منور ہے؟",
    "reflectionsEn": "Is my inner self illuminated by the noble light of sincere faith and truth?"
  },
  {
    "day": 206,
    "surah": "Al-Furqan",
    "surah_ar": "سورة الفرقان",
    "surahNumber": 25,
    "ayah": 63,
    "arabic": "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا",
    "urdu_translation": "اور رحمن کے (خاص) بندے وہ ہیں جو زمین پر عاجزی کے ساتھ چلتے ہیں اور جب جاہل لوگ ان سے الجھتے ہیں تو وہ سلامتی کی بات کہہ کر الگ ہو جاتے ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفرقان، آیت 63) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Furqan (Ayah 63) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "رحمن کے چہیتے بندوں کے اخلاق، عاجزی اور وقار کی صفات بیان فرمائی گئیں۔",
    "asbabAlNuzulEn": "Revealed to outline the dignified humility and peaceful demeanor of the true servants of Allah.",
    "keyLessonsUrdu": [
      "عاجزی اور انکساری رحمن کے بندوں کا شعار ہے۔",
      "جاہلوں کے طعنوں کا جواب وقار اور سلامتی سے دینا چاہیے۔",
      "تکبر اور فخر سے زمین پر اکڑ کر چلنا منع ہے۔"
    ],
    "keyLessonsEn": [
      "Humility is the trademark of the servants of Ar-Rahman.",
      "Respond to hostility with dignified peace.",
      "Avoid vanity in gait and posture."
    ],
    "reflectionsUrdu": "کیا میرا رویہ لوگوں کے ساتھ عاجزانہ اور امن پسند ہے؟",
    "reflectionsEn": "Do I walk upon the earth with genuine humility and spread peace in contentious situations?"
  },
  {
    "day": 207,
    "surah": "Ash-Shu'ara",
    "surah_ar": "سورة الشعراء",
    "surahNumber": 26,
    "ayah": 88,
    "arabic": "يَوْمَ لَا يَنفَعُ مَالٌ وَلَا بَنُونَ إِلَّا مَنْ أَتَى اللَّهَ بِقَلْبٍ سَلِيمٍ",
    "urdu_translation": "جس دن نہ مال کوئی فائدہ دے گا اور نہ اولاد، سوائے اس شخص کے جو اللہ کے پاس قلبِ سلیم (پاکیزہ دل) لے کر آیا۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الشعراء، آیت 88) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Ash-Shu'ara (Ayah 88) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت ابراہیمؑ کی روزِ قیامت کے حوالے سے دعا اور قلبِ سلیم کی ابدی اہمیت کا بیان۔",
    "asbabAlNuzulEn": "The prayer of Prophet Ibrahim (as) emphasizing that a pure heart is the only currency accepted on the Last Day.",
    "keyLessonsUrdu": [
      "قیامت کے دن صرف پاکیزہ دل نجات دلائے گا۔",
      "حسد، کینہ اور ریاکاری سے دل کو پاک رکھنا فرض ہے۔",
      "دنیاوی مال اور رشتے آخرت میں کام نہیں آئیں گے۔"
    ],
    "keyLessonsEn": [
      "A purified sound heart (Qalb Saleem) is the sole salvation on Judgement Day.",
      "Cleanse the soul from envy, hatred, and ostentation.",
      "Worldly wealth cannot buy redemption."
    ],
    "reflectionsUrdu": "کیا میرا دل تمام بندوں کے لیے حسد اور کینے سے پاک ہے؟",
    "reflectionsEn": "Is my heart free from rancor, grudge, and deceit towards any soul?"
  },
  {
    "day": 208,
    "surah": "An-Naml",
    "surah_ar": "سورة النمل",
    "surahNumber": 27,
    "ayah": 19,
    "arabic": "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ",
    "urdu_translation": "اے میرے رب! مجھے توفیق دے کہ میں تیری اس نعمت کا شکر ادا کروں جو تو نے مجھ پر اور میرے والدین پر کی، اور ایسے نیک اعمال کروں جن سے تو راضی ہو جائے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة النمل، آیت 19) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from An-Naml (Ayah 19) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت سلیمانؑ نے چیونٹی کی بات سن کر عاجزی کے ساتھ اللہ کی بارگاہ میں یہ دعا مانگی۔",
    "asbabAlNuzulEn": "Prophet Sulaiman (as) smiled at the speech of the ant and immediately made this heartfelt supplication.",
    "keyLessonsUrdu": [
      "طاقت اور نعمت ملنے پر تکبر کی بجائے شکر اور عاجزی کرنی چاہیے۔",
      "والدین کی نعمتوں پر بھی شکر ادا کرنا چاہیے۔",
      "اللہ کی رضا والے اعمال کی توفیق مانگنا۔"
    ],
    "keyLessonsEn": [
      "Power and blessings should evoke deeper humility and gratitude.",
      "Thank Allah for the blessings given to parents.",
      "Always seek to do deeds that earn divine pleasure."
    ],
    "reflectionsUrdu": "جب مجھے کوئی کامیابی ملتی ہے تو کیا میرا دل شکر سے لبریز ہوتا ہے؟",
    "reflectionsEn": "Does every success naturally prompt me to bow my head in humble gratitude?"
  },
  {
    "day": 209,
    "surah": "Al-Qasas",
    "surah_ar": "سورة القصص",
    "surahNumber": 28,
    "ayah": 24,
    "arabic": "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    "urdu_translation": "اے میرے پروردگار! تو میری طرف جو بھی خیر اور بھلائی نازل فرما دے میں اس کا محتاج ہوں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة القصص، آیت 24) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Qasas (Ayah 24) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "حضرت موسیٰؑ نے مدین کے کنوئیں پر محتاجی کے عالم میں سائے تلے بیٹھ کر یہ دعا مانگی۔",
    "asbabAlNuzulEn": "Prophet Musa (as) recited this sitting in the shade at Madyan, and Allah immediately provided shelter, livelihood, and family.",
    "keyLessonsUrdu": [
      "اللہ کے سامنے اپنی احتیاج اور عاجزی کا اظہار کرنا پسندیدہ ہے۔",
      "اللہ کی دی ہوئی ہر خیر کی قدر کرنی چاہیے۔",
      "مایوس ہوئے بغیر ہمیشہ خیر کی امید رکھیں۔"
    ],
    "keyLessonsEn": [
      "Expressing total neediness before Allah invites swift relief.",
      "Cherish whatever goodness Allah provides.",
      "Never lose hope in divine benevolence."
    ],
    "reflectionsUrdu": "کیا میں خود کو مکمل طور پر اللہ کے فضل اور خیر کا محتاج سمجھتا ہوں؟",
    "reflectionsEn": "Do I recognize that my entire existence depends upon Allah's daily grace?"
  },
  {
    "day": 210,
    "surah": "Al-Ankabut",
    "surah_ar": "سورة العنكبوت",
    "surahNumber": 29,
    "ayah": 69,
    "arabic": "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
    "urdu_translation": "اور جن لوگوں نے ہمارے راستے میں جدوجہد کی، ہم ضرور انہیں اپنے راستوں کی ہدایت دیں گے، اور بے شک اللہ احسان کرنے والوں کے ساتھ ہے۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة العنكبوت، آیت 69) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Ankabut (Ayah 69) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مومنین کو نیکی اور حق کی راہ میں ثابت قدمی پر غیبی مدد اور ہدایت کی بشارت دی گئی۔",
    "asbabAlNuzulEn": "Revealed to reassure believers that sincere spiritual struggle is always crowned with divine guidance and company.",
    "keyLessonsUrdu": [
      "جو اللہ کی راہ میں قدم بڑھاتا ہے اللہ اس کی مدد فرماتا ہے۔",
      "نفسانی خواہشات پر قابو پانا سب سے بڑا جہاد ہے۔",
      "محسنین (نیکوکاروں) کو اللہ کی خصوصی معیت حاصل ہوتی ہے۔"
    ],
    "keyLessonsEn": [
      "Taking one step towards Allah brings His swift guidance.",
      "Overcoming egoistic desires is a noble jihad.",
      "Allah is intimately with those who excel in virtue."
    ],
    "reflectionsUrdu": "کیا میں اپنی اصلاح اور برائی چھوڑنے کے لیے روزانہ سچی جدوجہد کرتا ہوں؟",
    "reflectionsEn": "Am I consciously striving to discipline my soul and purify my actions for Allah's sake?"
  },
  {
    "day": 211,
    "surah": "Al-Fatiha",
    "surah_ar": "سورة الفاتحة",
    "surahNumber": 1,
    "ayah": 5,
    "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "urdu_translation": "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة الفاتحة، آیت 5) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Fatiha (Ayah 5) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "مکہ مکرمہ میں بندگی اور دعا کا مسنون طریقہ سکھانے کے لیے نازل ہوئی۔",
    "asbabAlNuzulEn": "Revealed in Makkah to teach true devotion and monotheistic prayer.",
    "keyLessonsUrdu": [
      "عبادت کا حق صرف اللہ کے لیے ہے۔",
      "تمام مدد کا حقیقی سرچشمہ صرف رب العالمین ہے۔",
      "تکبر اور خود پسندی سے دوری۔"
    ],
    "keyLessonsEn": [
      "Worship is exclusively for Allah.",
      "True aid comes only from the Creator.",
      "Freedom from self-pride."
    ],
    "reflectionsUrdu": "کیا میں اپنے روزمرہ معاملات میں حقیقی معنوں میں اللہ کے آگے جھکتا ہوں؟",
    "reflectionsEn": "Do I place my absolute trust in Allah in every daily matter?"
  },
  {
    "day": 212,
    "surah": "Al-Baqarah",
    "surah_ar": "سورة البقرة",
    "surahNumber": 2,
    "ayah": 152,
    "arabic": "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    "urdu_translation": "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    "tafseerUrdu": "یہ مبارک آیت (سورة البقرة، آیت 152) اسلامی عقائد اور عملی اخلاق کا ایک خوبصورت ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر، معارف القرآن) کے مطابق اس کا بنیادی پیغام یہ ہے کہ انسان ہر حال میں اپنے رب کا شکر گزار رہے اور اس کے احکامات پر خلوصِ دل سے عمل پیرا ہو۔ قرآن مجید کی ہر آیت انسان کی رہنمائی اور فلاح کا کامل ذریعہ ہے۔",
    "tafseerEn": "This blessed verse from Al-Baqarah (Ayah 152) forms a foundational pillar of Islamic belief and practice. Classical commentators (Ibn Kathir, Ma'ariful Quran) emphasize that it calls believers to sincere devotion, practical righteousness, and steadfast reliance on Allah's boundless mercy.",
    "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
    "asbabAlNuzulUrdu": "تحویلِ قبلہ کے بعد مسلمانوں کو اللہ کے ذکر اور شکر پر قائم رہنے کا حکم دیا گیا۔",
    "asbabAlNuzulEn": "Revealed following the change of Qiblah to anchor the believers in continuous remembrance.",
    "keyLessonsUrdu": [
      "ذکرِ الٰہی سے دلوں کو اطمینان ملتا ہے۔",
      "شکر گزاری سے نعمتوں میں اضافہ ہوتا ہے۔",
      "ناشکری سے بچنا لازم ہے۔"
    ],
    "keyLessonsEn": [
      "Remembrance of Allah brings peace.",
      "Gratitude increases blessings.",
      "Guarding against ingratitude."
    ],
    "reflectionsUrdu": "آج کے دن میں نے اللہ کے ذکر میں کتنا وقت گزارا؟",
    "reflectionsEn": "How much of my day was consciously spent in the remembrance of Allah?"
  }
];

export const dhikrs: DhikrItem[] = [
  {
    "id": "dhikr-182",
    "day": 182,
    "titleEn": "Durood-e-Ibrahimi (Blessings on the Prophet)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli ala Muhammadin wa ala aali Muhammad kama sallayta ala Ibrahima wa ala aali Ibrahima innaka Hamidum Majid",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسا کہ تو نے ابراہیمؑ اور ان کی آل پر رحمت نازل فرمائی۔",
    "english_translation": "O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "ایک بار درود بھیجنے پر اللہ دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔ (مسلم: 408)",
    "virtueEn": "Whoever sends blessings upon me once, Allah blesses him ten times. (Muslim: 408)",
    "source": "Sahih Muslim 408",
    "category": "Salawat"
  },
  {
    "id": "dhikr-183",
    "day": 183,
    "titleEn": "Treasure of Paradise (La Hawla wa la Quwwata)",
    "titleUrdu": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil-Aliyyil-Azim",
    "urdu_translation": "گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے۔ (صحیح بخاری: 6384)",
    "virtueEn": "This is a treasure from the treasures of Paradise. (Sahih al-Bukhari: 6384)",
    "source": "Sahih al-Bukhari 6384",
    "category": "Treasure of Paradise"
  },
  {
    "id": "dhikr-184",
    "day": 184,
    "titleEn": "Astaghfirullah (Seeking Forgiveness)",
    "titleUrdu": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal-Azim alladhi la ilaha illa Huwal-Hayyul-Qayyumu wa atubu ilayh",
    "urdu_translation": "میں عظمت والے اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ رہنے والا ہے اور میں اسی سے توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah the Supreme, besides Whom there is no deity, the Ever-Living, the Sustainer, and I repent unto Him.",
    "targetCount": 33,
    "virtueUrdu": "جو یہ استغفار پڑھے اس کے گناہ بخش دیے جاتے ہیں اگرچہ وہ میدانِ جنگ سے بھاگا ہو۔ (سنن ابی داؤد: 1517)",
    "virtueEn": "Whoever recites this will have their sins forgiven even if they fled from battle. (Abu Dawud: 1517)",
    "source": "Sunan Abi Dawud 1517",
    "category": "Istighfar"
  },
  {
    "id": "dhikr-185",
    "day": 185,
    "titleEn": "Ayat al-Kareema (Supplication of Prophet Yunus)",
    "titleUrdu": "آیتِ کریمہ (دعائے یونسؑ)",
    "arabic": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 33,
    "virtueUrdu": "جب بھی کوئی مسلمان کسی پریشانی میں یہ دعا مانگے گا اللہ اس کی پکار قبول فرمائے گا۔ (ترمذی: 3505)",
    "virtueEn": "No Muslim supplicates with this in distress except that Allah relieves him. (Tirmidhi: 3505)",
    "source": "Jami at-Tirmidhi 3505",
    "category": "Relief"
  },
  {
    "id": "dhikr-186",
    "day": 186,
    "titleEn": "HasbunAllahu wa ni'mal wakeel (Allah is Sufficient)",
    "titleUrdu": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    "arabic": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
    "transliteration": "HasbunAllahu wa ni'mal-wakeel, ni'mal-Mawla wa ni'man-Naseer",
    "urdu_translation": "ہمیں اللہ ہی کافی ہے اور وہ بہترین کارساز ہے، بہترین مددگار ہے۔",
    "english_translation": "Sufficient for us is Allah, and He is the best Disposer of affairs.",
    "targetCount": 33,
    "virtueUrdu": "حضرت ابراہیمؑ نے آگ میں ڈالے جاتے وقت یہ کلمات ادا کیے تھے۔ (صحیح بخاری: 4563)",
    "virtueEn": "Ibrahim (as) said this when cast into the fire, and Allah made it cool and safe. (Bukhari: 4563)",
    "source": "Sahih al-Bukhari 4563",
    "category": "Trust"
  },
  {
    "id": "dhikr-187",
    "day": 187,
    "titleEn": "The Four Great Words (Al-Baqiyat as-Salihat)",
    "titleUrdu": "سبحان اللہ، الحمد للہ، لا الہ الا اللہ، اللہ اکبر",
    "arabic": "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلَا إِلَهَ إِلَّا اللَّهُ ، وَاللَّهُ أَكْبَرُ",
    "transliteration": "SubhanAllahi wal-hamdulillahi wa la ilaha illallahu wallahu Akbar",
    "urdu_translation": "اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے۔",
    "english_translation": "Glory be to Allah, praise be to Allah, there is no deity but Allah, and Allah is the Greatest.",
    "targetCount": 33,
    "virtueUrdu": "یہ چار کلمات مجھے ان تمام چیزوں سے زیادہ محبوب ہیں جن پر سورج طلوع ہوتا ہے۔ (صحیح مسلم: 2695)",
    "virtueEn": "Saying these words is dearer to me than all upon which the sun rises. (Sahih Muslim: 2695)",
    "source": "Sahih Muslim 2695",
    "category": "Tasbih"
  },
  {
    "id": "dhikr-188",
    "day": 188,
    "titleEn": "Supplication for Divine Protection (Bismillahi alladhi)",
    "titleUrdu": "ہر قسم کے نقصان سے حفاظت کی دعا",
    "arabic": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    "transliteration": "Bismillahi alladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-Alim",
    "urdu_translation": "اللہ کے نام سے جس کے نام کی برکت سے زمین و آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے اور جاننے والا ہے۔",
    "english_translation": "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, All-Knowing.",
    "targetCount": 3,
    "virtueUrdu": "جو صبح و شام تین بار یہ پڑھے اسے کوئی اچانک آفت نقصان نہیں پہنچا سکتی۔ (سنن ابی داؤد: 5088)",
    "virtueEn": "Whoever recites this thrice in morning and evening will not be harmed by anything. (Abu Dawud: 5088)",
    "source": "Sunan Abi Dawud 5088",
    "category": "Protection"
  },
  {
    "id": "dhikr-189",
    "day": 189,
    "titleEn": "Sayyidul Istighfar (Master of Forgiveness)",
    "titleUrdu": "سید الاستغفار",
    "arabic": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    "transliteration": "Allahumma Anta Rabbi la ilaha illa Anta khalaqtani wa ana abduka wa ana ala ahdika wa wa'dika mastata'tu",
    "urdu_translation": "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، پس مجھے بخش دے۔",
    "english_translation": "O Allah, You are my Lord, none has the right to be worshiped but You. You created me and I am Your servant.",
    "targetCount": 3,
    "virtueUrdu": "جو شخص یقین کے ساتھ دن یا رات کو یہ دعا پڑھے اور وفات پا جائے تو وہ جنتی ہے۔ (بخاری: 6306)",
    "virtueEn": "Whoever recites this with firm faith and dies that day or night will enter Paradise. (Bukhari: 6306)",
    "source": "Sahih al-Bukhari 6306",
    "category": "Forgiveness"
  },
  {
    "id": "dhikr-190",
    "day": 190,
    "titleEn": "Supplication of Laylat al-Qadr (Seeking Pardon)",
    "titleUrdu": "دعائے شبِ قدر (اللَّهُمَّ إِنَّكَ عَفُوٌّ)",
    "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "transliteration": "Allahumma innaka Afuwwun tuhibbul-afwa fa'fu anni",
    "urdu_translation": "اے اللہ! بے شک تو معاف فرمانے والا ہے، معافی کو پسند فرماتا ہے، پس مجھے معاف فرما دے۔",
    "english_translation": "O Allah, You are Forgiving and You love forgiveness, so forgive me.",
    "targetCount": 33,
    "virtueUrdu": "رسول اللہ ﷺ نے حضرت عائشہؓ کو شبِ قدر میں یہ خاص دعا مانگنے کی تلقین فرمائی۔ (ترمذی: 3513)",
    "virtueEn": "The Prophet ﷺ taught this prayer to Aisha (ra) for the Night of Decree. (Tirmidhi: 3513)",
    "source": "Jami at-Tirmidhi 3513",
    "category": "Pardon"
  },
  {
    "id": "dhikr-191",
    "day": 191,
    "titleEn": "SubhanAllahi wa bihamdihi (Glory & Praise be to Allah)",
    "titleUrdu": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "transliteration": "SubhanAllahi wa bihamdihi",
    "urdu_translation": "پاک ہے اللہ اور تمام تعریفیں اسی کے لیے ہیں۔",
    "english_translation": "Glory be to Allah and His is the praise.",
    "targetCount": 100,
    "virtueUrdu": "رسول اللہ ﷺ نے فرمایا: جو دن میں 100 بار یہ کہے اس کے گناہ معاف کر دیے جاتے ہیں اگرچہ سمندر کے جھاگ کے برابر ہوں۔ (بخاری: 6405)",
    "virtueEn": "Whoever says this 100 times a day, their sins will be forgiven even if like the foam of the sea. (Bukhari: 6405)",
    "source": "Sahih al-Bukhari 6405",
    "category": "Daily Dhikr"
  },
  {
    "id": "dhikr-192",
    "day": 192,
    "titleEn": "Durood-e-Ibrahimi (Blessings on the Prophet)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli ala Muhammadin wa ala aali Muhammad kama sallayta ala Ibrahima wa ala aali Ibrahima innaka Hamidum Majid",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسا کہ تو نے ابراہیمؑ اور ان کی آل پر رحمت نازل فرمائی۔",
    "english_translation": "O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "ایک بار درود بھیجنے پر اللہ دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔ (مسلم: 408)",
    "virtueEn": "Whoever sends blessings upon me once, Allah blesses him ten times. (Muslim: 408)",
    "source": "Sahih Muslim 408",
    "category": "Salawat"
  },
  {
    "id": "dhikr-193",
    "day": 193,
    "titleEn": "Treasure of Paradise (La Hawla wa la Quwwata)",
    "titleUrdu": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil-Aliyyil-Azim",
    "urdu_translation": "گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے۔ (صحیح بخاری: 6384)",
    "virtueEn": "This is a treasure from the treasures of Paradise. (Sahih al-Bukhari: 6384)",
    "source": "Sahih al-Bukhari 6384",
    "category": "Treasure of Paradise"
  },
  {
    "id": "dhikr-194",
    "day": 194,
    "titleEn": "Astaghfirullah (Seeking Forgiveness)",
    "titleUrdu": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal-Azim alladhi la ilaha illa Huwal-Hayyul-Qayyumu wa atubu ilayh",
    "urdu_translation": "میں عظمت والے اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ رہنے والا ہے اور میں اسی سے توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah the Supreme, besides Whom there is no deity, the Ever-Living, the Sustainer, and I repent unto Him.",
    "targetCount": 33,
    "virtueUrdu": "جو یہ استغفار پڑھے اس کے گناہ بخش دیے جاتے ہیں اگرچہ وہ میدانِ جنگ سے بھاگا ہو۔ (سنن ابی داؤد: 1517)",
    "virtueEn": "Whoever recites this will have their sins forgiven even if they fled from battle. (Abu Dawud: 1517)",
    "source": "Sunan Abi Dawud 1517",
    "category": "Istighfar"
  },
  {
    "id": "dhikr-195",
    "day": 195,
    "titleEn": "Ayat al-Kareema (Supplication of Prophet Yunus)",
    "titleUrdu": "آیتِ کریمہ (دعائے یونسؑ)",
    "arabic": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 33,
    "virtueUrdu": "جب بھی کوئی مسلمان کسی پریشانی میں یہ دعا مانگے گا اللہ اس کی پکار قبول فرمائے گا۔ (ترمذی: 3505)",
    "virtueEn": "No Muslim supplicates with this in distress except that Allah relieves him. (Tirmidhi: 3505)",
    "source": "Jami at-Tirmidhi 3505",
    "category": "Relief"
  },
  {
    "id": "dhikr-196",
    "day": 196,
    "titleEn": "HasbunAllahu wa ni'mal wakeel (Allah is Sufficient)",
    "titleUrdu": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    "arabic": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
    "transliteration": "HasbunAllahu wa ni'mal-wakeel, ni'mal-Mawla wa ni'man-Naseer",
    "urdu_translation": "ہمیں اللہ ہی کافی ہے اور وہ بہترین کارساز ہے، بہترین مددگار ہے۔",
    "english_translation": "Sufficient for us is Allah, and He is the best Disposer of affairs.",
    "targetCount": 33,
    "virtueUrdu": "حضرت ابراہیمؑ نے آگ میں ڈالے جاتے وقت یہ کلمات ادا کیے تھے۔ (صحیح بخاری: 4563)",
    "virtueEn": "Ibrahim (as) said this when cast into the fire, and Allah made it cool and safe. (Bukhari: 4563)",
    "source": "Sahih al-Bukhari 4563",
    "category": "Trust"
  },
  {
    "id": "dhikr-197",
    "day": 197,
    "titleEn": "The Four Great Words (Al-Baqiyat as-Salihat)",
    "titleUrdu": "سبحان اللہ، الحمد للہ، لا الہ الا اللہ، اللہ اکبر",
    "arabic": "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلَا إِلَهَ إِلَّا اللَّهُ ، وَاللَّهُ أَكْبَرُ",
    "transliteration": "SubhanAllahi wal-hamdulillahi wa la ilaha illallahu wallahu Akbar",
    "urdu_translation": "اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے۔",
    "english_translation": "Glory be to Allah, praise be to Allah, there is no deity but Allah, and Allah is the Greatest.",
    "targetCount": 33,
    "virtueUrdu": "یہ چار کلمات مجھے ان تمام چیزوں سے زیادہ محبوب ہیں جن پر سورج طلوع ہوتا ہے۔ (صحیح مسلم: 2695)",
    "virtueEn": "Saying these words is dearer to me than all upon which the sun rises. (Sahih Muslim: 2695)",
    "source": "Sahih Muslim 2695",
    "category": "Tasbih"
  },
  {
    "id": "dhikr-198",
    "day": 198,
    "titleEn": "Supplication for Divine Protection (Bismillahi alladhi)",
    "titleUrdu": "ہر قسم کے نقصان سے حفاظت کی دعا",
    "arabic": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    "transliteration": "Bismillahi alladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-Alim",
    "urdu_translation": "اللہ کے نام سے جس کے نام کی برکت سے زمین و آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے اور جاننے والا ہے۔",
    "english_translation": "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, All-Knowing.",
    "targetCount": 3,
    "virtueUrdu": "جو صبح و شام تین بار یہ پڑھے اسے کوئی اچانک آفت نقصان نہیں پہنچا سکتی۔ (سنن ابی داؤد: 5088)",
    "virtueEn": "Whoever recites this thrice in morning and evening will not be harmed by anything. (Abu Dawud: 5088)",
    "source": "Sunan Abi Dawud 5088",
    "category": "Protection"
  },
  {
    "id": "dhikr-199",
    "day": 199,
    "titleEn": "Sayyidul Istighfar (Master of Forgiveness)",
    "titleUrdu": "سید الاستغفار",
    "arabic": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    "transliteration": "Allahumma Anta Rabbi la ilaha illa Anta khalaqtani wa ana abduka wa ana ala ahdika wa wa'dika mastata'tu",
    "urdu_translation": "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، پس مجھے بخش دے۔",
    "english_translation": "O Allah, You are my Lord, none has the right to be worshiped but You. You created me and I am Your servant.",
    "targetCount": 3,
    "virtueUrdu": "جو شخص یقین کے ساتھ دن یا رات کو یہ دعا پڑھے اور وفات پا جائے تو وہ جنتی ہے۔ (بخاری: 6306)",
    "virtueEn": "Whoever recites this with firm faith and dies that day or night will enter Paradise. (Bukhari: 6306)",
    "source": "Sahih al-Bukhari 6306",
    "category": "Forgiveness"
  },
  {
    "id": "dhikr-200",
    "day": 200,
    "titleEn": "Supplication of Laylat al-Qadr (Seeking Pardon)",
    "titleUrdu": "دعائے شبِ قدر (اللَّهُمَّ إِنَّكَ عَفُوٌّ)",
    "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "transliteration": "Allahumma innaka Afuwwun tuhibbul-afwa fa'fu anni",
    "urdu_translation": "اے اللہ! بے شک تو معاف فرمانے والا ہے، معافی کو پسند فرماتا ہے، پس مجھے معاف فرما دے۔",
    "english_translation": "O Allah, You are Forgiving and You love forgiveness, so forgive me.",
    "targetCount": 33,
    "virtueUrdu": "رسول اللہ ﷺ نے حضرت عائشہؓ کو شبِ قدر میں یہ خاص دعا مانگنے کی تلقین فرمائی۔ (ترمذی: 3513)",
    "virtueEn": "The Prophet ﷺ taught this prayer to Aisha (ra) for the Night of Decree. (Tirmidhi: 3513)",
    "source": "Jami at-Tirmidhi 3513",
    "category": "Pardon"
  },
  {
    "id": "dhikr-201",
    "day": 201,
    "titleEn": "SubhanAllahi wa bihamdihi (Glory & Praise be to Allah)",
    "titleUrdu": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "transliteration": "SubhanAllahi wa bihamdihi",
    "urdu_translation": "پاک ہے اللہ اور تمام تعریفیں اسی کے لیے ہیں۔",
    "english_translation": "Glory be to Allah and His is the praise.",
    "targetCount": 100,
    "virtueUrdu": "رسول اللہ ﷺ نے فرمایا: جو دن میں 100 بار یہ کہے اس کے گناہ معاف کر دیے جاتے ہیں اگرچہ سمندر کے جھاگ کے برابر ہوں۔ (بخاری: 6405)",
    "virtueEn": "Whoever says this 100 times a day, their sins will be forgiven even if like the foam of the sea. (Bukhari: 6405)",
    "source": "Sahih al-Bukhari 6405",
    "category": "Daily Dhikr"
  },
  {
    "id": "dhikr-202",
    "day": 202,
    "titleEn": "Durood-e-Ibrahimi (Blessings on the Prophet)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli ala Muhammadin wa ala aali Muhammad kama sallayta ala Ibrahima wa ala aali Ibrahima innaka Hamidum Majid",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسا کہ تو نے ابراہیمؑ اور ان کی آل پر رحمت نازل فرمائی۔",
    "english_translation": "O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "ایک بار درود بھیجنے پر اللہ دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔ (مسلم: 408)",
    "virtueEn": "Whoever sends blessings upon me once, Allah blesses him ten times. (Muslim: 408)",
    "source": "Sahih Muslim 408",
    "category": "Salawat"
  },
  {
    "id": "dhikr-203",
    "day": 203,
    "titleEn": "Treasure of Paradise (La Hawla wa la Quwwata)",
    "titleUrdu": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
    "transliteration": "La hawla wa la quwwata illa billahil-Aliyyil-Azim",
    "urdu_translation": "گناہوں سے بچنے اور نیکی کرنے کی طاقت صرف اللہ کی توفیق سے ہے۔",
    "english_translation": "There is no power and no strength except with Allah, the Most High, the Most Supreme.",
    "targetCount": 33,
    "virtueUrdu": "یہ کلمہ جنت کے خزانوں میں سے ایک خزانہ ہے۔ (صحیح بخاری: 6384)",
    "virtueEn": "This is a treasure from the treasures of Paradise. (Sahih al-Bukhari: 6384)",
    "source": "Sahih al-Bukhari 6384",
    "category": "Treasure of Paradise"
  },
  {
    "id": "dhikr-204",
    "day": 204,
    "titleEn": "Astaghfirullah (Seeking Forgiveness)",
    "titleUrdu": "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    "arabic": "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    "transliteration": "Astaghfirullahal-Azim alladhi la ilaha illa Huwal-Hayyul-Qayyumu wa atubu ilayh",
    "urdu_translation": "میں عظمت والے اللہ سے بخشش مانگتا ہوں جس کے سوا کوئی معبود نہیں، جو ہمیشہ زندہ رہنے والا ہے اور میں اسی سے توبہ کرتا ہوں۔",
    "english_translation": "I seek forgiveness from Allah the Supreme, besides Whom there is no deity, the Ever-Living, the Sustainer, and I repent unto Him.",
    "targetCount": 33,
    "virtueUrdu": "جو یہ استغفار پڑھے اس کے گناہ بخش دیے جاتے ہیں اگرچہ وہ میدانِ جنگ سے بھاگا ہو۔ (سنن ابی داؤد: 1517)",
    "virtueEn": "Whoever recites this will have their sins forgiven even if they fled from battle. (Abu Dawud: 1517)",
    "source": "Sunan Abi Dawud 1517",
    "category": "Istighfar"
  },
  {
    "id": "dhikr-205",
    "day": 205,
    "titleEn": "Ayat al-Kareema (Supplication of Prophet Yunus)",
    "titleUrdu": "آیتِ کریمہ (دعائے یونسؑ)",
    "arabic": "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    "transliteration": "La ilaha illa Anta subhanaka inni kuntu minaz-zalimeen",
    "urdu_translation": "تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصوروار تھا۔",
    "english_translation": "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    "targetCount": 33,
    "virtueUrdu": "جب بھی کوئی مسلمان کسی پریشانی میں یہ دعا مانگے گا اللہ اس کی پکار قبول فرمائے گا۔ (ترمذی: 3505)",
    "virtueEn": "No Muslim supplicates with this in distress except that Allah relieves him. (Tirmidhi: 3505)",
    "source": "Jami at-Tirmidhi 3505",
    "category": "Relief"
  },
  {
    "id": "dhikr-206",
    "day": 206,
    "titleEn": "HasbunAllahu wa ni'mal wakeel (Allah is Sufficient)",
    "titleUrdu": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    "arabic": "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ",
    "transliteration": "HasbunAllahu wa ni'mal-wakeel, ni'mal-Mawla wa ni'man-Naseer",
    "urdu_translation": "ہمیں اللہ ہی کافی ہے اور وہ بہترین کارساز ہے، بہترین مددگار ہے۔",
    "english_translation": "Sufficient for us is Allah, and He is the best Disposer of affairs.",
    "targetCount": 33,
    "virtueUrdu": "حضرت ابراہیمؑ نے آگ میں ڈالے جاتے وقت یہ کلمات ادا کیے تھے۔ (صحیح بخاری: 4563)",
    "virtueEn": "Ibrahim (as) said this when cast into the fire, and Allah made it cool and safe. (Bukhari: 4563)",
    "source": "Sahih al-Bukhari 4563",
    "category": "Trust"
  },
  {
    "id": "dhikr-207",
    "day": 207,
    "titleEn": "The Four Great Words (Al-Baqiyat as-Salihat)",
    "titleUrdu": "سبحان اللہ، الحمد للہ، لا الہ الا اللہ، اللہ اکبر",
    "arabic": "سُبْحَانَ اللَّهِ ، وَالْحَمْدُ لِلَّهِ ، وَلَا إِلَهَ إِلَّا اللَّهُ ، وَاللَّهُ أَكْبَرُ",
    "transliteration": "SubhanAllahi wal-hamdulillahi wa la ilaha illallahu wallahu Akbar",
    "urdu_translation": "اللہ پاک ہے، تمام تعریفیں اللہ کے لیے ہیں، اللہ کے سوا کوئی معبود نہیں، اور اللہ سب سے بڑا ہے۔",
    "english_translation": "Glory be to Allah, praise be to Allah, there is no deity but Allah, and Allah is the Greatest.",
    "targetCount": 33,
    "virtueUrdu": "یہ چار کلمات مجھے ان تمام چیزوں سے زیادہ محبوب ہیں جن پر سورج طلوع ہوتا ہے۔ (صحیح مسلم: 2695)",
    "virtueEn": "Saying these words is dearer to me than all upon which the sun rises. (Sahih Muslim: 2695)",
    "source": "Sahih Muslim 2695",
    "category": "Tasbih"
  },
  {
    "id": "dhikr-208",
    "day": 208,
    "titleEn": "Supplication for Divine Protection (Bismillahi alladhi)",
    "titleUrdu": "ہر قسم کے نقصان سے حفاظت کی دعا",
    "arabic": "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    "transliteration": "Bismillahi alladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-Alim",
    "urdu_translation": "اللہ کے نام سے جس کے نام کی برکت سے زمین و آسمان کی کوئی چیز نقصان نہیں پہنچا سکتی اور وہ خوب سننے اور جاننے والا ہے۔",
    "english_translation": "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, All-Knowing.",
    "targetCount": 3,
    "virtueUrdu": "جو صبح و شام تین بار یہ پڑھے اسے کوئی اچانک آفت نقصان نہیں پہنچا سکتی۔ (سنن ابی داؤد: 5088)",
    "virtueEn": "Whoever recites this thrice in morning and evening will not be harmed by anything. (Abu Dawud: 5088)",
    "source": "Sunan Abi Dawud 5088",
    "category": "Protection"
  },
  {
    "id": "dhikr-209",
    "day": 209,
    "titleEn": "Sayyidul Istighfar (Master of Forgiveness)",
    "titleUrdu": "سید الاستغفار",
    "arabic": "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    "transliteration": "Allahumma Anta Rabbi la ilaha illa Anta khalaqtani wa ana abduka wa ana ala ahdika wa wa'dika mastata'tu",
    "urdu_translation": "اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں، تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں، پس مجھے بخش دے۔",
    "english_translation": "O Allah, You are my Lord, none has the right to be worshiped but You. You created me and I am Your servant.",
    "targetCount": 3,
    "virtueUrdu": "جو شخص یقین کے ساتھ دن یا رات کو یہ دعا پڑھے اور وفات پا جائے تو وہ جنتی ہے۔ (بخاری: 6306)",
    "virtueEn": "Whoever recites this with firm faith and dies that day or night will enter Paradise. (Bukhari: 6306)",
    "source": "Sahih al-Bukhari 6306",
    "category": "Forgiveness"
  },
  {
    "id": "dhikr-210",
    "day": 210,
    "titleEn": "Supplication of Laylat al-Qadr (Seeking Pardon)",
    "titleUrdu": "دعائے شبِ قدر (اللَّهُمَّ إِنَّكَ عَفُوٌّ)",
    "arabic": "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "transliteration": "Allahumma innaka Afuwwun tuhibbul-afwa fa'fu anni",
    "urdu_translation": "اے اللہ! بے شک تو معاف فرمانے والا ہے، معافی کو پسند فرماتا ہے، پس مجھے معاف فرما دے۔",
    "english_translation": "O Allah, You are Forgiving and You love forgiveness, so forgive me.",
    "targetCount": 33,
    "virtueUrdu": "رسول اللہ ﷺ نے حضرت عائشہؓ کو شبِ قدر میں یہ خاص دعا مانگنے کی تلقین فرمائی۔ (ترمذی: 3513)",
    "virtueEn": "The Prophet ﷺ taught this prayer to Aisha (ra) for the Night of Decree. (Tirmidhi: 3513)",
    "source": "Jami at-Tirmidhi 3513",
    "category": "Pardon"
  },
  {
    "id": "dhikr-211",
    "day": 211,
    "titleEn": "SubhanAllahi wa bihamdihi (Glory & Praise be to Allah)",
    "titleUrdu": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "arabic": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    "transliteration": "SubhanAllahi wa bihamdihi",
    "urdu_translation": "پاک ہے اللہ اور تمام تعریفیں اسی کے لیے ہیں۔",
    "english_translation": "Glory be to Allah and His is the praise.",
    "targetCount": 100,
    "virtueUrdu": "رسول اللہ ﷺ نے فرمایا: جو دن میں 100 بار یہ کہے اس کے گناہ معاف کر دیے جاتے ہیں اگرچہ سمندر کے جھاگ کے برابر ہوں۔ (بخاری: 6405)",
    "virtueEn": "Whoever says this 100 times a day, their sins will be forgiven even if like the foam of the sea. (Bukhari: 6405)",
    "source": "Sahih al-Bukhari 6405",
    "category": "Daily Dhikr"
  },
  {
    "id": "dhikr-212",
    "day": 212,
    "titleEn": "Durood-e-Ibrahimi (Blessings on the Prophet)",
    "titleUrdu": "درودِ ابراہیمی",
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "transliteration": "Allahumma salli ala Muhammadin wa ala aali Muhammad kama sallayta ala Ibrahima wa ala aali Ibrahima innaka Hamidum Majid",
    "urdu_translation": "اے اللہ! رحمت نازل فرما محمد ﷺ پر اور ان کی آل پر جیسا کہ تو نے ابراہیمؑ اور ان کی آل پر رحمت نازل فرمائی۔",
    "english_translation": "O Allah, send blessings upon Muhammad and upon the family of Muhammad as You sent blessings upon Ibrahim.",
    "targetCount": 10,
    "virtueUrdu": "ایک بار درود بھیجنے پر اللہ دس رحمتیں نازل فرماتا ہے اور دس درجات بلند کرتا ہے۔ (مسلم: 408)",
    "virtueEn": "Whoever sends blessings upon me once, Allah blesses him ten times. (Muslim: 408)",
    "source": "Sahih Muslim 408",
    "category": "Salawat"
  }
];

export default {
  month: 7,
  monthName: "July",
  startDay: 182,
  endDay: 212,
  verses,
  hadiths,
  tafseers,
  dhikrs
};
