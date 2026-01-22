
import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-md">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-oswald font-bold tracking-tighter">
                STRONG<span className="text-red-600">BOX</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Push your limits and redefine what is possible. Join the Strong Box community and transform your body and mind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-zinc-900 hover:bg-red-600 text-white rounded transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-red-600 text-white rounded transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-red-600 text-white rounded transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Schedule', 'Locations', 'Trainers', 'Memberships', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-zinc-400 hover:text-red-600 flex items-center group text-sm transition-colors duration-200"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-6 tracking-wide">Support</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'FAQ', 'Contact Support', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-400 hover:text-red-600 flex items-center group text-sm transition-colors duration-200">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-oswald font-bold mb-6 tracking-wide">Headquarters</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-zinc-400 text-sm">
                <MapPin size={18} className="text-red-600 shrink-0 mt-1" />
                <p>Al Jazi Gardens, West Bay, Doha, Qatar</p>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Phone size={18} className="text-red-600 shrink-0" />
                <p>+974 4455 6677</p>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400 text-sm">
                <Mail size={18} className="text-red-600 shrink-0" />
                <p>info@strongboxqatar.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-xs gap-4">
          <p>© 2024 Strong Box Gym Qatar. All rights reserved.</p>
          <p>Designed for excellence and performance in the Middle East.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
