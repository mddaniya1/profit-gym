// Asset image paths
import heroImg from '../assets/images/hero_zulqarnain_training_1790357657862.jpg';
import trainerSpottingImg from '../assets/images/trainer_spotting_client_1790357672411.jpg';
import athleteDeadliftImg from '../assets/images/athlete_deadlift_chalk_1790357684892.jpg';
import nutritionImg from '../assets/images/nutrition_meal_prep_1790357699400.jpg';
import corporateGymImg from '../assets/images/corporate_wellness_gym_1790357712696.jpg';
import zulqarnainFounderImg from '../assets/images/zulqarnain_founder_1790359875565.jpg';
import zulqarnainCoachingImg from '../assets/images/zulqarnain_coaching_1790359889464.jpg';
import transFatlossBilalImg from '../assets/images/trans_fatloss_bilal_1790366958633.jpg';
import transToningAyeshaImg from '../assets/images/trans_toning_ayesha_1790366973645.jpg';
import transMuscleHamzaImg from '../assets/images/trans_muscle_hamza_1790366990268.jpg';
import transRehabTariqImg from '../assets/images/trans_rehab_tariq_1790367004820.jpg';

export const ASSETS = {
  hero: heroImg,
  trainerSpotting: trainerSpottingImg,
  athleteDeadlift: athleteDeadliftImg,
  nutrition: nutritionImg,
  corporateGym: corporateGymImg,
  zulqarnain: zulqarnainFounderImg,
  zulqarnainCoaching: zulqarnainCoachingImg,
  transBilal: transFatlossBilalImg,
  transAyesha: transToningAyeshaImg,
  transHamza: transMuscleHamzaImg,
  transTariq: transRehabTariqImg,
};

export const FOUNDER_DATA = {
  name: 'Zulqarnain',
  title: 'Master Trainer & Founder of Pro.Fit',
  visionHeading: 'Vision of Pro.Fit Founder',
  quote: "I believe fitness is not about being the strongest in the room. It's about being the strongest version of yourself.",
  paragraphs: [
    "At Pro.Fit, we don't chase shortcuts. We build discipline, consistency, and strength that lasts beyond the gym. Whether you're starting from zero, recovering from injury, or pushing for elite results — this is your space.",
    "Your body can do more than you think. Let's prove it, together."
  ],
  ctaText: 'Train With Me',
  credentials: [
    'Founder & Head Master Coach',
    'Biomechanics & Strength Periodization',
    'Certified Special Needs & CP Fitness',
    'Tailored Metabolic Nutrition Design'
  ],
  stats: [
    { label: 'Years Coaching', value: '8+' },
    { label: 'Client Transformations', value: '350+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Locations', value: 'Karachi & Global' }
  ]
};

export const CONTACT_INFO = {
  phone: '0339-4050702',
  phoneFormatted: '+92 339 4050702',
  email: 'info@pro-fit.com.pk',
  location: 'Karachi, Pakistan',
  timings: 'Mon – Sat: 6:00 AM – 10:00 PM',
  whatsappBase: 'https://wa.me/923394050702',
};

