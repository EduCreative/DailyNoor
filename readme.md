# 🌙 Daily Noor (نورِ روزانہ)

> **A daily routine web app to get 1 Quranic verse, 1 authentic Hadith, and 3 reflection quiz questions every day for personal and family betterment.**

[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-emerald.svg)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-gold.svg)](https://web.dev/progressive-web-apps/)
[![Version](https://img.shields.io/badge/Version-2.6.4-0B5D3C.svg)]()

---

## ✨ Features

- 🎨 **Enriched Persian & Islamic Art Background**: 16-pointed Girih Zellige geometric tilework and rotating Shamseh calligraphy medallion watermarks with soft dome ambient lighting.
- 📖 **Daily Quranic Verse & Tafseer**: 365 daily rotating verses in Uthmani Arabic script, authentic Urdu translation, and a dedicated **Daily Tafseer** component with simplified Urdu, English commentary, historical context (Asbab al-Nuzul), and key takeaways.
- 💬 **WhatsApp Suggestions & Feedback**: Direct one-tap WhatsApp link (`+92 333 1306603`) available app-wide in Header, Footer, Settings, and About modal.
- 📜 **Daily Hadith**: 365 authentic Hadiths (Bukhari, Muslim, Nawawi 40) with Urdu translations and practical character lessons.
- ⏰ **Selectable Daily Reminder**: Custom notification schedule picker (8:00 AM, 1:30 PM, 7:00 PM, 9:00 PM or custom time) for browser reminder alerts.
- 🎯 **Daily 3-Question Quiz**: Interactive daily quiz testing verse knowledge, Hadith wisdom, and Islamic ethics with instant scoring and explanations.
- 🖼️ **Studio-Grade 1080p Summary Cards**: 1-click generator combining today's Verse, Hadith, and **3 Quiz Questions with Solutions** in ultra-crisp vector-grade PNG format.
- 🎨 **Theme Selection**: App-wide theme selection in Settings and 3-way top bar switcher cycling through **Royal Emerald**, **Midnight Obsidian**, and **Pearl Alabaster**.
- 🔊 **Audio Recitations**: Arabic verse recitation audio streaming from Mishary Rashid Alafasy and Urdu text-to-speech voice narration.
- 🕌 **Live Prayer Times**: Geolocation-based daily local prayer times from the Aladhan API with upcoming prayer countdown badge and custom city selection.
- 📱 **PWA & Offline Ready**: Service worker offline caching for 365-day content and local storage persistence.

---

## 📚 Resources & Attributions

The data, media, APIs, and fonts used in **Daily Noor** are powered by open-access Islamic APIs and resources:

### 📖 Quranic Verses, Text & Audio
* **Arabic Uthmani Script**: Sourced from [Tanzil Project](https://tanzil.net/) and [Al-Quran Cloud](https://alquran.cloud/).
* **Urdu Translation**: Fateh Muhammad Jalandhari, available via [Quran.com API](https://quran.com/).
* **Simple Tafseer & Insights**: Summarized from *Tafsir Ibn Kathir* and *Tafheem-ul-Quran* by Abul A'la Maududi ([Quran.com](https://quran.com/)).
* **Arabic Recitation Audio**: High-quality (128kbps) audio recitations by Sheikh Mishary Rashid Alafasy hosted via [EveryAyah.com CDN](https://everyayah.com/).

### 📜 Hadith Collections & Commentary
* **Hadith Texts**: Sourced from primary authentic collections—Sahih al-Bukhari, Sahih Muslim, Sunan an-Nasa'i, Jami' at-Tirmidhi, Sunan Abi Dawud, and Forty Hadith Nawawi via [Sunnah.com API & Database](https://sunnah.com/).
* **Urdu Translations & Character Lessons**: Authentic Urdu translations and practical lessons compiled from Darussalam Publications and [Sunnah.com](https://sunnah.com/).

### 🕌 Prayer Times & Geolocation Services
* **Prayer Calculations**: Daily prayer times calculated via the [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api) (utilizing Muslim World League, Umm al-Qura, and Islamic Sciences Karachi calculation methods).
* **Reverse Geocoding**: Automatic city and country resolution using [OpenStreetMap Nominatim API](https://nominatim.openstreetmap.org/).

### 📅 Islamic / Hijri Calendar
* **Hijri Dates**: Calculated using the Umm al-Qura Calendar specifications ([OurIslam Calendar](https://calendar.ourislam.com/)) rendered natively via ECMAScript [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) (`islamic-umalqura` calendar system).

### 🔊 Speech & Audio Engine
* **Urdu Text-to-Speech**: Narration provided by the browser's native [Web Speech Synthesis API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) with native Urdu voice support (`ur-PK` / `ur-IN`).

### 🎨 Typography, Icons & Graphics Engine
* **Arabic & Urdu Calligraphy Fonts**:
  * Arabic: [Amiri](https://fonts.google.com/specimen/Amiri) & [Scheherazade New](https://fonts.google.com/specimen/Scheherazade+New) via [Google Fonts](https://fonts.google.com/).
  * Urdu Nastaliq: [Noto Nastaliq Urdu](https://fonts.google.com/specimen/Noto+Nastaliq+Urdu) & [Gulzar](https://fonts.google.com/specimen/Gulzar) via [Google Fonts](https://fonts.google.com/).
  * Interface Typography: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Playfair Display](https://fonts.google.com/specimen/Playfair+Display).
* **Icons**: Iconography suite by [Lucide React Icons](https://lucide.dev/).
* **Summary Card Graphics**: Built with the native HTML5 [Canvas 2D API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for 2x supersampled 1080p PNG export.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment

### Vercel / Cloud Run
1. Push repository to GitHub.
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Node Version: 18+ / 20+

---

## 🔒 Privacy & Data
- All streaks, bookmarks, and user preferences are saved locally on the client's device in `localStorage`.
- No tracking scripts, analytics cookies, or advertisements.
