import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-frollies-teal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-frollies-teal font-display font-bold text-xl">
                F
              </div>
              <span className="font-display font-bold text-3xl">Frollies</span>
            </div>
            <p className="max-w-sm text-teal-100 font-medium text-lg mb-6">
              Making the world a cooler place, one scoop at a time. All natural, all good vibes.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-frollies-teal transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Our Flavors', 'Ingredients', 'About Us', 'Sustainability', 'Jobs'].map(link => (
                <li key={link}>
                  <a href="#" className="text-teal-100 hover:text-white font-medium hover:underline decoration-frollies-yellow decoration-2 underline-offset-4">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Get the Scoop</h4>
            <p className="text-teal-100 mb-4">Sign up for sweet deals and new flavor drops.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-2 w-full placeholder-teal-200 focus:outline-none focus:bg-white/20"
              />
              <button className="bg-frollies-yellow text-frollies-purple p-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-400/50 pt-8 text-center text-teal-100 font-medium">
          <p>© {new Date().getFullYear()} Frollies Ice Cream. Made with ☀️ + ❄️.</p>
        </div>
      </div>
    </footer>
  );
};