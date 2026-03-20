import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MousePointer2 } from 'lucide-react';

gsap.registerPlugin(useGSAP);

/* --- Micro-UI 1: Diagnostic Shuffler --- */
const shufflerData = [
  { id: 1, label: 'Epigenetic Age', value: '31.4', unit: 'yrs', trend: '-4.2%' },
  { id: 2, label: 'Microbiome Score', value: '94', unit: 'idx', trend: '+1.1%' },
  { id: 3, label: 'Cortisol Optimization', value: 'Optimal', unit: 'lvl', trend: 'Stable' }
];

const DiagnosticShuffler = () => {
  const [cards, setCards] = useState(shufflerData);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={container} className="relative w-full h-64 bg-cream/50 rounded-3xl p-6 flex flex-col items-center justify-center border border-charcoal/5 shadow-sm overflow-hidden">
      {cards.map((card, i) => {
        // Calculate physics based on index
        const yOffset = i * -12;
        const scale = 1 - (i * 0.05);
        const zIndex = 10 - i;
        const opacity = 1 - (i * 0.2);

        return (
          <div
            key={card.id}
            className="absolute bg-white rounded-2xl w-full max-w-[240px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] border border-charcoal/5"
            style={{
              transform: `translateY(${yOffset}px) scale(${scale})`,
              zIndex,
              opacity,
            }}
          >
            <div className="text-xs font-sans text-charcoal/50 uppercase tracking-wider mb-2">{card.label}</div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-serif text-moss leading-none">{card.value}</span>
              <span className="text-sm font-sans text-charcoal/40 mb-1">{card.unit}</span>
            </div>
            <div className="mt-4 text-xs font-mono font-medium text-clay bg-clay/10 inline-block px-2 py-1 rounded">
              {card.trend}
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* --- Micro-UI 2: Telemetry Typewriter --- */
const telemetryPhrases = [
  "Optimizing Circadian Rhythm...",
  "Parsing biomarker drift...",
  "Calibrating recovery window...",
  "Sequencing neuro-plasticity...",
  "Aligning macro-nutrient load..."
];

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = telemetryPhrases[phraseIndex];
    let timeoutId: ReturnType<typeof setTimeout>;
    
    // Typing speed tuning
    const getTypingSpeed = () => {
      if (isDeleting) return 30; // Fast delete
      return Math.random() * 40 + 40; // Human-like typing
    };

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % telemetryPhrases.length);
        timeoutId = setTimeout(() => {}, 500); // Pause before next word
      } else {
        timeoutId = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
        }, getTypingSpeed());
      }
    } else {
      if (text === currentPhrase) {
        // Pause at the end
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, getTypingSpeed());
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="w-full h-64 bg-charcoal rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative shadow-inner">
      <div className="flex items-center justify-between">
        <label className="text-xs font-sans text-cream/50 uppercase tracking-wider flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-clay animate-pulse" />
          Live Feed
        </label>
        <div className="text-[10px] font-mono text-cream/30">SYS.09.4</div>
      </div>
      
      <div className="font-mono text-cream/90 text-sm leading-relaxed max-w-[90%]">
        <span className="opacity-50 mr-2">{'>'}</span>
        {text}
        <span className="inline-block w-2 bg-clay h-4 translate-y-1 ml-1 animate-[ping_1s_infinite_steps(2,start)] opacity-80" />
      </div>
      
      <div className="w-full h-px bg-cream/10 mt-4 relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-clay/50 to-transparent blur-sm animate-[translateX_3s_infinite_alternate]" />
      </div>
    </div>
  );
};

