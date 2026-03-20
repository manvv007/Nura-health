import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Staggered text reveal
    tl.fromTo('.hero-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-charcoal">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2670&auto=format&fit=crop" 
          alt="Dark Forest"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Moss to Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-moss/60 via-charcoal/80 to-charcoal" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl">
          <p className="hero-text text-clay font-sans font-medium tracking-widest uppercase text-sm mb-6">
            Precision Optimization
          </p>
          
          <h1 className="flex flex-col mb-8 text-cream">
            <span className="hero-text font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none">
              Nature is the
            </span>
            <span className="hero-text font-serif italic text-7xl md:text-9xl lg:text-[10rem] font-light leading-none -mt-4 md:-mt-8 text-moss/20 text-transparent bg-clip-text bg-gradient-to-r from-cream to-moss/50">
              Algorithm.
            </span>
          </h1>

          <p className="hero-text text-cream/70 font-sans text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
            Biological intelligence rendered as luxury software. We parse your telemetry 
            to calibrate the ultimate protocol for human longevity and peak performance.
          </p>

          <div className="hero-text">
            <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-[2rem] bg-cream px-8 py-4 text-sm font-semibold text-moss transition-transform duration-300 hover:scale-[1.02]">
              <span className="relative z-10">Initiate Protocol</span>
              <div className="w-2 h-2 rounded-full bg-clay animate-pulse relative z-10" />
              <div className="absolute inset-0 z-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
