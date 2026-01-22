
import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { MEMBERSHIPS } from '../constants';

const Memberships: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-oswald font-extrabold mb-4">MEMBERSHIP <span className="text-red-600">PLANS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">Transparent pricing for elite training. Choose the plan that fuels your journey to greatness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-zinc-900 border ${plan.recommended ? 'border-red-600 scale-105 z-10' : 'border-zinc-800'} p-8 rounded-2xl flex flex-col transition-all hover:translate-y-[-8px]`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full font-oswald font-bold text-xs tracking-widest uppercase flex items-center">
                  <ShieldCheck size={14} className="mr-1" /> MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-oswald font-bold mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-oswald font-bold text-red-600">{plan.price}</span>
                  <span className="text-zinc-400 font-medium text-sm">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                    <Check className="text-red-600 shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded font-oswald font-bold tracking-widest transition-all ${
                  plan.recommended 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-oswald font-bold mb-4 uppercase">Corporate Memberships</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Boost employee wellness and productivity with our tailored corporate packages for teams of 10 or more.</p>
          <button className="text-red-600 border border-red-600/30 hover:bg-red-600 hover:text-white px-8 py-3 rounded font-oswald font-bold tracking-widest transition-all">
            GET A CORPORATE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memberships;
