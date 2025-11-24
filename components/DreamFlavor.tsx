import React, { useState } from 'react';
import { Sparkles, Wand2, RefreshCw } from 'lucide-react';
import { generateDreamFlavor } from '../services/geminiService';
import { GeneratedFlavor, LoadingState } from '../types';

export const DreamFlavor: React.FC = () => {
  const [mood, setMood] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<GeneratedFlavor | null>(null);

  const handleGenerate = async () => {
    if (!mood.trim()) return;
    
    setStatus(LoadingState.LOADING);
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
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute w-64 h-64 bg-frollies-pink rounded-full blur-3xl -top-20 -left-20"></div>
         <div className="absolute w-96 h-96 bg-frollies-teal rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 border border-white/20">
            <Sparkles className="text-frollies-yellow" size={18} />
            <span className="font-bold text-sm tracking-wide">AI Powered Kitchen</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Dream It. We Churn It.
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Describe your mood, a memory, or just smash some emojis, and our AI Flavor Master will invent your perfect personalized treat.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 sm:p-4 border border-white/20 shadow-2xl">
          <div className="flex flex-col sm:flex-row gap-4 p-4">
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g., 'Rainy day jazz' or 'Unicorn birthday party' 🦄"
              className="flex-1 bg-white/90 text-frollies-purple placeholder-purple-300 rounded-2xl px-6 py-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-frollies-pink/50 border-none"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={status === LoadingState.LOADING || !mood.trim()}
              className="bg-frollies-yellow hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed text-frollies-purple px-8 py-4 rounded-2xl font-black text-lg shadow-[0_4px_0_#ca8a04] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2 min-w-[180px]"
            >
              {status === LoadingState.LOADING ? (
                <>
                  <RefreshCw className="animate-spin" /> Churning...
                </>
              ) : (
                <>
                  <Wand2 /> Invent!
                </>
              )}
            </button>
          </div>

          {status === LoadingState.ERROR && (
            <div className="p-4 m-4 bg-red-100 text-red-700 rounded-xl text-center font-bold">
              Oops! The ice cream machine is jamming. Try again!
            </div>
          )}

          {result && status === LoadingState.SUCCESS && (
            <div className="mt-6 p-6 sm:p-8 bg-white rounded-2xl text-frollies-purple animate-fade-in-up">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div 
                    className="w-48 h-48 rounded-full shadow-inner flex items-center justify-center relative overflow-hidden border-8 border-gray-50"
                    style={{ backgroundColor: result.colorHex }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
                    <span className="text-6xl filter drop-shadow-md">🍦</span>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 text-left">
                  <h3 className="text-3xl font-display font-black mb-2" style={{ color: result.colorHex }}>
                    {result.name}
                  </h3>
                  <p className="text-xl text-gray-700 font-medium italic mb-4">
                    "{result.description}"
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm uppercase tracking-bold font-bold text-gray-400 mb-2">Ingredients</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.ingredients.map((ing, i) => (
                          <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-bold text-gray-600">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-frollies-yellow/20 p-4 rounded-xl border border-frollies-yellow/50">
                      <p className="text-sm font-bold text-frollies-purple/80">
                        Did you know? {result.funFact}
                      </p>
                    </div>
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