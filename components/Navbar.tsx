
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Locations', path: '/locations' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'AI Planner', path: '/planner' },
    { name: 'Blog', path: '/blog' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-red-600 p-2 rounded-md group-hover:rotate-12 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-oswald font-bold tracking-tighter">
              STRONG<span className="text-red-600">BOX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-red-600' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/memberships"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-oswald text-sm font-bold tracking-widest transition-all duration-200 uppercase"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium uppercase ${
                location.pathname === link.path ? 'bg-zinc-900 text-red-600' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/memberships"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-3 py-3 mt-4 rounded font-oswald font-bold"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
