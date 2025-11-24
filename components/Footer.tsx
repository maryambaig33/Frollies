import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="visit-us" className="bg-frollies-teal text-white pt-24 pb-12 relative overflow-hidden">
        {/* Decorative Wave Top */}
       <div className="absolute top-0 w-full leading-none text-white transform rotate-180">
        <svg className="block w-full h-12 lg:h-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-frollies-teal font-display font-bold text-2xl shadow-sm rotate-6">
                F
              </div>
              <span className="font-display font-bold text-4xl tracking-tight">Frollies</span>
            </div>
            <p className="text-teal-50 font-medium text-lg mb-8 leading-relaxed">
              Spreading joy one frozen fruit bar at a time. Plant-based, gluten-free, and guilt-free.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-frollies-teal hover:-translate-y-1 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us Column */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-display font-bold text-2xl mb-6 text-white">Visit The Parlour</h4>
            <div className="space-y-4 text-teal-50">
                <div className="flex items-start gap-3">
                    <MapPin className="mt-1 flex-shrink-0" size={20} />
                    <p>123 Sunshine Blvd,<br/>Santa Monica, CA 90401</p>
                </div>
                <div className="flex items-start gap-3">
                    <Clock className="mt-1 flex-shrink-0" size={20} />
                    <p>Daily: 11am - 9pm<br/>Fri-Sat: 11am - 10pm</p>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <p>(555) 123-4567</p>
                </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-display font-bold text-2xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Menu', 'Catering', 'Our Story', 'Wholesale', 'Careers'].map(link => (
                <li key={link}>
                  <a href="#" className="text-teal-50 hover:text-white font-bold hover:translate-x-1 inline-block transition-transform">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="font-display font-bold text-2xl mb-6 text-white">Get The Scoop</h4>
            <p className="text-teal-50 mb-4 font-medium">Join the club for free birthday frollies and exclusive drops!</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-2 border-teal-300/30 rounded-xl px-5 py-3 w-full placeholder-teal-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-all font-bold"
              />
              <button className="bg-frollies-yellow text-frollies-purple py-3 rounded-xl font-black text-lg shadow-[0_4px_0_#ca8a04] active:shadow-none active:translate-y-1 transition-all hover:bg-yellow-300">
                Join The Club
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-teal-400/30 pt-8 text-center text-teal-100 font-bold text-sm">
          <p className="opacity-70">© {new Date().getFullYear()} Frollies Ice Cream Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};