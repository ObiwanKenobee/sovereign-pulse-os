
import React from 'react';
import { Button } from "@/components/ui/button";

const OmniVault = () => {
  return (
    <section id="vault" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Wealth. <span className="text-sovereign-gold">Routed by Values.</span>
            </h2>
            
            <p className="text-white/70 mb-8 text-lg">
              Quantum-resilient asset grid that moves your capital where ethics and opportunity align.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time AI-guided reallocation",
                "Tax arbitrage across friendly regimes",
                "Multi-chain vaults (ETH, BTC, REITs, Tokenized Gold)"
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
              Open My Vault
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Rotating vault ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 md:h-64 md:w-64 border-4 border-sovereign-gold/30 rounded-full animate-rotate-slow"></div>
                <div className="absolute h-64 w-64 md:h-80 md:w-80 border border-sovereign-gold/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
                <div className="absolute h-80 w-80 md:h-96 md:w-96 border border-sovereign-gold/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
                
                {/* Center vault symbol */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 md:h-32 md:w-32 bg-sovereign-gold/10 border border-sovereign-gold/50 rounded-full flex items-center justify-center neo-glow">
                    <div className="text-sovereign-gold text-4xl md:text-5xl">V</div>
                  </div>
                </div>
                
                {/* Nodes */}
                {[0, 60, 120, 180, 240, 300].map((degree, i) => (
                  <div 
                    key={i}
                    className="absolute h-4 w-4 bg-sovereign-gold/20 border border-sovereign-gold/50 rounded-full neo-glow animate-glow"
                    style={{
                      transform: `rotate(${degree}deg) translateX(8rem)`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmniVault;
