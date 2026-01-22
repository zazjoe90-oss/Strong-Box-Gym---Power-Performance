import React from 'react';
import { MapPin, Phone, Mail, CheckCircle, Navigation } from 'lucide-react';
import { LOCATIONS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Locations: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-oswald font-black mb-6 uppercase tracking-tighter">
            {t.locations.title} <span className="text-red-600">{t.locations.titleRed}</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">{t.locations.subtitle}</p>
        </div>

        <div className="grid gap-24">
          {LOCATIONS.map((branch, index) => (
            <div key={branch.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              {/* Info Side */}
              <div className="flex-1 w-full">
                <div className="glass border-white/5 p-12 rounded-[2.5rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none group-hover:bg-red-600/10 transition-colors"></div>
                  
                  <h2 className="text-4xl font-oswald font-black mb-10 text-white uppercase tracking-tight">{branch.name}</h2>
                  
                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-6">
                      <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                        <MapPin size={24} />
                      </div>
                      <p className="text-zinc-300 text-xl leading-snug font-light">{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                        <Phone size={24} />
                      </div>
                      <p className="text-zinc-300 font-bold tracking-wider">{branch.phone}</p>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                        <Mail size={24} />
                      </div>
                      <p className="text-zinc-300 font-bold tracking-wider">{branch.email}</p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-6">{t.locations.amenities}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {branch.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-zinc-400 text-sm font-light">
                          <CheckCircle size={16} className="text-red-600 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-oswald font-black tracking-[0.2em] transition-all uppercase shadow-xl shadow-red-600/20"
                  >
                    <Navigation size={20} />
                    {t.locations.directions}
                  </a>
                </div>
              </div>

              {/* Map Side */}
              <div className="flex-1 w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/5 grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700 shadow-2xl">
                <iframe 
                  src={branch.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;