
import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-oswald font-extrabold mb-4">FITNESS <span className="text-red-600">BLOG</span></h1>
          <p className="text-zinc-400">Tips, tricks, and science-backed advice to elevate your performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-zinc-500 text-xs mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-xl font-oswald font-bold mb-4 leading-tight group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#" className="flex items-center text-red-600 font-bold text-sm uppercase tracking-widest hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24 relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-oswald font-bold mb-4 uppercase">GET FITNESS TIPS IN YOUR INBOX</h2>
            <p className="text-zinc-400 mb-8">Join our newsletter for weekly workout programming and nutrition advice from our head coaches.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-zinc-950 border border-zinc-800 rounded px-6 py-4 focus:outline-none focus:border-red-600 transition-colors"
                required
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-oswald font-bold tracking-widest transition-all">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