export const getWhatsAppLink = (message: string) => {
  return `${CONTACT_INFO.whatsappBase}?text=${encodeURIComponent(message)}`;
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'dumbbell' | 'laptop' | 'activity' | 'building';
  highlighted?: boolean;
  benefits: string[];
  schedule: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    shortDesc: '1-on-1 in-person sessions in Karachi, form correction & relentless accountability.',
    fullDesc: 'Customized private strength and conditioning sessions directly with master trainer Zulqarnain. Designed for progressive overload, technique precision, and rapid physique transformation.',
    iconName: 'dumbbell',
    highlighted: false,
    benefits: [
      'Private 1-on-1 coaching at top Karachi facilities',
      'Instant biomechanical form and posture adjustments',
      'Periodized strength & hypertrophy progression',
      'Relentless motivation and accountability every set',
    ],
    schedule: 'Flexible morning (6AM–11AM) & evening (4PM–10PM) slots',
  },
  {
    id: 'online-coaching',
    title: 'ONLINE COACHING',
    shortDesc: 'Custom workout + diet plans, weekly WhatsApp check-ins & video form reviews.',
    fullDesc: 'Get Zulqarnain’s elite training and nutritional blueprints no matter where you are in the world. Includes tailored calorie & macro targets, weekly video form critiques, and adaptive programming.',
    iconName: 'laptop',
    highlighted: true,
    benefits: [
      'Comprehensive weekly workout split customized to your gym or home',
      'Cultural & lifestyle tailored diet plan with Pakistani food options',
      'Weekly 1-on-1 WhatsApp voice/video consultations',
      'Continuous exercise video critique & form mastery',
    ],
    schedule: 'Worldwide 24/7 access with weekly progress syncs',
  },
  {
    id: 'rehab-cp-fitness',
    title: 'REHAB & CP FITNESS',
    shortDesc: 'Safe, certified, adaptive exercises for special needs, injury recovery & mobility.',
    fullDesc: 'Specialized movement therapy and adaptive physical conditioning for individuals recovering from joint or spine injuries, as well as compassionate, certified programs for Cerebral Palsy (CP) and mobility challenges.',
    iconName: 'activity',
    highlighted: false,
    benefits: [
      'Evidence-based rehabilitation protocols for back, knee, and shoulder issues',
      'Specialized adaptive functional movement for Cerebral Palsy (CP)',
      'Joint decompression, postural restoration, and pain reduction',
      'Physician-coordinated progress tracking and safe load management',
    ],
    schedule: 'Custom scheduled 45-minute therapeutic sessions',
  },
  {
    id: 'corporate-solutions',
    title: 'CORPORATE SOLUTIONS',
    shortDesc: 'Gym setup, on-site trainers, and staff wellness for offices, banks & residencies.',
    fullDesc: 'Turnkey fitness and wellness solutions for corporate headquarters, banks, residential communities, and executive clubs in Karachi. We supply layout consulting, equipment procurement, and certified on-site coaches.',
    iconName: 'building',
    highlighted: false,
    benefits: [
      'End-to-end gym design and commercial equipment sourcing',
      'Certified Pro.Fit trainers stationed at your corporate facility',
      'Executive stress reduction, posture workshops, and group HIIT',
      'Measurable team wellness and energy improvement metrics',
    ],
    schedule: 'Full-time on-site trainer deployment & executive workshops',
  },
];

