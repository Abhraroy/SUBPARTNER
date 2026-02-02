// Redesigned to be the "footer" of the hero area
import { MessageSquare, Spline, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="w-full border-b border-white/20 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {/* Feature 1 */}
        <div className="flex items-start gap-4 p-8 md:p-12 hover:bg-white/5 transition-colors group">
          <MessageSquare className="w-8 h-8 text-white group-hover:text-[#DFFF00] transition-colors" />
          <div>
            <h3 className="text-xl font-black uppercase text-white mb-2">
              Messaging
            </h3>
            <p className="text-sm font-mono text-gray-500">
              Coordinate with your pool members effortlessly through our
              built-in secure chat interface.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4 p-8 md:p-12 hover:bg-white/5 transition-colors group">
          <Spline className="w-8 h-8 text-white group-hover:text-[#DFFF00] transition-colors" />
          <div>
            <h3 className="text-xl font-black uppercase text-white mb-2">
              Auto-Split
            </h3>
            <p className="text-sm font-mono text-gray-500">
              Forget manual calculations. Our system handles the math and
              distribution of funds every month.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start gap-4 p-8 md:p-12 hover:bg-white/5 transition-colors group">
          <ShieldCheck className="w-8 h-8 text-white group-hover:text-[#DFFF00] transition-colors" />
          <div>
            <h3 className="text-xl font-black uppercase text-white mb-2">
              Privacy
            </h3>
            <p className="text-sm font-mono text-gray-500">
              End-to-end encryption for your credentials. We prioritize your
              security above everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
