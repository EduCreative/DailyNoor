# Changelog

All notable changes to the Daily Noor project are documented here.

## [2.5.0] - 2026-08-21
### Added
- **Enriched Islamic Background Art & Geometry**:
  - Redesigned `IslamicBackgroundPattern.tsx` inspired by Persian tilework domes and Shamseh calligraphy art rosettes.
  - Features an intricate 16-pointed Girih Zellige tessellation grid with dual-tone Islamic Gold (`#C9A227`) and Deep Emerald (`#0B5D3C`) geometry.
  - Added multi-layered rotating Shamseh Rosette Medallion watermarks in canvas corners and center depth.
  - Integrated soft ambient lighting gradients (dome light simulation) with responsive opacity across Light and Midnight themes.

## [2.4.0] - 2026-08-21
### Added
- **Direct WhatsApp Suggestion Option (`+923331306603`)**:
  - Added direct WhatsApp suggestion links in Header, Footer, Settings Modal, and About Modal.
  - One-tap redirect to WhatsApp with pre-filled greeting (`Assalamu Alaikum Daily Noor Team...`) for sending feedback and suggestions directly to `+92 333 1306603`.

## [2.3.0] - 2026-08-21
### Added
- **Daily Tafseer Component (`DailyTafseer.tsx`)**:
  - Added a dedicated, feature-rich Daily Tafseer card rendered right below the VerseCard.
  - **4 Interactive View Modes**:
    1. **Simplified Urdu Tafseer** (`آسان اردو تفسیر`): In-depth, easy-to-understand explanation based on Mufti Taqi Usmani and Hafiz Ibn Kathir.
    2. **English Explanation** (`English Tafseer`): Complete English translation and commentary.
    3. **Historical Context** (`شانِ نزول و سیاق`): Authentic Asbab al-Nuzul detailing the historical background and circumstances of revelation.
    4. **Key Takeaways & Lessons** (`اہم نکات و عملی دروس`): Numbered actionable lessons and daily spiritual action points.
  - **Dynamic Online Tafseer Fetching (`tafseerService.ts`)**: Integrated live online Tafseer edition switching supporting *Tafseer Ibn Kathir (Urdu)*, *Tafheem-ul-Quran (Maududi)*, and *Tafseer Ibn Kathir (English)* via Quran.com API with automatic offline fallbacks.
  - **Voice Speech Narration**: Integrated Web Speech API audio narration in Urdu and English for listening to Tafseer commentary.
  - **Personal Reflections Scratchpad (My Notes)**: Built-in local reflection scratchpad allowing users to record personal notes and thoughts on the daily verse, stored persistently in `localStorage`.
  - **Copy, Bookmark, and Expand/Collapse**: One-tap formatted copying for WhatsApp sharing and bookmarking.

## [2.2.0] - 2026-08-20
### Added
- **Location-Aware Islamic (Hijri) Date Calculation**:
  - Implemented automatic regional moon-sighting adjustment logic:
    - **Pakistan, India, Bangladesh & South Asia**: Automatically adjusts the Hijri date by -1 day relative to Saudi Arabia (Umm al-Qura) to match authentic South Asian regional moon sightings.
    - **Saudi Arabia, UAE & Gulf**: Follows the Umm al-Qura standard astronomical calendar (0 days offset).
    - **GPS & Worldwide Coordinates**: Detects geographic regions automatically.
  - **Dynamic Real-Time Date Updates**: Changing the active location in Prayer Times or Settings instantly synchronizes the Islamic date across the Header, Daily Summary Card, Calendar, and Canvas card generator.
  - **Hijri Date Settings & Manual Override**: Added an "Islamic (Hijri) Date Calculation" section in `SettingsModal.tsx` allowing users to choose **Auto (Location-Based: Recommended)** or manually select offsets (-2 Days, -1 Day, 0 Days / Saudi Arabia, +1 Day, +2 Days) with a live preview.
  - **Expanded Quick-Select Cities**: Added Peshawar, Quetta, Delhi, and Dhaka to popular cities.

## [2.1.0] - 2026-08-20
### Added
- **Settings Card Visibility Toggles**: Added dedicated toggle switches in Settings & Preferences (`SettingsModal.tsx`) to turn on/off:
  - **Daily Dhikr & Tasbih Counter** (`showDailyDhikr`)
  - **Dua of the Week** (`showDuaOfTheWeek`)
  - **Daily Islamic Quiz** (`showDailyQuiz`)
