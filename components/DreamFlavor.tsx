import React, { useState } from 'react';
import { Sparkles, Wand2, RefreshCw, ChefHat, Info } from 'lucide-react';
import { generateDreamFlavor } from '../services/geminiService';
import { GeneratedFlavor, LoadingState } from '../types';

export const DreamFlavor: React.FC = () => {
  const [mood, setMood] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<GeneratedFlavor | null>(null);

  const handleGenerate = async () => {
    if (!mood.trim()) return;
    
    setStatus(LoadingState.LOADING);
    setResult(null); // Clear previous result while loading
    try {
      const flavor = await generateDreamFlavor(mood);
      setResult(flavor);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section className="py-24 bg-frollies-purple text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
         <div className="absolute w-[500px] h-[500px] bg-frollies-pink rounded-full blur-[100px] -top-20 -left-20 animate-pulse"></div>
         <div className="absolute w-[600px] h-[600px] bg-frollies-teal rounded-full blur-[120px] bottom-0 right-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg animate-float">
            <Sparkles className="text-frollies-yellow" size={20} />
            <span className="font-bold tracking-wide text-frollies-yellow uppercase text-sm">Frollies Innovation Lab</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black leading-tight">
            Dream It.<br/>We Freeze It.
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto font-medium">
            Enter a vibe, a memory, or an emoji combo, and our Flavor AI will invent your custom Frollie concept instantly.
          </p>
        </div>

        {/* Interaction Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-2 sm:p-4 border border-white/20 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row gap-4 p-4">
            <div className="relative flex-grow">
                <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g., 'Sunset Beach Party' or 'Midnight Snack' 🌙"
                className="w-full bg-white text-frollies-purple placeholder-purple-300/70 rounded-2xl px-6 py-5 font-bold text-xl focus:outline-none focus:ring-4 focus:ring-frollies-pink border-none shadow-inner"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
            </div>
            <button
              onClick={handleGenerate}
              disabled={status === LoadingState.LOADING || !mood.trim()}
              className="bg-frollies-yellow hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed text-frollies-purple px-10 py-5 rounded-2xl font-black text-xl shadow-[0_4px_0_#ca8a04] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-3 min-w-[200px]"
            >
              {status === LoadingState.LOADING ? (
                <>
                  <RefreshCw className="animate-spin" /> Mixing...
                </>
              ) : (
                <>
                  <Wand2 strokeWidth={3} /> Invent
                </>
              )}
            </button>
          </div>

          {/* Error State */}
          {status === LoadingState.ERROR && (
            <div className="mx-4 mb-4 p-4 bg-red-400/90 text-white rounded-2xl text-center font-bold flex items-center justify-center gap-2 animate-pulse">
              <Info /> The brain-freeze is real. Try again!
            </div>
          )}

          {/* Result Card */}
          {result && status === LoadingState.SUCCESS && (
            <div className="mt-4 p-8 bg-white rounded-[2rem] text-frollies-purple animate-fade-in-up shadow-2xl relative overflow-hidden">
               {/* Ticket Stub Design Element */}
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-frollies-pink via-frollies-yellow to-frollies-teal"></div>

              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Visual Representation */}
                <div className="w-full md:w-1/3 flex justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 rounded-full blur-xl transform translate-y-4"></div>
                  <div 
                    className="w-56 h-[300px] rounded-[3rem] shadow-xl flex items-center justify-center relative overflow-hidden border-[6px] border-white ring-4 ring-black/5"
                    style={{ backgroundColor: result.colorHex }}
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Sparkles color="white" size={60} />
                     </div>
                     {/* Frollies stick */}
                     <div className="absolute bottom-0 w-12 h-24 bg-[#e8dcc5] rounded-t-lg -mb-10 shadow-inner"></div>
                     <span className="text-8xl relative z-10 filter drop-shadow-lg transform hover:scale-110 transition-transform cursor-default">✨</span>
                  </div>
                </div>
                
                {/* Text Details */}
                <div className="w-full md:w-2/3 text-left space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                        <ChefHat size={20} className="text-gray-400"/>
                        <span className="text-xs font-black tracking-widest uppercase text-gray-400">Concept #{Math.floor(Math.random() * 1000)}</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-display font-black leading-none mb-3" style={{ color: result.colorHex }}>
                        {result.name}
                    </h3>
                    <p className="text-xl text-gray-600 font-bold italic leading-relaxed">
                        "{result.description}"
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <h4 className="text-xs uppercase tracking-widest font-black text-gray-400 mb-3">Core Ingredients</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.ingredients.map((ing, i) => (
                          <span key={i} className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 shadow-sm">
                            {ing}
                          </span>
                        ))}
                      </div>
                  </div>
                    
                  <div className="flex items-start gap-3 text-sm font-bold text-frollies-purple/70 bg-frollies-yellow/10 p-4 rounded-xl">
                    <Info className="flex-shrink-0 mt-0.5" size={16} />
                    <p>{result.funFact}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};