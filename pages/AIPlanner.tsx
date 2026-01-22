
import React, { useState } from 'react';
import { Sparkles, Brain, Loader2, Dumbbell, Clock, Target, ChevronRight } from 'lucide-react';
import { getWorkoutPlan, WorkoutRecommendation } from '../geminiService';

const AIPlanner: React.FC = () => {
  const [goal, setGoal] = useState('Build Muscle');
  const [level, setLevel] = useState('Intermediate');
  const [time, setTime] = useState('45 mins');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<WorkoutRecommendation | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const plan = await getWorkoutPlan(goal, level, time);
      setRecommendation(plan);
    } catch (error) {
      alert("Failed to generate plan. Please ensure your API Key is configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 text-red-600 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
            <Sparkles size={14} /> AI-POWERED TRAINING
          </div>
          <h1 className="text-5xl font-oswald font-extrabold mb-4 uppercase">
            SMART <span className="text-red-600">WORKOUT</span> GENERATOR
          </h1>
          <p className="text-zinc-400">Get a personalized training session generated specifically for your needs today using Gemini AI.</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Goal</label>
              <select 
                value={goal} 
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none"
              >
                <option>Build Muscle</option>
                <option>Weight Loss</option>
                <option>Strength Training</option>
                <option>Mobility & Flexibility</option>
                <option>Endurance</option>
              </select>
            </div>
            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Level</label>
              <select 
                value={level} 
                onChange={(e) => setLevel(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Time Available</label>
              <select 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-white focus:border-red-600 focus:outline-none"
              >
                <option>15 mins</option>
                <option>30 mins</option>
                <option>45 mins</option>
                <option>60 mins</option>
                <option>90 mins</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-red-600 hover:bg-red-700 disabled:bg-zinc-700 text-white rounded-lg font-oswald font-bold tracking-widest transition-all flex items-center justify-center gap-3 uppercase shadow-lg shadow-red-600/20"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                PLANNING YOUR SESSION...
              </>
            ) : (
              <>
                <Brain size={20} />
                GENERATE WORKOUT PLAN
              </>
            )}
          </button>
        </div>

        {recommendation && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white text-zinc-950 rounded-t-2xl p-8 border-b border-zinc-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-oswald font-extrabold uppercase mb-1">{recommendation.title}</h2>
                  <div className="flex items-center gap-4 text-zinc-600 font-bold text-xs uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={14} /> {recommendation.duration}</span>
                    <span className="flex items-center gap-1"><Target size={14} /> {goal}</span>
                    <span className="flex items-center gap-1"><Dumbbell size={14} /> {level}</span>
                  </div>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-oswald font-bold uppercase text-sm">Save Plan</button>
              </div>
            </div>
            
            <div className="bg-zinc-900 border-x border-b border-zinc-800 rounded-b-2xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-lg font-oswald font-bold mb-6 text-red-600 tracking-widest uppercase">EXERCISE LIST</h3>
                <div className="space-y-4">
                  {recommendation.exercises.map((ex, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-zinc-950/50 rounded-xl border border-zinc-800 group hover:border-red-600/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-oswald font-bold text-sm text-zinc-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{ex.name}</h4>
                          <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{ex.intensity} Intensity</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block font-oswald font-bold text-xl">{ex.sets} × {ex.reps}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5"><Brain size={120} /></div>
                   <h3 className="text-lg font-oswald font-bold mb-6 text-red-600 tracking-widest uppercase">COACHING TIPS</h3>
                   <ul className="space-y-3">
                     {recommendation.coachingTips.map((tip, i) => (
                       <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                         <ChevronRight size={18} className="text-red-600 shrink-0" />
                         {tip}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;
