
import React from 'react';
import { Button } from "@/components/ui/button";

const TruthEngine = () => {
  return (
    <section id="narrative" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Reputation is a Weapon. <span className="text-sovereign-gold">Use It Wisely.</span>
            </h2>
            
            <p className="text-white/70 mb-8 text-lg">
              Real-time narrative defense AI to detect threats, deploy truth, or redirect narrative arcs.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time media sentiment dashboard",
                "AI-generated prestige pivots",
                "Myth-building interface for legacy amplification"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 h-6 w-6 flex items-center justify-center rounded-full border border-sovereign-gold/50">
                    <span className="text-sovereign-gold text-xs">●</span>
                  </div>
                  <span className="text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-sovereign-dark hover:bg-sovereign-muted border border-sovereign-gold/40 text-sovereign-gold">
              Defend My Narrative
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto glass-panel sovereign-border p-4 neo-glow">
              {/* Media sentiment visualization */}
              <div className="absolute top-4 left-4 text-sovereign-gold/90 text-sm font-semibold">
                NARRATIVE MAP
              </div>
              
              <div className="h-full w-full flex flex-col justify-center">
                {/* Central node */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="absolute h-24 w-24 bg-sovereign-gold/10 border border-sovereign-gold/40 rounded-full flex items-center justify-center">
                    <div className="h-16 w-16 bg-sovereign-gold/15 border border-sovereign-gold/50 rounded-full flex items-center justify-center">
                      <div className="h-8 w-8 bg-sovereign-gold/20 border border-sovereign-gold/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                    <line x1="200" y1="200" x2="100" y2="100" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="200" y1="200" x2="300" y2="100" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="200" y1="200" x2="100" y2="300" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="200" y1="200" x2="300" y2="300" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="200" y1="200" x2="50" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="200" y1="200" x2="350" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" />
                  </svg>
                  
                  {/* Satellite nodes */}
                  <div className="absolute top-[25%] left-[25%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-[25%] right-[25%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-[25%] left-[25%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-[25%] right-[25%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute left-[12.5%] top-[50%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute right-[12.5%] top-[50%] h-6 w-6 bg-sovereign-gold/15 border border-sovereign-gold/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sovereign-gold/70 text-xs flex items-center">
                      <div className="h-2 w-2 bg-sovereign-gold/70 rounded-full mr-1"></div>
                      <span>Positive</span>
                    </div>
                    <div className="text-sovereign-gold/70 text-xs flex items-center">
                      <div className="h-2 w-2 bg-sovereign-gold/30 rounded-full mr-1"></div>
                      <span>Neutral</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruthEngine;
