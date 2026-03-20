import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Philosophy = () => {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Parallax image
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Text reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top center+=100',
        end: 'center center',
        scrub: 1
      }
    });

    tl.fromTo('.philosophy-left', 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 1 }
    )
    .fromTo('.philosophy-right',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      '-=0.5'
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-[80vh] bg-charcoal text-cream overflow-hidden flex items-center">
      {/* Background Parallax */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2600&auto=format&fit=crop" 
          alt="Organic Texture"
          className="w-full h-[120%] object-cover object-top -mt-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        {/* Left Side */}
        <div className="philosophy-left flex flex-col justify-center max-w-md">
          <p className="font-sans text-charcoal bg-moss/80 w-fit px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-8">
            The Old Paradigm
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-cream/40">
            Modern medicine asks:
            <span className="block mt-4 text-cream/70 font-semibold">What is wrong?</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="philosophy-right flex flex-col justify-center items-start md:items-end text-left md:text-right max-w-lg md:ml-auto">
          <p className="font-sans text-charcoal bg-clay/80 w-fit px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-8">
            The Nura Standard
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-cream">
            We ask:
            <span className="block mt-4 font-serif italic font-light text-[1.2em] text-moss text-transparent bg-clip-text bg-gradient-to-r from-cream to-moss">
              What is optimal?
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
