import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-frollies-yellow shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-frollies-pink rounded-full flex items-center justify-center text-white font-display font-bold text-xl transform -rotate-12">
              F
            </div>
            <span className="font-display font-bold text-3xl text-frollies-purple tracking-tight">
              Frollies
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Flavors', 'Our Story', 'Find a Store'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="font-display text-lg font-medium text-gray-600 hover:text-frollies-pink transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-frollies-teal hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_4px_0_rgb(13,148,136)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2">
              <ShoppingBag size={18} />
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-frollies-pink p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Flavors', 'Our Story', 'Find a Store'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-frollies-pink hover:bg-pink-50 font-display"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-frollies-teal text-white px-6 py-3 rounded-full font-bold shadow-[0_4px_0_rgb(13,148,136)] active:shadow-none active:translate-y-1 transition-all">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};