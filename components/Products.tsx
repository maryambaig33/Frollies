import React from 'react';
import { IceCreamProduct } from '../types';
import { Plus, Heart } from 'lucide-react';

const products: IceCreamProduct[] = [
  {
    id: 1,
    name: "Mango Tango",
    tagline: "Pure Mango & Chili Kick",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    price: "$4.50"
  },
  {
    id: 2,
    name: "Berry Smash",
    tagline: "Strawberry, Raspberry, Basil",
    image: "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    price: "$4.50"
  },
  {
    id: 3,
    name: "Coco Lime",
    tagline: "Coconut Cream & Zest",
    image: "https://images.unsplash.com/photo-1517093157656-b9ecde51b54a?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-lime-50",
    textColor: "text-lime-600",
    price: "$5.00"
  },
  {
    id: 4,
    name: "Sunshine Pop",
    tagline: "Pineapple, Orange, Ginger",
    image: "https://images.unsplash.com/photo-1502462041640-b3d7e50d363e?q=80&w=800&auto=format&fit=crop",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    price: "$4.50"
  }
];

export const Products: React.FC = () => {
  return (
    <section id="flavors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="inline-block border-2 border-frollies-teal text-frollies-teal font-bold px-4 py-1 rounded-full mb-4 text-sm tracking-widest uppercase">
            Fresh From the Freezer
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black text-frollies-purple mt-2">
            The Flavor Lineup
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium text-lg">
            Made with whole fruit, organic cane sugar, and a whole lot of love. No artificial nonsense allowed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group relative rounded-[2.5rem] p-4 ${product.bgColor} transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl border-4 border-white shadow-lg`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] mb-6 rounded-[2rem] overflow-hidden shadow-inner bg-white/40">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-400 hover:bg-white hover:text-red-500 hover:scale-110 transition-all">
                  <Heart size={20} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Content */}
              <div className="text-center px-2 pb-4">
                <h3 className={`text-2xl font-display font-black ${product.textColor} mb-1 leading-none`}>
                  {product.name}
                </h3>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-wide mb-4 opacity-80">{product.tagline}</p>
                
                <div className="flex items-center justify-between bg-white rounded-xl p-2 pl-4 shadow-sm">
                  <span className={`font-black text-xl ${product.textColor}`}>{product.price}</span>
                  <button className="w-10 h-10 rounded-lg bg-frollies-purple text-white flex items-center justify-center hover:bg-frollies-pink transition-colors active:scale-90">
                    <Plus size={20} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-frollies-purple font-bold text-lg border-b-2 border-frollies-purple hover:text-frollies-pink hover:border-frollies-pink transition-colors pb-1">
                View Full Menu
                <Plus size={18} />
            </button>
        </div>
      </div>
    </section>
  );
};