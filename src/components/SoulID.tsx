
import React from 'react';
import { Button } from "@/components/ui/button";

const SoulID = () => {
  return (
    <section id="identity" className="py-20 relative overflow-hidden bg-sovereign-dark/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              One Identity. <span className="text-sovereign-gold">Many Jurisdictions.</span>
            </h2>
            
            <p className="text-white/70 mb-8 text-lg">
              Fluid digital identity with biometric trust anchors and sovereign passport routing.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "DID + Soulbound Token Identity",
                "Dynamic jurisdiction preference map",
                "Consent ledger & recovery agents"
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
              Activate SoulID
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] max-w-md mx-auto glass-panel sovereign-border p-1 neo-glow relative overflow-hidden">
              {/* Passport UI */}
              <div className="bg-sovereign-black h-full w-full p-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sovereign-gold font-neue-haas text-sm tracking-widest">SOUL-ID PASSPORT</div>
                  <div className="h-4 w-4 rounded-full bg-sovereign-gold/50 animate-pulse"></div>
                </div>
                
                <div className="flex space-x-4 mb-4">
                  <div className="w-24 h-32 bg-sovereign-gold/10 border border-sovereign-gold/30"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-3 bg-sovereign-gold/20 w-3/4 rounded-sm"></div>
                    <div className="h-3 bg-sovereign-gold/20 w-1/2 rounded-sm"></div>
                    <div className="h-3 bg-sovereign-gold/20 w-2/3 rounded-sm"></div>
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 rounded-full border border-sovereign-gold/30 flex-shrink-0"></div>
                      <div className="h-8 w-8 rounded-full border border-sovereign-gold/30 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4 pt-2 border-t border-sovereign-gold/20">
                  <div className="text-sovereign-gold/80 text-xs mb-2">JURISDICTION LAYER</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-sovereign-gold/30 w-full rounded-sm"></div>
                    <div className="h-2 bg-sovereign-gold/50 w-2/3 rounded-sm"></div>
                    <div className="h-2 bg-sovereign-gold/40 w-1/3 rounded-sm"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-sovereign-gold/10 flex items-center justify-center">
                  <div className="text-sovereign-gold/70 text-xs tracking-widest">SOVEREIGN CAPACITY: ACTIVE</div>
                </div>
              </div>
              
              {/* Animated layer overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sovereign-purple/20 to-transparent opacity-50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoulID;
