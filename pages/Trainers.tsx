import React from 'react';
import { Instagram, Twitter, Linkedin, Award } from 'lucide-react';
import { TRAINERS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Trainers: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-oswald font-black mb-6">
            {t.trainers.title} <span className="text-red-600">{t.trainers.titleRed}</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.trainers.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group glass border-white/5 rounded-[2.5rem] overflow-hidden hover:border-red-600/50 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 glass flex items-center justify-center text-white rounded-full hover:bg-red-600 transition-all hover:scale-110"><Instagram size={20} /></a>
                    <a href="#" className="w-12 h-12 glass flex items-center justify-center text-white rounded-full hover:bg-red-600 transition-all hover:scale-110"><Twitter size={20} /></a>
                    <a href="#" className="w-12 h-12 glass flex items-center justify-center text-white rounded-full hover:bg-red-600 transition-all hover:scale-110"><Linkedin size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={18} className="text-red-600" />
                  <span className="text-red-600 font-black text-[10px] uppercase tracking-[0.2em]">{trainer.specialty}</span>
                </div>
                <h3 className="text-3xl font-oswald font-black mb-4 uppercase tracking-tighter text-white">{trainer.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;