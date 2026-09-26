import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Flame,
  Activity,
  Scale,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Info,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Minus
} from 'lucide-react';
import { getWhatsAppLink } from '../data/content';

interface FitnessToolsProps {
  onOpenBooking: () => void;
  onOpenChat?: () => void;
}

type ActiveTab = 'tdee' | 'bmi';
type UnitSystem = 'metric' | 'imperial';
type Gender = 'male' | 'female';
type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'heavy' | 'athlete';
type FitnessGoal = 'cut_aggressive' | 'cut_moderate' | 'maintain' | 'bulk_lean';

export const FitnessTools: React.FC<FitnessToolsProps> = ({ onOpenBooking, onOpenChat }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('tdee');
  const [unit, setUnit] = useState<UnitSystem>('metric');
  const [gender, setGender] = useState<Gender>('male');
  const [age, setAge] = useState<number>(26);

  // Metric inputs
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(175);

  // Imperial inputs
  const [weightLbs, setWeightLbs] = useState<number>(165);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);

  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<FitnessGoal>('cut_moderate');

  // Sync weights and heights when toggling units
  const handleUnitChange = (newUnit: UnitSystem) => {
    if (newUnit === 'imperial' && unit === 'metric') {
      setWeightLbs(Math.round(weightKg * 2.20462));
      const totalInches = heightCm / 2.54;
      setHeightFeet(Math.floor(totalInches / 12));
      setHeightInches(Math.round(totalInches % 12));
    } else if (newUnit === 'metric' && unit === 'imperial') {
      setWeightKg(Math.round(weightLbs / 2.20462));
      const cm = (heightFeet * 12 + heightInches) * 2.54;
      setHeightCm(Math.round(cm));
    }
    setUnit(newUnit);
  };

  // Normalized values in kg and cm
  const normalizedWeight = useMemo(() => {
    return unit === 'metric' ? weightKg : weightLbs / 2.20462;
  }, [unit, weightKg, weightLbs]);

  const normalizedHeight = useMemo(() => {
    return unit === 'metric' ? heightCm : (heightFeet * 12 + heightInches) * 2.54;
  }, [unit, heightCm, heightFeet, heightInches]);

  // Activity multipliers
  const activityMultipliers: Record<ActivityLevel, { factor: number; label: string; desc: string }> = {
    sedentary: { factor: 1.2, label: 'Sedentary', desc: 'Little to no exercise, desk job' },
    light: { factor: 1.375, label: 'Light Activity', desc: 'Exercise 1-2 days/week' },
    moderate: { factor: 1.55, label: 'Moderate Training', desc: 'Resistance or cardio 3-5 days/week' },
    heavy: { factor: 1.725, label: 'Heavy Athlete', desc: 'Hard training 6-7 days/week' },
    athlete: { factor: 1.9, label: 'Elite / Labor', desc: 'Twice daily or intense physical job' },
  };

  // Calculations
  const calculations = useMemo(() => {
    const w = Math.max(30, normalizedWeight);
    const h = Math.max(100, normalizedHeight);
    const a = Math.max(14, age);

    // 1. BMI Calculation
    const heightInMeters = h / 100;
    const bmi = +(w / (heightInMeters * heightInMeters)).toFixed(1);

    let bmiCategory = 'Normal Weight';
    let bmiColor = '#D4AF37';
    let bmiAdvice = 'You are in an optimal healthy bodyweight range. Focus on body recomposition and progressive overload.';

    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
      bmiColor = '#38BDF8';
      bmiAdvice = 'Focus on a clean caloric surplus with adequate protein and heavy compound resistance training.';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight / Athletic';
      bmiColor = '#FBBF24';
      bmiAdvice = 'If you carry significant muscle, BMI can be skewed. Otherwise, a 300-500 kcal deficit will optimize body fat.';
    } else if (bmi >= 30) {
      bmiCategory = 'Obese';
      bmiColor = '#F87171';
      bmiAdvice = 'Structured progressive resistance training, daily step counts (8k-10k), and a sustainable deficit are recommended.';
    }

    const minHealthyWeight = Math.round(18.5 * heightInMeters * heightInMeters);
    const maxHealthyWeight = Math.round(24.9 * heightInMeters * heightInMeters);

    // 2. BMR (Mifflin-St Jeor)
    const bmr = Math.round(
      gender === 'male'
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161
    );

    // 3. TDEE
    const tdee = Math.round(bmr * activityMultipliers[activity].factor);

    // 4. Target Calories based on Goal
    let targetCalories = tdee;
    let goalDelta = 0;
    let goalLabel = 'Maintain Bodyweight';

    if (goal === 'cut_aggressive') {
      goalDelta = -700;
      targetCalories = tdee - 700;
      goalLabel = 'Aggressive Fat Loss (~0.7kg/week)';
    } else if (goal === 'cut_moderate') {
      goalDelta = -450;
      targetCalories = tdee - 450;
      goalLabel = 'Sustainable Fat Loss (~0.4kg/week)';
    } else if (goal === 'bulk_lean') {
      goalDelta = +300;
      targetCalories = tdee + 300;
      goalLabel = 'Lean Muscle Hypertrophy (+0.25kg/week)';
    }

    // 5. Target Macros (Protein: 2.0g/kg, Fat: 25%, Carbs: remainder)
    const proteinGrams = Math.round(w * 2.0);
    const proteinCalories = proteinGrams * 4;
    const fatCalories = Math.round(targetCalories * 0.25);
    const fatGrams = Math.round(fatCalories / 9);
    const carbCalories = Math.max(0, targetCalories - proteinCalories - fatCalories);
    const carbGrams = Math.round(carbCalories / 4);

    return {
      bmi,
      bmiCategory,
      bmiColor,
      bmiAdvice,
      minHealthyWeight,
      maxHealthyWeight,
      bmr,
      tdee,
      targetCalories,
      goalDelta,
      goalLabel,
      proteinGrams,
      fatGrams,
      carbGrams,
    };
  }, [normalizedWeight, normalizedHeight, age, gender, activity, goal]);

  // Prefilled WhatsApp message
  const shareStatsMessage = `Hi Pro Fit Gym! I calculated my stats at Pro Fit Gym:\n- Gender: ${gender}\n- Weight: ${Math.round(normalizedWeight)} kg\n- Height: ${Math.round(normalizedHeight)} cm\n- BMI: ${calculations.bmi} (${calculations.bmiCategory})\n- Maintenance (TDEE): ${calculations.tdee} kcal\n- Target Intake: ${calculations.targetCalories} kcal (${calculations.goalLabel})\n- Protein Goal: ${calculations.proteinGrams}g/day\n\nI want to start a custom gym and nutrition plan at North Nazimabad. What do you recommend?`;

  return (
    <section id="tools" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#2B2B2B] text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>DATA-DRIVEN FITNESS TOOLS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
            CALCULATE YOUR METABOLIC NUMBERS
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-medium mt-3">
            Precision body composition metrics and daily energy expenditure calibrated using proven sports biomechanics formulas.
          </p>
        </div>

        {/* Main Tool Container */}
        <div className="bg-[#141414] border border-[#262626] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 shadow-2xl">
          {/* Top Controls: Tabs & Unit Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-[#242424]">
            {/* Tool Tabs */}
            <div className="flex items-center p-1 rounded-2xl bg-[#0D0D0D] border border-[#262626] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('tdee')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'tdee'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>TDEE & CALORIES</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('bmi')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'bmi'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>BMI & BODY METRIC</span>
              </button>
            </div>

            {/* Units Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Unit:</span>
              <div className="flex items-center p-1 rounded-xl bg-[#0D0D0D] border border-[#262626]">
                <button
                  type="button"
                  onClick={() => handleUnitChange('metric')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    unit === 'metric' ? 'bg-[#222222] text-[#D4AF37]' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  Metric (kg/cm)
                </button>
                <button
                  type="button"
                  onClick={() => handleUnitChange('imperial')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    unit === 'imperial' ? 'bg-[#222222] text-[#D4AF37]' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  Imperial (lbs/ft)
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
            {/* Left Inputs Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Gender Selector */}
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 block mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                      gender === 'male'
                        ? 'bg-[#1C1C1C] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'bg-[#101010] border-[#262626] text-neutral-400 hover:border-[#383838]'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                      gender === 'female'
                        ? 'bg-[#1C1C1C] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                        : 'bg-[#101010] border-[#262626] text-neutral-400 hover:border-[#383838]'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Age Slider & Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="fitness-age-input" className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Age (Years)
                  </label>
                  <span className="font-display text-xl text-white font-black">{age} yrs</span>
                </div>
                <input
                  id="fitness-age-input"
                  aria-label="Age in years"
                  type="range"
                  min="16"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>

              {/* Weight Inputs */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="fitness-weight-input" className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                  </label>
                  <span className="font-display text-xl text-white font-black">
                    {unit === 'metric' ? `${weightKg} kg` : `${weightLbs} lbs`}
                  </span>
                </div>
                {unit === 'metric' ? (
                  <input
                    id="fitness-weight-input"
                    aria-label="Weight in kilograms"
                    type="range"
                    min="40"
                    max="160"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                ) : (
                  <input
                    id="fitness-weight-input"
                    aria-label="Weight in pounds"
                    type="range"
                    min="90"
                    max="350"
                    value={weightLbs}
                    onChange={(e) => setWeightLbs(Number(e.target.value))}
                    className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                )}
              </div>

              {/* Height Inputs */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="fitness-height-input" className="text-xs font-extrabold uppercase tracking-wider text-neutral-400">
                    Height ({unit === 'metric' ? 'cm' : 'ft & in'})
                  </label>
                  <span className="font-display text-xl text-white font-black">
                    {unit === 'metric'
                      ? `${heightCm} cm`
                      : `${heightFeet} ft ${heightInches} in`}
                  </span>
                </div>
                {unit === 'metric' ? (
                  <input
                    id="fitness-height-input"
                    aria-label="Height in centimeters"
                    type="range"
                    min="130"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full h-2 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <select
                        aria-label="Height in feet"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(Number(e.target.value))}
                        className="w-full bg-[#101010] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white font-bold focus:border-[#D4AF37] focus:outline-none"
                      >
                        {[4, 5, 6, 7].map((ft) => (
                          <option key={ft} value={ft}>
                            {ft} Feet
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        aria-label="Height in inches"
                        value={heightInches}
                        onChange={(e) => setHeightInches(Number(e.target.value))}
                        className="w-full bg-[#101010] border border-[#262626] rounded-xl px-3 py-2 text-sm text-white font-bold focus:border-[#D4AF37] focus:outline-none"
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((inch) => (
                          <option key={inch} value={inch}>
                            {inch} Inches
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* TDEE Specific: Activity Level */}
              {activeTab === 'tdee' && (
                <div>
                  <label htmlFor="fitness-activity-select" className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 block mb-2">
                    Daily Activity Level
                  </label>
                  <select
                    id="fitness-activity-select"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                    className="w-full bg-[#101010] border border-[#262626] rounded-xl px-3.5 py-3 text-sm text-white font-bold focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                  >
                    {Object.entries(activityMultipliers).map(([key, item]) => (
                      <option key={key} value={key}>
                        {item.label} — {item.desc}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* TDEE Specific: Goal Selector */}
              {activeTab === 'tdee' && (
                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 block mb-2">
                    Primary Physique Goal
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { key: 'cut_moderate', label: 'Fat Loss (-450 kcal)', icon: TrendingDown },
                      { key: 'cut_aggressive', label: 'Aggressive Cut (-700 kcal)', icon: TrendingDown },
                      { key: 'maintain', label: 'Maintain & Recomp', icon: Minus },
                      { key: 'bulk_lean', label: 'Lean Mass (+300 kcal)', icon: TrendingUp },
                    ].map(({ key, label, icon: GIcon }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setGoal(key as FitnessGoal)}
                        className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-bold text-left transition-all cursor-pointer ${
                          goal === key
                            ? 'bg-[#1F1F1F] border-[#D4AF37] text-white shadow-sm'
                            : 'bg-[#101010] border-[#242424] text-neutral-400 hover:border-[#333]'
                        }`}
                      >
                        <GIcon className={`w-3.5 h-3.5 shrink-0 ${goal === key ? 'text-[#D4AF37]' : 'text-neutral-500'}`} />
                        <span className="leading-snug">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Output Dashboard Column */}
            <div className="lg:col-span-6 bg-[#0E0E0E] border border-[#242424] rounded-3xl p-6 sm:p-8 space-y-6">
              {/* TAB 1: TDEE RESULTS */}
              {activeTab === 'tdee' ? (
                <>
                  <div className="border-b border-[#222222] pb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
                      DAILY ENERGY EXPENDITURE (TDEE)
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-5xl sm:text-6xl font-black text-white">
                        {calculations.targetCalories.toLocaleString()}
                      </span>
                      <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">
                        kcal / day
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2">
                      Goal Target: <span className="text-[#D4AF37] font-bold">{calculations.goalLabel}</span> (Baseline Maintenance: {calculations.tdee.toLocaleString()} kcal)
                    </p>
                  </div>

                  {/* Daily Target Macros Breakdown */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-400 block mb-3">
                      Recommended Macronutrient Targets (2.0g/kg Protein)
                    </span>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#262626]">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D4AF37] block">
                          Protein
                        </span>
                        <span className="font-display text-2xl font-black text-white">
                          {calculations.proteinGrams}g
                        </span>
                        <span className="text-[10px] text-neutral-500 block">Muscle Preservation</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#262626]">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-400 block">
                          Carbs
                        </span>
                        <span className="font-display text-2xl font-black text-white">
                          {calculations.carbGrams}g
                        </span>
                        <span className="text-[10px] text-neutral-500 block">Training Energy</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#141414] border border-[#262626]">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                          Fats
                        </span>
                        <span className="font-display text-2xl font-black text-white">
                          {calculations.fatGrams}g
                        </span>
                        <span className="text-[10px] text-neutral-500 block">Hormonal Health</span>
                      </div>
                    </div>
                  </div>

                  {/* BMR Stat Row */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#141414] border border-[#242424] text-xs">
                    <span className="text-neutral-400 font-medium">Basal Metabolic Rate (BMR at Rest):</span>
                    <span className="font-display text-lg text-white font-bold">
                      {calculations.bmr.toLocaleString()} kcal
                    </span>
                  </div>
                </>
              ) : (
                /* TAB 2: BMI RESULTS */
                <>
                  <div className="border-b border-[#222222] pb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-1">
                      BODY MASS INDEX (BMI)
                    </span>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl sm:text-6xl font-black text-white">
                        {calculations.bmi}
                      </span>
                      <span
                        className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border"
                        style={{
                          color: calculations.bmiColor,
                          borderColor: `${calculations.bmiColor}40`,
                          backgroundColor: `${calculations.bmiColor}15`,
                        }}
                      >
                        {calculations.bmiCategory}
                      </span>
                    </div>

                    {/* BMI Visual Gauge Bar */}
                    <div className="mt-4 space-y-1.5">
                      <div className="h-3 w-full rounded-full bg-[#202020] overflow-hidden flex">
                        <div className="h-full bg-sky-500 w-[18%]" title="Underweight (< 18.5)" />
                        <div className="h-full bg-[#D4AF37] w-[35%]" title="Normal (18.5 - 24.9)" />
                        <div className="h-full bg-amber-400 w-[25%]" title="Overweight (25 - 29.9)" />
                        <div className="h-full bg-rose-500 w-[22%]" title="Obese (30+)" />
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                        <span>16</span>
                        <span>18.5</span>
                        <span>25</span>
                        <span>30</span>
                        <span>40+</span>
                      </div>
                    </div>
                  </div>

                  {/* Healthy Weight Target */}
                  <div className="p-4 rounded-2xl bg-[#141414] border border-[#242424]">
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Ideal Medical Weight Range for Your Height:
                    </div>
                    <div className="font-display text-2xl font-black text-white">
                      {unit === 'metric'
                        ? `${calculations.minHealthyWeight} kg – ${calculations.maxHealthyWeight} kg`
                        : `${Math.round(calculations.minHealthyWeight * 2.20462)} lbs – ${Math.round(calculations.maxHealthyWeight * 2.20462)} lbs`}
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      {calculations.bmiAdvice}
                    </p>
                  </div>
                </>
              )}

              {/* Pro Fit Gym Coaching Audit */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#181818] to-[#121212] border-l-4 border-l-[#D4AF37] border-y border-r border-[#262626]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-white">
                    Pro Fit Gym Coaching Audit:
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  "Numbers give you a baseline, but true consistency creates change. Whether you are cutting or building, prioritize whole foods (chicken, eggs, daal, beef), progressive tension in the gym, and 7-8 hours of sleep."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={getWhatsAppLink(shareStatsMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full bg-[#D4AF37] text-black font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#c59e2b] transition-all cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95 group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send My Stats to Pro Fit Gym (WhatsApp)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="flex-1 py-3 px-4 rounded-full border border-white/20 hover:border-white/60 bg-black/40 hover:bg-black/70 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
                  >
                    Book In-Person Assessment
                  </button>

                  {onOpenChat && (
                    <button
                      type="button"
                      onClick={onOpenChat}
                      className="py-3 px-4 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Ask AI Coach for advice on these numbers"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ask AI</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