- **Dua of the Week Collapsible View**: Configured the "Dua of the Week" card (`DuaCard.tsx`) to default to a sleek collapsed view featuring the week counter, Dua title (English & Urdu), occasion pill, memorization status badge, quick audio recitation player, and single-click full card expand/collapse trigger.
- **Ordered Dashboard Sequence**: Streamlined the default dashboard layout hierarchy:
  1. Prayer Times (collapsed by default)
  2. Today's Verse
  3. Daily Hadith
  4. Daily Dhikr & Tasbih
  5. Dua of the Week (collapsed by default)
  6. Daily Islamic Quiz

## [2.0.0] - 2026-08-19
### Added
- **Hyderabad, Pakistan Location Quick Select**: Added Hyderabad, Pakistan to the popular quick-select cities list for instant prayer time configuration.
- **Collapsed Prayer Timings by Default**: Configured the Daily Prayer Times card to default to a clean, collapsed state showing the active location, next prayer countdown, and 12h/24h toggle, expandable on demand.
- **User Location Display Badge**: Added a prominent location badge in the sticky header (`📍 Location Name`), displaying the user's active city/country (e.g., Makkah, Saudi Arabia, Karachi, Pakistan, or auto-detected GPS location). Clicking the badge opens the location selector and settings.
- **Semi-transparent Islamic Art Background**: Designed and added an authentic, semi-transparent 8-pointed star & Girih geometric tessellation SVG pattern overlay (`IslamicBackgroundPattern.tsx`) across all pages that dynamically blends with all color themes.

## [1.9.0] - 2026-08-19
### Enhanced
- **Comprehensive Theme Synchronization & Palette Consistency**: Updated `index.css` to define full CSS variable sets for `:root`, `.theme-emerald` (Royal Emerald), `.theme-midnight` (Midnight Obsidian Dark), and `.theme-pearl` (Pearl Alabaster Light).
- **Universal Text & Label Contrast**: Ensured all cards, titles, subtitles, explanations, badges, buttons, modals, input fields, and audio controls across the app adapt dynamically to theme changes without leaving any hardcoded low-contrast text.
- **Theme Switcher Sync**: Seamlessly synchronized theme state between `SettingsModal.tsx`, `Header.tsx`, `App.tsx`, and all sub-components.

## [1.8.0] - 2026-08-19
### Added
- **Global Sticky Audio Player Controller**: Created a persistent bottom audio player (`GlobalAudioPlayer.tsx`) that stays floating at the bottom of the screen across all pages.
- **Unified Audio Engine (`useAudioStore.ts`)**: Built a central audio state manager that seamlessly coordinates both Quranic Arabic MP3 recitations (Mishary Alafasy) and Urdu voice speech narrations for Verse, Hadith, Masnoon Dua, and Daily Dhikr.
- **Pause, Resume, Replay & Speed Controls**: Users can pause, resume, or replay audio recitations without scrolling back up. Features speed toggles (0.8x, 1x, 1.2x, 1.5x), a scrubbable progress bar, equalizer animations, and quick-start actions for today's Verse or Hadith.
- **Card Synchronization**: Tapping play/pause on any Verse, Hadith, Dua, or Dhikr card instantly updates the global player and vice versa.

## [1.7.0] - 2026-08-19
### Added
- **Daily Dhikr Card & Digital Tasbih Counter**: Added an interactive daily remembrance card (`DailyDhikrCard.tsx`) featuring rotating daily authentic Dhikrs (SubhanAllah, Alhamdulillah, Istighfar, Durood Sharif, etc.) with Uthmani Arabic script, transliteration, Urdu & English translations, and Hadith virtues.
- **Interactive Digital Tasbih Button**: Tactile touchable bead button with haptic feedback, percentage progress ring, target goal presets (33x, 100x, 500x), quick increment (+1, +10, complete), reset control, and celebratory confetti upon target achievement.
- **Settings Display Toggle**: Added a toggle switch in Settings & Preferences (`SettingsModal.tsx`) allowing users to easily add or remove the Daily Dhikr & Tasbih Counter card from the home screen layout.

