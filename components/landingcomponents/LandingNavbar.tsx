"use client"
import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { useAuthStore } from '@/lib/zustand/AuthStore';

export default function LandingNavbar({user}:any) {





  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-brand-blue p-1.5 rounded-sm group-hover:bg-brand-blue-hover transition-colors">
                    <LayoutGrid size={24} className="text-white" />
                </div>
                <span className="text-white font-black text-xl tracking-tighter">
                    SHARE_NET<span className="text-brand-blue">.V2</span>
                </span>
            </Link>

            {/* CTA */}
            <div>
               {user?.email && user?.role==="authenticated" ? <Link href="/console" className="bg-white hover:bg-white/90 text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all">
                    Enter
                </Link> : <Link href="/signin" className="bg-white hover:bg-white/90 text-black font-black text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-all">
                    Login
                </Link>}
            </div>
        </div>
    </nav>
  );
}
