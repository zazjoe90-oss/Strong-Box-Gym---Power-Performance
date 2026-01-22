import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Check, Shield, Zap, TrendingUp, Trophy, Calculator, Scale } from 'lucide-react';
import { MEMBERSHIPS, TRAINERS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  // Interactive Calculator State
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);
  const [bmi, setBmi] = useState(24.5);

  const calculateBmi = (w: number, h: number) => {
    const hMeters = h / 100;
    const result = w / (hMeters * hMeters);
    setBmi(parseFloat(result.toFixed(1)));
  };

  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
    if (val < 25) return { label: 'Normal', color: 'text-green-400' };
    if (val < 30) return { label: 'Overweight', color: 'text-yellow-400' };
    return { label: 'Obese', color: 'text-red-500' };
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1600&q=80" 
            alt="Gym Hero" 
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'l' : 'r'} from-zinc-950 via-zinc-950/80 to-transparent`}></div>
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-zinc-950 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">{t.hero.tag}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-oswald font-black mb-8 leading-[0.85] tracking-tighter text-white">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="block">{t.hero.title1}</motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="block text-red-600 text-glow">{t.hero.titleRed}</motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="block text-zinc-600">{t.hero.title2}</motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-zinc-400 text-lg md:text-2xl mb-12 max-w-xl leading-relaxed font-light"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-5"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={itemFadeUp} className="text-5xl md:text-7xl font-oswald font-black text-white mb-10 leading-tight">
                  ELITE <span className="text-red-600">STANDARDS</span><br />
                  ONLY.
                </motion.h2>
                <div className="space-y-8">
                  {[
                    { icon: <Shield className="text-red-600" />, title: "UNCOMPROMISING GEAR", desc: "The best Rogue and Eleiko plates. No cheap shortcuts, just raw iron and high-grade steel." },
                    { icon: <Zap className="text-red-600" />, title: "VETERAN COACHING", desc: "Every coach has 5+ years of athlete development experience. We prioritize form, then load." },
                    { icon: <Trophy className="text-red-600" />, title: "RESULTS DNA", desc: "Our programming is science-backed. We don't just 'sweat', we build athletes." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={itemFadeUp} className="flex gap-6 group">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 shrink-0 rounded-2xl glass flex items-center justify-center group-hover:bg-red-600 transition-all duration-300"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-oswald font-bold text-white mb-2 tracking-wide group-hover:text-red-600 transition-colors">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-zinc-900 shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=1200&q=80" className="w-full h-full object-cover" alt="Focus" />
                </div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block"
                >
                   <div className="text-red-600 font-black text-5xl font-oswald">100%</div>
                   <div className="text-white text-xs font-bold tracking-widest uppercase">Performance Guarantee</div>
                </motion.div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Interactive BMI Calculator */}
      <section className="py-32 bg-zinc-900/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-oswald font-black text-white mb-6 uppercase">ANALYZE YOUR <span className="text-red-600">FRAME</span></h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">Get instant feedback on your current physical baseline to optimize your training path.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass p-10 rounded-[2.5rem] border-white/5"
            >
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Weight (kg)</label>
                    <span className="text-white font-oswald font-bold text-2xl">{weight}</span>
                  </div>
                  <input 
                    type="range" min="40" max="150" value={weight} 
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setWeight(val);
                      calculateBmi(val, height);
                    }}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Height (cm)</label>
                    <span className="text-white font-oswald font-bold text-2xl">{height}</span>
                  </div>
                  <input 
                    type="range" min="140" max="220" value={height} 
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setHeight(val);
                      calculateBmi(weight, val);
                    }}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative flex flex-col items-center justify-center p-12 bg-zinc-950 rounded-[3rem] border border-white/5"
            >
              <div className="absolute inset-0 bg-red-600/5 blur-[80px] pointer-events-none"></div>
              <Scale size={48} className="text-red-600 mb-6 opacity-50" />
              <div className="text-center">
                <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Your Current BMI</div>
                <motion.div 
                  key={bmi}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-8xl md:text-9xl font-oswald font-black text-white leading-none mb-4"
                >
                  {bmi}
                </motion.div>
                <div className={`text-2xl font-oswald font-bold uppercase tracking-widest ${getBmiStatus(bmi).color}`}>
                  {getBmiStatus(bmi).label}
                </div>
              </div>
              
              <Link to="/planner" className="mt-12 group flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest bg-white/5 hover:bg-red-600 px-8 py-4 rounded-xl transition-all">
                OPTIMIZE WITH AI <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trainers Highlight */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <h2 className="text-5xl font-oswald font-black text-white leading-none">THE <span className="text-red-600">COMMANDERS</span></h2>
            <Link to="/trainers" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              VIEW ALL COACHES <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINERS.slice(0, 3).map((trainer, idx) => (
              <motion.div 
                key={trainer.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
              >
                 <img src={trainer.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-red-600 text-xs font-black tracking-widest uppercase">{trainer.specialty}</span>
                    <h3 className="text-3xl font-oswald font-bold text-white mt-1 uppercase">{trainer.name}</h3>
                    <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 font-light">{trainer.bio}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-32 bg-red-600 relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 opacity-10 pointer-events-none"
        >
          <Trophy size={400} />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-8xl font-oswald font-black text-white mb-10 tracking-tight"
           >
             READY TO CRUSH YOUR LIMITS?
           </motion.h2>
           <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <Link to="/memberships" className="inline-block bg-white text-red-600 hover:bg-zinc-950 hover:text-white px-16 py-6 rounded-2xl font-oswald font-bold text-2xl transition-all duration-300 shadow-2xl">
               JOIN THE HUB
             </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;