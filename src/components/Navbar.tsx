import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll interaction for the navbar
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50',
        end: 'top -100',
        scrub: 0.5,
      },
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      backdropFilter: 'blur(16px)',
      color: 'var(--color-moss)',
      borderColor: 'rgba(46, 64, 54, 0.1)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
      width: '90%',
      marginTop: '1.5rem',
      borderRadius: '9999px',
    });
  }, { scope: navRef });

  return (
    <div ref={navRef} className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300">
      <div 
        ref={containerRef}
        className="flex items-center justify-between w-full max-w-7xl px-8 py-4 mt-6 text-cream rounded-pill border border-transparent transition-all duration-500"
      >
        <div className="flex font-sans font-bold text-xl tracking-tight">
          NURA
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <a href="#features" className="hover:opacity-70 transition-opacity">Intelligence</a>
          <a href="#protocol" className="hover:opacity-70 transition-opacity">Protocol</a>
          <a href="#membership" className="hover:opacity-70 transition-opacity">Membership</a>
        </nav>

        <button className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-clay px-6 py-2.5 text-sm font-medium text-cream shadow-sm hover:scale-[1.02] transition-transform duration-300">
          <span className="relative z-10">Access System</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 z-0 bg-moss transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </button>
      </div>
    </div>
  );
};
