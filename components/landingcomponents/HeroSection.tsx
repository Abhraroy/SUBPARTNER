import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Background Grid/Noise (Optional implementation later) */}
        
        <div className="container mx-auto px-4 z-10 relative">
            <div className="inline-flex items-center gap-2 mb-6 border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span className="text-brand-blue text-xs font-mono uppercase tracking-widest">System Operational // v2.0.4</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase max-w-4xl">
                Stop Overpaying.<br/>
                <span className="text-brand-blue">Start Sharing.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
                 <div className="border-l-2 border-brand-blue pl-6 py-1">
                    <p className="text-white/60 font-mono text-sm leading-relaxed max-w-md">
                        &gt; 50,000+ active shares initialized.<br/>
                        &gt; Raw savings distributed.<br/>
                        &gt; Zero bullshit protocol.
                    </p>
                 </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/browse" className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all">
                    Find a Group <ArrowRight size={20} />
                </Link>
                <Link href="/host" className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 font-bold uppercase tracking-wide flex items-center justify-center transition-all">
                    Host a Service
                </Link>
            </div>
        </div>

        {/* Decorative Scroller */}
        <div className="absolute bottom-0 w-full overflow-hidden bg-brand-blue/20 border-y border-brand-blue/30 py-2">
            <div className="whitespace-nowrap animate-marquee flex gap-8">
                {[...Array(20)].map((_, i) => (
                    <span key={i} className="text-brand-blue/80 font-black italic uppercase text-sm">
                        PREMIUM • HULU • DISNEY+ • HBO MAX • APPLE ONE • ADOBE CC • OFFICE 365 • NETFLIX • SPOTIFY • YOUTUBE PREMIUM
                    </span>
                 ))}
            </div>
        </div>
    </section>
  );
}