export interface PackageItem {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
  linkText: string;
  category: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-personal-training',
    title: 'PERSONAL TRAINING PACKAGE',
    price: 'Rs 15,000 / mo',
    image: ASSETS.trainerSpotting,
    description: '1-on-1 private coaching in Karachi with Zulqarnain. Form correction, custom programming & constant motivation.',
    linkText: 'More Details',
    category: 'In-Person',
  },
  {
    id: 'pkg-online-coaching',
    title: 'ONLINE COACHING PACKAGE',
    price: 'Rs 25,000 / mo',
    image: ASSETS.nutrition,
    description: 'Complete workout blueprint, tailored Pakistani diet chart, weekly WhatsApp video audits & 24/7 messaging.',
    linkText: 'More Details',
    category: 'Global Online',
  },
  {
    id: 'pkg-corporate-package',
    title: 'CORPORATE WELLNESS PACKAGE',
    price: 'Custom Quote',
    image: ASSETS.corporateGym,
    description: 'Gym setup consultation, certified on-site coaches, and executive wellness for corporate headquarters & residencies.',
    linkText: 'More Details',
    category: 'Corporate B2B',
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: string;
  priceQuarterly: string;
  periodMonthly: string;
  periodQuarterly: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-plan',
    name: 'BASIC PLAN',
    priceMonthly: 'Rs 15,000',
    priceQuarterly: 'Rs 12,000',
    periodMonthly: '/ month',
    periodQuarterly: '/ mo (billed quarterly)',
    description: 'Flexible membership and foundational guidance designed to match your starting fitness goals.',
    highlighted: false,
    features: [
      '4 Sessions / month with master coach',
      'Custom Diet & Nutrition Chart',
      'Direct WhatsApp Coach Support',
      'Baseline Fitness & Posture Assessment',
      'Locker room & shower gym floor access',
      'Basic workout guideline & form cues',
    ],
    ctaText: 'GET STARTED NOW',
    whatsappMessage: 'Hi Zulqarnain, I want to get started with the Basic Plan (Rs 15,000/mo) at Pro.Fit.',
  },
  {
    id: 'pro-plan',
    name: 'PRO PLAN',
    priceMonthly: 'Rs 25,000',
    priceQuarterly: 'Rs 20,000',
    periodMonthly: '/ month',
    periodQuarterly: '/ mo (billed quarterly)',
    description: 'Our most popular comprehensive coaching system engineered for rapid recomposition and strength.',
    highlighted: true,
    features: [
      '12 Sessions / month (3x weekly high-impact coaching)',
      'Comprehensive Diet + Supplements Guide',
      'Continuous Video Form Checks & Bio-mechanics',
      'Weekly Body Composition & Metric Audits',
      'Priority WhatsApp Access directly with Zulqarnain',
      'Adaptive load progression adjustments',
      'Gym floor & recovery amenities access',
    ],
    ctaText: 'GET STARTED NOW',
    whatsappMessage: 'Hi Zulqarnain, I want to get started with the Pro Plan (Rs 25,000/mo) at Pro.Fit.',
  },
  {
    id: 'elite-plan',
    name: 'ELITE PLAN',
    priceMonthly: 'Rs 40,000',
    priceQuarterly: 'Rs 32,000',
    periodMonthly: '/ month',
    periodQuarterly: '/ mo (billed quarterly)',
    description: 'All-inclusive athletic coaching and peak physical development for serious individuals and executives.',
    highlighted: false,
    features: [
      'Daily Guided Training & Periodized Protocol',
      '24/7 Dedicated WhatsApp VIP Support Hotline',
      'Monthly In-Depth Body Recomposition & DEXA audit',
      'Specialized Rehab & Injury Prevention Protocol',
      'Targeted Supplement Stacking & Recovery Regimen',
      'Flexible Rescheduling & Dedicated Locker Access',
      'Complimentary corporate guest passes (2/month)',
    ],
    ctaText: 'GET STARTED NOW',
    whatsappMessage: 'Hi Zulqarnain, I want to get started with the Elite Plan (Rs 40,000/mo) at Pro.Fit.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  highlightStat: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Hamza Tariq',
    role: 'Tech Entrepreneur, Clifton Karachi',
    quote: 'I had been struggling with consistency for over 3 years before training with Zulqarnain. The structured routine and relentless accountability kept me on track. I dropped 14kg in 4 months and have never had this level of stamina.',
    rating: 5,
    highlightStat: '-14kg Body Fat',
    image: ASSETS.athleteDeadlift,
  },
  {
    id: 'test-2',
    name: 'Ayesha Khan',
    role: 'Corporate Executive, DHA Karachi',
    quote: 'As someone with lower back disc issues, I was terrified of lifting weights. Zulqarnain’s rehabilitation and adaptive movement expertise completely fixed my posture and eradicated my chronic pain. Now I deadlift pain-free.',
    rating: 5,
    highlightStat: 'Zero Back Pain',
    image: ASSETS.trainerSpotting,
  },
  {
    id: 'test-3',
    name: 'Usman Siddiqui',
    role: 'Investment Banker, Online Client',
    quote: 'I live in Dubai and use Pro.Fit’s Online Coaching. Zulqarnain reviews every set I submit via WhatsApp and adjusted my nutrition around business dinners. The results speak for themselves: added 6kg of lean muscle in 6 months.',
    rating: 5,
    highlightStat: '+6kg Lean Muscle',
    image: ASSETS.hero,
  },
  {
    id: 'test-4',
    name: 'Sarah Malik',
    role: 'Medical Doctor, Karachi',
    quote: 'The scientific basis of the diet chart and the biomechanical form cues are world class. No crash diets, no gimmicks—just progressive overload and clean nutrition. Zulqarnain is the gold standard for coaching in Karachi.',
    rating: 5,
    highlightStat: 'Top Physique',
    image: ASSETS.nutrition,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need prior gym experience to join?',
    answer: 'Not at all. Every program at Pro.Fit begins with a thorough mobility, movement, and fitness assessment. Zulqarnain tailors every single exercise and weight load to your current starting point, ensuring complete safety, zero intimidation, and progressive overload from day one.',
  },
  {
    question: 'What are your session timings?',
    answer: 'We operate from 6:00 AM to 10:00 PM Monday through Saturday to accommodate demanding executive and work schedules. Exact training slots are confirmed directly with Zulqarnain upon enrollment so you always have a reserved, dedicated time.',
  },
  {
    question: 'Is online coaching available outside Karachi?',
    answer: 'Yes! Pro.Fit Online Coaching is active across Pakistan and globally (UAE, UK, USA, Canada, and Saudi Arabia). You receive tailored exercise programming, weekly video check-ins, custom meal plans adjusted to your local grocery options, and continuous WhatsApp video form analysis.',
  },
  {
    question: 'Can I try a session before committing?',
    answer: 'Yes. You can book a complimentary consultation and movement assessment with Zulqarnain. You will tour the facility, discuss your medical and fitness history, review your goals, and experience our coaching methodology firsthand with zero obligation.',
  },
  {
    question: 'Do you provide diet or nutrition plans?',
    answer: 'Yes, every single personal training and online coaching package includes a custom-calculated nutrition blueprint. We calculate your exact Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and macronutrient split based on authentic Pakistani and continental meal options. No starving or restrictive fads.',
  },
];

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  snippet: string;
  readTime: string;
  fullContent: string;
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 'article-1',
    title: 'HOW TO STAY CONSISTENT WITH YOUR FITNESS ROUTINE',
    date: '20 MARCH 2026',
    author: 'Zulqarnain',
    image: ASSETS.hero,
    readTime: '4 min read',
    snippet: 'Motivation gets you started; disciplined systems keep you showing up. Learn the 3 micro-habits that guarantee you never skip another workout.',
    fullContent: `Consistency is the single biggest predictor of physical transformation. Most people fail not because their workouts are inadequate, but because their expectations are unrealistic.
    
1. The 2-Day Rule: Never allow more than two consecutive days to pass without intentional physical movement, even if it is just a 20-minute brisk walk or mobility session.
2. Friction Reduction: Pack your gym bag the night before, pre-log your workout exercises, and treat your training slot like a non-negotiable meeting with your CEO.
3. Track Behaviors, Not Feelings: Your brain will find excuses when you are fatigued. Rely on scheduled appointments and coaching accountability to execute regardless of temporary mood.`,
  },
  {
    id: 'article-2',
    title: 'HOW TO BALANCE DIET AND RESISTANCE EXERCISE FOR LEAN GAINS',
    date: '24 MARCH 2026',
    author: 'Zulqarnain',
    image: ASSETS.nutrition,
    readTime: '5 min read',
    snippet: 'Why crash diets destroy muscle and how calculating your specific protein thresholds accelerates body recomposition without starvation.',
    fullContent: `To achieve genuine lean muscle growth while stripping stubborn body fat, resistance training must be matched with precise fueling.

1. Protein Prioritization: Consume between 1.6g to 2.2g of high biological value protein per kilogram of target body weight daily (chicken breast, eggs, fish, Greek yogurt, or whey).
2. The Myth of Severe Calorie Deficits: Slashing calories by 1,000+ causes metabolic slowdown and muscle wasting. Aim for a moderate 300–400 calorie deficit for steady fat oxidation.
3. Nutrient Timing: Ensure a quality carbohydrate and protein meal 90 minutes before lifting to maximize glycogen stores and performance output under heavy loads.`,
  },
  {
    id: 'article-3',
    title: 'HOW TO BUILD STRENGTH AND PREVENT INJURY WITH PROPER FORM',
    date: '28 MARCH 2026',
    author: 'Zulqarnain',
    image: ASSETS.trainerSpotting,
    readTime: '6 min read',
    snippet: 'Biomechanics matter. Discover the fundamental cues for compound lifts (squat, bench press, deadlift) that safeguard your joints while adding weight to the bar.',
    fullContent: `Ego lifting is the fastest route to an orthopedic clinic. Real progress is built on technical mastery under load.

1. Intra-Abdominal Bracing: Master the Valsalva maneuver before initiating any squat or hinge. Expanding your core 360 degrees creates a protective pressurized cylinder around your lumbar spine.
2. Full Range of Motion: Half-reps build quarter-results and overload tendons at weak joint angles. Control the eccentric phase for 2–3 seconds and drive up with intent.
3. Progressive Overload Without Compromise: Only increase the barbell weight when all reps in your target bracket can be performed with pristine form and zero compensatory movement.`,
  },
];

