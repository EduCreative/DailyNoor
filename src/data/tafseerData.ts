import { Verse } from '../types';

export interface TafseerDetail {
  day: number;
  surah: string;
  surah_ar: string;
  surahNumber: number;
  ayah: number;
  arabic: string;
  urdu_translation: string;
  tafseerUrdu: string;
  tafseerEn: string;
  sourceNameUrdu: string;
  sourceNameEn: string;
  asbabAlNuzulUrdu: string;
  asbabAlNuzulEn: string;
  keyLessonsUrdu: string[];
  keyLessonsEn: string[];
  reflectionsUrdu: string;
  reflectionsEn: string;
}

export const EMBEDDED_TAFSEER_LIST: TafseerDetail[] = [
  {
    day: 1,
    surah: "Al-Fatiha",
    surah_ar: "سورة الفاتحة",
    surahNumber: 1,
    ayah: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    urdu_translation: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔",
    tafseerUrdu: `سورۃ الفاتحہ کی یہ آیت توحیدِ عبادۃ اور توحیدِ استعانت کا عظیم ترین محور ہے۔ امام ابن کثیرؒ کے مطابق "إِيَّاكَ نَعْبُدُ" شِرک سے براءت ہے اور "إِيَّاكَ نَسْتَعِينُ" اپنے حول و قوّت سے براءت ہے۔ 

انسان کا کمال یہ ہے کہ وہ تسلیم کرے کہ نہ تو وہ اللہ کی توفیق کے بغیر عبادت کر سکتا ہے اور نہ ہی دنیا و آخرت کے کسی کام میں کامیابی حاصل کر سکتا ہے۔ لفظ "إِيَّاكَ" (صرف تو ہی) کو فعل سے پہلے لانا حصر اور تخصیص پیدا کرتا ہے، یعنی عبادت اور حقیقی استعانت کا مستحق صرف اور صرف رب ذوالجلال ہے۔`,
    tafseerEn: `"You alone we worship, and You alone we ask for help." This ayah forms the core of Islamic Monotheism (Tawhid). Scholars highlight that placing "You alone" (Iyyaka) before "we worship" creates exclusivity (Khasais) — signifying that worship belongs solely to Allah without any partners.

Ibn Kathir notes that 'Iyyaka Na'budu' frees the believer from polytheism (Shirk), while 'Iyyaka Nasta'een' frees one from self-pride and relying on worldly strength alone.`,
    sourceNameUrdu: "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
    sourceNameEn: "Tafseer Ibn Kathir & Asan Quran",
    asbabAlNuzulUrdu: "سورة الفاتحة مکی سورۃ ہے جو مکہ مکرمہ میں بعثت کے ابتدائی دور میں نازل ہوئی۔ اس آیت کا بنیادی مقصد بندوں کو اللہ تعالیٰ کے حضور مانگنے اور بندگی کا صحیح ادب سکھانا ہے۔",
    asbabAlNuzulEn: "Surah Al-Fatiha was revealed in Makkah during the early period of Prophethood to teach believers the proper etiquette of prayer and supplication.",
    keyLessonsUrdu: [
      "تمام عبادات (نماز، دعا، نذر، خوف، امید) میں صرف اللہ کی رضا اور یکسوئی پیشِ نظر ہو۔",
      "مشکلات اور حاجت روائی میں سب سے پہلے رب کے حضور دستِ سوال دراز کریں۔",
      "انسان کی اپنی طاقت اور تدبیر اللہ کی مشیت اور نصرت کے بغیر ادھوری ہے۔",
      "دعا میں پہلے حمد و ثنا اور بندگی کا اقرار، پھر حاجت کا سوال کرنا چاہیے۔"
    ],
    keyLessonsEn: [
      "Direct all acts of worship exclusively to Allah without associates.",
      "Seek divine assistance before relying solely on human means.",
      "Acknowledge human weakness and divine omnipotence.",
      "Begin prayers with praise and submission before making personal requests."
    ],
    reflectionsUrdu: "آج اپنے دن کا آغاز کرتے ہوئے یہ عزم کریں کہ ہر نماز میں جب اس آیت پر پہنچیں تو دل میں یہ احساس بیدار ہو کہ میری زندگی کا مالک اور مددگار صرف اللہ ہے۔",
    reflectionsEn: "When reciting this verse in daily prayers, consciously feel your heart submitting to Allah's exclusive authority and support."
  },
  {
    day: 2,
    surah: "Al-Baqarah",
    surah_ar: "سورة البقرة",
    surahNumber: 2,
    ayah: 152,
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    urdu_translation: "پس تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    tafseerUrdu: `"تم مجھے یاد رکھو، میں تمہیں یاد رکھوں گا" — یہ کائنات کے مالک کا انسان کے ساتھ سب سے شاندار اور دلنشین وعدہ ہے۔ اللہ کا بندے کو یاد کرنے کا مطلب یہ ہے کہ اللہ اس پر اپنی خاص رحمتیں، مغفرت، عافیت اور سکون نازل فرماتا ہے۔ 

حضرت عبداللہ بن عباسؓ فرماتے ہیں: "تم مجھے میری اطاعت کے ساتھ یاد کرو، میں تمہیں اپنی مغفرت اور نصرت کے ساتھ یاد کروں گا۔" شکر نعمتوں میں بقا اور برکت لاتا ہے، جبکہ ناشکری نعمتوں کے سلب ہونے کا سب سے بڑا سبب بنتی ہے۔`,
    tafseerEn: `"So remember Me; I will remember you. And be grateful to Me and do not deny Me." This verse presents one of the most comforting divine promises in the Quran. Allah's remembrance of a servant manifests through mercy, forgiveness, tranquility, and divine protection.

Ibn Abbas (RA) explained this as: "Remember Me through obedience, and I will remember you through forgiveness and support." Gratitude protects existing blessings and invites divine increase.`,
    sourceNameUrdu: "تفسیر معارف القرآن (مفتی محمد شفیعؒ)",
    sourceNameEn: "Ma'ariful Quran (Mufti Muhammad Shafi)",
    asbabAlNuzulUrdu: "تحویلِ قبلہ کے احکام اور امتِ مسلمہ کو تحفہِ قبلہ ملنے کے بعد اللہ تعالیٰ نے صحابہ کرام اور مومنین کو ان کی عظیم الشان ذمہ داری اور شکر گزاری کی تلقین فرمائی۔",
    asbabAlNuzulEn: "Revealed following the change of Qibla to the Kaabah, reminding the Ummah to express gratitude for spiritual guidance.",
    keyLessonsUrdu: [
      "ذکرِ الٰہی سے دلوں کو اطمینان، طہارت اور روحانی طاقت ملتی ہے۔",
      "شکر صرف زبان کا بول نہیں بلکہ اعضاء سے اللہ کی اطاعت کا نام ہے۔",
      "ناشکری اور گلہ شکوہ نعمتوں کے زوال کا باعث بنتا ہے۔",
      "جب انسان تنہائی یا مجلس میں اللہ کو یاد کرتا ہے، اللہ عرش پر فرشتوں میں اس کا ذکر فرماتا ہے۔"
    ],
    keyLessonsEn: [
      "Remembrance of Allah purifies the heart and eases anxieties.",
      "True gratitude combines verbal praise, heart conviction, and righteous deeds.",
      "Ingratitude leads to the withdrawal of spiritual and material blessings.",
      "Remembering Allah in solitude yields intimate divine companionship."
    ],
    reflectionsUrdu: "آج کے دن زبان کو استغفار، درود شریف اور الحمد للہ سے تر رکھیں اور حاصل شدہ نعمتوں پر دل سے شکر بجا لائیں۔",
    reflectionsEn: "Keep your tongue moist with the remembrance of Allah and actively count your daily blessings."
  },
  {
    day: 3,
    surah: "Al-Baqarah",
    surah_ar: "سورة البقرة",
    surahNumber: 2,
    ayah: 186,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    urdu_translation: "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں تو (کہہ دیجئے کہ) میں تو بہت قریب ہوں، پکارنے والے کی دعا قبول کرتا ہوں جب وہ مجھے پکارے۔",
    tafseerUrdu: `قرآنِ مجید میں جہاں بھی صحابہ کے سوالات آئے (مثلاً چاند کے بارے میں، یا خرچ کرنے کے بارے میں)، وہاں اللہ نے فرمایا: "قُل" (آپ ان سے فرما دیجئے)۔ لیکن جب بندوں کی دعا اور قربت کا ذکر آیا تو اللہ نے "قُل" کا لفظ لائے بغیر براہِ راست فرمایا: "فَإِنِّي قَرِيبٌ" (میں تو قریب ہی ہوں)۔

یہ اندازِ بیان ظاہر کرتا ہے کہ دعا میں بندے اور رب کے درمیان کوئی واسطہ یا فاصلہ نہیں ہے۔ اللہ بندے کی شہ رگ سے بھی زیادہ قریب ہے اور ہر پکارنے والے کی التجا کو سنتا اور اس کا بہترین جواب دیتا ہے۔`,
    tafseerEn: `"And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me." 

In all other Quranic questions ("They ask you about..."), Allah instructs the Prophet ﷺ with "Say (Qul)". However, regarding prayer and nearness, Allah omits "Say" and speaks directly to humanity ("Indeed I am near"), demonstrating divine intimacy and direct response without barriers.`,
    sourceNameUrdu: "تفسیر ابن کثیر و فی ظلال القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & In the Shade of the Quran",
    asbabAlNuzulUrdu: "ایک اعرابی نے نبی کریم ﷺ سے پوچھا: 'یا رسول اللہ! کیا ہمارا رب قریب ہے کہ ہم اس سے مناجات (سرگوشی) کریں یا دور ہے کہ ہم پکاریں؟' اس پر یہ مبارک آیت نازل ہوئی۔",
    asbabAlNuzulEn: "A Bedouin asked the Prophet ﷺ whether Allah was near so he could whisper or far so he needed to shout. This verse descended confirming Allah's immediate proximity.",
    keyLessonsUrdu: [
      "دعا مومن کا سب سے بڑا ہتھیار اور عبادات کا مغز ہے۔",
      "کسی بھی پریشانی میں مایوس ہونے کے بجائے خلوصِ نیت سے رب کو پکاریں۔",
      "دعا کی قبولیت کی مختلف صورتیں ہیں: فوری ملنا، آفت کا ٹلنا، یا آخرت میں ذخیرہ ہونا۔",
      "اللہ سے مانگنے میں کسی واسطے یا وقت کا محتاج ہونے کی ضرورت نہیں۔"
    ],
    keyLessonsEn: [
      "Supplication is the essence of worship and a believer's direct connection to the Creator.",
      "Never despair in du'a; Allah answers either immediately, wards off harm, or saves it for the Hereafter.",
      "Allah is closer to the servant than their own jugular vein.",
      "Pray with certainty and humility."
    ],
    reflectionsUrdu: "آج کے دن اپنے دل کی باتیں، پریشانیاں اور تمنائیں بغیر کسی خوف کے اللہ تعالیٰ کے سامنے رکھ دیں۔",
    reflectionsEn: "Take a quiet moment today to converse intimately with Allah, sharing your hopes and concerns directly."
  },
  {
    day: 4,
    surah: "Al-Imran",
    surah_ar: "سورة آل عمران",
    surahNumber: 3,
    ayah: 159,
    arabic: "فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ ۖ وَلَوْ كُنتَ فَظًّا غَلِيظَ الْقَلْبِ لَانفَضُّوا مِنْ حَوْلِكَ",
    urdu_translation: "پس اللہ کی خاص رحمت سے آپ ان کے لئے نرم دل بن گئے۔ اور اگر آپ تند خو اور سخت دل ہوتے تو یہ سب آپ کے گرد سے منتشر ہو جاتے۔",
    tafseerUrdu: `یہ آیت مبارکہ غزوۂ احد کے بعد نازل ہوئی۔ بعض صحابہ سے اجتہادی غلطی کے باوجود نبی کریم ﷺ نے ان پر سخت گیری نہیں فرمائی بلکہ نرمی اور محبت کا رویہ برقرار رکھا۔ اللہ تعالیٰ نے اس نرمی کو اپنی خاص رحمت قرار دیا۔

اس آیت میں دعوت و اصلاح، خاندانی قیادت، اور انتظامی امور کا سنہرا قانون بیان کیا گیا ہے: نرمی، درگزر، مغفرت کی دعا اور باہمی مشاورت۔ سختی اور بدکلامی دلوں کو توڑتی ہے جبکہ نرمی اور شفقت دلوں کو جوڑتی ہے۔`,
    tafseerEn: `"So by mercy from Allah, [O Muhammad], you were lenient with them. And if you had been rude [in speech] and harsh in heart, they would have disbanded from about you."

Revealed following the Battle of Uhud, Allah praises the Prophet's ﷺ compassionate disposition. Leniency, forgiveness, praying for others, and mutual consultation are the foundational pillars of effective leadership and harmonious family life.`,
    sourceNameUrdu: "تفسیر ضیاء القرآن (پیر محمد کرم شاہؒ)",
    sourceNameEn: "Zia ul Quran & Tafseer Ibn Kathir",
    asbabAlNuzulUrdu: "غزوۂ احد کے نازک موقع کے بعد مسلمان غمگین تھے، اللہ نے اپنے محبوب ﷺ کے اخلاقِ کریمانہ کی تعریف فرمائی اور نرمی و عفو کا حکم دیا۔",
    asbabAlNuzulEn: "Revealed after Uhud to console the believers and reinforce the Prophet's loving and forgiving leadership style.",
    keyLessonsUrdu: [
      "نرمی، مسکراہٹ اور میٹھی زبان وہ نبوی اخلاق ہیں جو رشتوں میں برکت لاتے ہیں۔",
      "دوسروں کی غلطیوں پر طعنہ دینے کے بجائے عفو و درگزر اور استغفار کی عادت بنائیں۔",
      "گھر اور اداروں کے فیصلوں میں مشاورت (مشورہ) سے کام لیں۔",
      "غصہ اور سخت دلی دعوت اور اصلاح کا راستہ بند کر دیتی ہے۔"
    ],
    keyLessonsEn: [
      "Softness and emotional intelligence win hearts where harshness creates distance.",
      "Practice forgiveness and pray for those who make mistakes.",
      "Incorporate consultation (Shura) in household and group decisions.",
      "Gentleness is an ornament for every speech and action."
    ],
    reflectionsUrdu: "آج کے دن اپنے گھر والوں، دوستوں یا ماتحتوں کے ساتھ گفتگو میں خاص نرمی اور پیار کا لہجہ اختیار کریں۔",
    reflectionsEn: "Choose gentle words and a calm demeanor in all conversations with family and colleagues today."
  },
  {
    day: 5,
    surah: "Al-Baqarah",
    surah_ar: "سورة البقرة",
    surahNumber: 2,
    ayah: 286,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكتَسَبَتْ",
    urdu_translation: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا، جو اچھائی وہ کرے گی اس کا فائدہ اسی کو ہے اور جو برائی کرے گی اس کا وبال اسی پر ہے۔",
    tafseerUrdu: `سورۃ البقرہ کی یہ آخری آیت اسلام کی عدالت، رحمت اور وسعت کی عظیم مثال ہے۔ جب سابقہ آیت نازل ہوئی اور صحابہ کرام اپنے دلوں کے خیاالت پر بھی محاسبے کے خوف سے کانپ اٹھے، تو اللہ تعالیٰ نے یہ آیت نازل فرما کر تسلی دی کہ شریعت میں کوئی بھی حکم انسان کی برداشت اور طاقت سے باہر نہیں ہے۔

ہر انسان اپنے اختیاری اعمال کا خود ذمہ دار ہے۔ نیکی کی نیت پر بھی ثواب ملتا ہے جبکہ برائی کا وبال صرف ارتکاب پر ہی ہوتا ہے۔`,
    tafseerEn: `"Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned."

This landmark verse underscores divine mercy and justice. When companions feared accountability for stray thoughts, Allah relieved them, affirming that commandments align strictly with human capability and personal responsibility.`,
    sourceNameUrdu: "تفسیر التفسیر المیسر و معارف القرآن",
    sourceNameEn: "Tafseer Al-Muyassar & Ma'ariful Quran",
    asbabAlNuzulUrdu: "صحابہ کرامؓ نے جب آیت 'وَإِن تُبْدُوا مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ' سنی تو رو پڑے، جس پر اللہ نے یہ آیت نازل کر کے مشقت ختم فرما دی۔",
    asbabAlNuzulEn: "Revealed to ease the anxiety of the Sahabah after hearing an earlier verse about accountability of hidden thoughts.",
    keyLessonsUrdu: [
      "زندگی میں آنے والی کوئی بھی آزمائش یا ذمہ داری انسان کی سکت سے زیادہ نہیں ہوتی۔",
      "اللہ تعالیٰ کا نظامِ عدل ہر فرد کو اس کی ذاتی محنت کا ثمر دیتا ہے۔",
      "گناہ کی نیت چھوڑ دینے پر بھی نیکی لکھی جاتی ہے۔",
      "مشکلات میں ہمت ہارنے کے بجائے اللہ پر بھروسہ رکھ کر کوشش جاری رکھیں۔"
    ],
    keyLessonsEn: [
      "No trial, responsibility, or hardship exceeds your spiritual and mental resilience.",
      "Divine law is built upon ease, fairness, and individual accountability.",
      "Abandoning a sinful desire for Allah's sake is rewarded as a good deed.",
      "Trust Allah's wisdom when navigating life's demanding periods."
    ],
    reflectionsUrdu: "اگر آپ کسی مشکل یا دباؤ کا شکار ہیں تو اس آیت کو بار بار پڑھیں اور یقین رکھیں کہ آپ اس آزمائش سے نکل سکتے ہیں۔",
    reflectionsEn: "Whenever feeling overwhelmed, recite this verse to anchor your soul in Allah's protective bounds."
  },
  {
    day: 6,
    surah: "Ash-Sharh",
    surah_ar: "سورة الشرح",
    surahNumber: 94,
    ayah: 5,
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    urdu_translation: "پس یقیناً مشکل کے ساتھ آسانی ہے، بے شک مشکل کے ساتھ آسانی ہے۔",
    tafseerUrdu: `سورۃ الشرح کی یہ آیات تسلی اور امید کا لامتناہی پیغام ہیں۔ عربی قواعد کے مطابق "العُسْرِ" (مشکل) معرفہ (Definite) ہے اور "يُسْرًا" (آسانی) نکرہ (Indefinite) ہے۔ اس بنا پر لغوی اعتبار سے ایک ہی مشکل کا ذکر ہے جبکہ آسانی دو الگ اور وسیع شکلوں میں متوقع ہے۔

علماء و مفسرین کا قول ہے: "ایک مشکل دو آسانیوں پر ہرگز غالب نہیں آ سکتی۔" ہر تنگی کے ساتھ ہی کشادگی کا بیج موجود ہوتا ہے۔`,
    tafseerEn: `"For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease."

Grammatically in Arabic, 'Al-Usr' (hardship) is repeated with a definite article representing a single trial, whereas 'Yusran' (ease) is indefinite and doubled, symbolizing abundant and varied relief surrounding every hardship.`,
    sourceNameUrdu: "تفسیر تدبر قرآن (مولانا امین احسن اصلاحیؒ)",
    sourceNameEn: "Tadabbur-e-Quran & Tafseer Ibn Kathir",
    asbabAlNuzulUrdu: "مکہ مکرمہ میں جب کفارِ قریش نے مسلمانوں پر معاشی و معاشرتی تنگی پیدا کر رکھی تھی، تب نبی کریم ﷺ اور صحابہ کو تسلی دینے کے لیے یہ سورۃ نازل ہوئی۔",
    asbabAlNuzulEn: "Revealed in Makkah during intense persecution to instill unbreakable hope and resilience in the believers' hearts.",
    keyLessonsUrdu: [
      "ہر رات کے بعد صبح کا طلوع ہونا کائنات کا آفاقی قانون ہے۔",
      "مشکل وقت عارضی ہوتا ہے، اس کے بعد ملنے والی آسانی دائمی اور اعلیٰ ہوتی ہے۔",
      "آزمائش کے دوران صبر اور امید کا دامن تھامے رکھنا ایمان کی علامت ہے۔",
      "اللہ پر حسنِ ظن رکھنے والے کو کبھی مایوسی نہیں ہوتی۔"
    ],
    keyLessonsEn: [
      "Hardship is temporary; divine relief is multi-faceted and enduring.",
      "Maintain optimistic faith (Husn al-Zann) during difficult periods.",
      "Trials are spiritual incubators preparing you for greater blessings.",
      "No dark period lasts forever; ease accompanies the trial itself."
    ],
    reflectionsUrdu: "اپنے ماضی کی ان سختیوں کو یاد کریں جن کے بعد اللہ نے آپ کو کس قدر آسانیاں اور راستے عطا فرمائے۔",
    reflectionsEn: "Reflect on past hardships and notice how divine relief eventually arrived from unexpected angles."
  },
  {
    day: 7,
    surah: "Al-Hujurat",
    surah_ar: "سورة الحجرات",
    surahNumber: 49,
    ayah: 10,
    arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
    urdu_translation: "مومن تو آپس میں بھائی بھائی ہی ہیں، پس اپنے دو بھائیوں کے درمیان صلح کروا دیا کرو اور اللہ سے ڈرو تاکہ تم پر رحم کیا جائے۔",
    tafseerUrdu: `یہ آیت اسلامی معاشرت کا بنیادی سنگِ بنیاد ہے۔ اللہ تعالیٰ نے ایمان والوں کے تعلق کو نسی اور نسبی تعلقات سے بڑھ کر ایک عالمگیر ایمانی اخوت (روحانی بھائی چارے) کا نام دیا ہے۔

جب دو مسلمانوں یا دو رشتہ داروں میں اختلاف ہو جائے تو دیگر مسلمانوں کا فرض ہے کہ وہ خاموش تماشائی نہ بنیں بلکہ غیر جانبدار ہو کر صلح صفائی کروائیں۔ باہمی صلح کروانا اللہ کی رحمت کے نزول کا سب سے بڑا ذریعہ ہے۔`,
    tafseerEn: `"The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy."

This foundational verse establishes faith brotherhood above tribal or national ties. When disputes arise among believers, the community is commanded to intervene justly and restore peaceful bonds.`,
    sourceNameUrdu: "تفسیر انوار البیان و معارف القرآن",
    sourceNameEn: "Anwar ul Bayan & Ma'ariful Quran",
    asbabAlNuzulUrdu: "انصار کے دو قبیلوں کے درمیان معمولی بات پر جھگڑا ہو گیا تھا، جس پر اللہ تعالیٰ نے ایمانی رشتوں کی پاسداری اور صلح کا حکم صادر فرمایا۔",
    asbabAlNuzulEn: "Revealed to resolve a dispute between two groups of Ansar, establishing peace-making as an essential duty.",
    keyLessonsUrdu: [
      "ایمانی رشتہ زبان، رنگ، نسل اور علاقائیت کے تعصبات سے اونچا ہے۔",
      "دو مسلمانوں میں صلح کروانا نفل نماز اور روزے سے بھی زیادہ اجر کا باعث ہے۔",
      "غیبت، بدگمانی اور طعنہ زنی بھائی چارے کی جڑیں کاٹتی ہیں۔",
      "معاشرتی امن و اتحاد اللہ کے تقویٰ سے مشروط ہے۔"
    ],
    keyLessonsEn: [
      "Spiritual brotherhood transcends race, language, and cultural divides.",
      "Reconciling broken relationships yields immense divine rewards.",
      "Avoid backbiting, suspicion, and insulting labels that erode brotherhood.",
      "Peace and unity in the Ummah attract divine mercy."
    ],
    reflectionsUrdu: "اگر آپ کی کسی مسلمان بھائی یا رشتہ دار سے ناچاقی ہے تو آج آگے بڑھ کر سلام اور صلح کا پیغام بھیجیں۔",
    reflectionsEn: "Initiate reconciliation today with anyone with whom you've experienced friction or silence."
  },
  {
    day: 8,
    surah: "Al-Kahf",
    surah_ar: "سورة الكهف",
    surahNumber: 18,
    ayah: 46,
    arabic: "الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا",
    urdu_translation: "مال اور اولاد تو دنیاوی زندگی کی زینت ہیں، اور باقی رہنے والی نیکیاں تیرے رب کے نزدیک ثواب اور امید کے لحاظ سے کہیں بہتر ہیں۔",
    tafseerUrdu: `یہ آیت انسان کی ترجیحات کی درست نشاندہی کرتی ہے۔ مال اور اولاد دنیا کی عارضی زبیائش اور امتحان ہیں، جن پر غرور یا غفلت جائز نہیں۔ اصل پائیدار سرمایہ "الْبَاقِيَاتُ الصَّالِحَاتُ" یعنی وہ نیک اعمال اور تسبیحات ہیں جو آخرت میں ساتھ جائیں گی۔

حضرت ابن عباسؓ اور جمہور مفسرین کے مطابق "الْبَاقِيَاتُ الصَّالِحَاتُ" سے مراد سبحان اللہ، الحمد للہ، لا الہ الا اللہ، اللہ اکبر کا ذکر، پانچ وقت کی نمازیں اور دیگر نیکی کے مستقل کام ہیں۔`,
    tafseerEn: `"Wealth and children are [but] adornment of the worldly life. But the enduring good deeds are better in the sight of your Lord for reward and better for [one's] hope."

Contrasts transient worldly adornments with lasting spiritual investments ('Al-Baqiyat Al-Salihat'). Scholars define these enduring deeds as the remembrance of Allah (Tasbeeh, Tahmeed, Takbeer), fard prayers, and continuous charity.`,
    sourceNameUrdu: "تفسیر ابن کثیر و تفہیم القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Quranic Reflections",
    asbabAlNuzulUrdu: "مکہ کے مالدار کفار اپنے مال و اولاد پر تکبر کرتے تھے اور غریب مسلمانوں کو حقیر سمجھتے تھے، جس پر یہ حقیقت واضح کی گئی۔",
    asbabAlNuzulEn: "Addressing Makkan elites who flexed material riches, reminding humanity of eternal spiritual currency.",
    keyLessonsUrdu: [
      "دنیاوی مال اور اولاد کو آخرت کا ذریعہ بنائیں، نہ کہ غفلت کا سبب۔",
      "تسبیح و اذکار اور نمازیں وہ خزانہ ہیں جو قبر اور حشر میں کام آئیں گے۔",
      "عارضی چیزوں پر تکبر اور فخر کرنا نادانی ہے۔",
      "مستقل نیکیوں کی عادت ڈالیں جو آپ کے جانے کے بعد بھی صدقہ جاریہ بنیں۔"
    ],
    keyLessonsEn: [
      "Utilize worldly riches and family as means to earn the Hereafter.",
      "The remembrance of Allah generates permanent spiritual dividends.",
      "Do not anchor your self-worth solely in worldly success or stature.",
      "Invest daily in righteous habits that outlive your physical presence."
    ],
    reflectionsUrdu: "آج کے دن کچھ وقت نکال کر 100 مرتبہ 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ' کا ورد کریں۔",
    reflectionsEn: "Dedicate time today to repeat Tasbeeh and build your eternal treasure in Paradise."
  },
  {
    day: 9,
    surah: "Ar-Rahman",
    surah_ar: "سورة الرحمن",
    surahNumber: 55,
    ayah: 60,
    arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
    urdu_translation: "کیا نیکی اور بھلائی کا بدلہ نیکی کے سوا کچھ اور بھی ہو سکتا ہے؟",
    tafseerUrdu: `یہ آیت مبارکہ بندگی اور اخلاق کا سنہرا اور خوبصورت ترین قانون پیش کرتی ہے۔ "احسان" کا مطلب ہے کسی کام کو کامل خوبصورتی، خلوص اور حق سے زیادہ بھلائی کے ساتھ انجام دینا۔

جو بندہ دنیا میں اللہ کی بندگی میں احسان کی روش اپنائے گا (یعنی یوں عبادت کرے جیسے وہ اللہ کو دیکھ رہا ہے) اور بندوں کے ساتھ احسان کرے گا، اللہ تعالیٰ کا وعدہ ہے کہ وہ اس کا بدلہ جنت، اپنی رضا اور بے اندازہ کرم (احسان) کی صورت میں دے گا۔`,
    tafseerEn: `"Is the reward for good [anything] but good?"

Presents a beautiful universal law: Excellence (Ihsan) yields divine excellence in return. When a believer worships Allah with sincerity and treats creation with nobility, Allah rewards them with Paradise, Divine Contentment, and Unending Grace.`,
    sourceNameUrdu: "تفسیر معارف القرآن و التفسیر المیسر",
    sourceNameEn: "Ma'ariful Quran & Tafseer Al-Muyassar",
    asbabAlNuzulUrdu: "جنت کے انعامات اور مقامِ احسان کا ذکر کرنے کے بعد اللہ تعالیٰ نے اپنے عمومی اور خصوصی احسان کا اصول بیان فرمایا۔",
    asbabAlNuzulEn: "Concludes a vibrant passage describing Paradise, affirming that noble efforts merit divine generosity.",
    keyLessonsUrdu: [
      "عبادات میں کمال اور خلوصِ نیت پیدا کریں۔",
      "دوسروں کے ساتھ برائی کا جواب بھی احسان اور بھلائی سے دینے کی کوشش کریں۔",
      "اللہ کا احسان اپنے بندوں پر ہر انسانی عمل کے مقابلے میں بے شمار گنا بڑا ہوتا ہے۔",
      "احسان کا رویہ رشتوں میں محبت اور دلوں میں عزت پیدا کرتا ہے۔"
    ],
    keyLessonsEn: [
      "Strive for perfection (Ihsan) in worship and social interactions.",
      "Respond to shortcomings or negativity with grace and good conduct.",
      "Allah's reciprocal goodness exponentially surpasses human efforts.",
      "Cultivate an empathetic and generous spirit in daily affairs."
    ],
    reflectionsUrdu: "آج کسی ایسے شخص کے ساتھ کوئی نیکی اور احسان کریں جس نے ماضی میں آپ کے ساتھ ناانصافی یا سختی کی ہو۔",
    reflectionsEn: "Perform an anonymous act of kindness today for someone without expecting anything back."
  },
  {
    day: 10,
    surah: "Al-Asr",
    surah_ar: "سورة العصر",
    surahNumber: 103,
    ayah: 1,
    arabic: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    urdu_translation: "زمانے کی قسم! بے شک انسان خسارے میں ہے، سوائے ان کے جو ایمان لائے اور نیک عمل کیے اور ایک دوسرے کو حق کی تلقین اور صبر کی وصیت کرتے رہے۔",
    tafseerUrdu: `امام شافعیؒ فرماتے ہیں: "اگر لوگ صرف اس ایک سورۃ پر غور و فکر کر لیں تو یہ ان کی ہدایت کے لیے کافی ہے۔" اللہ تعالیٰ نے زمانے (وقت) کی قسم کھا کر فرمایا کہ تمام انسان خسارے اور تباہی میں ہیں، سوائے ان کے جن میں چار صفات ہوں:

1۔ سچا ایمان 2۔ اعمالِ صالحہ 3۔ ایک دوسرے کو حق و سچائی کی وصیت 4۔ مشکلات اور دین پر صبر کی تلقین۔ وقت انسان کا سب سے قیمتی اور تیزی سے پگھلتا ہوا سرمایہ ہے۔`,
    tafseerEn: `"By time, indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience."

Imam Al-Shafi'i famously remarked that if Allah had revealed only Surah Al-Asr, it would be sufficient guidance for humanity. Time is a melting asset. Salvation requires four pillars: Faith, Good Deeds, Mutual Encouragement to Truth, and Mutual Encouragement to Patience.`,
    sourceNameUrdu: "تفسیر ابن کثیر و فی ظلال القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & In the Shade of the Quran",
    asbabAlNuzulUrdu: "عرب کے لوگ شام کے وقت بیٹھ کر زمانے کو برا بھلا کہتے تھے، اللہ نے زمانے کی قسم کھا کر بتایا کہ زمانہ نہیں بلکہ انسان کا وقت کا ضیاع ہی اس کا اصل خسارہ ہے۔",
    asbabAlNuzulEn: "Revealed when Arabs blamed time for their misfortunes, correcting their worldview to focus on purposeful living.",
    keyLessonsUrdu: [
      "وقت کی قدر کریں، گزرا ہوا ایک لمحہ بھی واپس نہیں آ سکتا۔",
      "صرف ذاتی نیکی کافی نہیں، دوسروں کو بھی خیر اور حق کی طرف بلانا ضروری ہے۔",
      "حق کی راہ میں آنے والی مشکلات پر صبر کا باہمی درس دیں۔",
      "فضول لغویات سے بچ کر اپنے وقت کو آخرت کے لیے کارآمد بنائیں۔"
    ],
    keyLessonsEn: [
      "Time is your most non-renewable resource; invest it wisely.",
      "Individual faith must overflow into social responsibility and reminding others of truth.",
      "Perseverance (Sabr) is necessary when upholding truth in society.",
      "Eliminate time-wasting distractions that do not serve your ultimate purpose."
    ],
    reflectionsUrdu: "آج کے دن اپنے موبائل اور سوشل میڈیا کے استعمال کا محاسبہ کریں اور کم از کم 30 منٹ دینی مطالعے کو دیں۔",
    reflectionsEn: "Audit your screen time today and replace 30 minutes of scrolling with beneficial learning and worship."
  },
  {
    day: 11,
    surah: "Ibrahim",
    surah_ar: "سورة إبراهيم",
    surahNumber: 14,
    ayah: 7,
    arabic: "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ",
    urdu_translation: "اور جب تمہارے رب نے آگاہ فرمایا کہ اگر تم شکر کرو گے تو میں تمہیں ضرور زیادہ دوں گا، اور اگر تم نے ناشکری کی تو میرا عذاب بہت سخت ہے۔",
    tafseerUrdu: `یہ آیت شکر کے آفاقی قانون کو بیان کرتی ہے۔ "شکر" صرف لفظ کہنے کا نام نہیں بلکہ اس کی تین حقیقتیں ہیں: 1۔ دل سے اعتراف کرنا کہ نعمت صرف رب کی دی ہوئی ہے۔ 2۔ زبان سے اللہ کی حمد بیان کرنا۔ 3۔ حاصل شدہ نعمتوں کو اللہ کی نافرمانی میں استعمال نہ کرنا۔

اللہ کا وعدہ حتمی ہے کہ شکر گزاری سے رزق، عافیت، ایمان اور نعمتوں میں اضافہ ہوتا ہے، جبکہ ناشکری نعمت کے چھن جانے اور عذاب کا باعث بنتی ہے۔`,
    tafseerEn: `"And [remember] when your Lord proclaimed, 'If you are grateful, I will surely increase you [in favor]; but if you deny, indeed, My punishment is severe.'"

Explains the divine formula of gratitude. True gratitude protects current blessings and functions as a catalyst for continuous divine expansion in provisions, peace, and spiritual light.`,
    sourceNameUrdu: "تفسیر معارف القرآن و ضیاء القرآن",
    sourceNameEn: "Ma'ariful Quran & Zia ul Quran",
    asbabAlNuzulUrdu: "حضرت موسیٰ علیہ السلام نے اپنی قوم کو فرعون کی غلامی سے نجات اور اللہ کے احسانات یاد دلاتے ہوئے یہ مبارک فرمان الٰہی سنایا۔",
    asbabAlNuzulEn: "Prophet Musa (AS) reminded his people of Allah's favors upon delivering them from Pharaoh, emphasizing gratitude.",
    keyLessonsUrdu: [
      "نعمتوں کے بقا اور اضافے کی واحد چابی 'شکرِ الٰہی' ہے۔",
      "صحت، مال، وقت اور عقل کو اللہ کی اطاعت میں استعمال کریں۔",
      "شکایت اور گلہ کرنے کی عادت کو شکر اور الحمد للہ سے بدلیں۔",
      "ناشکری انسان کو ذہنی اور روحانی سکون سے محروم کر دیتی ہے۔"
    ],
    keyLessonsEn: [
      "Gratitude secures existing blessings and generates divine increase.",
      "Utilize health, wealth, and intellect in alignment with divine guidance.",
      "Replace constant complaining with conscious appreciation.",
      "Ingratitude deprives the heart of peace and contented joy."
    ],
    reflectionsUrdu: "آج اپنے اہل خانہ کے ساتھ مل کر ان نعمتوں کی فہرست بنائیں جن کے ہم روزمرہ میں عادی ہو چکے ہیں اور الحمد للہ کہیں۔",
    reflectionsEn: "Express explicit gratitude today for hidden favors like health, safety, and guidance."
  },
  {
    day: 12,
    surah: "An-Nahl",
    surah_ar: "سورة النحل",
    surahNumber: 16,
    ayah: 125,
    arabic: "ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ۖ وَجَادِلْهُم بِالَّتِي هِيَ أَحْسَنُ",
    urdu_translation: "اپنے رب کی راہ کی طرف حکمت اور اچھی نصیحت کے ساتھ بلائیے اور ان سے اس طریقے سے بحث کیجئے جو بہترین ہو۔",
    tafseerUrdu: `یہ آیت مبارکہ دعوت، تبلیغ، تربیت اور گفتگو کے تین سنہرے تدریجی اصول قائم کرتی ہے:

1۔ **حکمت**: دانائی، بصیرت اور مخاطب کے فہم و حالات کے مطابق بات کرنا۔
2۔ **الموعظۃ الحسنہ**: دلنشین، شفیق اور پیار بھری نصیحت جس میں ڈرانے کے ساتھ امید اور محبت ہو۔
3۔ **المجادلۃ بالتی ہی احسن**: اگر گفتگو یا بحث کی نوبت آئے تو انتہائی باوقار، دلائل پر مبنی اور احترام والے انداز میں بات کرنا، نہ کہ نیچا دکھانے کے لیے۔`,
    tafseerEn: `"Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best."

Outlines the three golden principles of communication and invitation: Wisdom (taking context and intellect into account), Gentle Persuasion (inspiring hearts with hope), and Dignified Dialogue (debating with exemplary courtesy).`,
    sourceNameUrdu: "تفسیر تدبر قرآن و تفہیم القرآن",
    sourceNameEn: "Tadabbur-e-Quran & Towards Understanding the Quran",
    asbabAlNuzulUrdu: "مکہ مکرمہ میں مشرکین اور مخالفین کے اعتراضات کے جواب میں نبی کریم ﷺ کو دعوت و گفتگو کا اعلیٰ ترین سلیقہ سکھایا گیا۔",
    asbabAlNuzulEn: "Instructing the Prophet ﷺ and believers on maintaining noble decorum during Makkan interfaith dialogue.",
    keyLessonsUrdu: [
      "دینی یا اخلاقی بات سکھاتے وقت مخاطب کے جذبات اور وقت کا لحاظ رکھیں۔",
      "طنز اور سختی سے کی گئی نصیحت فائدے کے بجائے ضد پیدا کرتی ہے۔",
      "گھر میں بچوں کی تربیت میں پیار، حکمت اور بہترین مثال بننا ترجیح ہونی چاہیے۔",
      "بحث و تکرار میں بدکلامی اور غصے سے پرہیز کریں۔"
    ],
    keyLessonsEn: [
      "Adapt your communication style to the listener's spiritual and intellectual level.",
      "Harsh criticism breeds defiance; wise counsel inspires transformation.",
      "Lead by living example before offering verbal advice.",
      "Maintain respectful boundaries even during tense disagreements."
    ],
    reflectionsUrdu: "آج اگر کسی کو کوئی اصلاحی بات کہنی ہو تو تنہائی میں پیار، مسکراہٹ اور حکمت کے ساتھ کہیں۔",
    reflectionsEn: "If offering advice today, deliver it privately with genuine care and respectful vocabulary."
  },
  {
    day: 13,
    surah: "Al-Isra",
    surah_ar: "سورة الإسراء",
    surahNumber: 17,
    ayah: 23,
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ",
    urdu_translation: "اور تیرے رب نے فیصلہ فرما دیا کہ تم اس کے سوا کسی کی عبادت نہ کرو اور والدین کے ساتھ حسن سلوک کرو۔ اگر ان میں سے کوئی ایک یا دونوں بڑھاپے کو پہنچ جائیں تو انہیں 'اُف' بھی نہ کہو۔",
    tafseerUrdu: `یہ آیت انسانی رشتوں میں والدین کی عظمت کا سب سے بڑا منشور ہے۔ اللہ تعالیٰ نے اپنے توحید کے فوری بعد والدین کے ساتھ "احسان" کا حکم دیا۔

خاص طور پر بڑھاپے کی حالت میں جب ان کا مزاج یا صحت کمزور ہو جائے، تو ان کی کسی بات پر بیزاری یا اکتاہٹ کا اظہار کرنا یعنی "أُف" کہنا بھی گناہ قرار دیا گیا۔ والدین کے لیے جھک جانا اور عاجزی و محبت سے پیش آنا جنت کے حصول کی کنجی ہے۔`,
    tafseerEn: `"And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [so much as], 'uff,' and do not repel them but speak to them a noble word."

Pairs Tawhid directly with filial piety. Expressing even a sigh of irritation ('Uff') towards elderly parents is strictly forbidden, demanding utmost patience, gentle speech, and empathetic care.`,
    sourceNameUrdu: "تفسیر ابن کثیر و ضیاء القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Zia ul Quran",
    asbabAlNuzulUrdu: "سورة الإسراء کے اسلامی منشور میں معاشرتی و اخلاقی حدود متعین کی گئیں، جن میں سب سے پہلا حق والدین کی خدمت کو قرار دیا گیا۔",
    asbabAlNuzulEn: "Forming part of the Makkan moral manifesto detailing foundational duties towards God and family.",
    keyLessonsUrdu: [
      "والدین کی خدمت اور اطاعت اللہ کی رضا کا سب سے بڑا ذریعہ ہے۔",
      "بڑھاپے میں والدین کے ساتھ رویے میں صبر، نرمی اور مسکراہٹ لازمی ہے۔",
      "ان کے سامنے اپنی آواز یا لہجے کو اونچا نہ کریں۔",
      "اگر والدین وفات پا چکے ہیں تو ان کے لیے دعا، استغفار اور صدقہ جاریہ کا اہتمام کریں۔"
    ],
    keyLessonsEn: [
      "Devotion to parents ranks right after divine devotion in priority.",
      "Exercise heightened patience and warmth when parents age.",
      "Lower your voice and posture in humility and honor before them.",
      "Continuously supplicate for their forgiveness whether alive or deceased."
    ],
    reflectionsUrdu: "آج کے دن اپنے والدین کا ہاتھ چومیں، ان کا حال احوال پوچھیں اور ان کی پسند کا کوئی کام کریں۔",
    reflectionsEn: "Reach out to your parents today with affection, assistance, and sincere prayers."
  },
  {
    day: 14,
    surah: "Al-Furqan",
    surah_ar: "سورة الفرقان",
    surahNumber: 25,
    ayah: 74,
    arabic: "وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    urdu_translation: "اور جو دعائیں مانگتے ہیں کہ اے ہمارے پروردگار! ہمیں ہماری بیویوں اور ہماری اولاد کی طرف سے آنکھوں کی ٹھنڈک عطا فرما اور ہمیں پرہیزگاروں کا پیشوا بنا۔",
    tafseerUrdu: `یہ آیت "عباد الرحمن" (رحمن کے سچے بندوں) کی ایک ممتاز صفت کو بیان کرتی ہے۔ وہ صرف اپنی ذاتی اصلاح پر اکتفا نہیں کرتے بلکہ اپنے اہل و عیال، شریکِ حیات اور آنے والی نسلوں کی دینی و اخلاقی کامیابی کے لیے متفکر رہتے ہیں۔

"قُرَّۃَ أَعْیُنٍ" (آنکھوں کی ٹھنڈک) کا مطلب یہ ہے کہ جب انسان اپنے گھر والوں کو اللہ کی اطاعت، نماز، اور نیکی کے راستے پر دیکھے تو اس کا دل اور آنکھیں خوشی و سکون سے بھر جائیں۔`,
    tafseerEn: `"And those who say, 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us a leader for the righteous.'"

Highlights a defining trait of the Servants of the Most Merciful ('Ibad-ur-Rahman'). They pray fervently for their families to become beacons of righteousness and righteous leaders in faith.`,
    sourceNameUrdu: "تفسیر معارف القرآن و فی ظلال القرآن",
    sourceNameEn: "Ma'ariful Quran & In the Shade of the Quran",
    asbabAlNuzulUrdu: "سورۃ الفرقان کے اختتام پر رحمن کے خاص بندوں کے اوصاف گنوائے گئے، جن میں خاندانی سکون اور نیکی میں پیشوائی کی دعا شامل ہے۔",
    asbabAlNuzulEn: "Concludes Surah Al-Furqan by chronicling the spiritual habits and prayers of exemplary believers.",
    keyLessonsUrdu: [
      "خاندانی خوشحالی کی اصل بنیاد مال و دولت نہیں بلکہ دین و تقویٰ ہے۔",
      "اپنے بچوں اور شریکِ حیات کے لیے ہدایت اور نیکی کی باقاعدہ دعا کریں۔",
      "نیکی میں صرف خود آگے بڑھنا نہیں بلکہ دوسروں کی قیادت اور رہنمائی کی نیت رکھیں۔",
      "گھر میں ایسا ماحول قائم کریں جہاں سب مل کر اللہ کی عبادت کا ذوق پائیں۔"
    ],
    keyLessonsEn: [
      "True family joy stems from shared faith, devotion, and moral integrity.",
      "Consistently pray for the spiritual well-being of your spouse and children.",
      "Aspire to be a role model (Imam) in godfearing conduct.",
      "Cultivate a home environment where worship brings joint joy."
    ],
    reflectionsUrdu: "اس جامع قرآنی دعا کو اپنے روزمرہ کے مسنون اذکار اور ہر نماز کے بعد التجا کا حصہ بنائیں۔",
    reflectionsEn: "Memorize and recite this comprehensive Quranic supplication for family harmony and spiritual leadership."
  }
];

export function getTafseerForDay(day: number): TafseerDetail {
  const match = EMBEDDED_TAFSEER_LIST.find(t => t.day === day);
  return match || EMBEDDED_TAFSEER_LIST[0];
}

export function getTafseerBySurahAyah(surah: string | number, ayah: number): TafseerDetail | undefined {
  return EMBEDDED_TAFSEER_LIST.find(t => {
    if (typeof surah === 'number') {
      return t.surahNumber === surah && t.ayah === ayah;
    }
    return t.surah.toLowerCase() === surah.toString().toLowerCase() && t.ayah === ayah;
  });
}
