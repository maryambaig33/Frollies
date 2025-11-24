import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-frollies-yellow/20 pt-16 pb-32">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-frollies-pink/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-frollies-teal/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-display font-black text-frollies-purple leading-[1.1]">
              Real Fruit.<br/>
              <span className="text-frollies-pink">Real Fun.</span><br/>
              No Regrets.
            </h1>
            <p className="text-xl text-gray-700 max-w-lg mx-auto lg:mx-0 font-sans leading-relaxed">
              Dive into a world of blended perfection. Our smoothies and popsicles are crafted with 100% real fruit and zero boring vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-frollies-pink hover:bg-pink-500 text-white text-lg px-8 py-4 rounded-full font-bold shadow-[0_6px_0_#be185d] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-2">
                Find Flavors <ArrowRight size={20} />
              </button>
              <button className="bg-white hover:bg-gray-50 text-frollies-purple text-lg px-8 py-4 rounded-full font-bold border-2 border-frollies-purple shadow-[0_6px_0_#554178] active:shadow-none active:translate-y-[6px] transition-all">
                Our Story
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
               <img 
                src="https://picsum.photos/seed/popsicle/600/800" 
                alt="Delicious Strawberry Popsicle" 
                className="rounded-[3rem] shadow-2xl rotate-6 border-8 border-white mx-auto max-h-[500px] object-cover"
              />
            </div>
            {/* Background decorative elements behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 w-full leading-none text-white">
        <svg className="block w-full h-24 lg:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};