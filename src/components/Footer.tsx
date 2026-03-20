import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-charcoal text-cream rounded-t-[4rem] relative z-40 px-8 py-20 pb-8 mt-[-2rem] border-t border-cream/5 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-cream/10 pb-16">
          <div className="max-w-sm">
            <h2 className="text-3xl font-sans tracking-tight font-bold mb-6">NURA</h2>
            <p className="text-cream/50 text-sm leading-relaxed font-sans max-w-xs">
              Biological intelligence rendered as luxury software. Establishing the ultimate protocol for human longevity and peak performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-sans tracking-widest uppercase text-cream/30 mb-2">Platform</h4>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Telemetry</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Protocols</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Integrations</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Research API</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-sans tracking-widest uppercase text-cream/30 mb-2">Company</h4>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Manifesto</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Careers</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Clinical Board</a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors">Press</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="text-xs font-sans tracking-widest uppercase text-cream/30 mb-2">Connect</h4>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors flex items-center gap-1 group">
                Concierge 
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href="https://instagram.com/manvv007" className="text-sm font-sans text-cream/70 hover:text-white transition-colors flex items-center gap-1 group">
                Instagram 
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href="#" className="text-sm font-sans text-cream/70 hover:text-white transition-colors flex items-center gap-1 group">
                Journal 
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-cream/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Nura Health Systems. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="font-mono text-xs text-cream/50 tracking-wider">SYSTEM OPERATIONAL</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
