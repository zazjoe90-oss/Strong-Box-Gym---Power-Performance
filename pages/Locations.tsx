
import React from 'react';
import { MapPin, Phone, Mail, CheckCircle, Navigation } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-oswald font-extrabold mb-4 uppercase">OUR <span className="text-red-600">LOCATIONS</span></h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">Find a Strong Box near you in Qatar and start your fitness journey today.</p>
        </div>

        <div className="grid gap-16">
          {LOCATIONS.map((branch, index) => (
            <div key={branch.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
              {/* Info Side */}
              <div className="flex-1 w-full">
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 h-full">
                  <h2 className="text-3xl font-oswald font-bold mb-6 text-white uppercase tracking-tight">{branch.name}</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600/10 p-2 rounded text-red-600">
                        <MapPin size={20} />
                      </div>
                      <p className="text-zinc-300 text-lg leading-snug">{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-red-600/10 p-2 rounded text-red-600">
                        <Phone size={20} />
                      </div>
                      <p className="text-zinc-300">{branch.phone}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-red-600/10 p-2 rounded text-red-600">
                        <Mail size={20} />
                      </div>
                      <p className="text-zinc-300">{branch.email}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-oswald font-bold text-red-600 uppercase tracking-widest mb-4">Branch Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {branch.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                          <CheckCircle size={14} className="text-red-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-oswald font-bold tracking-widest transition-all uppercase"
                  >
                    <Navigation size={18} />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>

              {/* Map Side */}
              <div className="flex-1 w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-zinc-800 grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500">
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
