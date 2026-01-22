import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location]);

  const menuGroups = [
    {
      title: t.nav.groups.about,
      items: [
        { name: t.nav.home, path: '/' },
        { name: t.nav.items.whySbx, path: '/#philosophy' },
        { name: t.nav.items.ourTeam, path: '/trainers' },
        { name: t.nav.items.ourBlog, path: '/blog' },
        { name: t.nav.items.successStories, path: '/blog' },
        { name: t.nav.items.privacy, path: '#' },
        { name: t.nav.items.terms, path: '#' },
      ]
    },
    {
      title: t.nav.groups.community,
      items: [
        { name: t.nav.items.events, path: '/schedule' },
        { name: t.nav.items.insta, path: 'https://instagram.com' },
        { name: t.nav.items.fb, path: 'https://facebook.com' },
      ]
    },
    {
      title: t.nav.groups.members,
      items: [
        { name: t.nav.items.becomeMember, path: '/memberships' },
      ]
    },
    {
      title: t.nav.groups.programs,
      items: [
        { name: t.nav.schedule, path: '/schedule' },
        { name: t.nav.items.quwwa, path: '/schedule' },
        { name: t.nav.items.sbxFit, path: '/schedule' },
        { name: t.nav.items.hybrid, path: '/schedule' },
        { name: t.nav.items.pt, path: '/trainers' },
        { name: t.nav.items.corporate, path: '/memberships' },
      ]
    },
    {
      title: t.nav.groups.getInTouch,
      items: [
        { name: t.nav.items.contact, path: '/locations' },
        { name: t.nav.items.taster, path: '/locations' },
        { name: t.nav.items.follow, path: '/#footer' },
      ]
    }
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || isOpen ? 'bg-zinc-950 border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group relative">
            <div className="bg-red-600 p-2.5 rounded-lg shadow-lg shadow-red-600/20 group-hover:scale-110 transition-all duration-300">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-oswald font-bold tracking-tighter leading-none">
              STRONG<span className="text-red-600">BOX</span>
            </span>
          </Link>

          {/* Controls */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border border-white/10 hover:border-red-600/50"
            >
              <Globe size={12} className="text-red-600" />
              {language === 'en' ? 'ARABIC' : 'ENGLISH'}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-5 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white font-oswald font-bold text-xs tracking-[0.2em] hover:bg-zinc-800 transition-all uppercase"
            >
              <span className="hidden sm:inline">{isOpen ? 'CLOSE' : t.nav.menu}</span>
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mega Menu */}
      <div className={`fixed inset-0 bg-zinc-950 z-[90] transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
        <div className="h-full overflow-y-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8">
            {menuGroups.map((group, idx) => (
              <div key={idx} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase border-b border-red-600/20 pb-4">{group.title}</h4>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        className="group flex items-center justify-between text-zinc-400 hover:text-white transition-colors py-1"
                        onClick={() => item.path.startsWith('http') && window.open(item.path, '_blank')}
                      >
                        <span className="text-lg font-oswald font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                        <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-all ${isRTL ? 'rotate-180' : ''}`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
             <div className="flex gap-10">
                <a href="#" className="text-zinc-500 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Instagram</a>
                <a href="#" className="text-zinc-500 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Facebook</a>
                <a href="https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Youtube</a>
             </div>
             <div className="flex items-center gap-4">
                <button 
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="sm:hidden flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-[10px] font-black tracking-widest px-4 py-2 rounded-full border border-white/10"
                >
                  <Globe size={12} className="text-red-600" />
                  {language === 'en' ? 'ARABIC' : 'ENGLISH'}
                </button>
                <Link to="/memberships" className="bg-red-600 text-white px-8 py-3 rounded-xl font-oswald font-bold text-xs tracking-widest uppercase hover:bg-red-700 transition-all">
                  {t.nav.join}
                </Link>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;