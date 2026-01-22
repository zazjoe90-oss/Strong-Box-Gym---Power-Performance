
import React from 'react';
import { Instagram, Twitter, Linkedin, Award } from 'lucide-react';
import { TRAINERS } from '../constants';

const Trainers: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-oswald font-extrabold mb-4">EXPERT <span className="text-red-600">COACHES</span></h1>
          <p className="text-zinc-400">Our world-class team is here to guide, motivate, and push you towards your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"><Linkedin size={18} /></a>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={16} className="text-red-600" />
                  <span className="text-red-600 font-bold text-xs uppercase tracking-widest">{trainer.specialty}</span>
                </div>
                <h3 className="text-2xl font-oswald font-bold mb-4 uppercase">{trainer.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
