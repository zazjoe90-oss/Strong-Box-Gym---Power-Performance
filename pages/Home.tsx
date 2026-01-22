import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Check, Shield, Zap, TrendingUp, Trophy } from 'lucide-react';
import { MEMBERSHIPS, TRAINERS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1600&q=80" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-50 scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'l' : 'r'} from-zinc-950 via-zinc-950/80 to-transparent`}></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full mb-8 transform -rotate-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">{t.hero.tag}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-oswald font-black mb-8 leading-[0.85] tracking-tighter text-white">
              <span className="block">{t.hero.title1}</span>
              <span className="block text-red-600 text-glow">{t.hero.titleRed}</span>
              <span className="block text-zinc-600">{t.hero.title2}</span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-2xl mb-12 max-w-xl leading-relaxed font-light">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/memberships" 
                className="group bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-oswald font-bold text-xl flex items-center justify-center transition-all duration-500 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-red-600/40 shadow-xl"
              >
                {t.hero.cta}
                <ArrowRight className={`ml-3 rtl:mr-3 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-300`} size={22} />
              </Link>
              <button className="flex items-center justify-center space-x-4 rtl:space-x-reverse text-white px-10 py-5 rounded-xl glass hover:bg-white/10 transition-all font-oswald font-bold text-lg">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                   <Play className="fill-current text-white" size={18} />
                </div>
                <span>{t.hero.watch}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className={`hidden xl:grid absolute bottom-24 ${isRTL ? 'left-8' : 'right-8'} grid-cols-1 gap-12 z-10 pr-8`}>
          <div className={isRTL ? 'text-left' : 'text-right'}>
            <div className="text-6xl font-oswald font-bold text-white leading-none">500<span className="text-red-600">+</span></div>
            <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">{t.stats.members}</div>
          </div>
          <div className={isRTL ? 'text-left' : 'text-right'}>
            <div className="text-6xl font-oswald font-bold text-white leading-none">15<span className="text-red-600">+</span></div>
            <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">{t.stats.coaches}</div>
          </div>
          <div className={isRTL ? 'text-left' : 'text-right'}>
            <div className="text-6xl font-oswald font-bold text-white leading-none">30<span className="text-red-600">+</span></div>
            <div className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mt-2">{t.stats.classes}</div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-oswald font-black text-white mb-10 leading-tight">
                  ELITE <span className="text-red-600">STANDARDS</span><br />
                  ONLY.
                </h2>
                <div className="space-y-8">
                  {[
                    { icon: <Shield className="text-red-600" />, title: "UNCOMPROMISING GEAR", desc: "The best Rogue and Eleiko plates. No cheap shortcuts, just raw iron and high-grade steel." },
                    { icon: <Zap className="text-red-600" />, title: "VETERAN COACHING", desc: "Every coach has 5+ years of athlete development experience. We prioritize form, then load." },
                    { icon: <Trophy className="text-red-600" />, title: "RESULTS DNA", desc: "Our programming is science-backed. We don't just 'sweat', we build athletes." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-2xl glass flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-oswald font-bold text-white mb-2 tracking-wide group-hover:text-red-600 transition-colors">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-zinc-900 shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=1200&q=80" className="w-full h-full object-cover" alt="Focus" />
                </div>
                <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block">
                   <div className="text-red-600 font-black text-5xl font-oswald">100%</div>
                   <div className="text-white text-xs font-bold tracking-widest uppercase">Performance Guarantee</div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trainers Highlight - Horizontal Scroll on Mobile */}
      <section className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-oswald font-black text-white leading-none">THE <span className="text-red-600">COMMANDERS</span></h2>
            <Link to="/trainers" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              VIEW ALL COACHES <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINERS.slice(0, 3).map((trainer) => (
              <div key={trainer.id} className="group relative aspect-[3/4] rounded-3xl overflow-hidden">
                 <img src={trainer.image} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-red-600 text-xs font-black tracking-widest uppercase">{trainer.specialty}</span>
                    <h3 className="text-3xl font-oswald font-bold text-white mt-1 uppercase">{trainer.name}</h3>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-5xl md:text-7xl font-oswald font-black text-white mb-10 tracking-tight">READY TO CRUSH YOUR LIMITS?</h2>
           <Link to="/memberships" className="inline-block bg-white text-red-600 hover:bg-zinc-950 hover:text-white px-16 py-6 rounded-2xl font-oswald font-bold text-2xl transition-all duration-300 transform hover:scale-105">
             JOIN THE HUB
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;