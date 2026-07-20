export type PriceLevel = "$" | "$$" | "$$$";

export interface PlaceholderRestaurant {
  id: string;
  name: string;
  cuisine: string;
  area?: string;
  price: PriceLevel;
  tags: readonly string[];
  whyItFits: string;
}

export const placeholderRestaurants: readonly PlaceholderRestaurant[] = [
  { id: "alieia", name: "Alieía", cuisine: "يوناني/بحري", area: "الشاطئ", price: "$$$", tags: ["رومانسي", "بحر", "هادئ"], whyItFits: "عشاء مميز على البحر لشخصين" },
  { id: "al-basali", name: "Al Basali", cuisine: "بحري حجازي", area: "البلد", price: "$$", tags: ["شعبي", "تراثي", "قروب"], whyItFits: "تجربة بحرية أصيلة في جدة التاريخية" },
  { id: "al-kofeia", name: "Al Kofeia", cuisine: "فلسطيني", area: "الروضة", price: "$$", tags: ["عائلي", "هادئ", "جلسات"], whyItFits: "عشاء دافئ بطابع فلسطيني" },
  { id: "yaza", name: "Yaza", cuisine: "سعودي حديث", area: "السلامة", price: "$$", tags: ["سعودي", "قروب", "عصري"], whyItFits: "تبغون أكل سعودي لكن بشكل مختلف" },
  { id: "kumar", name: "Kumar", cuisine: "هندي حديث", area: "سيتي يارد", price: "$$$", tags: ["رومانسي", "مميز", "قروب"], whyItFits: "ليلة مختلفة ونكهات هندية راقية" },
  { id: "inhabit", name: "Inhabit", cuisine: "شرق أوسطي حديث", price: "$$", tags: ["هادئ", "فطور", "جلسات"], whyItFits: "جلسة مريحة وأكل عربي خفيف" },
  { id: "insoul", name: "Insoul", cuisine: "آسيوي", price: "$$", tags: ["قروب", "عصري", "عشاء"], whyItFits: "مناسب لو أذواق القروب مختلفة" },
  { id: "manko", name: "Manko", cuisine: "بيروفي آسيوي", area: "الخالدية", price: "$$$", tags: ["رومانسي", "روف توب", "سهر"], whyItFits: "موعد أو مناسبة ليلية بإطلالة" },
  { id: "tofareya", name: "Tofareya", cuisine: "سعودي حديث", price: "$$", tags: ["سعودي", "عائلي", "قروب"], whyItFits: "مناسب لتجربة أطباق سعودية متجددة" },
  { id: "sultani", name: "Sultani", cuisine: "إيراني", area: "جدة", price: "$$", tags: ["عائلي", "هادئ", "قروب"], whyItFits: "غداء أو عشاء مشبع للقروب" },
  { id: "amar", name: "AMAR", cuisine: "لبناني", area: "الخالدية", price: "$$$", tags: ["رومانسي", "جلسات", "عشاء"], whyItFits: "عشاء لبناني أنيق وهادئ" },
  { id: "niyyali", name: "Niyyali", cuisine: "لبناني", area: "الشاطئ", price: "$$$", tags: ["رومانسي", "بحر", "جلسات خارجية"], whyItFits: "مناسبة خاصة أو عشاء راقٍ" },
  { id: "habsburg", name: "Habsburg", cuisine: "عالمي/بوفيه", area: "الشاطئ", price: "$$$", tags: ["عائلي", "مناسبة", "بوفيه"], whyItFits: "مناسب لقروب أو عزومة نهاية الأسبوع" },
  { id: "the-roof", name: "The Roof", cuisine: "عالمي", area: "الشاطئ", price: "$$$", tags: ["روف توب", "سهر", "رومانسي"], whyItFits: "سهرة هادئة بعد العشاء" },
  { id: "noto", name: "Noto", cuisine: "إيطالي", area: "جدة", price: "$$$", tags: ["رومانسي", "أنيق", "عشاء"], whyItFits: "عشاء إيطالي لموعد أو مناسبة" },
  { id: "misora", name: "Misora", cuisine: "آسيوي", area: "الروضة", price: "$$$", tags: ["رومانسي", "عصري", "عشاء"], whyItFits: "تجربة آسيوية مرتبة لشخصين" },
  { id: "goa", name: "Goa", cuisine: "هندي", area: "الروضة", price: "$$", tags: ["قروب", "عائلي", "نكهات قوية"], whyItFits: "قروب يحب الأكل الهندي الحقيقي" },
  { id: "fatt", name: "Fatt", cuisine: "برغر/أمريكي", area: "جدة", price: "$$", tags: ["شباب", "سريع", "جلسات خارجية"], whyItFits: "طلعة خفيفة مع الأصحاب" },
  { id: "goodhood", name: "GoodHood", cuisine: "أمريكي حديث", area: "جدة", price: "$$", tags: ["شباب", "قروب", "كاجوال"], whyItFits: "مناسب لعشاء بسيط بلا رسمية" },
  { id: "yashi", name: "Yashi by Chef Sama Jaad", cuisine: "آسيوي", area: "جدة", price: "$$$", tags: ["ترند", "قروب", "عشاء"], whyItFits: "تبغون مكان جديد وأجواءه حيوية" },
  { id: "sucre-de-nada", name: "Sucre De Nada", cuisine: "إسباني/حلويات", area: "جدة", price: "$$", tags: ["موعد", "حلو", "هادئ"], whyItFits: "تكملة لطيفة لموعد أو جلسة خفيفة" },
  { id: "textured-bakehouse", name: "Textured Bakehouse", cuisine: "مخبوزات وبرنش", area: "الحمراء", price: "$$", tags: ["فطور", "هادئ", "تصوير"], whyItFits: "فطور أو قهوة صباحية رايقة" },
  { id: "bakery-m", name: "Bakery M", cuisine: "مخبوزات/برنش", area: "الزهراء", price: "$$", tags: ["فطور", "حلو", "كاجوال"], whyItFits: "طلعة صباح أو حلى مع القهوة" },
  { id: "will", name: "Will", cuisine: "كوكيز وقهوة", area: "الروضة", price: "$", tags: ["حلو", "سريع", "كاجوال"], whyItFits: "شيء خفيف بعد المشوار" },
  { id: "toki", name: "Toki", cuisine: "آسيوي فاخر", area: "الخالدية", price: "$$$", tags: ["رومانسي", "مناسبة", "قروب"], whyItFits: "عشاء فاخر لو الميزانية أعلى" },
] as const;
