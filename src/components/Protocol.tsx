import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Protocol = () => {
  const container = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // We create a ScrollTrigger for each card to pin and scale down when the next card comes over it
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      const isLast = index === cardsRef.current.length - 1;
      
      ScrollTrigger.create({
        trigger: card,
        start: "top top", // When this card hits the top of viewport
        endTrigger: isLast ? null : cardsRef.current[index + 1],
        end: "top top", // When the next card hits the top
        pin: true,
        pinSpacing: false, // Don't add padding so the next card scrolls natively over it
      });

      // Animate the card scaling down and blurring as the next card scrolls up
      if (!isLast && cardsRef.current[index + 1]) {
        gsap.to(card, {
          scale: 0.9,
          filter: 'blur(20px)',
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: cardsRef.current[index + 1],
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          }
        });
      }
    });

    // Animations for content inside cards
    gsap.to('.dna-gear', { rotation: 360, repeat: -1, duration: 20, ease: 'linear' });
    
    gsap.to('.scanner-line', { 
      y: 300, 
      repeat: -1, 
      yoyo: true, 
      duration: 3, 
      ease: 'sine.inOut' 
    });

    gsap.to('.ekg-pulse', {
      scale: 1.5,
      opacity: 0,
      repeat: -1,
      duration: 2,
      ease: 'power2.out'
    });

  }, { scope: container });

  return (
    <section ref={container} id="protocol" className="relative w-full bg-cream">
      {/* Container spacing for the pinned effect */}
      <div className="pb-32">
        {/* Card 1: DNA / Gear */}
        <div 
          ref={el => { cardsRef.current[0] = el; }}
          className="w-full h-screen flex flex-col justify-center items-center bg-cream relative shadow-xl z-10 border-b border-charcoal/5 pt-16"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            {/* Massive rotating gear abstraction */}
            <svg className="dna-gear w-[80vw] max-w-[800px] h-auto" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
              <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
              <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
          </div>
          <div className="relative z-10 max-w-xl text-center px-8">
            <span className="font-sans text-xs uppercase tracking-widest text-charcoal/40 mb-4 block">Archive 01</span>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-charcoal mb-6">Genomic Baseline</h2>
            <p className="text-lg text-charcoal/60 font-sans leading-relaxed">
              We extract 3.2 billion data points from your DNA, establishing the unalterable foundation of your exact biological architecture.
            </p>
          </div>
        </div>

        {/* Card 2: Laser Scanner */}
        <div 
          ref={el => { cardsRef.current[1] = el; }}
          className="w-full h-screen flex flex-col justify-center items-center bg-[#EDEDE5] relative shadow-2xl z-20 border-b border-charcoal/5 pt-16 overflow-hidden"
        >
          <div className="absolute w-[300px] h-[300px] border border-moss/20 rounded-full flex items-center justify-center opacity-40">
            {/* Cellular abstraction */}
            <div className="w-[280px] h-[280px] rounded-full border border-moss/10 bg-moss/5 relative overflow-hidden">
              <div className="absolute w-12 h-12 rounded-full bg-moss/20 top-10 left-10" />
              <div className="absolute w-8 h-8 rounded-full bg-moss/20 bottom-16 right-12" />
              <div className="absolute w-16 h-16 rounded-full bg-moss/10 top-1/2 left-1/3" />
              {/* Scanner Line */}
              <div className="scanner-line absolute top-0 left-0 w-full h-[2px] bg-clay shadow-[0_0_15px_rgba(204,88,51,0.5)] z-10" />
            </div>
          </div>
          <div className="relative z-10 max-w-xl text-center px-8 mt-24">
            <span className="font-sans text-xs uppercase tracking-widest text-clay mb-4 block">Archive 02</span>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-charcoal mb-6">Cellular Telemetry</h2>
            <p className="text-lg text-charcoal/60 font-sans leading-relaxed">
              Continuous precision tracking of localized cellular decay and regeneration, mapped against your longitudinal healthspan.
            </p>
          </div>
        </div>

        {/* Card 3: EKG Waveform */}
        <div 
          ref={el => { cardsRef.current[2] = el; }}
          className="w-full h-screen flex flex-col justify-center items-center bg-moss relative shadow-[0_-20px_50px_rgba(0,0,0,0.1)] z-30 text-cream pt-16"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <svg className="w-full h-auto max-w-4xl stroke-clay drop-shadow-[0_0_10px_rgba(204,88,51,1)]" viewBox="0 0 1000 200" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M0 100 H300 L320 100 L350 50 L380 150 L410 20 L440 180 L470 100 L500 100 H1000" />
             </svg>
             <div className="ekg-pulse absolute w-32 h-32 rounded-full border border-clay bg-transparent top-1/2 left-[41%] transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-xl text-center px-8 mt-24">
            <span className="font-sans text-xs uppercase tracking-widest text-cream/40 mb-4 block">Archive 03</span>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-cream mb-6">Rhythmic Optimization</h2>
            <p className="text-lg text-cream/70 font-sans leading-relaxed mx-auto max-w-md">
              Your autonomic function drives the protocol. We adjust your recovery regimens dynamically based on cardiovascular variability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
