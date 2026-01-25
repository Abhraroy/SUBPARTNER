import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  price: string;
  slots: number;
  totalSlots: number;
  icon: React.ReactNode;
  color?: string;
  isFull?: boolean;
}

export function ServiceCard({
  name,
  price,
  slots,
  totalSlots,
  icon,
  color = "bg-brand-blue",
  isFull = false
}: ServiceCardProps) {
  const slotsLeft = totalSlots - slots;
  
  return (
    <div className="w-full bg-brand-card border border-brand-border p-5 flex flex-col justify-between h-full hover:border-brand-blue/50 transition-colors group relative overflow-hidden">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 bg-brand-border/50 flex items-center justify-center rounded-sm">
          {icon}
        </div>
        
        {isFull ? (
           <div className="bg-brand-danger/20 text-brand-danger text-[10px] font-mono px-2 py-1 uppercase tracking-wider border border-brand-danger/30">
             Full
           </div>
        ) : (
          <div className="bg-brand-success/10 text-brand-success text-[10px] font-mono px-2 py-1 uppercase tracking-wider border border-brand-success/20">
            {slotsLeft} Slots Left
          </div>
        )}
      </div>

      {/* Main Info */}
      <div className="mb-6 z-10">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-1">{name}</h3>
        <div className="flex items-baseline gap-2">
           <span className="text-white/60 text-sm font-mono">$</span>
           <span className="text-white/60 text-sm font-mono">{price}</span>
           <span className="text-white/40 text-xs font-mono">/ MO</span>
        </div>
      </div>

      {/* Footer / Slots Visual */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-4">
             {/* Slot avatars or indicators could go here, keeping it simple for now matching the industrial look */}
             <div className="flex -space-x-2">
                {[...Array(Math.min(slots, 3))].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-brand-card flex items-center justify-center text-[8px] text-white">
                        <Users size={10} />
                    </div>
                ))}
                {slots > 3 && (
                    <div className="w-6 h-6 rounded-full bg-brand-blue border border-brand-card flex items-center justify-center text-[8px] text-white font-bold">
                        +{slots - 3}
                    </div>
                )}
             </div>
        </div>

        <button 
          className={`w-full py-3 px-4 flex items-center justify-center gap-2 uppercase font-bold text-sm tracking-wide transition-all
            ${isFull 
              ? 'bg-transparent border border-white/10 text-white/30 cursor-not-allowed' 
              : 'bg-white text-black hover:bg-brand-blue hover:text-white'
            }`}
          disabled={isFull}
        >
          {isFull ? 'Waitlist Only' : 'Join Now'}
          {!isFull && <ArrowRight size={16} />}
        </button>
      </div>
      
      {/* Decorative Gradient Blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl group-hover:bg-brand-blue/10 transition-all pointer-events-none" />
    </div>
  );
}

export function CreateGroupCard() {
    return (
        <div className="w-full bg-brand-blue h-full p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-brand-blue-hover transition-colors">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-4xl leading-none text-white font-light">+</span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase leading-tight mb-4">
                Create<br/>Your Own<br/>Group
            </h3>
            
            <button className="bg-white text-brand-blue font-bold text-sm py-2 px-6 uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-colors">
                Start Hosting
            </button>
        </div>
    )
}
