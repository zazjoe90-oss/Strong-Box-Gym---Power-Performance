import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell, Globe, ChevronRight, Home, Instagram, Facebook, Youtube } from 'lucide-react';
// @ts-ignore
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Global Key Listener for Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

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
        { name: t.nav.home, path: '/', icon: <Home size={16} /> },
        { name: t.nav.items.whySbx, path: '/#philosophy' },
        { name: t.nav.items.ourTeam, path: '/trainers' },
        { name: t.nav.items.ourBlog, path: '/blog' },
        { name: t.nav.items.successStories, path: '/blog' },
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
      ]
    },
    {
      title: t.nav.groups.community,
      items: [
        { name: t.nav.items.events, path: '/schedule' },
        { name: t.nav.items.insta, path: 'https://www.instagram.com/thestrongbox/' },
        { name: t.nav.items.fb, path: 'https://www.facebook.com/strongboxqatar/?_rdc=2&_rdr#' },
      ]
    },
    {
      title: t.nav.groups.members,
      items: [
        { name: t.nav.items.becomeMember, path: '/memberships' },
        { name: t.nav.items.corporate, path: '/memberships' },
      ]
    },
    {
      title: t.nav.groups.getInTouch,
      items: [
        { name: t.nav.items.contact, path: '/locations' },
        { name: t.nav.items.taster, path: '/locations' },
        { name: t.nav.items.privacy, path: '#' },
        { name: t.nav.items.terms, path: '#' },
      ]
    }
  ];

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-[110]"
        style={{ scaleX }}
      />
      
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || isOpen ? 'bg-zinc-950 border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 rtl:space-x-reverse group relative"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-red-600 p-2.5 rounded-lg shadow-lg shadow-red-600/20"
              >
                <Dumbbell className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-oswald font-bold tracking-tighter leading-none text-white">
                STRONG<span className="text-red-600">BOX</span>
              </span>
            </Link>

            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="hidden sm:flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full border border-white/10 hover:border-red-600/50"
              >
                <Globe size={12} className="text-red-600" />
                {language === 'en' ? 'ARABIC' : 'ENGLISH'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-5 py-3 bg-zinc-900 border border-white/10 rounded-xl text-white font-oswald font-bold text-xs tracking-[0.2em] hover:bg-zinc-800 transition-all uppercase"
              >
                <span className="hidden sm:inline">{isOpen ? 'CLOSE' : t.nav.menu}</span>
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-zinc-950 z-[90] overflow-y-auto pt-32 pb-20 px-4 sm:px-6 lg:px-8 cursor-pointer"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="cursor-default"
              >
                {/* Back to Home Quick Link for Mobile */}
                <div className="lg:hidden mb-12">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-6 glass border-red-600/30 rounded-2xl text-white"
                  >
                    <Home className="text-red-600" size={24} />
                    <span className="text-2xl font-oswald font-bold tracking-tight uppercase">
                      {t.nav.home}
                    </span>
                  </Link>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 lg:gap-8">
                  {menuGroups.map((group, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="space-y-6"
                    >
                      <h4 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase border-b border-red-600/20 pb-4">{group.title}</h4>
                      <ul className="space-y-4">
                        {group.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.path}
                              className={`group flex items-center justify-between transition-colors py-1 ${item.path === '/' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                              onClick={() => {
                                if (item.path.startsWith('http')) window.open(item.path, '_blank');
                                setIsOpen(false);
                              }}
                            >
                              <span className="flex items-center gap-2 text-lg font-oswald font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-300">
                                {item.name}
                              </span>
                              <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-all ${isRTL ? 'rotate-180' : ''}`} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/thestrongbox/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={24} /></a>
                    <a href="https://www.facebook.com/strongboxqatar/?_rdc=2&_rdr#" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Facebook size={24} /></a>
                    <a href="https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors"><Youtube size={24} /></a>
                  </div>
                  <p className="text-zinc-600 text-[10px] font-black tracking-widest uppercase">
                    © 2024 STRONG BOX QATAR — ELITE PERFORMANCE HUB
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;