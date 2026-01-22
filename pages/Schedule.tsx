import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { SCHEDULE } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Schedule: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  // Maps for internal ID logic to translated strings
  const dayMap: Record<string, string> = {
    'Monday': t.schedule.days[0],
    'Tuesday': t.schedule.days[1],
    'Wednesday': t.schedule.days[2],
    'Thursday': t.schedule.days[3],
    'Friday': t.schedule.days[4],
    'Saturday': t.schedule.days[5],
    'Sunday': t.schedule.days[6],
  };

  const filteredSchedule = SCHEDULE.filter(s => s.day === selectedDay);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'text-green-500 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'Advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-zinc-400';
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-oswald font-black mb-4">
            {t.schedule.title} <span className="text-red-600">{t.schedule.titleRed}</span>
          </h1>
          <p className="text-zinc-400 text-lg font-light">{t.schedule.subtitle}</p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-8 py-3 rounded-xl font-oswald font-bold text-sm tracking-widest transition-all duration-300 ${
                selectedDay === day 
                ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' 
                : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-white border border-white/5'
              }`}
            >
              {dayMap[day].toUpperCase()}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="grid gap-6">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((session) => (
              <div key={session.id} className="glass border-white/5 p-8 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8 hover:border-red-600/40 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-8 w-full md:w-auto">
                  <div className="bg-zinc-950 p-6 rounded-2xl text-center min-w-[140px] border border-white/5 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-red-600 group-hover:text-white" />
                    <span className="font-oswald font-black text-xl group-hover:text-white tracking-tighter">{session.time}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-oswald font-bold mb-3 uppercase tracking-tight">{session.name}</h3>
                    <div className="flex flex-wrap items-center text-zinc-400 text-sm gap-6">
                      <span className="flex items-center font-bold tracking-wide uppercase">
                        <User size={16} className="mr-2 rtl:ml-2 rtl:mr-0 text-red-600" /> {session.trainer}
                      </span>
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase ${getLevelColor(session.level)}`}>
                        {t.schedule.levels[session.level as keyof typeof t.schedule.levels]}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full lg:w-auto px-12 py-5 bg-white text-zinc-950 font-oswald font-black rounded-2xl hover:bg-red-600 hover:text-white transition-all uppercase tracking-[0.1em] shadow-xl hover:shadow-red-600/20">
                  {t.schedule.book}
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-32 glass rounded-[3rem] border-dashed border-2 border-white/5">
              <Calendar size={64} className="mx-auto mb-6 text-zinc-800" />
              <p className="text-zinc-500 font-oswald font-black text-2xl uppercase tracking-widest">{t.schedule.noClasses}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;