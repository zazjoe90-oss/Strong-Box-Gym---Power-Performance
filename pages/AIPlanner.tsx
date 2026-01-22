import React, { useState } from 'react';
import { Sparkles, Brain, Loader2, Dumbbell, Clock, Target, ChevronRight, Share2, ClipboardList } from 'lucide-react';
import { getWorkoutPlan, WorkoutRecommendation } from '../geminiService';
import { useLanguage } from '../context/LanguageContext';

const AIPlanner: React.FC = () => {
  const { t, language, isRTL } = useLanguage();
  const [goal, setGoal] = useState('Build Muscle');
  const [level, setLevel] = useState('Intermediate');
  const [time, setTime] = useState('45 mins');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<WorkoutRecommendation | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const promptGoal = language === 'ar' ? `الهدف: ${goal}` : goal;
      const plan = await getWorkoutPlan(promptGoal, level, time);
      setRecommendation(plan);
    } catch (error) {
      alert(isRTL ? "فشل إنشاء الخطة. يرجى التأكد من تكوين مفتاح API." : "Failed to generate plan. Please ensure your API Key is configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full mb-8 text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">
            <Sparkles size={14} className="animate-pulse" /> {t.aiPlanner.tag}
          </div>
          <h1 className="text-5xl md:text-8xl font-oswald font-black text-white mb-6 leading-none tracking-tighter">
            {t.aiPlanner.title}
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.aiPlanner.desc}</p>
        </div>

        {/* Control Panel */}
        <div className="glass border-white/5 p-8 md:p-12 rounded-[2.5rem] mb-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none group-hover:bg-red-600/10 transition-colors"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                <Target size={12} className="text-red-600" /> {t.aiPlanner.labels.goal}
              </label>
              <select 
                value={goal} 
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-red-600 transition-all appearance-none cursor-pointer"
              >
                <option>{isRTL ? 'بناء العضلات' : 'Build Muscle'}</option>
                <option>{isRTL ? 'خسارة الوزن' : 'Weight Loss'}</option>
                <option>{isRTL ? 'تدريب القوة' : 'Strength Training'}</option>
                <option>{isRTL ? 'المرونة' : 'Mobility'}</option>
                <option>{isRTL ? 'التحمل' : 'Endurance'}</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                <Dumbbell size={12} className="text-red-600" /> {t.aiPlanner.labels.level}
              </label>
              <select 
                value={level} 
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-red-600 transition-all appearance-none cursor-pointer"
              >
                <option>{isRTL ? 'مبتدئ' : 'Beginner'}</option>
                <option>{isRTL ? 'متوسط' : 'Intermediate'}</option>
                <option>{isRTL ? 'متقدم' : 'Advanced'}</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                <Clock size={12} className="text-red-600" /> {t.aiPlanner.labels.time}
              </label>
              <select 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-red-600 transition-all appearance-none cursor-pointer"
              >
                <option>20 mins</option>
                <option>40 mins</option>
                <option>60 mins</option>
                <option>90 mins</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-10 py-6 bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-2xl font-oswald font-black text-xl tracking-[0.1em] transition-all flex items-center justify-center gap-4 uppercase shadow-xl hover:shadow-red-600/30 hover:translate-y-[-2px]"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                {t.aiPlanner.loading}
              </>
            ) : (
              <>
                <Brain size={24} />
                {t.aiPlanner.button}
              </>
            )}
          </button>
        </div>

        {/* Results */}
        {recommendation && (
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="p-10 border-b border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 text-red-600 font-black text-[10px] tracking-widest uppercase mb-2">
                    <ClipboardList size={14} /> Session Blueprint
                  </div>
                  <h2 className="text-4xl font-oswald font-black text-zinc-950 leading-none">{recommendation.title}</h2>
                </div>
                <div className="flex gap-3">
                   <button className="p-4 bg-zinc-100 text-zinc-950 rounded-2xl hover:bg-zinc-200 transition-colors">
                      <Share2 size={20} />
                   </button>
                   <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-oswald font-bold uppercase text-sm tracking-widest shadow-lg shadow-red-600/20">
                     {t.aiPlanner.save}
                   </button>
                </div>
              </div>

              <div className="bg-zinc-50 p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-zinc-400 font-black text-[10px] tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {isRTL ? 'قائمة الحركات' : 'Movement Standards'}
                    </h3>
                    <div className="space-y-4">
                      {recommendation.exercises.map((ex, i) => (
                        <div key={i} className="flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-zinc-100 group hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-md">
                          <div className="flex items-center gap-5">
                            <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center font-oswald font-bold text-lg text-zinc-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                              {i + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-900 text-lg leading-tight">{ex.name}</h4>
                              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mt-1">{ex.intensity} Load</p>
                            </div>
                          </div>
                          <div className="text-right rtl:text-left">
                            <span className="block font-oswald font-black text-2xl text-zinc-950 leading-none">{ex.sets} × {ex.reps}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                     <div className="bg-zinc-950 p-8 rounded-[2rem] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 rotate-12"><Sparkles size={120} /></div>
                        <h3 className="text-red-600 font-black text-[10px] tracking-[0.2em] uppercase mb-6">{isRTL ? 'توجيهات المدرب' : 'COACH NOTES'}</h3>
                        <ul className="space-y-5 relative z-10">
                          {recommendation.coachingTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-4 text-zinc-300 text-sm leading-relaxed italic">
                              <ChevronRight size={18} className="text-red-600 shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                     </div>

                     <div className="p-8 border-2 border-dashed border-zinc-200 rounded-[2rem] flex items-center gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 shrink-0">
                           <Clock size={32} />
                        </div>
                        <div>
                           <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Total Active Duration</p>
                           <p className="text-2xl font-oswald font-bold text-zinc-950 uppercase">{recommendation.duration}</p>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-12">
               Generated by STRONG BOX Elite AI Engine • Gemini 3 Vision
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;