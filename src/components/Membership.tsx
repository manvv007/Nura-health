import { ArrowRight, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Foundation',
    price: '$250',
    period: '/mo',
    description: 'Quarterly biomarker analysis and foundational optimization framing.',
    features: [
      'Comprehensive blood panel (quarterly)',
      'Basic epigenetic framing',
      'Clinical telemetry app access',
      'Standard protocol adjustments'
    ],
    highlighted: false
  },
  {
    name: 'Performance',
    price: '$850',
    period: '/mo',
    description: 'Continuous monitoring and dynamic protocol adaptations for peak output.',
    features: [
      'Monthly deep-tissue biomarker pull',
      'Continuous HRV & stress telemetry',
      'Adaptive regimen generation',
      'Priority physician integration',
      'Predictive injury modeling'
    ],
    highlighted: true
  },
  {
    name: 'Longevity',
    price: 'Custom',
    period: '',
    description: 'The ultimate system for lifespan extension and biological reversal.',
    features: [
      'Full genomic sequence analysis',
      'Real-time microbiome optimization',
      'Proprietary compound access',
      'Dedicated longevity team',
      'Annual biological age audit'
    ],
    highlighted: false
  }
];

export const Membership = () => {
  return (
    <section id="membership" className="py-32 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <p className="font-sans text-xs uppercase tracking-widest text-moss mb-4 font-bold">Access the System</p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Architect your baseline.<br/>
            <span className="font-serif italic font-light text-moss text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-moss to-moss/60">
              Optimize the future.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-[2.5rem] p-10 flex flex-col h-full transition-transform duration-500 hover:-translate-y-2
                ${tier.highlighted 
                  ? 'bg-moss text-cream shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'bg-white text-charcoal shadow-sm border border-charcoal/5 scale-100'
                }
              `}
            >
              <div className="mb-8">
                <h3 className={`font-sans text-xl font-medium mb-2 ${tier.highlighted ? 'text-cream' : 'text-charcoal'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-4xl md:text-5xl font-sans tracking-tight ${tier.highlighted ? 'text-cream' : 'text-charcoal'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-sm font-sans ${tier.highlighted ? 'text-cream/60' : 'text-charcoal/40'}`}>
                    {tier.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-cream/70' : 'text-charcoal/60'}`}>
                  {tier.description}
                </p>
              </div>

              <div className={`h-px w-full mb-8 ${tier.highlighted ? 'bg-cream/10' : 'bg-charcoal/5'}`} />

              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-clay' : 'text-moss'}`} />
                    <span className={`text-sm ${tier.highlighted ? 'text-cream/80' : 'text-charcoal/70'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`group relative flex items-center justify-center gap-2 overflow-hidden rounded-full w-full py-4 text-sm font-medium transition-transform duration-300 hover:scale-[1.02]
                  ${tier.highlighted 
                    ? 'bg-clay text-cream' 
                    : 'bg-charcoal text-cream'
                  }
                `}
              >
                <span className="relative z-10">Select Profile</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className={`absolute inset-0 z-0 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100
                  ${tier.highlighted ? 'bg-moss' : 'bg-moss'}
                `} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
