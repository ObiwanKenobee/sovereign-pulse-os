
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface AccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-sovereign-dark border-sovereign-gold/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-neue-haas text-xl text-sovereign-gold text-center">
            Enter by Invitation or Ancestral Right
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <label className="text-sm text-sovereign-gold/80">Invite Code</label>
            <Input 
              placeholder="Enter your invite code" 
              className="bg-sovereign-black border-sovereign-gold/30 focus:border-sovereign-gold/50 text-white"
            />
          </div>
          
          <div className="space-y-3">
            <label className="text-sm text-sovereign-gold/80">SoulID Fingerprint Scan</label>
            <div className="bg-sovereign-black border border-sovereign-gold/30 h-24 rounded-md flex items-center justify-center">
              <div className="h-16 w-16 border border-dashed border-sovereign-gold/50 rounded-full flex items-center justify-center">
                <span className="text-sovereign-gold/50 text-sm">Scan</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Separator className="bg-sovereign-gold/20" />
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 border border-sovereign-gold/50 rounded-sm flex-shrink-0"></div>
              <span className="text-sm text-white/70">I consent to the Sovereignty Oath and agree that I am my own jurisdiction</span>
            </div>
          </div>
        </div>
        
        <Button className="bg-sovereign-gold hover:bg-sovereign-gold/90 text-sovereign-black font-medium w-full">
          Enter The OS
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AccessModal;
