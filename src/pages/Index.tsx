
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OmniVault from '@/components/OmniVault';
import SoulID from '@/components/SoulID';
import TruthEngine from '@/components/TruthEngine';
import WisdomOS from '@/components/WisdomOS';
import Footer from '@/components/Footer';
import AccessModal from '@/components/AccessModal';

const Index = () => {
  const [accessModalOpen, setAccessModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sovereign-black text-white">
      <Header />
      <Hero />
      <OmniVault />
      <SoulID />
      <TruthEngine />
      <WisdomOS />
      
      {/* EchoLight Section */}
      <section id="ethics" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Risk Dies in Silence. <span className="text-sovereign-gold">You Won't.</span>
            </h2>
            
            <p className="text-white/70 mb-8 text-lg">
              Ethical intelligence shield scanning all assets for exposure to slavery, ESG risk, or human harm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
              {[
                "Autonomous fund rerouting on threshold triggers",
                "Supply chain transparency map",
                "Integrated ethical scoring index"
              ].map((feature, index) => (
                <div key={index} className="glass-panel sovereign-border p-6">
                  <div className="h-8 w-8 flex items-center justify-center border border-sovereign-gold/30 rounded-full mb-4">
                    <span className="text-sovereign-gold">{index + 1}</span>
                  </div>
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setAccessModalOpen(true)}
              className="bg-sovereign-dark hover:bg-sovereign-muted border border-sovereign-gold/40 text-sovereign-gold px-6 py-3 font-medium"
            >
              Scan My Holdings
            </button>
          </div>
        </div>
        
        {/* Heatmap Visual Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="h-full w-full bg-gradient-radial from-sovereign-purple/30 to-transparent"></div>
          <div className="absolute inset-0 sacred-grid"></div>
        </div>
      </section>
      
      {/* Access CTA Section */}
      <section id="access" className="py-20 bg-sovereign-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-neue-haas text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">
              Claim Your <span className="text-sovereign-gold">Sovereignty</span>
            </h2>
            
            <p className="text-white/70 mb-10 text-lg">
              The path to true sovereignty begins with a single decision. Are you ready?
            </p>
            
            <button 
              onClick={() => setAccessModalOpen(true)}
              className="bg-sovereign-gold hover:bg-sovereign-gold/90 text-sovereign-black font-medium px-8 py-4 text-lg animate-pulse-gold"
            >
              Enter DDS-OS
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
      <AccessModal open={accessModalOpen} onOpenChange={setAccessModalOpen} />
    </div>
  );
};

export default Index;
