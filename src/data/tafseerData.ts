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
  },
  {
    day: 15,
    surah: "Al-Kahf",
    surah_ar: "سورة الكهف",
    surahNumber: 18,
    ayah: 10,
    arabic: "إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    urdu_translation: "جب ان نوجوانوں نے غار میں پناہ لی تو کہا: اے ہمارے پروردگار! ہمیں اپنے پاس سے رحمت عطا فرما اور ہمارے کام میں ہمارے لیے راہِ راست آسان کر دے۔",
    tafseerUrdu: `اصحابِ کہف کے نوجوانوں کا یہ واقعہ ایمان کی حفاظت کے لیے قربانی اور اللہ پر غیر متزلزل توکل کی عظیم ترین مثال ہے۔ جب وہ ایک ظالم اور بت پرست معاشرے سے اپنا ایمان بچانے کے لیے غار میں پناہ گزین ہوئے تو انہوں نے سب سے پہلے اللہ تعالیٰ سے دو چیزیں مانگیں: خاص رحمت اور تمام معاملات میں ہدایت و دانائی۔`,
    tafseerEn: `The youth of the cave fled tyranny to protect their pure faith in Tawhid. Their supplication encapsulates seeking Allah's all-encompassing mercy and divine guidance (Rushd) in every difficult crossroads.`,
    sourceNameUrdu: "تفسیر ابن کثیر و معارف القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Ma'ariful Quran",
    asbabAlNuzulUrdu: "مکہ کے قریش نے جب رسول اللہ ﷺ کے امتحان کے لیے اصحاب کہف کا قصہ پوچھا تو یہ سورۃ مبارکہ نازل ہوئی تاکہ اہل ایمان کو ہر دور کے فتنوں میں استقامت کا سبق دے۔",
    asbabAlNuzulEn: "Revealed in Makkah in response to questions posed to the Prophet ﷺ by the Quraysh about the young men of the cave, teaching perseverance in times of trial.",
    keyLessonsUrdu: [
      "ایمان کی حفاظت ہر دنیاوی مفاد اور آسائش پر مقدم ہے۔",
      "مشکل ترین حالات میں اللہ سے رحمت اور صائب فیصلے کی توفیق مانگنی چاہیے۔",
      "نوجوان نسل جب اللہ کے دین پر جم جائے تو رب ان کی غیبی مدد فرماتا ہے۔"
    ],
    keyLessonsEn: [
      "Protecting faith surpasses all worldly comfort and status.",
      "Seek divine guidance and mercy in difficult decision-making.",
      "Allah provides unseen miraculous support to sincere believers."
    ],
    reflectionsUrdu: "جب بھی آپ کسی اخلاقی یا فکری دباؤ کا شکار ہوں، اصحاب کہف کی یہ دعا 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً' پورے دل سے پڑھیں۔",
    reflectionsEn: "Whenever facing societal pressure or difficult choices, recite this supplication with total reliance on Allah."
  },
  {
    day: 16,
    surah: "Maryam",
    surah_ar: "سورة مريم",
    surahNumber: 19,
    ayah: 96,
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا",
    urdu_translation: "بے شک جو لوگ ایمان لائے اور انہوں نے نیک اعمال کیے، رحمان ان کے لیے (دلوں میں) محبت پیدا فرما دے گا۔",
    tafseerUrdu: `یہ آیت اس بنیادی قرآنی قانون کو واضح کرتی ہے کہ لوگوں کے دلوں میں سچی عزت اور محبت پانے کا ذریعہ صرف اور صرف اللہ کا تقویٰ اور اخلاص ہے۔ جب بندہ تنہائی اور محفل میں اللہ کو راضی کرتا ہے تو اللہ فرشتوں اور تمام مخلوقات کے دلوں میں اس کی الفت اور عزت ڈال دیتا ہے۔`,
    tafseerEn: `'Indeed, those who have believed and done righteous deeds - the Most Merciful will appoint for them affection.' Genuine love and respect in creation is placed by Allah for those who sincerely strive to please Him.`,
    sourceNameUrdu: "تفسیر قرطبی و ضیاء القرآن",
    sourceNameEn: "Tafseer al-Qurtubi & Zia ul Quran",
    asbabAlNuzulUrdu: "سورۃ مریم مکی دور کی سورۃ ہے، جس میں توحید اور اخلاص کے ثمرات اور دنیا و آخرت میں مؤمنین کی عزت کا بیان ہے۔",
    asbabAlNuzulEn: "Revealed in Makkah, comforting the early companions that their sacrifices and righteousness would yield perpetual honor.",
    keyLessonsUrdu: [
      "لوگوں کی خوشنودی کے پیچھے بھاگنے کے بجائے اللہ کو راضی کرنے کی فکر کریں۔",
      "نیک اعمال انسان کی شخصیت میں ایسا وقار اور کشش پیدا کرتے ہیں جو بناوٹ سے نہیں آ سکتی۔",
      "خلوص کے ساتھ کی گئی نیکی دلوں کو مسخر کر دیتی ہے۔"
    ],
    keyLessonsEn: [
      "Prioritize pleasing the Creator over people-pleasing.",
      "Righteous deeds bestow inner dignity and natural affection from others.",
      "Sincerity is the root of authentic leadership and influence."
    ],
    reflectionsUrdu: "آج اپنی نیتوں کا جائزہ لیں کہ کیا میرے اعمال لوگوں کی تعریف کے لیے ہیں یا صرف اللہ کی محبت پانے کے لیے؟",
    reflectionsEn: "Examine your daily intentions: are you seeking worldly validation or divine acceptance?"
  },
  {
    day: 17,
    surah: "Ta-Ha",
    surah_ar: "سورة طه",
    surahNumber: 20,
    ayah: 114,
    arabic: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ ۗ وَلَا تَعْجَلْ بِالْقُرْآنِ مِن قَبْلِ أَن يُقْضَىٰ إِلَيْكَ وَحْيُهُ ۖ وَقُل رَّبِّ زِدْنِي عِلْمًا",
    urdu_translation: "پس بلند و برتر ہے اللہ جو حقیقی بادشاہ ہے۔ اور آپ قرآن پڑھنے میں جلدی نہ کریں قبل اس کے کہ اس کی وحی پوری کی جائے، اور دعا کیجئے: اے میرے پروردگار! مجھے علم میں اور زیادہ کر۔",
    tafseerUrdu: `اللہ تعالیٰ نے نبی کریم ﷺ کو کسی دنیاوی مال یا اقتدار میں اضافے کی دعا مانگنے کا حکم نہیں دیا، بلکہ صرف علمِ نافع میں اضافے کی دعا کی تلقین فرمائی۔ علمِ دین دل کی بصیرت اور تقویٰ کی روح ہے، اور علم میں پختگی صبر اور غور و فکر سے پیدا ہوتی ہے۔`,
    tafseerEn: `'And say: My Lord, increase me in knowledge.' Knowledge is the single virtue Allah instructed His Prophet ﷺ to pray for an increase in, signifying that true knowledge leads directly to knowing and obeying the Creator.`,
    sourceNameUrdu: "تفسیر ابن کثیر و آسان قرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Asan Quran",
    asbabAlNuzulUrdu: "جب وحی نازل ہوتی تو رسول اللہ ﷺ کلام کو یاد رکھنے کی بے چینی میں جلدی دہراتے، اللہ نے تسلی دی کہ اسے محفوظ کرنا ہمارا کام ہے اور آپ علم میں زیادتی کی دعا کریں۔",
    asbabAlNuzulEn: "The Prophet ﷺ used to repeat verses rapidly while Jibril AS was reciting for fear of forgetting. Allah assured him of preservation and taught this prayer.",
    keyLessonsUrdu: [
      "علمِ نافع کی طلب انسان کی آخری سانس تک جاری رہنی چاہیے۔",
      "علم کے ساتھ عاجزی اور دعا لازم و ملزوم ہیں۔",
      "قرآن فہمی میں جلد بازی کے بجائے تدبر اور ٹھہراؤ ضروری ہے۔"
    ],
    keyLessonsEn: [
      "The pursuit of beneficial knowledge is a lifelong spiritual obligation.",
      "Knowledge must be coupled with humility and prayer.",
      "Recite the Quran with contemplation and steady pacing."
    ],
    reflectionsUrdu: "اپنی ہر نماز اور سجدے کے بعد 'رَّبِّ زِدْنِي عِلْمًا' کو اپنی مستقل دعا بنائیں۔",
    reflectionsEn: "Make 'Rabbi zidni ilma' a continuous part of your daily prayers and study routines."
  },
  {
    day: 18,
    surah: "Al-Anbiya",
    surah_ar: "سورة الأنبياء",
    surahNumber: 21,
    ayah: 87,
    arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    urdu_translation: "(حضرت یونسؑ نے پکارا:) تیرے سوا کوئی معبود نہیں، تو پاک ہے، بے شک میں ہی قصورواروں میں سے تھا۔",
    tafseerUrdu: `یہ عظیم دعا 'دعائے ذوالنون' کہلاتی ہے۔ اس میں تین بنیادی ارکان ہیں: توحید کا اقرار (لا إله إلا أنت)، اللہ کی ہر عیب سے تنزیہ و پاکی (سبحانك)، اور اپنے گناہوں و تقصیر کا کھلے دل سے اعتراف (إني كنت من الظالمين)۔ جو بندہ اس اخلاص سے پکارتا ہے اللہ اس کے تمام غموں کو دور فرما دیتا ہے۔`,
    tafseerEn: `The supplication of Prophet Yunus AS within the belly of the whale. It combines pure monotheism, glorification of Allah's absolute perfection, and humble admission of human imperfection and repentance.`,
    sourceNameUrdu: "تفسیر طبری و معارف القرآن",
    sourceNameEn: "Tafseer at-Tabari & Ma'ariful Quran",
    asbabAlNuzulUrdu: "حضرت یونس علیہ السلام کے مچھلی کے پیٹ میں جانے اور تاریکیوں میں اللہ کو پکارنے کے واقعے کا بیان۔",
    asbabAlNuzulEn: "Revealed recounting the miraculous rescue of Prophet Yunus AS from the depths of the sea after his sincere tawbah.",
    keyLessonsUrdu: [
      "مشکلات کا اصل علاج اپنی غلطی تسلیم کر کے رب کے حضور جھک جانا ہے۔",
      "اللہ کی تسبیح اور توحید غموں کا سب سے بڑا تریاق ہے۔",
      "مایوسی کے گھٹا ٹوپ اندھیروں میں بھی اللہ کی رحمت امید کا چراغ بنتی ہے۔"
    ],
    keyLessonsEn: [
      "Admitting mistakes and repenting dissolves hardships.",
      "Tasbih and Tawhid are the supreme remedies for distress.",
      "Never despair; divine rescue is always near for the humble."
    ],
    reflectionsUrdu: "جب بھی زندگی میں کسی تنگی، بیماری یا گھبراہٹ کا سامنا ہو، آیت کریمہ کا کثرت سے ورد کریں۔",
    reflectionsEn: "Engage in continuous recitation of Ayat al-Kareema whenever experiencing stress or emotional hardship."
  },
  {
    day: 19,
    surah: "Al-Hajj",
    surah_ar: "سورة الحج",
    surahNumber: 22,
    ayah: 77,
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا وَاعْبُدُوا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ",
    urdu_translation: "اے ایمان والو! رکوع کرو، اور سجدہ کرو، اور اپنے پروردگار کی عبادت کرو، اور بھلے کام کرو تاکہ تم کامیاب ہو جاؤ۔",
    tafseerUrdu: `یہ آیت اسلامی زندگی کا مکمل منشور پیش کرتی ہے۔ اس میں حقوق اللہ (نماز، رکوع، سجود، بندگی) اور حقوق العباد (بھلے کام، سخاوت، حسن سلوک) دونوں کو یکجا کیا گیا ہے۔ حقیقی فلاح اسی وقت ملتی ہے جب عبادات کے ساتھ ساتھ معاشرتی خدمت کا جذبہ بھی بیدار ہو۔`,
    tafseerEn: `'O you who have believed, bow and prostrate and worship your Lord and do good - that you may succeed.' Unites the pillars of personal worship (Salah, submission) with social compassion and doing good to humanity.`,
    sourceNameUrdu: "تفسیر ابن کثیر و تیسیر القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Tayseer ul Quran",
    asbabAlNuzulUrdu: "سورۃ الحج کے اختتام پر اہل ایمان کو جامع کامیابی کے اسباب سکھائے گئے، اس آیت پر سجدہ تلاوت مسنون ہے۔",
    asbabAlNuzulEn: "Marks an essential verse of prostration (Sajdah Tilawat) in Surah Al-Hajj outlining the foundation of total success.",
    keyLessonsUrdu: [
      "نماز کے خشوع اور سجدوں میں سکون ہی مومن کی قوت کا راز ہے۔",
      "عبادت کے ساتھ ساتھ لوگوں کے ساتھ بھلائی کرنا کامیابی کا لازمی جزو ہے۔",
      "نیکی کے ہر موقع کو غنیمت سمجھنا چاہیے۔"
    ],
    keyLessonsEn: [
      "Physical submission in prayer cultivates spiritual humility.",
      "Active charity and altruism are inseparable from genuine faith.",
      "Seize every opportunity to bring benefit to others."
    ],
    reflectionsUrdu: "آج اپنی نمازوں کے رکوع و سجود میں خصوصی خشوع لائیں اور کسی انسان یا جاندار کے ساتھ نیکی کا عمل انجام دیں۔",
    reflectionsEn: "Focus deeply on your prostrations today and carry out a deliberate act of kindness."
  },
  {
    day: 20,
    surah: "Al-Mu'minun",
    surah_ar: "سورة المؤمنون",
    surahNumber: 23,
    ayah: 1,
    arabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ ﴿١﴾ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ ﴿٢﴾",
    urdu_translation: "یقیناً وہ ایمان والے کامیاب ہو گئے، جو اپنی نمازوں میں خشوع اور عاجزی اختیار کرتے ہیں۔",
    tafseerUrdu: `سورۃ المؤمنون کا آغاز کامیابی کے قطعی اعلان سے ہوتا ہے۔ 'خشوع' کا مطلب ہے کہ دل اللہ کی ہیبت و محبت سے لرز رہا ہو اور اعضاء و جوارح میں سکون و وقار ہو۔ جو شخص نماز میں ادھر ادھر دھیان کے بجائے رب کی حضوری محسوس کرتا ہے، اس کی نماز گناہوں سے بچانے والی بن جاتی ہے۔`,
    tafseerEn: `'Certainly will the believers have succeeded: They who are during their prayer humbly submissive.' Khushu' (reverent humility) in prayer is the foundational mark of eternal triumph.`,
    sourceNameUrdu: "تفسیر معارف القرآن و فی ظلال القرآن",
    sourceNameEn: "Ma'ariful Quran & In the Shade of the Quran",
    asbabAlNuzulUrdu: "مکہ میں نازل ہوئی تاکہ کفار کے مادی معیارِ کامیابی کے مقابلے میں اخلاقی اور روحانی کامیابی کا حقیقی معیار واضح کیا جائے۔",
    asbabAlNuzulEn: "Revealed in Makkah to establish the true spiritual metric of success in contrast to material arrogance.",
    keyLessonsUrdu: [
      "کامیابی مادی دولت سے نہیں بلکہ روحانی پاکیزگی سے ناپی جاتی ہے۔",
      "خشوع نماز کی روح ہے، بغیر خشوع کے نماز بے جان جسم کی مانند ہے۔",
      "نماز سے پہلے وضو اور تیاری میں دھیان لگانا خشوع میں مدد دیتا ہے۔"
    ],
    keyLessonsEn: [
      "Real triumph is rooted in spiritual humility and moral purity.",
      "Khushu' is the soul of Salah; physical postures without it lack life.",
      "Proper preparation and mind-clearing before prayer enhances focus."
    ],
    reflectionsUrdu: "نماز میں تکبیرِ تحریمہ کہتے وقت دنیا کے تمام خیالات کو اپنے پیچھے چھوڑ دینے کا عزم کریں۔",
    reflectionsEn: "When uttering Allahu Akbar to start prayer, consciously leave all worldly preoccupations behind."
  },
  {
    day: 21,
    surah: "An-Nur",
    surah_ar: "سورة النور",
    surahNumber: 24,
    ayah: 35,
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ",
    urdu_translation: "اللہ آسمانوں اور زمین کا نور ہے۔ اس کے نور کی مثال ایسی ہے جیسے ایک طاق ہو جس میں چراغ ہو۔",
    tafseerUrdu: `یہ قرآن کریم کی مشہور 'آیتِ نور' ہے۔ عبداللہ بن عباس رضی اللہ عنہما فرماتے ہیں کہ اللہ آسمان و زمین کے تمام باشندوں کو ہدایت دینے والا اور کائنات کو روشن کرنے والا ہے۔ مؤمن کے دل میں ایمان کی شمع جب وحیِ الٰہی کے نور سے ملتی ہے تو نورٌ علیٰ نور (نور پر نور) کی کیفیت پیدا ہو جاتی ہے۔`,
    tafseerEn: `'Allah is the Light of the heavens and the earth.' The famous Ayat an-Nur illustrates how divine revelation illuminates the heart of the sincere believer, guiding one safely through life's obscurities.`,
    sourceNameUrdu: "تفسیر ابن کثیر و روح المعانی",
    sourceNameEn: "Tafseer Ibn Kathir & Ruh al-Ma'ani",
    asbabAlNuzulUrdu: "سورۃ النور میں خاندانی پاکیزگی، حیا اور معاشرتی آداب کے احکام کے درمیان یہ آیت دلوں کو ایمانی بصیرت عطا کرنے کے لیے نازل فرمائی گئی۔",
    asbabAlNuzulEn: "Revealed in Madinah to illustrate the pure luminescence of faith surrounded by godly ethics and moral decency.",
    keyLessonsUrdu: [
      "ہدایت اور بصیرت کا واحد منبع اللہ تعالیٰ کا کلام ہے۔",
      "مؤمن کا دل جب گناہوں سے پاک ہوتا ہے تو وہ اللہ کے نور کا مرکز بن جاتا ہے۔",
      "اندھیروں اور شکوک و شبہات کا مقابلہ صرف علم اور ایمان کی روشنی سے ممکن ہے۔"
    ],
    keyLessonsEn: [
      "Divine guidance is the sole enduring light in a world of confusion.",
      "A purified heart reflects the light of faith and moral clarity.",
      "Overcome doubts and despair through the illumination of the Quran."
    ],
    reflectionsUrdu: "دعا کریں کہ اللہ آپ کے دل، بصارت، سماعت اور فہم کو اپنے نور سے منور فرمائے۔",
    reflectionsEn: "Supplicate for divine light in your thoughts, perception, words, and daily intentions."
  },
  {
    day: 22,
    surah: "Al-Qasas",
    surah_ar: "سورة القصص",
    surahNumber: 28,
    ayah: 24,
    arabic: "فَسَقَىٰ لَهُمَا ثُمَّ تَوَلَّىٰ إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    urdu_translation: "پس موسیٰؑ نے ان کے جانوروں کو پانی پلا دیا، پھر سائے کی طرف ہٹ کر دعا کی: اے میرے پروردگار! تو میری طرف جو بھی خیر اتارے، میں اس کا محتاج ہوں۔",
    tafseerUrdu: `حضرت موسیٰ علیہ السلام جب مصر سے ہجرت کر کے مدین پہنچے تو بھوکے، پیاسے اور بے گھر تھے۔ اس حالت میں بھی انہوں نے دو کمزور خواتین کی مدد کی اور پھر کسی معاوضے یا احسان جتلائے بغیر سائے میں جا کر اللہ کے حضور اپنی بے بسی اور محتاجی کا اظہار کیا۔ اللہ نے اس کے بدلے انہیں فوری پناہ، پاکیزہ روزگار اور نیک رشتہ عطا فرمایا۔`,
    tafseerEn: `'My Lord, indeed I am, for whatever good You would send down to me, in need.' Demonstrates Prophet Musa's altruism and complete dependence upon Allah during intense poverty and exile.`,
    sourceNameUrdu: "تفسیر ابن کثیر و آسان قرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Asan Quran",
    asbabAlNuzulUrdu: "حضرت موسیٰؑ کے مدین پہنچنے اور کنویں پر لوگوں کے جانوروں کو پانی پلانے کے واقعے کا بیان۔",
    asbabAlNuzulEn: "Narrates Prophet Musa's arrival at the wells of Madyan and his exemplary selfless service followed by humble prayer.",
    keyLessonsUrdu: [
      "نیکی اور خدمتِ خلق بغیر کسی دنیاوی غرض اور بدلے کے کرنی چاہیے۔",
      "انسان جتنا بھی باصلاحیت ہو، وہ ہر لمحہ اللہ کے فضل کا محتاج ہے۔",
      "خلوصِ نیت کے ساتھ کی گئی مدد پریشانیوں کے ازالے کا سبب بنتی ہے۔"
    ],
    keyLessonsEn: [
      "Offer service selflessly without seeking praise or immediate return.",
      "Acknowledge total dependency upon Allah for sustenance and safety.",
      "Sincere altruism unlocks divine blessings in unexpected ways."
    ],
    reflectionsUrdu: "جب بھی روزگار، رہائش یا کسی جائز ضرورت کی تنگی ہو تو حضرت موسیٰؑ کی یہ دعا خشوع سے پڑھیں۔",
    reflectionsEn: "Adopt this beautiful prayer of Musa AS whenever seeking provision, marriage, or guidance."
  },
  {
    day: 23,
    surah: "Al-Ankabut",
    surah_ar: "سورة العنكبوت",
    surahNumber: 29,
    ayah: 69,
    arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
    urdu_translation: "اور جنہوں نے ہماری راہ میں جدوجہد کی، ہم انہیں ضرور اپنے راستے دکھائیں گے، اور بے شک اللہ احسان کرنے والوں کے ساتھ ہے۔",
    tafseerUrdu: `مجاہدہ سے مراد صرف میدانِ جنگ نہیں بلکہ اپنے نفس کی بری خواہشات، سستی اور شیطان کے وسوسوں کے خلاف مسلسل کوشش کرنا ہے۔ اللہ کا وعدہ ہے کہ جو بندہ نیکی کے راستے پر ایک قدم بڑھاتا ہے، اللہ اس کے لیے راہیں کھول دیتا ہے اور اپنی خاص معیت و نصرت سے نوازتا ہے۔`,
    tafseerEn: `'And those who strive for Us - We will surely guide them to Our ways. And indeed, Allah is with the doers of good.' Continuous effort against personal weaknesses is met with divine illumination and steadfastness.`,
    sourceNameUrdu: "تفسیر معارف القرآن و قرطبی",
    sourceNameEn: "Ma'ariful Quran & Tafseer al-Qurtubi",
    asbabAlNuzulUrdu: "سورۃ العنکبوت کے اختتام پر آزمائشوں اور فتنوں کے مقابلے میں ثابت قدم رہنے والے مجاہدینِ نفس کے لیے بشارت کے طور پر نازل ہوئی۔",
    asbabAlNuzulEn: "Concludes Surah Al-Ankabut with a timeless promise of divine mentorship for those who resist sin and endure.",
    keyLessonsUrdu: [
      "نیکی کے راستے میں پہل اور کوشش بندے کی ذمہ داری ہے، راستہ کھولنا اللہ کا فضل ہے۔",
      "نفس کی اصلاح سب سے بڑا جہاد ہے۔",
      "اللہ کی معیت ان لوگوں کو حاصل ہوتی ہے جو کام کو حسن و کمال (احسان) کے ساتھ کرتے ہیں۔"
    ],
    keyLessonsEn: [
      "Initiative in seeking goodness invites divine guidance.",
      "Disciplining one's inner desires is a paramount spiritual struggle.",
      "Allah's companionship accompanies those who act with excellence (Ihsan)."
    ],
    reflectionsUrdu: "آج اپنی کسی ایسی کمزوری یا بری عادت کے خلاف جدوجہد شروع کریں جو آپ کو اللہ کے قریب ہونے سے روکتی ہے۔",
    reflectionsEn: "Identify one persistent weakness and make a firm intention today to conquer it for Allah's sake."
  },
  {
    day: 24,
    surah: "Ar-Rum",
    surah_ar: "سورة الروم",
    surahNumber: 30,
    ayah: 21,
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    urdu_translation: "اور اس کی نشانیوں میں سے یہ ہے کہ اس نے تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے تاکہ تم ان کے پاس سکون پاؤ اور تمہارے درمیان محبت اور رحمت پیدا کر دی۔",
    tafseerUrdu: `نکاح اور خاندانی رشتہ اللہ کی قدرت اور رحمت کا عظیم شاہکار ہے۔ اللہ نے میاں بیوی کے تعلق کی بنیاد دو ستونوں پر رکھی ہے: 'مودۃ' (محبت و چاہت) اور 'رحمۃ' (ہمدردی، شفقت اور معاف کر دینا)۔ جب جوانی میں کشش کم ہوتی ہے تو رحمت و ہمدردی رشتے کو جوڑے رکھتی ہے۔`,
    tafseerEn: `'And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.' The divine design of marriage provides emotional peace, affection, and mutual mercy.`,
    sourceNameUrdu: "تفسیر ابن کثیر و ضیاء القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Zia ul Quran",
    asbabAlNuzulUrdu: "سورۃ الروم میں کائنات اور انسانی فطرت میں اللہ کی عظیم نشانیوں کے سلسلے میں خاندانی سکون کا خصوصی تذکرہ فرمایا گیا۔",
    asbabAlNuzulEn: "Delivered in Makkah outlining the psychological peace and compassion foundational to healthy family units.",
    keyLessonsUrdu: [
      "گھر کا سکون مادی اشیاء سے نہیں بلکہ باہمی الفت اور نرمی سے بنتا ہے۔",
      "رشتوں میں غلطیوں کو نظر انداز کرنا اور ایک دوسرے پر رحم کرنا پائیدار محبت کا راز ہے۔",
      "شریکِ حیات کے لیے حسنِ سلوک عبادت اور نیکی ہے۔"
    ],
    keyLessonsEn: [
      "Domestic serenity arises from emotional tenderness, not material goods.",
      "Mercy and forbearance sustain relationships through seasons of hardship.",
      "Treating one's spouse with kindness is a form of worship."
    ],
    reflectionsUrdu: "اپنے گھر میں شریکِ حیات اور اہل خانہ کے لیے محبت اور قدردانی کے الفاظ کا اظہار کریں۔",
    reflectionsEn: "Express heartfelt gratitude and kind appreciation to your family members today."
  },
  {
    day: 25,
    surah: "Luqman",
    surah_ar: "سورة لقمان",
    surahNumber: 31,
    ayah: 17,
    arabic: "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ",
    urdu_translation: "اے میرے پیارے بیٹے! نماز قائم کرو، نیکی کا حکم دو، برائی سے روکو، اور جو مصیبت تجھ پر آئے اس پر صبر کرو۔ بے شک یہ بڑی ہمت کے کام ہیں۔",
    tafseerUrdu: `حکیم لقمان کی اپنے بیٹے کو وصیت اولاد کی جامع اسلامی تربیت کا بہترین نصاب ہے۔ انہوں نے پہلے ذاتی تعلق باللہ (نماز) کو مضبوط کرنے کا حکم دیا، پھر معاشرتی اصلاح (امر بالمعروف و نہی عن المنکر) کی تلقین کی، اور چونکہ اصلاح کے راستے میں تکلیفیں آتی ہیں، اس لیے صبر و استقامت کا سبق دیا۔`,
    tafseerEn: `'O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you.' Luqman's timeless counsel balances personal piety, social responsibility, and resilience under trial.`,
    sourceNameUrdu: "تفسیر طبری و معارف القرآن",
    sourceNameEn: "Tafseer at-Tabari & Ma'ariful Quran",
    asbabAlNuzulUrdu: "سورۃ لقمان میں حکمت و دانائی کے اصول اور والدین و اولاد کے باہمی تعلقات کی رہنمائی کی گئی ہے۔",
    asbabAlNuzulEn: "Details the wise pedagogical method of Luqman, combining loving mentorship with rigorous spiritual discipline.",
    keyLessonsUrdu: [
      "بچوں کی تربیت میں نرمی اور شفقت (یا بنی) کا انداز اپنانا چاہیے۔",
      "نماز تمام اخلاقی اور روحانی خوبیوں کی بنیاد ہے۔",
      "حق کی بات کہنے پر آنے والی مشکلات پر صبر کرنا پختہ عزم کی نشانی ہے۔"
    ],
    keyLessonsEn: [
      "Parental guidance should be wrapped in affectionate language.",
      "Salah is the cornerstone of character development.",
      "Patience in the face of adversity reflects strength of character."
    ],
    reflectionsUrdu: "اپنے بچوں یا چھوٹوں سے پیار سے بات کریں اور انہیں نماز اور نیکی کی اہمیت حکمت کے ساتھ سمجھائیں۔",
    reflectionsEn: "Practice patient, loving mentorship with young people in your family or circle."
  },
  {
    day: 26,
    surah: "Fatir",
    surah_ar: "سورة فاطر",
    surahNumber: 35,
    ayah: 15,
    arabic: "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ ۖ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ",
    urdu_translation: "اے لوگو! تم سب اللہ کے محتاج ہو، اور اللہ ہی بے نیاز اور تمام خوبیوں والا ہے۔",
    tafseerUrdu: `یہ آیت انسان کو اس کی اصل حیثیت یاد دلاتی ہے۔ ہر انسان اپنی سانس، صحت، رزق، اور بقا کے لیے ہر لمحہ اللہ کا محتاج ہے جبکہ اللہ تعالیٰ کسی کی عبادت یا شکر گزاری کا محتاج نہیں۔ ہماری عبادتوں سے اللہ کی بادشاہت میں کوئی اضافہ نہیں ہوتا اور ہماری نافرمانی سے کوئی کمی نہیں آتی۔`,
    tafseerEn: `'O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.' Reminds humanity of its intrinsic fragility and complete dependence on the Creator's sustenance.`,
    sourceNameUrdu: "تفسیر ابن کثیر و تیسیر الکریم الرحمن (سعدی)",
    sourceNameEn: "Tafseer Ibn Kathir & Tafseer as-Sa'di",
    asbabAlNuzulUrdu: "سورۃ فاطر مکی دور میں نازل ہوئی تاکہ انسان کے تکبر اور خود فریبی کا قلع قمع کیا جا سکے۔",
    asbabAlNuzulEn: "Delivered in Makkah dismantling human arrogance by highlighting cosmic creation and divine self-sufficiency.",
    keyLessonsUrdu: [
      "تکبر اور فخر کا خاتمہ تب ہوتا ہے جب انسان اپنی محتاجی کو پہچان لے۔",
      "اللہ کا شکر اس لیے ادا کریں کہ نفع خود ہمارا ہی ہے۔",
      "حاجت روائی کے لیے بندوں کے آگے ہاتھ پھیلانے کے بجائے رب غنی کے آگے جھکیں۔"
    ],
    keyLessonsEn: [
      "Recognizing one's utter neediness eliminates arrogance.",
      "Worship and gratitude benefit the servant, not the Creator.",
      "Turn to the Self-Sufficient Lord rather than relying on human intermediaries."
    ],
    reflectionsUrdu: "جب بھی اپنے دل میں کسی کامیابی پر غرور محسوس ہو، فوراً 'یا غنی یا حمید' پڑھ کر عاجزی اختیار کریں۔",
    reflectionsEn: "Reflect on your vulnerability and express sincere humility before the Self-Sufficient Lord."
  },
  {
    day: 27,
    surah: "Az-Zumar",
    surah_ar: "سورة الزمر",
    surahNumber: 39,
    ayah: 53,
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    urdu_translation: "کہہ دیجئے کہ اے میرے بندو جنہوں نے اپنی جانوں پر زیادتی کی ہے! اللہ کی رحمت سے ناامید نہ ہو، بے شک اللہ تمام گناہوں کو بخش دیتا ہے۔",
    tafseerUrdu: `یہ آیت قرآن مجید کی سب سے زیادہ امید افزا آیت ہے۔ اللہ تعالیٰ نے گناہ گاروں کو بھی 'یا عبادی' (اے میرے بندو) کہہ کر پکارا ہے جو اس کی بے پایاں شفقت کی دلیل ہے۔ شرط صرف یہ ہے کہ انسان توبہ کر کے رب کی طرف رجوع کرے؛ اللہ کے ہاں توبہ کا دروازہ موت کے نزع تک کھلا رہتا ہے۔`,
    tafseerEn: `'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.' Renowned as the most hopeful verse in the Quran, welcoming every penitent sinner to divine forgiveness.`,
    sourceNameUrdu: "تفسیر ابن کثیر و معارف القرآن",
    sourceNameEn: "Tafseer Ibn Kathir & Ma'ariful Quran",
    asbabAlNuzulUrdu: "مکہ کے کچھ مشرکین جنہوں نے اسلام لانے سے پہلے کثرت سے گناہ کیے تھے، انہوں نے پوچھا کہ کیا ہماری توبہ قبول ہوگی؟ تو اللہ نے یہ رحمت بھری آیت نازل فرمائی۔",
    asbabAlNuzulEn: "Revealed when individuals who had committed major sins prior to Islam asked if genuine repentance would wipe their past clean.",
    keyLessonsUrdu: [
      "اللہ کی رحمت سے ناامید ہونا گناہِ کبیرہ ہے۔",
      "سچی توبہ کے بعد ماضی کا کوئی بھی گناہ بخشش کی راہ میں رکاوٹ نہیں بنتا۔",
      "توبہ کرنے میں تاخیر نہیں کرنی چاہیے کیونکہ زندگی کا کوئی بھروسہ نہیں۔"
    ],
    keyLessonsEn: [
      "Despair in Allah's mercy is a grave spiritual error.",
      "Sincere repentance eradicates all past transgressions completely.",
      "Never delay repentance, for life is fragile and transient."
    ],
    reflectionsUrdu: "آج رات دو رکعت صلاۃ التوبہ پڑھیں اور اپنے تمام گزشتہ گناہوں کی معافی مانگیں۔",
    reflectionsEn: "Perform two cycles of prayer of repentance (Salat at-Tawbah) and seek comprehensive pardon."
  },
  {
    day: 28,
    surah: "Fussilat",
    surah_ar: "سورة فصلت",
    surahNumber: 41,
    ayah: 34,
    arabic: "وَلَا تَسْتَوِي الْحَسَنَةُ وَلَا السَّيِّئَةُ ۚ ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ",
    urdu_translation: "اور نیکی اور بدی برابر نہیں ہو سکتیں۔ برائی کا جواب اس چیز سے دو جو بہترین ہو، پھر جس کے اور تمہارے درمیان دشمنی تھی وہ جگری دوست بن جائے گا۔",
    tafseerUrdu: `یہ آیت اخلاقی بلندی اور دلوں کو فتح کرنے کا اعجاز سکھاتی ہے۔ جب کوئی آپ سے غصہ کرے تو آپ نرمی کریں، جب کوئی ناانصافی کرے تو آپ عدل و عفو کا مظاہرہ کریں۔ یہ رویہ کٹر دشمن کے دل سے بھی نفرت کی آگ بجھا کر اسے وفادار اور مخلص دوست بنا دیتا ہے۔`,
    tafseerEn: `'Repel evil with that which is better, then the one with whom there was enmity will become as though he was an intimate friend.' Teaching the transformative power of patience, forbearance, and returning bad treatment with benevolence.`,
    sourceNameUrdu: "تفسیر قرطبی و ابن کثیر",
    sourceNameEn: "Tafseer al-Qurtubi & Tafseer Ibn Kathir",
    asbabAlNuzulUrdu: "مشرکین مکہ کی طرف سے دی جانے والی تکالیف کے جواب میں نبی ﷺ اور صحابہ کرام کو حسن اخلاق اور درگزر کی تعلیم دینے کے لیے نازل ہوئی۔",
    asbabAlNuzulEn: "Revealed in Makkah instructing the Prophet ﷺ and early believers on responding to aggression with supreme character and grace.",
    keyLessonsUrdu: [
      "غصے اور بدکلامی کا جواب حسن سلوک سے دینا عظیم ہمت کا کام ہے۔",
      "معاف کرنا اور احسان کرنا دشمنوں کو بھی اپنا بنا لیتا ہے۔",
      "انتقام کے بجائے اصلاح اور دل جیتنے کا جذبہ غالب ہونا چاہیے۔"
    ],
    keyLessonsEn: [
      "Meeting harshness with gentle dignity disarms hostility.",
      "Forgiveness and magnanimity turn adversaries into trusted allies.",
      "Prioritize healing hearts over winning aggressive arguments."
    ],
    reflectionsUrdu: "کسی ایسے شخص کے ساتھ جس نے آپ کے ساتھ تلخی کی ہو، اچھے لہجے میں بات کر کے شروعات کریں۔",
    reflectionsEn: "Reach out with kindness to someone with whom you have experienced friction."
  },
  {
    day: 29,
    surah: "Al-Hujurat",
    surah_ar: "سورة الحجرات",
    surahNumber: 49,
    ayah: 10,
    arabic: "إِنَّ الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ",
    urdu_translation: "یقیناً تمام مومن آپس میں بھائی بھائی ہیں، لہٰذا اپنے دو بھائیوں کے درمیان صلح کراؤ اور اللہ سے ڈرو تاکہ تم پر رحم کیا جائے۔",
    tafseerUrdu: `اسلام نے رنگ، نسل، زبان اور جغرافیے کے تمام بت توڑ کر ایمانی رشتہ اخوت قائم کیا۔ جب دو بھائیوں یا فریقین میں جھگڑا ہو جائے تو تماشائی بننے یا آگ لگانے کے بجائے انصاف اور خیر خواہی کے ساتھ صلح کروانا ہر مسلمان کا دینی فریضہ ہے۔ باہمی اتحاد ہی رحمتِ الٰہی کا ضامن ہے۔`,
    tafseerEn: `'The believers are but brothers, so make settlement between your brothers and fear Allah that you may receive mercy.' Establishes universal Islamic brotherhood and the vital duty of reconciling disputes.`,
    sourceNameUrdu: "تفسیر معارف القرآن و فی ظلال القرآن",
    sourceNameEn: "Ma'ariful Quran & In the Shade of the Quran",
    asbabAlNuzulUrdu: "مدینہ منورہ میں انصار کے دو قبائل یا بعض صحابہ کے درمیان پیدا ہونے والے باہمی نزاع کو ختم کرنے کے لیے یہ آیت نازل ہوئی۔",
    asbabAlNuzulEn: "Revealed in Madinah to instruct the Muslim community to proactively mediate and reconcile any rising disputes.",
    keyLessonsUrdu: [
      "ایمانی رشتہ خون کے رشتے سے بھی زیادہ مضبوط اور مقدس ہے۔",
      "دو ناراض بھائیوں کے درمیان صلح کروانا عظیم ترین نیکیوں میں سے ہے۔",
      "مسلمانوں کے عیب تلاش کرنے اور تفرقہ ڈالنے سے سختی سے بچنا چاہیے۔"
    ],
    keyLessonsEn: [
      "Spiritual brotherhood transcends national and ethnic divides.",
      "Mediating peace between disputing parties yields immense reward.",
      "Avoid gossip, sectarianism, and deepening community fractures."
    ],
    reflectionsUrdu: "اگر آپ کے دو دوستوں یا رشتہ داروں میں رنجش ہو تو صلح کی کوشش کر کے اس آیت پر عمل کریں۔",
    reflectionsEn: "Take initiative to help mend relationships between estranged friends or relatives."
  },
  {
    day: 30,
    surah: "Al-Hashr",
    surah_ar: "سورة الحشر",
    surahNumber: 59,
    ayah: 18,
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
    urdu_translation: "اے ایمان والو! اللہ سے ڈرو اور ہر جان کو دیکھنا چاہیے کہ اس نے کل (قیامت) کے لیے آگے کیا بھیجا ہے، اور اللہ سے ڈرو، بے شک اللہ باخبر ہے جو کچھ تم کرتے ہو۔",
    tafseerUrdu: `حضرت عمر فاروق رضی اللہ عنہ فرماتے ہیں: 'اپنا محاسبہ کرو اس سے پہلے کہ تمہارا حساب لیا جائے'۔ قیامت کو 'غد' (کل) سے تعبیر کیا گیا ہے تاکہ یہ احساس دلایا جائے کہ موت اور آخرت بہت قریب ہے۔ انسان کو روزانہ اپنے اعمال کا جائزہ لینا چاہیے کہ اس نے اپنے نامہ اعمال میں کیا سرمایہ جمع کیا۔`,
    tafseerEn: `'O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow - and fear Allah.' The cornerstone text for self-accountability (Muhasabah) before the Day of Judgment.`,
    sourceNameUrdu: "تفسیر ابن کثیر و تیسیر الکریم الرحمن",
    sourceNameEn: "Tafseer Ibn Kathir & Tafseer as-Sa'di",
    asbabAlNuzulUrdu: "سورۃ الحشر کے اختتام پر اہل ایمان کو دنیا کی عارضی زندگی کے دھوکے سے بچا کر دائمی آخرت کی تیاری کی طرف متوجہ کرنے کے لیے نازل ہوئی۔",
    asbabAlNuzulEn: "Revealed in Madinah urging believers to examine their spiritual ledger in anticipation of the eternal hereafter.",
    keyLessonsUrdu: [
      "روزانہ اپنے اعمال کا خود جائزہ لینا (محاسبہ نفس) کامیابی کی ضمانت ہے۔",
      "آخرت اتنی قریب ہے جیسے کل کا دن۔",
      "تقویٰ دل کی وہ بیداری ہے جو ہر قدم اٹھانے سے پہلے اللہ کی پکڑ کا خوف دلاتی ہے۔"
    ],
    keyLessonsEn: [
      "Regular daily self-accounting keeps conscience alert and pure.",
      "Eternity is impending; invest in enduring good deeds.",
      "Taqwa is active consciousness that Allah observes every secret."
    ],
    reflectionsUrdu: "روزانہ سونے سے پہلے پانچ منٹ اپنے پورے دن کی نیکیوں اور کوتاہیوں کا محاسبہ کریں۔",
    reflectionsEn: "Dedicate five quiet minutes before sleep each night to evaluate your spiritual ledger."
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
