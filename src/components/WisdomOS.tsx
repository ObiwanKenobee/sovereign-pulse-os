
import React from 'react';
import { Button } from "@/components/ui/button";

const WisdomOS = () => {
  return (
    <section id="legacy" className="py-20 relative overflow-hidden bg-sovereign-dark/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Your Voice. <span className="text-sovereign-gold">Forever Heard.</span>
            </h2>
            
            <p className="text-white/70 mb-8 text-lg">
              Codify your decisions, values, and legacy into a persistent AI mentor for your heirs.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Memory graph & voice memory uploads",
                "Event-triggered wisdom drops",
                "Custom-trained AI steward for dynastic philosophy"
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
              Train My Legacy
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto glass-panel sovereign-border p-4 neo-glow relative overflow-hidden">
              {/* Audio waveform */}
              <div className="absolute top-1/2 left-0 right-0 h-24 -translate-y-1/2">
                <div className="flex items-center justify-center h-full space-x-1">
                  {[...Array(40)].map((_, i) => {
                    const height = 10 + Math.random() * 50;
                    return (
                      <div 
                        key={i}
                        className="w-1 bg-sovereign-gold/50"
                        style={{ 
                          height: `${height}%`,
                          opacity: Math.random() * 0.5 + 0.2,
                          animation: `pulse ${Math.random() * 1 + 0.5}s ease-in-out infinite alternate`
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              
              {/* Constellation memory graph */}
              <div className="absolute inset-0">
                <svg className="h-full w-full opacity-30" viewBox="0 0 400 400">
                  {[...Array(30)].map((_, i) => {
                    const x1 = Math.random() * 400;
                    const y1 = Math.random() * 400;
                    const x2 = Math.random() * 400;
                    const y2 = Math.random() * 400;
                    return (
                      <line 
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#D4AF37"
                        strokeWidth="0.5"
                        strokeOpacity={Math.random() * 0.3 + 0.1}
                      />
                    );
                  })}
                  
                  {/* Memory points/stars */}
                  {[...Array(20)].map((_, i) => {
                    const x = Math.random() * 400;
                    const y = Math.random() * 400;
                    const r = Math.random() * 2 + 1;
                    return (
                      <circle 
                        key={i}
                        cx={x}
                        cy={y}
                        r={r}
                        fill="#D4AF37"
                        fillOpacity={Math.random() * 0.5 + 0.3}
                      />
                    );
                  })}
                </svg>
              </div>
              
              <div className="absolute top-4 left-4 text-sovereign-gold/90 text-sm font-semibold">
                MEMORY MATRIX
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 bg-sovereign-gold/30 rounded-full mb-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-sovereign-gold/70 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-xs text-sovereign-gold/70">
                  <div>00:42</div>
                  <div>TRAINING MEMORIES: 33% COMPLETE</div>
                  <div>02:06</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomOS;
