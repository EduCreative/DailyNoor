export function formatAudioUrlWithQari(url: string, qariVoice?: string): string {
  if (!url) return '';
  if (!qariVoice || qariVoice === 'Alafasy_128kbps') return url;
  return url.replace(/Alafasy_128kbps/g, qariVoice);
}

export const QARI_VOICE_OPTIONS = [
  { id: 'Alafasy_128kbps', nameAr: 'الشيخ مشاری بن راشد العفاسی', nameEn: 'Mishary Rashid Alafasy' },
  { id: 'Abdul_Basit_Mujawwad_128kbps', nameAr: 'الشيخ عبد الباسط عبد الصمد (تجويد)', nameEn: 'Abdul Basit (Mujawwad)' },
  { id: 'Husary_128kbps', nameAr: 'الشيخ محمود خليل الحصري', nameEn: 'Mahmoud Khalil Al-Husary' },
  { id: 'Abu_Bakr_Ash-Shaatree_128kbps', nameAr: 'الشيخ أبو بكر الشاطري', nameEn: 'Abu Bakr Al-Shatri' },
  { id: 'Ghamadi_40kbps', nameAr: 'الشيخ سعد الغامدي', nameEn: 'Saad Al-Ghamdi' },
  { id: 'MaherAlMuaiqly128kbps', nameAr: 'الشيخ ماهر المعيقلي', nameEn: 'Maher Al-Muaiqly' },
  { id: 'Minshawy_Murattal_128kbps', nameAr: 'الشيخ محمد صديق المنشاوي', nameEn: 'Siddiq Al-Minshawi' }
];

export const RECITER_VOICE_OPTIONS = [
  { id: 'jalandhari', nameUrdu: 'مولانا فاتح محمد جالندھری (صوتی نراشن)', nameEn: 'Fateh Muhammad Jalandhari' },
  { id: 'shamshad', nameUrdu: 'استاد شمشاد علی خان (اردو نراشن)', nameEn: 'Shamshad Ali Khan' },
  { id: 'naeem', nameUrdu: 'قاری نعیم سلطان (اردو صوتی ترجمہ)', nameEn: 'Naeem Sultan' },
  { id: 'system', nameUrdu: 'سسٹم کی نیچرل آواز (System Speech)', nameEn: 'System Audio Voice' }
];
