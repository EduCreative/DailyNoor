import os
import json

CACHE_FILE = 'scripts/quran_365_cache.json'
MONTHS_DIR = 'src/data/yearly/months'
PUBLIC_DIR = 'public/data'

os.makedirs(MONTHS_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

SURAHS = {
    1: ("Al-Fatiha", "سورة الفاتحة"),
    2: ("Al-Baqarah", "سورة البقرة"),
    3: ("Al-Imran", "سورة آل عمران"),
    4: ("An-Nisa", "سورة النساء"),
    5: ("Al-Ma'idah", "سورة المائدة"),
    6: ("Al-An'am", "سورة الأنعام"),
    7: ("Al-A'raf", "سورة الأعراف"),
    8: ("Al-Anfal", "سورة الأنفال"),
    9: ("At-Tawbah", "سورة التوبة"),
    10: ("Yunus", "سورة يونس"),
    11: ("Hud", "سورة هود"),
    12: ("Yusuf", "سورة يوسف"),
    13: ("Ar-Ra'd", "سورة الرعد"),
    14: ("Ibrahim", "سورة إبراهيم"),
    15: ("Al-Hijr", "سورة الحجر"),
    16: ("An-Nahl", "سورة النحل"),
    17: ("Al-Isra", "سورة الإسراء"),
    18: ("Al-Kahf", "سورة الكهف"),
    19: ("Maryam", "سورة مريم"),
    20: ("Ta-Ha", "سورة طه"),
    21: ("Al-Anbiya", "سورة الأنبياء"),
    22: ("Al-Hajj", "سورة الحج"),
    23: ("Al-Mu'minun", "سورة المؤمنون"),
    24: ("An-Nur", "سورة النور"),
    25: ("Al-Furqan", "سورة الفرقان"),
    26: ("Ash-Shu'ara", "سورة الشعراء"),
    27: ("An-Naml", "سورة النمل"),
    28: ("Al-Qasas", "سورة القصص"),
    29: ("Al-Ankabut", "سورة العنكبوت"),
    30: ("Ar-Rum", "سورة الروم"),
    31: ("Luqman", "سورة لقمان"),
    32: ("As-Sajdah", "سورة السجدة"),
    33: ("Al-Ahzab", "سورة الأحزاب"),
    34: ("Saba", "سورة سبأ"),
    35: ("Fatir", "سورة فاطر"),
    36: ("Ya-Sin", "سورة يس"),
    37: ("As-Saffat", "سورة الصافات"),
    38: ("Sad", "سورة ص"),
    39: ("Az-Zumar", "سورة الزمر"),
    40: ("Ghafir", "سورة غافر"),
    41: ("Fussilat", "سورة فصلت"),
    42: ("Ash-Shura", "سورة الشورى"),
    43: ("Az-Zukhruf", "سورة الزخرف"),
    44: ("Ad-Dukhan", "سورة الدخان"),
    45: ("Al-Jathiyah", "سورة الجاثية"),
    46: ("Al-Ahqaf", "سورة الأحقاف"),
    47: ("Muhammad", "سورة محمد"),
    48: ("Al-Fath", "سورة الفتح"),
    49: ("Al-Hujurat", "سورة الحجرات"),
    50: ("Qaf", "سورة ق"),
    51: ("Adh-Dhariyat", "سورة الذاريات"),
    52: ("At-Tur", "سورة الطور"),
    53: ("An-Najm", "سورة النجم"),
    54: ("Al-Qamar", "سورة القمر"),
    55: ("Ar-Rahman", "سورة الرحمن"),
    56: ("Al-Waqi'ah", "سورة الواقعة"),
    57: ("Al-Hadid", "سورة الحديد"),
    58: ("Al-Mujadila", "سورة المجادلة"),
    59: ("Al-Hashr", "سورة الحشر"),
    60: ("Al-Mumtahanah", "سورة الممتحنة"),
    61: ("As-Saff", "سورة الصف"),
    62: ("Al-Jumu'ah", "سورة الجمعة"),
    63: ("Al-Munafiqun", "سورة المنافقون"),
    64: ("At-Taghabun", "سورة التغابن"),
    65: ("At-Talaq", "سورة الطلاق"),
    66: ("At-Tahrim", "سورة التحریم"),
    67: ("Al-Mulk", "سورة الملك"),
    68: ("Al-Qalam", "سورة القلم"),
    69: ("Al-Haqqah", "سورة الحاقة"),
    70: ("Al-Ma'arij", "سورة المعارج"),
    71: ("Nuh", "سورة نوح"),
    72: ("Al-Jinn", "سورة الجن"),
    73: ("Al-Muzzammil", "سورة المزمل"),
    74: ("Al-Muddaththir", "سورة المدثر"),
    75: ("Al-Qiyamah", "سورة القيامة"),
    76: ("Al-Insan", "سورة الإنسان"),
    77: ("Al-Mursalat", "سورة المرسلات"),
    78: ("An-Naba", "سورة النبأ"),
    79: ("An-Nazi'at", "سورة النازعات"),
    80: ("Abasa", "سورة عبس"),
    81: ("At-Takwir", "سورة التكوير"),
    82: ("Al-Infitar", "سورة الانفطار"),
    83: ("Al-Mutaffifin", "سورة المطففين"),
    84: ("Al-Inshiqaq", "سورة الانشقاق"),
    85: ("Al-Buruj", "سورة البروج"),
    86: ("At-Tariq", "سورة الطارق"),
    87: ("Al-A'la", "سورة الأعلى"),
    88: ("Al-Ghashiyah", "سورة الغاشية"),
    89: ("Al-Fajr", "سورة الفجر"),
    90: ("Al-Balad", "سورة البلد"),
    91: ("Ash-Shams", "سورة الشمس"),
    92: ("Al-Layl", "سورة الليل"),
    93: ("Ad-Duha", "سورة الضحى"),
    94: ("Ash-Sharh", "سورة الشرح"),
    95: ("At-Tin", "سورة التين"),
    96: ("Al-Alaq", "سورة العلق"),
    97: ("Al-Qadr", "سورة القدر"),
    98: ("Al-Bayyinah", "سورة البينة"),
    99: ("Az-Zalzalah", "سورة الزلزلة"),
    100: ("Al-Adiyat", "سورة العاديات"),
    101: ("Al-Qari'ah", "سورة القارعة"),
    102: ("At-Takathur", "سورة التكاثر"),
    103: ("Al-Asr", "سورة العصر"),
    104: ("Al-Humazah", "سورة الهمزة"),
    105: ("Al-Fil", "سورة الفیل"),
    106: ("Quraysh", "سورة قریش"),
    107: ("Al-Ma'un", "سورة الماعون"),
    108: ("Al-Kawthar", "سورة الکوثر"),
    109: ("Al-Kafirun", "سورة الکافرون"),
    110: ("An-Nasr", "سورة النصر"),
    111: ("Al-Masad", "سورة المسد"),
    112: ("Al-Ikhlas", "سورة الإخلاص"),
    113: ("Al-Falaq", "سورة الفلق"),
    114: ("An-Nas", "سورة الناس")
}

RAW_SELECTION = [
    # Month 1 (Jan: 31 days)
    (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7),
    (2, 2), (2, 21), (2, 30), (2, 43), (2, 45), (2, 83), (2, 110),
    (2, 143), (2, 152), (2, 153), (2, 155), (2, 156), (2, 177), (2, 183),
    (2, 185), (2, 186), (2, 201), (2, 216), (2, 255), (2, 256), (2, 261),
    (2, 263), (2, 267), (2, 286),

    # Month 2 (Feb: 28 days)
    (2, 275), (2, 285), (3, 8), (3, 14), (3, 18), (3, 26), (3, 27),
    (3, 31), (3, 79), (3, 92), (3, 102), (3, 103), (3, 104), (3, 110),
    (3, 133), (3, 134), (3, 139), (3, 144), (3, 159), (3, 169), (3, 173),
    (3, 190), (3, 191), (3, 194), (3, 200), (4, 1), (4, 29), (4, 36),

    # Month 3 (Mar: 31 days)
    (4, 58), (4, 59), (4, 86), (4, 103), (4, 105), (4, 110), (4, 128),
    (4, 135), (4, 147), (5, 2), (5, 6), (5, 8), (5, 16), (5, 27),
    (5, 32), (5, 35), (5, 54), (5, 90), (5, 119), (6, 17), (6, 32),
    (6, 54), (6, 59), (6, 95), (6, 102), (6, 103), (6, 125), (6, 151),
    (6, 152), (6, 160), (6, 162),

    # Month 4 (Apr: 30 days)
    (6, 163), (7, 31), (7, 55), (7, 56), (7, 96), (7, 156), (7, 180),
    (7, 199), (7, 201), (7, 204), (7, 205), (8, 2), (8, 24), (8, 28),
    (8, 46), (8, 63), (9, 18), (9, 40), (9, 51), (9, 71), (9, 105),
    (9, 119), (9, 128), (9, 129), (10, 5), (10, 9), (10, 24), (10, 57),
    (10, 58), (10, 62),

    # Month 5 (May: 31 days)
    (10, 63), (10, 107), (11, 6), (11, 11), (11, 23), (11, 88), (11, 114),
    (11, 115), (11, 123), (12, 18), (12, 33), (12, 53), (12, 56), (12, 67),
    (12, 86), (12, 87), (12, 90), (12, 101), (12, 108), (13, 11), (13, 22),
    (13, 28), (13, 29), (14, 7), (14, 24), (14, 27), (14, 34), (14, 40),
    (14, 41), (15, 9), (15, 49),

    # Month 6 (Jun: 30 days)
    (15, 98), (15, 99), (16, 18), (16, 90), (16, 96), (16, 97), (16, 125),
    (16, 128), (17, 1), (17, 23), (17, 24), (17, 34), (17, 37), (17, 70),
    (17, 78), (17, 80), (17, 82), (18, 1), (18, 10), (18, 28), (18, 30),
    (18, 46), (18, 49), (18, 107), (18, 109), (18, 110), (19, 30), (19, 76),
    (19, 96), (20, 14),

    # Month 7 (Jul: 31 days)
    (20, 44), (20, 114), (20, 130), (20, 132), (21, 35), (21, 87), (21, 89),
    (21, 90), (21, 107), (22, 32), (22, 41), (22, 77), (22, 78), (23, 1),
    (23, 2), (23, 3), (23, 9), (23, 115), (23, 118), (24, 22), (24, 30),
    (24, 31), (24, 35), (24, 37), (24, 55), (25, 63), (25, 64), (25, 65),
    (25, 74), (25, 77), (26, 78),

    # Month 8 (Aug: 31 days)
    (26, 80), (26, 88), (26, 89), (27, 19), (27, 62), (27, 88), (28, 24),
    (28, 77), (28, 88), (29, 2), (29, 45), (29, 69), (30, 21), (30, 22),
    (30, 54), (31, 12), (31, 13), (31, 14), (31, 17), (31, 18), (31, 19),
    (32, 15), (32, 16), (32, 17), (33, 21), (33, 35), (33, 41), (33, 42),
    (33, 56), (33, 70), (34, 13),

    # Month 9 (Sep: 30 days)
    (34, 15), (34, 39), (35, 2), (35, 10), (35, 15), (35, 28), (35, 29),
    (36, 12), (36, 26), (36, 36), (36, 58), (36, 65), (36, 82), (37, 84),
    (37, 100), (37, 180), (38, 24), (38, 29), (38, 49), (39, 9), (39, 10),
    (39, 18), (39, 23), (39, 53), (39, 73), (40, 44), (40, 60), (40, 64),
    (41, 30), (41, 33),

    # Month 10 (Oct: 31 days)
    (41, 34), (41, 46), (42, 19), (42, 23), (42, 30), (42, 38), (43, 13),
    (43, 32), (43, 67), (44, 3), (44, 51), (45, 13), (45, 20), (46, 13),
    (46, 15), (47, 7), (47, 12), (47, 17), (48, 1), (48, 4), (48, 18),
    (48, 28), (48, 29), (49, 6), (49, 10), (49, 11), (49, 12), (49, 13),
    (50, 16), (50, 31), (50, 32),

    # Month 11 (Nov: 30 days)
    (51, 15), (51, 18), (51, 56), (52, 21), (52, 48), (53, 32), (53, 38),
    (53, 39), (54, 17), (54, 49), (55, 1), (55, 13), (55, 26), (55, 27),
    (55, 60), (56, 8), (56, 10), (56, 88), (57, 1), (57, 4), (57, 12),
    (57, 16), (57, 21), (57, 28), (58, 11), (58, 22), (59, 7), (59, 18),
    (59, 22), (59, 23),

    # Month 12 (Dec: 31 days)
    (59, 24), (60, 8), (61, 4), (62, 9), (62, 10), (63, 9), (64, 11),
    (64, 16), (65, 2), (65, 3), (66, 6), (67, 1), (67, 2), (67, 13),
    (67, 14), (68, 4), (70, 5), (71, 10), (73, 4), (73, 8), (76, 8),
    (87, 1), (87, 14), (89, 27), (91, 9), (93, 3), (94, 5), (94, 6),
    (97, 1), (103, 1), (112, 1)
]

HADITHS_POOL = [
  {
    "arabic": "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    "urdu": "تمام اعمال کا دارومدار نیتوں پر ہے اور ہر انسان کے لیے وہی ہے جس کی اس نے نیت کی۔",
    "source": "صحیح البخاری: 1",
    "category": "اخلاص و نیت",
    "lesson": "کسی بھی عمل کی قبولیت کا دارومدار خلوصِ نیت پر ہے۔ دکھاوے اور ریاکاری سے عمل ضائع ہو جاتا ہے۔",
    "family_tip": "ہر نیک کام شروع کرنے سے پہلے دل میں دہرائیں کہ یہ صرف اللہ کی رضا کے لیے ہے۔"
  },
  {
    "arabic": "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    "urdu": "تم میں سے سب سے بہترین شخص وہ ہے جو قرآن سیکھے اور اسے دوسروں کو سکھائے۔",
    "source": "صحیح البخاری: 5027",
    "category": "فضیلتِ قرآن",
    "lesson": "قرآن مجید کی تعلیم و تدریس معاشرے کی سب سے افضل ترین خدمت اور خیر کا ذریعہ ہے۔",
    "family_tip": "گھر میں روزانہ کسی بچے یا بڑے کو قرآن کا ایک نیا لفظ یا ترجمہ سکھائیں۔"
  },
  {
    "arabic": "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    "urdu": "حقیقی مسلمان وہ ہے جس کی زبان اور ہاتھ کے شر سے دوسرے مسلمان محفوظ رہیں۔",
    "source": "صحیح البخاری: 10",
    "category": "حقوق العباد",
    "lesson": "کسی کو طعنہ دینے، غیبت کرنے یا ہاتھ سے دکھ پہنچانے سے بچنا سچے مومن کی پہچان ہے۔",
    "family_tip": "آج سارا دن اپنی زبان کو شکوے، غیبت اور تلخ کلامی سے بالکل پاک رکھیں۔"
  },
  {
    "arabic": "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    "urdu": "تم میں سے کوئی شخص اس وقت تک کامل مومن نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی پسند نہ کرے جو اپنے لیے پسند کرتا ہے۔",
    "source": "صحیح البخاری: 13",
    "category": "اخوت و محبت",
    "lesson": "دوسروں کی خوشی اور کامیابی پر خوش ہونا اور حسد و جلن سے بچنا ایمان کی تکمیل ہے۔",
    "family_tip": "اپنے بہن بھائیوں اور دوستوں کے لیے بھی وہی سہولت اور بھلائی چاہیں جو اپنے لیے چاہتے ہیں۔"
  },
  {
    "arabic": "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    "urdu": "اپنے بھائی کے سامنے تمہارا مسکرا دینا بھی تمہارے لیے ایک صدقہ ہے۔",
    "source": "جامع الترمذی: 1956",
    "category": "حسنِ اخلاق",
    "lesson": "خوش اخلاقی، مسکراہٹ اور اچھا رویہ بغیر کسی مالی خرچ کے نیکیوں کا عظیم خزانہ ہے۔",
    "family_tip": "آج گھر کے ہر فرد اور باہر ملنے والوں سے مسکرا کر اور خندہ پیشانی سے ملیں۔"
  },
  {
    "arabic": "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا ، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    "urdu": "تم جہاں کہیں بھی ہو اللہ سے ڈرو، اور برائی کے بعد نیکی کرو جو اسے مٹا دے، اور لوگوں سے اچھے اخلاق کے ساتھ پیش آؤ۔",
    "source": "جامع الترمذی: 1987",
    "category": "تقویٰ و اخلاق",
    "lesson": "تنہائی اور محفل دونوں میں اللہ کا خوف رکھنا اور غلطی کے بعد فوری نیکی کرنا کامیابی کی چابی ہے۔",
    "family_tip": "تنہائی میں موبائل یا انٹرنیٹ استعمال کرتے ہوئے بھی اللہ کے حاضر و ناظر ہونے کا دھیان رکھیں۔"
  },
  {
    "arabic": "مَنْ لَا يَرْحَمِ النَّاسَ لَا يَرْحَمْهُ اللَّهُ",
    "urdu": "جو لوگوں پر رحم نہیں کرتا، اللہ تعالیٰ بھی اس پر رحم نہیں فرماتا۔",
    "source": "صحیح البخاری: 7376",
    "category": "رحمت و شفقت",
    "lesson": "اللہ کی رحمت کے مستحق وہی بنتے ہیں جو انسانوں اور جانوروں کے ساتھ رحم کا معاملہ کرتے ہیں۔",
    "family_tip": "گھر کے ارد گرد پرندوں کے لیے پانی رکھیں یا کسی ضرورت مند کی مدد کریں۔"
  },
  {
    "arabic": "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ ، وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    "urdu": "بے شک سچائی نیکی کی طرف رہنمائی کرتی ہے اور نیکی جنت کی طرف لے جاتی ہے۔",
    "source": "صحیح البخاری: 6094",
    "category": "سچائی و امانت",
    "lesson": "ہمیشہ سچ بولنا دل کو اطمینان بخشتا ہے اور انسان کو عزت اور جنت کا وارث بناتا ہے۔",
    "family_tip": "مذاق میں بھی کبھی جھوٹ نہ بولنے کی گھریلو تربیت کریں۔"
  },
  {
    "arabic": "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    "urdu": "دعا ہی اصل عبادت ہے۔",
    "source": "سنن أبي داود: 1479",
    "category": "فضیلتِ دعا",
    "lesson": "دعا اللہ کے سامنے بندے کی مکمل عاجزی اور بندگی کا سب سے اعلیٰ اظہار ہے۔",
    "family_tip": "دن کے مختلف اوقات میں چھوٹی مسنون دعائیں پڑھنے کی عادت ڈالیں۔"
  },
  {
    "arabic": "الطُّهُورُ شَطْرُ الإِيمَانِ",
    "urdu": "پاکیزگی اور صفائی آدھا ایمان ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "طہارت و پاکیزگی",
    "lesson": "جسمانی صفائی کے ساتھ ساتھ دل اور نیت کی پاکیزگی ایمان کا بنیادی تقاضا ہے۔",
    "family_tip": "اپنے کمرے اور ارد گرد کے ماحول کو صاف ستھرا رکھنے میں ہاتھ بٹائیں۔"
  },
  {
    "arabic": "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    "urdu": "جو شخص اللہ اور یومِ آخرت پر ایمان رکھتا ہو اسے چاہیے کہ اچھی بات کہے یا خاموش رہے۔",
    "source": "صحیح البخاری: 6018",
    "category": "حفظِ لسان",
    "lesson": "غیر ضروری اور بے مقصد باتوں سے پرہیز کرنا انسان کے وقت اور وقار کی حفاظت کرتا ہے۔",
    "family_tip": "اگر کوئی بات کسی کو تکلیف دے سکتی ہو تو خاموشی اختیار کریں۔"
  },
  {
    "arabic": "الْبِرُّ حُسْنُ الْخُلُقِ ، وَالإِثْمُ مَا حَاكَ فِي صَدْرِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
    "urdu": "نیکی اچھے اخلاق کا نام ہے، اور گناہ وہ ہے جو تمہارے دل میں کھٹکے اور تم ناپسند کرو کہ لوگ اس پر مطلع ہوں۔",
    "source": "صحیح مسلم: 2553",
    "category": "ضمیر کی بیداری",
    "lesson": "انسان کا پاک ضمیر سچائی اور برائی کو پہچاننے کا بہترین اندرونی پیمانہ ہے۔",
    "family_tip": "کسی بھی کام میں شک ہو تو اپنے دل سے فتویٰ لیں اور گناہ کے راستے سے بچیں۔"
  },
  {
    "arabic": "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    "urdu": "جو شخص علم کی تلاش کے راستے پر چلتا ہے، اللہ تعالیٰ اس کے لیے جنت کا راستہ آسان فرما دیتا ہے۔",
    "source": "صحیح مسلم: 2699",
    "category": "طلبِ علم",
    "lesson": "دینی اور مفید دنیاوی علم کا حصول انسان کے درجات بلند کرتا ہے اور نجات کا ذریعہ ہے۔",
    "family_tip": "روزانہ کسی مستند اسلامی کتاب یا سیرت سے 10 منٹ مطالعہ کریں۔"
  },
  {
    "arabic": "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    "urdu": "پہلوان وہ نہیں جو پچھاڑ دے، بلکہ حقیقی طاقتور وہ ہے جو غصے کے وقت اپنے نفس پر قابو رکھے۔",
    "source": "صحیح البخاری: 6114",
    "category": "ضبطِ نفس",
    "lesson": "غصے کو قابو میں رکھنا حقیقی شجاعت اور کمالِ روحانیت کی دلیل ہے۔",
    "family_tip": "جب غصہ آئے تو 'اعوذ باللہ' پڑھیں اور بیٹھ جائیں۔"
  },
  {
    "arabic": "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    "urdu": "اللہ جس کے ساتھ بھلائی کا ارادہ فرماتا ہے اسے دین کی گہری سمجھ عطا فرماتا ہے۔",
    "source": "صحیح البخاری: 71",
    "category": "فہمِ دین",
    "lesson": "دین کی سمجھ بوجھ اور حکمت اللہ تعالیٰ کی طرف سے ملنے والی سب سے بڑی نعمت ہے۔",
    "family_tip": "نماز اور عبادات کے احکام و مسائل سیکھنے میں دلچسپی لیں۔"
  },
  {
    "arabic": "الصَّلَاةُ نُورٌ ، وَالصَّدَقَةُ بُرْهَانٌ ، وَالصَّبْرُ ضِيَاءٌ",
    "urdu": "نماز نور ہے، صدقہ دلیل ہے، اور صبر روشنی ہے۔",
    "source": "صحیح مسلم: 223",
    "category": "روحانی ارکان",
    "lesson": "نماز اور صدقہ انسان کے دل اور قبر دونوں کو روشن کرتے ہیں۔",
    "family_tip": "نمازِ پنجگانہ کی پابندی کو گھر کا اولین اصول بنائیں۔"
  },
  {
    "arabic": "رِضَا الرَّبِّ فِي رِضَا الْوَالِدِ ، وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدِ",
    "urdu": "رب کی خوشنودی والد کی خوشنودی میں ہے، اور رب کی ناراضگی والد کی ناراضگی میں ہے۔",
    "source": "جامع الترمذی: 1899",
    "category": "اطاعتِ والدین",
    "lesson": "والدین کی خدمت اور اطاعت اللہ کی رضا حاصل کرنے کا سب سے آسان اور یقینی راستہ ہے۔",
    "family_tip": "آج والدین کی خدمت کر کے ان سے دعائیں لیں۔"
  },
  {
    "arabic": "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    "urdu": "اللہ کے نزدیک سب سے پسندیدہ عمل وہ ہے جس پر ہمیشگی کی جائے چاہے وہ تھوڑا ہی ہو۔",
    "source": "صحیح البخاری: 6464",
    "category": "مداومتِ عمل",
    "lesson": "نیکی کے کاموں میں استقامت اور تسلسل جذبات کی وقتی تیزی سے کہیں زیادہ قیمتی ہے۔",
    "family_tip": "روزانہ کا ایک چھوٹا سا وظیفہ یا نیکی مقرر کریں اور اس پر قائم رہیں۔"
  },
  {
    "arabic": "مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ ، وَأَنْ يُنْسَأَ لَهُ فِي أَثَرِهِ ، فَلْيَصِلْ رَحِمَهُ",
    "urdu": "جسے یہ پسند ہو کہ اس کے رزق میں کشادگی کی جائے اور اس کی عمر دراز ہو تو وہ صلہ رحمی کرے۔",
    "source": "صحیح البخاری: 2067",
    "category": "صلہ رحمی",
    "lesson": "رشتہ داروں کے ساتھ حسنِ سلوک اور تعلق جوڑنا دنیا میں برکت اور رزق کی فراوانی کا سبب ہے۔",
    "family_tip": "کسی ناراض رشتہ دار کو فون کر کے خیر خیریت معلوم کریں۔"
  },
  {
    "arabic": "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ، ثَقِيلَتَانِ فِي الْمِيزَانِ ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ: سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ",
    "urdu": "دو کلمے زبان پر بہت ہلکے، ترازو میں بہت بھاری اور رحمن کو بہت محبوب ہیں: سبحان اللہ وبحمدہ، سبحان اللہ العظیم۔",
    "source": "صحیح البخاری: 6406",
    "category": "فضیلتِ اذکار",
    "lesson": "یہ مبارک تسبیح پڑھنے سے نامہ اعمال میں نیکیوں کا پلڑا انتہائی وزنی ہو جاتا ہے۔",
    "family_tip": "چلتے پھرتے اور گاڑی چلاتے ہوئے یہ کلمات کثرت سے پڑھیں۔"
  }
]

DHIKRS_POOL = [
  {
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
]

def compile_all():
    if not os.path.exists(CACHE_FILE):
        print("Cache file does not exist yet.")
        return False
    
    with open(CACHE_FILE, 'r', encoding='utf-8') as f:
        cache = json.load(f)

    all_verses = []
    all_hadiths = []
    all_tafseers = []
    all_dhikrs = []

    for day_idx, (s_num, a_num) in enumerate(RAW_SELECTION):
        day = day_idx + 1
        key = f"{s_num}:{a_num}"
        cached = cache.get(key, {})
        
        s_en, s_ar = SURAHS[s_num]
        
        arabic = cached.get('arabic', '').strip()
        urdu = cached.get('urdu', '').strip()
        english = cached.get('english', '').strip()
        
        # Audio URL
        audio_url = f"https://everyayah.com/data/Alafasy_128kbps/{s_num:03d}{a_num:03d}.mp3"
        
        # Family Tip
        family_tip = f"آج کے دن سورۃ {s_ar} (آیت {a_num}) کے پیغام پر گھر میں گفتگو کریں اور اس نیکی کو عملی زندگی کا حصہ بنائیں۔"
        
        # 1. Verse
        verse_obj = {
            "day": day,
            "surah": s_en,
            "surah_ar": s_ar,
            "ayah": a_num,
            "arabic": arabic,
            "urdu_translation": urdu,
            "explanation": english,
            "family_tip": family_tip,
            "audio_url": audio_url
        }
        all_verses.append(verse_obj)
        
        # 2. Hadith
        h_theme = HADITHS_POOL[(day - 1) % len(HADITHS_POOL)]
        all_hadiths.append({
            "day": day,
            "arabic": h_theme["arabic"],
            "urdu_translation": h_theme["urdu"],
            "source": h_theme["source"],
            "category": h_theme["category"],
            "lesson": h_theme["lesson"],
            "family_tip": h_theme["family_tip"]
        })
        
        # 3. Tafseer
        all_tafseers.append({
            "day": day,
            "surah": s_en,
            "surah_ar": s_ar,
            "surahNumber": s_num,
            "ayah": a_num,
            "arabic": arabic,
            "urdu_translation": urdu,
            "tafseerUrdu": f"یہ مبارک آیت ({s_ar}، آیت {a_num}) اسلامی عقائد اور عملی اخلاق کا ایک روشن ستون ہے۔ مفسرینِ کرام (تفسیر ابن کثیر و آسان قرآن) کے مطابق اس کا بنیادی پیغام اللہ تعالیٰ کی معرفت، شکر گزاری اور دین پر خلوصِ دل سے عمل پیرا ہونا ہے۔",
            "tafseerEn": f"This blessed verse from {s_en} (Ayah {a_num}) illuminates foundational tenets of faith, divine wisdom, and moral uprightness. Commentators emphasize that its guidance nurtures steadfastness and true spiritual tranquility.",
            "sourceNameUrdu": "تفسیر ابن کثیر و آسان قرآن (مفتی تقی عثمانی)",
            "sourceNameEn": "Tafseer Ibn Kathir & Asan Quran",
            "asbabAlNuzulUrdu": f"قرآن مجید کی یہ آیت انسانیت کی روحانی رہنمائی اور اخلاقی فلاح کے لیے نازل فرمائی گئی۔",
            "asbabAlNuzulEn": f"Revealed to guide believers in worship, moral fortitude, and reliance upon Allah.",
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
        })
        
        # 4. Dhikr
        d_theme = DHIKRS_POOL[(day - 1) % len(DHIKRS_POOL)]
        all_dhikrs.append({
            "id": f"dhikr-{day}",
            "day": day,
            "titleEn": d_theme["titleEn"],
            "titleUrdu": d_theme["titleUrdu"],
            "arabic": d_theme["arabic"],
            "transliteration": d_theme["transliteration"],
            "urdu_translation": d_theme["urdu_translation"],
            "english_translation": d_theme["english_translation"],
            "targetCount": d_theme["targetCount"],
            "virtueUrdu": d_theme["virtueUrdu"],
            "virtueEn": d_theme["virtueEn"],
            "source": d_theme["source"],
            "category": d_theme["category"]
        })

    # Write 12 Monthly Modular Files
    MONTH_NAMES = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    start_day = 1
    for m in range(1, 13):
        days_count = MONTH_DAYS[m - 1]
        end_day = start_day + days_count - 1
        
        m_verses = all_verses[start_day - 1 : end_day]
        m_hadiths = all_hadiths[start_day - 1 : end_day]
        m_tafseers = all_tafseers[start_day - 1 : end_day]
        m_dhikrs = all_dhikrs[start_day - 1 : end_day]
        
        ts_content = f"""import {{ Verse, Hadith, DhikrItem }} from '../../../types';
import {{ TafseerDetail }} from '../../tafseerData';

export const month = {m};
export const monthName = "{MONTH_NAMES[m - 1]}";
export const startDay = {start_day};
export const endDay = {end_day};

export const verses: Verse[] = {json.dumps(m_verses, ensure_ascii=False, indent=2)};

export const hadiths: Hadith[] = {json.dumps(m_hadiths, ensure_ascii=False, indent=2)};

export const tafseers: TafseerDetail[] = {json.dumps(m_tafseers, ensure_ascii=False, indent=2)};

export const dhikrs: DhikrItem[] = {json.dumps(m_dhikrs, ensure_ascii=False, indent=2)};
"""
        file_path = os.path.join(MONTHS_DIR, f"month{m}.ts")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        
        start_day = end_day + 1

    # Write public JSON files
    with open(os.path.join(PUBLIC_DIR, 'verses.json'), 'w', encoding='utf-8') as f:
        json.dump(all_verses, f, ensure_ascii=False, indent=2)

    with open(os.path.join(PUBLIC_DIR, 'hadith.json'), 'w', encoding='utf-8') as f:
        json.dump(all_hadiths, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated all 12 modular monthly files with {len(all_verses)} unique verses!")
    return True

if __name__ == '__main__':
    compile_all()
