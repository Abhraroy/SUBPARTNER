import { PlusSquare, MessageCircle, CreditCard } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="w-full border-b border-white/20 bg-[#0a0a0a] py-20 px-8">
      <div className="mx-auto max-w-[1920px]">
        {/* Header */}
        <div className="mb-16 border-b border-black pb-8">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-4">
            Share Costs. <br />
            <span className="text-transparent bg-clip-text bg-white stroke-text-white">
              No Bullshit.
            </span>
          </h2>
          <p className="max-w-xl text-lg text-gray-400 font-mono">
            Divvy.Up is the new standard for managing shared subscriptions. No
            spreadsheets, no awkward reminders. Just automated billing and
            high-speed chat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-white/20 p-8 h-full flex flex-col justify-between hover:border-[#DFFF00] transition-colors bg-[#0a0a0a]">
            <PlusSquare className="w-12 h-12 text-[#DFFF00] mb-8" />
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">
                Create Pools
              </h3>
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Start a group in seconds. Define your terms, set the price, and
                invite friends (or strangers) to split the bill.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-white/20 p-8 h-full flex flex-col justify-between hover:border-[#DFFF00] transition-colors bg-[#0a0a0a]">
            <MessageCircle className="w-12 h-12 text-[#DFFF00] mb-8" />
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">
                Secure Chat
              </h3>
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                High-speed, end-to-end encrypted messaging for sharing
                credentials. No more texting passwords over insecure SMS.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-white/20 p-8 h-full flex flex-col justify-between hover:border-[#DFFF00] transition-colors bg-[#0a0a0a]">
            <CreditCard className="w-12 h-12 text-[#DFFF00] mb-8" />
            <div>
              <h3 className="text-2xl font-black uppercase text-white mb-4">
                Auto Pay
              </h3>
              <p className="font-mono text-sm text-gray-500 leading-relaxed">
                Link your card once. We handle value transfer between members
                automatically. You never have to ask for money again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
