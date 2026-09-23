import React, { useState } from 'react';
import { Wifi, Battery, Signal, ArrowUpRight, ArrowDownLeft, CreditCard, ChevronRight, ShieldCheck } from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
  isInteractive?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '', isInteractive = true }) => {
  const [activeTab, setActiveTab] = useState<'wallet' | 'analytics' | 'cards'>('wallet');
  const [currentBalance, setCurrentBalance] = useState<number>(42850.50);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleQuickTransfer = () => {
    if (isSent) return;
    setIsSent(true);
    setCurrentBalance(prev => prev - 120.00);
    setTimeout(() => {
      setIsSent(false);
    }, 2400);
  };

  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Outer Phone Frame */}
      <div className="relative w-[300px] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[9/18.5] bg-zinc-950 rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-zinc-800">
        
        {/* Antenna bands / physical subtle highlights */}
        <div className="absolute -left-[2px] top-24 w-[2px] h-8 bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[2px] top-36 w-[2px] h-12 bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[2px] top-52 w-[2px] h-12 bg-zinc-700 rounded-l-sm" />
        <div className="absolute -right-[2px] top-32 w-[2px] h-16 bg-zinc-700 rounded-r-sm" />

        {/* Inner Screen Bezel */}
        <div className="relative w-full h-full bg-zinc-900 rounded-[38px] overflow-hidden flex flex-col text-white font-sans border border-zinc-800/80">
          
          {/* Status Bar */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3.5 pb-2 text-[11px] font-semibold text-zinc-300">
            <span>9:41</span>
            
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 h-6 w-24 bg-black rounded-full flex items-center justify-between px-2.5 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900/90 border border-zinc-800" />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] text-zinc-400 font-mono">Live</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3 text-zinc-300" />
              <Wifi className="w-3 h-3 text-zinc-300" />
              <Battery className="w-3.5 h-3.5 text-zinc-300" />
            </div>
          </div>

          {/* Screen Header */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between border-b border-zinc-800/60">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Aether Private</p>
              <h4 className="text-xs font-semibold text-zinc-100 flex items-center gap-1">
                Ivan S.
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
              </h4>
            </div>
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[11px] font-bold text-zinc-200">
              IV
            </div>
          </div>

          {/* Main App Content inside Phone */}
          <div className="flex-1 overflow-y-auto px-5 py-3 space-y-4 no-scrollbar">
            
            {/* Balance Card */}
            <div className="bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 border border-zinc-700/60 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-zinc-400">Total Net Worth</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                  +12.8%
                </span>
              </div>
              <div className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                ${currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <p className="text-[10px] text-zinc-400 mt-1">Available Liquidity · USD Vault</p>

              {/* Action Buttons inside Phone */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-zinc-700/40">
                <button
                  onClick={handleQuickTransfer}
                  disabled={!isInteractive}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-white text-zinc-950 rounded-lg text-[11px] font-semibold hover:bg-zinc-200 transition-colors active:scale-95"
                >
                  <ArrowUpRight className="w-3 h-3" />
                  {isSent ? 'Sent $120' : 'Send'}
                </button>
                <button
                  disabled={!isInteractive}
                  onClick={() => setCurrentBalance(prev => prev + 500)}
                  className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-zinc-800 text-zinc-200 rounded-lg text-[11px] font-semibold hover:bg-zinc-700 transition-colors active:scale-95 border border-zinc-700"
                >
                  <ArrowDownLeft className="w-3 h-3" />
                  Receive
                </button>
              </div>
            </div>

            {/* Quick Segmented Nav in App */}
            <div className="flex items-center p-0.5 bg-zinc-800/90 rounded-xl border border-zinc-700/50">
              <button
                onClick={() => setActiveTab('wallet')}
                className={`flex-1 py-1 text-[10px] font-medium rounded-lg transition-all ${
                  activeTab === 'wallet' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex-1 py-1 text-[10px] font-medium rounded-lg transition-all ${
                  activeTab === 'analytics' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('cards')}
                className={`flex-1 py-1 text-[10px] font-medium rounded-lg transition-all ${
                  activeTab === 'cards' ? 'bg-zinc-900 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Cards
              </button>
            </div>

            {/* Tab 1: Activity */}
            {activeTab === 'wallet' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-medium text-zinc-400">
                  <span>Recent Activity</span>
                  <span className="text-[10px] text-zinc-300 hover:underline cursor-pointer flex items-center">
                    All <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
                  </span>
                </div>

                <div className="space-y-1.5">
                  {[
                    { name: 'Apple Store 5th Ave', time: '14:20', amount: '-$149.00', icon: '' },
                    { name: 'Wire: Acme Client Dev', time: 'Yesterday', amount: '+$4,200.00', positive: true, icon: '⚡' },
                    { name: 'Figma Annual Team', time: 'Sep 21', amount: '-$180.00', icon: '❖' },
                  ].map((tx, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-zinc-800/40 border border-zinc-800 hover:bg-zinc-800/80 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-zinc-800 flex items-center justify-center text-xs">
                          {tx.icon}
                        </div>
                        <div>
                          <div className="text-[11px] font-medium text-zinc-200">{tx.name}</div>
                          <div className="text-[9px] text-zinc-500 font-mono">{tx.time}</div>
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono font-semibold tabular-nums ${tx.positive ? 'text-emerald-400' : 'text-zinc-200'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Analytics */}
            {activeTab === 'analytics' && (
              <div className="p-3 bg-zinc-800/40 border border-zinc-800 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-zinc-400">Weekly Outflow</span>
                  <span className="text-zinc-100 font-mono font-semibold tabular-nums">$1,842.10</span>
                </div>
                {/* SVG Mini Chart */}
                <div className="h-16 flex items-end gap-1.5 pt-2">
                  {[35, 60, 42, 85, 55, 95, 70].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${val}%` }}
                        className={`w-full rounded-t-sm transition-all ${
                          i === 5 ? 'bg-white' : 'bg-zinc-700 hover:bg-zinc-500'
                        }`}
                      />
                      <span className="text-[8px] text-zinc-500">
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Cards */}
            {activeTab === 'cards' && (
              <div className="p-3 bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-600 rounded-xl text-white space-y-3">
                <div className="flex justify-between items-start">
                  <CreditCard className="w-5 h-5 text-zinc-300" />
                  <span className="text-[10px] font-mono text-zinc-400">PLATINUM</span>
                </div>
                <div className="font-mono text-xs tracking-widest text-zinc-300">
                  •••• •••• •••• 8842
                </div>
                <div className="flex justify-between items-end text-[9px] text-zinc-400">
                  <span>IVAN S.</span>
                  <span>10/29</span>
                </div>
              </div>
            )}

          </div>

          {/* Home Indicator Bar */}
          <div className="p-2 flex justify-center">
            <div className="w-28 h-1 bg-zinc-600 rounded-full" />
          </div>

        </div>
      </div>

      {/* Floating subtle badge / proof */}
      <div className="hidden sm:flex absolute -bottom-3 -left-4 bg-white text-zinc-900 text-[11px] font-medium py-1.5 px-3 rounded-full shadow-lg border border-zinc-200 items-center gap-1.5 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Live Interactive Component</span>
      </div>
    </div>
  );
};
