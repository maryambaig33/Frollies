import React from 'react';
import { IceCreamProduct } from '../types';
import { Plus } from 'lucide-react';

const products: IceCreamProduct[] = [
  {
    id: 1,
    name: "Mango Tango",
    tagline: "Dance with tropical vibes",
    image: "https://picsum.photos/seed/mango/400/400",
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
    price: "$5.50"
  },
  {
    id: 2,
    name: "Berry Blast",
    tagline: "Explosion of antioxidants",
    image: "https://picsum.photos/seed/berry/400/400",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
    price: "$5.50"
  },
  {
    id: 3,
    name: "Coco Clouds",
    tagline: "Creamy coconut daydream",
    image: "https://picsum.photos/seed/coconut/400/400",
    bgColor: "bg-cyan-100",
    textColor: "text-cyan-800",
    price: "$6.00"
  },
  {
    id: 4,
    name: "Zesty Lemon",
    tagline: "Sour then sweet",
    image: "https://picsum.photos/seed/lemon/400/400",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
    price: "$5.00"
  }
];

export const Products: React.FC = () => {
  return (
    <section id="flavors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-frollies-pink font-bold tracking-wider uppercase text-sm">Our Favorites</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-frollies-purple mt-2">
            Pick Your Passion
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`group relative rounded-3xl overflow-hidden ${product.bgColor} transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="p-6 h-full flex flex-col items-center text-center">
                <div className="w-48 h-48 mb-6 rounded-full overflow-hidden shadow-md border-4 border-white bg-white/50">
                   <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-110 duration-500"
                  />
                </div>
                <h3 className={`text-2xl font-display font-bold ${product.textColor} mb-2`}>
                  {product.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4">{product.tagline}</p>
                <div className="mt-auto flex items-center gap-4">
                  <span className={`font-bold text-lg ${product.textColor}`}>{product.price}</span>
                  <button className="w-10 h-10 rounded-full bg-white text-gray-800 shadow-md flex items-center justify-center hover:bg-frollies-teal hover:text-white transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};