## [1.6.0] - 2026-08-19
### Added
- **Masnoon Duaa of the Week (1 Week - 1 Duaa)**: Added a comprehensive weekly Masnoon Dua feature containing 52 authentic Duas from Sahih al-Bukhari, Sahih Muslim, Sunan al-Tirmidhi, and Hisn al-Muslim for annual memorization.
- **Transliteration & Translations**: Each weekly Dua includes Arabic Uthmani text, Romanized pronunciation (transliteration), Urdu translation, and English translation.
- **Authentic Background & Recommendation**: Detailed occasion, background context, virtues (فضیلت و سند), and authentic Hadith reference for every Dua.
- **7-Day Family Memorization Goal**: Interactive "Mark as Memorized" (حفظ کر لیا) toggle with celebratory confetti and progress tracking (e.g., `12 of 52 Duas Memorized`).
- **52 Duas Collection Modal**: Complete searchable directory (`AllDuasModal.tsx`) allowing users to filter by All, Memorized, or Bookmarked Duas with progress meters.

## [1.5.0] - 2026-08-19
### Added
- **Selectable Daily Reminder Time**: Users can now select any custom time for daily notifications (e.g. 8:00 AM, 1:30 PM, 7:00 PM, 9:00 PM or custom time input) in Settings & Preferences rather than being restricted to 7:00 PM.
- **Theme Selection in Settings**: Added dedicated theme palette selection supporting **Royal Emerald**, **Midnight Obsidian**, and **Pearl Alabaster** themes with visual color swatches and instant app-wide application.
- **3-Theme Header Switcher**: Upgraded the top bar dark/light toggle button into a 3-way theme switcher (`Emerald ➔ Midnight ➔ Pearl ➔ Emerald`), with active theme indicators, tooltips, and haptic feedback.

## [1.4.1] - 2026-08-19
### Fixed
- **Islamic Hijri Date RTL Formatting & Urdu Numerals**: Corrected Islamic Hijri date formatting (e.g., `۷ ربیع الاول ۱۴۴۸ھ`) across the header, cards, modals, and canvas generators. Applied Right-To-Left Mark (`\u200F`), `dir="rtl"`, and `font-urdu` font isolation so the day number (`۷` or `7`) stays anchored at the beginning with the month name without jumping or flipping across font boundaries.

## [1.4.0] - 2026-08-19
### Fixed
- **Summary Card Theme Engine Discrepancy**: Corrected the canvas rendering logic so that selecting the **Emerald** theme downloads the authentic Royal Emerald & Cream Parchment card with `#0B5D3C` gradient backgrounds, ivory card boxes, and gold borders, rather than falling back to the dark Midnight theme.
- **Razor-Sharp Urdu Typography on Zoom**: Enabled 2x supersampling high-DPI canvas rendering (`ctx.scale(2, 2)`), added geometric `Noto Sans Arabic` & Nastaliq fallbacks, and ensured complete `document.fonts.ready` synchronization before rasterization so that zooming into the Urdu and Arabic text yields crisp, vector-grade lines without blurriness.

### Added
- **3 Daily Quiz Questions & Solutions on Summary Cards**: Embedded the daily 3 reflection questions (Verse, Hadith, and Islamic Ethics) with highlighted correct answers and explanations directly at the bottom of the Summary Card export, complete with a live interactive toggle in the modal toolbar.
- **High-DPI Theme Rendering**: Refined the three visual themes (Emerald Royal, Midnight Obsidian, and Pearl Alabaster) with bespoke color gradients, gold divider accents, and high-contrast typography.

## [1.3.0] - 2026-08-19
### Added
- **Studio-Grade 1080p Canvas Card Engine**: Standalone HTML5 2D Canvas rendering engine (`canvasCardGenerator.ts`) that outputs crisp, 1080p studio-quality PNG images.
- **Daily Quiz Integration**: Daily 3-question Islamic quiz modal with instant feedback and streak tracking.

## [1.2.0] - 2026-08-19
### Added
- **Islamic Art Logo & Branding**: Hand-crafted geometric Rub el Hizb 8-point mandala, Hilal crescent, and gold foil motifs.
- **Live Local Prayer Times**: Automatic geolocation prayer times with countdown to next prayer.

## [1.0.0] - 2026-08-18
### Added
- Initial release of Daily Noor with 365 Quranic verses and 365 Hadiths.
