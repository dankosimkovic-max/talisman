import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Transformation } from './components/sections/Transformation';
import { Benefits } from './components/sections/Benefits';
import { Features } from './components/sections/Features';
import { MidCTA } from './components/sections/MidCTA';
import { Inclusions } from './components/sections/Inclusions';
import { SocialProof } from './components/sections/SocialProof';
import { UGCStrip } from './components/sections/UGCStrip';
import { Comparison } from './components/sections/Comparison';
import { FAQ } from './components/sections/FAQ';
import { ImageStrip } from './components/sections/ImageStrip';
import { FinalCTA } from './components/sections/FinalCTA';

/**
 * TALISMAN JEWELLERY - 12 Section Conversion Landing Page
 * Engineered for high-end conversion and luxury brand perception.
 */
const App = () => {
  return (
    <div className="bg-bg-primary min-h-screen selection:bg-accent-gold selection:text-bg-primary">
      {/* 1. Global Navigation */}
      <Navbar />

      <main>
        {/* 1. Above the fold (Hero + Proof Bar) */}
        <Hero />

        {/* 2. The Transformation */}
        <Transformation />

        {/* 3. Deep Benefits (Outcome-led) */}
        <Benefits />

        {/* 4. Features (Scannable Layer) */}
        <Features />

        {/* 5. Mid-page CTA + Proof */}
        <MidCTA />

        {/* 6. What's Included (Uncertainty Removal) */}
        <Inclusions />

        {/* 7. Social Proof (Layered Reviews) */}
        <SocialProof />

        {/* 8. UGC Strip (Social Momentum) */}
        <UGCStrip />

        {/* 9. Comparison Table (Decisive Clarity) */}
        <Comparison />

        {/* 10. FAQ (Objection Handling) */}
        <FAQ />

        {/* 11. Image Strip (Visual Immersion) */}
        <ImageStrip />

        {/* 12. Final CTA (Emotive Close) */}
        <FinalCTA />
      </main>

      {/* Footer & Meta Info */}
      <Footer />
    </div>
  );
};

export default App;