/* --- Micro-UI 3: Adaptive Regimen --- */
const AdaptiveRegimen = () => {
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    if (!cursorRef.current || !buttonRef.current) return;
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    // Initial state
    tl.set(cursorRef.current, { x: 200, y: 150, opacity: 0 });
    
    // Enter cursor
    tl.to(cursorRef.current, { x: 120, y: 80, opacity: 1, duration: 1, ease: 'power3.out' });
    
    // Move to Wednesday (index 3)
    tl.to(cursorRef.current, { 
      x: 145, y: 105, duration: 1.2, ease: 'power2.inOut' 
    });
    
    // Click action (compress and click)
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to(gridRefs.current[3], { backgroundColor: 'var(--color-moss)', color: 'var(--color-cream)', scale: 0.95, duration: 0.1 }, '<');
    tl.to(gridRefs.current[3], { scale: 1, duration: 0.2 });
    tl.to(cursorRef.current, { scale: 1, duration: 0.2 }, '<');
    
    // Move to Save button
    tl.to(cursorRef.current, { 
      x: 180, y: 190, duration: 1, ease: 'power2.inOut', delay: 0.3 
    });
    
    // Click Save
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to(buttonRef.current, { scale: 0.95, backgroundColor: 'var(--color-clay)', duration: 0.1 }, '<');
    tl.to(buttonRef.current, { scale: 1, duration: 0.2 });
    tl.to(cursorRef.current, { scale: 1, duration: 0.2 }, '<');
    
    // Fade out
    tl.to(cursorRef.current, { y: 220, opacity: 0, duration: 0.8, ease: 'power2.in', delay: 0.5 });
    
    // Cleanup grid and button state for next loop
    tl.to(gridRefs.current[3], { backgroundColor: 'transparent', color: 'rgba(26, 26, 26, 0.4)', duration: 0.5 });
    tl.to(buttonRef.current, { backgroundColor: 'var(--color-charcoal)', duration: 0.5 }, '<');

  }, { scope: container });

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div ref={container} className="relative w-full h-64 bg-white rounded-3xl p-6 flex flex-col justify-between border border-charcoal/5 shadow-sm overflow-hidden">
      <div>
        <h4 className="text-xs font-sans text-charcoal/50 uppercase tracking-wider mb-4">Protocol Scheduler</h4>
        <div className="grid grid-cols-7 gap-1 relative z-10">
          {days.map((d, i) => (
            <div 
              key={i} 
              ref={el => { gridRefs.current[i] = el; }}
              className="aspect-square flex items-center justify-center rounded-xl text-sm font-sans font-medium text-charcoal/40 transition-colors border border-charcoal/5"
            >
              {d}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end relative z-10">
        <button 
          ref={buttonRef}
          className="bg-charcoal text-cream px-4 py-2 rounded-full text-xs font-sans font-medium transition-colors"
        >
          Save Protocol
        </button>
      </div>

      {/* Animated Cursor */}
      <div 
        ref={cursorRef}
        className="absolute top-0 left-0 w-6 h-6 z-50 drop-shadow-md text-charcoal pointer-events-none"
        style={{ opacity: 0 }}
      >
        <MousePointer2 className="fill-white stroke-[1.5]" />
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-cream relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-16 md:mb-24">
          <h2 className="text-xs font-sans text-moss uppercase tracking-widest mb-4">
            Instrumental Interface
          </h2>
          <h3 className="text-4xl md:text-5xl font-sans tracking-tight text-charcoal font-bold leading-tight">
            The Precision <br />
            <span className="font-serif italic text-moss font-light text-5xl md:text-6xl">Micro-UI Dashboard.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <DiagnosticShuffler />
            <div className="px-2">
              <h4 className="font-sans font-bold text-charcoal text-sm mb-1">Audit Intelligence</h4>
              <p className="font-sans text-charcoal/60 text-xs leading-relaxed max-w-[280px]">Real-time correlation of longevity markers translated into clear insights.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <TelemetryTypewriter />
            <div className="px-2">
              <h4 className="font-sans font-bold text-charcoal text-sm mb-1">Neural Stream</h4>
              <p className="font-sans text-charcoal/60 text-xs leading-relaxed max-w-[280px]">Continuous clinical parsing of localized inputs for optimized daily rhythms.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <AdaptiveRegimen />
            <div className="px-2">
              <h4 className="font-sans font-bold text-charcoal text-sm mb-1">Adaptive Regimen</h4>
              <p className="font-sans text-charcoal/60 text-xs leading-relaxed max-w-[280px]">Automated scheduling designed to adapt functionally to environmental stressors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
