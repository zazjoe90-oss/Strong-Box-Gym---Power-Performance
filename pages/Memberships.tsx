import React from 'react';
import { Check, ShieldCheck, Zap, Star, Trophy, ArrowRight } from 'lucide-react';
import { MEMBERSHIPS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Memberships: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">
            <Trophy size={14} /> {t.pricing.tag}
          </div>
          <h1 className="text-6xl md:text-8xl font-oswald font-black text-white mb-6 leading-none tracking-tighter">
            {isRTL ? <>{t.pricing.title.split(' ')[0]} <span className="text-red-600">النخبة</span></> : <>ELITE <span className="text-red-600">MEMBERSHIPS</span></>}
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {MEMBERSHIPS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-1 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] ${
                plan.recommended 
                  ? 'bg-gradient-to-b from-red-600 to-red-900 shadow-[0_0_50px_rgba(220,38,38,0.25)]' 
                  : 'bg-zinc-800/50 border border-white/5'
              }`}
            >
              <div className="flex flex-col h-full bg-zinc-950 rounded-[2.4rem] p-10">
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-1.5 rounded-full font-oswald font-bold text-[10px] tracking-[0.2em] uppercase shadow-xl z-20">
                    {t.pricing.recommended}
                  </div>
                )}
                
                <div className="mb-10 text-center md:text-left rtl:md:text-right">
                  <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-2 mb-4">
                    {plan.id === 'elite' ? <Trophy className="text-red-600" size={20} /> : plan.id === 'pro' ? <Star className="text-red-600" size={20} /> : <Zap className="text-red-600" size={20} />}
                    <h3 className="text-2xl font-oswald font-black text-white uppercase tracking-wider">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline justify-center md:justify-start rtl:md:justify-end gap-1">
                    <span className="text-6xl font-oswald font-black text-white">{plan.price}</span>
                    <span className="text-zinc-500 font-bold text-xs uppercase tracking-widest">/ {t.pricing.monthly}</span>
                  </div>
                </div>

                <div className="h-px bg-white/5 mb-10 w-full"></div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-400 text-sm leading-tight group/item">
                      <div className="mt-1 w-5 h-5 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 group-hover/item:bg-red-600 transition-colors">
                        <Check className="text-red-600 group-hover/item:text-white transition-colors" size={12} />
                      </div>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-5 rounded-2xl font-oswald font-black tracking-[0.2em] transition-all flex items-center justify-center gap-3 uppercase text-sm ${
                    plan.recommended 
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-600/20' 
                      : 'bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {t.pricing.select}
                  <ArrowRight size={16} className={`rtl:rotate-180 ${plan.recommended ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Section */}
        <div className="relative group">
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="glass border-white/5 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
               <ShieldCheck size={200} />
            </div>
            
            <div className="max-w-xl text-center lg:text-left rtl:lg:text-right relative z-10">
              <h3 className="text-4xl font-oswald font-black text-white mb-6 uppercase tracking-tight">{t.pricing.corporate.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">{t.pricing.corporate.desc}</p>
            </div>
            
            <button className="whitespace-nowrap bg-white text-zinc-950 hover:bg-red-600 hover:text-white px-12 py-6 rounded-2xl font-oswald font-black tracking-[0.2em] text-lg transition-all transform hover:scale-105 shadow-2xl uppercase relative z-10">
              {t.pricing.corporate.cta}
            </button>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40">
           <div className="font-oswald font-bold text-xl text-white">ROGUE</div>
           <div className="font-oswald font-bold text-xl text-white">ELEIKO</div>
           <div className="font-oswald font-bold text-xl text-white">ASSAULT</div>
           <div className="font-oswald font-bold text-xl text-white">CONCEPT2</div>
        </div>
      </div>
    </div>
  );
};

export default Memberships;