/* AgriHealthAI — single-file application bundle (concatenated, no build step). */

/* ==================== js/core/config.js ==================== */
/* ==========================================================================
   AgriHealthAI — runtime configuration
   --------------------------------------------------------------------------
   This file contains NO secrets. It only tells the front end where an
   OPTIONAL backend lives. API keys must stay on the server (environment
   variables) and are never placed here.
   ========================================================================== */
window.AGRI_CONFIG = {
  /**
   * Base URL of the optional backend API.
   * "" means "same origin" — i.e. use the Node/Express server that also
   * serves these static files. When the site is opened as pure static files
   * (no backend), the app automatically uses clearly-labelled DEMO MODE.
   */
  apiBase: "",

  /** How long to wait for the backend health probe before assuming demo mode. */
  probeTimeoutMs: 1200,

  /** Per-request timeout for API calls. */
  requestTimeoutMs: 20000,

  /** Where demo flags / data-source strings come from (kept in i18n). */
  demoLabelKey: "common.demoBadge"
};

/* ==================== js/shared/referenceData.js ==================== */
/*
 * AgriHealthAI — Shared Reference Data
 * ------------------------------------
 * This module works both in the browser (window.AgriReference) and in Node
 * (module.exports) so the frontend demo engine and the optional backend share
 * one single source of truth.
 *
 * IMPORTANT / DISCLAIMER:
 * The figures below are *general, indicative reference ranges* compiled for
 * demonstration and education. They are NOT location-verified agronomic or
 * market advice. Yields, prices and costs vary widely by state, district,
 * season, variety, market and year. Always confirm with local Krishi Vigyan
 * Kendra (KVK) / agriculture extension officers and official mandi prices.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.AgriReference = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var UNSPLASH = "https://images.unsplash.com/";

  function img(id, w) {
    return UNSPLASH + id + "?auto=format&fit=crop&w=" + (w || 900) + "&q=70";
  }

  /* ----------------------------------------------------------------------
   * SOIL TYPES
   * -------------------------------------------------------------------- */
  var SOILS = [
    { id: "alluvial", en: "Alluvial soil", hi: "जलोढ़ मिट्टी" },
    { id: "black", en: "Black soil (regur)", hi: "काली मिट्टी (रेगुर)" },
    { id: "red", en: "Red soil", hi: "लाल मिट्टी" },
    { id: "sandy", en: "Sandy soil", hi: "रेतीली मिट्टी" },
    { id: "loamy", en: "Loamy soil", hi: "दोमट मिट्टी" },
    { id: "clay", en: "Clay soil", hi: "चिकनी मिट्टी" },
    { id: "silt", en: "Silt / silty soil", hi: "गाद (सिल्ट) मिट्टी" },
    { id: "unknown", en: "I don't know", hi: "मुझे नहीं पता" }
  ];

  var SEASONS = [
    { id: "kharif", en: "Kharif (monsoon sowing)", hi: "खरीफ (मानसून बुवाई)" },
    { id: "rabi", en: "Rabi (winter sowing)", hi: "रबी (सर्दी की बुवाई)" },
    { id: "zaid", en: "Zaid (summer sowing)", hi: "ज़ायद (ग्रीष्मकालीन बुवाई)" }
  ];

  var WATER_LEVELS = [
    { id: "low", en: "Low — mostly rain-fed", hi: "कम — मुख्यतः वर्षा आधारित" },
    { id: "medium", en: "Medium — some irrigation", hi: "मध्यम — कुछ सिंचाई" },
    { id: "high", en: "High — assured irrigation", hi: "अधिक — सुनिश्चित सिंचाई" }
  ];

  var PREFERENCES = [
    { id: "lowLabour", en: "Lower labour requirement", hi: "कम श्रम की आवश्यकता" },
    { id: "lowInvestment", en: "Lower initial investment", hi: "कम शुरुआती निवेश" },
    { id: "shortDuration", en: "Shorter growing duration", hi: "कम अवधि" },
    { id: "highReturns", en: "Higher potential returns", hi: "उच्च संभावित लाभ" }
  ];

  var UNITS = [
    { id: "acre", en: "Acre", hi: "एकड़", toAcre: 1 },
    { id: "hectare", en: "Hectare", hi: "हेक्टेयर", toAcre: 2.47105 },
    { id: "bigha", en: "Bigha (varies by state)", hi: "बीघा (राज्य के अनुसार भिन्न)", toAcre: 0.625 }
  ];

  var STATES = [
    { id: "andhra", en: "Andhra Pradesh", hi: "आंध्र प्रदेश" },
    { id: "assam", en: "Assam", hi: "असम" },
    { id: "bihar", en: "Bihar", hi: "बिहार" },
    { id: "chhattisgarh", en: "Chhattisgarh", hi: "छत्तीसगढ़" },
    { id: "delhi", en: "Delhi", hi: "दिल्ली" },
    { id: "goa", en: "Goa", hi: "गोवा" },
    { id: "gujarat", en: "Gujarat", hi: "गुजरात" },
    { id: "haryana", en: "Haryana", hi: "हरियाणा" },
    { id: "himachal", en: "Himachal Pradesh", hi: "हिमाचल प्रदेश" },
    { id: "jharkhand", en: "Jharkhand", hi: "झारखंड" },
    { id: "karnataka", en: "Karnataka", hi: "कर्नाटक" },
    { id: "kerala", en: "Kerala", hi: "केरल" },
    { id: "madhya", en: "Madhya Pradesh", hi: "मध्य प्रदेश" },
    { id: "maharashtra", en: "Maharashtra", hi: "महाराष्ट्र" },
    { id: "odisha", en: "Odisha", hi: "ओडिशा" },
    { id: "punjab", en: "Punjab", hi: "पंजाब" },
    { id: "rajasthan", en: "Rajasthan", hi: "राजस्थान" },
    { id: "tamilnadu", en: "Tamil Nadu", hi: "तमिलनाडु" },
    { id: "telangana", en: "Telangana", hi: "तेलंगाना" },
    { id: "uttarpradesh", en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
    { id: "uttarakhand", en: "Uttarakhand", hi: "उत्तराखंड" },
    { id: "westbengal", en: "West Bengal", hi: "पश्चिम बंगाल" },
    { id: "other", en: "Other / not listed", hi: "अन्य / सूची में नहीं" }
  ];


  /* ----------------------------------------------------------------------
   * CROPS
   * yieldPerAcre  : tonnes per acre (fresh weight)  [min, max]
   * pricePerQuintal: INR per quintal (1 tonne = 10 quintal) [min, max]
   * inputCostPerAcre: INR [min, max]
   * durationDays  : days from sowing to harvest [min, max]
   * -------------------------------------------------------------------- */
  var CROPS = [
    {
      id: "rice",
      emoji: "\uD83C\uDF3E",
      name: { en: "Rice / Paddy", hi: "धान (चावल)" },
      image: img("photo-1536304993881-ff6e9eefa2a6"),
      category: "cereal",
      seasons: ["kharif"],
      soils: ["alluvial", "clay", "silt", "loamy"],
      waterNeed: "high",
      durationDays: [110, 150],
      labor: "high",
      investment: "medium",
      yieldPerAcre: [1.8, 3.0],
      pricePerQuintal: [1800, 2400],
      inputCostPerAcre: [18000, 28000],
      idealPh: [5.5, 7.0],
      desc: {
        en: "A staple cereal that thrives in warm, humid conditions with standing water or assured irrigation. Central to food security across India.",
        hi: "एक प्रमुख अनाज जो गर्म, आर्द्र जलवायु और सुनिश्चित सिंचाई में अच्छी तरह बढ़ता है। भारत में खाद्य सुरक्षा का आधार।"
      },
      tips: {
        en: ["Best with assured irrigation or reliable monsoon", "Suited to clay/alluvial soils that hold water", "Requires careful water and pest management"],
        hi: ["सुनिश्चित सिंचाई या भरोसेमंद मानसून के साथ सर्वोत्तम", "पानी रोकने वाली चिकनी/जलोढ़ मिट्टी के लिए उपयुक्त", "सावधान जल व कीट प्रबंधन आवश्यक"]
      },
      risks: {
        en: ["Waterlogging & flood risk", "Bacterial blight and stem borer", "High water requirement in dry spells"],
        hi: ["जलभराव व बाढ़ का जोखिम", "जीवाणु झुलसा व तना छेदक", "सूखे में अधिक पानी की आवश्यकता"]
      },
      sowing: { methodEn: "Transplanting of 21–25 day old seedlings (or direct seeded rice where suitable)", methodHi: "21–25 दिन पुरानी पौध का रोपण (या उपयुक्त हो तो सीधी बुवाई)", spacing: "20 × 15 cm", depth: "2–3 cm (seed)", seedRateEn: "Transplanted: ~12–16 kg/acre nursery seed", seedRateHi: "रोपाई: लगभग 12–16 किग्रा/एकड़ नर्सरी बीज" },
      irrigationIntervalDays: [4, 7],
      stages: [
        { en: "Nursery & transplanting", hi: "नर्सरी व रोपाई", from: 0, to: 25 },
        { en: "Tillering", hi: "कल्ले फूटना", from: 25, to: 55 },
        { en: "Panicle initiation", hi: "बाली बनना", from: 55, to: 85 },
        { en: "Flowering & grain filling", hi: "फूल व दाना भरना", from: 85, to: 115 },
        { en: "Maturity & harvest", hi: "पकाई व कटाई", from: 115, to: 150 }
      ]
    },
    {
      id: "wheat",
      emoji: "\uD83C\uDF3E",
      name: { en: "Wheat", hi: "गेहूँ" },
      image: img("photo-1574323347407-f5e1ad6d020b"),
      category: "cereal",
      seasons: ["rabi"],
      soils: ["alluvial", "loamy", "clay", "silt"],
      waterNeed: "medium",
      durationDays: [110, 140],
      labor: "medium",
      investment: "medium",
      yieldPerAcre: [1.6, 2.4],
      pricePerQuintal: [2000, 2600],
      inputCostPerAcre: [14000, 22000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A leading winter cereal that performs well in cool, dry growing seasons with 4–6 timely irrigations.",
        hi: "प्रमुख सर्दी की फसल जो ठंडे, शुष्क मौसम और 4–6 समय पर सिंचाई में अच्छा प्रदर्शन करती है।"
      },
      tips: {
        en: ["Sow around late Oct–Nov when temperature drops", "Crown-root initiation stage is most sensitive to water stress", "Avoid excess nitrogen which causes lodging"],
        hi: ["अक्टूबर अंत–नवंबर में तापमान गिरने पर बुवाई करें", "ताज जड़ बनने की अवस्था में जल तनाव सर्वाधिक नुकसानदेह", "अधिक नाइट्रोजन से पौधे गिरने की समस्या होती है"]
      },
      risks: {
        en: ["Terminal heat in late sowing", "Yellow rust and aphids", "Price fluctuation around harvest"],
        hi: ["देर से बुवाई में अंतिम गर्मी", "पीला रतुआ व माहू", "कटाई के समय भाव में उतार-चढ़ाव"]
      },
      sowing: { methodEn: "Line sowing with seed drill", methodHi: "सीड ड्रिल से कतार बुवाई", spacing: "20–22 cm between rows", depth: "4–5 cm", seedRateEn: "~40 kg/acre", seedRateHi: "लगभग 40 किग्रा/एकड़" },
      irrigationIntervalDays: [20, 30],
      stages: [
        { en: "Sowing & germination", hi: "बुवाई व अंकुरण", from: 0, to: 15 },
        { en: "Crown root initiation", hi: "ताज जड़ बनना", from: 15, to: 25 },
        { en: "Tillering", hi: "कल्ले फूटना", from: 25, to: 55 },
        { en: "Jointing & flowering", hi: "गाँठ व फूल", from: 55, to: 90 },
        { en: "Grain filling & harvest", hi: "दाना भरना व कटाई", from: 90, to: 140 }
      ]
    },
    {
      id: "maize",
      emoji: "\uD83C\uDF3D",
      name: { en: "Maize (Corn)", hi: "मक्का" },
      image: img("photo-1551754655-cd27e38d2076"),
      category: "cereal",
      seasons: ["kharif", "rabi", "zaid"],
      soils: ["loamy", "alluvial", "red", "sandy"],
      waterNeed: "medium",
      durationDays: [90, 120],
      labor: "medium",
      investment: "medium",
      yieldPerAcre: [1.8, 2.8],
      pricePerQuintal: [1900, 2300],
      inputCostPerAcre: [14000, 24000],
      idealPh: [5.8, 7.0],
      desc: {
        en: "A versatile cereal for grain, fodder and industrial use, well drained soils and moderate inputs.",
        hi: "अनाज, चारे व उद्योग के लिए बहुमुखी फसल; अच्छे जल निकास वाली मिट्टी और मध्यम लागत में उपयुक्त।"
      },
      tips: {
        en: ["Very responsive to timely nitrogen", "Critical water: knee-high to tasselling", "Avoid waterlogging at all stages"],
        hi: ["समय पर नाइट्रोजन देने से अच्छा लाभ", "घुटने तक ऊँचाई से भुट्टा बनने तक पानी आवश्यक", "हर अवस्था में जलभराव से बचें"]
      },
      risks: {
        en: ["Fall armyworm", "Stem lodging in winds", "Moisture stress at flowering"],
        hi: ["फॉल आर्मीवर्म", "हवा में तना गिरना", "फूल के समय नमी की कमी"]
      },
      sowing: { methodEn: "Ridge & furrow or flat line sowing", methodHi: "मेड़-नाली या सपाट कतार बुवाई", spacing: "60 × 20 cm", depth: "3–5 cm", seedRateEn: "~8–10 kg/acre", seedRateHi: "लगभग 8–10 किग्रा/एकड़" },
      irrigationIntervalDays: [8, 12],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 10 },
        { en: "Vegetative (V stages)", hi: "वानस्पतिक वृद्धि", from: 10, to: 45 },
        { en: "Tasselling & silking", hi: "भुट्टा व रेशा", from: 45, to: 70 },
        { en: "Grain filling", hi: "दाना भरना", from: 70, to: 95 },
        { en: "Maturity & harvest", hi: "पकाई व कटाई", from: 95, to: 120 }
      ]
    },
    {
      id: "chickpea",
      emoji: "\uD83E\uDED8",
      name: { en: "Chickpea (Chana)", hi: "चना" },
      image: img("photo-1610970881699-44a5587cabec"),
      category: "pulse",
      seasons: ["rabi"],
      soils: ["black", "loamy", "clay", "sandy"],
      waterNeed: "low",
      durationDays: [95, 120],
      labor: "low",
      investment: "low",
      yieldPerAcre: [0.6, 1.1],
      pricePerQuintal: [4800, 5800],
      inputCostPerAcre: [7000, 12000],
      idealPh: [6.0, 8.0],
      desc: {
        en: "A nitrogen-fixing pulse that improves soil health and needs little water — ideal for dryland rabi farming.",
        hi: "नाइट्रोजन स्थिरीकरण करने वाली दलहन जो मिट्टी सुधारती है और कम पानी में उगती है — सूखी रबी खेती के लिए उपयुक्त।"
      },
      tips: {
        en: ["Grows well on residual moisture", "Do not over-irrigate before flowering", "Seed treatment helps against wilt"],
        hi: ["बची नमी पर अच्छी वृद्धि", "फूल से पहले अधिक सिंचाई न करें", "बीजोपचार उकठा से बचाव में सहायक"]
      },
      risks: {
        en: ["Pod borer (Helicoverpa)", "Wilt in poorly drained soil", "Heat stress in late sowing"],
        hi: ["फली छेदक (हेलिकोवर्पा)", "खराब जल निकास में उकठा", "देर बुवाई में गर्मी का तनाव"]
      },
      sowing: { methodEn: "Line sowing after one pre-sowing irrigation if possible", methodHi: "संभव हो तो एक पूर्व-सिंचाई के बाद कतार बुवाई", spacing: "30 × 10 cm", depth: "5–7 cm", seedRateEn: "~18–20 kg/acre (desi), less for bold types", seedRateHi: "लगभग 18–20 किग्रा/एकड़ (देशी), मोटी किस्म में कम" },
      irrigationIntervalDays: [18, 28],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 10 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 10, to: 40 },
        { en: "Flowering & podding", hi: "फूल व फली", from: 40, to: 75 },
        { en: "Pod filling & maturity", hi: "फली भरना व पकाई", from: 75, to: 120 }
      ]
    },
    {
      id: "mustard",
      emoji: "\uD83C\uDF3C",
      name: { en: "Mustard / Rapeseed", hi: "सरसों" },
      image: img("photo-1508747703725-719777637510"),
      category: "oilseed",
      seasons: ["rabi"],
      soils: ["loamy", "alluvial", "sandy", "clay"],
      waterNeed: "low",
      durationDays: [110, 140],
      labor: "low",
      investment: "low",
      yieldPerAcre: [0.4, 0.8],
      pricePerQuintal: [5200, 6200],
      inputCostPerAcre: [6000, 11000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A winter oilseed that gives edible oil and oil-cake, tolerating light soils and limited water.",
        hi: "सर्दी की तिलहन फसल जो खाद्य तेल व खली देती है; हल्की मिट्टी और सीमित पानी सहती है।"
      },
      tips: {
        en: ["Sow early to escape aphid and heat", "Very sensitive to waterlogging", "Sulphur improves oil content"],
        hi: ["माहू व गर्मी से बचने के लिए जल्दी बुवाई", "जलभराव के प्रति अति संवेदनशील", "गंधक से तेल की मात्रा बढ़ती है"]
      },
      risks: {
        en: ["Mustard aphid", "White rust", "Poor seed set in high temperature"],
        hi: ["सरसों का माहू", "सफेद रतुआ", "अधिक तापमान में कम दाना"]
      },
      sowing: { methodEn: "Line sowing in moist seedbed", methodHi: "नम क्यारी में कतार बुवाई", spacing: "30 × 10 cm", depth: "2–3 cm", seedRateEn: "~1.5–2 kg/acre", seedRateHi: "लगभग 1.5–2 किग्रा/एकड़" },
      irrigationIntervalDays: [25, 35],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 12 },
        { en: "Rosette & vegetative", hi: "पत्ती व वानस्पतिक", from: 12, to: 45 },
        { en: "Flowering", hi: "फूल", from: 45, to: 75 },
        { en: "Siliqua filling & maturity", hi: "फली भरना व पकाई", from: 75, to: 140 }
      ]
    },
    {
      id: "groundnut",
      emoji: "\uD83E\uDD5C",
      name: { en: "Groundnut (Peanut)", hi: "मूँगफली" },
      image: img("photo-1567892737950-30c4db37cd89"),
      category: "oilseed",
      seasons: ["kharif", "zaid"],
      soils: ["sandy", "loamy", "red"],
      waterNeed: "medium",
      durationDays: [100, 130],
      labor: "medium",
      investment: "medium",
      yieldPerAcre: [0.6, 1.1],
      pricePerQuintal: [5500, 6800],
      inputCostPerAcre: [11000, 18000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "An oilseed and protein crop needing well-drained, light soils; adds nitrogen and fits dryland rotations.",
        hi: "तिलहन व प्रोटीन फसल जो अच्छे जल निकास वाली हल्की मिट्टी चाहती है; नाइट्रोजन जोड़ती है।"
      },
      tips: {
        en: ["Gypsum/calcium at flowering improves pod filling", "Avoid heavy soils and standing water", "Harvest promptly to avoid aflatoxin risk"],
        hi: ["फूल के समय जिप्सम/कैल्शियम से फली भरती है", "भारी मिट्टी व जलभराव से बचें", "एफ्लाटॉक्सिन से बचने हेतु समय पर कटाई"]
      },
      risks: {
        en: ["Leaf miner and thrips", "Tikka (leaf spot)", "Aflatoxin in wet harvest"],
        hi: ["पत्ती सुरंगक व थ्रिप्स", "टिक्का (पत्ती धब्बा)", "गीली कटाई में एफ्लाटॉक्सिन"]
      },
      sowing: { methodEn: "Line sowing on flat or ridge beds", methodHi: "सपाट या मेड़ में कतार बुवाई", spacing: "30 × 10 cm", depth: "4–5 cm", seedRateEn: "~30–35 kg/acre kernels", seedRateHi: "लगभग 30–35 किग्रा/एकड़ गिरी" },
      irrigationIntervalDays: [8, 12],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 10 },
        { en: "Vegetative & pegging", hi: "वानस्पतिक व सुई अवस्था", from: 10, to: 45 },
        { en: "Flowering & pod formation", hi: "फूल व फली बनना", from: 45, to: 80 },
        { en: "Pod filling & maturity", hi: "फली भरना व पकाई", from: 80, to: 130 }
      ]
    },
    {
      id: "soybean",
      emoji: "\uD83C\uDF31",
      name: { en: "Soybean", hi: "सोयाबीन" },
      image: img("photo-1599940824399-b87987ceb72a"),
      category: "oilseed",
      seasons: ["kharif"],
      soils: ["black", "loamy", "clay"],
      waterNeed: "medium",
      durationDays: [90, 110],
      labor: "low",
      investment: "medium",
      yieldPerAcre: [0.5, 0.9],
      pricePerQuintal: [4300, 5200],
      inputCostPerAcre: [10000, 16000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A high-protein rainfed oilseed that enriches soil with nitrogen and suits rainfed kharif rotations.",
        hi: "उच्च प्रोटीन वाली वर्षा आधारित तिलहन जो मिट्टी में नाइट्रोजन बढ़ाती है।"
      },
      tips: {
        en: ["Seed treatment with Rhizobium helps nodulation", "Avoid waterlogging", "Timely sowing with monsoon"],
        hi: ["राइजोबियम बीजोपचार से ग्रंथियाँ बनती हैं", "जलभराव से बचें", "मानसून के साथ समय पर बुवाई"]
      },
      risks: {
        en: ["Yellow mosaic virus (whitefly)", "Girdle beetle", "Water stress at pod fill"],
        hi: ["पीला मोज़ेक वायरस (सफेद मक्खी)", "तना भृंग", "फली भरने में जल तनाव"]
      },
      sowing: { methodEn: "Line sowing after monsoon onset", methodHi: "मानसून शुरू होने पर कतार बुवाई", spacing: "45 × 5 cm", depth: "3–4 cm", seedRateEn: "~28–30 kg/acre", seedRateHi: "लगभग 28–30 किग्रा/एकड़" },
      irrigationIntervalDays: [10, 15],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 10 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 10, to: 40 },
        { en: "Flowering & podding", hi: "फूल व फली", from: 40, to: 70 },
        { en: "Pod fill & maturity", hi: "फली भरना व पकाई", from: 70, to: 110 }
      ]
    },
    {
      id: "cotton",
      emoji: "\uD83C\uDF3F",
      name: { en: "Cotton", hi: "कपास" },
      image: img("photo-1594050066251-6b6e6d8c66c8"),
      category: "cash",
      seasons: ["kharif"],
      soils: ["black", "loamy", "red"],
      waterNeed: "medium",
      durationDays: [150, 200],
      labor: "high",
      investment: "high",
      yieldPerAcre: [0.5, 1.0],
      pricePerQuintal: [6500, 8000],
      inputCostPerAcre: [22000, 40000],
      idealPh: [6.0, 8.0],
      desc: {
        en: "A major cash crop of black soils with high potential returns but intensive management and long duration.",
        hi: "काली मिट्टी की प्रमुख नकदी फसल; उच्च संभावित लाभ पर अधिक प्रबंधन व लंबी अवधि।"
      },
      tips: {
        en: ["Long duration — plan cash flow carefully", "Integration with pulses reduces risk", "Scout and manage pests early (bollworm, whitefly)"],
        hi: ["लंबी अवधि — नकदी प्रबंधन ध्यान से करें", "दलहन के साथ मिश्रण से जोखिम कम", "कीट (बॉलवर्म, सफेद मक्खी) की जल्दी निगरानी"]
      },
      risks: {
        en: ["High pest & insecticide cost", "Pink bollworm", "Market price volatility"],
        hi: ["उच्च कीट व कीटनाशक लागत", "गुलाबी सुंडी", "बाज़ार भाव में उतार-चढ़ाव"]
      },
      sowing: { methodEn: "Line sowing on flat/ridge beds", methodHi: "सपाट/मेड़ में कतार बुवाई", spacing: "60–90 × 30–45 cm", depth: "3–5 cm", seedRateEn: "~1.5–2.5 kg/acre (BT/ non-BT as permitted)", seedRateHi: "लगभग 1.5–2.5 किग्रा/एकड़" },
      irrigationIntervalDays: [7, 12],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 12 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 12, to: 60 },
        { en: "Squaring & flowering", hi: "कली व फूल", from: 60, to: 120 },
        { en: "Boll development", hi: "टिंडा बनना", from: 120, to: 170 },
        { en: "Boll opening & picking", hi: "टिंडा खुलना व चुनाई", from: 170, to: 200 }
      ]
    },
    {
      id: "bajra",
      emoji: "\uD83C\uDF3E",
      name: { en: "Pearl Millet (Bajra)", hi: "बाजरा" },
      image: img("photo-1586201375761-83865001e31c"),
      category: "millet",
      seasons: ["kharif", "zaid"],
      soils: ["sandy", "loamy", "red", "black"],
      waterNeed: "low",
      durationDays: [75, 100],
      labor: "low",
      investment: "low",
      yieldPerAcre: [0.5, 1.0],
      pricePerQuintal: [2200, 2800],
      inputCostPerAcre: [5000, 9000],
      idealPh: [6.0, 8.0],
      desc: {
        en: "A hardy, drought-tolerant nutri-cereal suited to low-rainfall, light-soil regions and low budgets.",
        hi: "सूखा सहने वाला पोषक अनाज; कम वर्षा, हल्की मिट्टी और कम बजट के लिए उपयुक्त।"
      },
      tips: {
        en: ["Excellent choice for low rainfall & sandy soil", "Responds to one or two life-saving irrigations", "Low input and low risk"],
        hi: ["कम वर्षा व रेतीली मिट्टी के लिए उत्तम", "एक-दो जीवनरक्षक सिंचाई से लाभ", "कम लागत व कम जोखिम"]
      },
      risks: {
        en: ["Downy mildew", "Bird damage near harvest", "Yield limited under very low fertility"],
        hi: ["डाउनी मिल्ड्यू", "कटाई के समय पक्षी नुकसान", "अत्यंत कम उपजाऊपन में कम पैदावार"]
      },
      sowing: { methodEn: "Line sowing in moist seedbed", methodHi: "नम क्यारी में कतार बुवाई", spacing: "45 × 10–15 cm", depth: "2–3 cm", seedRateEn: "~1.5–2 kg/acre", seedRateHi: "लगभग 1.5–2 किग्रा/एकड़" },
      irrigationIntervalDays: [12, 20],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 8 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 8, to: 35 },
        { en: "Flowering & grain formation", hi: "फूल व दाना", from: 35, to: 70 },
        { en: "Maturity & harvest", hi: "पकाई व कटाई", from: 70, to: 100 }
      ]
    },
    {
      id: "moong",
      emoji: "\uD83C\uDF31",
      name: { en: "Green Gram (Moong)", hi: "मूंग" },
      image: img("photo-1599940824399-b87987ceb72a"),
      category: "pulse",
      seasons: ["kharif", "zaid"],
      soils: ["loamy", "sandy", "alluvial", "black"],
      waterNeed: "low",
      durationDays: [60, 80],
      labor: "low",
      investment: "low",
      yieldPerAcre: [0.25, 0.45],
      pricePerQuintal: [7000, 8600],
      inputCostPerAcre: [4500, 8000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A short-duration protein pulse that fixes nitrogen, fits between crops, and needs very little water.",
        hi: "कम अवधि की प्रोटीन दलहन; नाइट्रोजन स्थिर करती है, फसलों के बीच उपयुक्त, कम पानी चाहिए।"
      },
      tips: {
        en: ["Great for short windows & low budgets", "Avoid excess irrigation (causes vegetative growth)", "Harvest in 2–3 pickings to reduce loss"],
        hi: ["कम समय व कम बजट के लिए बेहतरीन", "अधिक सिंचाई से बचें (अधिक पत्ते बनते हैं)", "2–3 बार चुनकर कटाई से नुकसान कम"]
      },
      risks: {
        en: ["Yellow mosaic & whitefly", "Flower drop in rain", "Low yield under shade"],
        hi: ["पीला मोज़ेक व सफेद मक्खी", "वर्षा में फूल गिरना", "छाया में कम पैदावार"]
      },
      sowing: { methodEn: "Line sowing", methodHi: "कतार बुवाई", spacing: "30 × 10 cm", depth: "3–4 cm", seedRateEn: "~8–10 kg/acre", seedRateHi: "लगभग 8–10 किग्रा/एकड़" },
      irrigationIntervalDays: [10, 15],
      stages: [
        { en: "Sowing & emergence", hi: "बुवाई व अंकुरण", from: 0, to: 7 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 7, to: 30 },
        { en: "Flowering & podding", hi: "फूल व फली", from: 30, to: 55 },
        { en: "Pod filling & harvest", hi: "फली भरना व कटाई", from: 55, to: 80 }
      ]
    },
    {
      id: "tomato",
      emoji: "\uD83C\uDF45",
      name: { en: "Tomato", hi: "टमाटर" },
      image: img("photo-1592924357228-91a4daadcfea"),
      category: "vegetable",
      seasons: ["rabi", "zaid", "kharif"],
      soils: ["loamy", "red", "alluvial"],
      waterNeed: "high",
      durationDays: [100, 140],
      labor: "high",
      investment: "high",
      yieldPerAcre: [8, 16],
      pricePerQuintal: [800, 2500],
      inputCostPerAcre: [30000, 55000],
      idealPh: [6.0, 7.0],
      desc: {
        en: "A high-value vegetable with strong demand but price volatility; needs staking, regular irrigation and pest care.",
        hi: "उच्च मूल्य की सब्ज़ी, मजबूत माँग पर भाव अस्थिर; सहारा, नियमित सिंचाई व कीट देखभाल आवश्यक।"
      },
      tips: {
        en: ["Consider staking and mulching for quality", "Frequent small irrigations preferred", "Market linkage/planning matters more than yield alone"],
        hi: ["गुणवत्ता हेतु सहारा व मल्चिंग पर विचार करें", "थोड़ी-थोड़ी बार-बार सिंचाई बेहतर", "केवल पैदावार से अधिक बाज़ार जोड़ महत्वपूर्ण"]
      },
      risks: {
        en: ["Very high price volatility", "Early blight & fruit borer", "Perishable — needs quick sale/storage"],
        hi: ["अत्यधिक भाव अस्थिरता", "अगेती झुलसा व फल छेदक", "जल्दी खराब — तेज़ बिक्री/भंडारण आवश्यक"]
      },
      sowing: { methodEn: "Transplant 25–30 day old seedlings on raised beds", methodHi: "25–30 दिन पुरानी पौध उठी क्यारियों में रोपें", spacing: "60 × 45 cm", depth: "Seedling collar at soil level", seedRateEn: "~80–100 g seed/acre (nursery)", seedRateHi: "लगभग 80–100 ग्राम बीज/एकड़" },
      irrigationIntervalDays: [3, 5],
      stages: [
        { en: "Nursery & transplanting", hi: "नर्सरी व रोपाई", from: 0, to: 30 },
        { en: "Vegetative & flowering", hi: "वृद्धि व फूल", from: 30, to: 60 },
        { en: "Fruit set & development", hi: "फल बनना", from: 60, to: 100 },
        { en: "Harvest (multiple pickings)", hi: "कटाई (कई बार)", from: 100, to: 140 }
      ]
    },
    {
      id: "potato",
      emoji: "\uD83E\uDD54",
      name: { en: "Potato", hi: "आलू" },
      image: img("photo-1518977676601-b53f82aba655"),
      category: "vegetable",
      seasons: ["rabi"],
      soils: ["loamy", "alluvial", "sandy"],
      waterNeed: "medium",
      durationDays: [80, 110],
      labor: "medium",
      investment: "high",
      yieldPerAcre: [6, 12],
      pricePerQuintal: [700, 1800],
      inputCostPerAcre: [30000, 50000],
      idealPh: [5.5, 6.5],
      desc: {
        en: "A high-yielding tuber crop needing cool weather, loose soil and assured irrigation; storage is key to returns.",
        hi: "उच्च उपज वाली कंद फसल; ठंडा मौसम, भुरभुरी मिट्टी व सुनिश्चित सिंचाई चाहिए; भंडारण से लाभ तय होता है।"
      },
      tips: {
        en: ["Use certified disease-free seed tubers", "Earthing up improves tuber development", "Cold storage strongly affects final price"],
        hi: ["प्रमाणित रोगमुक्त बीज कंद उपयोग करें", "मिट्टी चढ़ाने से कंद विकास बेहतर", "शीत भंडारण अंतिम भाव को प्रभावित करता है"]
      },
      risks: {
        en: ["Late blight", "Price crash at peak harvest", "Seed cost & storage losses"],
        hi: ["पछेती झुलसा", "कटाई के चरम पर भाव गिरना", "बीज लागत व भंडारण नुकसान"]
      },
      sowing: { methodEn: "Plant seed tubers on ridges", methodHi: "मेड़ों में बीज कंद रोपें", spacing: "60 × 20 cm", depth: "5–8 cm", seedRateEn: "~600–800 kg/acre seed tubers", seedRateHi: "लगभग 600–800 किग्रा/एकड़ बीज कंद" },
      irrigationIntervalDays: [6, 10],
      stages: [
        { en: "Planting & sprouting", hi: "रोपाई व अंकुरण", from: 0, to: 20 },
        { en: "Vegetative & tuber initiation", hi: "वृद्धि व कंद बनना", from: 20, to: 55 },
        { en: "Tuber bulking", hi: "कंद बढ़ना", from: 55, to: 85 },
        { en: "Maturity & harvest", hi: "पकाई व खुदाई", from: 85, to: 110 }
      ]
    },
    {
      id: "onion",
      emoji: "\uD83E\uDDC5",
      name: { en: "Onion", hi: "प्याज" },
      image: img("photo-1508747703725-719777637510"),
      category: "vegetable",
      seasons: ["rabi", "kharif"],
      soils: ["loamy", "alluvial", "silt", "red"],
      waterNeed: "medium",
      durationDays: [100, 150],
      labor: "high",
      investment: "medium",
      yieldPerAcre: [6, 12],
      pricePerQuintal: [1000, 3000],
      inputCostPerAcre: [25000, 40000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A widely traded bulb crop with strong market demand and price swings; good storage extends selling window.",
        hi: "व्यापक रूप से कारोबार वाली कंद फसल; मजबूत माँग पर भाव उतार-चढ़ाव; भंडारण बिक्री अवधि बढ़ाता है।"
      },
      tips: {
        en: ["Cure bulbs well before storage", "Avoid excess nitrogen late in season", "Plan around harvest-time price cycles"],
        hi: ["भंडारण से पहले कंद अच्छे से सुखाएँ", "सीज़न के अंत में अधिक नाइट्रोजन से बचें", "कटाई के समय भाव चक्र का ध्यान रखें"]
      },
      risks: {
        en: ["Thrips and purple blotch", "Price volatility", "Storage rot"],
        hi: ["थ्रिप्स व बैंगनी धब्बा", "भाव अस्थिरता", "भंडारण में सड़न"]
      },
      sowing: { methodEn: "Transplant seedlings on raised beds", methodHi: "उठी क्यारियों में पौध रोपें", spacing: "15 × 10 cm", depth: "Shallow, collar level", seedRateEn: "~3–4 kg seed/acre (nursery)", seedRateHi: "लगभग 3–4 किग्रा बीज/एकड़" },
      irrigationIntervalDays: [6, 10],
      stages: [
        { en: "Nursery & transplanting", hi: "नर्सरी व रोपाई", from: 0, to: 45 },
        { en: "Vegetative", hi: "वानस्पतिक", from: 45, to: 80 },
        { en: "Bulb development", hi: "कंद विकास", from: 80, to: 120 },
        { en: "Maturity & harvest", hi: "पकाई व कटाई", from: 120, to: 150 }
      ]
    },
    {
      id: "sugarcane",
      emoji: "\uD83C\uDF3E",
      name: { en: "Sugarcane", hi: "गन्ना" },
      image: img("photo-1596040033229-a9821ebd058d"),
      category: "cash",
      seasons: ["kharif"],
      soils: ["loamy", "alluvial", "black", "clay"],
      waterNeed: "high",
      durationDays: [300, 365],
      labor: "high",
      investment: "high",
      yieldPerAcre: [28, 45],
      pricePerQuintal: [280, 360],
      inputCostPerAcre: [45000, 70000],
      idealPh: [6.0, 7.5],
      desc: {
        en: "A long-duration cash crop for assured markets (sugar mills); needs high water and heavy investment.",
        hi: "सुनिश्चित बाज़ार (चीनी मिल) हेतु लंबी अवधि की नकदी फसल; अधिक पानी व भारी निवेश चाहिए।"
      },
      tips: {
        en: ["Requires assured irrigation all year", "Mill proximity & payment reliability matter", "Plan rotations to avoid soil fatigue"],
        hi: ["पूरे वर्ष सुनिश्चित सिंचाई आवश्यक", "मिल की निकटता व भुगतान भरोसा महत्वपूर्ण", "मिट्टी थकान से बचने हेतु फसल चक्र"]
      },
      risks: {
        en: ["Very long payback period", "Mill payment delays", "High water requirement"],
        hi: ["बहुत लंबी लागत वापसी अवधि", "मिल भुगतान में देरी", "अधिक पानी की आवश्यकता"]
      },
      sowing: { methodEn: "Planting of 2–3 bud setts in furrows", methodHi: "नालियों में 2–3 आँख के टुकड़े रोपें", spacing: "90–120 cm rows", depth: "5–8 cm", seedRateEn: "~1.2–1.5 tonnes/acre setts", seedRateHi: "लगभग 1.2–1.5 टन/एकड़" },
      irrigationIntervalDays: [7, 12],
      stages: [
        { en: "Planting & germination", hi: "रोपाई व अंकुरण", from: 0, to: 45 },
        { en: "Tillering", hi: "कल्ले फूटना", from: 45, to: 120 },
        { en: "Grand growth", hi: "तेज़ वृद्धि", from: 120, to: 270 },
        { en: "Maturity & harvest", hi: "पकाई व कटाई", from: 270, to: 365 }
      ]
    }
  ];

  /* ----------------------------------------------------------------------
   * CROP DISEASE / DISORDER REFERENCE
   * General, educational descriptions of common crop problems with safe,
   * non-chemical-first recovery steps. NO chemical doses are given — always
   * confirm diagnosis and any treatment with the local KVK / extension
   * officer. A photo + symptom checklist is a screening aid, not a lab test.
   * -------------------------------------------------------------------- */
  var pair = function (en, hi) { return { en: en, hi: hi }; };

  var CROP_DISEASES = [
    /* ---------------- RICE ---------------- */
    {
      id: "rice-blast", crops: ["rice"], kind: "fungal",
      name: pair("Rice blast", "धान का झुलसा (ब्लास्ट)"),
      sign: pair("Spindle- or diamond-shaped grey spots with brown margins on leaves; the neck/panicle may blacken and break.", "पत्तियों पर भूरे किनारे वाले तकली/हीरे के आकार के स्लेटी धब्बे; गर्दन/बाली काली होकर टूट सकती है।"),
      symptoms: [
        pair("Diamond- or spindle-shaped leaf spots", "तकली/हीरे के आकार के पत्ती धब्बे"),
        pair("Grey centre with a dark brown edge", "स्लेटी केंद्र व गहरा भूरा किनारा"),
        pair("Neck or panicle blackens and breaks", "गर्दन या बाली काली होकर टूटना")
      ],
      recovery: [
        pair("Remove and destroy badly infected leaves and panicles; do not add them to compost.", "गंभीर रूप से संक्रमित पत्तियाँ व बालियाँ हटाकर नष्ट करें; कंपोस्ट में न डालें।"),
        pair("Avoid excess nitrogen and keep good drainage and open spacing.", "अधिक नाइट्रोजन से बचें; जल निकास व खुली दूरी रखें।"),
        pair("Grow a blast-resistant variety next season and use certified, treated seed.", "अगली बार रोग-प्रतिरोधी किस्म लगाएँ और प्रमाणित उपचारित बीज लें।"),
        pair("Ask your KVK to confirm the disease and advise any approved fungicide — never guess doses.", "रोग की पुष्टि व स्वीकृत फफूंदनाशी की सलाह हेतु KVK से पूछें — अनुमान से मात्रा न लें।")
      ],
      prevention: [
        pair("Use resistant varieties and balanced nutrition.", "प्रतिरोधी किस्में व संतुलित पोषण अपनाएँ।"),
        pair("Avoid dense sowing and long periods of leaf wetness.", "घनी बुवाई व पत्तियों के लंबे समय तक गीले रहने से बचें।")
      ]
    },
    {
      id: "rice-bacterial-blight", crops: ["rice"], kind: "bacterial",
      name: pair("Bacterial leaf blight", "जीवाणु पत्ती झुलसा"),
      sign: pair("Water-soaked yellow-white lesions along leaf edges; seedlings may wilt; milky ooze may appear early in the morning.", "पत्ती के किनारों पर पानी जैसे पीले-सफेद धब्बे; पौधे मुरझा सकते हैं; सुबह दूधिया स्राव दिख सकता है।"),
      symptoms: [
        pair("Leaf edges turn yellow/white and dry", "पत्ती के किनारे पीले/सफेद होकर सूखना"),
        pair("Water-soaked streaks on leaves", "पत्तियों पर पानी जैसी धारियाँ"),
        pair("Seedlings wilt or die in patches", "पौधे मुरझाना या धब्बों में मरना")
      ],
      recovery: [
        pair("Drain standing water and stop water moving between fields.", "खड़ा पानी निकालें और खेतों के बीच पानी का बहाव रोकें।"),
        pair("Remove infected stubble; clean tools before moving to another field.", "संक्रमित ठूँठ हटाएँ; दूसरे खेत में जाने से पहले औज़ार साफ़ करें।"),
        pair("Reduce nitrogen and keep nutrition balanced.", "नाइट्रोजन कम करें और पोषण संतुलित रखें।"),
        pair("Consult your KVK about approved management and resistant varieties.", "स्वीकृत प्रबंधन व प्रतिरोधी किस्मों के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Use clean seed and resistant varieties.", "साफ़ बीज व प्रतिरोधी किस्में उपयोग करें।"),
        pair("Avoid excess water and plant injury.", "अधिक पानी व पौधों को चोट से बचाएँ।")
      ]
    },
    /* ---------------- WHEAT ---------------- */
    {
      id: "wheat-yellow-rust", crops: ["wheat"], kind: "fungal",
      name: pair("Yellow (stripe) rust", "पीला रतुआ"),
      sign: pair("Bright yellow-orange powdery stripes on leaves; spores rub off on fingers.", "पत्तियों पर चमकीली पीली-नारंगी पाउडर जैसी धारियाँ; उँगली पर पाउडर लगता है।"),
      symptoms: [
        pair("Yellow/orange stripes on leaves", "पत्तियों पर पीली/नारंगी धारियाँ"),
        pair("Yellow powder rubs off", "पीला पाउडर उँगली पर लगना"),
        pair("Stunted plants or shrivelled grain", "पौधे बौने या दाना सिकुड़ना")
      ],
      recovery: [
        pair("Remove volunteer wheat and infected crop debris.", "स्वयं उगे गेहूँ व संक्रमित फसल अवशेष हटाएँ।"),
        pair("Avoid excess nitrogen and very late sowing.", "अधिक नाइट्रोजन व बहुत देर से बुवाई से बचें।"),
        pair("Grow rust-resistant varieties next season.", "अगली बार रतुआ-प्रतिरोधी किस्में लगाएँ।"),
        pair("Report it to your KVK and follow the local rust advisory; do not spray by guess.", "KVK को बताएँ और स्थानीय रतुआ सलाह मानें; अनुमान से छिड़काव न करें।")
      ],
      prevention: [
        pair("Resistant varieties, timely sowing and balanced nutrition.", "प्रतिरोधी किस्में, समय पर बुवाई व संतुलित पोषण।"),
        pair("Scout fields weekly during cool, moist weather.", "ठंडे, नम मौसम में साप्ताहिक निगरानी करें।")
      ]
    },
    {
      id: "wheat-loose-smut", crops: ["wheat"], kind: "fungal",
      name: pair("Loose smut", "गेहूँ का कंडवा (लूज़ स्मट)"),
      sign: pair("The ear is replaced by a black powdery mass; grains are destroyed.", "बाली की जगह काला पाउडर भर जाता है; दाने नष्ट हो जाते हैं।"),
      symptoms: [
        pair("Black powder in place of grain", "दाने की जगह काला पाउडर"),
        pair("Ear looks loose and black", "बाली ढीली व काली दिखना"),
        pair("Smutty smell at flowering", "फूल के समय कंडवे जैसी गंध")
      ],
      recovery: [
        pair("Bag and remove smutted ears carefully before they burst open.", "फटने से पहले कंडवा वाली बालियाँ थैली में हटाएँ।"),
        pair("Clean the threshing floor and equipment afterwards.", "बाद में मड़ाई स्थल व औज़ार साफ़ करें।"),
        pair("Use certified, treated seed next season.", "अगली बार प्रमाणित उपचारित बीज लें।"),
        pair("Ask your KVK about suitable seed treatment.", "उपयुक्त बीजोपचार के लिए KVK से पूछें।")
      ],
      prevention: [
        pair("Certified treated seed and crop rotation.", "प्रमाणित उपचारित बीज व फसल चक्र।"),
        pair("Do not save seed from an infected field.", "संक्रमित खेत का बीज न रखें।")
      ]
    },
    /* ---------------- MAIZE ---------------- */
    {
      id: "maize-fall-armyworm", crops: ["maize"], kind: "insect",
      name: pair("Fall armyworm", "फॉल आर्मीवर्म (सूंडी)"),
      sign: pair("Ragged holes in young leaves, damaged whorls and moist sawdust-like frass.", "छोटी पत्तियों में फटे छेद, भुट्टे का घेरा खराब और गीला बुरादा जैसा मल।"),
      symptoms: [
        pair("Ragged holes in young leaves", "छोटी पत्तियों में फटे छेद"),
        pair("Sawdust-like frass in the whorl", "घेरे में बुरादे जैसा मल"),
        pair("Caterpillars inside the whorl or cob", "घेरे या भुट्टे में सूंडियाँ")
      ],
      recovery: [
        pair("Hand-pick larvae and destroy egg masses in small fields.", "छोटे खेतों में सूंडियाँ हाथ से हटाएँ और अंडों के गुच्छे नष्ट करें।"),
        pair("Put clean sand or ash in the whorl of young plants (traditional, low-risk).", "छोटे पौधों के घेरे में साफ़ रेत या राख डालें (पारंपरिक, कम जोखिम)।"),
        pair("Encourage birds and natural enemies; avoid broad-spectrum sprays.", "पक्षियों व प्राकृतिक शत्रुओं को बढ़ावा दें; व्यापक कीटनाशक से बचें।"),
        pair("Consult your KVK for approved IPM options.", "स्वीकृत IPM विकल्पों के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Timely sowing, crop rotation and regular scouting.", "समय पर बुवाई, फसल चक्र व नियमित निगरानी।"),
        pair("Keep field borders clean to reduce egg-laying sites.", "अंडे देने की जगह कम करने हेतु खेत किनारे साफ़ रखें।")
      ]
    },
    {
      id: "maize-turcicum-blight", crops: ["maize"], kind: "fungal",
      name: pair("Turcicum leaf blight", "टर्सिकम पत्ती झुलसा"),
      sign: pair("Long grey-green cigar-shaped lesions; leaves dry prematurely.", "पत्तियों पर लंबे स्लेटी-हरे सिगार जैसे धब्बे; पत्तियाँ समय से पहले सूखती हैं।"),
      symptoms: [
        pair("Long cigar-shaped grey-green lesions", "लंबे सिगार जैसे स्लेटी-हरे धब्बे"),
        pair("Lesions join and dry the leaf", "धब्बे मिलकर पत्ती सुखाना"),
        pair("Lower leaves affected first", "पहले निचली पत्तियाँ प्रभावित")
      ],
      recovery: [
        pair("Remove infected crop residue after harvest.", "कटाई के बाद संक्रमित फसल अवशेष हटाएँ।"),
        pair("Improve spacing and airflow; avoid overhead irrigation.", "दूरी व हवा का आवागमन बढ़ाएँ; ऊपर से सिंचाई से बचें।"),
        pair("Keep nutrition balanced and avoid excess nitrogen.", "पोषण संतुलित रखें और अधिक नाइट्रोजन से बचें।"),
        pair("Ask your KVK about resistant hybrids.", "प्रतिरोधी हाइब्रिड के लिए KVK से पूछें।")
      ],
      prevention: [
        pair("Resistant hybrids, rotation and residue management.", "प्रतिरोधी हाइब्रिड, फसल चक्र व अवशेष प्रबंधन।"),
        pair("Avoid continuous maize on the same plot.", "एक ही खेत में लगातार मक्का न लगाएँ।")
      ]
    },
    /* ---------------- CHICKPEA ---------------- */
    {
      id: "chickpea-wilt", crops: ["chickpea"], kind: "fungal",
      name: pair("Fusarium wilt", "चने का उकठा (फ्यूजेरियम विल्ट)"),
      sign: pair("Sudden wilting and yellowing; brown discolouration inside the stem.", "अचानक मुरझाना व पीलापन; तने के अंदर भूरा रंग।"),
      symptoms: [
        pair("Sudden wilting of plants", "पौधों का अचानक मुरझाना"),
        pair("Yellowing starts from lower leaves", "पीलापन निचली पत्तियों से शुरू"),
        pair("Brown colour inside the stem", "तने के अंदर भूरा रंग")
      ],
      recovery: [
        pair("Remove wilted plants with their roots.", "मुरझाए पौधों को जड़ सहित हटाएँ।"),
        pair("Do not move soil or tools between healthy and affected patches.", "स्वस्थ व प्रभावित हिस्सों के बीच मिट्टी/औज़ार न ले जाएँ।"),
        pair("Rotate with cereals next season.", "अगली बार अनाज फसलों के साथ चक्र अपनाएँ।"),
        pair("Use wilt-resistant varieties; confirm with KVK.", "उकठा-प्रतिरोधी किस्में लें; KVK से पुष्टि करें।")
      ],
      prevention: [
        pair("Resistant varieties, rotation and clean seed.", "प्रतिरोधी किस्में, फसल चक्र व साफ़ बीज।"),
        pair("Avoid waterlogging and repeated chickpea cropping.", "जलभराव व बार-बार चना लगाने से बचें।")
      ]
    },
    {
      id: "chickpea-pod-borer", crops: ["chickpea"], kind: "insect",
      name: pair("Pod borer (Helicoverpa)", "फली छेदक (हेलिकोवर्पा)"),
      sign: pair("Round holes in pods; caterpillar inside; flowers and young pods drop.", "फलियों में गोल छेद; अंदर सूंडी; फूल व छोटी फलियाँ गिरना।"),
      symptoms: [
        pair("Round holes in pods", "फलियों में गोल छेद"),
        pair("Caterpillar inside the pod", "फली के अंदर सूंडी"),
        pair("Flowers or young pods dropping", "फूल या छोटी फलियाँ गिरना")
      ],
      recovery: [
        pair("Hand-pick larvae and damaged pods.", "सूंडियाँ व खराब फलियाँ हाथ से हटाएँ।"),
        pair("Install pheromone traps to monitor the pest.", "कीट निगरानी हेतु फेरोमोन ट्रैप लगाएँ।"),
        pair("Encourage birds and natural enemies.", "पक्षियों व प्राकृतिक शत्रुओं को बढ़ावा दें।"),
        pair("Consult your KVK for approved IPM.", "स्वीकृत IPM के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Timely sowing and trap monitoring.", "समय पर बुवाई व ट्रैप निगरानी।"),
        pair("Field sanitation after harvest.", "कटाई के बाद खेत की सफ़ाई।")
      ]
    },
    /* ---------------- MUSTARD ---------------- */
    {
      id: "mustard-alternaria", crops: ["mustard"], kind: "fungal",
      name: pair("Alternaria blight", "अल्टरनेरिया झुलसा"),
      sign: pair("Dark brown concentric spots on leaves and pods; pods may split early.", "पत्तियों व फलियों पर गहरे भूरे गोल छल्लेदार धब्बे; फलियाँ जल्दी फट सकती हैं।"),
      symptoms: [
        pair("Brown spots with rings", "छल्लेदार भूरे धब्बे"),
        pair("Spots on pods", "फलियों पर धब्बे"),
        pair("Premature leaf drying", "पत्तियाँ समय से पहले सूखना")
      ],
      recovery: [
        pair("Remove infected crop debris.", "संक्रमित फसल अवशेष हटाएँ।"),
        pair("Avoid dense sowing and improve airflow.", "घनी बुवाई से बचें और हवा का आवागमन बढ़ाएँ।"),
        pair("Keep nutrition balanced; avoid excess nitrogen.", "पोषण संतुलित रखें; अधिक नाइट्रोजन से बचें।"),
        pair("Consult your KVK for approved fungicide.", "स्वीकृत फफूंदनाशी के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Clean seed, rotation and proper spacing.", "साफ़ बीज, फसल चक्र व उचित दूरी।"),
        pair("Grow tolerant varieties where available.", "उपलब्ध हो तो सहनशील किस्में लगाएँ।")
      ]
    },
    {
      id: "mustard-white-rust", crops: ["mustard"], kind: "fungal",
      name: pair("White rust", "सफेद रतुआ"),
      sign: pair("White raised pustules on leaves and stems; distorted growth.", "पत्तियों व तनों पर सफेद उभरे फफोले; वृद्धि विकृत।"),
      symptoms: [
        pair("White raised pustules", "सफेद उभरे फफोले"),
        pair("Distorted leaves or stems", "विकृत पत्तियाँ या तने"),
        pair("Yellow patches on the upper leaf", "पत्ती के ऊपरी भाग पर पीले धब्बे")
      ],
      recovery: [
        pair("Remove infected leaves and plants.", "संक्रमित पत्तियाँ व पौधे हटाएँ।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।"),
        pair("Rotate away from mustard and other brassicas.", "सरसों व अन्य ब्रासिका से चक्र बदलें।"),
        pair("Ask your KVK about resistant varieties.", "प्रतिरोधी किस्मों के लिए KVK से पूछें।")
      ],
      prevention: [
        pair("Resistant varieties and rotation.", "प्रतिरोधी किस्में व फसल चक्र।"),
        pair("Clean field and balanced moisture.", "साफ़ खेत व संतुलित नमी।")
      ]
    },
    /* ---------------- GROUNDNUT ---------------- */
    {
      id: "groundnut-tikka", crops: ["groundnut"], kind: "fungal",
      name: pair("Tikka (leaf spot)", "टिक्का रोग (पत्ती धब्बा)"),
      sign: pair("Dark brown circular spots with a yellow halo; heavy premature leaf fall.", "पीले घेरे वाले गहरे भूरे गोल धब्बे; पत्तियाँ भारी मात्रा में जल्दी गिरना।"),
      symptoms: [
        pair("Dark brown spots with a yellow halo", "पीले घेरे वाले गहरे भूरे धब्बे"),
        pair("Spots on both sides of the leaf", "पत्ती के दोनों ओर धब्बे"),
        pair("Premature leaf fall", "पत्तियाँ समय से पहले गिरना")
      ],
      recovery: [
        pair("Remove infected leaf litter.", "संक्रमित पत्ती कचरा हटाएँ।"),
        pair("Rotate with cereals.", "अनाज फसलों के साथ चक्र अपनाएँ।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।"),
        pair("Consult your KVK for approved fungicide.", "स्वीकृत फफूंदनाशी के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Rotation, clean seed and resistant varieties.", "फसल चक्र, साफ़ बीज व प्रतिरोधी किस्में।"),
        pair("Remove volunteer plants.", "स्वयं उगे पौधे हटाएँ।")
      ]
    },
    {
      id: "groundnut-stem-rot", crops: ["groundnut"], kind: "fungal",
      name: pair("Stem rot", "तना सड़न (स्टेम रॉट)"),
      sign: pair("Sudden wilting; white cottony growth and mustard-like bodies at the stem base.", "अचानक मुरझाना; तने के आधार पर सफेद रुई जैसी वृद्धि व सरसों जैसे दाने।"),
      symptoms: [
        pair("Sudden wilting of plants", "पौधों का अचानक मुरझाना"),
        pair("White growth at the stem base", "तने के आधार पर सफेद वृद्धि"),
        pair("Stem base rots and plants pull out easily", "तना आधार सड़ना, पौधा आसानी से निकलना")
      ],
      recovery: [
        pair("Remove affected plants along with surrounding soil.", "प्रभावित पौधे आसपास की मिट्टी सहित हटाएँ।"),
        pair("Improve drainage; avoid waterlogging.", "जल निकास सुधारें; जलभराव से बचें।"),
        pair("Rotate with cereals.", "अनाज फसलों के साथ चक्र अपनाएँ।"),
        pair("Ask your KVK about biocontrol or approved options.", "जैविक नियंत्रण या स्वीकृत विकल्पों के लिए KVK से पूछें।")
      ],
      prevention: [
        pair("Good drainage, rotation and clean seed.", "अच्छा जल निकास, फसल चक्र व साफ़ बीज।"),
        pair("Avoid deep sowing in wet soil.", "गीली मिट्टी में गहरी बुवाई से बचें।")
      ]
    },
    /* ---------------- SOYBEAN ---------------- */
    {
      id: "soybean-yellow-mosaic", crops: ["soybean"], kind: "viral",
      name: pair("Yellow mosaic", "पीला मोज़ेक"),
      sign: pair("Bright yellow mosaic patches on leaves; mottled, crinkled leaves and stunted plants.", "पत्तियों पर चमकीले पीले मोज़ेक धब्बे; चितकबरी, सिकुड़ी पत्तियाँ व बौने पौधे।"),
      symptoms: [
        pair("Yellow mosaic patches", "पीले मोज़ेक धब्बे"),
        pair("Mottled or crinkled leaves", "चितकबरी या सिकुड़ी पत्तियाँ"),
        pair("Stunted growth", "बौनी वृद्धि")
      ],
      recovery: [
        pair("Remove infected plants early.", "संक्रमित पौधे जल्दी हटाएँ।"),
        pair("Manage whitefly (the carrier) with IPM and yellow sticky traps.", "सफेद मक्खी (वाहक) को IPM व पीले चिपचिपे ट्रैप से नियंत्रित करें।"),
        pair("Grow resistant varieties next season.", "अगली बार प्रतिरोधी किस्में लगाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Resistant varieties and whitefly management.", "प्रतिरोधी किस्में व सफेद मक्खी प्रबंधन।"),
        pair("Avoid planting next to infected fields.", "संक्रमित खेतों के पास बुवाई से बचें।")
      ]
    },
    {
      id: "soybean-aerial-blight", crops: ["soybean"], kind: "fungal",
      name: pair("Aerial blight (Rhizoctonia)", "हवाई झुलसा (राइज़ोक्टोनिया)"),
      sign: pair("Water-soaked lesions and web-like fungal growth; rapid blighting of patches.", "पानी जैसे धब्बे व जाले जैसी फफूंद; धब्बों में तेज़ी से झुलसना।"),
      symptoms: [
        pair("Water-soaked lesions", "पानी जैसे धब्बे"),
        pair("Web-like growth between plants", "पौधों के बीच जाले जैसी वृद्धि"),
        pair("Rapid wilting and drying", "तेज़ी से मुरझाना व सूखना")
      ],
      recovery: [
        pair("Remove infected plants and debris.", "संक्रमित पौधे व अवशेष हटाएँ।"),
        pair("Improve airflow and avoid dense sowing.", "हवा का आवागमन बढ़ाएँ और घनी बुवाई से बचें।"),
        pair("Rotate with cereals.", "अनाज फसलों के साथ चक्र अपनाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Rotation, spacing and clean seed.", "फसल चक्र, दूरी व साफ़ बीज।"),
        pair("Avoid prolonged leaf wetness.", "पत्तियों के लंबे समय तक गीले रहने से बचें।")
      ]
    },
    /* ---------------- COTTON ---------------- */
    {
      id: "cotton-pink-bollworm", crops: ["cotton"], kind: "insect",
      name: pair("Pink bollworm", "गुलाबी सुंडी"),
      sign: pair("Rosette-shaped flowers; small holes in bolls; pink larvae inside.", "गुलाब जैसे फूल; टिंडों में छोटे छेद; अंदर गुलाबी सूंडियाँ।"),
      symptoms: [
        pair("Rosette-shaped flowers", "गुलाब जैसे आकार के फूल"),
        pair("Small holes in bolls", "टिंडों में छोटे छेद"),
        pair("Pink larvae inside the boll", "टिंडे के अंदर गुलाबी सूंडी")
      ],
      recovery: [
        pair("Remove and destroy rosette flowers and infested bolls.", "गुलाब जैसे फूल व संक्रमित टिंडे हटाकर नष्ट करें।"),
        pair("Install pheromone traps for monitoring.", "निगरानी हेतु फेरोमोन ट्रैप लगाएँ।"),
        pair("Clean the field and gin area after harvest.", "कटाई के बाद खेत व जिनिंग क्षेत्र साफ़ करें।"),
        pair("Consult your KVK for approved IPM.", "स्वीकृत IPM के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Timely sowing and trap monitoring.", "समय पर बुवाई व ट्रैप निगरानी।"),
        pair("Destroy crop residue after harvest.", "कटाई के बाद फसल अवशेष नष्ट करें।")
      ]
    },
    {
      id: "cotton-leaf-curl", crops: ["cotton"], kind: "viral",
      name: pair("Cotton leaf curl virus", "कपास पत्ती मरोड़ वायरस"),
      sign: pair("Upward curling leaves, thickened veins and leaf-like enations; whiteflies present.", "पत्तियाँ ऊपर मुड़ना, शिराएँ मोटी व पत्ती जैसी वृद्धि; सफेद मक्खी मौजूद।"),
      symptoms: [
        pair("Upward leaf curling", "पत्तियाँ ऊपर मुड़ना"),
        pair("Thickened veins or leaf-like growth", "मोटी शिराएँ या पत्ती जैसी वृद्धि"),
        pair("Whiteflies on the leaf underside", "पत्ती के नीचे सफेद मक्खियाँ")
      ],
      recovery: [
        pair("Remove infected plants early.", "संक्रमित पौधे जल्दी हटाएँ।"),
        pair("Manage whitefly with IPM and yellow sticky traps.", "सफेद मक्खी को IPM व पीले चिपचिपे ट्रैप से नियंत्रित करें।"),
        pair("Grow resistant/tolerant varieties.", "प्रतिरोधी/सहनशील किस्में लगाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Resistant varieties and whitefly management.", "प्रतिरोधी किस्में व सफेद मक्खी प्रबंधन।"),
        pair("Avoid late sowing and infected seed.", "देर से बुवाई व संक्रमित बीज से बचें।")
      ]
    },
    /* ---------------- BAJRA ---------------- */
    {
      id: "bajra-downy-mildew", crops: ["bajra"], kind: "fungal",
      name: pair("Downy mildew", "मृदुरोमिल आसिता (डाउनी मिल्ड्यू)"),
      sign: pair("Yellowing, white downy growth on the leaf underside and stunted plants.", "पीलापन, पत्ती के नीचे सफेद रोमिल वृद्धि व बौने पौधे।"),
      symptoms: [
        pair("Yellow streaks on leaves", "पत्तियों पर पीली धारियाँ"),
        pair("White down on the leaf underside", "पत्ती के नीचे सफेद रोम"),
        pair("Stunted plants", "बौने पौधे")
      ],
      recovery: [
        pair("Remove infected plants.", "संक्रमित पौधे हटाएँ।"),
        pair("Rotate with non-host crops.", "गैर-मेजबान फसलों के साथ चक्र अपनाएँ।"),
        pair("Avoid excess moisture and dense sowing.", "अधिक नमी व घनी बुवाई से बचें।"),
        pair("Ask your KVK about resistant hybrids.", "प्रतिरोधी हाइब्रिड के लिए KVK से पूछें।")
      ],
      prevention: [
        pair("Resistant hybrids, rotation and clean seed.", "प्रतिरोधी हाइब्रिड, फसल चक्र व साफ़ बीज।"),
        pair("Good drainage and spacing.", "अच्छा जल निकास व दूरी।")
      ]
    },
    {
      id: "bajra-ergot", crops: ["bajra"], kind: "fungal",
      name: pair("Ergot", "अरगट"),
      sign: pair("Sticky honeydew on the ear, later dark hard bodies replace the grain.", "बाली पर चिपचिपा शहद जैसा स्राव, बाद में दाने की जगह गहरे कड़े दाने।"),
      symptoms: [
        pair("Sticky honeydew on the ear", "बाली पर चिपचिपा स्राव"),
        pair("Dark hard bodies in the ear", "बाली में गहरे कड़े दाने"),
        pair("Grain replaced by these bodies", "दाने इनसे बदले हुए")
      ],
      recovery: [
        pair("Remove ergot bodies before harvest.", "कटाई से पहले अरगट दाने हटाएँ।"),
        pair("Harvest early if the attack is severe.", "गंभीर हो तो जल्दी कटाई करें।"),
        pair("Do not feed contaminated grain to animals.", "संक्रमित दाना पशुओं को न खिलाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Clean seed, timely sowing and rotation.", "साफ़ बीज, समय पर बुवाई व फसल चक्र।"),
        pair("Remove flowering weeds around the field.", "खेत के आसपास फूलने वाले खरपतवार हटाएँ।")
      ]
    },
    /* ---------------- MOONG ---------------- */
    {
      id: "moong-yellow-mosaic", crops: ["moong"], kind: "viral",
      name: pair("Yellow mosaic", "पीला मोज़ेक"),
      sign: pair("Yellow mosaic patches, mottled leaves and stunted plants.", "पीले मोज़ेक धब्बे, चितकबरी पत्तियाँ व बौने पौधे।"),
      symptoms: [
        pair("Yellow mosaic patches", "पीले मोज़ेक धब्बे"),
        pair("Mottled leaves", "चितकबरी पत्तियाँ"),
        pair("Stunted plants", "बौने पौधे")
      ],
      recovery: [
        pair("Remove infected plants.", "संक्रमित पौधे हटाएँ।"),
        pair("Manage whitefly with IPM.", "सफेद मक्खी को IPM से नियंत्रित करें।"),
        pair("Grow resistant varieties.", "प्रतिरोधी किस्में लगाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Resistant varieties and whitefly management.", "प्रतिरोधी किस्में व सफेद मक्खी प्रबंधन।"),
        pair("Avoid nearby infected crops.", "पास के संक्रमित खेतों से बचें।")
      ]
    },
    {
      id: "moong-cercospora", crops: ["moong"], kind: "fungal",
      name: pair("Cercospora leaf spot", "सर्कोस्पोरा पत्ती धब्बा"),
      sign: pair("Circular brown spots with a grey centre; premature leaf drop.", "स्लेटी केंद्र वाले गोल भूरे धब्बे; पत्तियाँ जल्दी गिरना।"),
      symptoms: [
        pair("Circular brown spots", "गोल भूरे धब्बे"),
        pair("Grey centre in the spots", "धब्बों में स्लेटी केंद्र"),
        pair("Premature leaf drop", "पत्तियाँ जल्दी गिरना")
      ],
      recovery: [
        pair("Remove infected debris.", "संक्रमित अवशेष हटाएँ।"),
        pair("Improve airflow and spacing.", "हवा का आवागमन व दूरी सुधारें।"),
        pair("Rotate with cereals.", "अनाज फसलों के साथ चक्र अपनाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Clean seed, rotation and spacing.", "साफ़ बीज, फसल चक्र व दूरी।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।")
      ]
    },
    /* ---------------- TOMATO ---------------- */
    {
      id: "tomato-early-blight", crops: ["tomato"], kind: "fungal",
      name: pair("Early blight", "अगेती झुलसा"),
      sign: pair("Concentric brown spots with a yellow halo, starting on lower leaves.", "पीले घेरे वाले छल्लेदार भूरे धब्बे, निचली पत्तियों से शुरू।"),
      symptoms: [
        pair("Brown spots with rings", "छल्लेदार भूरे धब्बे"),
        pair("Yellow halo around spots", "धब्बों के चारों ओर पीला घेरा"),
        pair("Lower leaves dry first", "पहले निचली पत्तियाँ सूखना")
      ],
      recovery: [
        pair("Remove infected lower leaves.", "संक्रमित निचली पत्तियाँ हटाएँ।"),
        pair("Mulch to stop soil splash onto leaves.", "मल्चिंग से मिट्टी के छींटे पत्तियों पर रोकें।"),
        pair("Stake plants and keep spacing for airflow.", "पौधों को सहारा दें व हवा हेतु दूरी रखें।"),
        pair("Consult your KVK for approved fungicide.", "स्वीकृत फफूंदनाशी के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Rotation, mulch, clean seed and spacing.", "फसल चक्र, मल्च, साफ़ बीज व दूरी।"),
        pair("Water at the base, not over the leaves.", "पानी जड़ के पास दें, पत्तियों पर नहीं।")
      ]
    },
    {
      id: "tomato-late-blight", crops: ["tomato"], kind: "fungal",
      name: pair("Late blight", "पछेती झुलसा"),
      sign: pair("Water-soaked greasy lesions with white fuzzy growth; rapid collapse in cool, wet weather.", "पानी जैसे चिकने धब्बे व सफेद रोमिल वृद्धि; ठंडे, नम मौसम में तेज़ी से गिरना।"),
      symptoms: [
        pair("Water-soaked greasy lesions", "पानी जैसे चिकने धब्बे"),
        pair("White growth on the underside", "पत्ती के नीचे सफेद वृद्धि"),
        pair("Rapid wilting or collapse", "तेज़ी से मुरझाना या गिरना")
      ],
      recovery: [
        pair("Remove and destroy infected plants; do not compost them.", "संक्रमित पौधे हटाकर नष्ट करें; कंपोस्ट न बनाएँ।"),
        pair("Avoid overhead irrigation and working among wet plants.", "ऊपर से सिंचाई व गीले पौधों के बीच काम से बचें।"),
        pair("Improve airflow and reduce humidity.", "हवा का आवागमन बढ़ाएँ और नमी कम करें।"),
        pair("Alert nearby farmers and your KVK — act fast.", "आसपास के किसानों व KVK को बताएँ — जल्दी कार्रवाई करें।")
      ],
      prevention: [
        pair("Avoid leaf wetness, rotate and use resistant varieties.", "पत्ती गीली न होने दें, चक्र अपनाएँ व प्रतिरोधी किस्में लें।"),
        pair("Destroy infected crop residue.", "संक्रमित फसल अवशेष नष्ट करें।")
      ]
    },
    /* ---------------- POTATO ---------------- */
    {
      id: "potato-late-blight", crops: ["potato"], kind: "fungal",
      name: pair("Late blight", "पछेती झुलसा"),
      sign: pair("Dark water-soaked leaf lesions with white growth; rapid decay.", "पत्तियों पर गहरे पानी जैसे धब्बे व सफेद वृद्धि; तेज़ी से सड़न।"),
      symptoms: [
        pair("Dark water-soaked lesions", "गहरे पानी जैसे धब्बे"),
        pair("White growth on the underside", "पत्ती के नीचे सफेद वृद्धि"),
        pair("Rapid decay of foliage", "पत्तियों का तेज़ी से सड़ना")
      ],
      recovery: [
        pair("Remove infected foliage and destroy it.", "संक्रमित पत्तियाँ हटाकर नष्ट करें।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।"),
        pair("Hill soil around stems to protect tubers.", "कंद बचाने हेतु तनों के चारों ओर मिट्टी चढ़ाएँ।"),
        pair("Consult your KVK urgently.", "तुरंत KVK से सलाह लें।")
      ],
      prevention: [
        pair("Certified seed, rotation and dry foliage.", "प्रमाणित बीज, फसल चक्र व सूखी पत्तियाँ।"),
        pair("Do not leave infected tubers in the field.", "संक्रमित कंद खेत में न छोड़ें।")
      ]
    },
    {
      id: "potato-early-blight", crops: ["potato"], kind: "fungal",
      name: pair("Early blight", "अगेती झुलसा"),
      sign: pair("Target-like brown spots on older leaves; yellowing around spots.", "पुरानी पत्तियों पर निशाने जैसे भूरे धब्बे; धब्बों के आसपास पीलापन।"),
      symptoms: [
        pair("Target-like brown spots", "निशाने जैसे भूरे धब्बे"),
        pair("Yellowing around spots", "धब्बों के आसपास पीलापन"),
        pair("Older leaves affected first", "पहले पुरानी पत्तियाँ प्रभावित")
      ],
      recovery: [
        pair("Remove infected leaves.", "संक्रमित पत्तियाँ हटाएँ।"),
        pair("Keep nutrition balanced and avoid plant stress.", "पोषण संतुलित रखें व पौधों को तनाव से बचाएँ।"),
        pair("Rotate crops.", "फसल चक्र अपनाएँ।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Rotation, healthy seed and balanced nutrition.", "फसल चक्र, स्वस्थ बीज व संतुलित पोषण।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।")
      ]
    },
    /* ---------------- ONION ---------------- */
    {
      id: "onion-purple-blotch", crops: ["onion"], kind: "fungal",
      name: pair("Purple blotch", "बैंगनी धब्बा"),
      sign: pair("Purple-brown lesions with a pale centre on leaves and seed stalks.", "पत्तियों व बीज डंठल पर हल्के केंद्र वाले बैंगनी-भूरे धब्बे।"),
      symptoms: [
        pair("Purple-brown leaf lesions", "पत्तियों पर बैंगनी-भूरे धब्बे"),
        pair("Pale centre in the lesion", "धब्बे में हल्का केंद्र"),
        pair("Leaf tips die back", "पत्ती की नोक सूखना")
      ],
      recovery: [
        pair("Remove infected leaves.", "संक्रमित पत्तियाँ हटाएँ।"),
        pair("Avoid overhead irrigation.", "ऊपर से सिंचाई से बचें।"),
        pair("Improve airflow and spacing.", "हवा का आवागमन व दूरी सुधारें।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Clean seed, rotation and spacing.", "साफ़ बीज, फसल चक्र व दूरी।"),
        pair("Avoid excess nitrogen.", "अधिक नाइट्रोजन से बचें।")
      ]
    },
    {
      id: "onion-thrips", crops: ["onion"], kind: "insect",
      name: pair("Thrips", "थ्रिप्स"),
      sign: pair("Silvery streaks on leaves, curling and tiny insects in the leaf axils.", "पत्तियों पर चांदी जैसी धारियाँ, मुड़ना व पत्ती के कोण में छोटे कीट।"),
      symptoms: [
        pair("Silvery streaks on leaves", "पत्तियों पर चांदी जैसी धारियाँ"),
        pair("Leaves curl or distort", "पत्तियाँ मुड़ना या विकृत होना"),
        pair("Tiny insects in the leaf axils", "पत्ती के कोण में छोटे कीट")
      ],
      recovery: [
        pair("Use blue sticky traps for monitoring.", "निगरानी हेतु नीले चिपचिपे ट्रैप लगाएँ।"),
        pair("Avoid excess nitrogen.", "अधिक नाइट्रोजन से बचें।"),
        pair("Keep the field weed-free.", "खेत खरपतवार-मुक्त रखें।"),
        pair("Consult your KVK for approved IPM.", "स्वीकृत IPM के लिए KVK से सलाह लें।")
      ],
      prevention: [
        pair("Trap monitoring, weed control and balanced nutrition.", "ट्रैप निगरानी, खरपतवार नियंत्रण व संतुलित पोषण।"),
        pair("Avoid repeated insecticide sprays.", "बार-बार कीटनाशक छिड़काव से बचें।")
      ]
    },
    /* ---------------- SUGARCANE ---------------- */
    {
      id: "sugarcane-red-rot", crops: ["sugarcane"], kind: "fungal",
      name: pair("Red rot", "लाल सड़न"),
      sign: pair("Reddish discolouration inside the cane with a sour or alcoholic smell; canes dry.", "गन्ने के अंदर लाल रंग व खट्टी/शराब जैसी गंध; गन्ने सूखना।"),
      symptoms: [
        pair("Reddish stem inside", "तने के अंदर लाल रंग"),
        pair("Sour or alcoholic smell", "खट्टी या शराब जैसी गंध"),
        pair("Drying of canes", "गन्ने सूखना")
      ],
      recovery: [
        pair("Remove and destroy affected clumps.", "प्रभावित गन्ने के झुंड हटाकर नष्ट करें।"),
        pair("Do not use affected cane as seed.", "प्रभावित गन्ना बीज के रूप में न लें।"),
        pair("Rotate or fallow; improve drainage.", "फसल चक्र/परती करें; जल निकास सुधारें।"),
        pair("Consult your KVK or sugar-mill advisory.", "KVK या चीनी मिल सलाह से परामर्श करें।")
      ],
      prevention: [
        pair("Healthy seed cane, rotation and drainage.", "स्वस्थ बीज गन्ना, फसल चक्र व जल निकास।"),
        pair("Avoid waterlogging.", "जलभराव से बचें।")
      ]
    },
    {
      id: "sugarcane-smut", crops: ["sugarcane"], kind: "fungal",
      name: pair("Whip smut", "कोड़ा स्मट"),
      sign: pair("Black whip-like shoot from the growing point; thin, grassy canes.", "वृद्धि बिंदु से काला कोड़े जैसा अंकुर; पतले, घास जैसे गन्ने।"),
      symptoms: [
        pair("Black whip-like shoot", "काला कोड़े जैसा अंकुर"),
        pair("Thin grassy canes", "पतले घास जैसे गन्ने"),
        pair("Stunted clumps", "बौने झुंड")
      ],
      recovery: [
        pair("Remove whips in a bag before spores spread.", "बीजाणु फैलने से पहले कोड़े थैली में हटाएँ।"),
        pair("Rogue out affected clumps.", "प्रभावित झुंड निकालें।"),
        pair("Use healthy seed cane.", "स्वस्थ बीज गन्ना लें।"),
        pair("Consult your KVK.", "KVK से सलाह लें।")
      ],
      prevention: [
        pair("Healthy seed and rotation.", "स्वस्थ बीज व फसल चक्र।"),
        pair("Use seed treatment only as advised locally.", "बीजोपचार केवल स्थानीय सलाह अनुसार करें।")
      ]
    },
    /* ---------------- GENERIC (all crops) ---------------- */
    {
      id: "generic-stress", crops: "all", kind: "disorder",
      name: pair("Nutrient deficiency or water stress", "पोषक तत्व कमी या जल तनाव"),
      sign: pair("Uniform yellowing, leaf-edge burn, wilting or stunting without spots or insects.", "बिना धब्बों/कीटों के एक समान पीलापन, पत्ती किनारे जलना, मुरझाना या बौनापन।"),
      symptoms: [
        pair("Uniform yellowing of leaves", "पत्तियों का एक समान पीलापन"),
        pair("Leaf edges dry or burn", "पत्ती के किनारे सूखना या जलना"),
        pair("Wilting even when soil is moist", "मिट्टी नम होने पर भी मुरझाना")
      ],
      recovery: [
        pair("Check soil moisture and drainage first.", "पहले मिट्टी की नमी व जल निकास जाँचें।"),
        pair("Do a soil test and correct pH/nutrients as advised.", "मृदा परीक्षण कराएँ और सलाह अनुसार pH/पोषक तत्व सुधारें।"),
        pair("Avoid over-watering and over-fertilising.", "अधिक पानी व अधिक खाद से बचें।"),
        pair("Consult your KVK with photos and the soil test.", "फ़ोटो व मृदा परीक्षण के साथ KVK से सलाह लें।")
      ],
      prevention: [
        pair("Regular soil testing and balanced organic matter.", "नियमित मृदा परीक्षण व संतुलित जैविक खाद।"),
        pair("Proper irrigation and drainage.", "उचित सिंचाई व जल निकास।")
      ]
    }
  ];

  /* ----------------------------------------------------------------------
   * OFFICIAL AGRICULTURE DATA (India)
   * Reproduced from Ministry of Agriculture & Farmers Welfare releases.
   * These are national statistics for context — NOT a forecast for any farm.
   * -------------------------------------------------------------------- */
  var OFFICIAL_AGRI = {
    updated: "2024-25 final estimates (released 2025)",
    headline: {
      foodgrain2024_25: 357.73,   // million tonnes
      foodgrain2023_24: 332.30,   // million tonnes
      growthPct: 7.65,
      rice2023_24: 137.83,        // million tonnes
      wheat2023_24: 113.29,       // million tonnes
      oilseeds2023_24: 39.67      // million tonnes
    },
    trend: [
      { year: "2004-05", value: 204.6 },
      { year: "2014-15", value: 252.0 },
      { year: "2022-23", value: 329.687 },
      { year: "2023-24", value: 332.298 },
      { year: "2024-25", value: 357.73 }
    ],
    cropMix2023_24: [
      { id: "rice", label: pair("Rice", "चावल"), value: 1378.25 },
      { id: "wheat", label: pair("Wheat", "गेहूँ"), value: 1132.92 },
      { id: "coarse", label: pair("Coarse cereals", "मोटे अनाज"), value: 569.36 },
      { id: "pulses", label: pair("Pulses", "दलहन"), value: 242.46 }
    ],
    sources: [
      {
        label: pair("Ministry of Agriculture & Farmers Welfare — Final Estimates of Major Agricultural Crops 2024-25 (PIB)", "कृषि एवं किसान कल्याण मंत्रालय — प्रमुख कृषि फसलों के अंतिम अनुमान 2024-25 (PIB)"),
        url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2192315"
      },
      {
        label: pair("PIB — long-term foodgrain production trend (2004-05, 2014-15, 2023-24)", "PIB — खाद्यान्न उत्पादन का दीर्घकालिक रुझान (2004-05, 2014-15, 2023-24)"),
        url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2098424"
      },
      {
        label: pair("Ministry of Agriculture & Farmers Welfare — Final Estimates 2023-24 (crop-wise), upag.gov.in", "कृषि एवं किसान कल्याण मंत्रालय — अंतिम अनुमान 2023-24 (फसलवार), upag.gov.in"),
        url: "https://upag.gov.in"
      }
    ]
  };

  /* ----------------------------------------------------------------------
   * NUTRITION REFERENCE (per 100 g, approximate)
   * Values are indicative general reference figures compiled from public
   * food-composition sources. They are NOT a medical or dietary prescription.
   * -------------------------------------------------------------------- */
  var NUTRITION = [
    { id: "apple", en: "Apple", hi: "सेब", img: img("photo-1568702846914-96b305d2aaeb", 600), category: "fruit", kcal: 52, protein: 0.3, carbs: 14, fat: 0.2, satFat: 0.0, fiber: 2.4, sugar: 10.4, sodium: 1, potassium: 107, calcium: 6, iron: 0.1, vitC: 4.6, vitA: 3, water: 86, benefit: { en: "Good source of fibre and vitamin C; supports digestion.", hi: "फाइबर व विटामिन C का अच्छा स्रोत; पाचन में सहायक।" }, storage: { en: "Store in a cool, dark place; refrigerate to extend life.", hi: "ठंडी, अंधेरी जगह रखें; फ्रिज में अधिक दिन चलता है।" } },
    { id: "banana", en: "Banana", hi: "केला", img: img("photo-1571771894821-ce9b6c11b08e", 600), category: "fruit", kcal: 89, protein: 1.1, carbs: 23, fat: 0.3, satFat: 0.1, fiber: 2.6, sugar: 12.2, sodium: 1, potassium: 358, calcium: 5, iron: 0.3, vitC: 8.7, vitA: 3, water: 75, benefit: { en: "Rich in potassium; quick energy and easy to digest.", hi: "पोटैशियम से भरपूर; तुरंत ऊर्जा व आसान पाचन।" }, storage: { en: "Keep at room temperature; refrigerate only when ripe.", hi: "सामान्य तापमान पर रखें; पकने पर ही फ्रिज में।" } },
    { id: "mango", en: "Mango", hi: "आम", img: img("photo-1553279768-865429fa0078", 600), category: "fruit", kcal: 60, protein: 0.8, carbs: 15, fat: 0.4, satFat: 0.1, fiber: 1.6, sugar: 13.7, sodium: 1, potassium: 168, calcium: 11, iron: 0.2, vitC: 36, vitA: 54, water: 83, benefit: { en: "Provides vitamin A and C; seasonal fruit rich in antioxidants.", hi: "विटामिन A व C देता है; एंटीऑक्सिडेंट से भरपूर मौसमी फल।" }, storage: { en: "Ripen at room temperature, then refrigerate.", hi: "सामान्य तापमान पर पकाएँ, फिर फ्रिज में रखें।" } },
    { id: "orange", en: "Orange", hi: "संतरा", img: img("photo-1547514701-42782101795e", 600), category: "fruit", kcal: 47, protein: 0.9, carbs: 12, fat: 0.1, satFat: 0.0, fiber: 2.4, sugar: 9.4, sodium: 0, potassium: 181, calcium: 40, iron: 0.1, vitC: 53, vitA: 11, water: 87, benefit: { en: "Excellent vitamin C source supporting immunity.", hi: "प्रतिरक्षा हेतु उत्कृष्ट विटामिन C स्रोत।" }, storage: { en: "Store cool; refrigerate for longer shelf life.", hi: "ठंडा रखें; अधिक दिनों हेतु फ्रिज में।" } },
    { id: "guava", en: "Guava", hi: "अमरूद", img: img("photo-1536511132770-e5058c7e8c46", 600), category: "fruit", kcal: 68, protein: 2.6, carbs: 14, fat: 1.0, satFat: 0.3, fiber: 5.4, sugar: 8.9, sodium: 2, potassium: 417, calcium: 18, iron: 0.3, vitC: 228, vitA: 31, water: 81, benefit: { en: "Very high vitamin C and fibre content.", hi: "बहुत अधिक विटामिन C व फाइबर।" }, storage: { en: "Room temperature to ripen; refrigerate when ripe.", hi: "पकने हेतु सामान्य तापमान; पकने पर फ्रिज में।" } },
    { id: "papaya", en: "Papaya", hi: "पपीता", img: img("photo-1517282009859-f000ec3b26fe", 600), category: "fruit", kcal: 43, protein: 0.5, carbs: 11, fat: 0.3, satFat: 0.1, fiber: 1.7, sugar: 7.8, sodium: 8, potassium: 182, calcium: 20, iron: 0.3, vitC: 61, vitA: 47, water: 88, benefit: { en: "Contains digestive enzymes; rich in vitamin C and A.", hi: "पाचन एंज़ाइम युक्त; विटामिन C व A से भरपूर।" }, storage: { en: "Ripen at room temperature; refrigerate cut fruit.", hi: "सामान्य तापमान पर पकाएँ; कटा फल फ्रिज में।" } },
    { id: "tomato", en: "Tomato", hi: "टमाटर", img: img("photo-1592924357228-91a4daadcfea", 600), category: "vegetable", kcal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, satFat: 0.0, fiber: 1.2, sugar: 2.6, sodium: 5, potassium: 237, calcium: 10, iron: 0.3, vitC: 14, vitA: 42, water: 95, benefit: { en: "Source of lycopene and vitamin C.", hi: "लाइकोपीन व विटामिन C का स्रोत।" }, storage: { en: "Room temperature; avoid refrigerating to keep flavour.", hi: "सामान्य तापमान; स्वाद हेतु फ्रिज से बचें।" } },
    { id: "potato", en: "Potato", hi: "आलू", img: img("photo-1518977676601-b53f82aba655", 600), category: "vegetable", kcal: 77, protein: 2.0, carbs: 17, fat: 0.1, satFat: 0.0, fiber: 2.2, sugar: 0.8, sodium: 6, potassium: 425, calcium: 12, iron: 0.8, vitC: 19, vitA: 0, water: 79, benefit: { en: "Energy-giving carbohydrate with potassium.", hi: "ऊर्जा देने वाला कार्बोहाइड्रेट व पोटैशियम।" }, storage: { en: "Store cool, dark and dry — not in the fridge.", hi: "ठंडी, अंधेरी व सूखी जगह रखें — फ्रिज में नहीं।" } },
    { id: "onion", en: "Onion", hi: "प्याज", img: img("photo-1508747703725-719777637510", 600), category: "vegetable", kcal: 40, protein: 1.1, carbs: 9, fat: 0.1, satFat: 0.0, fiber: 1.7, sugar: 4.2, sodium: 4, potassium: 146, calcium: 23, iron: 0.2, vitC: 7.4, vitA: 0, water: 89, benefit: { en: "Contains sulphur compounds and antioxidants.", hi: "गंधक यौगिक व एंटीऑक्सिडेंट युक्त।" }, storage: { en: "Cool, dry, ventilated place away from potatoes.", hi: "ठंडी, सूखी, हवादार जगह; आलू से दूर।" } },
    { id: "spinach", en: "Spinach", hi: "पालक", img: img("photo-1576045057995-568f588f82fb", 600), category: "vegetable", kcal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, satFat: 0.1, fiber: 2.2, sugar: 0.4, sodium: 79, potassium: 558, calcium: 99, iron: 2.7, vitC: 28, vitA: 469, water: 91, benefit: { en: "Rich in iron, calcium, and vitamin A.", hi: "लोहा, कैल्शियम व विटामिन A से भरपूर।" }, storage: { en: "Refrigerate wrapped; use within a few days.", hi: "लपेटकर फ्रिज में; कुछ दिनों में उपयोग करें।" } },
    { id: "carrot", en: "Carrot", hi: "गाजर", img: img("photo-1598170845058-32b9d6a5da37", 600), category: "vegetable", kcal: 41, protein: 0.9, carbs: 10, fat: 0.2, satFat: 0.0, fiber: 2.8, sugar: 4.7, sodium: 69, potassium: 320, calcium: 33, iron: 0.3, vitC: 5.9, vitA: 835, water: 88, benefit: { en: "High in beta-carotene (vitamin A).", hi: "बीटा-कैरोटीन (विटामिन A) से भरपूर।" }, storage: { en: "Refrigerate in a bag; keeps for weeks.", hi: "थैली में फ्रिज में; कई सप्ताह चलता है।" } },
    { id: "cabbage", en: "Cabbage", hi: "पत्तागोभी", img: img("photo-1550989460-0adf9ea622e2", 600), category: "vegetable", kcal: 25, protein: 1.3, carbs: 6, fat: 0.1, satFat: 0.0, fiber: 2.5, sugar: 3.2, sodium: 18, potassium: 170, calcium: 40, iron: 0.5, vitC: 37, vitA: 5, water: 92, benefit: { en: "Low-calorie with fibre and vitamin C.", hi: "कम कैलोरी; फाइबर व विटामिन C।" }, storage: { en: "Refrigerate whole; cut pieces within days.", hi: "साबुत फ्रिज में; कटे टुकड़े कुछ दिनों में।" } },
    { id: "greenpeas", en: "Green Peas", hi: "हरी मटर", img: img("photo-1587735243615-c03f25aaff15", 600), category: "vegetable", kcal: 81, protein: 5.4, carbs: 14, fat: 0.4, satFat: 0.1, fiber: 5.1, sugar: 5.7, sodium: 5, potassium: 244, calcium: 25, iron: 1.5, vitC: 40, vitA: 38, water: 79, benefit: { en: "Plant protein and fibre; good for satiety.", hi: "पौध प्रोटीन व फाइबर; भरपूर पेट।" }, storage: { en: "Refrigerate; freeze to store longer.", hi: "फ्रिज में; अधिक समय हेतु फ्रीज़ करें।" } },
    { id: "brinjal", en: "Brinjal (Eggplant)", hi: "बैंगन", img: img("photo-1615484477778-ca3b77940c25", 600), category: "vegetable", kcal: 25, protein: 1.0, carbs: 6, fat: 0.2, satFat: 0.0, fiber: 3.0, sugar: 3.5, sodium: 2, potassium: 229, calcium: 9, iron: 0.2, vitC: 2.2, vitA: 1, water: 92, benefit: { en: "Fibre-rich and low in calories.", hi: "फाइबर युक्त व कम कैलोरी।" }, storage: { en: "Room temperature briefly; refrigerate for longer.", hi: "थोड़ी देर सामान्य; अधिक हेतु फ्रिज में।" } },
    { id: "rice-cooked", en: "Cooked White Rice", hi: "पका सफेद चावल", img: img("photo-1536304993881-ff6e9eefa2a6", 600), category: "grain", kcal: 130, protein: 2.7, carbs: 28, fat: 0.3, satFat: 0.1, fiber: 0.4, sugar: 0.1, sodium: 1, potassium: 35, calcium: 10, iron: 0.2, vitC: 0, vitA: 0, water: 68, benefit: { en: "Easy-to-digest energy staple.", hi: "आसान पाचन वाला ऊर्जा आहार।" }, storage: { en: "Refrigerate cooked rice; reheat thoroughly and consume within a day.", hi: "पके चावल फ्रिज में; गर्म कर के एक दिन में खाएँ।" } },
    { id: "roti", en: "Wheat Roti (Chapati)", hi: "गेहूँ की रोटी", img: img("photo-1565557623262-b51c2513a641", 600), category: "grain", kcal: 297, protein: 11, carbs: 46, fat: 7, satFat: 1.0, fiber: 6, sugar: 2, sodium: 200, potassium: 150, calcium: 30, iron: 3.0, vitC: 0, vitA: 0, water: 28, benefit: { en: "Whole-wheat staple providing complex carbs, fibre and some protein.", hi: "साबुत गेहूँ का आहार; जटिल कार्ब्स, फाइबर व कुछ प्रोटीन।" }, storage: { en: "Best fresh; store in an airtight container.", hi: "ताज़ा सर्वोत्तम; वायुरोधी डिब्बे में रखें।" } },
    { id: "dal-cooked", en: "Cooked Lentil Dal (Toor/Moong)", hi: "पकी दाल (अरहर/मूंग)", img: img("photo-1546833999-b9f581a1996d", 600), category: "pulse", kcal: 116, protein: 9, carbs: 20, fat: 0.4, satFat: 0.1, fiber: 8, sugar: 2, sodium: 5, potassium: 369, calcium: 19, iron: 3.3, vitC: 1.5, vitA: 0, water: 70, benefit: { en: "Excellent plant protein and fibre source.", hi: "उत्कृष्ट पौध प्रोटीन व फाइबर स्रोत।" }, storage: { en: "Refrigerate cooked dal; use within 2 days.", hi: "पकी दाल फ्रिज में; 2 दिनों में उपयोग करें।" } },
    { id: "chana-boiled", en: "Boiled Chickpeas (Chana)", hi: "उबला चना", img: img("photo-1610970881699-44a5587cabec", 600), category: "pulse", kcal: 164, protein: 8.9, carbs: 27, fat: 2.6, satFat: 0.3, fiber: 7.6, sugar: 4.8, sodium: 7, potassium: 291, calcium: 49, iron: 2.9, vitC: 1.3, vitA: 1, water: 60, benefit: { en: "Protein and fibre rich; supports fullness.", hi: "प्रोटीन व फाइबर से भरपूर; पेट भरा रखे।" }, storage: { en: "Refrigerate; consume within 3 days.", hi: "फ्रिज में; 3 दिनों में खाएँ।" } },
    { id: "paneer", en: "Paneer (Cottage Cheese)", hi: "पनीर", img: img("photo-1631452180519-c014fe946bc7", 600), category: "dairy", kcal: 265, protein: 18, carbs: 3.4, fat: 20, satFat: 13, fiber: 0, sugar: 3.4, sodium: 22, potassium: 138, calcium: 208, iron: 0.3, vitC: 0, vitA: 60, water: 54, benefit: { en: "Concentrated protein and calcium; also higher in fat.", hi: "गाढ़ा प्रोटीन व कैल्शियम; वसा भी अधिक।" }, storage: { en: "Refrigerate in water; use within a few days.", hi: "पानी में फ्रिज में; कुछ दिनों में उपयोग करें।" } },
    { id: "milk", en: "Milk (Toned)", hi: "दूध (टोन्ड)", img: img("photo-1550583724-b2692b85b150", 600), category: "dairy", kcal: 58, protein: 3.2, carbs: 4.8, fat: 3.0, satFat: 1.9, fiber: 0, sugar: 4.8, sodium: 44, potassium: 150, calcium: 120, iron: 0.1, vitC: 1, vitA: 47, water: 88, benefit: { en: "Calcium and protein; good source of vitamin B12 and D (if fortified).", hi: "कैल्शियम व प्रोटीन; विटामिन B12 व D (यदि फोर्टिफाइड)।" }, storage: { en: "Refrigerate; use before expiry.", hi: "फ्रिज में; एक्सपायरी से पहले उपयोग करें।" } },
    { id: "curd", en: "Curd (Yoghurt)", hi: "दही", img: img("photo-1488477181946-6428a0291777", 600), category: "dairy", kcal: 61, protein: 3.5, carbs: 4.7, fat: 3.3, satFat: 2.1, fiber: 0, sugar: 4.7, sodium: 46, potassium: 155, calcium: 121, iron: 0.1, vitC: 0.5, vitA: 27, water: 88, benefit: { en: "Contains probiotics supporting gut health.", hi: "आंत स्वास्थ्य हेतु प्रोबायोटिक।" }, storage: { en: "Refrigerate; consume fresh.", hi: "फ्रिज में; ताज़ा खाएँ।" } },
    { id: "egg", en: "Egg (Boiled)", hi: "अंडा (उबला)", img: img("photo-1582722872445-44dc5f7e3c8f", 600), category: "protein", kcal: 155, protein: 13, carbs: 1.1, fat: 11, satFat: 3.3, fiber: 0, sugar: 1.1, sodium: 124, potassium: 126, calcium: 50, iron: 1.2, vitC: 0, vitA: 149, water: 75, benefit: { en: "Complete protein with vitamin A and B12.", hi: "पूर्ण प्रोटीन; विटामिन A व B12।" }, storage: { en: "Refrigerate; use before expiry.", hi: "फ्रिज में; एक्सपायरी से पहले उपयोग करें।" } },
    { id: "chicken", en: "Chicken (Cooked, skinless)", hi: "चिकन (पका, बिना चमड़ी)", img: img("photo-1604503468506-a8da13d82791", 600), category: "protein", kcal: 165, protein: 31, carbs: 0, fat: 3.6, satFat: 1.0, fiber: 0, sugar: 0, sodium: 74, potassium: 256, calcium: 15, iron: 1.0, vitC: 0, vitA: 6, water: 65, benefit: { en: "Lean protein supporting muscle maintenance.", hi: "मांसपेशियों हेतु दुबला प्रोटीन।" }, storage: { en: "Refrigerate raw and cooked separately; cook thoroughly.", hi: "कच्चा व पका अलग-अलग फ्रिज में; पूरी तरह पकाएँ।" } },
    { id: "groundnut", en: "Groundnut (Roasted)", hi: "भुनी मूँगफली", img: img("photo-1567892737950-30c4db37cd89", 600), category: "nut", kcal: 567, protein: 26, carbs: 16, fat: 49, satFat: 6.9, fiber: 8.5, sugar: 4.7, sodium: 18, potassium: 705, calcium: 92, iron: 4.6, vitC: 0, vitA: 0, water: 1.6, benefit: { en: "Energy-dense with protein and healthy fats; watch portion size.", hi: "प्रोटीन व अच्छी वसा से भरपूर; मात्रा का ध्यान रखें।" }, storage: { en: "Airtight, cool and dry to prevent rancidity.", hi: "वायुरोधी, ठंडा व सूखा; बासी होने से बचाएँ।" } },
    { id: "almonds", en: "Almonds", hi: "बादाम", img: img("photo-1508061253366-f7da158b6d46", 600), category: "nut", kcal: 579, protein: 21, carbs: 22, fat: 50, satFat: 3.8, fiber: 12, sugar: 4.4, sodium: 1, potassium: 733, calcium: 269, iron: 3.7, vitC: 0, vitA: 0, water: 4.4, benefit: { en: "Healthy fats, vitamin E, protein; small portions advised.", hi: "अच्छी वसा, विटामिन E, प्रोटीन; कम मात्रा उपयुक्त।" }, storage: { en: "Airtight container in a cool place.", hi: "ठंडी जगह वायुरोधी डिब्बे में।" } }
  ];

  /* ----------------------------------------------------------------------
   * COMMON PACKAGED / JUNK FOODS (per typical serving where noted)
   * Approximate general reference values only.
   * -------------------------------------------------------------------- */
  var JUNK_FOODS = [
    { id: "chips", en: "Potato Chips", hi: "आलू चिप्स", serving: "50 g (small pack)", kcal: 274, protein: 3.5, carbs: 26, fat: 18, satFat: 6, sugar: 0.3, fiber: 2, sodium: 500, potassium: 600, calcium: 20, iron: 0.8, concern: { en: "Very high in fat and sodium; easy to over-eat.", hi: "वसा व सोडियम अधिक; जल्दी अधिक खा जाते हैं।" } },
    { id: "noodles", en: "Instant Noodles", hi: "इंस्टेंट नूडल्स", serving: "1 pack (~70 g)", kcal: 350, protein: 8, carbs: 52, fat: 13, satFat: 6, sugar: 2, fiber: 2, sodium: 1100, potassium: 150, calcium: 30, iron: 1.2, concern: { en: "High sodium and refined carbohydrate; low fibre.", hi: "सोडियम व रिफाइंड कार्ब्स अधिक; फाइबर कम।" } },
    { id: "pizza", en: "Pizza (cheese, 1 slice)", hi: "पिज़्ज़ा (चीज़, 1 स्लाइस)", serving: "1 slice (~100 g)", kcal: 266, protein: 11, carbs: 33, fat: 10, satFat: 4.5, sugar: 3.6, fiber: 2.3, sodium: 598, potassium: 172, calcium: 188, iron: 2.3, concern: { en: "Refined base with high sodium and saturated fat.", hi: "रिफाइंड बेस; सोडियम व संतृप्त वसा अधिक।" } },
    { id: "burger", en: "Burger (veg/cheese)", hi: "बर्गर (वेज/चीज़)", serving: "1 burger (~150 g)", kcal: 295, protein: 11, carbs: 30, fat: 14, satFat: 5, sugar: 6, fiber: 2, sodium: 500, potassium: 250, calcium: 120, iron: 2.5, concern: { en: "High saturated fat and sodium; often low in fibre.", hi: "संतृप्त वसा व सोडियम अधिक; फाइबर कम।" } },
    { id: "softdrink", en: "Soft Drink (Cola)", hi: "कोल्ड ड्रिंक (कोला)", serving: "330 ml can", kcal: 139, protein: 0, carbs: 36, fat: 0, satFat: 0, sugar: 35, fiber: 0, sodium: 15, potassium: 3, calcium: 2, iron: 0, concern: { en: "Very high added sugar with no nutrients.", hi: "बहुत अधिक शर्करा, कोई पोषक तत्व नहीं।" } },
    { id: "samosa", en: "Samosa (fried)", hi: "समोसा (तला)", serving: "1 piece (~60 g)", kcal: 262, protein: 4, carbs: 24, fat: 17, satFat: 4, sugar: 1, fiber: 2, sodium: 350, potassium: 180, calcium: 20, iron: 1.2, concern: { en: "Deep-fried; high fat and calorie density.", hi: "गहरे तेल में तला; वसा व कैलोरी अधिक।" } },
    { id: "biscuit", en: "Cream Biscuits", hi: "क्रीम बिस्किट", serving: "3 biscuits (~30 g)", kcal: 145, protein: 1.6, carbs: 22, fat: 5.5, satFat: 2.5, sugar: 10, fiber: 0.6, sodium: 110, potassium: 40, calcium: 15, iron: 0.5, concern: { en: "Refined flour and added sugar; limited nutrition.", hi: "रिफाइंड आटा व शर्करा; पोषण सीमित।" } },
    { id: "chocolate", en: "Milk Chocolate", hi: "मिल्क चॉकलेट", serving: "40 g bar", kcal: 214, protein: 3, carbs: 24, fat: 12, satFat: 7, sugar: 21, fiber: 1.4, sodium: 30, potassium: 150, calcium: 75, iron: 1, concern: { en: "High sugar and saturated fat; occasional treat.", hi: "शर्करा व संतृप्त वसा अधिक; कभी-कभार।" } },
    { id: "icecream", en: "Ice Cream", hi: "आइसक्रीम", serving: "100 g", kcal: 207, protein: 3.5, carbs: 24, fat: 11, satFat: 6.8, sugar: 21, fiber: 0.7, sodium: 80, potassium: 199, calcium: 128, iron: 0.1, concern: { en: "High sugar and saturated fat.", hi: "शर्करा व संतृप्त वसा अधिक।" } },
    { id: "pakora", en: "Fried Pakora / Bhajji", hi: "तला पकौड़ा/भजिया", serving: "100 g", kcal: 315, protein: 7, carbs: 27, fat: 20, satFat: 3, sugar: 2, fiber: 4, sodium: 480, potassium: 350, calcium: 60, iron: 2.0, concern: { en: "Deep-fried; absorbs a lot of oil.", hi: "गहरे तेल में तला; बहुत तेल सोखता है।" } }
  ];

  /* ----------------------------------------------------------------------
   * WELLNESS GOALS & GENERAL GUIDANCE (safe, non-medical, educational)
   * -------------------------------------------------------------------- */
  var WELLNESS_GOALS = [
    { id: "overall", en: "Improve overall health", hi: "समग्र स्वास्थ्य सुधारें" },
    { id: "eating", en: "Build healthier eating habits", hi: "स्वस्थ खान-पान की आदतें बनाएँ" },
    { id: "activity", en: "Improve daily activity", hi: "दैनिक गतिविधि बढ़ाएँ" },
    { id: "sleep", en: "Improve sleep routine", hi: "नींद की दिनचर्या सुधारें" }
  ];

  /* Daily habit tracker defaults (bilingual) */
  var HABITS = [
    { id: "water", emoji: "\uD83D\uDCA7", en: "Drink enough water", hi: "पर्याप्त पानी पिएँ" },
    { id: "veggies", emoji: "\uD83E\uDD57", en: "Eat fruit / vegetables", hi: "फल / सब्ज़ी खाएँ" },
    { id: "move", emoji: "\uD83D\uDEB6", en: "Move / exercise 30 min", hi: "30 मिनट गतिविधि करें" },
    { id: "sleep", emoji: "\uD83D\uDECF", en: "Sleep 7–8 hours", hi: "7–8 घंटे नींद लें" },
    { id: "screen", emoji: "\uD83D\uDCF5", en: "Limit screen before bed", hi: "सोने से पहले स्क्रीन कम करें" },
    { id: "meal", emoji: "\uD83C\uDF7D", en: "Eat on time, no skipping", hi: "समय पर भोजन करें" }
  ];

  return {
    UNSPLASH: UNSPLASH,
    img: img,
    SOILS: SOILS,
    SEASONS: SEASONS,
    WATER_LEVELS: WATER_LEVELS,
    PREFERENCES: PREFERENCES,
    UNITS: UNITS,
    STATES: STATES,
    CROPS: CROPS,
    CROP_DISEASES: CROP_DISEASES,
    OFFICIAL_AGRI: OFFICIAL_AGRI,
    NUTRITION: NUTRITION,
    JUNK_FOODS: JUNK_FOODS,
    WELLNESS_GOALS: WELLNESS_GOALS,
    HABITS: HABITS,
    _meta: {
      dataNote: {
        en: "General indicative reference ranges for education and demonstration. Not location-verified advice. Confirm with local agriculture extension officers / KVK and official mandi prices.",
        hi: "शिक्षा व प्रदर्शन हेतु सामान्य संकेतात्मक संदर्भ। स्थान-सत्यापित सलाह नहीं। स्थानीय कृषि विस्तार अधिकारी / KVK व आधिकारिक मंडी भाव से पुष्टि करें।"
      }
    }
  };
});

/* ==================== js/i18n/translations.js ==================== */
/* ==========================================================================
   AgriHealthAI — Central translation dictionary
   Every user-facing string lives here (translations.en / translations.hi).
   Use {name} placeholders and replace with interpolate() in i18n/index.js.
   ========================================================================== */
window.I18N = {
  en: {
    meta: {
      title: "AgriHealthAI — Smart Agriculture, Better Food, Healthier Choices",
      titleSuffix: "AgriHealthAI"
    },
    nav: {
      home: "Home",
      agriculture: "Agriculture",
      scanner: "Food Scanner",
      health: "Health & FitHomey",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
      brandSub: "Smart Agri • Food • Health",
      menu: "Open menu",
      close: "Close menu",
      langLabel: "Language",
      english: "English",
      hindi: "हिन्दी"
    },
    common: {
      explore: "Explore",
      learnMore: "Learn more",
      error: "Something went wrong. Please try again.",
      back: "Back",
      next: "Next",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      print: "Print",
      download: "Download",
      reset: "Reset",
      edit: "Edit",
      close: "Close",
      remove: "Remove",
      replace: "Replace",
      retry: "Try again",
      loading: "Loading…",
      required: "Required",
      optional: "optional",
      submit: "Submit",
      sending: "Sending…",
      success: "Done",
      demoBadge: "DEMO MODE",
      demoShort: "Demo",
      viewAll: "View all",
      search: "Search",
      filter: "Filter",
      compare: "Compare",
      compareSelected: "Compare selected",
      selected: "Selected",
      clear: "Clear all",
      all: "All",
      startOver: "Start over",
      apply: "Apply",
      estimate: "Estimate",
      approximate: "approximate",
      per100g: "per 100 g",
      viewDetails: "View details",
      dataSource: "Data source",
      poweredByDemo: "Running in demo mode",
      of: "of",
      showing: "Showing",
      step: "Step",
      new: "New",
      note: "Note",
      yes: "Yes",
      no: "No",
      done: "Done",
      pending: "Pending",
      today: "Today",
      week: "Week",
      copy: "Copy",
      copied: "Copied to clipboard"
    },
    units: {
      days: "days",
      acres: "acre(s)",
      hectares: "hectare(s)",
      quintal: "quintal",
      quintals: "quintals",
      tonne: "tonne",
      tonnes: "tonnes",
      kg: "kg",
      g: "g",
      mg: "mg",
      kcal: "kcal",
      inr: "₹",
      perAcre: "/acre",
      perHectare: "/hectare"
    },
    a11y: {
      skip: "Skip to main content",
      imageFallback: "Image unavailable",
      requiredMark: "(required)",
      opensNew: "(opens in a new tab)"
    },
    img: {
      heroFarm: "Green farmland with young crops under a bright sky",
      agriField: "Farmer tending a crop field",
      foodFresh: "Fresh fruits and vegetables on a table",
      healthFit: "Person exercising at home",
      workflowFarm: "Vegetables growing in a crop field",
      workflowFood: "A balanced plate of fresh food",
      workflowHealth: "Active, healthy everyday routine",
      problemSoil: "Close-up of healthy soil and a young plant",
      ctaField: "Wide view of a cultivated field at sunrise",
      scannerSample: "A bowl of fresh vegetables",
      aboutMission: "Farmers working together in a field",
      cardAgri: "Rows of crops in a farm field",
      cardFood: "Assorted fresh produce",
      cardHealth: "Stretching during a home workout"
    },
    home: {
      heroTitle: "Smart Agriculture. Better Food. Healthier Choices.",
      heroSub: "AI-powered guidance for farmers, food awareness, and healthier everyday living—all in one platform.",
      heroHi: "स्मार्ट कृषि, बेहतर भोजन और स्वस्थ जीवन के लिए एक ही प्लेटफ़ॉर्म पर AI आधारित मार्गदर्शन।",
      ctaPrimary: "Explore AI Tools",
      ctaSecondary: "Discover Our Mission",
      heroBadge: "Demo mode — connect real AI to go live",
      featuresEyebrow: "Three pillars, one platform",
      featuresTitle: "Agriculture, Food and Health — connected",
      featuresSub: "AgriHealthAI links what we grow, what we eat and how we live, so everyday decisions are better informed.",
      f1Title: "Agriculture",
      f1Text: "Plan crops with a guided assistant that weighs your soil, water, season and budget — and shows honest cost and profit ranges.",
      f1Cta: "Plan my crop",
      f2Title: "Food",
      f2Text: "Scan a food photo for a visible-freshness check and view approximate nutrition facts from reference food data.",
      f2Cta: "Scan food",
      f3Title: "Health",
      f3Text: "Get safe, non-medical lifestyle guidance, a junk-food recovery assistant and the FitHomey habit tracker.",
      f3Cta: "Open Health",
      howEyebrow: "How it works",
      howTitle: "From farm field to family plate",
      howSub: "A simple, transparent flow — no hidden sensors, no pretend measurements.",
      howStep1: "Tell us your context",
      howStep1Text: "Share your land, soil, water, season and budget — in English or Hindi.",
      howStep2: "Get guided recommendations",
      howStep2Text: "See ranked crop options and a structured growing plan with honest estimates.",
      howStep3: "Check your food",
      howStep3Text: "Upload a food photo for a visible-freshness check and approximate nutrition facts.",
      howStep4: "Build healthier habits",
      howStep4Text: "Follow safe lifestyle guidance and track daily habits with FitHomey.",
      problemsEyebrow: "Why it matters",
      problemsTitle: "Real problems we are addressing",
      problemsSub: "These are widely documented challenges in Indian agriculture, nutrition and public health — not invented statistics.",
      prob1: "Farmers often lack quick, plain-language guidance on what to grow and what it may cost.",
      prob2: "Food freshness and nutrition information is hard to judge from a quick look.",
      prob3: "Everyday eating and activity habits are hard to track and easy to lose.",
      prob4: "Language is a barrier: most digital tools are English-only.",
      workflowEyebrow: "Connected thinking",
      workflowTitle: "Agriculture → Food → Health",
      workflowSub: "Better crops mean better food, and better food supports better health.",
      wfAgri: "Grow",
      wfAgriText: "Plan the right crop for the land, water and season.",
      wfFood: "Nourish",
      wfFoodText: "Understand freshness and approximate nutrition.",
      wfHealth: "Thrive",
      wfHealthText: "Build safe, sustainable daily habits.",
      ctaTitle: "Ready to explore?",
      ctaSub: "Start with the AI crop planner, scan a food photo, or open the FitHomey health assistant. Everything works in English and Hindi.",
      ctaBtn: "Get Started",
      statSafeTitle: "No fabricated numbers",
      statSafeText: "We do not show fake user counts, fake profits or invented testimonials. Estimates are clearly labelled.",
      statLangTitle: "Bilingual by design",
      statLangText: "Full English and हिन्दी interface with a single shared translation system.",
      statHonestTitle: "Honest about limits",
      statHonestText: "Demo data is labelled, and we explain what must be connected for real AI results."
    },
    agri: {
      title: "AI Crop Planning Assistant",
      subtitle: "Share your farming context and get ranked, transparent crop suggestions with honest cost and profit ranges — plus a full growing plan.",
      demoNotice: "This assistant runs on general reference data (demo mode). It is not location-verified advice. Always confirm with your local agriculture extension officer or KVK before sowing.",
      formTitle: "Tell us about your farm",
      formSub: "Fields marked {required} must be filled. Everything else helps improve the suggestion.",
      state: "State",
      stateHint: "Where is your land located?",
      statePlaceholder: "Select your state",
      seasonPlaceholder: "Select growing season",
      waterPlaceholder: "Select water availability",
      district: "District / Block (optional)",
      districtPlaceholder: "e.g. Nashik, Ludhiana…",
      landArea: "Land area",
      landAreaHint: "How much land do you plan to cultivate?",
      unit: "Measurement unit",
      season: "Growing season",
      seasonHint: "Which season are you planning for?",
      soil: "Soil type",
      soilHint: "Not sure? Choose “I don't know” and we will treat soil as flexible.",
      water: "Irrigation & water availability",
      waterHint: "How much water can you reliably provide?",
      budget: "Approximate total budget",
      budgetHint: "Optional. Helps prioritise affordable crops.",
      budgetPlaceholder: "e.g. 25000",
      preference: "Farming preference",
      preferenceHint: "What matters most to you this season? (choose one or more)",
      submit: "Get crop recommendations",
      submitHint: "We will rank suitable crops and explain each one.",
      resetForm: "Clear form",
      resultsTitle: "Recommended crops",
      resultsSub: "Ranked by how well they match your season, soil, water and preference. Always cross-check locally.",
      resultsCount: "{count} crops matched your inputs",
      noResultsTitle: "No close match found",
      noResultsText: "Try changing the season, water availability or soil type.",
      rank: "Match rank",
      score: "Suitability",
      matchScore: "{score}% match",
      suitability: "Why this suits you",
      duration: "Growing duration",
      inputCost: "Est. input cost",
      yieldRange: "Expected yield range",
      grossRevenue: "Est. gross revenue",
      totalCost: "Est. total cultivation cost",
      netProfit: "Est. net profit range",
      waterNeed: "Water requirement",
      labour: "Labour & effort",
      risks: "Key risks",
      climate: "Climate",
      soilRisk: "Soil",
      marketRisk: "Market",
      selectCrop: "Select & build plan",
      addCompare: "Add to compare",
      removeCompare: "Remove",
      showDetails: "Show cost & profit details",
      hideDetails: "Hide details",
      assumptionsTitle: "How these numbers are calculated",
      assumptionsText: "Costs, yields and prices use general reference ranges scaled to your land area. Net profit = estimated gross revenue − estimated total cultivation cost. Real results depend on variety, weather, market prices and management, and may be higher or lower. These are indicative estimates, not a guarantee.",
      comparisonTitle: "Crop comparison",
      comparisonSub: "Comparing {count} crops side by side. Values are estimates for your selected land area.",
      metric: "Metric",
      removeAllCompare: "Clear comparison",
      planTitle: "Cultivation plan",
      planFor: "Growing plan for",
      planIntro: "A structured guide for your selected crop. Follow local agronomist advice and adapt to your field conditions.",
      sectionLandPrep: "Land & soil preparation",
      sectionSeed: "Seed variety & selection",
      sectionSowing: "Sowing period & method",
      sectionSpacing: "Spacing & planting depth",
      sectionIrrigation: "Irrigation schedule",
      sectionFertiliser: "Fertiliser & nutrient management",
      sectionWeed: "Weed management",
      sectionPest: "Pest & disease monitoring",
      sectionStages: "Crop growth stages",
      sectionHarvest: "Harvesting indicators",
      sectionStorage: "Post-harvest storage & handling",
      calendarTitle: "Practical task calendar",
      calendarSub: "Tasks organised by crop stage. Days are counted from sowing/planting.",
      taskWhat: "What to do",
      taskWhen: "When",
      taskHow: "How",
      taskWhy: "Why it matters",
      taskAvoid: "What to avoid",
      printPlan: "Print plan",
      downloadPlan: "Download plan (.txt)",
      savePlan: "Save plan locally",
      savedPlan: "Plan saved to this browser",
      startOver: "Start over",
      editInputs: "Edit inputs",
      selectedCrop: "Selected crop",
      stage: "Stage",
      dayRange: "Day {from}–{to}",
      expertNote: "Some stages need visual inspection and local judgement. Consult your local KVK/extension officer for weather-based and pest advisories.",
      validation: {
        state: "Please choose your state.",
        land: "Please enter a land area greater than 0.",
        unit: "Please choose a measurement unit.",
        season: "Please choose a growing season.",
        water: "Please choose water availability.",
        budget: "Budget must be a positive number or left empty.",
        pref: "Please choose at least one preference."
      }
    },
    disease: {
      eyebrow: "Crop health",
      title: "Crop disease check",
      subtitle: "Upload a crop photo, choose the crop, and see the common possible diseases with step-by-step recovery. A photo alone cannot confirm a disease — use the symptom checklist to narrow it down.",
      demoNotice: "This is a reference screening tool (demo mode), not a laboratory diagnosis. Always confirm with your local KVK / agriculture extension officer before using any treatment.",
      cropLabel: "Which crop is in the photo?",
      cropHint: "Choosing the crop lets us show the diseases that actually occur on it.",
      cropPlaceholder: "Select crop",
      choosePhoto: "Choose crop photo",
      dropHere: "Drop a crop photo here",
      uploadHint: "A close, clear photo of the affected leaf, stem or fruit in daylight works best. JPG, PNG or WebP, up to 6 MB.",
      analyse: "Check crop photo",
      analysing: "Checking the photo…",
      analysingHint: "Measuring the image and preparing the crop-specific checklist.",
      replace: "Replace photo",
      remove: "Remove photo",
      resultTitle: "Crop health screening",
      visualTitle: "Visual screening",
      demoBadge: "Demo screening",
      photoQuality: "Photo quality",
      qualityGood: "Good — clear enough for screening",
      qualityLowLight: "Low light — retake in daylight for a better check",
      qualityWashed: "Too bright or flat — retake with even daylight",
      qualityBlurry: "Low detail — hold steady and get closer",
      qualityUnknown: "Could not read the image clearly",
      measured: "What we measured in your photo",
      brightness: "Brightness",
      contrast: "Contrast",
      greenArea: "Green area",
      warmArea: "Yellow/brown area",
      darkArea: "Dark area",
      possibleTitle: "Possible issues to check for {crop}",
      possibleIntro: "These are the common diseases and disorders for this crop. Tick the symptoms you can actually see to narrow it down.",
      symptomTitle: "Symptom check",
      symptomIntro: "Tick every sign that matches what you see on the plant. Leave blank if you are unsure.",
      rankTitle: "Most likely based on your symptoms",
      rankNone: "No symptoms ticked yet — showing common possibilities.",
      match: "{score}% symptom match",
      common: "Common possibility",
      signs: "Typical signs",
      recovery: "Steps to recover",
      prevention: "Prevent next time",
      consult: "Confirm with your KVK / extension officer before buying or applying any chemical. This tool never recommends doses.",
      resetSymptoms: "Clear symptom ticks",
      noPhoto: "Please choose a crop photo first.",
      noCrop: "Please choose the crop in the photo.",
      errorType: "Unsupported file type. Please use JPG, PNG or WebP.",
      errorSize: "File is too large. Maximum size is 6 MB.",
      errorAnalysis: "Could not check the photo. Please try again.",
      kindFungal: "Fungal",
      kindBacterial: "Bacterial",
      kindViral: "Viral",
      kindInsect: "Insect pest",
      kindDisorder: "Disorder / stress",
      disclaimer: "A photo and symptom checklist cannot confirm a disease. Laboratory or expert diagnosis is required for certainty."
    },
    charts: {
      profitTitle: "Estimated net profit range by crop",
      profitSub: "Each bar is the low-to-high estimate for your land area. A longer bar is not a guarantee of profit.",
      rangeLow: "Low estimate",
      rangeHigh: "High estimate",
      rangeMid: "Midpoint",
      costTitle: "Estimated cost breakdown",
      costSub: "Share of the estimated total cultivation cost (midpoint of the range).",
      costSeed: "Seed",
      costFertiliser: "Fertiliser",
      costLabour: "Labour",
      costIrrigation: "Irrigation",
      costTotal: "Total cost",
      officialEyebrow: "Official data",
      officialTitle: "India agriculture at a glance",
      officialSub: "National foodgrain production published by the Ministry of Agriculture & Farmers Welfare. Shown for context — it is not a forecast for your farm.",
      kpiFoodgrain: "Foodgrain production (2024-25)",
      kpiGrowth: "Growth over 2023-24",
      kpiRice: "Rice (2023-24)",
      kpiWheat: "Wheat (2023-24)",
      kpiOilseeds: "Oilseeds (2023-24)",
      trendTitle: "Foodgrain production trend",
      trendSub: "Million tonnes. Points are spaced by the actual year, not evenly.",
      mixTitle: "Foodgrain production by group (2023-24)",
      mixSub: "Lakh tonnes. 1 lakh tonne = 100,000 tonnes.",
      sources: "Sources",
      sourceNote: "Official figures are reproduced as published. The Ministry may revise them.",
      updated: "Last official release used",
      millionTonnes: "million tonnes",
      lakhTonnes: "lakh tonnes",
      dataDisclaimer: "Official statistics describe the whole country, not your field. Use them for context only.",
      viewData: "View official data",
      chartAriaProfit: "Chart of estimated net profit range by crop",
      chartAriaCost: "Donut chart of estimated cultivation cost breakdown",
      chartAriaTrend: "Line chart of India foodgrain production over time",
      chartAriaMix: "Bar chart of foodgrain production by group"
    },
    scanner: {
      title: "AI Food Scanner & Nutrition Analyser",
      subtitle: "Upload a food photo for a visible-freshness check, then view approximate nutrition facts from reference food data.",
      demoNotice: "Image analysis runs in demo mode (no vision API connected). Results are clearly labelled and are NOT a food-safety test.",
      safetyTitle: "Important food-safety disclaimer",
      safetyText: "A photo cannot reliably detect invisible contamination, toxins, pathogens, spoiled interiors or all food-safety hazards. When in doubt about food safety, throw it out. This tool is educational only.",
      uploadTitle: "Upload a food photo",
      uploadHint: "Drag and drop, or click to choose. JPG, PNG or WebP, up to 6 MB.",
      chooseFile: "Choose photo",
      dropHere: "Drop your photo here",
      orText: "or",
      preview: "Preview",
      analyse: "Analyse food",
      analysing: "Analysing image…",
      analysingHint: "Identifying the food and checking visible freshness signs.",
      remove: "Remove photo",
      replace: "Replace photo",
      resultTitle: "Food analysis result",
      likelyFood: "Likely food",
      freshness: "Visible freshness assessment",
      spoilage: "Possible spoilage signs",
      confidence: "Confidence",
      lowConfidence: "Low confidence",
      mediumConfidence: "Moderate confidence",
      highConfidence: "Higher confidence",
      storageRec: "Storage recommendation",
      preservation: "Preservation information",
      statusFresh: "Appears Fresh",
      statusSpoil: "Possible Spoilage",
      statusUnknown: "Unable to Determine",
      statusClear: "No obvious visual spoilage signs",
      statusCheck: "Check carefully — possible visual concerns",
      visualStatus: "Visual status (estimate)",
      visualStatusNote: "Based only on measurable photo properties: light, colour and contrast. This is NOT a food-safety test.",
      visualEstimateBadge: "VISUAL ESTIMATE",
      photoQuality: "Photo quality",
      qualityGood: "Good",
      qualityLow: "Low light or low detail",
      measured: "What we measured in your photo",
      brightness: "Brightness",
      contrast: "Contrast",
      greenArea: "Green area",
      brownArea: "Brown / dark area",
      yellowArea: "Yellow area",
      howToConfirm: "How to confirm before eating",
      check1: "Look for mould — fuzzy white, green, black or blue patches.",
      check2: "Smell for sour, musty or off odours.",
      check3: "Feel for slime or soft, mushy spots.",
      check4: "Check the use-by date on packaged food.",
      check5: "If anything is doubtful, throw it out — never taste food to test it.",
      retakePhoto: "Retake in daylight",
      estimateNote: "This status comes from a rule-based measurement of the photo, not a trained vision model. It cannot detect invisible contamination, toxins or pathogens.",
      confirmTitle: "Confirm the food",
      confirmText: "We could not identify this confidently. Please confirm or select the food so we can show accurate reference nutrition.",
      confirmSelect: "Select the food",
      confirmPlaceholder: "Search foods…",
      useThis: "Use this food",
      nutritionTitle: "Nutrition facts",
      nutritionSub: "Approximate reference values from public food-composition data.",
      perServing: "Per serving",
      servingSize: "Serving size",
      servingGrams: "Serving size (g)",
      servingNote: "Values shown are for reference and may vary by variety, ripeness and preparation.",
      energy: "Energy",
      protein: "Protein",
      carbs: "Total carbohydrates",
      fat: "Total fats",
      satFat: "Saturated fats",
      fibre: "Dietary fibre",
      sugar: "Sugars",
      sodium: "Sodium",
      potassium: "Potassium",
      calcium: "Calcium",
      iron: "Iron",
      vitC: "Vitamin C",
      vitA: "Vitamin A",
      water: "Water content",
      benefits: "General nutritional benefits",
      description: "Food description",
      storageGuide: "Storage guidance",
      preservationMethods: "Suitable preservation methods",
      source: "Source",
      sourceDemo: "Reference food-composition dataset (approximate, demo)",
      errorType: "Unsupported file type. Please use JPG, PNG or WebP.",
      errorSize: "File is too large. Maximum size is 6 MB.",
      errorAnalysis: "Analysis failed. Please try again or choose another photo.",
      pickFirst: "Please choose a food photo first.",
      nutritionUnavailable: "Nutrition data not available for this food yet.",
      chartTitle: "Macronutrient breakdown",
      chartEnergy: "Energy share by macronutrient",
      pickFoodPrompt: "Pick a food to see a nutrition example",
      pickFoodHint: "No photo needed — try the nutrition analyser with a sample food."
    },
    health: {
      title: "Health & FitHomey",
      subtitle: "Safe, non-medical lifestyle guidance, a junk-food recovery assistant and the FitHomey daily habit tracker.",
      disclaimerTitle: "General wellness only",
      disclaimerText: "This page provides general educational wellness information only. It does not diagnose, treat or cure any condition, and it is not a substitute for advice from a qualified healthcare professional. Please consult a doctor or dietitian for personal medical or dietary advice.",
      tabs: {
        lifestyle: "Healthy lifestyle",
        recovery: "Junk food & recovery",
        tracker: "FitHomey tracker"
      },
      lifestyleTitle: "Build a healthier routine",
      lifestyleSub: "Choose a general goal and see safe, practical guidance. Nothing here is medical advice.",
      chooseGoal: "Choose your wellness goal",
      goalOverall: "Improve overall health",
      goalEating: "Build healthier eating habits",
      goalActivity: "Improve daily activity",
      goalSleep: "Improve sleep routine",
      guidanceTitle: "Guidance for your goal",
      coreHabits: "Everyday foundations",
      core1Title: "Balanced eating",
      core1Text: "Fill most of your plate with vegetables, fruit, whole grains and pulses. Include some protein and healthy fats. You don't need to be perfect — consistency matters more than any single meal.",
      core2Title: "Daily movement",
      core2Text: "Aim for regular movement you enjoy. Even short walks, household work or stretching count. Build up gradually and rest when tired.",
      core3Title: "Age-appropriate activity",
      core3Text: "Children need active play; adults benefit from regular moderate activity; older adults should focus on balance, strength and safe movement. Choose what suits your age and ability.",
      core4Title: "Hydration",
      core4Text: "Drink water through the day and more in hot weather or after activity. Water is usually the best choice.",
      core5Title: "Sleep habits",
      core5Text: "Try a consistent sleep and wake time, keep screens away before bed, and keep the room dark and quiet. Most adults do well with 7–8 hours.",
      core6Title: "Consistency & routines",
      core6Text: "Small, repeatable habits beat intense short bursts. Pick one or two changes at a time and give them a few weeks.",
      recoveryTitle: "Ate something heavy or packaged?",
      recoverySub: "Enter a food and get its approximate nutrition, possible concerns with frequent use, and balanced suggestions for your next meals. This is guidance to return to balance — not a detox, and not a punishment.",
      enterFood: "Food you ate",
      enterFoodPlaceholder: "e.g. chips, instant noodles, pizza, cola…",
      findFood: "Find nutrition",
      searching: "Looking up reference values…",
      notFound: "We couldn't find that food. Try a common packaged or fast food, or pick one below.",
      suggestionsTitle: "Try one of these",
      nutritionFor: "Approximate nutrition",
      concernsTitle: "Possible concerns with frequent or excessive use",
      nextMealsTitle: "Balance your next meals",
      hydrationTitle: "Hydration",
      movementTitle: "Everyday movement",
      longTermTitle: "Sustainable long-term habits",
      recoveryNote: "“Recovery” here means returning to balanced everyday habits. It does not mean detoxing, fasting or “burning off” food. One meal does not define your health.",
      safeNote: "We never suggest extreme exercise, long fasts, restrictive diets or unsafe compensatory behaviour. If you have health conditions or concerns, talk to a qualified professional.",
      trackerTitle: "FitHomey daily tracker",
      trackerSub: "Tap to tick off your healthy habits for today. Progress is saved only in this browser.",
      trackerPrivacy: "Your tracker data is stored only in this browser (localStorage) and is not synced across devices or sent to a server. You can clear it anytime.",
      todayProgress: "Today's progress",
      weeklyProgress: "This week",
      mealsReminders: "Meal & hydration reminders",
      reminderBreakfast: "Eat a balanced breakfast",
      reminderWater: "Drink water regularly",
      reminderMeals: "Don't skip meals",
      sleepRoutine: "Sleep-routine tracking",
      sleepBedtime: "Target bedtime",
      sleepHours: "Hours slept last night",
      markDay: "Mark today complete",
      clearTracker: "Clear tracker data",
      clearConfirmTitle: "Clear tracker data?",
      clearConfirmText: "This will permanently delete your saved tracker data from this browser. This cannot be undone.",
      resetDay: "Reset today",
      habitsDone: "{done} of {total} habits done",
      streak: "Current streak",
      dayStreak: "{n}-day streak",
      noStreak: "Start your streak today",
      savedLocal: "Saved in this browser",
      day: "Day",
      tasksRemaining: "{n} remaining",
      allDone: "All habits done — well done!"
    },
    about: {
      title: "About AgriHealthAI",
      subtitle: "A bilingual, transparent platform connecting agriculture, food awareness and everyday health — built with real interactivity and honest labelling.",
      missionTitle: "Our mission",
      missionText: "Smart Agriculture, Better Food, Healthier Choices. We want farmers, families and young people to have clear, understandable tools — in their own language — for decisions about what to grow, what to eat and how to live.",
      visionTitle: "What makes it different",
      v1Title: "Transparent by default",
      v1Text: "We label demo data, separate estimates from facts, and never invent statistics, profits or testimonials.",
      v2Title: "Genuinely bilingual",
      v2Text: "Every label, message and result works in both English and हिन्दी through one shared translation system.",
      v3Title: "Responsible AI",
      v3Text: "We use AI where it helps and stay clear about its limits — especially for food safety and health.",
      v4Title: "Accessible & responsive",
      v4Text: "Keyboard-friendly navigation, good contrast, clear labels and a layout that works on phones, tablets and desktops.",
      techTitle: "Technology",
      techText: "Built with clean HTML5, CSS3 and vanilla JavaScript on the front end, with a small optional Node/Express backend for AI and database connections. Service modules keep AI, nutrition, storage and translation logic separate and easy to replace.",
      modulesTitle: "Service architecture",
      modulesText: "Each capability is a separate service module so you can connect real providers without rewriting the interface:",
      statusTitle: "Current status",
      statusDemo: "Demo mode: crop, food and nutrition features use clearly labelled reference data computed in the app. No external AI keys are required to explore.",
      statusReal: "To enable real AI: configure the backend (see the README) with vision, nutrition and agricultural-data providers.",
      disclaimerTitle: "Honest disclaimers",
      disclaimerText: "Crop profit figures are estimates, not guarantees. Food freshness from photos is an uncertain visual assessment only. Health content is general education, not medical advice."
    },
    contact: {
      title: "Contact & Feedback",
      subtitle: "Send feedback, report an issue or ask a question. In demo mode messages are not sent anywhere — connect a backend to receive them.",
      formTitle: "Send a message",
      name: "Your name",
      namePlaceholder: "Full name",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      topic: "Topic",
      topicGeneral: "General question",
      topicFeedback: "Feedback / suggestion",
      topicBug: "Report a problem",
      topicData: "Data / correctness concern",
      message: "Message",
      messagePlaceholder: "Tell us how we can help…",
      send: "Send message",
      privacyNote: "We only use what you enter to respond. We do not sell or share your data. In demo mode nothing is transmitted — the form validates and confirms locally.",
      successMsg: "Thank you! Your message passed validation. Connect a backend to actually deliver messages.",
      validation: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        topic: "Please choose a topic.",
        message: "Please write a short message (at least 10 characters)."
      },
      infoTitle: "Ways to reach us",
      infoText: "This project does not publish real phone numbers or addresses until official contact details are configured. Add them later in one place.",
      infoPlaceholder: "Contact details to be configured",
      faqTitle: "Frequently asked questions",
      faq1Q: "Is this real AI?",
      faq1A: "The interface is complete and ready. In demo mode, results come from labelled reference data. Connect the backend services described in the README to use real AI providers.",
      faq2Q: "Can it diagnose my health?",
      faq2A: "No. Health content is general education only and never replaces professional medical advice.",
      faq3Q: "Can a photo tell if food is safe?",
      faq3A: "No. A photo only shows visible signs. It cannot detect invisible contamination. When in doubt, discard the food."
    },
    privacy: {
      title: "Privacy & Data Handling",
      subtitle: "How AgriHealthAI treats your information.",
      s1Title: "What we store",
      s1Text: "Language preference and FitHomey tracker progress are stored only in your browser using localStorage. Nothing is transmitted to a server in demo mode.",
      s2Title: "Images you upload",
      s2Text: "Photos are processed in your browser for preview. In demo mode they are not uploaded anywhere. When a vision API is connected, images are sent only to that configured service — never to third parties.",
      s3Title: "No secrets in the front end",
      s3Text: "API keys and credentials are kept on the server in environment variables. The front-end code never contains private keys.",
      s4Title: "Clearing your data",
      s4Text: "You can clear locally stored data at any time using the buttons below.",
      clearLocal: "Clear all locally stored data",
      clearConfirmTitle: "Clear local data?",
      clearConfirmText: "This removes your language preference, saved crop plans and FitHomey tracker data from this browser.",
      cleared: "Local data cleared.",
      s5Title: "Contact forms",
      s5Text: "Contact form inputs are validated in your browser. In demo mode they are not sent anywhere. No unnecessary personal information is collected."
    },
    footer: {
      tagline: "Smart Agriculture, Better Food, Healthier Choices.",
      about: "AgriHealthAI is a bilingual, transparent platform that connects AI-assisted crop planning, food awareness and everyday health guidance. Demo data is always labelled.",
      explore: "Explore",
      learn: "Learn",
      legal: "Legal",
      contact: "Contact",
      resources: "Resources",
      contactPlaceholder: "Contact details to be configured",
      privacyLink: "Privacy & data",
      disclaimerLink: "Disclaimers",
      aboutLink: "About us",
      contactLink: "Contact & feedback",
      homeLink: "Home",
      agriLink: "Crop planner",
      scannerLink: "Food scanner",
      healthLink: "Health & FitHomey",
      githubLink: "Project documentation",
      privacy: "Privacy",
      rights: "Built as an educational demo project.",
      disclaimerShort: "Estimates and demo data are labelled and not guaranteed."
    },
    disclaimers: {
      agri: "Crop costs, yields and profits are indicative estimates from general reference data, not guarantees. Confirm with local experts.",
      food: "Image-based freshness is an uncertain visual assessment only and cannot detect invisible contamination.",
      health: "Health content is general education and not medical advice. Consult a qualified professional.",
      demo: "Demo data: computed from general reference ranges, not location-verified or live."
    }
  },

  hi: {
    meta: {
      title: "एग्रीहेल्थAI — स्मार्ट कृषि, बेहतर भोजन, स्वस्थ विकल्प",
      titleSuffix: "एग्रीहेल्थAI"
    },
    nav: {
      home: "होम",
      agriculture: "कृषि",
      scanner: "फ़ूड स्कैनर",
      health: "स्वास्थ्य व फिटहोमी",
      about: "हमारे बारे में",
      contact: "संपर्क",
      getStarted: "शुरू करें",
      brandSub: "स्मार्ट कृषि • भोजन • स्वास्थ्य",
      menu: "मेनू खोलें",
      close: "मेनू बंद करें",
      langLabel: "भाषा",
      english: "English",
      hindi: "हिन्दी"
    },
    common: {
      explore: "देखें",
      learnMore: "और जानें",
      error: "कुछ गड़बड़ हुई। कृपया दोबारा प्रयास करें।",
      back: "पीछे",
      next: "आगे",
      cancel: "रद्द करें",
      confirm: "पुष्टि करें",
      save: "सहेजें",
      print: "प्रिंट करें",
      download: "डाउनलोड",
      reset: "रीसेट",
      edit: "बदलें",
      close: "बंद करें",
      remove: "हटाएँ",
      replace: "बदलें",
      retry: "फिर कोशिश करें",
      loading: "लोड हो रहा है…",
      required: "आवश्यक",
      optional: "वैकल्पिक",
      submit: "जमा करें",
      sending: "भेजा जा रहा है…",
      success: "हो गया",
      demoBadge: "डेमो मोड",
      demoShort: "डेमो",
      viewAll: "सभी देखें",
      search: "खोजें",
      filter: "फ़िल्टर",
      compare: "तुलना करें",
      compareSelected: "चयनित की तुलना",
      selected: "चयनित",
      clear: "सब हटाएँ",
      all: "सभी",
      startOver: "नए सिरे से",
      apply: "लागू करें",
      estimate: "अनुमान",
      approximate: "लगभग",
      per100g: "प्रति 100 ग्राम",
      viewDetails: "विवरण देखें",
      dataSource: "डेटा स्रोत",
      poweredByDemo: "डेमो मोड में चल रहा है",
      of: "में से",
      showing: "दिखाए जा रहे",
      step: "चरण",
      new: "नया",
      note: "ध्यान दें",
      yes: "हाँ",
      no: "नहीं",
      done: "पूर्ण",
      pending: "बाकी",
      today: "आज",
      week: "सप्ताह",
      copy: "कॉपी करें",
      copied: "क्लिपबोर्ड पर कॉपी हो गया"
    },
    units: {
      days: "दिन",
      acres: "एकड़",
      hectares: "हेक्टेयर",
      quintal: "क्विंटल",
      quintals: "क्विंटल",
      tonne: "टन",
      tonnes: "टन",
      kg: "किग्रा",
      g: "ग्राम",
      mg: "मि.ग्रा.",
      kcal: "कैलोरी",
      inr: "₹",
      perAcre: "/एकड़",
      perHectare: "/हेक्टेयर"
    },
    a11y: {
      skip: "मुख्य सामग्री पर जाएँ",
      imageFallback: "चित्र उपलब्ध नहीं",
      requiredMark: "(आवश्यक)",
      opensNew: "(नए टैब में खुलता है)"
    },
    img: {
      heroFarm: "चमकीले आसमान के नीचे हरी-भरी खेत और युवा फसलें",
      agriField: "किसान फसल के खेत की देखभाल करते हुए",
      foodFresh: "मेज़ पर रखे ताज़े फल और सब्ज़ियाँ",
      healthFit: "घर पर व्यायाम करता व्यक्ति",
      workflowFarm: "खेत में उगती सब्ज़ियाँ",
      workflowFood: "ताज़े भोजन की संतुलित थाली",
      workflowHealth: "सक्रिय, स्वस्थ दैनिक दिनचर्या",
      problemSoil: "स्वस्थ मिट्टी और छोटे पौधे का निकट दृश्य",
      ctaField: "सूर्योदय पर खेती के खेत का विस्तृत दृश्य",
      scannerSample: "ताज़ी सब्ज़ियों की कटोरी",
      aboutMission: "खेत में साथ काम करते किसान",
      cardAgri: "खेत में फसल की कतारें",
      cardFood: "तरह-तरह की ताज़ी उपज",
      cardHealth: "घर पर व्यायाम के दौरान स्ट्रेचिंग"
    },
    home: {
      heroTitle: "स्मार्ट कृषि। बेहतर भोजन। स्वस्थ विकल्प।",
      heroSub: "किसानों के लिए AI आधारित मार्गदर्शन, भोजन की समझ और स्वस्थ दैनिक जीवन — सब एक ही प्लेटफ़ॉर्म पर।",
      heroHi: "स्मार्ट कृषि, बेहतर भोजन और स्वस्थ जीवन के लिए एक ही प्लेटफ़ॉर्म पर AI आधारित मार्गदर्शन।",
      ctaPrimary: "AI टूल्स देखें",
      ctaSecondary: "हमारा उद्देश्य जानें",
      heroBadge: "डेमो मोड — असली AI जोड़ने पर लाइव होगा",
      featuresEyebrow: "तीन स्तंभ, एक प्लेटफ़ॉर्म",
      featuresTitle: "कृषि, भोजन और स्वास्थ्य — आपस में जुड़े",
      featuresSub: "एग्रीहेल्थAI जोड़ता है कि हम क्या उगाते हैं, क्या खाते हैं और कैसे जीते हैं — ताकि रोज़ के फैसले बेहतर हों।",
      f1Title: "कृषि",
      f1Text: "मिट्टी, पानी, मौसम और बजट को देखते हुए निर्देशित सहायक से फसल योजना बनाएँ — साथ में ईमानदार लागत और लाभ अनुमान।",
      f1Cta: "फसल योजना बनाएँ",
      f2Title: "भोजन",
      f2Text: "खाने की फ़ोटो अपलोड करें — दिखने वाली ताज़गी की जाँच और संदर्भ डेटा से लगभग पोषण जानकारी पाएँ।",
      f2Cta: "भोजन स्कैन करें",
      f3Title: "स्वास्थ्य",
      f3Text: "सुरक्षित, गैर-चिकित्सकीय जीवनशैली मार्गदर्शन, जंक फ़ूड रिकवरी सहायक और फिटहोमी आदत ट्रैकर।",
      f3Cta: "स्वास्थ्य खोलें",
      howEyebrow: "यह कैसे काम करता है",
      howTitle: "खेत से थाली तक",
      howSub: "सरल और पारदर्शी तरीका — कोई छिपा सेंसर नहीं, कोई नकली माप नहीं।",
      howStep1: "अपनी स्थिति बताएँ",
      howStep1Text: "अपनी ज़मीन, मिट्टी, पानी, मौसम और बजट अंग्रेज़ी या हिन्दी में बताएँ।",
      howStep2: "निर्देशित सुझाव पाएँ",
      howStep2Text: "रैंक किए गए फसल विकल्प और पारदर्शी अनुमानों वाली योजना देखें।",
      howStep3: "अपना भोजन जाँचें",
      howStep3Text: "फ़ोटो से दिखने वाली ताज़गी और लगभग पोषण जानकारी देखें।",
      howStep4: "स्वस्थ आदतें बनाएँ",
      howStep4Text: "सुरक्षित जीवनशैली मार्गदर्शन अपनाएँ और फिटहोमी से आदतें ट्रैक करें।",
      problemsEyebrow: "यह क्यों ज़रूरी है",
      problemsTitle: "हम जिन असली समस्याओं पर काम कर रहे हैं",
      problemsSub: "ये भारतीय कृषि, पोषण और जन-स्वास्थ्य की व्यापक रूप से दर्ज चुनौतियाँ हैं — नकली आँकड़े नहीं।",
      prob1: "किसानों के पास अक्सर यह जानने का आसान साधन नहीं होता कि क्या उगाएँ और कितना खर्च आएगा।",
      prob2: "खाने की ताज़गी और पोषण एक नज़र में आँकना मुश्किल होता है।",
      prob3: "रोज़ की खान-पान और गतिविधि की आदतें ट्रैक करना कठिन और जल्दी छूट जाती हैं।",
      prob4: "भाषा एक बाधा है: अधिकतर डिजिटल टूल केवल अंग्रेज़ी में हैं।",
      workflowEyebrow: "जुड़ी हुई सोच",
      workflowTitle: "कृषि → भोजन → स्वास्थ्य",
      workflowSub: "बेहतर फसल का मतलब बेहतर भोजन, और बेहतर भोजन बेहतर स्वास्थ्य को सहारा देता है।",
      wfAgri: "उगाएँ",
      wfAgriText: "ज़मीन, पानी और मौसम के अनुकूल सही फसल चुनें।",
      wfFood: "पोषण",
      wfFoodText: "ताज़गी और लगभग पोषण समझें।",
      wfHealth: "स्वस्थ रहें",
      wfHealthText: "सुरक्षित, टिकाऊ रोज़ की आदतें बनाएँ।",
      ctaTitle: "शुरू करने के लिए तैयार?",
      ctaSub: "AI फसल योजना से शुरू करें, भोजन की फ़ोटो स्कैन करें, या फिटहोमी स्वास्थ्य सहायक खोलें। सब कुछ अंग्रेज़ी और हिन्दी में चलता है।",
      ctaBtn: "शुरू करें",
      statSafeTitle: "कोई नकली आँकड़े नहीं",
      statSafeText: "हम नकली उपयोगकर्ता संख्या, नकली लाभ या बनाई हुई सिफ़ारिशें नहीं दिखाते। अनुमान साफ़ रूप से अंकित हैं।",
      statLangTitle: "डिज़ाइन से द्विभाषी",
      statLangText: "एक ही साझा अनुवाद प्रणाली के साथ पूरा अंग्रेज़ी और हिन्दी इंटरफ़ेस।",
      statHonestTitle: "सीमाओं के प्रति ईमानदार",
      statHonestText: "डेमो डेटा अंकित है, और हम बताते हैं कि असली AI परिणामों के लिए क्या जोड़ना होगा।"
    },
    agri: {
      title: "AI फसल योजना सहायक",
      subtitle: "अपनी खेती की जानकारी दें और रैंक किए गए, पारदर्शी फसल सुझाव पाएँ — ईमानदार लागत व लाभ अनुमान और पूरी उगाई योजना के साथ।",
      demoNotice: "यह सहायक सामान्य संदर्भ डेटा (डेमो मोड) पर चलता है। यह स्थान-सत्यापित सलाह नहीं है। बुवाई से पहले अपने स्थानीय कृषि विस्तार अधिकारी या KVK से पुष्टि करें।",
      formTitle: "अपने खेत के बारे में बताएँ",
      formSub: "{required} अंकित फ़ील्ड भरना ज़रूरी है। बाकी जानकारी सुझाव बेहतर बनाती है।",
      state: "राज्य",
      stateHint: "आपकी ज़मीन कहाँ है?",
      statePlaceholder: "अपना राज्य चुनें",
      seasonPlaceholder: "फसल का मौसम चुनें",
      waterPlaceholder: "पानी की उपलब्धता चुनें",
      district: "ज़िला / ब्लॉक (वैकल्पिक)",
      districtPlaceholder: "जैसे नासिक, लुधियाना…",
      landArea: "ज़मीन का क्षेत्र",
      landAreaHint: "आप कितनी ज़मीन में खेती की योजना बना रहे हैं?",
      unit: "माप की इकाई",
      season: "फसल का मौसम",
      seasonHint: "आप किस मौसम के लिए योजना बना रहे हैं?",
      soil: "मिट्टी का प्रकार",
      soilHint: "पता नहीं? “मुझे नहीं पता” चुनें, हम मिट्टी को लचीला मानेंगे।",
      water: "सिंचाई व पानी की उपलब्धता",
      waterHint: "आप भरोसे के साथ कितना पानी दे सकते हैं?",
      budget: "अनुमानित कुल बजट",
      budgetHint: "वैकल्पिक। किफ़ायती फसलों को प्राथमिकता देने में मदद करता है।",
      budgetPlaceholder: "जैसे 25000",
      preference: "खेती की प्राथमिकता",
      preferenceHint: "इस मौसम में आपके लिए सबसे ज़रूरी क्या है? (एक या अधिक चुनें)",
      submit: "फसल सुझाव पाएँ",
      submitHint: "हम उपयुक्त फसलों को रैंक करेंगे और हर एक को समझाएँगे।",
      resetForm: "फ़ॉर्म साफ़ करें",
      resultsTitle: "सुझाई गई फसलें",
      resultsSub: "आपके मौसम, मिट्टी, पानी और प्राथमिकता से मेल के अनुसार रैंक। हमेशा स्थानीय रूप से जाँचें।",
      resultsCount: "{count} फसलें आपकी जानकारी से मेल खाती हैं",
      noResultsTitle: "कोई निकट मेल नहीं मिला",
      noResultsText: "मौसम, पानी की उपलब्धता या मिट्टी का प्रकार बदलकर देखें।",
      rank: "मेल रैंक",
      score: "उपयुक्तता",
      matchScore: "{score}% मेल",
      suitability: "यह आपके लिए क्यों उपयुक्त है",
      duration: "उगाई की अवधि",
      inputCost: "अनु. लागत",
      yieldRange: "अपेक्षित उपज सीमा",
      grossRevenue: "अनु. कुल आय",
      totalCost: "अनु. कुल उगाई लागत",
      netProfit: "अनु. शुद्ध लाभ सीमा",
      waterNeed: "पानी की आवश्यकता",
      labour: "श्रम व मेहनत",
      risks: "मुख्य जोखिम",
      climate: "जलवायु",
      soilRisk: "मिट्टी",
      marketRisk: "बाज़ार",
      selectCrop: "चुनें व योजना बनाएँ",
      addCompare: "तुलना में जोड़ें",
      removeCompare: "हटाएँ",
      showDetails: "लागत व लाभ विवरण देखें",
      hideDetails: "विवरण छिपाएँ",
      assumptionsTitle: "ये संख्याएँ कैसे बनती हैं",
      assumptionsText: "लागत, उपज और भाव सामान्य संदर्भ सीमाओं से लेकर आपकी ज़मीन के अनुसार लगाए जाते हैं। शुद्ध लाभ = अनु. कुल आय − अनु. कुल उगाई लागत। असली परिणाम किस्म, मौसम, बाज़ार भाव और प्रबंधन पर निर्भर करते हैं और कम या अधिक हो सकते हैं। ये संकेतात्मक अनुमान हैं, गारंटी नहीं।",
      comparisonTitle: "फसल तुलना",
      comparisonSub: "{count} फसलों की साथ-साथ तुलना। मान आपकी चुनी ज़मीन के लिए अनुमानित हैं।",
      metric: "मापदंड",
      removeAllCompare: "तुलना साफ़ करें",
      planTitle: "उगाई योजना",
      planFor: "के लिए उगाई योजना",
      planIntro: "आपकी चुनी फसल के लिए संरचित मार्गदर्शन। स्थानीय कृषि विशेषज्ञ की सलाह का पालन करें और अपने खेत की स्थिति के अनुसार ढालें।",
      sectionLandPrep: "ज़मीन व मिट्टी की तैयारी",
      sectionSeed: "बीज किस्म व चयन",
      sectionSowing: "बुवाई का समय व तरीका",
      sectionSpacing: "दूरी व बुवाई की गहराई",
      sectionIrrigation: "सिंचाई कार्यक्रम",
      sectionFertiliser: "खाद व पोषक तत्व प्रबंधन",
      sectionWeed: "खरपतवार प्रबंधन",
      sectionPest: "कीट व रोग निगरानी",
      sectionStages: "फसल वृद्धि अवस्थाएँ",
      sectionHarvest: "कटाई के संकेत",
      sectionStorage: "कटाई-पश्चात भंडारण व देखभाल",
      calendarTitle: "व्यावहारिक कार्य कैलेंडर",
      calendarSub: "फसल अवस्था के अनुसार कार्य। दिन बुवाई/रोपाई से गिने जाते हैं।",
      taskWhat: "क्या करें",
      taskWhen: "कब",
      taskHow: "कैसे",
      taskWhy: "क्यों ज़रूरी है",
      taskAvoid: "किससे बचें",
      printPlan: "योजना प्रिंट करें",
      downloadPlan: "योजना डाउनलोड (.txt)",
      savePlan: "योजना स्थानीय रूप से सहेजें",
      savedPlan: "योजना इस ब्राउज़र में सहेजी गई",
      startOver: "नए सिरे से",
      editInputs: "जानकारी बदलें",
      selectedCrop: "चुनी गई फसल",
      stage: "अवस्था",
      dayRange: "दिन {from}–{to}",
      expertNote: "कुछ अवस्थाओं में देखकर स्थानीय निर्णय ज़रूरी है। मौसम-आधारित और कीट परामर्श के लिए अपने स्थानीय KVK/विस्तार अधिकारी से सलाह लें।",
      validation: {
        state: "कृपया अपना राज्य चुनें।",
        land: "कृपया 0 से अधिक ज़मीन का क्षेत्र दर्ज करें।",
        unit: "कृपया माप की इकाई चुनें।",
        season: "कृपया फसल का मौसम चुनें।",
        water: "कृपया पानी की उपलब्धता चुनें।",
        budget: "बजट एक धनात्मक संख्या होनी चाहिए या खाली छोड़ें।",
        pref: "कृपया कम से कम एक प्राथमिकता चुनें।"
      }
    },
    disease: {
      eyebrow: "फसल स्वास्थ्य",
      title: "फसल रोग जाँच",
      subtitle: "फसल की फ़ोटो अपलोड करें, फसल चुनें और आम संभावित रोगों के साथ रिकवरी के चरण देखें। केवल फ़ोटो से रोग की पुष्टि नहीं होती — नीचे लक्षण चुनकर संभावना कम करें।",
      demoNotice: "यह संदर्भ-आधारित स्क्रीनिंग टूल (डेमो मोड) है, प्रयोगशाला निदान नहीं। किसी भी उपचार से पहले अपने स्थानीय KVK / कृषि विस्तार अधिकारी से पुष्टि करें।",
      cropLabel: "फ़ोटो में कौन सी फसल है?",
      cropHint: "फसल चुनने से वही रोग दिखेंगे जो उस पर होते हैं।",
      cropPlaceholder: "फसल चुनें",
      choosePhoto: "फसल की फ़ोटो चुनें",
      dropHere: "फसल की फ़ोटो यहाँ छोड़ें",
      uploadHint: "प्रभावित पत्ती, तना या फल की दिन की रोशनी में साफ़, नज़दीकी फ़ोटो सबसे अच्छी है। JPG, PNG या WebP, अधिकतम 6 MB।",
      analyse: "फसल फ़ोटो जाँचें",
      analysing: "फ़ोटो जाँची जा रही है…",
      analysingHint: "छवि मापी जा रही है और फसल-विशिष्ट चेकलिस्ट तैयार हो रही है।",
      replace: "फ़ोटो बदलें",
      remove: "फ़ोटो हटाएँ",
      resultTitle: "फसल स्वास्थ्य स्क्रीनिंग",
      visualTitle: "दृश्य स्क्रीनिंग",
      demoBadge: "डेमो स्क्रीनिंग",
      photoQuality: "फ़ोटो की गुणवत्ता",
      qualityGood: "अच्छी — स्क्रीनिंग के लिए पर्याप्त साफ़",
      qualityLowLight: "कम रोशनी — बेहतर जाँच के लिए दिन में दोबारा लें",
      qualityWashed: "बहुत चमकीली या फीकी — एक समान दिन की रोशनी में दोबारा लें",
      qualityBlurry: "कम विवरण — फ़ोन स्थिर रखें और पास आएँ",
      qualityUnknown: "छवि साफ़ नहीं पढ़ी जा सकी",
      measured: "आपकी फ़ोटो में हमने क्या मापा",
      brightness: "चमक",
      contrast: "कंट्रास्ट",
      greenArea: "हरा क्षेत्र",
      warmArea: "पीला/भूरा क्षेत्र",
      darkArea: "गहरा क्षेत्र",
      possibleTitle: "{crop} के लिए संभावित समस्याएँ",
      possibleIntro: "यह इस फसल के आम रोग व विकार हैं। जो लक्षण वास्तव में दिखें उन्हें चुनकर संभावना कम करें।",
      symptomTitle: "लक्षण जाँच",
      symptomIntro: "पौधे पर जो भी संकेत दिखे उन्हें चुनें। संदेह हो तो खाली छोड़ें।",
      rankTitle: "आपके लक्षणों के आधार पर सर्वाधिक संभावना",
      rankNone: "अभी कोई लक्षण नहीं चुना — आम संभावनाएँ दिखाई जा रही हैं।",
      match: "{score}% लक्षण मेल",
      common: "आम संभावना",
      signs: "सामान्य संकेत",
      recovery: "रिकवरी के चरण",
      prevention: "अगली बार बचाव",
      consult: "कोई भी रसायन खरीदने या लगाने से पहले अपने KVK / विस्तार अधिकारी से पुष्टि करें। यह टूल कभी मात्रा नहीं बताता।",
      resetSymptoms: "लक्षण चयन साफ़ करें",
      noPhoto: "कृपया पहले फसल की फ़ोटो चुनें।",
      noCrop: "कृपया फ़ोटो में जो फसल है उसे चुनें।",
      errorType: "असमर्थित फ़ाइल प्रकार। कृपया JPG, PNG या WebP उपयोग करें।",
      errorSize: "फ़ाइल बहुत बड़ी है। अधिकतम 6 MB।",
      errorAnalysis: "फ़ोटो जाँची नहीं जा सकी। कृपया दोबारा प्रयास करें।",
      kindFungal: "फफूंद",
      kindBacterial: "जीवाणु",
      kindViral: "वायरस",
      kindInsect: "कीट",
      kindDisorder: "विकार / तनाव",
      disclaimer: "फ़ोटो और लक्षण चेकलिस्ट से रोग की पुष्टि नहीं होती। निश्चितता के लिए प्रयोगशाला या विशेषज्ञ निदान ज़रूरी है।"
    },
    charts: {
      profitTitle: "फसल के अनुसार अनुमानित शुद्ध लाभ सीमा",
      profitSub: "हर पट्टी आपकी ज़मीन के लिए कम से अधिक अनुमान दिखाती है। लंबी पट्टी लाभ की गारंटी नहीं है।",
      rangeLow: "कम अनुमान",
      rangeHigh: "अधिक अनुमान",
      rangeMid: "मध्य बिंदु",
      costTitle: "अनुमानित लागत विवरण",
      costSub: "अनुमानित कुल खेती लागत में हिस्सा (सीमा का मध्य बिंदु)।",
      costSeed: "बीज",
      costFertiliser: "खाद",
      costLabour: "मज़दूरी",
      costIrrigation: "सिंचाई",
      costTotal: "कुल लागत",
      officialEyebrow: "आधिकारिक डेटा",
      officialTitle: "भारत की कृषि — एक नज़र में",
      officialSub: "कृषि एवं किसान कल्याण मंत्रालय द्वारा प्रकाशित राष्ट्रीय खाद्यान्न उत्पादन। केवल संदर्भ हेतु — यह आपके खेत का पूर्वानुमान नहीं है।",
      kpiFoodgrain: "खाद्यान्न उत्पादन (2024-25)",
      kpiGrowth: "2023-24 की तुलना में वृद्धि",
      kpiRice: "चावल (2023-24)",
      kpiWheat: "गेहूँ (2023-24)",
      kpiOilseeds: "तिलहन (2023-24)",
      trendTitle: "खाद्यान्न उत्पादन का रुझान",
      trendSub: "मिलियन टन। बिंदु वास्तविक वर्ष के अनुसार दूरी पर हैं, समान रूप से नहीं।",
      mixTitle: "समूह के अनुसार खाद्यान्न उत्पादन (2023-24)",
      mixSub: "लाख टन। 1 लाख टन = 1,00,000 टन।",
      sources: "स्रोत",
      sourceNote: "आधिकारिक आँकड़े प्रकाशित रूप में दिए गए हैं। मंत्रालय इन्हें संशोधित कर सकता है।",
      updated: "अंतिम आधिकारिक रिलीज़",
      millionTonnes: "मिलियन टन",
      lakhTonnes: "लाख टन",
      dataDisclaimer: "आधिकारिक आँकड़े पूरे देश का वर्णन करते हैं, आपके खेत का नहीं। इन्हें केवल संदर्भ के लिए उपयोग करें।",
      viewData: "आधिकारिक डेटा देखें",
      chartAriaProfit: "फसल के अनुसार अनुमानित शुद्ध लाभ सीमा का चार्ट",
      chartAriaCost: "अनुमानित खेती लागत विवरण का डोनट चार्ट",
      chartAriaTrend: "समय के साथ भारत के खाद्यान्न उत्पादन का लाइन चार्ट",
      chartAriaMix: "समूह के अनुसार खाद्यान्न उत्पादन का बार चार्ट"
    },
    scanner: {
      title: "AI फ़ूड स्कैनर व पोषण विश्लेषक",
      subtitle: "खाने की फ़ोटो अपलोड करें — दिखने वाली ताज़गी की जाँच करें, फिर संदर्भ डेटा से लगभग पोषण जानकारी देखें।",
      demoNotice: "छवि विश्लेषण डेमो मोड में चलता है (कोई विज़न API नहीं जुड़ा)। परिणाम साफ़ अंकित हैं और यह खाद्य-सुरक्षा परीक्षण नहीं है।",
      safetyTitle: "महत्वपूर्ण खाद्य-सुरक्षा चेतावनी",
      safetyText: "एक फ़ोटो अदृश्य संदूषण, विषाक्त पदार्थ, रोगाणु, अंदर से खराब भोजन या सभी खाद्य-सुरक्षा खतरों को भरोसे से नहीं पकड़ सकती। खाद्य-सुरक्षा पर संदेह हो तो फेंक दें। यह टूल केवल शैक्षिक है।",
      uploadTitle: "खाने की फ़ोटो अपलोड करें",
      uploadHint: "ड्रैग और ड्रॉप करें, या चुनने के लिए क्लिक करें। JPG, PNG या WebP, अधिकतम 6 MB।",
      chooseFile: "फ़ोटो चुनें",
      dropHere: "अपनी फ़ोटो यहाँ छोड़ें",
      orText: "या",
      preview: "पूर्वावलोकन",
      analyse: "भोजन विश्लेषण करें",
      analysing: "छवि का विश्लेषण हो रहा है…",
      analysingHint: "भोजन पहचाना जा रहा है और दिखने वाली ताज़गी के संकेत जाँचे जा रहे हैं।",
      remove: "फ़ोटो हटाएँ",
      replace: "फ़ोटो बदलें",
      resultTitle: "भोजन विश्लेषण परिणाम",
      likelyFood: "संभावित भोजन",
      freshness: "दिखने वाली ताज़गी का आकलन",
      spoilage: "खराबी के संभावित संकेत",
      confidence: "विश्वास स्तर",
      lowConfidence: "कम विश्वास",
      mediumConfidence: "मध्यम विश्वास",
      highConfidence: "अधिक विश्वास",
      storageRec: "भंडारण सिफ़ारिश",
      preservation: "संरक्षण जानकारी",
      statusFresh: "ताज़ा दिखता है",
      statusSpoil: "खराबी संभव",
      statusUnknown: "निर्धारित नहीं हो सका",
      statusClear: "सड़न के स्पष्ट दृश्य संकेत नहीं",
      statusCheck: "ध्यान से जाँचें — दृश्य चिंता संभव",
      visualStatus: "दृश्य स्थिति (अनुमान)",
      visualStatusNote: "केवल मापी जा सकने वाली फ़ोटो विशेषताओं पर आधारित: रोशनी, रंग और कंट्रास्ट। यह खाद्य-सुरक्षा परीक्षण नहीं है।",
      visualEstimateBadge: "दृश्य अनुमान",
      photoQuality: "फ़ोटो की गुणवत्ता",
      qualityGood: "अच्छी",
      qualityLow: "कम रोशनी या कम विवरण",
      measured: "आपकी फ़ोटो में हमने क्या मापा",
      brightness: "चमक",
      contrast: "कंट्रास्ट",
      greenArea: "हरा क्षेत्र",
      brownArea: "भूरा / गहरा क्षेत्र",
      yellowArea: "पीला क्षेत्र",
      howToConfirm: "खाने से पहले कैसे पुष्टि करें",
      check1: "फफूंद देखें — सफेद, हरे, काले या नीले रोमिल धब्बे।",
      check2: "खट्टी, बदबूदार या अलग गंध सूँघें।",
      check3: "चिपचिपाहट या मुलायम, गीले धब्बे महसूस करें।",
      check4: "पैक्ड भोजन पर एक्सपायरी तिथि देखें।",
      check5: "कुछ भी संदिग्ध हो तो फेंक दें — जाँचने के लिए चखें नहीं।",
      retakePhoto: "दिन की रोशनी में दोबारा लें",
      estimateNote: "यह स्थिति फ़ोटो के नियम-आधारित माप से है, किसी प्रशिक्षित विज़न मॉडल से नहीं। यह अदृश्य संदूषण, विष या रोगाणु नहीं पकड़ सकती।",
      confirmTitle: "भोजन की पुष्टि करें",
      confirmText: "हम इसे भरोसे से पहचान नहीं पाए। कृपया भोजन की पुष्टि करें या चुनें ताकि हम सही संदर्भ पोषण दिखा सकें।",
      confirmSelect: "भोजन चुनें",
      confirmPlaceholder: "भोजन खोजें…",
      useThis: "यह भोजन चुनें",
      nutritionTitle: "पोषण तथ्य",
      nutritionSub: "सार्वजनिक खाद्य-संरचना डेटा से लगभग संदर्भ मान।",
      perServing: "प्रति सर्विंग",
      servingSize: "सर्विंग आकार",
      servingGrams: "सर्विंग आकार (ग्राम)",
      servingNote: "दिखाए गए मान संदर्भ हेतु हैं और किस्म, पकने व बनाने के तरीके से बदल सकते हैं।",
      energy: "ऊर्जा",
      protein: "प्रोटीन",
      carbs: "कुल कार्बोहाइड्रेट",
      fat: "कुल वसा",
      satFat: "संतृप्त वसा",
      fibre: "आहार फाइबर",
      sugar: "शर्करा",
      sodium: "सोडियम",
      potassium: "पोटैशियम",
      calcium: "कैल्शियम",
      iron: "लोहा",
      vitC: "विटामिन C",
      vitA: "विटामिन A",
      water: "जल मात्रा",
      benefits: "सामान्य पोषण लाभ",
      description: "भोजन विवरण",
      storageGuide: "भंडारण मार्गदर्शन",
      preservationMethods: "उपयुक्त संरक्षण तरीके",
      source: "स्रोत",
      sourceDemo: "संदर्भ खाद्य-संरचना डेटासेट (लगभग, डेमो)",
      errorType: "असमर्थित फ़ाइल प्रकार। कृपया JPG, PNG या WebP उपयोग करें।",
      errorSize: "फ़ाइल बहुत बड़ी है। अधिकतम 6 MB।",
      errorAnalysis: "विश्लेषण विफल। कृपया फिर कोशिश करें या दूसरी फ़ोटो चुनें।",
      pickFirst: "कृपया पहले खाने की फ़ोटो चुनें।",
      nutritionUnavailable: "इस भोजन के लिए पोषण डेटा अभी उपलब्ध नहीं है।",
      chartTitle: "मैक्रोन्यूट्रिएंट विभाजन",
      chartEnergy: "मैक्रोन्यूट्रिएंट के अनुसार ऊर्जा हिस्सा",
      pickFoodPrompt: "पोषण उदाहरण देखने के लिए भोजन चुनें",
      pickFoodHint: "फ़ोटो की ज़रूरत नहीं — नमूना भोजन के साथ पोषण विश्लेषक आज़माएँ।"
    },
    health: {
      title: "स्वास्थ्य व फिटहोमी",
      subtitle: "सुरक्षित, गैर-चिकित्सकीय जीवनशैली मार्गदर्शन, जंक फ़ूड रिकवरी सहायक और फिटहोमी दैनिक आदत ट्रैकर।",
      disclaimerTitle: "केवल सामान्य स्वस्थता",
      disclaimerText: "यह पृष्ठ केवल सामान्य शैक्षिक स्वस्थता जानकारी देता है। यह किसी रोग का निदान, उपचार या इलाज नहीं करता और किसी योग्य स्वास्थ्य पेशेवर की सलाह का विकल्प नहीं है। व्यक्तिगत चिकित्सकीय या आहार सलाह के लिए डॉक्टर या आहार विशेषज्ञ से मिलें।",
      tabs: {
        lifestyle: "स्वस्थ जीवनशैली",
        recovery: "जंक फ़ूड व रिकवरी",
        tracker: "फिटहोमी ट्रैकर"
      },
      lifestyleTitle: "स्वस्थ दिनचर्या बनाएँ",
      lifestyleSub: "एक सामान्य लक्ष्य चुनें और सुरक्षित, व्यावहारिक मार्गदर्शन देखें। यहाँ कुछ भी चिकित्सकीय सलाह नहीं है।",
      chooseGoal: "अपना स्वस्थता लक्ष्य चुनें",
      goalOverall: "समग्र स्वास्थ्य सुधारें",
      goalEating: "स्वस्थ खान-पान की आदतें बनाएँ",
      goalActivity: "दैनिक गतिविधि बढ़ाएँ",
      goalSleep: "नींद की दिनचर्या सुधारें",
      guidanceTitle: "आपके लक्ष्य के लिए मार्गदर्शन",
      coreHabits: "रोज़ की बुनियाद",
      core1Title: "संतुलित भोजन",
      core1Text: "थाली का अधिकतर हिस्सा सब्ज़ियों, फल, साबुत अनाज और दालों से भरें। कुछ प्रोटीन व अच्छी वसा शामिल करें। पूर्ण होना ज़रूरी नहीं — एक-दो भोजन से ज़्यादा निरंतरता मायने रखती है।",
      core2Title: "दैनिक गतिविधि",
      core2Text: "नियमित और पसंदीदा गतिविधि का लक्ष्य रखें। छोटी सैर, घर का काम या स्ट्रेचिंग भी गिनती है। धीरे-धीरे बढ़ाएँ और थकान पर आराम करें।",
      core3Title: "उम्र के अनुसार गतिविधि",
      core3Text: "बच्चों को खेल-कूद चाहिए; वयस्कों को नियमित मध्यम गतिविधि; बड़ों को संतुलन, शक्ति और सुरक्षित गति पर ध्यान देना चाहिए। अपनी उम्र व क्षमता के अनुसार चुनें।",
      core4Title: "हाइड्रेशन",
      core4Text: "दिनभर पानी पिएँ, गर्मी या गतिविधि के बाद अधिक। पानी आमतौर पर सबसे अच्छा विकल्प है।",
      core5Title: "नींद की आदतें",
      core5Text: "सोने-जागने का समय एक जैसा रखें, सोने से पहले स्क्रीन दूर रखें, कमरा अंधेरा व शांत रखें। अधिकतर वयस्कों के लिए 7–8 घंटे अच्छे हैं।",
      core6Title: "निरंतरता व दिनचर्या",
      core6Text: "छोटी, दोहराई जाने वाली आदतें तेज़-शॉर्ट प्रयासों से बेहतर हैं। एक बार में एक-दो बदलाव चुनें और कुछ सप्ताह दें।",
      recoveryTitle: "कुछ भारी या पैक्ड खा लिया?",
      recoverySub: "भोजन का नाम डालें और उसका लगभग पोषण, लगातार सेवन से संभावित चिंताएँ और अगले भोजन के लिए संतुलित सुझाव पाएँ। यह संतुलन की ओर लौटने का मार्गदर्शन है — डिटॉक्स नहीं, और सज़ा नहीं।",
      enterFood: "आपने जो खाया",
      enterFoodPlaceholder: "जैसे चिप्स, इंस्टेंट नूडल्स, पिज़्ज़ा, कोला…",
      findFood: "पोषण खोजें",
      searching: "संदर्भ मान खोजे जा रहे हैं…",
      notFound: "हम वह भोजन नहीं ढूँढ सके। कोई आम पैक्ड या फास्ट फ़ूड आज़माएँ, या नीचे से चुनें।",
      suggestionsTitle: "इनमें से आज़माएँ",
      nutritionFor: "लगभग पोषण",
      concernsTitle: "लगातार या अधिक सेवन से संभावित चिंताएँ",
      nextMealsTitle: "अगले भोजन संतुलित करें",
      hydrationTitle: "हाइड्रेशन",
      movementTitle: "दैनिक गतिविधि",
      longTermTitle: "टिकाऊ दीर्घकालिक आदतें",
      recoveryNote: "यहाँ “रिकवरी” का मतलब है संतुलित रोज़ की आदतों की ओर लौटना। इसका मतलब डिटॉक्स, उपवास या भोजन “जलाना” नहीं है। एक भोजन आपके स्वास्थ्य को तय नहीं करता।",
      safeNote: "हम कभी अत्यधिक व्यायाम, लंबा उपवास, कठोर डाइट या असुरक्षित क्षतिपूर्ति व्यवहार नहीं सुझाते। स्वास्थ्य समस्या हो तो योग्य पेशेवर से बात करें।",
      trackerTitle: "फिटहोमी दैनिक ट्रैकर",
      trackerSub: "आज की स्वस्थ आदतें टिक करें। प्रगति केवल इस ब्राउज़र में सहेजी जाती है।",
      trackerPrivacy: "आपका ट्रैकर डेटा केवल इस ब्राउज़र (localStorage) में रहता है और डिवाइस के बीच सिंक या सर्वर पर नहीं भेजा जाता। कभी भी साफ़ कर सकते हैं।",
      todayProgress: "आज की प्रगति",
      weeklyProgress: "इस सप्ताह",
      mealsReminders: "भोजन व पानी की याद",
      reminderBreakfast: "संतुलित नाश्ता करें",
      reminderWater: "नियमित पानी पिएँ",
      reminderMeals: "भोजन न छोड़ें",
      sleepRoutine: "नींद दिनचर्या ट्रैकिंग",
      sleepBedtime: "लक्ष्य सोने का समय",
      sleepHours: "पिछली रात की नींद (घंटे)",
      markDay: "आज पूर्ण करें",
      clearTracker: "ट्रैकर डेटा साफ़ करें",
      clearConfirmTitle: "ट्रैकर डेटा साफ़ करें?",
      clearConfirmText: "यह इस ब्राउज़र से आपका सहेजा ट्रैकर डेटा हमेशा के लिए हटा देगा। इसे वापस नहीं लाया जा सकता।",
      resetDay: "आज रीसेट करें",
      habitsDone: "{total} में से {done} आदतें पूरी",
      streak: "वर्तमान सिलसिला",
      dayStreak: "{n} दिन का सिलसिला",
      noStreak: "आज अपना सिलसिला शुरू करें",
      savedLocal: "इस ब्राउज़र में सहेजा गया",
      day: "दिन",
      tasksRemaining: "{n} बाकी",
      allDone: "सभी आदतें पूरी — शाबाश!"
    },
    about: {
      title: "एग्रीहेल्थAI के बारे में",
      subtitle: "एक द्विभाषी, पारदर्शी प्लेटफ़ॉर्म जो कृषि, भोजन की समझ और रोज़ के स्वास्थ्य को जोड़ता है — असली इंटरैक्टिविटी और ईमानदार अंकन के साथ।",
      missionTitle: "हमारा उद्देश्य",
      missionText: "स्मार्ट कृषि, बेहतर भोजन, स्वस्थ विकल्प। हम चाहते हैं कि किसानों, परिवारों और युवाओं के पास अपनी भाषा में स्पष्ट, समझने योग्य साधन हों — क्या उगाएँ, क्या खाएँ और कैसे जिएँ।",
      visionTitle: "यह अलग क्यों है",
      v1Title: "पारदर्शी स्वभाव",
      v1Text: "हम डेमो डेटा अंकित करते हैं, अनुमान और तथ्य अलग रखते हैं, और कभी नकली आँकड़े, लाभ या सिफ़ारिशें नहीं बनाते।",
      v2Title: "सच में द्विभाषी",
      v2Text: "हर लेबल, संदेश और परिणाम एक साझा अनुवाद प्रणाली से अंग्रेज़ी और हिन्दी दोनों में चलता है।",
      v3Title: "ज़िम्मेदार AI",
      v3Text: "हम AI का उपयोग वहाँ करते हैं जहाँ वह मदद करता है और उसकी सीमाएँ स्पष्ट रखते हैं — ख़ासकर खाद्य-सुरक्षा और स्वास्थ्य में।",
      v4Title: "सुलभ व रिस्पॉन्सिव",
      v4Text: "कीबोर्ड-अनुकूल नेविगेशन, अच्छा कंट्रास्ट, स्पष्ट लेबल और फ़ोन, टैबलेट व डेस्कटॉप पर चलने वाला लेआउट।",
      techTitle: "तकनीक",
      techText: "फ़्रंट एंड पर साफ़ HTML5, CSS3 और वनीला JavaScript, और AI व डेटाबेस जोड़ने के लिए एक छोटा वैकल्पिक Node/Express बैकएंड। सर्विस मॉड्यूल AI, पोषण, स्टोरेज और अनुवाद तर्क को अलग रखते हैं।",
      modulesTitle: "सर्विस आर्किटेक्चर",
      modulesText: "हर क्षमता एक अलग सर्विस मॉड्यूल है ताकि आप इंटरफ़ेस बदले बिना असली प्रोवाइडर जोड़ सकें:",
      statusTitle: "वर्तमान स्थिति",
      statusDemo: "डेमो मोड: फसल, भोजन और पोषण सुविधाएँ ऐप में गणना किए गए साफ़ अंकित संदर्भ डेटा पर चलती हैं। देखने के लिए कोई बाहरी AI कुंजी ज़रूरी नहीं।",
      statusReal: "असली AI के लिए: बैकएंड (README देखें) में विज़न, पोषण और कृषि-डेटा प्रोवाइडर कॉन्फ़िगर करें।",
      disclaimerTitle: "ईमानदार चेतावनियाँ",
      disclaimerText: "फसल लाभ आँकड़े अनुमान हैं, गारंटी नहीं। फ़ोटो से ताज़गी केवल अनिश्चित दृश्य आकलन है। स्वास्थ्य सामग्री सामान्य शिक्षा है, चिकित्सकीय सलाह नहीं।"
    },
    contact: {
      title: "संपर्क व प्रतिक्रिया",
      subtitle: "प्रतिक्रिया भेजें, समस्या बताएँ या प्रश्न पूछें। डेमो मोड में संदेश कहीं नहीं भेजे जाते — प्राप्त करने के लिए बैकएंड जोड़ें।",
      formTitle: "संदेश भेजें",
      name: "आपका नाम",
      namePlaceholder: "पूरा नाम",
      email: "ईमेल पता",
      emailPlaceholder: "you@example.com",
      topic: "विषय",
      topicGeneral: "सामान्य प्रश्न",
      topicFeedback: "प्रतिक्रिया / सुझाव",
      topicBug: "समस्या बताएँ",
      topicData: "डेटा / सटीकता संबंधी चिंता",
      message: "संदेश",
      messagePlaceholder: "बताएँ हम कैसे मदद कर सकते हैं…",
      send: "संदेश भेजें",
      privacyNote: "हम आपकी दी गई जानकारी केवल जवाब देने के लिए उपयोग करते हैं। हम आपका डेटा बेचते या साझा नहीं करते। डेमो मोड में कुछ नहीं भेजा जाता — फ़ॉर्म स्थानीय रूप से सत्यापन व पुष्टि करता है।",
      successMsg: "धन्यवाद! आपका संदेश सत्यापन पास कर गया। वास्तव में भेजने के लिए बैकएंड जोड़ें।",
      validation: {
        name: "कृपया अपना नाम दर्ज करें।",
        email: "कृपया मान्य ईमेल पता दर्ज करें।",
        topic: "कृपया एक विषय चुनें।",
        message: "कृपया छोटा संदेश लिखें (कम से कम 10 अक्षर)।"
      },
      infoTitle: "हमसे संपर्क के तरीके",
      infoText: "यह प्रोजेक्ट आधिकारिक संपर्क विवरण कॉन्फ़िगर होने तक असली फ़ोन नंबर या पते प्रकाशित नहीं करता। बाद में एक जगह जोड़ें।",
      infoPlaceholder: "संपर्क विवरण कॉन्फ़िगर होना है",
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faq1Q: "क्या यह असली AI है?",
      faq1A: "इंटरफ़ेस पूरा और तैयार है। डेमो मोड में परिणाम अंकित संदर्भ डेटा से आते हैं। असली AI के लिए README में बताए बैकएंड सर्विस जोड़ें।",
      faq2Q: "क्या यह मेरे स्वास्थ्य का निदान कर सकता है?",
      faq2A: "नहीं। स्वास्थ्य सामग्री केवल सामान्य शिक्षा है और कभी पेशेवर चिकित्सकीय सलाह का विकल्प नहीं।",
      faq3Q: "क्या फ़ोटो से पता चल सकता है कि भोजन सुरक्षित है?",
      faq3A: "नहीं। फ़ोटो केवल दिखने वाले संकेत दिखाती है। यह अदृश्य संदूषण नहीं पकड़ सकती। संदेह हो तो भोजन फेंक दें।"
    },
    privacy: {
      title: "गोपनीयता व डेटा हैंडलिंग",
      subtitle: "एग्रीहेल्थAI आपकी जानकारी के साथ कैसे व्यवहार करता है।",
      s1Title: "हम क्या सहेजते हैं",
      s1Text: "भाषा पसंद और फिटहोमी ट्रैकर प्रगति केवल आपके ब्राउज़र में localStorage से सहेजी जाती है। डेमो मोड में कुछ भी सर्वर पर नहीं भेजा जाता।",
      s2Title: "आपकी अपलोड की गई तस्वीरें",
      s2Text: "पूर्वावलोकन के लिए फ़ोटो आपके ब्राउज़र में प्रोसेस होती हैं। डेमो मोड में वे कहीं अपलोड नहीं होतीं। जब विज़न API जुड़ेगा, तस्वीरें केवल उसी कॉन्फ़िगर सेवा को भेजी जाएँगी — किसी तीसरे पक्ष को नहीं।",
      s3Title: "फ़्रंट एंड में कोई कुंजी नहीं",
      s3Text: "API कुंजियाँ व क्रेडेंशियल सर्वर पर environment variables में रहते हैं। फ़्रंट-एंड कोड में कभी निजी कुंजियाँ नहीं होतीं।",
      s4Title: "अपना डेटा साफ़ करना",
      s4Text: "नीचे दिए बटन से आप कभी भी स्थानीय रूप से सहेजा डेटा साफ़ कर सकते हैं।",
      clearLocal: "सभी स्थानीय डेटा साफ़ करें",
      clearConfirmTitle: "स्थानीय डेटा साफ़ करें?",
      clearConfirmText: "यह इस ब्राउज़र से आपकी भाषा पसंद, सहेजी फसल योजनाएँ और फिटहोमी ट्रैकर डेटा हटा देगा।",
      cleared: "स्थानीय डेटा साफ़ हो गया।",
      s5Title: "संपर्क फ़ॉर्म",
      s5Text: "संपर्क फ़ॉर्म इनपुट आपके ब्राउज़र में सत्यापित होते हैं। डेमो मोड में वे कहीं नहीं भेजे जाते। अनावश्यक व्यक्तिगत जानकारी एकत्र नहीं की जाती।"
    },
    footer: {
      tagline: "स्मार्ट कृषि, बेहतर भोजन, स्वस्थ विकल्प।",
      about: "एग्रीहेल्थAI एक द्विभाषी, पारदर्शी प्लेटफ़ॉर्म है जो AI सहायता प्राप्त फसल योजना, भोजन की समझ और रोज़ के स्वास्थ्य मार्गदर्शन को जोड़ता है। डेमो डेटा हमेशा अंकित रहता है।",
      explore: "देखें",
      learn: "जानें",
      legal: "कानूनी",
      contact: "संपर्क",
      resources: "संसाधन",
      contactPlaceholder: "संपर्क विवरण कॉन्फ़िगर होना है",
      privacyLink: "गोपनीयता व डेटा",
      disclaimerLink: "चेतावनियाँ",
      aboutLink: "हमारे बारे में",
      contactLink: "संपर्क व प्रतिक्रिया",
      homeLink: "होम",
      agriLink: "फसल योजना",
      scannerLink: "फ़ूड स्कैनर",
      healthLink: "स्वास्थ्य व फिटहोमी",
      githubLink: "प्रोजेक्ट दस्तावेज़",
      privacy: "गोपनीयता",
      rights: "एक शैक्षिक डेमो प्रोजेक्ट के रूप में बनाया गया।",
      disclaimerShort: "अनुमान व डेमो डेटा अंकित हैं और गारंटी नहीं।"
    },
    disclaimers: {
      agri: "फसल लागत, उपज और लाभ सामान्य संदर्भ डेटा से संकेतात्मक अनुमान हैं, गारंटी नहीं। स्थानीय विशेषज्ञों से पुष्टि करें।",
      food: "फ़ोटो आधारित ताज़गी केवल अनिश्चित दृश्य आकलन है और अदृश्य संदूषण नहीं पकड़ सकती।",
      health: "स्वास्थ्य सामग्री सामान्य शिक्षा है, चिकित्सकीय सलाह नहीं। योग्य पेशेवर से परामर्श करें।",
      demo: "डेमो डेटा: सामान्य संदर्भ सीमाओं से गणना, स्थान-सत्यापित या लाइव नहीं।"
    }
  }
};

/* ==================== js/i18n/index.js ==================== */
/* ==========================================================================
   AgriHealthAI — i18n engine
   Central translation system. All UI text flows through here.
   Public API: window.i18n.{ t, apply, setLang, getLang, on }
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "ah_lang";
  var SUPPORTED = ["en", "hi"];
  var listeners = [];

  function readStored() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.indexOf(v) !== -1 ? v : null;
    } catch (e) { return null; }
  }

  var current = readStored() || detectDefault();

  function detectDefault() {
    try {
      var nav = (navigator.language || "en").toLowerCase();
      if (nav.indexOf("hi") === 0) return "hi";
    } catch (e) {}
    return "en";
  }

  function resolve(dict, path) {
    var parts = path.split(".");
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function interpolate(str, params) {
    if (!params) return str;
    return str.replace(/\{(\w+)\}/g, function (m, k) {
      return Object.prototype.hasOwnProperty.call(params, k) ? String(params[k]) : m;
    });
  }

  function t(key, params) {
    var dict = window.I18N || {};
    var val = resolve(dict[current], key);
    if (val == null) val = resolve(dict.en, key);
    if (val == null) return key;
    if (typeof val === "string") return interpolate(val, params);
    return val; // objects/arrays allowed
  }

  function apply(root) {
    root = root || document;

    // textContent
    var textEls = root.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textEls.length; i++) {
      var el = textEls[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      var out = t(key);
      if (typeof out === "string") el.textContent = out;
    }

    // innerHTML (for text that legitimately contains markup we author)
    var htmlEls = root.querySelectorAll("[data-i18n-html]");
    for (var h = 0; h < htmlEls.length; h++) {
      var hel = htmlEls[h];
      var hkey = hel.getAttribute("data-i18n-html");
      var hout = hkey ? t(hkey) : null;
      if (typeof hout === "string") hel.innerHTML = hout;
    }

    // attributes: data-i18n-attr="placeholder:scanner.confirmPlaceholder; aria-label:nav.menu"
    var attrEls = root.querySelectorAll("[data-i18n-attr]");
    for (var a = 0; a < attrEls.length; a++) {
      var ael = attrEls[a];
      var spec = ael.getAttribute("data-i18n-attr");
      if (!spec) continue;
      spec.split(";").forEach(function (pair) {
        var idx = pair.indexOf(":");
        if (idx === -1) return;
        var attr = pair.slice(0, idx).trim();
        var akey = pair.slice(idx + 1).trim();
        var aval = t(akey);
        if (typeof aval === "string" && attr) ael.setAttribute(attr, aval);
      });
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    if (lang === current) {
      // still publish state so late-rendering components sync
      publish();
      return;
    }
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
    apply(document);
    publish();
  }

  function publish() {
    listeners.forEach(function (fn) {
      try { fn(current); } catch (e) { /* keep other listeners alive */ }
    });
    try {
      document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
    } catch (e) {
      var ev = document.createEvent("Event");
      ev.initEvent("langchange", true, true);
      document.dispatchEvent(ev);
    }
  }

  function on(fn) { if (typeof fn === "function") listeners.push(fn); }
  function getLang() { return current; }

  window.i18n = { t: t, apply: apply, setLang: setLang, getLang: getLang, on: on, SUPPORTED: SUPPORTED };

  // Apply on DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.setAttribute("lang", current);
    document.documentElement.setAttribute("data-lang", current);
    apply(document);
    publish();
  });
})();

/* ==================== js/core/ui.js ==================== */
/* ==========================================================================
   AgriHealthAI — UI helpers
   Toasts, accessible confirm dialogs, focus trapping, safe images,
   formatting, reveals and small DOM utilities used by every page.
   ========================================================================== */
(function () {
  "use strict";

  var t = function (k, p) { return window.i18n ? window.i18n.t(k, p) : k; };

  /* ---------- escape ---------- */
  function escape(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---------- toasts ---------- */
  function toastRoot() {
    var r = document.getElementById("toast-root");
    if (!r) { r = document.createElement("div"); r.id = "toast-root"; document.body.appendChild(r); }
    return r;
  }
  function toast(message, type, ms) {
    var el = document.createElement("div");
    el.className = "toast" + (type ? " toast--" + type : "");
    el.setAttribute("role", type === "error" ? "alert" : "status");
    el.innerHTML = '<span>' + escape(message) + '</span>' +
      '<button type="button" aria-label="' + escape(t("common.close")) + '">&times;</button>';
    var close = function () { if (el.parentNode) el.parentNode.removeChild(el); };
    el.querySelector("button").addEventListener("click", close);
    toastRoot().appendChild(el);
    setTimeout(close, ms || 4200);
    return el;
  }

  /* ---------- confirm dialog (accessible) ---------- */
  function confirmDialog(opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      var prevFocus = document.activeElement;
      var backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      var title = opts.title || t("common.confirm");
      var text = opts.text || "";
      var okText = opts.okText || t("common.confirm");
      var cancelText = opts.cancelText || t("common.cancel");
      var danger = opts.danger ? " btn--danger" : " btn--primary";
      backdrop.innerHTML =
        '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="cd-title">' +
          '<h3 id="cd-title">' + escape(title) + '</h3>' +
          (text ? '<p class="muted">' + escape(text) + '</p>' : "") +
          '<div class="modal__actions">' +
            '<button type="button" class="btn btn--secondary" data-act="cancel">' + escape(cancelText) + '</button>' +
            '<button type="button" class="btn' + danger + '" data-act="ok">' + escape(okText) + '</button>' +
          '</div>' +
        '</div>';
      document.body.appendChild(backdrop);

      var okBtn = backdrop.querySelector('[data-act="ok"]');
      var cancelBtn = backdrop.querySelector('[data-act="cancel"]');
      okBtn.focus();

      function done(val) {
        document.removeEventListener("keydown", onKey);
        if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
        if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
        resolve(val);
      }
      function onKey(e) {
        if (e.key === "Escape") { e.preventDefault(); done(false); }
        if (e.key === "Tab") {
          var focusables = backdrop.querySelectorAll("button");
          if (!focusables.length) return;
          var first = focusables[0], last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
      okBtn.addEventListener("click", function () { done(true); });
      cancelBtn.addEventListener("click", function () { done(false); });
      backdrop.addEventListener("click", function (e) { if (e.target === backdrop) done(false); });
      document.addEventListener("keydown", onKey);
    });
  }

  /* ---------- open modal (content provided) ---------- */
  function openModal(innerHTML, opts) {
    opts = opts || {};
    var prevFocus = document.activeElement;
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = '<div class="modal' + (opts.wide ? " modal--wide" : "") + '" role="dialog" aria-modal="true">' + innerHTML + '</div>';
    document.body.appendChild(backdrop);
    var modal = backdrop.querySelector(".modal");
    var closeBtn = backdrop.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
    function close() {
      document.removeEventListener("keydown", onKey);
      if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
      if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        var f = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    backdrop.addEventListener("click", function (e) { if (e.target === backdrop) close(); });
    var closeEls = backdrop.querySelectorAll("[data-modal-close]");
    for (var i = 0; i < closeEls.length; i++) closeEls[i].addEventListener("click", close);
    document.addEventListener("keydown", onKey);
    return { close: close, el: modal, backdrop: backdrop };
  }

  /* ---------- image fallback ---------- */
  function fallbackSVG(label) {
    var txt = escape((label || t("a11y.imageFallback")).slice(0, 26));
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">' +
      '<rect width="640" height="400" fill="#DDF3E5"/>' +
      '<path d="M0 320 Q160 240 320 320 T640 320 V400 H0 Z" fill="#21865B" opacity="0.25"/>' +
      '<circle cx="480" cy="110" r="42" fill="#21865B" opacity="0.35"/>' +
      '<text x="50%" y="56%" font-family="Inter,Arial,sans-serif" font-size="22" fill="#14543B" text-anchor="middle">' + txt + '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }
  function installImageFallback() {
    document.addEventListener("error", function (e) {
      var el = e.target;
      if (!el || el.tagName !== "IMG" || el.dataset.fallbackApplied) return;
      el.dataset.fallbackApplied = "1";
      el.src = fallbackSVG(el.alt);
      el.classList.add("img-fallback");
    }, true);
  }

  /* ---------- formatting ---------- */
  function formatNumber(n, digits) {
    if (n == null || isNaN(n)) return "—";
    var d = digits == null ? 0 : digits;
    return Number(n).toLocaleString(window.i18n && window.i18n.getLang() === "hi" ? "hi-IN" : "en-IN", {
      minimumFractionDigits: d, maximumFractionDigits: d
    });
  }
  function formatINR(n, digits) {
    if (n == null || isNaN(n)) return "—";
    return "\u20B9" + formatNumber(Math.round(n), digits || 0);
  }
  function formatRange(a, b, fmt) {
    fmt = fmt || formatNumber;
    if (a == null && b == null) return "—";
    if (a != null && b != null && a !== b) return fmt(a) + " – " + fmt(b);
    return fmt(a != null ? a : b);
  }
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function round(n, step) { step = step || 1; return Math.round(n / step) * step; }

  /* ---------- reveal on scroll ---------- */
  function reveal(selector) {
    var els = document.querySelectorAll(selector || ".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  /* ---------- misc DOM ---------- */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k.indexOf("on") === 0 && typeof attrs[k] === "function") node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      else if (k === "html") node.innerHTML = attrs[k];
      else if (attrs[k] != null) node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function download(filename, text, mime) {
    var blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function debounce(fn, ms) {
    var timer;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(ctx, args); }, ms || 200);
    };
  }

  window.UI = {
    escape: escape,
    toast: toast,
    confirm: confirmDialog,
    openModal: openModal,
    fallbackSVG: fallbackSVG,
    installImageFallback: installImageFallback,
    formatNumber: formatNumber,
    formatINR: formatINR,
    formatRange: formatRange,
    clamp: clamp,
    round: round,
    reveal: reveal,
    el: el, qs: qs, qsa: qsa,
    download: download,
    debounce: debounce
  };

  installImageFallback();
})();

/* ==================== js/services/storageService.js ==================== */
/* ==========================================================================
   AgriHealthAI — storageService
   Consent-friendly local persistence (browser localStorage) with a single
   namespace prefix so everything can be cleared together.
   NOTE: data lives only in THIS browser. It is not synced between devices
   and is never sent to a server in demo mode.
   ========================================================================== */
(function () {
  "use strict";

  var PREFIX = "ah_";

  function ls() {
    try { return window.localStorage; } catch (e) { return null; }
  }

  function fullKey(key) { return PREFIX + key; }

  function get(key, fallback) {
    var s = ls();
    if (!s) return fallback;
    try {
      var raw = s.getItem(fullKey(key));
      if (raw == null) return fallback;
      return raw;
    } catch (e) { return fallback; }
  }

  function set(key, value) {
    var s = ls();
    if (!s) return false;
    try { s.setItem(fullKey(key), value); return true; } catch (e) { return false; }
  }

  function remove(key) {
    var s = ls();
    if (!s) return;
    try { s.removeItem(fullKey(key)); } catch (e) {}
  }

  function getJSON(key, fallback) {
    var raw = get(key, null);
    if (raw == null) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }

  function setJSON(key, value) {
    try { return set(key, JSON.stringify(value)); } catch (e) { return false; }
  }

  function clearAll() {
    var s = ls();
    if (!s) return;
    var doomed = [];
    for (var i = 0; i < s.length; i++) {
      var k = s.key(i);
      if (k && k.indexOf(PREFIX) === 0) doomed.push(k);
    }
    doomed.forEach(function (k) { try { s.removeItem(k); } catch (e) {} });
  }

  function keys() {
    var s = ls();
    var out = [];
    if (!s) return out;
    for (var i = 0; i < s.length; i++) {
      var k = s.key(i);
      if (k && k.indexOf(PREFIX) === 0) out.push(k.slice(PREFIX.length));
    }
    return out;
  }

  function isAvailable() { return !!ls(); }

  window.storageService = {
    get: get, set: set, remove: remove,
    getJSON: getJSON, setJSON: setJSON,
    clearAll: clearAll, keys: keys, isAvailable: isAvailable,
    PREFIX: PREFIX
  };
})();

/* ==================== js/services/apiClient.js ==================== */
/* ==========================================================================
   AgriHealthAI — apiClient
   Thin fetch wrapper with timeouts + a cached backend-availability probe.
   Services use this to talk to the optional backend, and fall back to the
   local demo engine when no backend is configured/reachable.
   ========================================================================== */
(function () {
  "use strict";

  var cfg = window.AGRI_CONFIG || {};
  var base = (cfg.apiBase || "").replace(/\/$/, "");
  var probeResult = null; // null = unknown, true/false once known
  var probePromise = null;

  function withTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () { reject(new Error("timeout")); }, ms);
      promise.then(function (v) { clearTimeout(timer); resolve(v); },
                   function (e) { clearTimeout(timer); reject(e); });
    });
  }

  function isFileProtocol() {
    return typeof location !== "undefined" && location.protocol === "file:";
  }

  function probe() {
    if (probeResult !== null) return Promise.resolve(probeResult);
    if (probePromise) return probePromise;
    // file:// pages cannot reach a same-origin API -> demo mode
    if (isFileProtocol() && !base) {
      probeResult = false;
      return Promise.resolve(false);
    }
    probePromise = withTimeout(
      fetch(base + "/api/health", { method: "GET", headers: { "Accept": "application/json" } })
        .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("bad status")); })
        .then(function (j) { probeResult = !!(j && j.ok); return probeResult; }),
      cfg.probeTimeoutMs || 1200
    ).catch(function () { probeResult = false; return false; });
    return probePromise;
  }

  function request(method, path, body) {
    var opts = {
      method: method,
      headers: { "Accept": "application/json" },
      signal: undefined
    };
    if (body != null) {
      opts.headers["Content-Type"] = "application/json";
      opts.body = JSON.stringify(body);
    }
    var controller;
    if (typeof AbortController !== "undefined") {
      controller = new AbortController();
      opts.signal = controller.signal;
    }
    var p = fetch(base + path, opts).then(function (res) {
      return res.text().then(function (txt) {
        var data = null;
        try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = { raw: txt }; }
        if (!res.ok) {
          var err = new Error((data && data.error) || ("HTTP " + res.status));
          err.status = res.status;
          err.payload = data;
          throw err;
        }
        return data;
      });
    });
    return withTimeout(p, cfg.requestTimeoutMs || 20000).catch(function (e) {
      if (controller && e && e.message === "timeout") controller.abort();
      throw e;
    });
  }

  window.apiClient = {
    probe: probe,
    get: function (path) { return request("GET", path); },
    post: function (path, body) { return request("POST", path, body); },
    isBackendConfigured: function () { return !!base || (!isFileProtocol()); },
    base: function () { return base; }
  };
})();

/* ==================== js/services/translationService.js ==================== */
/* ==========================================================================
   AgriHealthAI — translationService
   Thin, typed wrapper over the i18n engine so components and services share
   one API. Also localises reference-data objects ({en, hi}).
   ========================================================================== */
(function () {
  "use strict";

  function t(key, params) { return window.i18n.t(key, params); }
  function current() { return window.i18n.getLang(); }
  function set(lang) { window.i18n.setLang(lang); }
  function apply(root) { window.i18n.apply(root); }
  function onChange(fn) { window.i18n.on(fn); }

  /** Localised label from a {en,hi} object (or a plain string). */
  function label(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    var l = current();
    return obj[l] != null ? obj[l] : (obj.en != null ? obj.en : "");
  }

  /** Return the localised form of a reference collection (SOILS, SEASONS, etc.) */
  function localizedList(list) {
    return list.map(function (it) {
      return Object.assign({}, it, { label: label(it) });
    });
  }

  window.translationService = {
    t: t, current: current, set: set, apply: apply, onChange: onChange, on: onChange,
    label: label, localizedList: localizedList
  };
})();

/* ==================== js/services/charts.js ==================== */
/* ==========================================================================
   AgriHealthAI — charts
   Small, dependency-free SVG chart builders used by the agriculture page.
   Everything is generated as inline SVG so it stays crisp, responsive and
   accessible (role="img" + <title>). No external chart library, no tracking.
   ========================================================================== */
(function () {
  "use strict";

  var C = {
    green: "#21865B",
    greenDark: "#14543B",
    greenMid: "#3E9E75",
    greenLight: "#7FC3A3",
    mint: "#DDF3E5",
    mintSoft: "#EFF7F2",
    track: "#E7F0EA",
    amber: "#D98A1F",
    amberLight: "#FBE7C6",
    ink: "#202A24",
    muted: "#68756D",
    grid: "#E3EDE7",
    white: "#FFFFFF"
  };

  var MONTH_FONT = "600 12px Inter, system-ui, -apple-system, 'Segoe UI', sans-serif";
  var VALUE_FONT = "700 12px Inter, system-ui, -apple-system, 'Segoe UI', sans-serif";
  var LABEL_FONT = "500 12px Inter, system-ui, -apple-system, 'Segoe UI', sans-serif";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function num(n, d) {
    var v = Number(n);
    if (!isFinite(v)) v = 0;
    try {
      return v.toLocaleString("en-IN", { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 0 : d });
    } catch (e) {
      return String(Math.round(v));
    }
  }

  function compactINR(v) {
    var n = Number(v) || 0;
    var a = Math.abs(n);
    if (a >= 10000000) return "\u20B9" + (n / 10000000).toFixed(1) + " Cr";
    if (a >= 100000) return "\u20B9" + (n / 100000).toFixed(1) + " L";
    if (a >= 1000) return "\u20B9" + Math.round(n / 1000) + "k";
    return "\u20B9" + Math.round(n);
  }

  function niceMax(v) {
    if (!(v > 0)) return 1;
    var exp = Math.pow(10, Math.floor(Math.log(v) / Math.LN10));
    var steps = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    var f = v / exp;
    for (var i = 0; i < steps.length; i++) {
      if (f <= steps[i]) return steps[i] * exp;
    }
    return 10 * exp;
  }

  function wrap(inner, w, h, label) {
    return '<svg class="chart-svg" viewBox="0 0 ' + w + " " + h + '" role="img" aria-label="' +
      esc(label) + '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">' +
      "<title>" + esc(label) + "</title>" + inner + "</svg>";
  }

  function text(x, y, str, opts) {
    opts = opts || {};
    return '<text x="' + x + '" y="' + y + '" fill="' + (opts.fill || C.muted) +
      '" font-size="' + (opts.size || 12) + '" font-weight="' + (opts.weight || 500) +
      '" text-anchor="' + (opts.anchor || "start") + '"' +
      (opts.font ? ' font-family="' + esc(opts.font) + '"' : "") +
      (opts.opacity != null ? ' opacity="' + opts.opacity + '"' : "") + ">" +
      esc(str) + "</text>";
  }

  /* ---------------------------------------------------------------------
   * Horizontal bar chart (used for official crop-group production)
   * opts: { data:[{label,value,color?,sub?}], width, labelWidth, unit,
   *         valueFmt, ariaLabel, decimals }
   * ------------------------------------------------------------------- */
  function barChart(opts) {
    opts = opts || {};
    var data = opts.data || [];
    var width = opts.width || 720;
    var labelW = opts.labelWidth || 150;
    var rightW = opts.rightW || 92;
    var rowH = opts.rowH || 46;
    var barH = opts.barH || 22;
    var top = 10;
    var bottom = 12;
    var height = top + bottom + data.length * rowH;
    var plotX = labelW;
    var plotW = Math.max(40, width - labelW - rightW);
    var max = opts.max || niceMax(Math.max.apply(null, data.map(function (d) { return d.value; }).concat([0])) * 1.04);
    var valueFmt = opts.valueFmt || function (v) { return num(v, opts.decimals || 0); };

    var svg = "";
    /* gridlines */
    for (var g = 0; g <= 4; g++) {
      var gx = plotX + (plotW * g) / 4;
      svg += '<line x1="' + gx.toFixed(1) + '" y1="' + top + '" x2="' + gx.toFixed(1) + '" y2="' +
        (height - bottom) + '" stroke="' + C.grid + '" stroke-width="1"' + (g === 0 ? "" : ' stroke-dasharray="3 4"') + "/>";
    }

    data.forEach(function (d, i) {
      var y = top + i * rowH;
      var cy = y + rowH / 2;
      var w = Math.max(2, (Math.max(0, d.value) / max) * plotW);
      var color = d.color || C.green;
      svg += text(labelW - 14, cy + 4, d.label, { anchor: "end", fill: C.ink, size: 12.5, weight: 600 });
      svg += '<rect x="' + plotX + '" y="' + (cy - barH / 2) + '" width="' + plotW + '" height="' + barH +
        '" rx="' + (barH / 2) + '" fill="' + C.track + '"/>';
      svg += '<rect x="' + plotX + '" y="' + (cy - barH / 2) + '" width="' + w.toFixed(1) + '" height="' + barH +
        '" rx="' + (barH / 2) + '" fill="' + color + '"><title>' + esc(d.label + ": " + valueFmt(d.value) + (opts.unit ? " " + opts.unit : "")) + "</title></rect>";
      if (d.sub) svg += text(labelW - 14, cy + 18, d.sub, { anchor: "end", fill: C.muted, size: 10.5, weight: 500 });
      svg += text(plotX + w + 10, cy + 4, valueFmt(d.value), { fill: C.greenDark, size: 12, weight: 700 });
    });

    return wrap(svg, width, height, opts.ariaLabel || "Bar chart");
  }

  /* ---------------------------------------------------------------------
   * Range bar chart (estimate ranges — honest about uncertainty)
   * opts: { rows:[{label,min,max,mid?}], width, unit, valueFmt, ariaLabel }
   * ------------------------------------------------------------------- */
  function rangeBarChart(opts) {
    opts = opts || {};
    var rows = opts.rows || [];
    var width = opts.width || 720;
    var labelW = opts.labelWidth || 118;
    var rightW = opts.rightW || 132;
    var rowH = opts.rowH || 38;
    var barH = opts.barH || 14;
    var top = 26;
    var bottom = 12;
    var height = top + bottom + rows.length * rowH;
    var plotX = labelW;
    var plotW = Math.max(60, width - labelW - rightW);

    var lo = 0, hi = 0;
    rows.forEach(function (r) {
      lo = Math.min(lo, Number(r.min) || 0);
      hi = Math.max(hi, Number(r.max) || 0);
    });
    if (hi === 0) hi = 1;
    var span = hi - lo || 1;
    function x(v) { return plotX + ((v - lo) / span) * plotW; }
    var valueFmt = opts.valueFmt || function (v) { return compactINR(v); };

    var svg = "";
    /* zero line + ticks */
    var ticks = 4;
    for (var g = 0; g <= ticks; g++) {
      var vv = lo + (span * g) / ticks;
      var gx = x(vv);
      svg += '<line x1="' + gx.toFixed(1) + '" y1="' + top + '" x2="' + gx.toFixed(1) + '" y2="' +
        (height - bottom) + '" stroke="' + C.grid + '" stroke-width="1"' + (g === 0 ? "" : ' stroke-dasharray="3 4"') + "/>";
      svg += text(gx, 14, valueFmt(vv), { anchor: "middle", fill: C.muted, size: 10.5, weight: 500 });
    }
    if (lo < 0) {
      svg += '<line x1="' + x(0).toFixed(1) + '" y1="' + (top - 4) + '" x2="' + x(0).toFixed(1) + '" y2="' +
        (height - bottom) + '" stroke="' + C.muted + '" stroke-width="1.2"/>';
    }

    rows.forEach(function (r, i) {
      var cy = top + i * rowH + rowH / 2;
      var x1 = Math.min(x(r.min), x(r.max));
      var x2 = Math.max(x(r.min), x(r.max));
      var w = Math.max(3, x2 - x1);
      var mid = r.mid != null ? r.mid : (Number(r.min) + Number(r.max)) / 2;
      var color = r.color || C.green;
      svg += text(labelW - 12, cy + 4, r.label, { anchor: "end", fill: C.ink, size: 12, weight: 600 });
      svg += '<rect x="' + x1.toFixed(1) + '" y="' + (cy - barH / 2) + '" width="' + w.toFixed(1) + '" height="' + barH +
        '" rx="' + (barH / 2) + '" fill="' + color + '" opacity="0.9"><title>' +
        esc(r.label + ": " + valueFmt(r.min) + " \u2013 " + valueFmt(r.max)) + "</title></rect>";
      svg += '<rect x="' + (x(mid) - 1.5).toFixed(1) + '" y="' + (cy - barH / 2 - 3) + '" width="3" height="' + (barH + 6) +
        '" rx="1.5" fill="' + C.white + '" stroke="' + C.greenDark + '" stroke-width="1"/>';
      svg += text(width - 8, cy + 4, valueFmt(r.min) + " \u2013 " + valueFmt(r.max), { anchor: "end", fill: C.greenDark, size: 11, weight: 700 });
    });

    return wrap(svg, width, height, opts.ariaLabel || "Estimate range chart");
  }

  /* ---------------------------------------------------------------------
   * Line + area chart with true spacing by year
   * opts: { points:[{x:number,y:number,label:string}], width, height,
   *         unit, yFmt, ariaLabel }
   * ------------------------------------------------------------------- */
  function lineChart(opts) {
    opts = opts || {};
    var pts = (opts.points || []).slice();
    var width = opts.width || 760;
    var height = opts.height || 300;
    var top = 30, right = 22, bottom = 44, left = 58;
    var plotW = Math.max(40, width - left - right);
    var plotH = Math.max(40, height - top - bottom);

    var xs = pts.map(function (p) { return Number(p.x); });
    var ys = pts.map(function (p) { return Number(p.y); });
    var xMin = Math.min.apply(null, xs), xMax = Math.max.apply(null, xs);
    if (xMin === xMax) { xMin -= 1; xMax += 1; }
    var yMax = niceMax(Math.max.apply(null, ys.concat([0])) * 1.08);
    var yMin = 0;

    function X(v) { return left + ((v - xMin) / (xMax - xMin)) * plotW; }
    function Y(v) { return top + plotH - ((v - yMin) / (yMax - yMin)) * plotH; }
    var yFmt = opts.yFmt || function (v) { return num(v, 0); };

    var svg = "";
    var ticks = 4;
    for (var g = 0; g <= ticks; g++) {
      var vv = yMin + ((yMax - yMin) * g) / ticks;
      var gy = Y(vv);
      svg += '<line x1="' + left + '" y1="' + gy.toFixed(1) + '" x2="' + (width - right) + '" y2="' + gy.toFixed(1) +
        '" stroke="' + C.grid + '" stroke-width="1"' + (g === 0 ? "" : ' stroke-dasharray="3 4"') + "/>";
      svg += text(left - 10, gy + 4, yFmt(vv), { anchor: "end", fill: C.muted, size: 10.5, weight: 500 });
    }

    /* area */
    var line = pts.map(function (p, i) { return (i ? "L" : "M") + X(Number(p.x)).toFixed(1) + " " + Y(Number(p.y)).toFixed(1); }).join(" ");
    var area = line + " L" + X(xMax).toFixed(1) + " " + Y(yMin).toFixed(1) + " L" + X(xMin).toFixed(1) + " " + Y(yMin).toFixed(1) + " Z";
    var gid = "agriGrad" + Math.random().toString(36).slice(2, 8);
    svg += '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' + C.green + '" stop-opacity="0.28"/>' +
      '<stop offset="100%" stop-color="' + C.green + '" stop-opacity="0.02"/>' +
      "</linearGradient></defs>";
    svg += '<path d="' + area + '" fill="url(#' + gid + ')"/>';
    svg += '<path d="' + line + '" fill="none" stroke="' + C.green + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>';

    pts.forEach(function (p) {
      var px = X(Number(p.x)), py = Y(Number(p.y));
      svg += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5.5" fill="' + C.white +
        '" stroke="' + C.greenDark + '" stroke-width="2.4"><title>' +
        esc(p.label + ": " + yFmt(p.y) + (opts.unit ? " " + opts.unit : "")) + "</title></circle>";
      svg += text(px, py - 14, yFmt(p.y), { anchor: "middle", fill: C.greenDark, size: 11.5, weight: 700 });
      svg += text(px, height - 20, p.label, { anchor: "middle", fill: C.muted, size: 10.5, weight: 500 });
    });

    return wrap(svg, width, height, opts.ariaLabel || "Line chart");
  }

  /* ---------------------------------------------------------------------
   * Donut chart + legend (used for the cost breakdown)
   * opts: { segments:[{label,value}], width, height, totalLabel, ariaLabel }
   * ------------------------------------------------------------------- */
  function polar(cx, cy, r, deg) {
    var a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function donut(opts) {
    opts = opts || {};
    var segs = (opts.segments || []).filter(function (s) { return Number(s.value) > 0; });
    var width = opts.width || 540;
    var height = opts.height || 250;
    var cx = 132, cy = height / 2, rOut = 86, rIn = 58;
    var total = segs.reduce(function (a, s) { return a + Number(s.value); }, 0) || 1;
    var colors = opts.colors || [C.greenDark, C.green, C.greenMid, C.amber, C.greenLight, C.muted];

    var svg = "";
    var start = 0;
    if (segs.length === 1) {
      var one = segs[0];
      svg += '<circle cx="' + cx + '" cy="' + cy + '" r="' + ((rOut + rIn) / 2) + '" fill="none" stroke="' +
        (one.color || colors[0]) + '" stroke-width="' + (rOut - rIn) + '"><title>' +
        esc(one.label + ": " + num(one.value)) + "</title></circle>";
    } else {
      segs.forEach(function (s, i) {
        var angle = (Number(s.value) / total) * 360;
        var end = start + angle;
        if (angle >= 359.99) angle = 359.99;
        var large = (end - start) > 180 ? 1 : 0;
        var p1 = polar(cx, cy, rOut, start), p2 = polar(cx, cy, rOut, end);
        var p3 = polar(cx, cy, rIn, end), p4 = polar(cx, cy, rIn, start);
        var d = "M" + p1[0].toFixed(2) + " " + p1[1].toFixed(2) +
          " A" + rOut + " " + rOut + " 0 " + large + " 1 " + p2[0].toFixed(2) + " " + p2[1].toFixed(2) +
          " L" + p3[0].toFixed(2) + " " + p3[1].toFixed(2) +
          " A" + rIn + " " + rIn + " 0 " + large + " 0 " + p4[0].toFixed(2) + " " + p4[1].toFixed(2) + " Z";
        svg += '<path d="' + d + '" fill="' + (s.color || colors[i % colors.length]) + '"><title>' +
          esc(s.label + ": " + num(s.value) + " (" + Math.round((s.value / total) * 100) + "%)") + "</title></path>";
      });
    }

    svg += text(cx, cy - 4, opts.totalLabel || "", { anchor: "middle", fill: C.muted, size: 11, weight: 600 });
    svg += text(cx, cy + 16, opts.totalValue || "", { anchor: "middle", fill: C.greenDark, size: 15, weight: 800 });

    var lx = 252;
    var rowH = 34;
    var ly = Math.max(18, cy - (segs.length * rowH) / 2);
    segs.forEach(function (s, i) {
      var y = ly + i * rowH;
      var col = s.color || colors[i % colors.length];
      svg += '<rect x="' + lx + '" y="' + (y - 8) + '" width="12" height="12" rx="3" fill="' + col + '"/>';
      svg += text(lx + 20, y + 2, s.label, { fill: C.ink, size: 11.5, weight: 600 });
      svg += text(width - 15, y + 2, Math.round((s.value / total) * 100) + "%", { anchor: "end", fill: C.muted, size: 11, weight: 600 });
      if (s.valueLabel) svg += text(lx + 20, y + 16, s.valueLabel, { fill: C.muted, size: 10, weight: 500 });
    });

    return wrap(svg, width, height, opts.ariaLabel || "Donut chart");
  }

  window.AgriCharts = {
    barChart: barChart,
    rangeBarChart: rangeBarChart,
    lineChart: lineChart,
    donut: donut,
    compactINR: compactINR,
    formatNumber: num,
    colors: C
  };
})();

/* ==================== js/services/cropDiseaseService.js ==================== */
/* ==========================================================================
   AgriHealthAI — cropDiseaseService
   Reference-based crop health screening.

   HONESTY RULES
   - A single photo cannot confirm a crop disease. This service never claims a
     diagnosis. It shows the common diseases/disorders for the selected crop
     and ranks them against symptoms the farmer actually ticks.
   - It measures only real, transparent image properties (brightness, contrast,
     detail, green/warm/dark area) to give photo-quality feedback.
   - It never gives chemical doses. Recovery steps are cultural/physical and
     always point to the local KVK / extension officer for confirmation.
   ========================================================================== */
(function () {
  "use strict";

  var ref = window.AgriReference;
  var MAX_BYTES = 6 * 1024 * 1024;
  var TYPES = ["image/jpeg", "image/png", "image/webp"];

  function readAsDataURL(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () { resolve(fr.result); };
      fr.onerror = function () { reject(new Error("read-failed")); };
      fr.readAsDataURL(file);
    });
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error("image-decode-failed")); };
      img.src = src;
    });
  }

  /* ---------- real image measurement ---------- */
  function measure(img) {
    var size = 96;
    var canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, size, size);
    var data;
    try { data = ctx.getImageData(0, 0, size, size).data; } catch (e) { return null; }

    var n = size * size;
    var lum = new Float32Array(n);
    var sum = 0, green = 0, warm = 0, dark = 0, satSum = 0;
    for (var i = 0, p = 0; i < n; i++, p += 4) {
      var r = data[p], g = data[p + 1], b = data[p + 2];
      var l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      lum[i] = l;
      sum += l;
      if (l < 55) dark++;
      if (g > r * 1.06 && g > b * 1.06 && g > 45) green++;
      if (r > 105 && r > b + 22 && g > 55 && b < 125 && r >= g - 12) warm++;
      var mx = Math.max(r, g, b), mn = Math.min(r, g, b);
      satSum += mx ? (mx - mn) / mx : 0;
    }

    var mean = sum / n;
    var variance = 0;
    for (var j = 0; j < n; j++) { var d = lum[j] - mean; variance += d * d; }
    variance /= n;

    /* simple edge energy (mean absolute neighbour difference) */
    var edge = 0, edgeN = 0;
    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size - 1; x++) {
        var idx = y * size + x;
        edge += Math.abs(lum[idx + 1] - lum[idx]);
        edgeN++;
      }
    }
    for (var yy = 0; yy < size - 1; yy++) {
      for (var xx = 0; xx < size; xx++) {
        var id2 = yy * size + xx;
        edge += Math.abs(lum[id2 + size] - lum[id2]);
        edgeN++;
      }
    }

    return {
      brightness: Math.round((mean / 255) * 100),
      contrast: Math.round((Math.sqrt(variance) / 128) * 100),
      detail: +((edge / edgeN) * 4).toFixed(1),
      saturation: Math.round((satSum / n) * 100),
      greenPct: Math.round((green / n) * 100),
      warmPct: Math.round((warm / n) * 100),
      darkPct: Math.round((dark / n) * 100)
    };
  }

  /* ---------- quality gate ---------- */
  function photoQuality(stats) {
    if (!stats) return "unknown";
    if (stats.brightness < 20 || stats.contrast < 8) return "lowLight";
    if (stats.brightness > 88 && stats.contrast < 10) return "washed";
    if (stats.detail < 2.2) return "blurry";
    return "good";
  }

  /* ---------- reference lookup ---------- */
  function listForCrop(cropId) {
    var all = ref.CROP_DISEASES || [];
    return all.filter(function (d) {
      return d.crops === "all" || (Array.isArray(d.crops) && d.crops.indexOf(cropId) !== -1);
    });
  }

  function symptomsForCrop(cropId) {
    var seen = {}, out = [];
    listForCrop(cropId).forEach(function (d) {
      d.symptoms.forEach(function (s) {
        if (!seen[s.en]) { seen[s.en] = 1; out.push({ key: s.en, label: s }); }
      });
    });
    return out;
  }

  function rank(cropId, selectedKeys) {
    var set = {};
    (selectedKeys || []).forEach(function (k) { set[k] = true; });
    var list = listForCrop(cropId).map(function (d) {
      var matched = d.symptoms.filter(function (s) { return set[s.en]; });
      return {
        disease: d,
        matched: matched,
        score: matched.length ? Math.round((matched.length / d.symptoms.length) * 100) : null
      };
    });
    list.sort(function (a, b) {
      if (a.score != null && b.score != null && b.score !== a.score) return b.score - a.score;
      if (a.score != null && b.score == null) return -1;
      if (b.score != null && a.score == null) return 1;
      return 0;
    });
    return list;
  }

  /* ---------- local screening result ---------- */
  function localResult(cropId, stats) {
    var quality = photoQuality(stats);
    return {
      demo: true,
      source: "local-reference",
      cropId: cropId,
      imageStats: stats,
      quality: quality,
      possible: listForCrop(cropId),
      symptoms: symptomsForCrop(cropId),
      note: {
        en: "Common possibilities for this crop, from general reference data. A photo cannot confirm a disease — tick the symptoms you can see and confirm with your KVK.",
        hi: "सामान्य संदर्भ डेटा से इस फसल की आम संभावनाएँ। फ़ोटो से रोग की पुष्टि नहीं होती — जो लक्षण दिखें उन्हें चुनें और KVK से पुष्टि करें।"
      }
    };
  }

  /* ---------- public: analyse ----------
   * Screening is intentionally local: the ranked result depends on the
   * reference dataset plus the symptoms the farmer ticks. No photo leaves the
   * device and no diagnosis is claimed. A trained vision model could be wired
   * in here later, but only with an honest confidence score.
   */
  function analyze(file, cropId) {
    if (!file) return Promise.reject(new Error("no-file"));
    if (TYPES.indexOf(file.type) === -1) return Promise.reject(new Error("invalid-type"));
    if (file.size > MAX_BYTES) return Promise.reject(new Error("too-large"));

    return readAsDataURL(file).then(function (dataUrl) {
      return loadImage(dataUrl).then(function (img) {
        return localResult(cropId, measure(img));
      });
    });
  }

  window.cropDiseaseService = {
    analyze: analyze,
    listForCrop: listForCrop,
    symptomsForCrop: symptomsForCrop,
    rank: rank,
    photoQuality: photoQuality,
    MAX_BYTES: MAX_BYTES,
    TYPES: TYPES
  };
})();

/* ==================== js/services/cropService.js ==================== */
/* ==========================================================================
   AgriHealthAI — cropService
   Crop recommendation + cultivation planning.
   - Uses the optional backend (/api/crops/*) when available.
   - Otherwise runs a transparent LOCAL DEMO engine over general reference
     ranges (AgriReference). All financial output is clearly an ESTIMATE.
   Net profit = estimated gross revenue − estimated total cultivation cost.
   ========================================================================== */
(function () {
  "use strict";

  var ref = window.AgriReference;

  function lang() { return window.i18n ? window.i18n.getLang() : "en"; }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang()] != null ? obj[lang()] : (obj.en != null ? obj.en : "");
  }

  /* ---------- normalise + area ---------- */
  function unitToAcre(unitId) {
    var u = ref.UNITS.filter(function (x) { return x.id === unitId; })[0];
    return u ? u.toAcre : 1;
  }
  function normalize(inputs) {
    inputs = inputs || {};
    var area = parseFloat(inputs.landArea);
    if (isNaN(area) || area <= 0) area = 1;
    var acres = area * unitToAcre(inputs.unit);
    var budget = inputs.budget === "" || inputs.budget == null ? null : parseFloat(inputs.budget);
    if (isNaN(budget)) budget = null;
    return {
      state: inputs.state || "",
      district: inputs.district || "",
      landArea: area,
      unit: inputs.unit || "acre",
      areaAcres: acres,
      season: inputs.season || "",
      soil: inputs.soil || "unknown",
      water: inputs.water || "medium",
      budget: budget,
      preferences: Array.isArray(inputs.preferences) ? inputs.preferences.slice() : []
    };
  }

  /* ---------- scoring ---------- */
  var WATER_RANK = { low: 1, medium: 2, high: 3 };

  function scoreCrop(crop, inp) {
    var score = 50;
    var reasons = [];

    // season
    if (crop.seasons.indexOf(inp.season) !== -1) {
      score += 18;
      reasons.push({ tag: "season", text: {
        en: "Fits the " + seasonEn(inp.season) + " season you selected.",
        hi: "आपके चुने " + seasonHi(inp.season) + " मौसम के अनुकूल।"
      } });
    }

    // soil
    if (inp.soil && inp.soil !== "unknown") {
      if (crop.soils.indexOf(inp.soil) !== -1) {
        score += 14;
        reasons.push({ tag: "soilGood", text: {
          en: "Grows well in " + soilEn(inp.soil) + ".",
          hi: soilHi(inp.soil) + " में अच्छी वृद्धि।"
        } });
      } else {
        score -= 18;
        reasons.push({ tag: "soilWarn", text: {
          en: "Not the best fit for " + soilEn(inp.soil) + " — may need extra soil management.",
          hi: soilHi(inp.soil) + " के लिए सर्वोत्तम नहीं — अतिरिक्त मिट्टी प्रबंधन चाहिए।"
        } });
      }
    }

    // water
    var need = WATER_RANK[crop.waterNeed] || 2;
    var have = WATER_RANK[inp.water] || 2;
    if (need <= have) {
      score += need === have ? 10 : 6;
      reasons.push({ tag: "waterGood", text: {
        en: "Water requirement (" + waterEn(crop.waterNeed) + ") matches what you can provide.",
        hi: "पानी की आवश्यकता (" + waterHi(crop.waterNeed) + ") आपकी उपलब्धता से मेल खाती है।"
      } });
    } else {
      score -= (need - have) * 16;
      reasons.push({ tag: "waterWarn", text: {
        en: "Needs more water than you indicated — risky without better irrigation.",
        hi: "आपके बताए से अधिक पानी चाहिए — बेहतर सिंचाई के बिना जोखिम।"
      } });
    }

    // budget
    var costMid = mid(crop.inputCostPerAcre) * inp.areaAcres;
    if (inp.budget != null) {
      if (costMid <= inp.budget) {
        score += 9;
        reasons.push({ tag: "budgetGood", text: {
          en: "Estimated cost fits inside your budget.",
          hi: "अनुमानित लागत आपके बजट में फिट बैठती है।"
        } });
      } else {
        var over = (costMid - inp.budget) / Math.max(inp.budget, 1);
        score -= Math.min(22, Math.round(over * 30));
        reasons.push({ tag: "budgetWarn", text: {
          en: "Estimated cost is above your budget — consider a smaller area.",
          hi: "अनुमानित लागत आपके बजट से अधिक है — कम क्षेत्र पर विचार करें।"
        } });
      }
    }

    // preferences
    var prefs = inp.preferences || [];
    prefs.forEach(function (p) {
      if (p === "lowLabour" && crop.labor === "low") { score += 6; reasons.push({ tag: "pref", text: { en: "Suits your preference for lower labour.", hi: "कम श्रम की आपकी प्राथमिकता के अनुकूल।" } }); }
      if (p === "lowInvestment" && crop.investment === "low") { score += 6; reasons.push({ tag: "pref", text: { en: "Suits your preference for lower initial investment.", hi: "कम शुरुआती निवेश की आपकी प्राथमिकता के अनुकूल।" } }); }
      if (p === "shortDuration" && crop.durationDays[1] <= 110) { score += 6; reasons.push({ tag: "pref", text: { en: "Short duration — frees land sooner.", hi: "कम अवधि — ज़मीन जल्दी खाली होती है।" } }); }
    });
    if (prefs.indexOf("highReturns") !== -1) {
      var rev = mid(crop.yieldPerAcre) * 10 * mid(crop.pricePerQuintal) * inp.areaAcres;
      if (rev - costMid > 0) { score += 5; reasons.push({ tag: "pref", text: { en: "Has potential for higher returns (with higher risk).", hi: "उच्च लाभ की संभावना (अधिक जोखिम के साथ)।" } }); }
    }

    return { score: Math.max(0, Math.min(100, Math.round(score))), reasons: reasons };
  }

  function mid(range) { return (range[0] + range[1]) / 2; }

  function seasonEn(id) { var s = ref.SEASONS.filter(function (x) { return x.id === id; })[0]; return s ? s.en : id; }
  function seasonHi(id) { var s = ref.SEASONS.filter(function (x) { return x.id === id; })[0]; return s ? s.hi : id; }
  function soilEn(id) { var s = ref.SOILS.filter(function (x) { return x.id === id; })[0]; return s ? s.en : id; }
  function soilHi(id) { var s = ref.SOILS.filter(function (x) { return x.id === id; })[0]; return s ? s.hi : id; }
  function waterEn(id) { var s = ref.WATER_LEVELS.filter(function (x) { return x.id === id; })[0]; return s ? s.en.split("—")[0].trim() : id; }
  function waterHi(id) { var s = ref.WATER_LEVELS.filter(function (x) { return x.id === id; })[0]; return s ? s.hi.split("—")[0].trim() : id; }

  /* ---------- financials ---------- */
  function financials(crop, areaAcres) {
    var yMin = crop.yieldPerAcre[0] * areaAcres;
    var yMax = crop.yieldPerAcre[1] * areaAcres;
    var yMid = (yMin + yMax) / 2;
    var pMin = crop.pricePerQuintal[0], pMax = crop.pricePerQuintal[1], pMid = (pMin + pMax) / 2;
    var cMin = crop.inputCostPerAcre[0] * areaAcres;
    var cMax = crop.inputCostPerAcre[1] * areaAcres;
    var cMid = (cMin + cMax) / 2;

    var q = function (t) { return t * 10; }; // tonnes -> quintals
    var grossMin = Math.max(0, q(yMin) * pMin);
    var grossMax = Math.max(0, q(yMax) * pMax);
    var grossMid = q(yMid) * pMid;

    return {
      areaAcres: Math.round(areaAcres * 100) / 100,
      yieldTonnes: { min: yMin, mid: yMid, max: yMax },
      yieldQuintal: { min: q(yMin), mid: q(yMid), max: q(yMax) },
      pricePerQuintal: { min: pMin, mid: pMid, max: pMax },
      grossRevenue: { min: grossMin, mid: grossMid, max: grossMax },
      totalCost: { min: cMin, mid: cMid, max: cMax },
      netProfit: { min: grossMin - cMax, mid: grossMid - cMid, max: grossMax - cMin },
      costBreakdown: {
        seed: { min: cMin * 0.15, max: cMax * 0.15 },
        fertiliser: { min: cMin * 0.25, max: cMax * 0.25 },
        labour: { min: cMin * 0.35, max: cMax * 0.35 },
        irrigation: { min: cMin * 0.25, max: cMax * 0.25 }
      }
    };
  }

  /* ---------- recommend ---------- */
  var SEASON_FALLBACK = "zaid";

  function localRecommend(rawInputs) {
    var inp = normalize(rawInputs);
    var pool = ref.CROPS.filter(function (c) { return c.seasons.indexOf(inp.season) !== -1; });
    var relaxed = false;
    if (pool.length < 3) { // relax to all crops if season window is very narrow
      pool = ref.CROPS.slice();
      relaxed = true;
    }

    var scored = pool.map(function (crop) {
      var s = scoreCrop(crop, inp);
      var fin = financials(crop, inp.areaAcres);
      return {
        id: crop.id,
        name: crop.name,
        emoji: crop.emoji,
        image: crop.image,
        category: crop.category,
        seasons: crop.seasons,
        waterNeed: crop.waterNeed,
        labour: crop.labor,
        investment: crop.investment,
        durationDays: crop.durationDays,
        yieldPerAcre: crop.yieldPerAcre,
        pricePerQuintal: crop.pricePerQuintal,
        idealPh: crop.idealPh,
        desc: crop.desc,
        tips: crop.tips,
        risks: crop.risks,
        matchScore: s.score,
        reasons: s.reasons,
        financials: fin,
        relaxedSeason: relaxed
      };
    }).sort(function (a, b) { return b.matchScore - a.matchScore; });

    // de-duplicate & cap
    return {
      demo: true,
      source: "local-demo-engine",
      input: {
        areaAcres: Math.round(inp.areaAcres * 100) / 100,
        unit: inp.unit,
        season: inp.season,
        soil: inp.soil,
        water: inp.water,
        budget: inp.budget,
        preferences: inp.preferences,
        state: inp.state
      },
      crops: scored.slice(0, 8)
    };
  }

  /* ======================================================================
   * Cultivation plan
   * ==================================================================== */
  function harvestIndicators(crop) {
    var cat = crop.category;
    var map = {
      cereal: { en: "Grains become hard and the straw/cob dries and turns golden; grain no longer dents with a thumbnail. Confirm grain moisture before threshing.", hi: "दाने कड़े हो जाते हैं और तना/भुट्टा सूखकर सुनहरा हो जाता है; नाखून से दाना दबता नहीं। मड़ाई से पहले दाने की नमी जाँचें।" },
      millet: { en: "Earheads dry out and grains become hard. Harvest before over-drying to reduce shattering.", hi: "बालियाँ सूख जाती हैं और दाने कड़े हो जाते हैं। अधिक सूखने से पहले कटाई करें ताकि दाना झड़े नहीं।" },
      pulse: { en: "Pods turn brown/dry and rattle when shaken; seeds are hard. Harvest in the morning to reduce shattering.", hi: "फलियाँ भूरी/सूखी होकर हिलाने पर खनकती हैं; दाने कड़े। झड़ने से बचने हेतु सुबह कटाई करें।" },
      oilseed: { en: "Pods/siliquae turn brown and seeds darken; seeds rattle inside. Avoid delayed harvest to prevent shattering.", hi: "फलियाँ भूरी हो जाती हैं और दाने गहरे; हिलाने पर खनकते हैं। झड़ने से बचने हेतु देर न करें।" },
      vegetable: { en: "Produce reaches the size, colour and firmness the market wants. Harvest in the cool part of the day and handle gently.", hi: "उपज बाज़ार के अनुसार आकार, रंग व कड़ापन पा लेती है। ठंडे समय में कटाई करें और सावधानी से संभालें।" },
      cash: { en: "Crop-specific maturity: for cotton, bolls open showing lint; for sugarcane, stalks mature and lower leaves dry. Confirm with local guidance.", hi: "फसल-विशेष परिपक्वता: कपास में टिंडे खुलकर रेशा दिखे; गन्ने में डंठल परिपक्व व निचली पत्तियाँ सूखें। स्थानीय सलाह से पुष्टि करें।" }
    };
    return map[cat] || map.cereal;
  }

  function buildTasks(crop) {
    var irr = crop.irrigationIntervalDays || [10, 15];
    var spacing = crop.sowing.spacing || "As recommended locally";
    var tasks = [
      { from: -20, to: -1, stage: "land", what: { en: "Prepare the land and incorporate organic matter", hi: "ज़मीन तैयार करें और जैविक खाद मिलाएँ" },
        how: { en: "Plough 2–3 times to a fine tilth, break clods, level the field and add well-rotted farmyard manure / compost as per your soil test. Get a soil test if you have not done one.", hi: "2–3 बार जुताई करके भुरभुरी मिट्टी बनाएँ, ढेले तोड़ें, खेत समतल करें और मृदा परीक्षण के अनुसार सड़ी गोबर खाद/कंपोस्ट मिलाएँ। परीक्षण न हुआ हो तो कराएँ।" },
        why: { en: "Good tilth and organic matter improve germination, root growth and water-holding.", hi: "अच्छी तैयारी व जैविक खाद से अंकुरण, जड़ वृद्धि व जल धारण बेहतर होता है।" },
        avoid: { en: "Do not work very wet soil (it compacts) and avoid burning crop residue.", hi: "बहुत गीली मिट्टी में काम न करें (वह दब जाती है) और फसल अवशेष न जलाएँ।" } },
      { from: -5, to: 0, stage: "seed", what: { en: "Select certified seed and treat it", hi: "प्रमाणित बीज चुनें और उपचार करें" },
        how: { en: "Use certified seed of a variety recommended for your district and season. Apply seed treatment as advised by your local agriculture office: " + L(crop.sowing.seedRateEn || "") + ".", hi: "अपने ज़िले व मौसम के लिए सुझाई प्रमाणित किस्म का बीज लें। स्थानीय कृषि कार्यालय की सलाह से बीजोपचार करें: " + L(crop.sowing.seedRateHi || "") + "।" },
        why: { en: "Certified, treated seed gives better establishment and fewer early diseases.", hi: "प्रमाणित, उपचारित बीज से बेहतर जमाव व कम रोग होते हैं।" },
        avoid: { en: "Avoid home-saved seed of unknown quality and expired packets.", hi: "अज्ञात गुणवत्ता का घर का बीज व एक्सपायर पैकेट न लें।" } },
      { from: 0, to: 3, stage: "sowing", what: { en: "Sow / transplant at the right time", hi: "सही समय पर बुवाई / रोपाई करें" },
        how: { en: L(crop.sowing.methodEn) + " Keep rows " + spacing + (crop.sowing.depth ? " and depth " + crop.sowing.depth + "." : "."), hi: L(crop.sowing.methodHi) + " कतारों की दूरी " + spacing + (crop.sowing.depth ? " और गहराई " + crop.sowing.depth + " रखें।" : " रखें।") },
        why: { en: "Timely sowing with correct spacing uses light, water and nutrients efficiently.", hi: "सही समय व दूरी पर बुवाई से प्रकाश, पानी व पोषक तत्व कुशलता से उपयोग होते हैं।" },
        avoid: { en: "Avoid very deep sowing and uneven spacing.", hi: "बहुत गहरी बुवाई व असामान्य दूरी से बचें।" } },
      { from: 5, to: crop.durationDays[1], stage: "irrigation", what: { en: "Follow an irrigation schedule and check soil moisture", hi: "सिंचाई कार्यक्रम अपनाएँ और मिट्टी की नमी जाँचें" },
        how: { en: "Irrigate roughly every " + irr[0] + "–" + irr[1] + " days depending on soil and weather. Check moisture by hand near the roots. Give extra care at critical stages (see growth stages).", hi: "मिट्टी व मौसम के अनुसार लगभग हर " + irr[0] + "–" + irr[1] + " दिन में सिंचाई करें। जड़ों के पास हाथ से नमी जाँचें। महत्वपूर्ण अवस्थाओं में विशेष ध्यान दें।" },
        why: { en: "Timely, adequate water at the right stages strongly affects yield.", hi: "सही अवस्थाओं में समय पर पर्याप्त पानी उपज को काफ़ी प्रभावित करता है।" },
        avoid: { en: "Avoid flooding/waterlogging and long dry spells, especially at flowering and grain/pod filling.", hi: "जलभराव व लंबी सूखी अवधि से बचें, ख़ासकर फूल व दाना/फली भरने के समय।" } },
      { from: 10, to: crop.durationDays[1] - 10, stage: "fertiliser", what: { en: "Manage nutrients based on a soil test", hi: "मृदा परीक्षण के आधार पर पोषक तत्व प्रबंधन करें" },
        how: { en: "Apply nitrogen in split doses and phosphorus/potassium as per your soil-test recommendation. Keep a copy of the soil card. Add organic matter regularly.", hi: "नाइट्रोजन कई बार में बाँटकर दें और फॉस्फोरस/पोटाश मृदा परीक्षण की सिफ़ारिश के अनुसार। मृदा कार्ड संभालकर रखें। नियमित जैविक खाद जोड़ें।" },
        why: { en: "Balanced nutrition (not just more fertiliser) improves yield and soil health.", hi: "संतुलित पोषण (केवल अधिक खाद नहीं) से उपज व मिट्टी की सेहत सुधरती है।" },
        avoid: { en: "Do not apply urea on dry soil or exceed recommended doses; avoid guessing doses.", hi: "सूखी मिट्टी पर यूरिया न डालें और सिफ़ारिश से अधिक मात्रा न दें; अंदाज़े से मात्रा तय न करें।" } },
      { from: 15, to: 50, stage: "weed", what: { en: "Keep the field weed-free early on", hi: "शुरुआत में खेत खरपतवार-मुक्त रखें" },
        how: { en: "Do 1–2 timely hand/mechanical weedings and, if needed, use locally recommended pre/post-emergence practices. Mulching helps in vegetables.", hi: "1–2 समय पर हाथ/यंत्र से निराई करें और ज़रूरत पर स्थानीय स्तर पर सुझाए उपाय अपनाएँ। सब्ज़ियों में मल्चिंग सहायक है।" },
        why: { en: "Weeds compete for water, light and nutrients right when the crop is establishing.", hi: "शुरुआती अवस्था में खरपतवार पानी, प्रकाश व पोषक तत्व छीन लेते हैं।" },
        avoid: { en: "Avoid herbicide use without correct identification and local guidance.", hi: "सही पहचान व स्थानीय सलाह के बिना खरपतवारनाशी न छिड़कें।" } },
      { from: 20, to: crop.durationDays[1], stage: "pest", what: { en: "Scout weekly for pests and diseases", hi: "साप्ताहिक कीट व रोग निगरानी करें" },
        how: { en: "Inspect leaves, stems and fruits weekly and watch for the key risks listed for this crop. Identify the problem first, then use integrated pest management (IPM) and local advisories.", hi: "सप्ताह में पत्ती, तना व फल देखें और इस फसल के मुख्य जोखिमों पर नज़र रखें। पहले समस्या पहचानें, फिर समेकित कीट प्रबंधन (IPM) व स्थानीय सलाह अपनाएँ।" },
        why: { en: "Early detection allows cheaper, safer, more effective control.", hi: "जल्दी पहचान से सस्ता, सुरक्षित व प्रभावी नियंत्रण संभव है।" },
        avoid: { en: "Avoid calendar-based spraying and mixing chemicals without expert advice.", hi: "बिना विशेषज्ञ सलाह के नियमित छिड़काव व रसायन मिलाने से बचें।" } },
      { from: crop.durationDays[0], to: crop.durationDays[1], stage: "harvest", what: { en: "Harvest at the right maturity", hi: "सही परिपक्वता पर कटाई करें" },
        how: { en: harvestIndicators(crop).en + " Harvest in dry conditions and use clean equipment.", hi: harvestIndicators(crop).hi + " सूखे मौसम में साफ़ उपकरण से कटाई करें।" },
        why: { en: "Right-time harvest protects both quality and market value.", hi: "सही समय की कटाई गुणवत्ता व बाज़ार भाव दोनों बचाती है।" },
        avoid: { en: "Avoid harvesting too early (poor quality) or too late (loss/shattering).", hi: "बहुत जल्दी (घटिया गुणवत्ता) या बहुत देर (नुकसान/झड़न) से कटाई न करें।" } },
      { from: crop.durationDays[0], to: crop.durationDays[1] + 15, stage: "storage", what: { en: "Dry, clean and store properly", hi: "सुखाएँ, साफ़ करें और ठीक से भंडारें" },
        how: { en: "Dry produce to safe moisture, clean and grade it, then store in clean, dry, ventilated conditions. Use airtight/cold storage where appropriate and check regularly for pests.", hi: "उपज को सुरक्षित नमी तक सुखाएँ, साफ़ करके श्रेणीबद्ध करें, फिर साफ़, सूखी, हवादार जगह भंडारें। उपयुक्त हो तो वायुरोधी/शीत भंडारण करें और नियमित जाँच करें।" },
        why: { en: "Good post-harvest handling prevents losses and can improve the price you get.", hi: "अच्छी कटाई-पश्चात देखभाल नुकसान रोकती है और भाव सुधार सकती है।" },
        avoid: { en: "Avoid storing damp produce or mixing infested and clean lots.", hi: "नम उपज भंडारण व कीटग्रस्त व साफ़ माल मिलाने से बचें।" } }
    ];
    return tasks;
  }

  function buildPlan(cropId, rawInputs) {
    var crop = ref.CROPS.filter(function (c) { return c.id === cropId; })[0];
    if (!crop) return null;
    var inp = normalize(rawInputs);
    var fin = financials(crop, inp.areaAcres);
    var irr = crop.irrigationIntervalDays || [10, 15];

    var guide = {
      landPrep: {
        en: "Prepare a fine, level seedbed 2–3 weeks before sowing. Plough 2–3 times, remove stubble, and add well-rotted farmyard manure / compost as per your soil test. A soil test (available at local labs / KVK) tells you exactly what nutrients your field needs. " + soilNote(crop, inp).en,
        hi: "बुवाई से 2–3 सप्ताह पहले भुरभुरी, समतल क्यारी तैयार करें। 2–3 बार जुताई करें, ठूँठ हटाएँ, और मृदा परीक्षण के अनुसार सड़ी गोबर खाद/कंपोस्ट मिलाएँ। मृदा परीक्षण (स्थानीय प्रयोगशाला / KVK) बताता है कि खेत को क्या चाहिए। " + soilNote(crop, inp).hi
      },
      seed: {
        en: "Choose a certified variety recommended for your district and season. Seed rate: " + L(crop.sowing.seedRateEn) + ". Confirm the best variety with your local KVK / seed dealer, as varieties differ by region.",
        hi: "अपने ज़िले व मौसम के लिए सुझाई प्रमाणित किस्म चुनें। बीज दर: " + L(crop.sowing.seedRateHi) + "। सर्वोत्तम किस्म की पुष्टि स्थानीय KVK / बीज विक्रेता से करें, क्योंकि किस्में क्षेत्र अनुसार बदलती हैं।"
      },
      sowing: {
        en: L(crop.sowing.methodEn) + " Ideal season: " + crop.seasons.map(function (s) { return SEASON_EN[s]; }).join(", ") + ". Match sowing to the onset of your season and local advisory.",
        hi: L(crop.sowing.methodHi) + " उपयुक्त मौसम: " + crop.seasons.map(function (s) { return SEASON_HI[s]; }).join(", ") + "। बुवाई को मौसम की शुरुआत व स्थानीय परामर्श से मिलाएँ।"
      },
      spacing: {
        en: "Spacing: " + (crop.sowing.spacing || "as locally recommended") + ". Depth: " + (crop.sowing.depth || "as locally recommended") + ". Correct spacing improves light, air and nutrient use.",
        hi: "दूरी: " + (crop.sowing.spacing || "स्थानीय सिफ़ारिश अनुसार") + "। गहराई: " + (crop.sowing.depth || "स्थानीय सिफ़ारिश अनुसार") + "। सही दूरी से प्रकाश, हवा व पोषक तत्व बेहतर उपयोग होते हैं।"
      },
      irrigation: {
        en: "This crop typically needs irrigation every " + irr[0] + "–" + irr[1] + " days (" + waterEn(crop.waterNeed).toLowerCase() + " water requirement). Judge by soil moisture and weather, not a fixed calendar. Give extra care at flowering and grain/pod/fruit filling.",
        hi: "इस फसल को आमतौर पर हर " + irr[0] + "–" + irr[1] + " दिन में सिंचाई चाहिए (" + waterHi(crop.waterNeed) + " आवश्यकता)। तय कैलेंडर नहीं, मिट्टी की नमी व मौसम देखकर निर्णय करें। फूल व दाना/फली/फल भरने पर विशेष ध्यान दें।"
      },
      fertiliser: {
        en: "Base your fertiliser plan on a soil test. Apply nitrogen in split doses; give phosphorus and potassium as recommended. Add organic matter (compost/FYM, green manure) to build soil health. Your local KVK can convert the soil test into an exact field plan.",
        hi: "खाद योजना मृदा परीक्षण पर आधारित रखें। नाइट्रोजन कई बार में बाँटकर दें; फॉस्फोरस व पोटाश सिफ़ारिश अनुसार। मिट्टी की सेहत हेतु जैविक खाद (कंपोस्ट/गोबर, हरी खाद) जोड़ें। स्थानीय KVK परीक्षण को सटीक खेत योजना में बदल सकता है।"
      },
      weed: {
        en: "Keep the field weed-free for the first 30–45 days. Do 1–2 timely hand or mechanical weedings. Use mulch where suitable (especially vegetables). Identify weeds before using any herbicide.",
        hi: "पहले 30–45 दिन खेत खरपतवार-मुक्त रखें। 1–2 समय पर हाथ या यंत्र से निराई करें। उपयुक्त हो तो मल्चिंग करें (ख़ासकर सब्ज़ियों में)। कोई खरपतवारनाशी उपयोग से पहले पहचान करें।"
      },
      pest: {
        en: "Scout weekly for the key risks: " + crop.risks.en.join("; ") + ". Identify the pest/disease first, then use integrated pest management (IPM) and follow local advisories. Ask your KVK before any chemical use.",
        hi: "सप्ताह में मुख्य जोखिमों की निगरानी करें: " + crop.risks.hi.join("; ") + "। पहले कीट/रोग पहचानें, फिर समेकित कीट प्रबंधन (IPM) अपनाएँ और स्थानीय परामर्श मानें। कोई रसायन उपयोग से पहले KVK से पूछें।"
      },
      stages: crop.stages.map(function (s) {
        return { name: s, from: s.from, to: s.to };
      }),
      harvest: harvestIndicators(crop),
      storage: {
        en: "Dry to safe moisture, clean and grade produce, then store in clean, dry, ventilated space. Use airtight or cold storage where appropriate. Check stored lots regularly for insects, moisture and mould; sell at a planned time to avoid distress sale.",
        hi: "उपज को सुरक्षित नमी तक सुखाएँ, साफ़ करके श्रेणीबद्ध करें, फिर साफ़, सूखी, हवादार जगह भंडारें। उपयुक्त हो तो वायुरोधी/शीत भंडारण करें। कीट, नमी व फफूंद के लिए नियमित जाँच करें; मजबूरी में बिक्री से बचने हेतु नियोजित समय पर बेचें।"
      }
    };

    return {
      demo: true,
      source: "local-demo-engine",
      crop: {
        id: crop.id, name: crop.name, emoji: crop.emoji, image: crop.image,
        category: crop.category, durationDays: crop.durationDays, waterNeed: crop.waterNeed,
        labour: crop.labor, investment: crop.investment, idealPh: crop.idealPh,
        desc: crop.desc, risks: crop.risks
      },
      input: {
        areaAcres: Math.round(inp.areaAcres * 100) / 100,
        unit: inp.unit, season: inp.season, soil: inp.soil, water: inp.water, state: inp.state
      },
      financials: fin,
      guide: guide,
      tasks: buildTasks(crop),
      note: { en: "Demo plan from general reference guidance. Adapt to your field and confirm with your local agriculture extension officer / KVK.", hi: "सामान्य संदर्भ मार्गदर्शन से डेमो योजना। अपने खेत के अनुसार ढालें और स्थानीय कृषि विस्तार अधिकारी / KVK से पुष्टि करें।" }
    };
  }

  var SEASON_EN = { kharif: "Kharif", rabi: "Rabi", zaid: "Zaid" };
  var SEASON_HI = { kharif: "खरीफ", rabi: "रबी", zaid: "ज़ायद" };

  function soilNote(crop, inp) {
    if (inp.soil === "unknown") {
      return { en: "Soil type wasn't specified — get a soil test to confirm suitability for " + crop.name.en + ".", hi: "मिट्टी का प्रकार नहीं बताया गया — " + crop.name.hi + " के लिए उपयुक्तता की पुष्टि मृदा परीक्षण से करें।" };
    }
    if (crop.soils.indexOf(inp.soil) !== -1) {
      return { en: crop.name.en + " is generally suited to " + soilEn(inp.soil) + "; maintain organic matter and drainage.", hi: crop.name.hi + " सामान्यतः " + soilHi(inp.soil) + " के लिए उपयुक्त है; जैविक पदार्थ व जल निकास बनाए रखें।" };
    }
    return { en: crop.name.en + " is not ideal for " + soilEn(inp.soil) + "; improve structure with organic matter and seek local advice.", hi: crop.name.hi + " " + soilHi(inp.soil) + " के लिए आदर्श नहीं; जैविक पदार्थ से संरचना सुधारें और स्थानीय सलाह लें।" };
  }

  /* ======================================================================
   * Public API (backend-aware)
   * ==================================================================== */
  function recommendCrops(inputs) {
    return window.apiClient.probe().then(function (hasBackend) {
      if (!hasBackend) return localRecommend(inputs);
      return window.apiClient.post("/api/crops/recommend", inputs).catch(function () {
        // network/validation failure -> graceful demo fallback
        var r = localRecommend(inputs);
        r.fallbackReason = "backend-unavailable";
        return r;
      });
    });
  }

  function getPlan(cropId, inputs) {
    return window.apiClient.probe().then(function (hasBackend) {
      if (!hasBackend) return buildPlan(cropId, inputs);
      return window.apiClient.post("/api/crops/plan", { cropId: cropId, input: inputs }).catch(function () {
        var p = buildPlan(cropId, inputs);
        if (p) p.fallbackReason = "backend-unavailable";
        return p;
      });
    });
  }

  window.cropService = {
    recommendCrops: recommendCrops,
    getPlan: getPlan,
    localRecommend: localRecommend,
    buildPlan: buildPlan,
    financials: financials,
    normalize: normalize
  };
})();

/* ==================== js/services/nutritionService.js ==================== */
/* ==========================================================================
   AgriHealthAI — nutritionService
   Approximate reference nutrition lookup (per 100 g) with serving scaling.
   DEMO MODE: values come from the shared reference dataset and are clearly
   labelled as approximate. Connect a real nutrition API on the backend for
   authoritative per-product values.
   ========================================================================== */
(function () {
  "use strict";

  var ref = window.AgriReference;

  // common-name synonyms -> reference id
  var SYNONYMS = {
    "apples": "apple", "seb": "apple",
    "kela": "banana", "bananas": "banana",
    "aam": "mango",
    "santra": "orange", "oranges": "orange", "mosambi": "orange",
    "amrud": "guava", "amrood": "guava",
    "papita": "papaya",
    "tamatar": "tomato", "tomatoes": "tomato",
    "aloo": "potato", "potatoes": "potato",
    "pyaz": "onion", "onions": "onion",
    "palak": "spinach",
    "gajar": "carrot", "carrots": "carrot",
    "patta gobhi": "cabbage",
    "matar": "greenpeas", "peas": "greenpeas", "green peas": "greenpeas",
    "baingan": "brinjal", "eggplant": "brinjal", "aubergine": "brinjal",
    "chawal": "rice-cooked", "rice": "rice-cooked", "steamed rice": "rice-cooked",
    "roti": "roti", "chapati": "roti", "phulka": "roti", "wheat roti": "roti",
    "dal": "dal-cooked", "daal": "dal-cooked", "lentil": "dal-cooked",
    "chana": "chana-boiled", "chickpeas": "chana-boiled", "chole": "chana-boiled",
    "paneer": "paneer", "cottage cheese": "paneer",
    "doodh": "milk", "dudh": "milk",
    "dahi": "curd", "yogurt": "curd", "yoghurt": "curd",
    "anda": "egg", "eggs": "egg", "boiled egg": "egg",
    "murga": "chicken", "chiken": "chicken",
    "moongphali": "groundnut", "peanut": "groundnut", "peanuts": "groundnut",
    "badam": "almonds", "almond": "almonds",
    // junk
    "chips": "chips", "wafer": "chips", "potato chips": "chips", "lays": "chips",
    "noodles": "noodles", "maggi": "noodles", "ramen": "noodles", "instant noodles": "noodles",
    "pizza": "pizza", "cheese pizza": "pizza",
    "burger": "burger", "hamburger": "burger",
    "coke": "softdrink", "cola": "softdrink", "soft drink": "softdrink", "soda": "softdrink", "pepsi": "softdrink", "cold drink": "softdrink",
    "samosa": "samosa", "samosas": "samosa",
    "biscuit": "biscuit", "biscuits": "biscuit", "cookie": "biscuit", "cookies": "biscuit",
    "chocolate": "chocolate", "choc": "chocolate",
    "icecream": "icecream", "ice cream": "icecream", "kulfi": "icecream",
    "pakora": "pakora", "pakoda": "pakora", "bhajji": "pakora", "bhajia": "pakora", "fried snack": "pakora"
  };

  function norm(s) {
    return String(s || "").toLowerCase().trim().replace(/\s+/g, " ");
  }

  function allFoods() {
    var fresh = ref.NUTRITION.map(function (f) { return Object.assign({ type: "fresh" }, f); });
    var junk = ref.JUNK_FOODS.map(function (f) { return Object.assign({ type: "junk" }, f); });
    return fresh.concat(junk);
  }

  function findById(id) {
    return allFoods().filter(function (f) { return f.id === id; })[0] || null;
  }

  function search(query) {
    var q = norm(query);
    if (!q) return [];
    var foods = allFoods();
    var seen = {};
    var results = [];
    function push(f) { if (f && !seen[f.id]) { seen[f.id] = 1; results.push(f); } }

    // exact id / synonym
    if (SYNONYMS[q]) push(findById(SYNONYMS[q]));
    // starts with / contains in names
    foods.forEach(function (f) {
      if (norm(f.en).indexOf(q) === 0 || norm(f.hi).indexOf(q) === 0) push(f);
    });
    foods.forEach(function (f) {
      if (norm(f.en).indexOf(q) !== -1 || norm(f.hi).indexOf(q) !== -1) push(f);
    });
    // synonym key containment
    Object.keys(SYNONYMS).forEach(function (k) {
      if (k.indexOf(q) !== -1) push(findById(SYNONYMS[k]));
    });
    return results;
  }

  function firstMatch(query) {
    var r = search(query);
    return r.length ? r[0] : null;
  }

  /** Scale a per-100g record to a given serving size in grams. */
  function perServing(item, grams) {
    grams = parseFloat(grams);
    if (!item) return null;
    if (isNaN(grams) || grams <= 0) grams = 100;
    var f = grams / 100;
    function s(v) { return v == null ? null : Math.round(v * f * 10) / 10; }
    return {
      grams: grams,
      energy: s(item.kcal),
      protein: s(item.protein),
      carbs: s(item.carbs),
      fat: s(item.fat),
      satFat: s(item.satFat),
      fibre: s(item.fiber),
      sugar: s(item.sugar),
      sodium: s(item.sodium),
      potassium: s(item.potassium),
      calcium: s(item.calcium),
      iron: s(item.iron),
      vitC: s(item.vitC),
      vitA: s(item.vitA),
      water: s(item.water)
    };
  }

  /** Energy contribution of macros (4/9/4 rule) for a chart. */
  function macroEnergy(p) {
    if (!p) return null;
    var proteinKcal = (p.protein || 0) * 4;
    var carbKcal = (p.carbs || 0) * 4;
    var fatKcal = (p.fat || 0) * 9;
    var total = proteinKcal + carbKcal + fatKcal;
    if (total <= 0) return { protein: 0, carbs: 0, fat: 0, total: 0 };
    return {
      protein: Math.round((proteinKcal / total) * 100),
      carbs: Math.round((carbKcal / total) * 100),
      fat: Math.round((fatKcal / total) * 100),
      total: Math.round(total)
    };
  }

  function getNutrition(idOrQuery) {
    return window.apiClient.probe().then(function (hasBackend) {
      if (hasBackend) {
        return window.apiClient.get("/api/nutrition/" + encodeURIComponent(idOrQuery)).catch(function () {
          return localNutrition(idOrQuery);
        });
      }
      return localNutrition(idOrQuery);
    });
  }

  function localNutrition(idOrQuery) {
    var item = findById(idOrQuery) || firstMatch(idOrQuery);
    if (!item) return { demo: true, source: "local-reference", found: false, item: null };
    return {
      demo: true,
      source: "local-reference",
      found: true,
      item: item,
      per100g: perServing(item, 100),
      macroEnergy: macroEnergy(perServing(item, 100))
    };
  }

  window.nutritionService = {
    all: allFoods,
    search: search,
    findById: findById,
    firstMatch: firstMatch,
    perServing: perServing,
    macroEnergy: macroEnergy,
    getNutrition: getNutrition,
    localNutrition: localNutrition,
    SYNONYMS: SYNONYMS
  };
})();

/* ==================== js/services/foodVisionService.js ==================== */
/* ==========================================================================
   AgriHealthAI — foodVisionService
   Food image analysis. DEMO MODE performs only a transparent LOCAL
   measurement (image quality / colour statistics) and returns an honest,
   rule-based VISUAL STATUS (clear / check / unknown). It does NOT pretend to
   identify the food or to be a food-safety test. Connect a vision model on the
   backend for real analysis.
   ========================================================================== */
(function () {
  "use strict";

  function readAsDataURL(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onload = function () { resolve(fr.result); };
      fr.onerror = function () { reject(new Error("read-failed")); };
      fr.readAsDataURL(file);
    });
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error("image-decode-failed")); };
      img.src = src;
    });
  }

  /** Real, objective local measurement of the centre of the photo — not a food claim. */
  function measureImage(img) {
    var w = 96, h = 96;
    var canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    /* sample the middle 70% so the plate/background does not dominate */
    var sx = img.width * 0.15, sy = img.height * 0.15;
    var sw = Math.max(1, img.width * 0.70), sh = Math.max(1, img.height * 0.70);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
    var data;
    try { data = ctx.getImageData(0, 0, w, h).data; } catch (e) { return null; }

    var n = w * h;
    var rSum = 0, gSum = 0, bSum = 0, lumSum = 0;
    var lumArr = new Float32Array(n);
    var green = 0, brown = 0, yellow = 0, dark = 0;
    for (var i = 0, p = 0; i < n; i++, p += 4) {
      var r = data[p], g = data[p + 1], b = data[p + 2];
      rSum += r; gSum += g; bSum += b;
      var l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      lumArr[i] = l;
      lumSum += l;
      if (l < 58) dark++;
      if (g > r * 1.05 && g > b * 1.05 && g > 50) green++;
      if (r > 165 && g > 135 && b < 115 && Math.abs(r - g) < 55) yellow++;
      if (r > 85 && r < 215 && g > 38 && g < 155 && b < 110 && r > g + 15 && g >= b + 4) brown++;
    }
    var mr = rSum / n, mg = gSum / n, mb = bSum / n;
    var mean = lumSum / n;
    var variance = 0;
    for (var j = 0; j < n; j++) { var d = lumArr[j] - mean; variance += d * d; }
    variance /= n;

    var dominant = "neutral";
    if (mr > mg + 18 && mr > mb + 18) dominant = "reddish";
    else if (mg > mr + 14 && mg > mb + 14) dominant = "greenish";
    else if (mb > mr + 14 && mb > mg + 10) dominant = "bluish";
    else if (mr > 155 && mg > 135 && mb < 115) dominant = "yellowish";
    else if (mr > 180 && mg > 180 && mb > 180) dominant = "light";

    return {
      brightness: Math.round((mean / 255) * 100),
      contrast: Math.round((Math.sqrt(variance) / 128) * 100),
      dominant: dominant,
      greenPct: Math.round((green / n) * 100),
      brownPct: Math.round((brown / n) * 100),
      yellowPct: Math.round((yellow / n) * 100),
      darkPct: Math.round((dark / n) * 100),
      rgb: { r: Math.round(mr), g: Math.round(mg), b: Math.round(mb) }
    };
  }

  /** Transparent rule-based visual status from the measured properties. */
  function visualStatus(stats) {
    if (!stats) return "unknown";
    if (stats.brightness < 18 || stats.contrast < 7) return "unknown";
    if (stats.brightness > 90 && stats.contrast < 9) return "unknown";
    if (stats.darkPct >= 30 || stats.brownPct >= 40) return "check";
    return "clear";
  }

  function demoResult(stats) {
    var status = visualStatus(stats);
    var reason, notes, signs = [], confidence;
    if (status === "clear") {
      confidence = 0.45;
      reason = {
        en: "No obvious visual spoilage signs in the centre of this photo.",
        hi: "इस फ़ोटो के मध्य भाग में सड़न के स्पष्ट दृश्य संकेत नहीं दिखे।"
      };
      notes = [
        { en: "Visual check only — the food was not identified, because no vision model is connected.", hi: "केवल दृश्य जाँच — भोजन की पहचान नहीं हुई, क्योंकि कोई विज़न मॉडल जुड़ा नहीं है।" },
        { en: "A clear photo does not prove the food is safe. Always check smell, texture and the use-by date.", hi: "साफ़ फ़ोटो भोजन के सुरक्षित होने का प्रमाण नहीं है। गंध, बनावट और एक्सपायरी तिथि अवश्य जाँचें।" }
      ];
    } else if (status === "check") {
      confidence = 0.4;
      reason = {
        en: "Large dark or brown areas were measured — this may be shadow, natural browning, or spoilage.",
        hi: "बड़े गहरे या भूरे क्षेत्र मापे गए — यह छाया, प्राकृतिक भूरापन या सड़न हो सकता है।"
      };
      notes = [
        { en: "Check the food closely before eating: look for mould, smell for off odours and feel for slime.", hi: "खाने से पहले भोजन ध्यान से जाँचें: फफूंद देखें, बदबू सूँघें और चिपचिपाहट महसूस करें।" },
        { en: "If anything seems doubtful, discard it. Do not taste food to check if it is safe.", hi: "कुछ भी संदिग्ध लगे तो फेंक दें। सुरक्षित है या नहीं, यह जानने के लिए चखें नहीं।" }
      ];
      signs = [
        { en: "A large dark/brown area was measured in the photo centre.", hi: "फ़ोटो के मध्य में बड़ा गहरा/भूरा क्षेत्र मापा गया।" }
      ];
    } else {
      confidence = 0.2;
      reason = {
        en: "The photo is too dark, too bright or too flat for a visual check.",
        hi: "फ़ोटो दृश्य जाँच के लिए बहुत गहरी, बहुत चमकीली या बहुत फीकी है।"
      };
      notes = [
        { en: "Retake the photo in even daylight, close to the food, with the whole portion in frame.", hi: "भोजन के पास, एक समान दिन की रोशनी में, पूरा हिस्सा फ्रेम में रखकर फ़ोटो दोबारा लें।" },
        { en: "No freshness conclusion can be drawn from this photo.", hi: "इस फ़ोटो से ताज़गी का कोई निष्कर्ष नहीं निकाला जा सकता।" }
      ];
    }

    return {
      demo: true,
      source: "local-demo-vision",
      status: status, // clear | check | unknown
      statusReason: reason,
      confidence: confidence,
      likelyFood: null,
      candidates: [],
      freshnessNotes: notes,
      spoilageSigns: signs,
      storage: {
        en: "General guidance: keep fresh food cool and covered, refrigerate perishables, and follow the label for packaged food.",
        hi: "सामान्य सलाह: ताज़ा भोजन ठंडा व ढककर रखें, जल्दी खराब होने वाली चीज़ें फ्रिज में रखें, और पैक्ड भोजन पर लेबल देखें।"
      },
      preservation: {
        en: "Common methods: refrigeration, freezing, drying, pickling, canning and vacuum packing — choose based on the food and how soon you will eat it.",
        hi: "आम तरीके: फ्रिज, फ्रीज़िंग, सुखाना, अचार, कैनिंग व वैक्यूम पैक — भोजन और खाने के समय के अनुसार चुनें।"
      },
      imageStats: stats,
      disclaimerKey: "scanner.safetyText"
    };
  }

  function analyzeImage(file) {
    if (!file) return Promise.reject(new Error("no-file"));
    return readAsDataURL(file).then(function (dataUrl) {
      return loadImage(dataUrl).then(function (img) {
        var stats = measureImage(img);
        return window.apiClient.probe().then(function (hasBackend) {
          if (!hasBackend) {
            var r = demoResult(stats);
            r.preview = dataUrl;
            return r;
          }
          return window.apiClient.post("/api/food/analyze", {
            image: dataUrl,
            mimeType: file.type
          }).then(function (res) {
            res.preview = dataUrl;
            return res;
          }).catch(function () {
            var f = demoResult(stats);
            f.preview = dataUrl;
            f.fallbackReason = "backend-unavailable";
            return f;
          });
        });
      });
    });
  }

  /** Files accepted by the UI. */
  var ACCEPTED = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var MAX_BYTES = 6 * 1024 * 1024;

  function validateFile(file) {
    if (!file) return { ok: false, errorKey: "scanner.pickFirst" };
    if (ACCEPTED.indexOf(file.type) === -1) return { ok: false, errorKey: "scanner.errorType" };
    if (file.size > MAX_BYTES) return { ok: false, errorKey: "scanner.errorSize" };
    return { ok: true };
  }

  window.foodVisionService = {
    analyzeImage: analyzeImage,
    validateFile: validateFile,
    readAsDataURL: readAsDataURL,
    ACCEPTED: ACCEPTED,
    MAX_BYTES: MAX_BYTES
  };
})();

/* ==================== js/services/healthGuidanceService.js ==================== */
/* ==========================================================================
   AgriHealthAI — healthGuidanceService
   SAFE, non-medical, educational wellness guidance + junk-food "recovery"
   (returning to balance, never detox/fasting/punishment) + habit helpers.
   ========================================================================== */
(function () {
  "use strict";

  function lang() { return window.i18n ? window.i18n.getLang() : "en"; }
  function L(o) { return o == null ? "" : (typeof o === "string" ? o : (o[lang()] != null ? o[lang()] : o.en)); }

  var GOAL_GUIDANCE = {
    overall: [
      { en: "Pick one or two small changes at a time rather than changing everything at once.", hi: "एक बार में सब बदलने के बजाय एक-दो छोटे बदलाव चुनें।" },
      { en: "Build a rough daily rhythm: regular meals, movement, water and a consistent bedtime.", hi: "एक साधारण दिनचर्या बनाएँ: नियमित भोजन, गतिविधि, पानी और एक समान सोने का समय।" },
      { en: "Aim to include vegetables or fruit with most meals.", hi: "अधिकतर भोजन के साथ सब्ज़ी या फल शामिल करने का प्रयास करें।" },
      { en: "If you have a health condition or take medicines, talk to a qualified professional before big changes.", hi: "कोई स्वास्थ्य समस्या हो या दवा लेते हों, बड़े बदलाव से पहले योग्य पेशेवर से बात करें।" }
    ],
    eating: [
      { en: "Try the plate idea: half vegetables/fruit, a quarter whole grains, a quarter protein (dal, beans, egg, dairy, lean meat).", hi: "थाली का तरीका आज़माएँ: आधा सब्ज़ी/फल, चौथाई साबुत अनाज, चौथाई प्रोटीन (दाल, बीन्स, अंडा, दूध, दुबला मांस)।" },
      { en: "Choose whole grains (whole wheat, brown rice, millets) more often than refined ones.", hi: "रिफाइंड की अपेक्षा साबुत अनाज (साबुत गेहूँ, ब्राउन राइस, मिलेट्स) अधिक चुनें।" },
      { en: "Keep water as your main drink; limit sugary drinks.", hi: "पानी को मुख्य पेय रखें; मीठे पेय कम करें।" },
      { en: "Eat slowly and stop when comfortably full, not overly full.", hi: "धीरे खाएँ और संतोषजनक भरने पर रुकें, ज़रूरत से ज़्यादा नहीं।" },
      { en: "Plan a simple weekly menu so healthy choices are the easy choices.", hi: "साप्ताहिक मेन्यू बनाएँ ताकि स्वस्थ विकल्प आसान हों।" }
    ],
    activity: [
      { en: "Start from where you are: even a 10-minute walk counts and can build up.", hi: "जहाँ हैं वहीं से शुरू करें: 10 मिनट की सैर भी गिनती है और बढ़ाई जा सकती है।" },
      { en: "Aim for regular moderate movement most days — walking, cycling, dancing, household work or games.", hi: "अधिकतर दिन नियमित मध्यम गतिविधि का लक्ष्य रखें — सैर, साइकल, नृत्य, घर का काम या खेल।" },
      { en: "Add some strength/balance work a couple of times a week (chair squats, wall push-ups, stretching).", hi: "सप्ताह में दो बार शक्ति/संतुलन व्यायाम जोड़ें (कुर्सी स्क्वाट, दीवार पुश-अप, स्ट्रेचिंग)।" },
      { en: "Break up long sitting with short standing or walking breaks.", hi: "लंबे समय बैठने के बीच खड़े होने या चलने का छोटा ब्रेक लें।" },
      { en: "Rest and stop if you feel unwell, dizzy or in pain.", hi: "अस्वस्थ, चक्कर या दर्द महसूस हो तो रुकें और आराम करें।" }
    ],
    sleep: [
      { en: "Keep a similar bedtime and wake time, even on weekends where possible.", hi: "जहाँ संभव हो, सोने-जागने का समय एक समान रखें, छुट्टियों में भी।" },
      { en: "Wind down for 30–60 minutes: dim light, no heavy meals, and reduce screens before bed.", hi: "सोने से 30–60 मिनट पहले ढीला करें: कम रोशनी, भारी भोजन नहीं, और स्क्रीन कम करें।" },
      { en: "Keep the room dark, quiet and cool, and reserve the bed for sleep.", hi: "कमरा अंधेरा, शांत व ठंडा रखें, और बिस्तर केवल सोने के लिए रखें।" },
      { en: "Limit caffeine in the late afternoon and evening.", hi: "देर दोपहर व शाम को कैफ़ीन कम करें।" },
      { en: "If sleep problems persist, speak to a qualified professional.", hi: "नींद की समस्या बनी रहे तो योग्य पेशेवर से बात करें।" }
    ]
  };

  var BASE_HYDRATION = { en: "Drink water regularly through the day, and more in heat or after activity. Water is usually the best choice. Plain buttermilk, lemon water or unsweetened tea also count.", hi: "दिनभर नियमित पानी पिएँ, गर्मी या गतिविधि के बाद अधिक। पानी आमतौर पर सर्वोत्तम है। सादा छाछ, नींबू पानी या बिना चीनी की चाय भी गिनती है।" };
  var BASE_MOVEMENT = { en: "A short walk — even 10–15 minutes — after a heavy meal can help you feel better and supports digestion and blood-sugar balance. Pick movement you enjoy and can repeat.", hi: "भारी भोजन के बाद छोटी सैर — 10–15 मिनट भी — अच्छा महसूस कराती है और पाचन व रक्त-शर्करा संतुलन में सहायक है। वह गतिविधि चुनें जो पसंद हो और दोहराई जा सके।" };

  var NEXT_MEALS = {
    general: { en: "For your next meal, try a simple balanced plate: vegetables, a whole grain or millet, and a protein such as dal, beans, curd or egg.", hi: "अगले भोजन में साधारण संतुलित थाली आज़माएँ: सब्ज़ी, साबुत अनाज या मिलेट, और दाल, बीन्स, दही या अंडा जैसा प्रोटीन।" },
    salty: { en: "Packaged snacks are salty, so keep the next meals lower in salt: fresh fruit, unsalted nuts, curd, and lightly salted home-cooked food.", hi: "पैक्ड स्नैक्स में नमक अधिक होता है, इसलिए अगले भोजन कम नमक वाले रखें: ताज़ा फल, बिना नमक मेवे, दही और हल्का नमक वाला घर का खाना।" },
    sugary: { en: "After a sugary treat or drink, favour fibre and protein: fruit with curd, a vegetable sabzi with roti, or chana — they help steady energy.", hi: "मीठे के बाद फाइबर व प्रोटीन चुनें: दही के साथ फल, रोटी के साथ सब्ज़ी, या चना — ये ऊर्जा स्थिर रखते हैं।" },
    fried: { en: "Balance fried food with lighter, fresher meals: salads, boiled/steamed vegetables, dal, and fruit. Keep the next meal a bit lighter, not skipped.", hi: "तले भोजन को हल्के, ताज़े भोजन से संतुलित करें: सलाद, उबली/भाप में पकी सब्ज़ी, दाल और फल। अगला भोजन थोड़ा हल्का रखें, छोड़ें नहीं।" }
  };

  var LONG_TERM = [
    { en: "Frequency matters more than one meal: aim for mostly balanced choices most of the time.", hi: "एक भोजन से ज़्यादा आवृत्ति मायने रखती है: ज़्यादातर समय संतुलित विकल्प चुनें।" },
    { en: "Keep treat foods enjoyable and occasional — no guilt, no punishment.", hi: "पसंदीदा खाना कभी-कभार आनंद के साथ खाएँ — कोई अपराध-भाव नहीं, कोई सज़ा नहीं।" },
    { en: "Cook more at home and plan meals so healthy options are easy to reach.", hi: "घर पर अधिक पकाएँ और भोजन की योजना बनाएँ ताकि स्वस्थ विकल्प आसान हों।" },
    { en: "Track simple habits (like FitHomey) to notice patterns, not to judge yourself.", hi: "साधारण आदतें (जैसे फिटहोमी) ट्रैक करें ताकि पैटर्न दिखें, खुद को आँकने के लिए नहीं।" }
  ];

  function goalGuidance(goalId) {
    return {
      demo: true,
      source: "educational-content",
      goal: goalId || "overall",
      points: (GOAL_GUIDANCE[goalId] || GOAL_GUIDANCE.overall)
    };
  }

  function concernsFor(item) {
    if (!item) return [];
    var out = [];
    if (item.concern) out.push(item.concern);
    var notes = [];
    if (item.sodium != null && item.sodium >= 400) notes.push({ en: "High sodium: frequent intake can be hard on blood pressure over time.", hi: "सोडियम अधिक: लगातार सेवन समय के साथ रक्तचाप पर भार डाल सकता है।" });
    if (item.sugar != null && item.sugar >= 15) notes.push({ en: "High sugar: often adds energy without nutrients; go easy on frequency.", hi: "शर्करा अधिक: अक्सर बिना पोषण के ऊर्जा जोड़ती है; आवृत्ति कम रखें।" });
    if (item.satFat != null && item.satFat >= 5) notes.push({ en: "High saturated fat: best kept occasional.", hi: "संतृप्त वसा अधिक: कभी-कभार ही उपयुक्त।" });
    if (item.fat != null && item.fat >= 15) notes.push({ en: "Energy-dense (high fat): portions add up quickly.", hi: "ऊर्जा-घनत्व अधिक (वसा): मात्रा जल्दी बढ़ जाती है।" });
    if (item.fiber != null && item.fiber < 2) notes.push({ en: "Low fibre: pair with fibre-rich foods to feel fuller.", hi: "फाइबर कम: भरपूर महसूस हेतु फाइबर-युक्त खाना साथ लें।" });
    return out.concat(notes);
  }

  function recoveryFor(item) {
    var nextKey = "general";
    if (item) {
      if (item.id === "softdrink" || item.id === "chocolate" || item.id === "icecream") nextKey = "sugary";
      else if (item.id === "chips" || item.id === "noodles") nextKey = "salty";
      else if (item.id === "samosa" || item.id === "pakora" || item.id === "pizza" || item.id === "burger") nextKey = "fried";
      if (item.sugar != null && item.sugar >= 15) nextKey = "sugary";
    }
    return {
      demo: true,
      source: "educational-content",
      item: item || null,
      concerns: concernsFor(item),
      nextMeal: NEXT_MEALS[nextKey],
      nextMealsList: [
        { en: "Vegetable sabzi + roti + a bowl of dal or curd.", hi: "सब्ज़ी + रोटी + एक कटोरी दाल या दही।" },
        { en: "Fruit and a handful of nuts, or chana.", hi: "फल और एक मुट्ठी मेवे, या चना।" },
        { en: "Salad or steamed vegetables with a whole grain.", hi: "सलाद या भाप में पकी सब्ज़ी के साथ साबुत अनाज।" }
      ],
      hydration: BASE_HYDRATION,
      movement: BASE_MOVEMENT,
      longTerm: LONG_TERM
    };
  }

  function getGuidance() {
    return Promise.resolve({ demo: true, source: "educational-content" });
  }

  window.healthGuidanceService = {
    goalGuidance: goalGuidance,
    recoveryFor: recoveryFor,
    concernsFor: concernsFor,
    getGuidance: getGuidance,
    GOAL_IDS: ["overall", "eating", "activity", "sleep"]
  };
})();

/* ==================== js/components/layout.js ==================== */
/* ==========================================================================
   AgriHealthAI — shared layout (navbar + footer + language switch)
   Injected on every page into #site-nav and #site-footer so navigation and
   the language toggle stay consistent. All text uses data-i18n keys.
   ========================================================================== */
(function () {
  "use strict";

  var PAGES = [
    { id: "home", href: "#home", key: "nav.home" },
    { id: "agriculture", href: "#agriculture", key: "nav.agriculture" },
    { id: "scanner", href: "#scanner", key: "nav.scanner" },
    { id: "health", href: "#health", key: "nav.health" },
    { id: "about", href: "#about", key: "nav.about" },
    { id: "contact", href: "#contact", key: "nav.contact" }
  ];

  var LOGO_SVG =
    '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M12 21c0-5 3-8 8-9-1 5-4 8-8 9Z" fill="currentColor" opacity=".85"/>' +
    '<path d="M12 21c0-5-3-8-8-9 1 5 4 8 8 9Z" fill="currentColor" opacity=".6"/>' +
    '<rect x="10.8" y="3" width="2.4" height="8" rx="1.2" fill="currentColor"/>' +
    '<rect x="8.4" y="5" width="7.2" height="2.4" rx="1.2" fill="currentColor"/>' +
    '</svg>';

  function currentPage() {
    var p = document.body.getAttribute("data-page");
    if (p) return p;
    var file = (location.pathname.split("/").pop() || "#home").toLowerCase();
    if (!file || file === "") file = "#home";
    var found = PAGES.filter(function (x) { return x.href === file; })[0];
    return found ? found.id : "home";
  }

  function renderNav(mount) {
    var page = currentPage();
    var links = PAGES.map(function (p) {
      var aria = p.id === page ? ' aria-current="page"' : "";
      return '<a class="nav-link" href="' + p.href + '" data-i18n="' + p.key + '"' + aria + "></a>";
    }).join("");

    var mobileLinks = PAGES.map(function (p) {
      var aria = p.id === page ? ' aria-current="page"' : "";
      return '<a class="nav-link" href="' + p.href + '" data-i18n="' + p.key + '"' + aria + "></a>";
    }).join("");

    mount.innerHTML =
      '<a class="skip-link" href="#main" data-i18n="a11y.skip"></a>' +
      '<header class="navbar">' +
        '<div class="container navbar__inner">' +
          '<a class="brand" href="#home" aria-label="AgriHealthAI">' +
            '<span class="brand__mark">' + LOGO_SVG + '</span>' +
            '<span><span class="brand__name">AgriHealthAI</span>' +
            '<span class="brand__sub" data-i18n="nav.brandSub"></span></span>' +
          '</a>' +
          '<nav class="nav-links" aria-label="Primary">' + links + '</nav>' +
          '<div class="nav-actions nav-actions--desktop">' +
            '<div class="lang-switch" role="group" aria-label="Language">' +
              '<button type="button" data-lang="en" data-i18n="nav.english"></button>' +
              '<button type="button" data-lang="hi" data-i18n="nav.hindi"></button>' +
            '</div>' +
            '<a class="btn btn--primary btn--sm" href="#agriculture" data-i18n="nav.getStarted"></a>' +
          '</div>' +
          '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-panel" data-i18n-attr="aria-label:nav.menu">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
          '</button>' +
        '</div>' +
      '</header>' +
      '<div class="mobile-panel" id="mobile-panel">' +
        '<nav aria-label="Mobile">' + mobileLinks + '</nav>' +
        '<div class="mobile-panel__group">' +
          '<div class="lang-switch" role="group" aria-label="Language">' +
            '<button type="button" data-lang="en" data-i18n="nav.english"></button>' +
            '<button type="button" data-lang="hi" data-i18n="nav.hindi"></button>' +
          '</div>' +
          '<a class="btn btn--primary" href="#agriculture" data-i18n="nav.getStarted"></a>' +
        '</div>' +
      '</div>';

    // language switch wiring
    var switches = mount.querySelectorAll(".lang-switch button");
    Array.prototype.forEach.call(switches, function (btn) {
      btn.addEventListener("click", function () {
        window.translationService.set(btn.getAttribute("data-lang"));
      });
    });

    // mobile toggle
    var toggle = mount.querySelector(".nav-toggle");
    var panel = mount.querySelector("#mobile-panel");
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("data-i18n-attr", "aria-label:" + (open ? "nav.close" : "nav.menu"));
      window.translationService.apply(toggle.parentNode ? mount : mount);
      document.body.style.overflow = open ? "hidden" : "";
    });
    // close panel on link click / resize
    Array.prototype.forEach.call(panel.querySelectorAll("a"), function (a) {
      a.addEventListener("click", function () {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 980 && panel.classList.contains("open")) {
        panel.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // reflect current language on the switch
    syncLang(mount);
  }

  function syncLang(mount) {
    var l = window.translationService.current();
    Array.prototype.forEach.call(mount.querySelectorAll(".lang-switch button"), function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === l ? "true" : "false");
    });
    Array.prototype.forEach.call(mount.querySelectorAll(".lang-switch"), function (g) {
      g.setAttribute("aria-label", window.translationService.t("nav.langLabel"));
    });
  }

  function renderFooter(mount) {
    mount.innerHTML =
      '<footer class="footer">' +
        '<div class="container">' +
          '<div class="footer__grid">' +
            '<div>' +
              '<a class="brand" href="#home">' +
                '<span class="brand__mark">' + LOGO_SVG + '</span>' +
                '<span><span class="brand__name">AgriHealthAI</span>' +
                '<span class="brand__sub" data-i18n="nav.brandSub"></span></span>' +
              '</a>' +
              '<p class="footer__tagline" style="margin-top:14px" data-i18n="footer.tagline"></p>' +
              '<p class="small" style="color:#9dc0aa" data-i18n="footer.about"></p>' +
            '</div>' +
            '<div>' +
              '<h4 data-i18n="footer.explore"></h4>' +
              '<ul>' +
                '<li><a href="#home" data-i18n="footer.homeLink"></a></li>' +
                '<li><a href="#agriculture" data-i18n="footer.agriLink"></a></li>' +
                '<li><a href="#scanner" data-i18n="footer.scannerLink"></a></li>' +
                '<li><a href="#health" data-i18n="footer.healthLink"></a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4 data-i18n="footer.learn"></h4>' +
              '<ul>' +
                '<li><a href="#about" data-i18n="footer.aboutLink"></a></li>' +
                '<li><a href="#contact" data-i18n="footer.contactLink"></a></li>' +
                '<li><a href="#privacy" data-i18n="footer.privacyLink"></a></li>' +
                '<li><a href="#about/disclaimers" data-i18n="footer.disclaimerLink"></a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4 data-i18n="footer.contact"></h4>' +
              '<p class="small" style="color:#9dc0aa" data-i18n="footer.contactPlaceholder"></p>' +
              '<p class="small" style="color:#9dc0aa" data-i18n="footer.disclaimerShort"></p>' +
            '</div>' +
          '</div>' +
          '<div class="footer__bottom">' +
            '<span data-i18n="footer.rights"></span>' +
            '<span class="footer__credit"><strong>Made by ABHIRAJ and Samir</strong></span>' +
            '<span>&copy; <span id="footer-year"></span> AgriHealthAI</span>' +
          '</div>' +
        '</div>' +
      '</footer>';

    var y = mount.querySelector("#footer-year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function init() {
    var navMount = document.getElementById("site-nav");
    var footMount = document.getElementById("site-footer");
    if (navMount) renderNav(navMount);
    if (footMount) renderFooter(footMount);
    window.translationService.apply(document);
  }

  // keep switches in sync on language change
  document.addEventListener("langchange", function () {
    var navMount = document.getElementById("site-nav");
    if (navMount) syncLang(navMount);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.layout = { init: init, PAGES: PAGES };
})();

/* ==================== js/pages/home.js ==================== */
/* Home page behaviour: title sync, scroll reveals. */
(function () {
  "use strict";

  function syncTitle() {
    document.title = window.translationService.t("meta.title");
  }

  syncTitle();
  window.translationService.on(syncTitle);
  document.addEventListener("langchange", syncTitle);

  window.UI.reveal(".reveal");
})();

/* ==================== js/pages/agriculture.js ==================== */
/* ==========================================================================
   AgriHealthAI — agriculture page
   Crop planning assistant: form -> recommendations -> cultivation plan.
   All recommendations use cropService (backend if available, else the
   transparent local demo engine over general reference ranges).
   ========================================================================== */
(function () {
  "use strict";

  var ref = window.AgriReference;
  var t = function (k, p) { return window.translationService.t(k, p); };
  var L = function (o) { return window.translationService.label(o); };
  var esc = window.UI.escape;

  var state = {
    inputs: null,
    result: null,
    comparing: [],
    plan: null,
    activeCropId: null
  };

  var dz = {
    file: null,
    previewUrl: null,
    result: null,
    cropId: "",
    selected: []
  };

  /* ---------- selects ---------- */
  function fillSelect(sel, list, selectedId, placeholder) {
    if (!sel) return;
    var html = "";
    if (placeholder != null) html += '<option value="">' + esc(placeholder) + "</option>";
    list.forEach(function (it) {
      html += '<option value="' + it.id + '"' + (it.id === selectedId ? " selected" : "") + ">" + esc(L(it)) + "</option>";
    });
    sel.innerHTML = html;
  }

  function captureForm() {
    var g = function (id) { var e = document.getElementById(id); return e ? e.value : ""; };
    var prefs = window.UI.qsa("#f-prefs input:checked").map(function (i) { return i.value; });
    return {
      state: g("f-state"),
      district: g("f-district"),
      landArea: g("f-land"),
      unit: g("f-unit"),
      season: g("f-season"),
      soil: g("f-soil"),
      water: g("f-water"),
      budget: g("f-budget"),
      preferences: prefs
    };
  }

  function buildForm(current) {
    current = current || {};
    fillSelect(document.getElementById("f-state"), ref.STATES, current.state, t("agri.statePlaceholder"));
    fillSelect(document.getElementById("f-unit"), ref.UNITS, current.unit || "acre", null);
    fillSelect(document.getElementById("f-season"), ref.SEASONS, current.season, t("agri.seasonPlaceholder"));
    fillSelect(document.getElementById("f-soil"), ref.SOILS, current.soil || "unknown", null);
    fillSelect(document.getElementById("f-water"), ref.WATER_LEVELS, current.water || "", t("agri.waterPlaceholder"));

    var prefWrap = document.getElementById("f-prefs");
    var chosen = current.preferences || [];
    prefWrap.innerHTML = ref.PREFERENCES.map(function (p) {
      var checked = chosen.indexOf(p.id) !== -1;
      return '<label class="radio-card' + (checked ? " checked" : "") + '">' +
        '<input type="checkbox" name="pref" value="' + p.id + '"' + (checked ? " checked" : "") + '>' +
        '<span>' + esc(L(p)) + "</span></label>";
    }).join("");
    Array.prototype.forEach.call(prefWrap.querySelectorAll("input"), function (inp) {
      inp.addEventListener("change", function () {
        inp.closest(".radio-card").classList.toggle("checked", inp.checked);
      });
    });

    if (current.district != null) document.getElementById("f-district").value = current.district;
    if (current.landArea != null) document.getElementById("f-land").value = current.landArea;
    if (current.budget != null) document.getElementById("f-budget").value = current.budget;
  }

  /* ---------- validation ---------- */
  function clearErrors() {
    window.UI.qsa(".field--error").forEach(function (f) { f.classList.remove("field--error"); });
  }
  function setError(name) {
    var f = document.querySelector('.field[data-field="' + name + '"]');
    if (f) f.classList.add("field--error");
  }
  function validate(data) {
    clearErrors();
    var ok = true;
    if (!data.state) { setError("state"); ok = false; }
    if (!data.landArea || isNaN(parseFloat(data.landArea)) || parseFloat(data.landArea) <= 0) { setError("landArea"); ok = false; }
    if (!data.unit) { setError("unit"); ok = false; }
    if (!data.season) { setError("season"); ok = false; }
    if (!data.water) { setError("water"); ok = false; }
    if (data.budget !== "" && (isNaN(parseFloat(data.budget)) || parseFloat(data.budget) < 0)) { setError("budget"); ok = false; }
    if (!data.preferences || data.preferences.length === 0) { setError("preferences"); ok = false; }
    if (!ok) {
      window.UI.toast(t("common.required"), "error");
      var firstErr = document.querySelector(".field--error");
      if (firstErr && firstErr.scrollIntoView) firstErr.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return ok;
  }

  /* ---------- rendering: crop cards ---------- */
  function pct(n) { return Math.round(n) + "%"; }

  function cropCard(crop, index) {
    var fin = crop.financials;
    var isComparing = state.comparing.indexOf(crop.id) !== -1;
    var reasons = (crop.reasons || []).slice(0, 4).map(function (r) {
      var cls = (r.tag === "soilWarn" || r.tag === "waterWarn" || r.tag === "budgetWarn") ? "badge badge--warn" : "badge";
      return '<span class="' + cls + '">' + esc(L(r.text)) + "</span>";
    }).join("");

    var riskBadges = (crop.risks[window.translationService.current()] || crop.risks.en || []).map(function (r) {
      return '<span class="badge badge--danger">' + esc(r) + "</span>";
    }).join("");

    var yieldRange = window.UI.formatRange(fin.yieldTonnes.min, fin.yieldTonnes.max, function (v) { return window.UI.formatNumber(v, 1); }) + " " + t("units.tonnes");

    return '' +
      '<article class="card crop-card" data-crop="' + crop.id + '">' +
        '<div class="crop-card__media">' +
          '<img src="' + esc(crop.image) + '" alt="' + esc(L(crop.name)) + '" loading="lazy">' +
          '<span class="crop-rank">#' + (index + 1) + '</span>' +
          '<span class="crop-score">' + esc(t("agri.matchScore", { score: crop.matchScore })) + '</span>' +
        '</div>' +
        '<div class="crop-card__body">' +
          '<h3><span class="crop-card__emoji" aria-hidden="true">' + crop.emoji + '</span> ' + esc(L(crop.name)) + '</h3>' +
          '<p class="small muted">' + esc(L(crop.desc)) + '</p>' +
          '<div class="badge-row" style="margin-bottom:6px">' + reasons + '</div>' +
          '<div class="crop-stats">' +
            '<div class="mini"><span>' + esc(t("agri.landArea")) + '</span><strong>' + fin.areaAcres + ' ' + esc(t("units.acres")) + '</strong></div>' +
            '<div class="mini"><span>' + esc(t("agri.waterNeed")) + '</span><strong>' + esc(L({ en: waterLabel(crop.waterNeed, "en"), hi: waterLabel(crop.waterNeed, "hi") })) + '</strong></div>' +
            '<div class="mini"><span>' + esc(t("agri.duration")) + '</span><strong>' + crop.durationDays[0] + '–' + crop.durationDays[1] + ' ' + esc(t("units.days")) + '</strong></div>' +
            '<div class="mini"><span>' + esc(t("agri.yieldRange")) + '</span><strong>' + esc(yieldRange) + '</strong></div>' +
            '<div class="mini"><span>' + esc(t("agri.inputCost")) + '</span><strong>' + esc(window.UI.formatRange(fin.totalCost.min, fin.totalCost.max, window.UI.formatINR)) + '</strong></div>' +
            '<div class="mini"><span>' + esc(t("agri.labour")) + '</span><strong>' + esc(L({ en: levelEn(crop.labour), hi: levelHi(crop.labour) })) + '</strong></div>' +
          '</div>' +
          '<div class="profit-line"><b>' + esc(t("agri.netProfit")) + ':</b> ' +
            esc(window.UI.formatRange(fin.netProfit.min, fin.netProfit.max, window.UI.formatINR)) + '</div>' +
          '<details class="small">' +
            '<summary style="cursor:pointer;font-weight:600;color:var(--green-800)">' + esc(t("agri.showDetails")) + '</summary>' +
            '<div style="margin-top:10px">' +
              '<div class="mini" style="display:flex;justify-content:space-between;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:8px 11px;margin-bottom:6px"><span>' + esc(t("agri.grossRevenue")) + '</span><strong>' + esc(window.UI.formatRange(fin.grossRevenue.min, fin.grossRevenue.max, window.UI.formatINR)) + '</strong></div>' +
              '<div class="mini" style="display:flex;justify-content:space-between;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:8px 11px;margin-bottom:6px"><span>' + esc(t("agri.totalCost")) + '</span><strong>' + esc(window.UI.formatRange(fin.totalCost.min, fin.totalCost.max, window.UI.formatINR)) + '</strong></div>' +
              '<div class="mini" style="display:flex;justify-content:space-between;background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:8px 11px;margin-bottom:6px"><span>' + esc(t("agri.netProfit")) + '</span><strong>' + esc(window.UI.formatRange(fin.netProfit.min, fin.netProfit.max, window.UI.formatINR)) + '</strong></div>' +
              '<p class="muted" style="margin:8px 0 0">' + esc(t("agri.assumptionsText")) + '</p>' +
            '</div>' +
          '</details>' +
          '<div class="badge-row" style="margin:12px 0 4px">' +
            '<span class="badge badge--muted">' + esc(t("agri.risks")) + '</span>' + riskBadges +
          '</div>' +
          '<div class="crop-card__actions">' +
            '<button class="btn btn--primary btn--sm" type="button" data-act="select">' + esc(t("agri.selectCrop")) + '</button>' +
            '<button class="btn ' + (isComparing ? "btn--warn" : "btn--secondary") + ' btn--sm" type="button" data-act="compare">' +
              esc(isComparing ? t("agri.removeCompare") : t("agri.addCompare")) + '</button>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function waterLabel(id, lang) {
    var w = ref.WATER_LEVELS.filter(function (x) { return x.id === id; })[0];
    if (!w) return id;
    var s = (lang === "hi" ? w.hi : w.en).split("—")[0].trim();
    return s;
  }
  function levelEn(id) { return id === "low" ? "Low" : id === "high" ? "High" : "Medium"; }
  function levelHi(id) { return id === "low" ? "कम" : id === "high" ? "अधिक" : "मध्यम"; }

  function renderResults(result) {
    state.result = result;
    var section = document.getElementById("results-section");
    var grid = document.getElementById("crops-grid");
    var count = document.getElementById("results-count");
    section.classList.remove("hidden");

    if (!result || !result.crops || !result.crops.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>' +
        '<h3>' + esc(t("agri.noResultsTitle")) + '</h3><p>' + esc(t("agri.noResultsText")) + '</p></div>';
      count.textContent = "";
      renderProfitChart(null);
      return;
    }
    count.textContent = t("agri.resultsCount", { count: result.crops.length });
    grid.innerHTML = result.crops.map(cropCard).join("");
    renderProfitChart(result);
  }

  /* ---------- charts ---------- */
  var charts = window.AgriCharts;

  function renderProfitChart(result) {
    var host = document.getElementById("profit-chart");
    if (!host) return;
    if (!result || !result.crops || !result.crops.length) {
      host.classList.add("hidden");
      host.innerHTML = "";
      return;
    }
    host.classList.remove("hidden");
    var rows = result.crops.slice(0, 8).map(function (c) {
      return {
        label: L(c.name),
        min: c.financials.netProfit.min,
        max: c.financials.netProfit.max
      };
    });
    host.innerHTML =
      '<div class="chart-card__head">' +
        '<div><h3>' + esc(t("charts.profitTitle")) + '</h3>' +
        '<p class="small muted">' + esc(t("charts.profitSub")) + '</p></div>' +
        '<div class="chart-keys">' +
          '<span class="chart-key"><i class="legend-swatch"></i>' + esc(t("charts.rangeLow")) + " \u2013 " + esc(t("charts.rangeHigh")) + '</span>' +
          '<span class="chart-key"><i class="legend-pin"></i>' + esc(t("charts.rangeMid")) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="chart-wrap">' + charts.rangeBarChart({
        rows: rows,
        width: 760,
        labelWidth: 160,
        rightW: 150,
        ariaLabel: t("charts.chartAriaProfit"),
        valueFmt: charts.compactINR
      }) + '</div>' +
      '<p class="small muted" style="margin:10px 0 0">' + esc(t("agri.assumptionsText")) + '</p>';
  }

  function renderCostChart(f) {
    var host = document.getElementById("plan-cost-chart");
    if (!host) return;
    var cb = f.costBreakdown || {};
    function mid(x) { return x ? (x.min + x.max) / 2 : 0; }
    var segs = [
      { label: t("charts.costSeed"), value: mid(cb.seed), color: charts.colors.greenDark },
      { label: t("charts.costFertiliser"), value: mid(cb.fertiliser), color: charts.colors.green },
      { label: t("charts.costLabour"), value: mid(cb.labour), color: charts.colors.amber },
      { label: t("charts.costIrrigation"), value: mid(cb.irrigation), color: charts.colors.greenLight }
    ].map(function (s) {
      s.valueLabel = window.UI.formatINR(Math.round(s.value));
      return s;
    });
    var total = segs.reduce(function (a, s) { return a + s.value; }, 0);
    host.innerHTML =
      '<div class="chart-card__head"><div><h3>' + esc(t("charts.costTitle")) + '</h3>' +
      '<p class="small muted">' + esc(t("charts.costSub")) + '</p></div></div>' +
      '<div class="chart-wrap chart-wrap--fit">' + charts.donut({
        segments: segs,
        totalLabel: t("charts.costTotal"),
        totalValue: charts.compactINR(total),
        ariaLabel: t("charts.chartAriaCost")
      }) + '</div>';
  }

  function renderOfficialData() {
    var d = ref.OFFICIAL_AGRI;
    var kpiHost = document.getElementById("official-kpis");
    if (!d || !kpiHost) return;
    var h = d.headline;

    kpiHost.innerHTML = [
      { label: t("charts.kpiFoodgrain"), value: window.UI.formatNumber(h.foodgrain2024_25, 2), unit: "Mt", sub: t("charts.millionTonnes"), primary: true },
      { label: t("charts.kpiGrowth"), value: "+" + window.UI.formatNumber(h.growthPct, 2), unit: "%", sub: "2023-24 \u2192 2024-25" },
      { label: t("charts.kpiRice"), value: window.UI.formatNumber(h.rice2023_24, 2), unit: "Mt", sub: t("charts.millionTonnes") },
      { label: t("charts.kpiWheat"), value: window.UI.formatNumber(h.wheat2023_24, 2), unit: "Mt", sub: t("charts.millionTonnes") },
      { label: t("charts.kpiOilseeds"), value: window.UI.formatNumber(h.oilseeds2023_24, 2), unit: "Mt", sub: t("charts.millionTonnes") }
    ].map(function (k) {
      return '<div class="kpi' + (k.primary ? " kpi--primary" : "") + '">' +
        '<span class="kpi__label">' + esc(k.label) + '</span>' +
        '<strong class="kpi__value">' + esc(k.value) + '<small>' + esc(k.unit) + '</small></strong>' +
        '<span class="kpi__sub">' + esc(k.sub) + '</span></div>';
    }).join("");

    var trend = document.getElementById("official-trend");
    if (trend) {
      var points = d.trend.map(function (p) {
        return { x: parseInt(String(p.year).slice(0, 4), 10), y: p.value, label: p.year };
      });
      trend.innerHTML =
        '<div class="chart-card__head"><div><h3>' + esc(t("charts.trendTitle")) + '</h3>' +
        '<p class="small muted">' + esc(t("charts.trendSub")) + '</p></div></div>' +
        '<div class="chart-wrap">' + charts.lineChart({
          points: points,
          width: 760,
          height: 300,
          unit: t("charts.millionTonnes"),
          yFmt: function (v) { return window.UI.formatNumber(v, 0); },
          ariaLabel: t("charts.chartAriaTrend")
        }) + '</div>';
    }

    var mix = document.getElementById("official-mix");
    if (mix) {
      mix.innerHTML =
        '<div class="chart-card__head"><div><h3>' + esc(t("charts.mixTitle")) + '</h3>' +
        '<p class="small muted">' + esc(t("charts.mixSub")) + '</p></div></div>' +
        '<div class="chart-wrap">' + charts.barChart({
          data: d.cropMix2023_24.map(function (m) { return { label: L(m.label), value: m.value }; }),
          width: 720,
          labelWidth: 150,
          rightW: 88,
          unit: t("charts.lakhTonnes"),
          valueFmt: function (v) { return window.UI.formatNumber(v, 0); },
          ariaLabel: t("charts.chartAriaMix")
        }) + '</div>';
    }

    var sources = document.getElementById("official-sources");
    if (sources) {
      sources.innerHTML =
        '<div class="data-source-card__head">' +
          '<h3>' + esc(t("charts.sources")) + '</h3>' +
          '<span class="badge badge--muted">' + esc(t("charts.updated")) + ': ' + esc(d.updated) + '</span>' +
        '</div>' +
        '<ul class="source-list">' + d.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(L(s.label)) + '</a></li>';
        }).join("") + '</ul>' +
        '<p class="small muted" style="margin:10px 0 0">' + esc(t("charts.sourceNote")) + ' ' + esc(t("charts.dataDisclaimer")) + '</p>';
    }
  }

  /* ---------- compare ---------- */
  function updateCompareBar() {
    var bar = document.getElementById("compare-bar");
    var cnt = document.getElementById("compare-count");
    if (state.comparing.length > 0) {
      bar.classList.add("show");
      cnt.textContent = t("common.compareSelected") + ": " + state.comparing.length;
    } else {
      bar.classList.remove("show");
    }
  }

  function openCompare() {
    if (!state.result) return;
    var crops = state.result.crops.filter(function (c) { return state.comparing.indexOf(c.id) !== -1; });
    if (crops.length < 2) { window.UI.toast(t("agri.comparisonSub", { count: crops.length }), "info"); }

    // build union of metric labels
    function row(label, fn) {
      return "<tr><th>" + esc(label) + "</th>" + crops.map(function (c) { return "<td>" + fn(c) + "</td>"; }).join("") + "</tr>";
    }
    var head = "<tr><th>" + esc(t("agri.metric")) + "</th>" + crops.map(function (c) {
      return "<td><strong>" + esc(L(c.name)) + "</strong></td>";
    }).join("") + "</tr>";

    var body = head +
      row(t("agri.duration"), function (c) { return c.durationDays[0] + "–" + c.durationDays[1] + " " + esc(t("units.days")); }) +
      row(t("agri.waterNeed"), function (c) { return esc(L({ en: waterLabel(c.waterNeed, "en"), hi: waterLabel(c.waterNeed, "hi") })); }) +
      row(t("agri.labour"), function (c) { return esc(L({ en: levelEn(c.labour), hi: levelHi(c.labour) })); }) +
      row(t("agri.yieldRange"), function (c) { return esc(window.UI.formatRange(c.financials.yieldTonnes.min, c.financials.yieldTonnes.max, function (v) { return window.UI.formatNumber(v, 1); }) + " " + t("units.tonnes")); }) +
      row(t("agri.grossRevenue"), function (c) { return esc(window.UI.formatRange(c.financials.grossRevenue.min, c.financials.grossRevenue.max, window.UI.formatINR)); }) +
      row(t("agri.totalCost"), function (c) { return esc(window.UI.formatRange(c.financials.totalCost.min, c.financials.totalCost.max, window.UI.formatINR)); }) +
      row(t("agri.netProfit"), function (c) { return "<strong>" + esc(window.UI.formatRange(c.financials.netProfit.min, c.financials.netProfit.max, window.UI.formatINR)) + "</strong>"; }) +
      row(t("agri.score"), function (c) { return esc(c.matchScore + "%"); });

    window.UI.openModal(
      '<h3>' + esc(t("agri.comparisonTitle")) + '</h3>' +
      '<p class="small muted">' + esc(t("agri.comparisonSub", { count: crops.length })) + '</p>' +
      '<div class="table-wrap"><table>' + body + '</table></div>' +
      '<p class="small muted" style="margin-top:12px">' + esc(t("agri.assumptionsText")) + '</p>' +
      '<div class="modal__actions"><button class="btn btn--secondary" data-modal-close>' + esc(t("common.close")) + '</button></div>',
      { wide: true }
    );
  }

  /* ---------- plan ---------- */
  function renderPlan(plan) {
    state.plan = plan;
    var section = document.getElementById("plan-section");
    var content = document.getElementById("plan-content");
    section.classList.remove("hidden");

    var f = plan.financials;
    var c = plan.crop;
    var cur = window.translationService.current();

    function guideBlock(titleKey, obj) {
      return '<div class="card"><div class="card__body"><h3>' + esc(t(titleKey)) + '</h3><p class="muted" style="margin:0">' + esc(L(obj)) + '</p></div></div>';
    }

    var stages = plan.guide.stages.map(function (s, i) {
      return '<div class="tl-item"><span class="when">' + esc(t("agri.dayRange", { from: s.from, to: s.to })) + '</span><h4>' + esc(L(s.name)) + '</h4></div>';
    }).join("");

    var tasks = plan.tasks.map(function (task, i) {
      var stageLabel = "";
      return '<details class="acc"><summary class="acc__head">' +
        '<span class="badge">' + esc(t("agri.dayRange", { from: task.from, to: task.to })) + '</span>' +
        '<span>' + esc(L(task.what)) + '</span>' +
        '<svg class="chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>' +
        '</summary><div class="acc__body"><dl>' +
          '<dt>' + esc(t("agri.taskWhat")) + '</dt><dd>' + esc(L(task.what)) + '</dd>' +
          '<dt>' + esc(t("agri.taskWhen")) + '</dt><dd>' + esc(t("agri.dayRange", { from: task.from, to: task.to })) + '</dd>' +
          '<dt>' + esc(t("agri.taskHow")) + '</dt><dd>' + esc(L(task.how)) + '</dd>' +
          '<dt>' + esc(t("agri.taskWhy")) + '</dt><dd>' + esc(L(task.why)) + '</dd>' +
          '<dt>' + esc(t("agri.taskAvoid")) + '</dt><dd>' + esc(L(task.avoid)) + '</dd>' +
        '</dl></div></details>';
    }).join("");

    content.innerHTML = '' +
      '<div class="plan-printable">' +
        '<div class="card" style="overflow:hidden;margin-bottom:26px"><div class="grid" style="grid-template-columns:.9fr 1.1fr;gap:0">' +
          '<img src="' + esc(c.image) + '" alt="' + esc(L(c.name)) + '" style="height:100%;min-height:220px;object-fit:cover">' +
          '<div class="card__body" style="padding:26px">' +
            '<div class="badge-row"><span class="badge badge--warn">' + esc(t("common.demoBadge")) + '</span></div>' +
            '<h2 style="margin-top:10px">' + c.emoji + ' ' + esc(L(c.name)) + '</h2>' +
            '<p class="muted">' + esc(L(c.desc)) + '</p>' +
            '<div class="badge-row">' +
              '<span class="badge badge--info">' + esc(t("agri.duration")) + ": " + c.durationDays[0] + '–' + c.durationDays[1] + " " + esc(t("units.days")) + '</span>' +
              '<span class="badge badge--info">' + esc(t("agri.waterNeed")) + ": " + esc(L({ en: waterLabel(c.waterNeed, "en"), hi: waterLabel(c.waterNeed, "hi") })) + '</span>' +
              '<span class="badge badge--info">pH: ' + c.idealPh[0] + '–' + c.idealPh[1] + '</span>' +
            '</div>' +
            '<p class="small muted" style="margin-top:12px">' + esc(L(plan.note)) + '</p>' +
          '</div>' +
        '</div></div>' +

        '<div class="section-head left" style="margin-bottom:14px"><h3>' + esc(t("agri.netProfit")) + '</h3></div>' +
        '<div class="grid grid--3" style="margin-bottom:30px">' +
          '<div class="stat"><span class="stat__label">' + esc(t("agri.grossRevenue")) + '</span><span class="stat__value">' + esc(window.UI.formatRange(f.grossRevenue.min, f.grossRevenue.max, window.UI.formatINR)) + '</span></div>' +
          '<div class="stat"><span class="stat__label">' + esc(t("agri.totalCost")) + '</span><span class="stat__value">' + esc(window.UI.formatRange(f.totalCost.min, f.totalCost.max, window.UI.formatINR)) + '</span></div>' +
          '<div class="stat"><span class="stat__label">' + esc(t("agri.netProfit")) + '</span><span class="stat__value">' + esc(window.UI.formatRange(f.netProfit.min, f.netProfit.max, window.UI.formatINR)) + '</span></div>' +
        '</div>' +
        '<div class="chart-card" id="plan-cost-chart" style="margin-bottom:30px"></div>' +
        '<div class="notice notice--info" style="margin-bottom:30px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>' + esc(t("agri.assumptionsText")) + '</span></div>' +

        '<div class="section-head left" style="margin-bottom:14px"><h3>' + esc(t("agri.planTitle")) + '</h3><p class="muted">' + esc(t("agri.planIntro")) + '</p></div>' +
        '<div class="grid grid--2" style="margin-bottom:30px">' +
          guideBlock("agri.sectionLandPrep", plan.guide.landPrep) +
          guideBlock("agri.sectionSeed", plan.guide.seed) +
          guideBlock("agri.sectionSowing", plan.guide.sowing) +
          guideBlock("agri.sectionSpacing", plan.guide.spacing) +
          guideBlock("agri.sectionIrrigation", plan.guide.irrigation) +
          guideBlock("agri.sectionFertiliser", plan.guide.fertiliser) +
          guideBlock("agri.sectionWeed", plan.guide.weed) +
          guideBlock("agri.sectionPest", plan.guide.pest) +
          guideBlock("agri.sectionHarvest", plan.guide.harvest) +
          guideBlock("agri.sectionStorage", plan.guide.storage) +
        '</div>' +

        '<div class="section-head left" style="margin-bottom:14px"><h3>' + esc(t("agri.sectionStages")) + '</h3></div>' +
        '<div class="timeline" style="margin-bottom:30px">' + stages + '</div>' +

        '<div class="section-head left" style="margin-bottom:14px"><h3>' + esc(t("agri.calendarTitle")) + '</h3><p class="muted">' + esc(t("agri.calendarSub")) + '</p></div>' +
        '<div>' + tasks + '</div>' +

        '<div class="notice" style="margin-top:24px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"/></svg><span>' + esc(t("agri.expertNote")) + '</span></div>' +
      '</div>' +

      '<div class="no-print" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px">' +
        '<button class="btn btn--primary" type="button" id="plan-print">' + esc(t("agri.printPlan")) + '</button>' +
        '<button class="btn btn--secondary" type="button" id="plan-download">' + esc(t("agri.downloadPlan")) + '</button>' +
        '<button class="btn btn--secondary" type="button" id="plan-save">' + esc(t("agri.savePlan")) + '</button>' +
        '<button class="btn btn--secondary" type="button" id="plan-edit">' + esc(t("agri.editInputs")) + '</button>' +
        '<button class="btn btn--ghost" type="button" id="plan-startover">' + esc(t("agri.startOver")) + '</button>' +
      '</div>';

    // wire plan actions
    document.getElementById("plan-print").addEventListener("click", function () { window.print(); });
    document.getElementById("plan-download").addEventListener("click", function () { downloadPlan(plan); });
    document.getElementById("plan-save").addEventListener("click", function () {
      window.storageService.setJSON("savedPlan", { cropId: c.id, input: state.inputs, savedAt: Date.now() });
      window.UI.toast(t("agri.savedPlan"), "success");
    });
    document.getElementById("plan-edit").addEventListener("click", function () {
      document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("plan-startover").addEventListener("click", startOver);

    renderCostChart(f);
    section.scrollIntoView({ behavior: "smooth" });
  }

  function downloadPlan(plan) {
    var lines = [];
    var c = plan.crop;
    lines.push("AgriHealthAI — " + t("agri.planTitle"));
    lines.push("CROP: " + L(c.name));
    lines.push("(DEMO / ESTIMATE — confirm with local KVK / agriculture officer)");
    lines.push("");
    lines.push(t("agri.duration") + ": " + c.durationDays[0] + "-" + c.durationDays[1] + " " + t("units.days"));
    lines.push(t("agri.waterNeed") + ": " + waterLabel(c.waterNeed, window.translationService.current()));
    lines.push("Ideal pH: " + c.idealPh[0] + "-" + c.idealPh[1]);
    lines.push("");
    lines.push(t("agri.grossRevenue") + ": " + window.UI.formatRange(plan.financials.grossRevenue.min, plan.financials.grossRevenue.max, window.UI.formatINR));
    lines.push(t("agri.totalCost") + ": " + window.UI.formatRange(plan.financials.totalCost.min, plan.financials.totalCost.max, window.UI.formatINR));
    lines.push(t("agri.netProfit") + ": " + window.UI.formatRange(plan.financials.netProfit.min, plan.financials.netProfit.max, window.UI.formatINR));
    lines.push("");
    [["agri.sectionLandPrep", plan.guide.landPrep], ["agri.sectionSeed", plan.guide.seed], ["agri.sectionSowing", plan.guide.sowing],
     ["agri.sectionSpacing", plan.guide.spacing], ["agri.sectionIrrigation", plan.guide.irrigation], ["agri.sectionFertiliser", plan.guide.fertiliser],
     ["agri.sectionWeed", plan.guide.weed], ["agri.sectionPest", plan.guide.pest], ["agri.sectionHarvest", plan.guide.harvest], ["agri.sectionStorage", plan.guide.storage]
    ].forEach(function (pair) {
      lines.push("== " + t(pair[0]) + " ==");
      lines.push(L(pair[1]));
      lines.push("");
    });
    lines.push("== " + t("agri.sectionStages") + " ==");
    plan.guide.stages.forEach(function (s) { lines.push("  " + t("agri.dayRange", { from: s.from, to: s.to }) + "  " + L(s.name)); });
    lines.push("");
    lines.push("== " + t("agri.calendarTitle") + " ==");
    plan.tasks.forEach(function (task) {
      lines.push("- " + L(task.what) + "  (" + t("agri.dayRange", { from: task.from, to: task.to }) + ")");
      lines.push("   " + t("agri.taskHow") + ": " + L(task.how));
      lines.push("   " + t("agri.taskWhy") + ": " + L(task.why));
      lines.push("   " + t("agri.taskAvoid") + ": " + L(task.avoid));
    });
    lines.push("");
    lines.push(t("agri.expertNote"));
    window.UI.download("agrihealthai-" + c.id + "-plan.txt", lines.join("\r\n"));
  }

  /* ---------- crop disease screening ---------- */
  var dzState = dz;
  var dzService = window.cropDiseaseService;

  function fillDiseaseCrops() {
    var sel = document.getElementById("d-crop");
    if (!sel) return;
    var html = '<option value="">' + esc(t("disease.cropPlaceholder")) + "</option>";
    ref.CROPS.forEach(function (c) {
      html += '<option value="' + c.id + '"' + (c.id === dzState.cropId ? " selected" : "") + ">" + esc(L(c.name)) + "</option>";
    });
    sel.innerHTML = html;
  }

  function setDzFile(file) {
    if (!file) return;
    var input = document.getElementById("d-file");
    if (dzService.TYPES.indexOf(file.type) === -1) {
      if (input) input.value = "";
      window.UI.toast(t("disease.errorType"), "error");
      return;
    }
    if (file.size > dzService.MAX_BYTES) {
      if (input) input.value = "";
      window.UI.toast(t("disease.errorSize"), "error");
      return;
    }
    dzState.file = file;
    if (dzState.previewUrl) URL.revokeObjectURL(dzState.previewUrl);
    dzState.previewUrl = URL.createObjectURL(file);
    var img = document.getElementById("d-preview-img");
    img.src = dzState.previewUrl;
    img.alt = t("disease.choosePhoto") + ": " + file.name;
    document.getElementById("d-upload-area").classList.add("hidden");
    document.getElementById("d-preview-area").classList.remove("hidden");
    document.getElementById("d-loading").classList.add("hidden");
    document.getElementById("d-result").classList.add("hidden");
    document.getElementById("d-empty").classList.remove("hidden");
    dzState.result = null;
    dzState.selected = [];
  }

  function clearDzFile() {
    dzState.file = null;
    if (dzState.previewUrl) URL.revokeObjectURL(dzState.previewUrl);
    dzState.previewUrl = null;
    dzState.result = null;
    dzState.selected = [];
    var input = document.getElementById("d-file");
    if (input) input.value = "";
    var img = document.getElementById("d-preview-img");
    if (img) img.removeAttribute("src");
    document.getElementById("d-preview-area").classList.add("hidden");
    document.getElementById("d-upload-area").classList.remove("hidden");
    document.getElementById("d-result").classList.add("hidden");
    document.getElementById("d-empty").classList.remove("hidden");
    document.getElementById("d-loading").classList.add("hidden");
  }

  function analyseDz() {
    if (!dzState.file) { window.UI.toast(t("disease.noPhoto"), "error"); return; }
    var sel = document.getElementById("d-crop");
    var cropId = sel ? sel.value : "";
    if (!cropId) {
      window.UI.toast(t("disease.noCrop"), "error");
      if (sel) { sel.focus(); sel.scrollIntoView({ behavior: "smooth", block: "center" }); }
      return;
    }
    dzState.cropId = cropId;
    document.getElementById("d-loading").classList.remove("hidden");
    document.getElementById("d-empty").classList.add("hidden");
    document.getElementById("d-result").classList.add("hidden");

    dzService.analyze(dzState.file, cropId).then(function (res) {
      dzState.result = res;
      dzState.selected = [];
      document.getElementById("d-loading").classList.add("hidden");
      renderDiseaseResult();
    }).catch(function (err) {
      document.getElementById("d-loading").classList.add("hidden");
      document.getElementById("d-empty").classList.remove("hidden");
      var key = err && err.message === "invalid-type" ? "disease.errorType"
        : err && err.message === "too-large" ? "disease.errorSize" : "disease.errorAnalysis";
      window.UI.toast(t(key), "error");
    });
  }

  function kindKey(kind) {
    var map = { fungal: "Fungal", bacterial: "Bacterial", viral: "Viral", insect: "Insect", disorder: "Disorder" };
    return "disease.kind" + (map[kind] || "Disorder");
  }
  function qualityKey(q) {
    var map = { good: "Good", lowLight: "LowLight", washed: "Washed", blurry: "Blurry", unknown: "Unknown" };
    return "disease.quality" + (map[q] || "Unknown");
  }

  function renderDiseaseResult() {
    var box = document.getElementById("d-result");
    var empty = document.getElementById("d-empty");
    if (!box || !dzState.result) return;
    var res = dzState.result;
    var crop = ref.CROPS.filter(function (c) { return c.id === res.cropId; })[0];
    var cropName = crop ? L(crop.name) : res.cropId;
    empty.classList.add("hidden");
    box.classList.remove("hidden");

    var stats = res.imageStats;
    var possible = (res.possible || []).map(function (d) {
      return '<div class="possible-item">' +
        '<span class="kind kind--' + d.kind + '">' + esc(t(kindKey(d.kind))) + '</span>' +
        '<div><strong>' + esc(L(d.name)) + '</strong>' +
        '<p class="small muted" style="margin:2px 0 0">' + esc(L(d.sign)) + '</p></div>' +
      '</div>';
    }).join("");

    var symptoms = (res.symptoms || []).map(function (s) {
      var checked = dzState.selected.indexOf(s.key) !== -1;
      return '<label class="check-item' + (checked ? " checked" : "") + '">' +
        '<input type="checkbox" data-sym="' + esc(s.key) + '"' + (checked ? " checked" : "") + ">" +
        "<span>" + esc(L(s.label)) + "</span></label>";
    }).join("");

    box.innerHTML =
      '<div class="card"><div class="card__body">' +
        '<div class="badge-row" style="margin-bottom:10px">' +
          '<span class="badge badge--warn">' + esc(t("disease.demoBadge")) + '</span>' +
          '<span class="badge badge--info">' + esc(cropName) + '</span>' +
          '<span class="badge badge--muted">' + esc(t("disease.photoQuality")) + ": " + esc(t(qualityKey(res.quality))) + '</span>' +
        '</div>' +
        '<h3>' + esc(t("disease.visualTitle")) + '</h3>' +
        '<p class="small muted">' + esc(L(res.note)) + '</p>' +
        (stats ? '<p class="small muted" style="margin:14px 0 6px">' + esc(t("disease.measured")) + '</p>' +
          '<div class="photo-stats" style="margin-bottom:14px">' +
          '<div class="photo-stat"><span>' + esc(t("disease.brightness")) + '</span><strong>' + stats.brightness + '<small>%</small></strong></div>' +
          '<div class="photo-stat"><span>' + esc(t("disease.contrast")) + '</span><strong>' + stats.contrast + '<small>%</small></strong></div>' +
          '<div class="photo-stat"><span>' + esc(t("disease.greenArea")) + '</span><strong>' + stats.greenPct + '<small>%</small></strong></div>' +
          '<div class="photo-stat"><span>' + esc(t("disease.warmArea")) + '</span><strong>' + stats.warmPct + '<small>%</small></strong></div>' +
        '</div>' : "") +
        '<h4 style="margin-top:16px">' + esc(t("disease.possibleTitle", { crop: cropName })) + '</h4>' +
        '<p class="small muted">' + esc(t("disease.possibleIntro")) + '</p>' +
        '<div class="possible-list">' + possible + '</div>' +
        '<p class="small dz-consult">' + esc(t("disease.consult")) + '</p>' +
      '</div></div>' +

      '<div class="card" style="margin-top:18px"><div class="card__body">' +
        '<h4>' + esc(t("disease.symptomTitle")) + '</h4>' +
        '<p class="small muted">' + esc(t("disease.symptomIntro")) + '</p>' +
        '<div class="symptom-grid">' + symptoms + '</div>' +
        '<button class="btn btn--secondary btn--sm" type="button" id="d-reset-symptoms">' + esc(t("disease.resetSymptoms")) + '</button>' +
      '</div></div>' +

      '<div id="d-rank"></div>' +
      '<p class="small muted" style="margin-top:14px">' + esc(t("disease.disclaimer")) + '</p>';

    renderDiseaseRank();
  }

  function renderDiseaseRank() {
    var host = document.getElementById("d-rank");
    if (!host || !dzState.result) return;
    var ranked = dzService.rank(dzState.cropId, dzState.selected);
    var any = dzState.selected.length > 0;

    host.innerHTML =
      '<div class="section-head left" style="margin:24px 0 12px"><h4>' + esc(t("disease.rankTitle")) + '</h4>' +
        (any ? "" : '<p class="small muted">' + esc(t("disease.rankNone")) + '</p>') +
      '</div>' +
      ranked.map(function (r) {
        var d = r.disease;
        var top = r.score != null && r.score >= 50;
        var pill = r.score != null
          ? '<span class="match-pill' + (top ? " match-pill--top" : "") + '">' + esc(t("disease.match", { score: r.score })) + '</span>'
          : '<span class="match-pill match-pill--muted">' + esc(t("disease.common")) + '</span>';
        var matched = r.matched.length
          ? '<p class="small muted" style="margin:0 0 10px">' + r.matched.map(function (s) { return esc(L(s)); }).join(" \u00B7 ") + '</p>'
          : "";
        return '<article class="disease-card' + (top ? " disease-card--top" : "") + '">' +
          '<div class="disease-card__head">' +
            '<span class="kind kind--' + d.kind + '">' + esc(t(kindKey(d.kind))) + '</span>' +
            '<h4>' + esc(L(d.name)) + '</h4>' + pill +
          '</div>' +
          '<p class="small" style="margin:0 0 6px"><strong>' + esc(t("disease.signs")) + ':</strong> ' + esc(L(d.sign)) + '</p>' +
          matched +
          '<details class="acc"' + (top ? " open" : "") + '><summary class="acc__head">' + esc(t("disease.recovery")) +
            '<svg class="chev" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>' +
          '</summary><div class="acc__body">' +
            '<ol class="step-list">' + d.recovery.map(function (s) { return "<li>" + esc(L(s)) + "</li>"; }).join("") + '</ol>' +
            '<p class="small" style="margin:10px 0 4px"><strong>' + esc(t("disease.prevention")) + '</strong></p>' +
            '<ul class="small muted" style="margin:0;padding-left:18px">' + d.prevention.map(function (s) { return "<li>" + esc(L(s)) + "</li>"; }).join("") + '</ul>' +
          '</div></details>' +
        '</article>';
      }).join("");
  }

  function initDisease() {
    var drop = document.getElementById("d-dropzone");
    var input = document.getElementById("d-file");
    if (!drop || !input) return;

    function openPicker() { input.click(); }
    drop.addEventListener("click", openPicker);
    drop.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPicker(); }
    });
    ["dragenter", "dragover"].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("dragover"); });
    });
    ["dragleave", "drop"].forEach(function (ev) {
      drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove("dragover"); });
    });
    drop.addEventListener("drop", function (e) {
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) setDzFile(f);
    });
    input.addEventListener("change", function () {
      if (input.files && input.files[0]) setDzFile(input.files[0]);
    });

    document.getElementById("d-replace").addEventListener("click", openPicker);
    document.getElementById("d-remove").addEventListener("click", clearDzFile);
    document.getElementById("d-analyse").addEventListener("click", analyseDz);
    document.getElementById("d-crop").addEventListener("change", function () {
      dzState.cropId = this.value;
      if (dzState.result && dzState.result.cropId !== this.value) {
        dzState.result = null;
        dzState.selected = [];
        document.getElementById("d-result").classList.add("hidden");
        document.getElementById("d-empty").classList.remove("hidden");
      }
    });

    var result = document.getElementById("d-result");
    result.addEventListener("change", function (e) {
      var cb = e.target.closest ? e.target.closest("input[data-sym]") : null;
      if (!cb) return;
      var key = cb.getAttribute("data-sym");
      var i = dzState.selected.indexOf(key);
      if (cb.checked && i === -1) dzState.selected.push(key);
      if (!cb.checked && i !== -1) dzState.selected.splice(i, 1);
      var label = cb.closest(".check-item");
      if (label) label.classList.toggle("checked", cb.checked);
      renderDiseaseRank();
    });
    result.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("#d-reset-symptoms")) {
        dzState.selected = [];
        renderDiseaseResult();
      }
    });

    fillDiseaseCrops();
  }

  /* ---------- flow ---------- */
  function startOver() {
    state.plan = null;
    state.activeCropId = null;
    document.getElementById("plan-section").classList.add("hidden");
    form.reset();
    buildForm({});
    clearErrors();
    window.UI.toast(t("common.startOver"), "info");
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  }

  function selectCrop(cropId) {
    state.activeCropId = cropId;
    var planSection = document.getElementById("plan-section");
    var content = document.getElementById("plan-content");
    planSection.classList.remove("hidden");
    content.innerHTML = '<div class="loading-block"><div class="spinner"></div><p>' + esc(t("common.loading")) + '</p></div>';
    planSection.scrollIntoView({ behavior: "smooth" });
    window.cropService.getPlan(cropId, state.inputs).then(function (plan) {
      if (!plan) { content.innerHTML = '<div class="empty-state"><p>' + esc(t("common.error")) + '</p></div>'; return; }
      // keep a snapshot of inputs for the plan
      plan._inputs = state.inputs;
      renderPlan(plan);
    }).catch(function () {
      content.innerHTML = '<div class="empty-state"><p>' + esc(t("scanner.errorAnalysis")) + '</p></div>';
    });
  }

  var form = document.getElementById("agri-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = captureForm();
    if (!validate(data)) return;
    state.inputs = data;

    var btn = document.getElementById("agri-submit");
    btn.disabled = true;
    var resultsSection = document.getElementById("results-section");
    resultsSection.classList.remove("hidden");
    var grid = document.getElementById("crops-grid");
    grid.innerHTML = '<div class="loading-block" style="grid-column:1/-1"><div class="spinner"></div><p>' + esc(t("common.loading")) + '</p></div>';
    document.getElementById("results-count").textContent = "";
    resultsSection.scrollIntoView({ behavior: "smooth" });

    window.cropService.recommendCrops(data).then(function (result) {
      renderResults(result);
      updateCompareBar();
    }).catch(function () {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><p>' + esc(t("common.error")) + '</p></div>';
    }).then(function () {
      btn.disabled = false;
    });
  });

  document.getElementById("agri-reset").addEventListener("click", startOver);
  document.getElementById("plan-back").addEventListener("click", function () {
    document.getElementById("results-section").scrollIntoView({ behavior: "smooth" });
  });

  // delegated crop actions
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-act]");
    if (!btn) return;
    var card = e.target.closest(".crop-card");
    if (!card) return;
    var cropId = card.getAttribute("data-crop");
    var act = btn.getAttribute("data-act");
    if (act === "select") selectCrop(cropId);
    if (act === "compare") {
      var i = state.comparing.indexOf(cropId);
      if (i === -1) { state.comparing.push(cropId); } else { state.comparing.splice(i, 1); }
      // re-render results to reflect button state
      if (state.result) renderResults(state.result);
      updateCompareBar();
    }
  });

  document.getElementById("compare-clear").addEventListener("click", function () {
    state.comparing = [];
    if (state.result) renderResults(state.result);
    updateCompareBar();
  });
  document.getElementById("compare-open").addEventListener("click", openCompare);

  // language change: rebuild dynamic UI, preserving inputs
  window.translationService.on(function () {
    var current = captureForm();
    buildForm(current);
    if (state.result) renderResults(state.result);
    if (state.plan && !document.getElementById("plan-section").classList.contains("hidden")) {
      renderPlan(state.plan);
    }
    fillDiseaseCrops();
    if (dzState.result) renderDiseaseResult();
    renderOfficialData();
    document.title = t("agri.title") + " — " + t("meta.titleSuffix");
  });

  buildForm({});
  initDisease();
  renderOfficialData();
  document.title = t("agri.title") + " — " + t("meta.titleSuffix");

  // restore a previously saved plan on demand
  var saved = window.storageService.getJSON("savedPlan", null);
  if (saved && saved.input) {
    var bar = document.createElement("div");
    bar.className = "notice no-print";
    bar.style.marginTop = "16px";
    bar.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 3h14v18l-7-4-7 4Z"/></svg>' +
      '<span>' + esc(t("agri.savedPlan")) + ' <button class="btn btn--sm btn--secondary" type="button" id="restore-plan">' + esc(t("common.viewDetails")) + '</button></span>';
    document.getElementById("form-section").querySelector(".container").appendChild(bar);
    bar.querySelector("#restore-plan").addEventListener("click", function () {
      state.inputs = saved.input;
      buildForm(saved.input);
      selectCrop(saved.cropId);
    });
  }
})();

/* ==================== js/pages/scanner.js ==================== */
/* ==========================================================================
   AgriHealthAI — scanner page
   Food image upload + honest demo vision result + nutrition panel.
   ========================================================================== */
(function () {
  "use strict";

  var t = function (k, p) { return window.translationService.t(k, p); };
  var L = function (o) { return window.translationService.label(o); };
  var esc = window.UI.escape;

  var st = { file: null, previewUrl: null, analysis: null, food: null, serving: 100 };

  var dropzone = document.getElementById("dropzone");
  var fileInput = document.getElementById("file-input");
  var uploadArea = document.getElementById("upload-area");
  var previewArea = document.getElementById("preview-area");
  var previewImg = document.getElementById("preview-img");
  var loading = document.getElementById("analyse-loading");
  var resultEmpty = document.getElementById("result-empty");
  var analysisBox = document.getElementById("analysis-result");
  var nutritionPanel = document.getElementById("nutrition-panel");
  var foodSearch = document.getElementById("food-search");
  var suggestions = document.getElementById("food-suggestions");

  /* ---------- upload ---------- */
  function openPicker() { fileInput.click(); }
  dropzone.addEventListener("click", openPicker);
  dropzone.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPicker(); }
  });
  ["dragenter", "dragover"].forEach(function (ev) {
    dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.add("dragover"); });
  });
  ["dragleave", "drop"].forEach(function (ev) {
    dropzone.addEventListener(ev, function (e) { e.preventDefault(); dropzone.classList.remove("dragover"); });
  });
  dropzone.addEventListener("drop", function (e) {
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) handleFile(f);
  });
  fileInput.addEventListener("change", function () {
    if (fileInput.files && fileInput.files[0]) handleFile(fileInput.files[0]);
  });

  function handleFile(file) {
    var v = window.foodVisionService.validateFile(file);
    if (!v.ok) { window.UI.toast(t(v.errorKey), "error"); return; }
    st.file = file;
    if (st.previewUrl) URL.revokeObjectURL(st.previewUrl);
    st.previewUrl = URL.createObjectURL(file);
    previewImg.src = st.previewUrl;
    previewImg.alt = t("scanner.preview") + ": " + file.name;
    uploadArea.classList.add("hidden");
    previewArea.classList.remove("hidden");
    analysisBox.classList.add("hidden");
    nutritionPanel.classList.add("hidden");
    resultEmpty.classList.remove("hidden");
    st.analysis = null;
    window.UI.toast(t("common.success"), "success");
  }

  document.getElementById("remove-btn").addEventListener("click", function () {
    st.file = null;
    if (st.previewUrl) URL.revokeObjectURL(st.previewUrl);
    st.previewUrl = null;
    fileInput.value = "";
    previewImg.removeAttribute("src");
    previewArea.classList.add("hidden");
    uploadArea.classList.remove("hidden");
    analysisBox.classList.add("hidden");
    nutritionPanel.classList.add("hidden");
    resultEmpty.classList.remove("hidden");
  });
  document.getElementById("replace-btn").addEventListener("click", openPicker);

  /* ---------- analyse ---------- */
  document.getElementById("analyse-btn").addEventListener("click", function () {
    if (!st.file) { window.UI.toast(t("scanner.pickFirst"), "error"); return; }
    loading.classList.remove("hidden");
    analysisBox.classList.add("hidden");
    nutritionPanel.classList.add("hidden");
    resultEmpty.classList.add("hidden");
    window.foodVisionService.analyzeImage(st.file).then(function (res) {
      st.analysis = res;
      loading.classList.add("hidden");
      renderAnalysis(res);
    }).catch(function () {
      loading.classList.add("hidden");
      resultEmpty.classList.remove("hidden");
      window.UI.toast(t("scanner.errorAnalysis"), "error");
    });
  });

  function statusMeta(status) {
    if (status === "clear" || status === "fresh") return { key: status === "fresh" ? "scanner.statusFresh" : "scanner.statusClear", cls: "clear" };
    if (status === "check" || status === "spoilage") return { key: status === "spoilage" ? "scanner.statusSpoil" : "scanner.statusCheck", cls: "check" };
    return { key: "scanner.statusUnknown", cls: "unknown" };
  }
  function confidenceLabel(c) {
    if (c == null) return t("scanner.lowConfidence");
    if (c >= 0.7) return t("scanner.highConfidence");
    if (c >= 0.45) return t("scanner.mediumConfidence");
    return t("scanner.lowConfidence");
  }

  function bannerIcon(cls) {
    if (cls === "clear") return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    if (cls === "check") return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>';
  }

  function statBox(label, value, unit) {
    return '<div class="photo-stat"><span>' + esc(label) + '</span><strong>' + esc(value) + '<small>' + esc(unit) + '</small></strong></div>';
  }

  function renderAnalysis(res) {
    if (!res) return;
    var sm = statusMeta(res.status);
    var freshness = (res.freshnessNotes || []).map(function (n) { return "<li>" + esc(L(n)) + "</li>"; }).join("");
    var spoilage = (res.spoilageSigns || []).map(function (n) { return "<li>" + esc(L(n)) + "</li>"; }).join("");
    var stats = res.imageStats;
    var checklist = ["check1", "check2", "check3", "check4", "check5"].map(function (k) {
      return "<li>" + esc(t("scanner." + k)) + "</li>";
    }).join("");

    var html = '' +
      '<div class="card"><div class="card__body">' +
        '<div class="badge-row" style="margin-bottom:12px">' +
          '<span class="badge badge--warn">' + esc(t("common.demoBadge")) + '</span>' +
          '<span class="badge badge--muted">' + esc(t("scanner.visualEstimateBadge")) + '</span>' +
          (res.confidence != null ? '<span class="badge badge--muted">' + esc(t("scanner.confidence")) + ": " + esc(confidenceLabel(res.confidence)) + '</span>' : "") +
        '</div>' +
        '<h3>' + esc(t("scanner.resultTitle")) + '</h3>' +

        '<div class="status-banner status-banner--' + sm.cls + '">' +
          bannerIcon(sm.cls) +
          '<div><strong>' + esc(t(sm.key)) + '</strong>' +
            (res.statusReason ? '<p class="small" style="margin:4px 0 0">' + esc(L(res.statusReason)) + '</p>' : "") +
          '</div>' +
        '</div>' +
        '<p class="small muted" style="margin-top:10px">' + esc(t("scanner.visualStatusNote")) + '</p>' +

        (stats ? '<p class="small muted" style="margin:14px 0 6px">' + esc(t("scanner.measured")) + '</p>' +
          '<div class="photo-stats">' +
          statBox(t("scanner.brightness"), stats.brightness, "%") +
          statBox(t("scanner.contrast"), stats.contrast, "%") +
          statBox(t("scanner.greenArea"), stats.greenPct != null ? stats.greenPct : "—", "%") +
          statBox(t("scanner.brownArea"), stats.brownPct != null ? stats.brownPct : "—", "%") +
        '</div>' : "") +

        '<p class="small" style="margin-bottom:6px"><strong>' + esc(t("scanner.likelyFood")) + ':</strong> ' +
          (res.likelyFood ? esc(L(res.likelyFood)) : "—") + '</p>' +
        '<p class="small" style="margin-bottom:6px"><strong>' + esc(t("scanner.freshness")) + '</strong></p>' +
        '<ul class="small muted">' + (freshness || "<li>—</li>") + '</ul>' +
        (spoilage ? '<p class="small" style="margin-bottom:6px"><strong>' + esc(t("scanner.spoilage")) + '</strong></p><ul class="small muted">' + spoilage + '</ul>' : "") +

        '<div class="checklist-card">' +
          '<h4>' + esc(t("scanner.howToConfirm")) + '</h4>' +
          '<ul class="check-list">' + checklist + '</ul>' +
        '</div>' +

        '<p class="small" style="margin-bottom:6px"><strong>' + esc(t("scanner.storageRec")) + '</strong> ' + esc(L(res.storage)) + '</p>' +
        '<p class="small" style="margin-bottom:6px"><strong>' + esc(t("scanner.preservation")) + '</strong> ' + esc(L(res.preservation)) + '</p>' +
        '<p class="small muted" style="margin-top:12px">' + esc(t("scanner.estimateNote")) + '</p>' +
      '</div></div>';

    // If we could not determine the food, ask the user to confirm/select
    if (!st.food) {
      html += '' +
        '<div class="notice notice--info" style="margin-top:16px">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>' +
          '<span><strong>' + esc(t("scanner.confirmTitle")) + '</strong> ' + esc(t("scanner.confirmText")) + '</span>' +
        '</div>' +
        '<div style="margin-top:16px"><button class="btn btn--primary" type="button" id="jump-food">' + esc(t("scanner.confirmSelect")) + '</button></div>';
    }

    analysisBox.innerHTML = html;
    analysisBox.classList.remove("hidden");

    var jump = document.getElementById("jump-food");
    if (jump) jump.addEventListener("click", function () {
      foodSearch.focus();
      foodSearch.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------- food suggestions / confirm ---------- */
  function renderSuggestions(query) {
    var list;
    if (query && query.trim()) {
      list = window.nutritionService.search(query).slice(0, 12);
      if (!list.length) {
        suggestions.innerHTML = '<span class="small muted">' + esc(t("health.notFound")) + '</span>';
        return;
      }
    } else {
      var ids = ["apple", "banana", "tomato", "spinach", "rice-cooked", "roti", "dal-cooked", "paneer", "egg", "chips", "noodles", "pizza"];
      list = ids.map(function (id) { return window.nutritionService.findById(id); }).filter(Boolean);
    }
    suggestions.innerHTML = list.map(function (f) {
      return '<button type="button" class="chip" data-food="' + f.id + '">' + esc(L({ en: f.en, hi: f.hi })) + '</button>';
    }).join("");
  }

  foodSearch.addEventListener("input", window.UI.debounce(function () {
    renderSuggestions(foodSearch.value);
  }, 150));

  suggestions.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-food]");
    if (!btn) return;
    chooseFood(btn.getAttribute("data-food"));
  });

  function chooseFood(id) {
    var item = window.nutritionService.findById(id);
    if (!item) { window.UI.toast(t("scanner.nutritionUnavailable"), "warn"); return; }
    st.food = item;
    st.serving = 100;
    renderNutrition();
    window.UI.toast(t("common.success"), "success");
  }

  /* ---------- nutrition ---------- */
  function nutrientCard(label, value, unit, key) {
    return '<div class="stat"><span class="stat__label">' + esc(label) + '</span>' +
      '<span class="stat__value" data-nk="' + key + '" data-unit="' + esc(unit) + '">' +
        esc(window.UI.formatNumber(value, value != null && value < 10 ? 1 : 0)) + ' <small>' + esc(unit) + '</small></span></div>';
  }

  function updateNutritionNumbers() {
    if (!st.food) return;
    var p = window.nutritionService.perServing(st.food, st.serving);
    window.UI.qsa("[data-nk]").forEach(function (el) {
      var k = el.getAttribute("data-nk");
      var unit = el.getAttribute("data-unit");
      var v = p[k];
      el.innerHTML = esc(window.UI.formatNumber(v, v != null && v < 10 ? 1 : 0)) + " <small>" + esc(unit) + "</small>";
    });
  }

  function renderNutrition() {
    if (!st.food) { nutritionPanel.classList.add("hidden"); return; }
    var f = st.food;
    var p = window.nutritionService.perServing(f, st.serving);
    var macro = window.nutritionService.macroEnergy(window.nutritionService.perServing(f, 100));
    var cur = window.translationService.current();

    var isJunk = f.type === "junk";

    var bars = ["protein", "carbs", "fat"].map(function (k) {
      var label = k === "protein" ? t("scanner.protein") : k === "carbs" ? t("scanner.carbs") : t("scanner.fat");
      var v = macro[k];
      return '<div style="margin-bottom:8px"><div style="display:flex;justify-content:space-between"><span class="small">' + esc(label) + '</span><span class="small muted">' + v + '%</span></div>' +
        '<div class="nutrient-bar"><span style="width:' + v + '%"></span></div></div>';
    }).join("");

    nutritionPanel.innerHTML = '' +
      '<div class="card"><div class="card__body">' +
        '<div class="badge-row" style="margin-bottom:8px"><span class="badge badge--info">' + esc(t("common.demoBadge")) + '</span>' +
          (isJunk ? '<span class="badge badge--warn">' + esc(t("health.recoveryTitle")) + '</span>' : "") + '</div>' +
        '<h3>' + esc(t("scanner.nutritionTitle")) + ': ' + esc(L({ en: f.en, hi: f.hi })) + '</h3>' +
        '<p class="small muted">' + esc(t("scanner.nutritionSub")) + '</p>' +

        '<div class="field" style="max-width:260px;margin-bottom:16px">' +
          '<label for="serving-input">' + esc(t("scanner.servingGrams")) + '</label>' +
          '<input class="input" id="serving-input" type="number" min="1" step="1" value="' + st.serving + '">' +
        '</div>' +

        '<div class="grid grid--3" style="gap:10px">' +
          nutrientCard(t("scanner.energy"), p.energy, t("units.kcal"), "energy") +
          nutrientCard(t("scanner.protein"), p.protein, t("units.g"), "protein") +
          nutrientCard(t("scanner.carbs"), p.carbs, t("units.g"), "carbs") +
          nutrientCard(t("scanner.fat"), p.fat, t("units.g"), "fat") +
          nutrientCard(t("scanner.satFat"), p.satFat, t("units.g"), "satFat") +
          nutrientCard(t("scanner.fibre"), p.fibre, t("units.g"), "fibre") +
          nutrientCard(t("scanner.sugar"), p.sugar, t("units.g"), "sugar") +
          nutrientCard(t("scanner.sodium"), p.sodium, t("units.mg"), "sodium") +
          nutrientCard(t("scanner.potassium"), p.potassium, t("units.mg"), "potassium") +
          nutrientCard(t("scanner.calcium"), p.calcium, t("units.mg"), "calcium") +
          nutrientCard(t("scanner.iron"), p.iron, t("units.mg"), "iron") +
          nutrientCard(t("scanner.vitC"), p.vitC, t("units.mg"), "vitC") +
          nutrientCard(t("scanner.vitA"), p.vitA, "\u00B5g", "vitA") +
          nutrientCard(t("scanner.water"), p.water, t("units.g"), "water") +
        '</div>' +

        '<p class="small muted" style="margin-top:12px">' + esc(t("scanner.servingNote")) + '</p>' +

        '<hr class="hr">' +
        '<h4>' + esc(t("scanner.chartEnergy")) + '</h4>' + bars +

        '<hr class="hr">' +
        '<p class="small" style="margin-bottom:4px"><strong>' + esc(t("scanner.benefits")) + '</strong></p>' +
        '<p class="small muted">' + esc(L(f.benefit || { en: "—", hi: "—" })) + '</p>' +
        '<p class="small" style="margin-bottom:4px"><strong>' + esc(t("scanner.storageGuide")) + '</strong></p>' +
        '<p class="small muted">' + esc(L(f.storage || { en: "—", hi: "—" })) + '</p>' +
        '<p class="small" style="margin-bottom:4px"><strong>' + esc(t("scanner.preservationMethods")) + '</strong></p>' +
        '<p class="small muted">' + esc(L({
          en: "Refrigeration for most fresh items; freezing, drying, pickling or canning where suitable. Follow safe food-handling practices.",
          hi: "अधिकतर ताज़ी चीज़ों के लिए फ्रिज; उपयुक्त हो तो फ्रीज़िंग, सुखाना, अचार या कैनिंग। सुरक्षित खाद्य-संचालन अपनाएँ।"
        })) + '</p>' +
        '<p class="small muted" style="margin-top:10px"><strong>' + esc(t("scanner.source")) + ':</strong> ' + esc(t("scanner.sourceDemo")) + '</p>' +
      '</div></div>';

    nutritionPanel.classList.remove("hidden");
    var servingInput = document.getElementById("serving-input");
    if (servingInput) servingInput.addEventListener("input", function () {
      var v = parseFloat(servingInput.value);
      st.serving = isNaN(v) || v <= 0 ? 100 : v;
      updateNutritionNumbers();
    });
  }

  /* ---------- language change ---------- */
  window.translationService.on(function () {
    renderSuggestions(foodSearch.value);
    if (st.analysis) renderAnalysis(st.analysis);
    if (st.food) renderNutrition();
    document.title = t("scanner.title") + " — " + t("meta.titleSuffix");
  });

  renderSuggestions("");
  document.title = t("scanner.title") + " — " + t("meta.titleSuffix");
})();

/* ==================== js/pages/health.js ==================== */
/* ==========================================================================
   AgriHealthAI — health page
   Tabs: lifestyle guidance, junk-food "recovery", FitHomey habit tracker.
   All guidance is general educational wellness info (non-medical).
   ========================================================================== */
(function () {
  "use strict";

  var ref = window.AgriReference;
  var t = function (k, p) { return window.translationService.t(k, p); };
  var L = function (o) { return window.translationService.label(o); };
  var esc = window.UI.escape;

  var GOALS = ["overall", "eating", "activity", "sleep"];
  var activeGoal = "overall";
  var lastRecovery = null;

  /* ---------------- tabs ---------------- */
  function activateTab(name) {
    var tabs = window.UI.qsa(".tabs .tab");
    tabs.forEach(function (tb) {
      var on = tb.getAttribute("data-tab") === name;
      tb.setAttribute("aria-selected", on ? "true" : "false");
    });
    ["lifestyle", "recovery", "tracker"].forEach(function (p) {
      var panel = document.getElementById("panel-" + p);
      if (panel) panel.classList.toggle("hidden", p !== name);
    });
  }
  window.UI.qsa(".tabs .tab").forEach(function (tb) {
    tb.addEventListener("click", function () { activateTab(tb.getAttribute("data-tab")); });
    tb.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var idx = window.UI.qsa(".tabs .tab").indexOf(tb);
        var next = window.UI.qsa(".tabs .tab")[(idx + (e.key === "ArrowRight" ? 1 : -1) + 3) % 3];
        next.focus(); activateTab(next.getAttribute("data-tab"));
      }
    });
  });

  /* ---------------- lifestyle ---------------- */
  function renderGoals() {
    var wrap = document.getElementById("goal-cards");
    wrap.innerHTML = GOALS.map(function (g) {
      var checked = g === activeGoal;
      return '<label class="radio-card' + (checked ? " checked" : "") + '">' +
        '<input type="radio" name="goal" value="' + g + '"' + (checked ? " checked" : "") + '>' +
        '<span>' + esc(t("health.goal" + g.charAt(0).toUpperCase() + g.slice(1))) + '</span></label>';
    }).join("");
    window.UI.qsa("#goal-cards input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        activeGoal = inp.value;
        window.UI.qsa("#goal-cards .radio-card").forEach(function (c) { c.classList.remove("checked"); });
        inp.closest(".radio-card").classList.add("checked");
        renderGuidance();
      });
    });
  }
  function renderGuidance() {
    var g = window.healthGuidanceService.goalGuidance(activeGoal);
    document.getElementById("goal-guidance").innerHTML =
      '<div class="card"><div class="card__body">' +
        '<div class="badge-row" style="margin-bottom:10px"><span class="badge badge--info">' + esc(t("health.guidanceTitle")) + '</span></div>' +
        '<ul style="margin:0">' + g.points.map(function (p) { return '<li style="margin-bottom:8px">' + esc(L(p)) + '</li>'; }).join("") + '</ul>' +
      '</div></div>';
  }

  /* ---------------- recovery ---------------- */
  function renderJunkSuggestions() {
    var ids = ["chips", "noodles", "pizza", "burger", "softdrink", "samosa", "biscuit", "chocolate", "icecream"];
    document.getElementById("junk-suggestions").innerHTML = ids.map(function (id) {
      var f = window.nutritionService.findById(id);
      return f ? '<button type="button" class="chip" data-junk="' + id + '">' + esc(L({ en: f.en, hi: f.hi })) + '</button>' : "";
    }).join("");
  }

  document.getElementById("junk-suggestions").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-junk]");
    if (!btn) return;
    lookupJunk(btn.getAttribute("data-junk"));
  });
  document.getElementById("junk-find").addEventListener("click", function () {
    lookupJunk(document.getElementById("junk-search").value);
  });
  document.getElementById("junk-search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); lookupJunk(this.value); }
  });

  function lookupJunk(query) {
    var item = window.nutritionService.findById(query) || window.nutritionService.firstMatch(query);
    if (!item) {
      document.getElementById("junk-result").innerHTML =
        '<div class="notice notice--warn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg><span>' +
        esc(t("health.notFound")) + '</span></div>';
      lastRecovery = null;
      return;
    }
    var recovery = window.healthGuidanceService.recoveryFor(item);
    lastRecovery = { item: item, recovery: recovery };
    renderRecovery(item, recovery);
  }

  function renderRecovery(item, recovery) {
    var p = window.nutritionService.perServing(item, 100);
    function mini(label, value, unit) {
      return '<div class="stat"><span class="stat__label">' + esc(label) + '</span><span class="stat__value">' +
        esc(window.UI.formatNumber(value, value != null && value < 10 ? 1 : 0)) + ' <small>' + esc(unit) + '</small></span></div>';
    }
    var concerns = (recovery.concerns || []).map(function (c) { return '<li style="margin-bottom:6px">' + esc(L(c)) + '</li>'; }).join("");
    var nextMeals = (recovery.nextMealsList || []).map(function (c) { return '<li style="margin-bottom:6px">' + esc(L(c)) + '</li>'; }).join("");
    var longTerm = (recovery.longTerm || []).map(function (c) { return '<li style="margin-bottom:6px">' + esc(L(c)) + '</li>'; }).join("");

    document.getElementById("junk-result").innerHTML =
      '<div class="grid grid--2" style="align-items:start">' +
        '<div class="card"><div class="card__body">' +
          '<h3>' + esc(t("health.nutritionFor")) + ': ' + esc(L({ en: item.en, hi: item.hi })) + '</h3>' +
          (item.serving ? '<p class="small muted">' + esc(t("scanner.servingSize")) + ": " + esc(item.serving) + '</p>' : '<p class="small muted">' + esc(t("common.per100g")) + '</p>') +
          '<div class="grid grid--3" style="gap:10px">' +
            mini(t("scanner.energy"), p.energy, t("units.kcal")) +
            mini(t("scanner.protein"), p.protein, t("units.g")) +
            mini(t("scanner.carbs"), p.carbs, t("units.g")) +
            mini(t("scanner.fat"), p.fat, t("units.g")) +
            mini(t("scanner.sugar"), p.sugar, t("units.g")) +
            mini(t("scanner.sodium"), p.sodium, t("units.mg")) +
          '</div>' +
          '<p class="small muted" style="margin-top:12px">' + esc(t("scanner.sourceDemo")) + '</p>' +
        '</div></div>' +
        '<div class="card"><div class="card__body">' +
          '<h3>' + esc(t("health.concernsTitle")) + '</h3>' +
          (concerns ? '<ul style="margin:0">' + concerns + '</ul>' : '<p class="muted">—</p>') +
        '</div></div>' +
        '<div class="card"><div class="card__body">' +
          '<h3>' + esc(t("health.nextMealsTitle")) + '</h3>' +
          '<p class="muted">' + esc(L(recovery.nextMeal)) + '</p>' +
          '<ul style="margin:0">' + nextMeals + '</ul>' +
        '</div></div>' +
        '<div class="card"><div class="card__body">' +
          '<h3>' + esc(t("health.hydrationTitle")) + '</h3>' +
          '<p class="muted">' + esc(L(recovery.hydration)) + '</p>' +
          '<h3 style="margin-top:16px">' + esc(t("health.movementTitle")) + '</h3>' +
          '<p class="muted">' + esc(L(recovery.movement)) + '</p>' +
          '<h3 style="margin-top:16px">' + esc(t("health.longTermTitle")) + '</h3>' +
          '<ul style="margin:0">' + longTerm + '</ul>' +
        '</div></div>' +
      '</div>';
  }

  /* ---------------- FitHomey tracker ---------------- */
  var TRACK_KEY = "fitHomey";

  function ds(d) {
    var y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }
  function todayStr() { return ds(new Date()); }

  function loadTracker() {
    var data = window.storageService.getJSON(TRACK_KEY, null);
    if (!data || typeof data !== "object" || !data.days) data = { days: {} };
    return data;
  }
  function saveTracker(data) { window.storageService.setJSON(TRACK_KEY, data); }

  function dayRecord(data, dateStr) {
    if (!data.days[dateStr]) data.days[dateStr] = { habits: {}, bedtime: "", hours: "" };
    return data.days[dateStr];
  }

  function doneCount(rec) {
    return ref.HABITS.filter(function (h) { return rec && rec.habits && rec.habits[h.id]; }).length;
  }

  function renderTracker() {
    var data = loadTracker();
    var today = todayStr();
    var rec = dayRecord(data, today);
    var total = ref.HABITS.length;
    var done = doneCount(rec);

    // habit list
    document.getElementById("habit-list").innerHTML = ref.HABITS.map(function (h) {
      var on = rec.habits[h.id] ? "checked" : "";
      return '<label class="radio-card' + (rec.habits[h.id] ? " checked" : "") + '" style="margin-bottom:10px">' +
        '<input type="checkbox" data-habit="' + h.id + '"' + (on ? " checked" : "") + '>' +
        '<span><span aria-hidden="true">' + h.emoji + '</span> ' + esc(L({ en: h.en, hi: h.hi })) + '</span></label>';
    }).join("");
    window.UI.qsa("#habit-list input").forEach(function (inp) {
      inp.addEventListener("change", function () {
        var d = loadTracker();
        var r = dayRecord(d, today);
        r.habits[inp.getAttribute("data-habit")] = inp.checked;
        saveTracker(d);
        inp.closest(".radio-card").classList.toggle("checked", inp.checked);
        renderTracker();
      });
    });

    // progress
    var pct = total ? Math.round(done / total * 100) : 0;
    document.getElementById("today-count").textContent = done + "/" + total;
    document.getElementById("today-bar").style.width = pct + "%";
    document.getElementById("today-msg").textContent = done === total && total > 0 ? t("health.allDone") : t("health.habitsDone", { done: done, total: total });

    // sleep fields
    var bt = document.getElementById("sleep-bedtime");
    var hrs = document.getElementById("sleep-hours");
    bt.value = rec.bedtime || "";
    hrs.value = rec.hours || "";
    bt.onchange = hrs.onchange = function () {
      var d = loadTracker();
      var r = dayRecord(d, today);
      r.bedtime = bt.value; r.hours = hrs.value;
      saveTracker(d);
    };

    // weekly chart + streak
    renderWeekly(data);
    renderStreak(data);
  }

  function renderWeekly(data) {
    var days = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var key = ds(d);
      var rec = data.days[key];
      var dc = doneCount(rec);
      days.push({ key: key, done: dc, pct: ref.HABITS.length ? Math.round(dc / ref.HABITS.length * 100) : 0, isToday: i === 0 });
    }
    document.getElementById("weekly-chart").innerHTML = days.map(function (day) {
      var h = Math.max(6, day.pct);
      var lbl = new Date(day.key + "T00:00:00").toLocaleDateString(window.translationService.current() === "hi" ? "hi-IN" : "en-IN", { weekday: "short" });
      return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%">' +
        '<div title="' + day.pct + '%" style="width:100%;max-width:34px;height:' + h + '%;background:' + (day.isToday ? "var(--green-600)" : "var(--green-100)") + ';border-radius:8px 8px 0 0;transition:height .3s"></div>' +
        '<span class="small ' + (day.isToday ? "" : "muted") + '" style="margin-top:6px">' + esc(lbl) + '</span>' +
      '</div>';
    }).join("");
  }

  function renderStreak(data) {
    var streak = 0;
    var cursor = new Date();
    // allow today to be incomplete without breaking an existing streak
    var todayPct = ref.HABITS.length ? doneCount(data.days[ds(cursor)]) / ref.HABITS.length : 0;
    if (todayPct < 1) cursor.setDate(cursor.getDate() - 1);
    while (true) {
      var rec = data.days[ds(cursor)];
      var pct = ref.HABITS.length ? doneCount(rec) / ref.HABITS.length : 0;
      if (pct >= 1) { streak++; cursor.setDate(cursor.getDate() - 1); }
      else break;
    }
    document.getElementById("streak-text").textContent = streak > 0 ? t("health.dayStreak", { n: streak }) : t("health.noStreak");
  }

  document.getElementById("reset-day").addEventListener("click", function () {
    var data = loadTracker();
    var rec = dayRecord(data, todayStr());
    rec.habits = {};
    saveTracker(data);
    renderTracker();
    window.UI.toast(t("health.resetDay"), "info");
  });

  document.getElementById("clear-tracker").addEventListener("click", function () {
    window.UI.confirm({
      title: t("health.clearConfirmTitle"),
      text: t("health.clearConfirmText"),
      okText: t("common.confirm"),
      danger: true
    }).then(function (ok) {
      if (!ok) return;
      window.storageService.remove(TRACK_KEY);
      renderTracker();
      window.UI.toast(t("common.success"), "success");
    });
  });

  /* ---------------- language change ---------------- */
  window.translationService.on(function () {
    renderGoals();
    renderGuidance();
    renderJunkSuggestions();
    if (lastRecovery) renderRecovery(lastRecovery.item, lastRecovery.recovery);
    renderTracker();
    document.title = t("health.title") + " — " + t("meta.titleSuffix");
  });

  /* ---------------- init ---------------- */
  renderGoals();
  renderGuidance();
  renderJunkSuggestions();
  renderTracker();
  document.title = t("health.title") + " — " + t("meta.titleSuffix");
})();

/* ==================== js/pages/about.js ==================== */
/* About page: title sync + reveals. */
(function () {
  "use strict";
  function syncTitle() { document.title = window.translationService.t("about.title") + " — " + window.translationService.t("meta.titleSuffix"); }
  syncTitle();
  window.translationService.on(syncTitle);
  window.UI.reveal(".reveal");
})();

/* ==================== js/pages/contact.js ==================== */
/* Contact page: topic select, validation, demo-safe submit. */
(function () {
  "use strict";
  var t = function (k, p) { return window.translationService.t(k, p); };
  var esc = window.UI.escape;

  var TOPICS = [
    { id: "general", key: "contact.topicGeneral" },
    { id: "feedback", key: "contact.topicFeedback" },
    { id: "bug", key: "contact.topicBug" },
    { id: "data", key: "contact.topicData" }
  ];

  var topicSel = document.getElementById("c-topic");

  function fillTopics() {
    var current = topicSel.value;
    topicSel.innerHTML = '<option value="">' + esc(t("contact.topic")) + "</option>" +
      TOPICS.map(function (o) { return '<option value="' + o.id + '">' + esc(t(o.key)) + "</option>"; }).join("");
    if (current) topicSel.value = current;
  }

  function clearErrors() { window.UI.qsa(".field--error").forEach(function (f) { f.classList.remove("field--error"); }); }
  function setError(name) {
    var f = document.querySelector('.field[data-field="' + name + '"]');
    if (f) f.classList.add("field--error");
  }
  function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();
    var name = document.getElementById("c-name").value.trim();
    var email = document.getElementById("c-email").value.trim();
    var topic = topicSel.value;
    var message = document.getElementById("c-message").value.trim();
    var ok = true;
    if (!name) { setError("name"); ok = false; }
    if (!emailOk(email)) { setError("email"); ok = false; }
    if (!topic) { setError("topic"); ok = false; }
    if (message.length < 10) { setError("message"); ok = false; }
    if (!ok) {
      var first = document.querySelector(".field--error");
      if (first && first.scrollIntoView) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    var btn = document.getElementById("contact-send");
    btn.disabled = true;
    var original = btn.querySelector("span") ? btn.querySelector("span").textContent : btn.textContent;
    if (btn.querySelector("span")) btn.querySelector("span").textContent = t("common.sending");

    // Demo mode: validate + confirm locally. A backend would POST here instead.
    window.apiClient.probe().then(function (hasBackend) {
      if (hasBackend) {
        return window.apiClient.post("/api/contact", { name: name, email: email, topic: topic, message: message });
      }
      return null;
    }).catch(function () { return null; }).then(function () {
      btn.disabled = false;
      if (btn.querySelector("span")) btn.querySelector("span").textContent = original;
      window.UI.toast(t("contact.successMsg"), "success");
      document.getElementById("contact-form").reset();
      clearErrors();
    });
  });

  function syncTitle() { document.title = t("contact.title") + " — " + t("meta.titleSuffix"); }

  fillTopics();
  syncTitle();
  window.translationService.on(function () { fillTopics(); syncTitle(); });
})();

/* ==================== js/pages/privacy.js ==================== */
/* Privacy page: clear locally stored data. */
(function () {
  "use strict";
  var t = function (k, p) { return window.translationService.t(k, p); };

  document.getElementById("clear-local").addEventListener("click", function () {
    window.UI.confirm({
      title: t("privacy.clearConfirmTitle"),
      text: t("privacy.clearConfirmText"),
      okText: t("common.confirm"),
      danger: true
    }).then(function (ok) {
      if (!ok) return;
      window.storageService.clearAll();
      window.UI.toast(t("privacy.cleared"), "success");
    });
  });

  function syncTitle() { document.title = t("privacy.title") + " — " + t("meta.titleSuffix"); }
  syncTitle();
  window.translationService.on(syncTitle);
})();


/* ==========================================================================
   Hash router — makes the single document behave like the multi-page site.
   Adds:
     #home  #agriculture  #scanner  #health  #about  #contact  #privacy
   Sub-paths (e.g. #about/disclaimers, #main) scroll to the anchor and do
   NOT change the visible view.
   ========================================================================== */
(function () {
  "use strict";
  var VIEWS = ["home", "agriculture", "scanner", "health", "about", "contact", "privacy"];
  var TITLE_KEYS = {
    home: "meta.title",
    agriculture: "agri.title",
    scanner: "scanner.title",
    health: "health.title",
    about: "about.title",
    contact: "contact.title",
    privacy: "privacy.title"
  };

  function t(k) { return (window.translationService ? window.translationService.t(k) : k); }

  function parseHash() {
    var h = (location.hash || "").replace(/^#/, "");
    if (!h) return { view: "home", anchor: null };
    var parts = h.split("/");
    var v = parts[0];
    if (VIEWS.indexOf(v) !== -1) return { view: v, anchor: parts[1] || null };
    return { view: null, anchor: h };
  }

  function setTitle(v) {
    var key = TITLE_KEYS[v] || "meta.title";
    var base = t(key);
    var suffix = t("meta.titleSuffix");
    document.title = (v === "home") ? base : (base + " \u2014 " + suffix);
  }

  function showView(v, anchor, opts) {
    if (VIEWS.indexOf(v) === -1) v = "home";
    opts = opts || {};

    var sections = document.querySelectorAll(".view");
    Array.prototype.forEach.call(sections, function (s) {
      s.classList.toggle("active", s.getAttribute("data-view") === v);
    });

    document.body.setAttribute("data-page", v);

    Array.prototype.forEach.call(document.querySelectorAll(".nav-link"), function (a) {
      if (a.getAttribute("href") === "#" + v) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    // close the mobile menu if open
    var panel = document.getElementById("mobile-panel");
    if (panel) panel.classList.remove("open");
    var toggle = document.querySelector(".nav-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";

    setTitle(v);

    if (anchor) {
      var target = document.getElementById(anchor);
      if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    } else if (!opts.keepScroll) {
      window.scrollTo(0, 0);
    }

    // (re)arm scroll reveals inside the now-visible view
    try { if (window.UI && window.UI.reveal) window.UI.reveal(".view.active .reveal"); } catch (e) {}
  }

  function applyHash() {
    var p = parseHash();
    if (p.view) {
      showView(p.view, p.anchor);
    } else if (p.anchor) {
      var el = document.getElementById(p.anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  window.router = {
    show: function (v) { location.hash = v; },
    current: function () { return parseHash().view || document.body.getAttribute("data-page") || "home"; }
  };

  window.addEventListener("hashchange", applyHash);
  document.addEventListener("langchange", function () { setTitle(parseHash().view || "home"); });

  function init() { applyHash(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
