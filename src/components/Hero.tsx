
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden">
      {/* Sacred geometry background elements */}
      <div className="absolute inset-0 z-0 sacred-grid opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] border border-sovereign-gold/5 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] border border-sovereign-gold/10 rounded-full opacity-30 animate-rotate-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] border border-sovereign-gold/15 rounded-full opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-neue-haas text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            <span className="block">Your Sovereignty.</span>
            <span className="block">Your Story.</span>
            <span className="block text-sovereign-gold">Your Eternity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto">
            A self-governing operating system for wealth, identity, truth, and legacy.
          </p>
          
          <Button 
            className="bg-sovereign-gold hover:bg-sovereign-gold/90 text-sovereign-black font-medium px-8 py-6 text-lg animate-pulse-gold"
          >
            Enter DDS-OS
          </Button>
        </div>
      </div>
      
      {/* Abstract light effects */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sovereign-purple/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
