
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Shield, Zap, TrendingUp, Star, Check } from 'lucide-react';
import { TESTIMONIALS, MEMBERSHIPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=1600&q=80" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 bg-red-600/10 border border-red-600/30 text-red-600 font-bold text-xs tracking-widest uppercase rounded-full mb-6">
              Welcome to the elite
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-extrabold mb-6 leading-none tracking-tighter">
              BEYOND <span className="text-red-600 text-glow">LIMITS</span><br />
              STRENGTH <span className="text-zinc-600">HUB</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Qatar's premier destination for functional fitness and strength training. Join a community that refuses to settle for average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/memberships" 
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-oswald font-bold text-lg flex items-center justify-center transition-all duration-300"
              >
                START YOUR JOURNEY
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button className="flex items-center justify-center space-x-3 text-white px-8 py-4 rounded border border-white/20 hover:bg-white/5 transition-all">
                <Play className="fill-current" size={20} />
                <span className="font-oswald font-bold">WATCH OUR STORY</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="hidden lg:flex absolute bottom-20 right-20 space-x-12 z-10">
          <div className="text-right">
            <div className="text-4xl font-oswald font-bold text-red-600">500+</div>
            <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Active Members</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-oswald font-bold text-red-600">12+</div>
            <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Expert Coaches</div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-oswald font-bold text-red-600">25+</div>
            <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Classes Weekly</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">WHY CHOOSE <span className="text-red-600">STRONG BOX</span></h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Shield className="text-red-600" size={40} />, 
                title: "PREMIUM EQUIPMENT", 
                desc: "Equipped with world-class gear from Rogue, Eleiko, and Assault Fitness." 
              },
              { 
                icon: <Zap className="text-red-600" size={40} />, 
                title: "ELITE COACHING", 
                desc: "Certified professionals with decades of experience in diverse fitness disciplines." 
              },
              { 
                icon: <TrendingUp className="text-red-600" size={40} />, 
                title: "RESULT DRIVEN", 
                desc: "Structured programming designed to help you reach measurable performance goals." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-zinc-900/50 p-10 border border-zinc-800 rounded-xl hover:border-red-600/50 transition-all duration-300 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-oswald font-bold mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Memberships Section */}
      <section className="py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 tracking-tight">CHOOSE YOUR <span className="text-red-600">BATTLE PLAN</span></h2>
            <p className="text-zinc-400 max-w-xl mx-auto uppercase text-xs tracking-[0.2em] font-bold">Invest in the best version of yourself</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIPS.map((plan) => (
              <div key={plan.id} className={`group bg-zinc-950 border ${plan.recommended ? 'border-red-600 ring-1 ring-red-600/20 shadow-[0_0_40px_rgba(220,38,38,0.1)]' : 'border-zinc-800'} p-8 rounded-2xl flex flex-col transition-all duration-300 hover:translate-y-[-8px]`}>
                <div className="mb-8">
                  <h3 className="text-xl font-oswald font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-oswald font-bold text-red-600">{plan.price}</span>
                    <span className="text-zinc-500 font-bold text-xs">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <Check className="text-red-600 shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/memberships"
                  className={`w-full text-center py-4 rounded font-oswald font-bold tracking-widest transition-all ${
                    plan.recommended ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                  }`}
                >
                  GET STARTED
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4">MEMBER <span className="text-red-600">STORIES</span></h2>
              <p className="text-zinc-400">Hear from our members who have transformed their lives through consistent training and community support.</p>
            </div>
            <Link to="/blog" className="text-red-600 font-bold flex items-center hover:underline uppercase tracking-widest text-sm">
              Read more stories <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-zinc-900/50 p-8 rounded-2xl relative border border-zinc-800">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-red-600" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-zinc-500 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-300 italic mb-4 leading-relaxed">"{t.content}"</p>
                <div className="flex text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-red-600 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 leading-tight">READY TO CRUSH YOUR GOALS?</h2>
            <p className="text-red-100 text-lg">Claim your free orientation and gym tour today!</p>
          </div>
          <button className="bg-white text-red-600 px-10 py-4 rounded font-oswald font-bold text-xl hover:bg-zinc-100 transition-all shadow-xl hover:scale-105 active:scale-95">
            BOOK A FREE SESSION
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
