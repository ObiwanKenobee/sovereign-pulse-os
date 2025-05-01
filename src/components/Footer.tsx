
import React from 'react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const columns = [
    {
      title: "Contact",
      links: ["Secure Channel", "PGP Key", "Diplomatic Relations"]
    },
    {
      title: "Governance Docs",
      links: ["Digital Constitution", "Sovereign Rights", "Privacy Covenant"]
    },
    {
      title: "Node Network",
      links: ["Node Map", "Run a Node", "Network Status"]
    },
    {
      title: "Referral Key",
      links: ["Key Generation", "Vouching Protocol", "Sovereign Circle"]
    },
    {
      title: "Decentralized Terms",
      links: ["Self-Governance", "Non-Jurisdictional Status", "Arbitration"]
    }
  ];
  
  return (
    <footer className="bg-sovereign-dark border-t border-sovereign-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {columns.map((col, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-neue-haas text-sovereign-gold text-sm font-medium tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-white/60 hover:text-sovereign-gold transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8 bg-sovereign-gold/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 md:mb-0 text-center md:text-left">
            DDS-OS is a covenant, not a contract. You are your own jurisdiction.
          </div>
          
          <div className="flex space-x-4">
            {["ENS", "Lens", "GitHub", "DAOchat"].map((platform, i) => (
              <a 
                key={i}
                href="#" 
                className="h-8 w-8 border border-sovereign-gold/30 flex items-center justify-center rounded-full"
              >
                <span className="text-sovereign-gold/70 text-xs">{platform.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
