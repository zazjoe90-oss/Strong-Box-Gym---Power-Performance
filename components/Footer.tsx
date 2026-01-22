import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="bg-red-600 p-2.5 rounded-lg shadow-lg shadow-red-600/20 group-hover:rotate-12 transition-all">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-oswald font-bold tracking-tighter">
                STRONG<span className="text-red-600">BOX</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-8 tracking-widest uppercase text-white">{t.footer.explore}</h4>
            <ul className="space-y-4">
              {['home', 'schedule', 'locations', 'trainers', 'memberships', 'blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'home' ? '/' : `/${item}`} 
                    className="text-zinc-500 hover:text-red-600 flex items-center group text-xs font-black uppercase tracking-[0.2em] transition-all"
                  >
                    <ArrowRight size={12} className={`mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-180 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all`} />
                    {t.nav[item as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-8 tracking-widest uppercase text-white">{t.footer.support}</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'FAQ', 'Contact Support', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-red-600 flex items-center group text-xs font-black uppercase tracking-[0.2em] transition-all">
                    <ArrowRight size={12} className={`mr-2 rtl:ml-2 rtl:mr-0 rtl:rotate-180 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all`} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-8 tracking-widest uppercase text-white">{t.footer.hq}</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-zinc-500 text-sm font-light">
                <MapPin size={18} className="text-red-600 shrink-0 mt-1" />
                <p>Al Jazi Gardens, West Bay, Doha, Qatar</p>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-light">
                <Phone size={18} className="text-red-600 shrink-0" />
                <p>+974 4455 6677</p>
              </div>
              <div className="flex items-center gap-4 text-zinc-500 text-sm font-light">
                <Mail size={18} className="text-red-600 shrink-0" />
                <p>info@strongboxqatar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-widest gap-6">
          <p>© 2024 STRONG BOX GYM QATAR. {t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;