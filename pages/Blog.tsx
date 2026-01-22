import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-oswald font-black mb-6">
            {t.blog.title} <span className="text-red-600">{t.blog.titleRed}</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all flex flex-col group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                  <span className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em]">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-6 text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-red-600" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} className="text-red-600" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-oswald font-bold mb-6 leading-tight group-hover:text-red-600 transition-colors uppercase tracking-tight">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-10 flex-grow leading-relaxed font-light">
                  {post.excerpt}
                </p>
                <a href="#" className="flex items-center text-white font-black text-xs uppercase tracking-[0.2em] group-hover:text-red-600 transition-all">
                  {t.blog.readMore} <ArrowRight size={16} className={`ml-3 rtl:mr-3 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform`} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-red-600 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="glass border-white/5 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-4xl md:text-6xl font-oswald font-black mb-6 uppercase tracking-tighter">{t.blog.newsletter.title}</h2>
              <p className="text-zinc-400 text-lg mb-12 font-light">{t.blog.newsletter.desc}</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder={t.blog.newsletter.placeholder} 
                  className="flex-grow bg-zinc-950/50 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-red-600 transition-all text-white font-bold"
                  required
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-2xl font-oswald font-black tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20 uppercase">
                  {t.blog.newsletter.button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;