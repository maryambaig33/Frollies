import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-frollies-yellow/30 to-frollies-cream pt-20 pb-32 lg:pt-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-10 lg:right-40 text-frollies-pink/20 animate-bounce-slow">
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-10 text-frollies-teal/20 animate-spin-slow" style={{ animationDuration: '10s' }}>
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-block bg-frollies-pink/10 text-frollies-pink font-bold px-4 py-2 rounded-full uppercase tracking-wider text-sm mb-2 border-2 border-frollies-pink/20 transform rotate-[-2deg]">
              100% Real Fruit • 0% Fake Stuff
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-frollies-purple leading-[1.05] tracking-tight">
              Happiness on a <br/>
              <span className="text-frollies-pink relative inline-block">
                Stick
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-frollies-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>.
            </h1>
            <p className="text-xl text-gray-600 font-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
              We blend, freeze, and serve the freshest fruit frollies in town. Handcrafted daily in our parlor for that perfect melt-in-your-mouth moment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <button className="bg-frollies-pink hover:bg-pink-500 text-white text-xl px-10 py-4 rounded-2xl font-bold shadow-[0_6px_0_#be185d] active:shadow-none active:translate-y-[6px] transition-all flex items-center justify-center gap-3 group">
                View Flavors 
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-frollies-purple text-xl px-10 py-4 rounded-2xl font-bold border-2 border-frollies-purple shadow-[0_6px_0_#554178] active:shadow-none active:translate-y-[6px] transition-all">
                Our Story
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative perspective-1000">
            <div className="relative z-10 animate-float transform transition-transform hover:scale-105 duration-700">
               <div className="relative mx-auto w-72 lg:w-96 aspect-[3/4]">
                 <img 
                  src="https://images.unsplash.com/photo-1563222384-904d9c759c5d?q=80&w=800&auto=format&fit=crop" 
                  alt="Assorted Fruit Popsicles" 
                  className="rounded-[3rem] shadow-2xl rotate-6 border-8 border-white object-cover w-full h-full"
                />
                {/* Decorative sticker */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-frollies-yellow rounded-full flex items-center justify-center font-black text-frollies-purple text-center leading-tight shadow-lg rotate-12 border-4 border-white">
                  NEW<br/>DROP!
                </div>
               </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-frollies-teal rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-frollies-pink rounded-full opacity-20 blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
      
      {/* Melting Wave Bottom Separator */}
      <div className="absolute bottom-0 w-full leading-none text-white">
        <svg className="block w-full h-16 lg:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};