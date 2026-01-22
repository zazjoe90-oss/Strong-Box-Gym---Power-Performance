import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Globe, ArrowRight } from 'lucide-react';
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

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.schedule, path: '/schedule' },
    { name: t.nav.locations, path: '/locations' },
    { name: t.nav.trainers, path: '/trainers' },
    { name: t.nav.planner, path: '/planner' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
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

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10 rtl:space-x-reverse">
            <div className="flex space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-2 group ${
                    location.pathname === link.path ? 'text-red-600' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse border-l border-white/10 rtl:border-l-0 rtl:border-r pl-6 rtl:pl-0 rtl:pr-6">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border border-white/10 hover:border-red-600/50"
              >
                <Globe size={12} className="text-red-600" />
                {language === 'en' ? 'ARABIC' : 'ENGLISH'}
              </button>
              <Link
                to="/memberships"
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-oswald text-xs font-bold tracking-widest transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-red-600/30 uppercase"
              >
                {t.nav.join}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="p-2 text-zinc-400"
              >
                <Globe size={20} />
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 bg-zinc-900 border border-white/10 rounded-lg text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-[90] transition-transform duration-500 lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-32 px-8">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-4xl font-oswald font-bold text-white hover:text-red-600 transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/memberships"
              className="block text-4xl font-oswald font-bold text-red-600 uppercase"
            >
              {t.nav.join}
            </Link>
          </div>
          <div className="mt-auto pb-12">
             <div className="h-px bg-white/10 mb-8 w-full"></div>
             <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-4">Follow the box</p>
             <div className="flex gap-6 text-white">
               <span>INSTA</span>
               <span>FACEBOOK</span>
               <span>YOUTUBE</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;