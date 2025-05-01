
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { title: "Vault", href: "#vault" },
    { title: "Identity", href: "#identity" },
    { title: "Narrative", href: "#narrative" },
    { title: "Legacy", href: "#legacy" },
    { title: "Ethics", href: "#ethics" },
    { title: "Access", href: "#access" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-sovereign-gold/20">
      <div className="container mx-auto">
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full border border-sovereign-gold/50 flex items-center justify-center overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sovereign-gold text-xl">∞</span>
                </div>
                <div className="h-8 w-8 animate-rotate-slow opacity-30">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <polygon 
                      points="50,15 85,50 50,85 15,50" 
                      stroke="#D4AF37" 
                      strokeWidth="1" 
                      fill="none" 
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="font-neue-haas text-sovereign-gold text-lg font-semibold tracking-wider">
              DDS-OS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href} 
                className="text-sm tracking-wider text-white/70 hover:text-sovereign-gold transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-sovereign-gold/10 border border-sovereign-gold/50 text-sovereign-gold hover:bg-sovereign-gold/20 px-4 py-1.5 text-sm font-medium tracking-wider transition-all neo-glow hover:neo-glow">
            Claim Your Sovereignty
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-sovereign-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-sovereign-gold/20">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.title} 
                href={item.href} 
                className="block text-sm tracking-wider text-white/70 hover:text-sovereign-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Separator className="bg-sovereign-gold/20" />
            <button 
              className="w-full bg-sovereign-gold/10 border border-sovereign-gold/50 text-sovereign-gold hover:bg-sovereign-gold/20 px-4 py-2 text-sm font-medium tracking-wider transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Claim Your Sovereignty
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
