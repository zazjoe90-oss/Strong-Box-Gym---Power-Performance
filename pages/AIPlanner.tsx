import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    setRecommendation(null);
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full mb-8 text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">
            <Sparkles size={14} className="animate-pulse" /> {t.aiPlanner.tag}
          </div>
          <h1 className="text-5xl md:text-8xl font-oswald font-black text-white mb-6 leading-none tracking-tighter">
            {t.aiPlanner.title}
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.aiPlanner.desc}</p>
        </motion.div>

        {/* Control Panel */}
        <motion.div 
          layout
          className="glass border-white/5 p-8 md:p-12 rounded-[2.5rem] mb-16 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none group-hover:bg-red-600/10 transition-colors"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { label: t.aiPlanner.labels.goal, icon: <Target size={12} />, value: goal, setter: setGoal, options: isRTL ? ['بناء العضلات', 'خسارة الوزن', 'تدريب القوة', 'المرونة', 'التحمل'] : ['Build Muscle', 'Weight Loss', 'Strength Training', 'Mobility', 'Endurance'] },
              { label: t.aiPlanner.labels.level, icon: <Dumbbell size={12} />, value: level, setter: setLevel, options: isRTL ? ['مبتدئ', 'متوسط', 'متقدم'] : ['Beginner', 'Intermediate', 'Advanced'] },
              { label: t.aiPlanner.labels.time, icon: <Clock size={12} />, value: time, setter: setTime, options: ['20 mins', '40 mins', '60 mins', '90 mins'] }
            ].map((field, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <label className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                  <span className="text-red-600">{field.icon}</span> {field.label}
                </label>
                <select 
                  value={field.value} 
                  onChange={(e) => field.setter(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl p-4 text-white font-bold focus:border-red-600 transition-all appearance-none cursor-pointer"
                >
                  {field.options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            disabled={loading}
            className="w-full mt-10 py-6 bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-2xl font-oswald font-black text-xl tracking-[0.1em] transition-all flex items-center justify-center gap-4 uppercase shadow-xl"
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
          </motion.button>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {recommendation && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="p-10 border-b border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-red-600 font-black text-[10px] tracking-widest uppercase mb-2">
                      <ClipboardList size={14} /> Session Blueprint
                    </div>
                    <h2 className="text-4xl font-oswald font-black text-zinc-950 leading-none">{recommendation.title}</h2>
                  </div>
                  <div className="flex gap-3">
                     <motion.button whileHover={{ scale: 1.1 }} className="p-4 bg-zinc-100 text-zinc-950 rounded-2xl hover:bg-zinc-200 transition-colors">
                        <Share2 size={20} />
                     </motion.button>
                     <motion.button whileHover={{ scale: 1.05 }} className="bg-red-600 text-white px-8 py-4 rounded-2xl font-oswald font-bold uppercase text-sm tracking-widest shadow-lg shadow-red-600/20">
                       {t.aiPlanner.save}
                     </motion.button>
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
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between p-6 bg-white rounded-[1.5rem] border border-zinc-100 group hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
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
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                       <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950 p-8 rounded-[2rem] text-white relative overflow-hidden"
                       >
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
                       </motion.div>

                       <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="p-8 border-2 border-dashed border-zinc-200 rounded-[2rem] flex items-center gap-6"
                       >
                          <div className="w-16 h-16 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 shrink-0">
                             <Clock size={32} />
                          </div>
                          <div>
                             <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Total Active Duration</p>
                             <p className="text-2xl font-oswald font-bold text-zinc-950 uppercase">{recommendation.duration}</p>
                          </div>
                       </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIPlanner;