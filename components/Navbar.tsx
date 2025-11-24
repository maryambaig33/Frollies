import React, { useState } from 'react';
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b-4 border-frollies-yellow shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="w-12 h-12 bg-frollies-pink rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
              F
            </div>
            <span className="font-display font-bold text-3xl text-frollies-purple tracking-tight group-hover:text-frollies-pink transition-colors">
              Frollies
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Flavors', 'About Us', 'Visit Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="font-display text-lg font-bold text-gray-500 hover:text-frollies-pink transition-colors relative after:content-[''] after:absolute after:w-0 after:h-1 after:bottom-[-4px] after:left-0 after:bg-frollies-pink after:transition-all hover:after:w-full rounded-lg px-2"
              >
                {item}
              </a>
            ))}
            <button className="bg-frollies-teal hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-bold shadow-[0_4px_0_rgb(13,148,136)] active:shadow-none active:translate-y-1 transition-all flex items-center gap-2 transform hover:scale-105">
              <ShoppingBag size={18} />
              Order Pickup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-frollies-purple hover:text-frollies-pink p-2 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-4 border-frollies-pink shadow-xl animate-fade-in-down">
          <div className="px-4 py-6 space-y-3">
            {['Flavors', 'About Us', 'Visit Us'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-xl font-bold text-gray-700 hover:text-white hover:bg-frollies-pink font-display transition-all"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <button className="w-full bg-frollies-teal text-white px-6 py-4 rounded-xl font-bold shadow-[0_4px_0_rgb(13,148,136)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Order Pickup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};