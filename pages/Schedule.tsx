
import React, { useState } from 'react';
import { Calendar, Clock, User, Filter } from 'lucide-react';
import { SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-oswald font-extrabold mb-4">CLASS <span className="text-red-600">SCHEDULE</span></h1>
          <p className="text-zinc-400">Plan your week of progress. Find the right class for your level.</p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-2 rounded font-oswald font-bold text-sm tracking-widest transition-all duration-200 ${
                selectedDay === day ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {day.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="grid gap-4">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map((session) => (
              <div key={session.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-600/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto">
                  <div className="bg-zinc-800 p-4 rounded-lg text-center min-w-[120px] group-hover:bg-red-600 transition-colors">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-red-600 group-hover:text-white" />
                    <span className="font-oswald font-bold text-lg group-hover:text-white">{session.time}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-oswald font-bold mb-1">{session.name}</h3>
                    <div className="flex items-center text-zinc-400 text-sm gap-4">
                      <span className="flex items-center"><User size={14} className="mr-1 text-red-600" /> {session.trainer}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getLevelColor(session.level)}`}>
                        {session.level}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-oswald font-bold rounded hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest">
                  Book Slot
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-zinc-900 rounded-lg border border-dashed border-zinc-800">
              <Calendar size={48} className="mx-auto mb-4 text-zinc-700" />
              <p className="text-zinc-500 font-oswald text-xl">NO CLASSES SCHEDULED FOR THIS DAY</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