export interface TransformationItem {
  id: string;
  name: string;
  age: number;
  location: string;
  occupation: string;
  program: string;
  duration: string;
  category: 'Fat Loss & Recomp' | 'Female Strength & Tone' | 'Lean Hypertrophy' | 'Injury Rehab & Mobility';
  image: string;
  stats: {
    label: string;
    before: string;
    after: string;
    diff: string;
  }[];
  testimonial: string;
  methodologyNotes: string[];
}

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: 'trans-bilal',
    name: 'Bilal Khan',
    age: 32,
    location: 'Karachi (Clifton)',
    occupation: 'Senior Corporate Banker',
    program: '1-on-1 Personal Training (4x/week)',
    duration: '16 Weeks',
    category: 'Fat Loss & Recomp',
    image: ASSETS.transBilal,
    stats: [
      { label: 'Body Weight', before: '94.5 kg', after: '76.8 kg', diff: '-17.7 kg' },
      { label: 'Body Fat %', before: '29.2%', after: '13.1%', diff: '-16.1%' },
      { label: 'Waist Size', before: '38.5 in', after: '31.0 in', diff: '-7.5 in' },
      { label: 'Deadlift PR', before: '60 kg', after: '150 kg', diff: '+90 kg' },
    ],
    testimonial:
      "Working 12-hour banking shifts in Karachi, I thought my metabolism was wrecked. Zulqarnain completely rebuilt how I train and eat. No starved crash diets—I ate real food, lifted heavy with correct biomechanics, and dropped nearly 18 kg of fat while gaining visible muscle.",
    methodologyNotes: [
      'Calibrated moderate deficit (450 kcal) preserving lean tissue',
      'Intense 4-day compound upper/lower progressive split',
      'Pakistani high-protein diet (grilled chicken, eggs, daal, hung curd)',
      '10k daily step baseline + zero sugary beverages',
    ],
  },
  {
    id: 'trans-ayesha',
    name: 'Ayesha Malik',
    age: 28,
    location: 'Karachi (DHA Phase 6)',
    occupation: 'Creative Director',
    program: 'Online Coaching & Hybrid Gym Audits',
    duration: '14 Weeks',
    category: 'Female Strength & Tone',
    image: ASSETS.transAyesha,
    stats: [
      { label: 'Body Weight', before: '68.0 kg', after: '56.5 kg', diff: '-11.5 kg' },
      { label: 'Posture Correction', before: 'Severe Slouch', after: 'Upright & Neutral', diff: '100% Fixed' },
      { label: 'Hip & Core Power', before: 'Weak Glutes', after: '80kg Hip Thrust', diff: '+50 kg' },
      { label: 'Energy Levels', before: '3 PM Crash', after: 'High Energy 24/7', diff: 'Revitalized' },
    ],
    testimonial:
      "I was terrified that lifting weights would make me 'bulky.' Coach Zulqarnain dispelled that myth from day one. I gained lean muscle, sculpted my shoulders and waist, and completely cured the chronic lower back stiffness caused by sitting at a desk all day.",
    methodologyNotes: [
      'Glute and upper thoracic activation routines before every lift',
      'Targeted 115g daily protein protocol tailored to female metabolism',
      'Progressive barbell and dumbbell hypertrophy training',
      'Weekly video review of squat mechanics and pelvic positioning',
    ],
  },
  {
    id: 'trans-hamza',
    name: 'Hamza Rauf',
    age: 24,
    location: 'Karachi (PECHS)',
    occupation: 'Software Engineer',
    program: '1-on-1 Hypertrophy Specialization',
    duration: '18 Weeks',
    category: 'Lean Hypertrophy',
    image: ASSETS.transHamza,
    stats: [
      { label: 'Body Weight', before: '62.0 kg', after: '71.5 kg', diff: '+9.5 kg Lean Mass' },
      { label: 'Chest Circumference', before: '36.0 in', after: '41.5 in', diff: '+5.5 in' },
      { label: 'Arm Size', before: '12.2 in', after: '15.4 in', diff: '+3.2 in' },
      { label: 'Bench Press PR', before: '45 kg', after: '102.5 kg', diff: '+57.5 kg' },
    ],
    testimonial:
      "I was a classic 'hardgainer' who could never gain weight no matter how much junk food I ate. Zulqarnain taught me the science of mechanical tension, progressive overload, and high-density clean calorie surplus. The results speak for themselves.",
    methodologyNotes: [
      'Clean caloric surplus (+350 kcal) prioritizing nutrient timing',
      'RPE-based auto-regulated training to prevent central fatigue',
      'High-velocity eccentric control for maximal muscle micro-tears',
      'Creatine monohydrate saturation and 3.5L daily hydration protocol',
    ],
  },
  {
    id: 'trans-tariq',
    name: 'Tariq Siddiqui',
    age: 44,
    location: 'Karachi (Gulshan-e-Iqbal)',
    occupation: 'Business Owner & Father',
    program: 'Biomechanics & Lumbar Rehabilitation',
    duration: '16 Weeks',
    category: 'Injury Rehab & Mobility',
    image: ASSETS.transTariq,
    stats: [
      { label: 'Lower Back Pain', before: '8/10 Constant', after: '0/10 Pain-Free', diff: 'Eliminated' },
      { label: 'Squat Mobility', before: 'Quarter Depth', after: 'Full ATG Depth', diff: 'Full ROM' },
      { label: 'Core Endurance', before: '15 sec Plank', after: '2 min 30 sec', diff: '10x Stronger' },
      { label: 'Body Fat %', before: '26.8%', after: '18.4%', diff: '-8.4%' },
    ],
    testimonial:
      "After two herniated lumbar discs, orthopedic doctors told me I should never lift anything heavy again. Zulqarnain gave me my life back. His understanding of intra-abdominal pressure, hip hinge mechanics, and gradual load adaptation is unmatched. I can play sports with my kids again without fear.",
    methodologyNotes: [
      'McGill Big 3 core stabilization integrated into every warmup',
      'Decompression hinging and active gluteus medius stabilization',
      'Zero spinal flexion under load until muscular bracing was bulletproof',
      'Gentle transition from isometric holds to full compound deadlifts',
    ],
  },
];

