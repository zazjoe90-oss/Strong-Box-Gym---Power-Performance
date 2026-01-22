import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer id="footer" className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* ABOUT */}
          <div className="space-y-8">
            <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">{t.nav.groups.about}</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/#philosophy" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.whySbx}</Link></li>
              <li><Link to="/trainers" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.ourTeam}</Link></li>
              <li><Link to="/blog" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.ourBlog}</Link></li>
              <li><Link to="/blog" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.successStories}</Link></li>
            </ul>
          </div>

          {/* COMMUNITY */}
          <div className="space-y-8">
            <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">{t.nav.groups.community}</h4>
            <ul className="space-y-4">
              <li><Link to="/schedule" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.events}</Link></li>
              <li><a href="https://instagram.com" target="_blank" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.insta}</a></li>
              <li><a href="https://facebook.com" target="_blank" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.fb}</a></li>
            </ul>
          </div>

          {/* MEMBERS */}
          <div className="space-y-8">
            <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">{t.nav.groups.members}</h4>
            <ul className="space-y-4">
              <li><Link to="/memberships" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.becomeMember}</Link></li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="space-y-8">
            <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">{t.nav.groups.programs}</h4>
            <ul className="space-y-4">
              <li><Link to="/schedule" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.schedule}</Link></li>
              <li><Link to="/schedule" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.quwwa}</Link></li>
              <li><Link to="/schedule" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.sbxFit}</Link></li>
              <li><Link to="/schedule" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.hybrid}</Link></li>
              <li><Link to="/trainers" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.pt}</Link></li>
              <li><Link to="/memberships" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.corporate}</Link></li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="space-y-8">
            <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">{t.nav.groups.getInTouch}</h4>
            <ul className="space-y-4">
              <li><Link to="/locations" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.contact}</Link></li>
              <li><Link to="/locations" className="text-zinc-500 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors">{t.nav.items.taster}</Link></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all"><Facebook size={18} /></a>
              <a href="https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass flex items-center justify-center text-white rounded-lg hover:bg-red-600 transition-all"><Youtube size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="bg-red-600 p-2 rounded-lg group-hover:rotate-12 transition-all">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-oswald font-bold tracking-tighter">
              STRONG<span className="text-red-600">BOX</span>
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">{t.nav.items.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.nav.items.terms}</a>
            <span>© 2024 STRONG BOX QATAR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;