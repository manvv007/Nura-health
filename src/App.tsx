import { NoiseOverlay } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Membership } from './components/Membership';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal font-sans selection:bg-moss/20 selection:text-moss">
      <NoiseOverlay />
      
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Membership />
      </main>

      <Footer />
    </div>
  );
}

export default App;
