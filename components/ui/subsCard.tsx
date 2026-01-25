import React from "react";
import { cn } from "@/lib/utils";

interface SubsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  price: string;
  slots: number;
  tag?: string;
  logo: React.ReactNode;
}

export function SubsCard({
  title,
  description,
  price,
  slots,
  tag,
  logo,
  className,
  ...props
}: SubsCardProps) {
  // Determine slot text/color logic based on count if needed
  // For now matching the design: "2 LEFT" is yellow, "LAST ONE" is green/yellow.
  // We'll just style it yellow as default "distressed" look.
  
  let slotText = `${slots} LEFT`;
  if (slots === 1) slotText = "LAST ONE";
  if (slots === 0) slotText = "SOLD OUT";

  return (
    <div
      className={cn(
        "relative flex h-full w-full max-w-[320px] flex-col border-2 border-white bg-black p-6 text-white transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]",
        className
      )}
      {...props}
    >
      {/* Tag */}
      {tag && (
        <div className="absolute right-4 top-4 border border-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
          {tag}
        </div>
      )}

      {/* Logo Area */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-black">
        {logo}
      </div>

      {/* Content */}
      <div className="mb-8">
        <h3 className="mb-1 text-xl font-black uppercase leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-xs font-medium text-gray-400">{description}</p>
      </div>

      {/* Price & Slots */}
      <div className="mt-auto">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Price/Mo
            </span>
            <span className="text-3xl font-black tracking-tight">{price}</span>
          </div>
          <div className="text-right">
             <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Slots
            </span>
            <span className="text-lg font-bold uppercase text-[#DFFF00]">
              {slotText}
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-white py-3 text-sm font-black uppercase tracking-widest text-black transition-colors hover:bg-gray-200">
          Join Pool
        </button>
      </div>
    </div>
  );
}
